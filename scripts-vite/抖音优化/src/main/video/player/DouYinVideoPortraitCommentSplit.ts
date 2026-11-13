import { addStyle, log } from "@/env";
import { Panel } from "@components/setting/panel";
import { createLayoutPicker, getLayoutMode, resolveLayoutMode } from "@/main/layout/DouYinLayoutPicker";
import { DouYinRouter } from "@/router/DouYinRouter";
import pickerCSS from "@/main/layout/css/layoutPicker.css?raw";
import splitCSS from "../css/portraitCommentSplit.css?raw";

const ROOT_SELECTOR = '#sliderVideo[data-e2e="feed-active-video"], ' + '#slideMode[data-e2e="feed-active-video"]';
const FEED_ROOT_SELECTOR = "#sliderVideo, #slideMode";
const SIDE_CARD_SELECTOR = "#videoSideCard, #videoSideBar";
const CHAPTER_SELECTOR = "#chapterVideoSideCard";
const RELEVANT_SELECTOR =
  "#sliderVideo, #slideMode, #videoSideCard, #videoSideBar, #relatedVideoCard, #chapterVideoSideCard, #chapterVideoCard";
const BOTTOM_CLASS = "dy-comment-layout-bottom";
const COMMENT_CLASS = "dy-comment-panel-open";
const CHAPTER_CLASS = "dy-chapter-layout-open";
const PREWARM_CLASS = "dy-comment-layout-prewarming";
const MEASURING_CLASS = "dy-comment-layout-measuring";
const LAYOUT_CLASSES = [BOTTOM_CLASS, COMMENT_CLASS, CHAPTER_CLASS, PREWARM_CLASS];
const LAYOUT_CLASS_SET = new Set(LAYOUT_CLASSES.concat(MEASURING_CLASS));
const LAYOUT_KEY = "dy-video-commentLayout";
const SEARCH_PATH_PATTERN = /(?:^|\/)search(?:\/|$)/;
type PanelKind = "chapter" | "comment";

/**
 * 视频侧栏（评论/章节要点）自动/下方/右侧布局。搜索结果的内嵌视频保持原生右侧布局。
 *
 * 不移动 video 节点，以免触发播放器重新加载；关闭评论区时恢复原始布局。
 */
