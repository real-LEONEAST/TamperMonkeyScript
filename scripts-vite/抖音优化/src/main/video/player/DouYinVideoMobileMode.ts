import { $, addStyle, DOMUtils, log, utils } from "@/env";
import { DouYin } from "@/main/DouYin";
import { DouYinGestureBackHashConfig } from "@/main/DouYinGestureBackConfig";
import { DouYinRouter } from "@/router/DouYinRouter";
import { DouYinUtils } from "@/utils/DouYinUtils";
import { addBlockCSS } from "@components/env.base";
import { Panel } from "@components/setting/panel";
import { GestureBack } from "@components/utils/GestureBack";
import Qmsg from "qmsg";
import MobileCSS from "../css/mobile.css?raw";

export const DouYinVideoMobileMode = {
  init() {
    Panel.execMenuOnce(["mobileMode", "dy-video-gestureBackCloseComment"], () => {
      return this.gestureBackCloseComment();
    });
    Panel.execMenuOnce(["mobileMode", "repairProgressBar"], () => {
      const result: HTMLStyleElement[] = [];
      Panel.onceExec("repairProgressBar", () => {
        result.push(...this.repairVideoProgressBar());
      });
      return result;
    });
    DOMUtils.onReady(() => {
      Panel.execMenuOnce("mobileMode", () => {
        return this.mobileMode();
      });
    });
  },
  /**
   * 手机模式
   */
  mobileMode() {
    log.info("启用手机模式");
    const result: HTMLStyleElement[] = [];
    DouYin.initialScale();
    /* 屏蔽底部视频工具栏右侧的?帮助反馈按钮 */
    result.push(addBlockCSS("img#douyin-temp-sidebar")!, addStyle(MobileCSS));
    Panel.onceExec("repairProgressBar", () => {
      result.push(...this.repairVideoProgressBar());
    });
    if (DouYinRouter.isVideo()) {
      result.push(
        addStyle(/*css*/ `
            #douyin-right-container .parent-route-container [data-e2e="video-detail"]{
              min-width: unset !important;
              padding: 0 10px;
    
              & .basePlayerContainer{
                 min-width: unset !important;
              }
              & [data-e2e="detail-video-info"] > div{
                flex-flow: wrap;
              }
            }
          `)
      );
    }
    return result;
  },
  /**
   * 手势返回关闭评论区
   */
  gestureBackCloseComment() {
    log.info(`手势返回关闭评论区`);
    const gestureback = new GestureBack({
      hash: DouYinGestureBackHashConfig.videoCommentDrawer,
      useUrl: true,
      beforeHistoryBackCallBack(isUrlChange) {
        if (isUrlChange) {
          closeComment();
        }
      },
    });

    const $closeSelector = `#relatedVideoCard .semi-tabs + div svg:has(path[d="M22.133 23.776a1.342 1.342 0 1 0 1.898-1.898l-4.112-4.113 4.112-4.112a1.342 1.342 0 0 0-1.898-1.898l-4.112 4.112-4.113-4.112a1.342 1.342 0 1 0-1.898 1.898l4.113 4.112-4.113 4.113a1.342 1.342 0 0 0 1.898 1.898l4.113-4.113 4.112 4.113z"])`;
    /**
     * 关闭评论区
     */
    function closeComment() {
      const $close = $<HTMLElement>($closeSelector);
      if ($close) {
        const rect = utils.getReactInstance($close);
        if (rect) {
          const fn = rect.reactProps?.onClick;
          if (typeof fn === "function") {
            fn();
          } else {
            Qmsg.error("调用关闭评论区按钮的onClick函数失败");
          }
        } else {
          Qmsg.error("获取关闭评论区按钮react信息失败");
        }
      } else {
        Qmsg.error("未找到关闭评论区的按钮");
      }
    }

    const result1 = DOMUtils.on(
      document,
      "click",
      `.xgplayer div[data-e2e="feed-comment-icon"]`,
      () => {
        log.info(`手势 => 打开评论区`);
        DOMUtils.waitNode($closeSelector, 10000).then(($el) => {
          if (!$el) {
            return;
          }
          log.info(`手势 => 评论区出现`);
          gestureback.enterGestureBackMode();
        });
      },
      {
        capture: true,
        overrideTarget: false,
      }
    );
    const result2 = DOMUtils.on(
      document,
      "click",
      $closeSelector,
      () => {
        log.info(`手势 => 关闭评论区`);
        gestureback.quitGestureBackMode();
      },
      {
        capture: true,
        overrideTarget: false,
      }
    );
    return [result1.off, result2.off];
  },
  /**
   * 修复进度条按钮
   */
  repairVideoProgressBar() {
    log.info("修复进度条按钮");
    const result: any[] = [
      addStyle(/*css*/ `
          /* 禁止触发touch事件，因为会影响到按钮点击不到 */
          @media screen and (max-width: 600px) and (orientation: portrait),
            screen and (max-height: 600px) and (orientation: landscape) {
            xg-outer,
            xg-inners {
              pointer-events: none;
            }
          }
          `),
    ];
    const mobileMode = Panel.getDynamicValue("mobileMode");
    const repairProgressBar = Panel.getDynamicValue("repairProgressBar");
    result.push(mobileMode.destory, repairProgressBar.destory);
    /**
     * 检测是否启用
     */
    const checkEnable = () => {
      return mobileMode.value || repairProgressBar.value;
    };
    const isMobile = () => {
      if (DouYinUtils.isVerticalScreen()) {
        // 竖屏
        return window.innerWidth <= 600;
      } else {
        // 横屏
        return window.innerHeight <= 600;
      }
    };
    DOMUtils.onReady(() => {
      // 让拖拽进度条的按钮拖拽时修改进度条高度
      DOMUtils.on(
        document.body,
        "touchstart",
        "xg-progress",
        (event, $click) => {
          if (!checkEnable()) return;
          if (!isMobile()) return;
          const $xg_outer = $click.querySelector<HTMLElement>("xg-outer");
          if ($xg_outer) {
            $xg_outer.style.height = "6px";
          }
        },
        {
          capture: true,
          overrideTarget: false,
        }
      );
      // 让拖拽进度条的按钮拖拽时修改进度条高度
      DOMUtils.on(
        document.body,
        "touchend",
        "xg-progress",
        (event, $click) => {
          if (!checkEnable()) return;
          if (!isMobile()) return;
          const $xg_outer = $click.querySelector<HTMLElement>("xg-outer");
          if ($xg_outer) {
            $xg_outer.style.height = "";
          }
        },
        {
          capture: true,
          overrideTarget: false,
        }
      );
    });

    return result;
  },
};
