import { $, addStyle, DOMUtils, utils } from "@/env";
import { Panel } from "@components/setting/panel";

export const DouYinVideoElementAutoHideInjectAttr = "data-is-inject-mouse-hide";

/**
 * 自动隐藏元素
 * @param delayTimeKey 延迟时间
 * @param selectors 选择器
 * @param opacityIsImportant 是否强制应用透明度
 */
export const DouYinVideoElementAutoHide = (
  delayTimeKey: string,
  selectors: string[],
  opacityIsImportant: boolean = true
) => {
  const opacityShowAttrName = "data-opacity-show";
  const opacityHideAttrName = "data-opacity-hide";
  const result: any[] = [];
  const delayTime = Panel.getDynamicValue<number>(delayTimeKey, Panel.getDefaultValue(delayTimeKey));

  const hideCSSText = (__delayTime__ = delayTime.value) => {
    const importantCSSText = opacityIsImportant ? " !important" : "";
    // 每个选择器生成独立的平面规则，避免不支持 :has() 或 CSS 嵌套的 Firefox
    // 将包含 .positionBox 的整组规则一并丢弃。
    return selectors
      .map((selector) => {
        return /*css*/ `
          ${selector} {
            ${__delayTime__ === 0 ? `opacity: 0${importantCSSText};` : ""}
            transition: ${__delayTime__ === 0 ? "none" : "opacity .3s linear"} !important;
          }
          ${selector}[${opacityHideAttrName}] { opacity: 0${importantCSSText}; }
          ${selector}[${opacityShowAttrName}], ${selector}:hover { opacity: 1${importantCSSText}; }
        `;
      })
      .join("\n");
  };
  const $style = addStyle(hideCSSText());
  result.push($style);
  const listenerId = Panel.addValueChangeListener(delayTimeKey, (key, newValue) => {
    DOMUtils.html($style, hideCSSText(newValue));
  });
  result.push(() => {
    Panel.removeValueChangeListener(listenerId);
  });
  const lockFn = new utils.LockFunction(() => {
    /** 视频信息列表 */
    selectors.forEach((selector) => {
      let $el: HTMLElement | undefined;
      try {
        $el = $<HTMLElement>(`${selector.trim()}:not([${DouYinVideoElementAutoHideInjectAttr}])`);
      } catch {
        // 某些 Firefox 版本尚不支持直播工具栏的 :has() 选择器。
        return;
      }
      if (!$el) return;
      if ($el.querySelector(`[${DouYinVideoElementAutoHideInjectAttr}]`)) return;
      if ($el.closest(`[${DouYinVideoElementAutoHideInjectAttr}]`)) return;
      $el.setAttribute(DouYinVideoElementAutoHideInjectAttr, "");

      let timeId: number = 0;
      let pointerInside = false;
      /**
       * 显示
       */
      const show = () => {
        clearTimeout(timeId);
        if (delayTime.value === 0) {
          // 默认隐藏的，强制显示
          if (!$el.hasAttribute(opacityShowAttrName)) $el.setAttribute(opacityShowAttrName, "");
        } else {
          // 移除隐藏
          if ($el.hasAttribute(opacityHideAttrName)) $el.removeAttribute(opacityHideAttrName);
          // 添加强制显示
          if (!$el.hasAttribute(opacityShowAttrName)) $el.setAttribute(opacityShowAttrName, "");
        }
      };
      /**
       * 隐藏
       */
      const hide = (isEnableDelayTime: boolean = false) => {
        if (isEnableDelayTime) {
          if (pointerInside) return;
          clearTimeout(timeId);
          timeId = window.setTimeout(() => hide(false), delayTime.value);
          return;
        }
        // Firefox 的 :hover 状态可能在工具栏重绘时短暂失效。
        if (pointerInside || $el.matches(":hover")) return;
        if (delayTime.value === 0) {
          // 这个是默认隐藏，移除显示的
          if ($el.hasAttribute(opacityShowAttrName)) $el.removeAttribute(opacityShowAttrName);
        } else {
          // 隐藏
          if (!$el.hasAttribute(opacityHideAttrName)) $el.setAttribute(opacityHideAttrName, "");
          // 移除强制显示
          if ($el.hasAttribute(opacityShowAttrName)) $el.removeAttribute(opacityShowAttrName);
        }
      };
      // 监听所属播放器和工具栏自身；工具栏内部移动时不要重启隐藏倒计时。
      const $player = $el.closest<HTMLElement>(
        '#sliderVideo, #slideMode, [data-e2e="video-detail"], .douyin-player, .playerContainer'
      );
      let lastMove = 0;
      const onPointerMove = (event: PointerEvent) => {
        const now = Date.now();
        if (now - lastMove < 150) return;
        lastMove = now;
        const rect = $el.getBoundingClientRect();
        pointerInside =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;
        show();
        if (!pointerInside) hide(true);
      };
      const onPointerEnter = () => {
        pointerInside = true;
        show();
      };
      const onToolbarPointerMove = () => {
        pointerInside = true;
        show();
      };
      const onPointerLeave = () => {
        pointerInside = false;
        show();
        hide(true);
      };
      $player?.addEventListener("pointermove", onPointerMove, { capture: true, passive: true });
      $el.addEventListener("pointerenter", onPointerEnter);
      $el.addEventListener("pointermove", onToolbarPointerMove, { passive: true });
      $el.addEventListener("pointerleave", onPointerLeave);
      const interObserver = new IntersectionObserver(
        (entries) => {
          const intersection = entries[0];
          if (intersection.isIntersecting) {
            // 进入视图 强制显示，然后延迟隐藏
            show();
            hide(true);
          } else {
            // 离开视图 直接显示吧，下次显示就不用强制过渡显示了
            // show();
          }
        },
        {
          root: null,
          rootMargin: "50px",
          threshold: 0.1,
        }
      );
      interObserver.observe($el);

      result.push(() => {
        clearTimeout(timeId);
        $player?.removeEventListener("pointermove", onPointerMove, true);
        $el.removeEventListener("pointerenter", onPointerEnter);
        $el.removeEventListener("pointermove", onToolbarPointerMove);
        $el.removeEventListener("pointerleave", onPointerLeave);
        interObserver.unobserve($el);
        interObserver.disconnect();
      });
    });
  });
  // 直播聊天的频繁 DOM 更新不需要每次都重新扫描视频控件。
  let scanTimer: number | null = null;
  const scheduleScan = () => {
    if (scanTimer !== null) return;
    scanTimer = window.setTimeout(() => {
      scanTimer = null;
      lockFn.run();
    }, 250);
  };
  const observer = utils.mutationObserver(document.body || document.documentElement, {
    config: {
      subtree: true,
      childList: true,
    },
    immediate: true,
    callback: scheduleScan,
  });

  result.push(() => {
    if (scanTimer !== null) window.clearTimeout(scanTimer);
    observer?.disconnect();
  });

  return result;
};