export const DouYinVideoPortraitCommentSplit = {
  init() {
    log.info("启用视频评论区布局切换");
    const styles = [addStyle(splitCSS), addStyle(pickerCSS)];
    const pickers = new Map<HTMLElement, ReturnType<typeof createLayoutPicker>>();
    const prewarmedRoots = new Map<HTMLElement, PanelKind>();

    // 忽略测量及布局调整自身产生的 class 变更，仍监听抖音对原生 class 的修改。
    const nativeClassNames = (classes: string) =>
      classes
        .split(/\s+/)
        .filter((name) => name && !LAYOUT_CLASS_SET.has(name))
        .join(" ");

    const isOpenedPanel = ($panel: HTMLElement, $root: HTMLElement) => {
      const panelStyle = window.getComputedStyle($panel);
      if (panelStyle.display === "none" || panelStyle.visibility === "hidden" || Number(panelStyle.opacity) < 0.05) {
        return false;
      }
      if ($panel.matches('[hidden], [aria-hidden="true"], [data-state="closed"]')) return false;

      const panelRect = $panel.getBoundingClientRect();
      const rootRect = $root.getBoundingClientRect();
      const visibleHeight = Math.min(panelRect.bottom, rootRect.bottom) - Math.max(panelRect.top, rootRect.top);
      const visibleWidth = Math.min(panelRect.right, rootRect.right) - Math.max(panelRect.left, rootRect.left);
      return (
        panelRect.width >= 100 &&
        panelRect.height >= 100 &&
        rootRect.height >= 150 &&
        visibleHeight >= 80 &&
        visibleWidth >= 80
      );
    };

    const getOpenedSidePanel = ($root: HTMLElement): PanelKind | null => {
      const $player = $root.querySelector<HTMLElement>(".playerContainer");
      if (!$player?.querySelector("video")) return null;

      // 侧栏一旦被 CSS 撑满，直接读宽度就会把“已关闭”误判为“已打开”。
      // 侧栏宽度与播放器的原生布局相关，须一起恢复后才能正确测得打开状态。
      // 在同一个 JS 任务内完成测量并还原，浏览器不会绘制中间状态。
      const applied = LAYOUT_CLASSES.filter((name) => $root.classList.contains(name));
      $root.classList.add(MEASURING_CLASS);
      $root.classList.remove(...LAYOUT_CLASSES);
      try {
        const $chapter = $root.querySelector<HTMLElement>(CHAPTER_SELECTOR);
        if ($chapter?.querySelector("#chapterVideoCard") && isOpenedPanel($chapter, $root)) return "chapter";
        const commentOpen = [...$root.querySelectorAll<HTMLElement>(SIDE_CARD_SELECTOR)].some(
          ($panel) => $panel.querySelector("#relatedVideoCard") && isOpenedPanel($panel, $root)
        );
        return commentOpen ? "comment" : null;
      } finally {
        $root.classList.add(...applied);
        $root.classList.remove(MEASURING_CLASS);
      }
    };

    const isInlineSearch = () =>
      SEARCH_PATH_PATTERN.test(window.location.pathname) ||
      document.querySelector("#search-body-container, #search-result-container") != null;

    const isUnsupportedPage = () => DouYinRouter.isLive() || isInlineSearch();
    const syncPreference = () => !isUnsupportedPage() && resolveLayoutMode(getLayoutMode(LAYOUT_KEY)) === "bottom";
    const clearPicker = ($root: HTMLElement) => {
      $root.classList.remove(...LAYOUT_CLASSES, MEASURING_CLASS);
      pickers.get($root)?.destroy();
      pickers.delete($root);
    };

    const update = () => {
      const skip = isUnsupportedPage();
      const bottom = syncPreference();
      const nextActiveRoots = new Set<HTMLElement>();

      if (!bottom) {
        for (const $root of prewarmedRoots.keys()) {
          $root.classList.remove(...LAYOUT_CLASSES);
        }
        prewarmedRoots.clear();
        navigating = false;
      }

      if (!skip)
        for (const $root of document.querySelectorAll<HTMLElement>(ROOT_SELECTOR)) {
          const nativePanel = getOpenedSidePanel($root);
          const prewarmedPanel = bottom && prewarmedRoots.get($root);
          // 原生侧栏一旦真正打开就结束预热，否则用户紧接着点关闭时会被预热状态锁住。
          if (prewarmedPanel && nativePanel === prewarmedPanel) {
            prewarmedRoots.delete($root);
            $root.classList.remove(PREWARM_CLASS);
          }
          const openedPanel = prewarmedPanel || nativePanel;
          if (!openedPanel) continue;
          $root.classList.toggle(BOTTOM_CLASS, bottom);
          $root.classList.toggle(COMMENT_CLASS, bottom && openedPanel === "comment");
          $root.classList.toggle(CHAPTER_CLASS, bottom && openedPanel === "chapter");
          let picker = pickers.get($root);
          if (!picker?.element.isConnected) {
            picker?.destroy();
            picker = createLayoutPicker(LAYOUT_KEY);
            $root.appendChild(picker.element);
            pickers.set($root, picker);
          }
          picker.update();
          nextActiveRoots.add($root);
        }

      for (const $root of pickers.keys()) {
        if (!nextActiveRoots.has($root)) clearPicker($root);
      }
    };

    let frameId: number | null = null;
    let settleTimerId: number | null = null;
    let closeTimerId: number | null = null;
    let prewarmTimerId: number | null = null;
    let navigating = false;
    let observerSuspended = false;
    const scheduleUpdate = () => {
      syncPreference();
      if (frameId === null) {
        frameId = window.requestAnimationFrame(() => {
          frameId = null;
          update();
        });
      }
      // 评论面板可能带有 150ms 展开动画，动画结束后再检查一次。
      if (settleTimerId !== null) window.clearTimeout(settleTimerId);
      settleTimerId = window.setTimeout(() => {
        settleTimerId = null;
        update();
      }, 180);
      // 动画结束和短暂的状态保持期之后再检查，确保点击关闭能恢复播放器布局。
      if (closeTimerId !== null) window.clearTimeout(closeTimerId);
      closeTimerId = window.setTimeout(() => {
        closeTimerId = null;
        update();
      }, 900);
    };

    const containsRelevantElement = (node: Node) => {
      if (node.nodeType !== 1) return false;
      const $element = node as Element;
      return $element.matches(RELEVANT_SELECTOR) || $element.querySelector(RELEVANT_SELECTOR) != null;
    };
    const observer = new MutationObserver((mutations) => {
      // 从视频页切换到直播间时，直播聊天室的频繁更新不应触发视频布局检测。
      if (isUnsupportedPage()) {
        observer.disconnect();
        observerSuspended = true;
        scheduleUpdate();
        return;
      }
      const hasRelevantChange = mutations.some((mutation) => {
        const $target = mutation.target as Element;
        if (mutation.type === "attributes") {
          // 忽略播放器进度条等频繁变化的样式属性。
          if (mutation.attributeName === "class" && $target.matches(FEED_ROOT_SELECTOR)) {
            return nativeClassNames(mutation.oldValue || "") !== nativeClassNames($target.className);
          }
          return $target.matches(RELEVANT_SELECTOR);
        }
        if ($target.matches(RELEVANT_SELECTOR) || $target.closest(`${SIDE_CARD_SELECTOR}, ${CHAPTER_SELECTOR}`))
          return true;
        return [...mutation.addedNodes, ...mutation.removedNodes].some(containsRelevantElement);
      });
      if (hasRelevantChange) {
        // 滚动期间如果抖音才创建下一视频，也在首次绘制前预热它。
        if (prewarmTimerId !== null && navigating) {
          for (const $root of document.querySelectorAll<HTMLElement>(FEED_ROOT_SELECTOR)) {
            if (!prewarmedRoots.has($root)) addPrewarmRoot($root, "comment");
          }
        }
        scheduleUpdate();
      }
    });
    const startObserver = () => {
      if (!document.documentElement || isUnsupportedPage()) return;
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ["class", "style", "data-e2e", "aria-hidden"],
      });
      observerSuspended = false;
      scheduleUpdate();
    };
    const addPrewarmRoot = ($root: HTMLElement, kind: PanelKind) => {
      $root.classList.add(BOTTOM_CLASS, PREWARM_CLASS);
      $root.classList.toggle(COMMENT_CLASS, kind === "comment");
      $root.classList.toggle(CHAPTER_CLASS, kind === "chapter");
      prewarmedRoots.set($root, kind);
    };
    const settlePrewarm = () => {
      if (prewarmTimerId !== null) window.clearTimeout(prewarmTimerId);
      prewarmTimerId = window.setTimeout(() => {
        prewarmTimerId = null;
        navigating = false;
        for (const $root of prewarmedRoots.keys()) {
          $root.classList.remove(...LAYOUT_CLASSES);
        }
        prewarmedRoots.clear();
        update();
      }, 850);
    };
    const onClick = (event: MouseEvent) => {
      const $target = event.target;
      if (!($target instanceof Element)) return;
      const $root = $target.closest<HTMLElement>(FEED_ROOT_SELECTOR);
      if (syncPreference() && $root) {
        const $chapter = $target.closest<HTMLElement>('[data-e2e="chapter-container"]');
        // “下一章”与章节标题位于同一容器，只有标题才会打开章节侧栏。
        const chapterTitle = $chapter?.firstElementChild?.firstElementChild;
        const kind: PanelKind | null = chapterTitle?.contains($target)
          ? "chapter"
          : $target.closest('[data-e2e="feed-comment-icon"]')
            ? "comment"
            : null;
        // 在原生点击处理前确定目标侧栏，避免首次打开章节时误拉出隐藏的评论区。
        if (kind && getOpenedSidePanel($root) !== kind) {
          navigating = false;
          addPrewarmRoot($root, kind);
          settlePrewarm();
        }
      }
      if ($target.closest(RELEVANT_SELECTOR)) scheduleUpdate();
    };
    const prewarmNextVideo = (event?: WheelEvent) => {
      if (!syncPreference()) return;
      if (event?.target instanceof Element && event.target.closest("#relatedVideoCard, #chapterVideoCard")) return;
      const $active = document.querySelector<HTMLElement>(ROOT_SELECTOR);
      if (!$active || getOpenedSidePanel($active) !== "comment") return;
      navigating = true;

      // 抖音会先挂载下一视频的右侧卡片，随后才把 feed-video 改成 feed-active-video。
      // 滚动事件在切换前触发，把分屏样式预先给已预加载的相邻视频。
      for (const $root of document.querySelectorAll<HTMLElement>(FEED_ROOT_SELECTOR)) {
        if ($root === $active) continue;
        addPrewarmRoot($root, "comment");
      }
      settlePrewarm();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLElement && event.target.closest("input, textarea, [contenteditable]")) return;
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp"].includes(event.key)) prewarmNextVideo();
    };
    const onTransitionEnd = (event: TransitionEvent) => {
      // 章节侧栏使用 300ms 的滑出动画，结束后立即恢复未分屏状态。
      if (event.target instanceof Element && event.target.matches(CHAPTER_SELECTOR)) scheduleUpdate();
    };
    const onVisibilityChange = () => {
      if (!document.hidden) scheduleUpdate();
    };

    syncPreference();
    update();
    // 以 DOM 变化触发为主，低频轮询只用于页面样式变化等兜底场景。
    const intervalId = window.setInterval(() => {
      if (isUnsupportedPage()) {
        if (!observerSuspended) {
          observer.disconnect();
          observerSuspended = true;
        }
      } else if (observerSuspended) {
        startObserver();
      }
      update();
    }, 3000);
    if (document.documentElement) startObserver();
    else document.addEventListener("DOMContentLoaded", startObserver, { once: true });
    document.addEventListener("click", onClick, true);
    window.addEventListener("wheel", prewarmNextVideo, { capture: true, passive: true });
    window.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("transitionend", onTransitionEnd, true);
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    window.addEventListener("pageshow", scheduleUpdate, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    const modeListenerId = Panel.addValueChangeListener(LAYOUT_KEY, scheduleUpdate);

    return [
      ...styles,
      () => {
        observer.disconnect();
        document.removeEventListener("DOMContentLoaded", startObserver);
        document.removeEventListener("click", onClick, true);
        window.removeEventListener("wheel", prewarmNextVideo, true);
        window.removeEventListener("keydown", onKeyDown, true);
        document.removeEventListener("transitionend", onTransitionEnd, true);
        window.clearInterval(intervalId);
        if (frameId !== null) window.cancelAnimationFrame(frameId);
        if (settleTimerId !== null) window.clearTimeout(settleTimerId);
        if (closeTimerId !== null) window.clearTimeout(closeTimerId);
        if (prewarmTimerId !== null) window.clearTimeout(prewarmTimerId);
        window.removeEventListener("resize", scheduleUpdate);
        window.removeEventListener("pageshow", scheduleUpdate);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        Panel.removeValueChangeListener(modeListenerId);
        for (const $root of pickers.keys()) clearPicker($root);
        for (const $root of prewarmedRoots.keys()) {
          $root.classList.remove(...LAYOUT_CLASSES, MEASURING_CLASS);
        }
        prewarmedRoots.clear();
      },
    ];
  },
};
