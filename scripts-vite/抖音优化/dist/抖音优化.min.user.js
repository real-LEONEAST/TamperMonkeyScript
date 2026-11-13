// ==UserScript==
// @name         抖音优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.11.13.2
// @updateURL    https://raw.githubusercontent.com/real-LEONEAST/TamperMonkeyScript/release/scripts-vite/%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96/dist/%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96.meta.js
// @downloadURL  https://raw.githubusercontent.com/real-LEONEAST/TamperMonkeyScript/release/scripts-vite/%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96/dist/%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96.user.js
// @author       WhiteSevs
// @description  视频过滤，包括广告、直播或自定义规则，屏蔽登录弹窗、自定义视频清晰度、禁止自动播放、自动进入全屏、双击进入全屏、屏蔽弹幕和礼物特效、手机模式、自定义视频和评论区背景色等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAF19JREFUeF7tnQl8U1X2x38vabqlLWOFrpStUMrWsrdUEARkEREQCoiAghswHQdQEFREGXfhD24MjOiMIqKD4IyICCObFCgt1JaC0ELpmq0L3ZLuyft/bkpL8pI07yUvaVre/Xz6KTT3nnvOud93381dzqXAU+riGzJarMMoGogGqD4A3RXAPQC8eKribhSjBVBJA0UUkAfgGgXq90YRzpZUybL4cAhlj5BAn9DxoOkFAGYB8LdHllCWsweuAfgvDWpvkUaWzrn07QI2ARDkExpPg14FGqNsrVgox58HaFCHAd2HRRrFEa5SOQEQ7B08VEdR7wCYxLUiIb8TPEDjB0qke1WpVv7BtjbWAARJQ9bQwPtsBQv52tID9CqVRrGNjQZsAKACpSG7ATzORqCQxzU8QIHerdQoFlvTplUAuvp19W/Q0gcAeqw1QcLnrugB+qRELJ5dWFl4y5J2FgFoanztYYAa6YqmCTqx9QCdLBGLp1qCwCIAgdLgEwA1jm01Qj5X9gB1SqWRPQCAZmppFoAgafBXNKhFrmySoBtnD+xRaeQLrQIQKA1eCVBbOYsXCri8ByhgrVIj/8BQUaMeIMgnqD9Ni664vCWCgjZ7QETTwxTVitRmAUYABHqHHACln9YVUsf1wFGVRj7ZBIAAafBkCtQvHddu85aJ40bYbbL2bIrdMpwpgKKouUq1bB+ps6UHCJCG/kyBnupMRVyhLj/VZbvUqN/5FWpfa2cTpBTOqdTyuBYAAqSh0RToNLs80U4L2wtAw76DqElY3/6sp6gJKrXsuL4HCJSGvAvgpfZnhf0a2wtA45GTqF6cYL8izpfwuUojf7oZgKsAIp2vQ9vXyARg2NVsTkr1u5aPtJWvmpQ5W1vBSU4bZL6l0sjvpTr7hkaIdXRmGyjgElUyARh+LRvfDBvOWrfClEvotGQTfChRS5knVVdxpNri9Dtr2Y7OqBNhDBUkDX2SBv1PR1fmqvKZAIy4lo09HAAgdmWMegwD1WT3VlNKKM7CfnWxq5rcoheZGCJLvR8CeN7ltXWQgkwARl7LxtccAUhauh4xKXdeHa+U3sQXlQoHacyr2D0EALKN6K7d4cMEIObaTeweNoyTl7P2/4I+r3/RUmZzWT62lBdwktE2malkKkAaco0C+raNAm1fKxOA2Myb+GooNwCIFckPLMaIklq9QadqyjFf2S5m1OWkByCjFbJ9+65MTABGZd7ElzYAcGnHNxj06X/0PizWNiAqP7k9+LOGANAIQNwetHWEjnwBQHS7GLcAQ6uIO4EJsjT8Ua9xhMq8yiQAmGwS4LUGFxfGBCAuMwf/GjrUJq1vHDyGLuu3w48S441budhRIbNJjjMLCQAw1gLuy8rBP4fYBgBpuLPLNmDUmUxcqKvCdPklZ7alTXUJADAAGJ2Vgy/sAMDwVRCvvIzEGteeERQAYAAwJisHn9sJQPOr4LCmFCuLr9v0ZDqrkAAAA4D7s3Kxa8gQu/2f/vFX6LLjAN4szcUBF54VFABgADD2ei4+G2w/AISggp9PomrtVswtSEeJtsFuqBwhQADAgQCQBqu/no+f5iZgxfWLjmg/u2UKADAAGHc9D/8YPNhuxxoJKK/CW7OfxsfnE/mVy4M0AQAGAA9cz8NOvgEgDUXTmLNtO85s/gR0RSUPTcePCAEABgDjb+RhRzTPPYBBWy0+cRKnjv+G+m8OgFa1/ZKxAAADgAk38vB3BwJAWFiReAb/69UV2sRkNJ5OQsOPR0GXts0GEgEABgATb+Rje3Q0P/1rK1I+/y0R2yN6oMpXqs/VeDYFdKECOpkCdHEp6JJS6IpvwdFbzgUAGAA8mJ2PT6McDwBp9CtZ2fiopAgnos1vx9TMWiIA4OhHkbkY5EwAmm376XwK9rhRuBgZbmSuAICjWx8AE4BJ2fn4xEk9ANO8vYnncBxapPcIQ/k9fhAAaAMAJmcX4OOoKCfUbLkKlaoY57NvomrLl0g5ew5FjQ0o0tajSNv0m88kjAEYY4ApNwvw0aC2BaC5gS8Pj8eAOuMQDsE5Z/hsfwgAMACYerMAHwoA8AqZSwtjjgEeulmAbQIALt1mvCpnCkAhtg0axGsdtgoTXgG2eo5DOSYA03IKsXUgewAq8mTo1D2UQ43sswoAsPeVzTmZADycU4j/4wDA5S/2oTpXhpGbVtqsg6WCAgC8u9RUIBOA6TkybBk4kHXNBIABW/chuYsX7n1+IXrPfJB1WWsZBQCseYiHz5kAPJIjw2YbACCqqGktMgb3xJCPNsDLv5Pd2gkAMFxIBQdCPKgfRIFdQJGfoC76f8PDHaiuAa2pBq2uBtQaNBw7zWoenQnAjFwZPhjAvQcwVPWGWIvioX3Q7Zm56DrK9i3mAgDkyFLcCLiNHw23cXH6xmeb2E6jOgKAVSXXscm/FzwoEdI7e0E8JQ7D1i1jq3pLvrsWAFG3UEgemwXJzKkQ9erO2XGkgK0AzMyV4/0BA1jX2TwGMCwwW3EZJEJIQqeueMW/Sf8ckRaKAd3h98AIRC6cBYmXp9U67joARJG94U4a/rFZoDr5WXVQaxlsBWBWrhzv8QQA0a+HxFMPwuO+gS3qVtJa3PDzQF1UOAKmjUPv6RPMmnLXAEBJveHx+ov6xodEwrnhO5eUIbi0DKHqanTT0ejr44OeL3yEvIIClOkaUU1rUa3T4d0ycu+ScWK+Ah7Nk+Pd/vz0AIY1TfS+B3N9AjBd2tlEBx1o1NA0akGjjiI/FBrETT8dfi1A1LMbPLe8Drf72Eeld6+tw8jLWZgAEaYOGgB/f9PT7edHxmNkjfWFFCYAs/PkeMcBADS3+jAPX8z1DUC8TwC8DOIKsaW+Qy0GiWOGwvubv4PyadoW1VoKkasQU6BErMQdU4YPgZdX67fRHY+NxwMa7gDMyVPg7f79ralzZ6B2ex7A3BigNSG9JF76HmGStz/6uXuzrq/DACB5ZDK8Ptti1XC/SjWeysrF8rFjrOY1zHBoVDweUnMHID5fgbf6OR4AQ10Dxe6I8vBBlLsU0eS3hw/I38ylDgGA53sb4P7kPKsNOj31Cp4L7YqIXj2s5mVm2B8Xj0er2gcA5ozzpkS4Vyxp+eksavr3dp5jDjh9P4DXzs2QzJzSaoP2y87HMzX1eDjG9kDO394Xj3mV3AGYm6/Am07uATjTzWMBpwLgvmQ+PN81jappaM/ylAwsj42Bp6eHXWbaCsC8fCX+1o/9hFNr8wB2GeCkwk4DgHzH9znVFETJUlqeeBGrJk/kxXRbAZhfoMSmSAEAXhrBUIjPyQMQ9YuwKPe53T/ghWVLeavXVgAeK1DiDQEA3tpBL8jzg41wXxxvUeizu77Di3/lPlfempa2ArCgQInXBQD4A0Aydwa8Pn7LosBlPx3H6nmz+avwtiTbAVDh9Uj2gdOFMUArTUf5+kB6aA9EfY1PvDQXWZ5yGavGcft+z5YUWwF4vFCFjX0FANj6udV8Hi+ugMeaFWbzRJ1Pw7f33w83NztjVNbWAeVVQFkV0NAIRPYA3CWwFYCFhSq8JgBgf/uTp548/aQXYCZdbgH+cUuN8WP019ZwT9dy8cdn38LvdDpCa+6EaW8WVCemIBPR6MUIy2NuFo25FrCosAgb+rIPnSy8Aiw0n+db6+H+tPkLxxd8/zNef4L7ZeSl+/8HzdbdCKtoCsrMNbEBYHFhEV4VAODqWtP8Pkk/g6z0MVOPU0n4NjbW7AqexVq1OmQl/A19Eu2LwM0GgCdkRXglQugB7CLAbcIY/SqfufT++QzMHH8/e/nZhchZ8gp6lNWwL2MhpwCAqWMcMhNoqfufkXIJH4wby74hswshm78GIbWm73mmkNS6Kn1AxtQ6Ncp1DSjTNqJc14ieEk/0dPPS//7czC0ezDHAk7JivBxhecKKWa8wBjDTnD6//dfsV79d1wtw/2CWJ2+ra5E/bgnCzAzyDKskjb67SomkWtsibzEBWCIrxnoBAPYPKTMnGf0TAJgpXF6Ew33Yv1szlr6CgSmtx9ndVl6A98rybVfWTICIpfJirOsj9AA2O1WycDa8trxhUn5ZRhZWx8awkluRdhV+iza2mndYwQXIG+tYyWstE7MHeEpejJcEAGz3q9cX2yCZZrqit09WiuiI3qwEX0zYhKGnLN/pO7QgBYpGfiJlMAF4Wl6CtX36sNKTZBLGAAxXSY9+B3G08a5art3/leFz0d/Cw9285551C1nJKADA85Ux5r7/L0+9glVjRrNqs8zTyYhYsdls3rdu5eGTikJWcthmYgLwjKIEa3oLPQBb/5nk8716GhRjm/aeHAVGDGS30fL7v7yG2SevmchNq1NjuuISGml+rzhiAvCsogQvCgDY3P7wk6UDjAWeQ0WV6NOT3RGvg8texsNnbpgo8FxRJn7UlNiumIWSTACeU5Tihd7sxirCGMCMU81dx36mRocune9l1XhHn3oJDybnGOW92VCD+wpTWZXnmomp7zJlKVaHCwBw9WNLfnMA/OHhCzc3N1YyTy56EWPTjL/bkyef9AB8J3Lc3DftmJHY5cpSrBIAsN3VTACkmmr8HsA+hs7/lqzFxAu5Rgq8VpqDzyrltitloSQ5ei79wfji9BXKW1gZbn4Dizkx5zduw8gDZ40+4vubCu+GGwjkfS2ACUCwshinwtnPrKUc+hXD1/3DyOZ5yiv4raacdz+Ym7TiCsCJmcsxLrtUAKDZA74ZJ0EF3DkBG5mdjx85xt49FjkF4yV3joc7agDo+c4rcF/6mFHjPS8vQQKHiaCk4XMQUycykjFNfglkcao9JN57AO+9O/QRPZrTkMyb+I7jZcy7Jy3GQsWdTR/rSrPxZaWSV3+S+AM+p/+rDzVjmF7OLsSTUezDxGX3fwS9xMbBHkYXpiK7wf7la14NtiCMdwA8N6yGe8Kd/f3heXIc5nDcmuh5YOeXGLJ1vz64AknkXP+H5fxOAEkWPAqvrZtM3PJOZi5mD2V3bVz66fOIWmF6wHVgfjJKXfSaOKbBvAPAdGyXkjKc6d6LM8xfT3kCj8uaniJHfAvw3rMdbhNNN6Z8kpmHSUPZ3Rl0eNM2TNlnPAAk+oblnuV9woqzA1kW4B0A8ZBBkP6yt6V6j7p6ZPjfCY/CUi+kpaajZv46xHr4oqCxDiMLLrAtajWfJ4lGsvxJs/m+zCrAqCHs9izsm5uAOVeLjOSotPUYnJ9iVQdXycA7AMQw7+93wW1MbIuNp9QNCA4M4GzzD39+FQ+dugZ3SoSxhb8jq6GaswxmAfHwaP1uZXMpLCkVxyaYj9djLv+h4bPwUJ1xSJvk2krMUGTYraezBDgEADKyJiPs5vThlWxMHTncJpu+W7kRsUd+xy+aW9h4y3iGkKtAMuDzvXTCYrFlv57F6hnTWIk9tWsvYrbt14eCM0z71EV43sUvjDbU1yEAUMEB8Ek82BL65dmUDLw4jsNGUEYT/Oulv6HfgTN6AMiikC3JbdI4eO/+xGJRt0I5jnh3QlhYV1biD49fhCnFpmvWm8vysaW8gJUMV8jkEACIYWSETQaEJI1Pv4odcTYeArntpezMG8h4Yj2WXTYddLXmSFFYCCTzZlo8odRc9pnTF7BmCrs4v1eOn0FAwmZ0FptGNBtTmIob7eQrILHdYQC4jR4J7/1f6P3bqaIKR7074Z4/2R8/9+W3P8Hu3Ew07DsINFi+kVs8MBKSeTP0jU918m31YXsoKxfbOFwZ/+ucBEzINB78kQou1akxWZ7uCg82ax0cBgDRwHBS6L30LMyKY7cn0Jr2Pfd+CxJkqvG3c6DLKpp+yisgCugMqkcYyFMvCmO//pAlNQ0zZ0mH0nwZqqb+Gd1FpkGc3i7Lw8c8z1dY84W9nzsUAMmch+H16bt6Haf9fgVbR7PbFWTNqAvJFzEnKQnuTy2wlrXVzwedPo/9U1qPV8QUkLj8NdyXaLphheSbJEtHRr1tYxS7DLGjsEMB0PcC+z+H2+gY/WvgkMQbAV1MI2Xaon9VZRWe27ELydMfBIktzCk1NmJRSgY2TBzPqVjZzXyUzlqFcJ3piWYy90/WANpbcjgA5Hu39/efg/LyxKoLlznH+7Pm0P8cPIyk2loc6x6MigGtnzugi0oQn5WL+d26Iaof+zMKzTokTVqKGIX5J3xNSTa+ruJ3vcKa7Xx87nAAiJLuyxbD84216FGgwMGe4fDwsC8CmCXDz6VdwpnyclRSFKpEFKokboCORoSmBj0oCpEBXRAVxf4uAMN6kl54GzFH08xW3R4Hf82GOAUAUhmJCkoGbq+lXsVCW+MC8IG8DTKyfzqOe9Z9inso88Es2uvTT1zhNABIZT6//4rQ+kZ87eePMA6jdBvajNciabHzEa3Rdbin3+kAkAp9s87ikQuXseURdlOuvLakDcLOLFiNuAzLS9Ht+elvEwBIpdKj/8Y7VbWYO5n9wosNbWd3kbOPJmDUddMJn2bB/9GUYLkDNqvarTgHAU59BRjqFfTdZ9gV1g3DbRyUcbDRpqznpj2L2HzL+xBzGmoRV3jRJtmuVKjNACBOGPb+RvxzzqMIMNhD6ArOSXpwKWKUrU/oTJCl4Y96jSuoa48OWgIAWWRv/fYFe6qwUvbhZUuwK2EF0CPEgbWwF508bjFGlLYehOovxVn4Xl3MXqjr5iwjAMgAtKn3n+kXjUXjJyDivRfazFUX3vwU0gMnENlgvL7PVGhDaQ52OeCMQlsYTgOZVKA09DxAs7+wx0GaksuU1vbsD9Gf5yN80QwH1WIq9ureg9Bs/w7Dyq3HG5guv4QL7WS7N0sHHiU9wNcAuAftY1kDl2wEgvc7hyOrTzBCVj+BsPsdx+WVf30P9e5DGFlk/T1OtnmtLLkOMvDrYOkjKkgasoYG3ncVw8gFSiv/FIZHpJ2R4Qmoo8IROGsiwh+2/yujWlWC63t+hPbAMQyrsLyXwNAXhzSlWF1yA5W6RldxEW96UKCWUF18Q0aLdDjNm1SeBJGLFgkIXd2a1g1kaERBty4QR/eBf+xg9Jw8FmIPy3cM1mlqoEzNQFHaVVQnpsLvphwRNTTIXTxsUka9BjsrZNjfMQZ7Zk3Wiqi++kt1AqUh5HCbPxvHODNPkNgdS/2CscQvGD4i03n4PKoRanfjv4u1NPwbdAig2J1GZtpDDnTsrJRjZ4Uc9bT56V9n+sCBdV1TaeT9mgHYBeApB1Zml+jeEq8WEOwS1ErhKp0W+9VF+sbP7XjvenOWv6fSyNc1AeATOh40bXxQ3lGetkNuhMQb06X36q9f7cvhssXWqjxWXYYj1bfwc3VpuznOZYcLW4rSoAYXaWTpLfeqBfqEnAWNUXwId4aMkZ5+eNDbHz3cPPVnCMlvc68JQ11qaZ0+vJxCW4eDmlIc1JTcVY3e7Asa1OEijewh8v8WAIJ8QuNpmv63MxrPUXWQbdrNQHR384RSW3+7wcnvOn3sYCEBNOgpRRrFESMAbg8GyR8nCU7qwB6g8YOqWt50YMOwByD/CfYOHqqjqPa/xNWB289e0yhKN0CpVv5hFgDyR1ebGLLXYKG8oQfoVSqNYpvhX4wv1739iStNDwsNyI8HKNC7lRrFYqY0swA07RUMPQHQHG534EdRQYojPECfVGkUD5iTbAkAdPXr6t+g1R4GKMetyDjCVkEmwwN0skQsnlpYWXiLEwAk820I9gPUOMGv7dED1CmJmHrUUuObfAuwZGKQNPgrGtSi9uiCu1jnPSqNnLRZq9G1Lb4CmI4LlAavBKitd7FD243pFLBWqZF/wEZh1gDovyL6BPWndaI3QWEWG+FCHqd74KiIptcrqhWsI2tzAqDZnABp8GRA9FcK9FSnmyhUaOoBCucoUFuVatk+ru6xCYA7IIRGU6BJrFWyiY/9ldtctRTym/MAGdX/AIr6RqWWHbfVRXYBYFhpZ9/QCDcd4mjQJMxmJA10pwASG44E/bXzinBbzesQ5Ui0zDKAKgTo6xSQrhXhXHGVPJEP6/4fAayH1yFvEgIAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.douyin.com/*
// @match        *://*.iesdouyin.com/*
// @exclude      *://creator.douyin.com/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @connect      *
// @connect      www.toutiao.com
// @grant        GM.cookie
// @grant        GM_addValueChangeListener
// @grant        GM_cookie
// @grant        GM_deleteValue
// @grant        GM_download
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_removeValueChangeListener
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function(){"use strict";var e=`2.0.12`,t=class{defaultApi={document,window,globalThis,self,top,setTimeout:globalThis.setTimeout.bind(globalThis),setInterval:globalThis.setInterval.bind(globalThis),clearTimeout:globalThis.clearTimeout.bind(globalThis),clearInterval:globalThis.clearInterval.bind(globalThis)};api;constructor(e){e&&(e.globalThis??(e.globalThis=e.window),e.self??(e.self=e.window)),e||=Object.assign({},this.defaultApi),this.api=Object.assign({},e)}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}get setTimeout(){return this.api.setTimeout}get clearTimeout(){return this.api.clearTimeout}get setInterval(){return this.api.setInterval}get clearInterval(){return this.api.clearInterval}},n={windowApi:new t({document,window,top,setTimeout:globalThis.setTimeout.bind(globalThis),clearTimeout:globalThis.clearTimeout.bind(globalThis),setInterval:globalThis.setInterval.bind(globalThis),clearInterval:globalThis.clearInterval.bind(globalThis)}),isShow(e){return!!e.getClientRects().length},createSafeHTML(e){return window.trustedTypes?window.trustedTypes.createPolicy(`safe-innerHTML`,{createHTML:e=>e}).createHTML(e):e},setSafeHTML(e,t){e.innerHTML=this.createSafeHTML(t)},forceShow(e){let t=e.cloneNode(!0);return t.setAttribute(`style`,`visibility: hidden !important;display:block !important;`),this.windowApi.document.documentElement.appendChild(t),{recovery(){t.remove()}}},getStyleValue(e,t){let n=null,r=null;e instanceof CSSStyleDeclaration?r=e:(n=e.ownerDocument.defaultView,n&&n.opener||(n=window),r=n.getComputedStyle(e));let i=parseFloat(r[t]);return isNaN(i)?0:i},isWin(e){return typeof e!=`object`||e instanceof Node?!1:e===globalThis||e===window||e===self||e===globalThis||e===window||e===self||typeof unsafeWindow<`u`&&e===unsafeWindow||e?.Math?.toString()===`[object Math]`},isDOM(e){return e instanceof Node},delete(e,t){if(typeof Reflect==`object`&&Reflect!=null&&Reflect.deleteProperty)return Reflect.deleteProperty(e,t);delete e[t]},isNodeList(e){return Array.isArray(e)||e instanceof NodeList},getAnimationEndNameList(){return[`webkitAnimationEnd`,`mozAnimationEnd`,`MSAnimationEnd`,`oanimationend`,`animationend`]},getTransitionEndNameList(){return[`webkitTransitionEnd`,`mozTransitionEnd`,`MSTransitionEnd`,`otransitionend`,`transitionend`]}},r=class{windowApi;constructor(e){this.windowApi=new t(e)}selector(e,t){return this.selectorAll(e,t)[0]}selectorAll(e,t){let n=this;if(t||=n.windowApi.document,e=e.trim(),e.startsWith(`xpath:`)){e=e.replace(/^xpath:/i,``);let r=n.windowApi.document.evaluate(e,t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null),i=[],a=r.iterateNext();for(;a;)i.push(a),a=r.iterateNext();return i}if(e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,``),Array.from(t.querySelectorAll(e)).filter(e=>e?.innerHTML?.trim()===``);if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let n=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];return e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,``),Array.from(t.querySelectorAll(e)).filter(e=>{let t=e.textContent;return t??=e.innerText,t!=null&&t.includes(n)})}if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let n=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],r=n.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i=``;r&&(n=n.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,``),i=r[3]);let a=new RegExp(n,i);return e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,``),Array.from(t.querySelectorAll(e)).filter(e=>{let t=e.textContent;return t??=e.innerText,t!=null&&!!t.match(a)})}return Array.from(t.querySelectorAll(e))}matches(e,t){if(t=t.trim(),e==null||e instanceof Document)return!1;if(t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,``),e.matches(t)&&e?.innerHTML?.trim()===``;if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let n=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,``);let r=e.textContent;return r??=e.innerText,r!=null&&e.matches(t)&&r.includes(n)}if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let n=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],r=n.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i=``;r&&(n=n.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,``),i=r[3]);let a=new RegExp(n,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,``);let o=e.textContent;return o??=e.innerText,o!=null&&e.matches(t)&&!!o.match(a)}return e.matches(t)}closest(e,t){if(t=t.trim(),e==null||e instanceof Document)return null;if(t.match(/[^\s]{1}:empty$/gi)){t=t.replace(/:empty$/gi,``);let n=e?.closest(t);return n&&n?.innerHTML?.trim()===``?n:null}if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let n=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,``);let r=e?.closest(t);if(r){let t=e?.textContent||e?.innerText;if(typeof t==`string`&&t.includes(n))return r}return null}if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let n=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],r=n.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i=``;r&&(n=n.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,``),i=r[3]);let a=new RegExp(n,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,``);let o=e?.closest(t);if(o){let t=e.textContent;if(t??=e.innerText,typeof t==`string`&&t.match(a))return o}return null}return e?.closest(t)}},i=new r,a=function(e){return e instanceof Node},o=new class{windowApi;constructor(e){this.windowApi=new t(e)}isJQuery(e){let t=!1;if(typeof jQuery==`object`&&e instanceof jQuery&&(t=!0),e==null)return!1;if(typeof e==`object`)for(let n of`add.addBack.addClass.after.ajaxComplete.ajaxError.ajaxSend.ajaxStart.ajaxStop.ajaxSuccess.animate.append.appendTo.attr.before.bind.blur.change.children.clearQueue.click.clone.closest.constructor.contents.contextmenu.css.data.dblclick.delay.delegate.dequeue.each.empty.end.eq.extend.fadeIn.fadeOut.fadeTo.fadeToggle.filter.find.first.focus.focusin.focusout.get.has.hasClass.height.hide.hover.html.index.init.innerHeight.innerWidth.insertAfter.insertBefore.is.jquery.keydown.keyup.last.load.map.mousedown.mouseenter.mouseleave.mousemove.mouseout.mouseover.mouseup.next.nextAll.not.off.offset.offsetParent.on.one.outerHeight.outerWidth.parent.parents.position.prepend.prependTo.prev.prevAll.prevUntil.promise.prop.pushStack.queue.ready.remove.removeAttr.removeClass.removeData.removeProp.replaceAll.replaceWith.resize.scroll.scrollLeft.scrollTop.select.show.siblings.slice.slideDown.slideToggle.slideUp.text.toggle.toggleClass.trigger.triggerHandler.unbind.width.wrap`.split(`.`))if(n in e)t=!0;else{t=!1;break}return t}assign(e={},t={},n=!1){let r=this;if(Array.isArray(t)&&!t.filter(e=>typeof e==`object`).length)return t;if(t==null)return e;e??={};let i;i=n?t:e;for(let o in i){if(!n&&!(o in t))continue;let i=Reflect.get(e,o),s=Reflect.get(t,o);if(typeof s==`object`&&s&&o in e&&!a(s)){let t;Array.isArray(s)?(Array.isArray(i)&&(i.length=0),t=s):t=r.assign(i,s,n),Reflect.set(e,o,t)}else Reflect.set(e,o,s)}return e}mutationObserver(e,t){let n=this;t=n.assign({callback:()=>{},config:{subtree:void 0,childList:void 0,attributes:void 0,attributeFilter:void 0,attributeOldValue:void 0,characterData:void 0,characterDataOldValue:void 0},immediate:!1},t);let r=new(this.windowApi.window.MutationObserver||this.windowApi.window.webkitMutationObserver||this.windowApi.window.MozMutationObserver)(function(e,n){typeof t.callback==`function`&&t.callback(e,n)});return Array.isArray(e)||e instanceof NodeList?e.forEach(e=>{r.observe(e,t.config)}):n.isJQuery(e)?e.each((e,n)=>{r.observe(n,t.config)}):r.observe(e,t.config),t.immediate&&typeof t.callback==`function`&&t.callback([],r),r}},s=class extends r{windowApi;constructor(e){super(e),this.windowApi=new t(e)}wait(e,t,n){let r=this,i=typeof t==`number`?t:0;return new Promise(t=>{let a=o.mutationObserver(n||r.windowApi.document,{config:{subtree:!0,childList:!0,attributes:!0},immediate:!0,callback(n,r){let i=e();i.success&&(typeof r?.disconnect==`function`&&r.disconnect(),t(i.data))}});i>0&&setTimeout(()=>{typeof a?.disconnect==`function`&&a.disconnect(),t(null)},i)})}waitNode(...e){e=e.filter(e=>e!==void 0);let t=this,n=e[0],r=t.windowApi.document,a=0;if(typeof e[0]!=`string`&&!Array.isArray(e[0])&&typeof e[0]!=`function`)throw TypeError(`DOMUtils.waitNode 第一个参数必须是string|string[]|Function`);if(e.length!==1){if(e.length===2){let t=e[1];if(typeof t==`number`)a=t;else if(typeof t==`object`&&t instanceof Node)r=t;else throw TypeError(`DOMUtils.waitNode 第二个参数必须是number|Node`)}else if(e.length===3){let t=e[1],n=e[2];if(typeof t==`object`&&t instanceof Node){if(r=t,typeof n==`number`)a=n;else throw TypeError(`DOMUtils.waitNode 第三个参数必须是number`)}else throw TypeError(`DOMUtils.waitNode 第二个参数必须是Node`)}else throw TypeError(`DOMUtils.waitNode 参数个数错误`)}function o(){if(Array.isArray(n)){let e=[];for(let t=0;t<n.length;t++){let r=i.selector(n[t]);r&&e.push(r)}if(e.length===n.length)return e}else if(typeof n==`function`)return n();else return i.selector(n,r)}return t.wait(()=>{let e=o();return e?{success:!0,data:e}:{success:!1,data:e}},a,r)}waitAnyNode(...e){e=e.filter(e=>e!==void 0);let t=this,n=e[0],r=t.windowApi.document,i=0;if(typeof e[0]!=`object`&&!Array.isArray(e[0]))throw TypeError(`DOMUtils.waitAnyNode 第一个参数必须是string[]`);if(e.length!==1){if(e.length===2){let t=e[1];if(typeof t==`number`)i=t;else if(typeof t==`object`&&t instanceof Node)r=t;else throw TypeError(`DOMUtils.waitAnyNode 第二个参数必须是number|Node`)}else if(e.length===3){let t=e[1],n=e[2];if(typeof t==`object`&&t instanceof Node){if(r=t,typeof n==`number`)i=n;else throw TypeError(`DOMUtils.waitAnyNode 第三个参数必须是number`)}else throw TypeError(`DOMUtils.waitAnyNode 第二个参数必须是Node`)}else throw TypeError(`DOMUtils.waitAnyNode 参数个数错误`)}let a=n.map(e=>t.waitNode(e,r,i));return Promise.any(a)}waitNodeList(...e){e=e.filter(e=>e!==void 0);let t=this,n=e[0],r=t.windowApi.document,a=0;if(typeof e[0]!=`string`&&!Array.isArray(e[0]))throw TypeError(`DOMUtils.waitNodeList 第一个参数必须是string|string[]`);if(e.length!==1){if(e.length===2){let t=e[1];if(typeof t==`number`)a=t;else if(typeof t==`object`&&t instanceof Node)r=t;else throw TypeError(`DOMUtils.waitNodeList 第二个参数必须是number|Node`)}else if(e.length===3){let t=e[1],n=e[2];if(typeof t==`object`&&t instanceof Node){if(r=t,typeof n==`number`)a=n;else throw TypeError(`DOMUtils.waitNodeList 第三个参数必须是number`)}else throw TypeError(`DOMUtils.waitNodeList 第二个参数必须是Node`)}else throw TypeError(`DOMUtils.waitNodeList 参数个数错误`)}function o(){if(Array.isArray(n)){let e=[];for(let t=0;t<n.length;t++){let a=i.selectorAll(n[t],r);a.length&&e.push(a)}if(e.length===n.length)return e}else{let e=i.selectorAll(n,r);if(e.length)return e}}return t.wait(()=>{let e=o();return e?{success:!0,data:e}:{success:!1,data:e}},a,r)}waitAnyNodeList(...e){e=e.filter(e=>e!==void 0);let t=this,n=e[0],r=t.windowApi.document,i=0;if(!Array.isArray(e[0]))throw TypeError(`DOMUtils.waitAnyNodeList 第一个参数必须是string[]`);if(e.length!==1){if(e.length===2){let t=e[1];if(typeof t==`number`)i=t;else if(typeof t==`object`&&t instanceof Node)r=t;else throw TypeError(`DOMUtils.waitAnyNodeList 第二个参数必须是number|Node`)}else if(e.length===3){let t=e[1],n=e[2];if(typeof t==`object`&&t instanceof Node){if(r=t,typeof n==`number`)i=n;else throw TypeError(`DOMUtils.waitAnyNodeList 第三个参数必须是number`)}else throw TypeError(`DOMUtils.waitAnyNodeList 第二个参数必须是Node`)}else throw TypeError(`DOMUtils.waitAnyNodeList 参数个数错误`)}let a=n.map(e=>t.waitNodeList(e,r,i));return Promise.any(a)}};new s;var c=class extends s{windowApi;constructor(e){super(e),this.windowApi=new t(e)}animate(e,t,r=1e3,a=null){let o=this;if(typeof e==`string`&&(e=i.selectorAll(e)),e==null)return;if(n.isNodeList(e)){e.forEach(e=>{o.animate(e,t,r,a)});return}if(typeof r!=`number`||r<=0)throw TypeError(`duration must be a positive number`);if(typeof a!=`function`&&a!==void 0)throw TypeError(`callback must be a function or null`);if(typeof t!=`object`||t===void 0)throw TypeError(`styles must be an object`);if(Object.keys(t).length===0)throw Error(`styles must contain at least one property`);let s=performance.now(),c={},l={};for(let n in t)c[n]=e.style[n]||o.windowApi.globalThis.getComputedStyle(e)[n],l[n]=t[n];let u=setInterval(function(){let n=(performance.now()-s)/r;n>1&&(n=1);for(let r in t)e.style[r]=c[r]+(l[r]-c[r])*n+`px`;n===1&&(clearInterval(u),a&&a())},10)}show(e,t=!0){let r=this;if(e!=null){if(typeof e==`string`&&(e=i.selectorAll(e)),e instanceof NodeList||e instanceof Array){e=e;for(let n of e)r.show(n,t)}else e=e,e.style.display=``,t&&(n.isShow(e)||e.style.setProperty(`display`,`unset`,`important`))}}hide(e,t=!0){let r=this;if(e!=null){if(typeof e==`string`&&(e=i.selectorAll(e)),e instanceof NodeList||e instanceof Array){e=e;for(let n of e)r.hide(n,t)}else e=e,e.style.display=`none`,t&&n.isShow(e)&&e.style.setProperty(`display`,`none`,`important`)}}fadeIn(e,t=400,r){if(e==null)return;let a=this;if(typeof e==`string`&&(e=i.selectorAll(e)),n.isNodeList(e)){e.forEach(e=>{a.fadeIn(e,t,r)});return}e.style.opacity=`0`,e.style.display=``;let o=null,s=null;function c(n){o||=n;let i=n-o;e=e,e.style.opacity=Math.min(i/t,1).toString(),i<t?a.windowApi.window.requestAnimationFrame(c):(r&&typeof r==`function`&&r(),a.windowApi.window.cancelAnimationFrame(s))}s=a.windowApi.window.requestAnimationFrame(c)}fadeOut(e,t=400,r){let a=this;if(e==null)return;if(typeof e==`string`&&(e=i.selectorAll(e)),n.isNodeList(e)){e.forEach(e=>{a.fadeOut(e,t,r)});return}e.style.opacity=`1`;let o=null,s=null;function c(n){o||=n;let i=n-o;e=e,e.style.opacity=Math.max(1-i/t,0).toString(),i<t?a.windowApi.window.requestAnimationFrame(c):(e.style.display=`none`,typeof r==`function`&&r(),a.windowApi.window.cancelAnimationFrame(s))}s=a.windowApi.window.requestAnimationFrame(c)}toggle(e,t){let r=this;typeof e==`string`&&(e=i.selectorAll(e)),e!=null&&(n.isNodeList(e)?e.forEach(e=>{r.toggle(e)}):r.windowApi.globalThis.getComputedStyle(e).getPropertyValue(`display`)===`none`?r.show(e,t):r.hide(e,t))}};new c;var l={domEventSymbol:Symbol(`events_`+((1+Math.random())*65536|0).toString(16).substring(1))},u={Object:{defineProperty:Object.defineProperty,defineProperties:Object.defineProperties}},d=class extends c{windowApi;constructor(e){super(e),this.windowApi=new t(e)}getAnimationEndNameList(){return n.getAnimationEndNameList()}getTransitionEndNameList(){return n.getTransitionEndNameList()}on(e,t,r,i,a){let o=function(e,t,n){let r=e[t];if(typeof r==`boolean`)n.capture=r,typeof e[t+1]==`boolean`&&(n.once=e[t+1]),typeof e[t+2]==`boolean`&&(n.passive=e[t+2]);else if(r&&typeof r==`object`)for(let e in n)Reflect.has(r,e)&&Reflect.set(n,e,r[e]);return n},s=this,c=arguments;if(typeof e==`string`&&(e=s.selectorAll(e)),e==null)return{off(){},emit(){}};let d=[];e instanceof NodeList||Array.isArray(e)?d=d.concat(Array.from(e)):d.push(e);let f=[];Array.isArray(t)?f=f.concat(t.filter(e=>typeof e==`string`&&e.toString()!==``)):typeof t==`string`&&(f=f.concat(t.split(` `).filter(e=>e!==``)));let p=[];Array.isArray(r)?p=p.concat(r.filter(e=>typeof e==`string`&&e.toString()!==``)):typeof r==`string`&&p.push(r);let m=i,h={capture:!1,once:!1,passive:!1,isComposedPath:!1,overrideTarget:!0};return typeof r==`function`?(m=r,h=o(c,3,h)):h=o(c,4,h),d.forEach(e=>{let t=n.isWin(e);f.forEach(n=>{let o=()=>{h.once&&this.off(e,n,r,i,a)},c=function(n){h.isPreventEvent&&s.preventEvent(n);let r,i,a,c=!1;if(p.length){let o;if(h.isComposedPath){let e=n.composedPath();!e.length&&n.target&&e.push(n.target),o=e[0]}else o=n.target;let l=t?s.windowApi.document.documentElement:e;if(p.find(e=>{if(s.matches(o,e))return!0;let t=s.closest(o,e);return t&&l?.contains?.(t)?(o=t,!0):!1})){if(h.overrideTarget)try{let e=n.target;u.Object.defineProperties(n,{target:{get(){return o}},originTarget:{get(){return e}}})}catch{}c=!0,r=o,i=n,a=o}}else c=!0,r=e,i=n;if(c){let e=m.call(r,i,a);if(o(),typeof e==`boolean`&&!e)return!1}};e.addEventListener(n,c,h);let d=Reflect.get(e,l.domEventSymbol)||{};d[n]=d[n]||[],d[n].push({selector:p,option:h,handlerCallBack:c,callback:m}),Reflect.set(e,l.domEventSymbol,d)})}),{off:e=>{s.off(d,f,p,m,h,e)},emit:(e,t)=>{s.emit(d,f,e,t)}}}off(e,t,r,i,a,o){let s=function(e,t,n){let r=e[t];return typeof r==`boolean`?n.capture=r:r&&typeof r==`object`&&`capture`in r&&(n.capture=r.capture),n},c=this,u=arguments;if(typeof e==`string`&&(e=c.selectorAll(e)),e==null)return;let d=[];e instanceof NodeList||Array.isArray(e)?(e=e,d=d.concat(Array.from(e))):d.push(e);let f=[];Array.isArray(t)?f=f.concat(t.filter(e=>typeof e==`string`&&e.toString()!==``)):typeof t==`string`&&(f=f.concat(t.split(` `).filter(e=>e!==``)));let p=[];Array.isArray(r)?p=p.concat(r.filter(e=>typeof e==`string`&&e.toString()!==``)):typeof r==`string`&&p.push(r);let m=i,h={capture:!1};typeof r==`function`?(m=r,h=s(u,3,h)):h=s(u,4,h),u.length===5&&typeof u[4]==`function`&&typeof o!=`function`&&(o=a),d.forEach(e=>{let r=Reflect.get(e,l.domEventSymbol)||{};f.forEach(i=>{let a=r[i]||[],s=typeof o==`function`?a.filter(o):a;for(let t=0;t<s.length;t++){let n=s[t],r=!0;if(r&&m&&n.callback!==m&&(r=!1),r&&p.length&&Array.isArray(n.selector)&&JSON.stringify(n.selector)!==JSON.stringify(p)&&(r=!1),r&&typeof n.option.capture==`boolean`&&h.capture!==n.option.capture&&(r=!1),r){e.removeEventListener(i,n.handlerCallBack,n.option);for(let e=a.length-1;e>=0;e--)a[e]===n&&a.splice(e,1)}}a.length===0&&(n.delete(r,t),Object.keys(r).length===0&&n.delete(e,l.domEventSymbol))}),Reflect.set(e,l.domEventSymbol,r)})}offAll(e,t){let r=this;if(typeof e==`string`&&(e=r.selectorAll(e)),e==null)return;let i=[];e instanceof NodeList||Array.isArray(e)?i=i.concat(Array.from(e)):i.push(e);let a=[];Array.isArray(t)?a=a.concat(t):typeof t==`string`&&(a=a.concat(t.split(` `))),i.forEach(e=>{[...new Set([...Object.getOwnPropertySymbols(e),l.domEventSymbol])].forEach(t=>{if(!t.toString().startsWith(`Symbol(events_`))return;let r=Reflect.get(e,t)||{};(a.length?a:Object.keys(r)).forEach(i=>{let a=r[i];if(!a)return;for(let t of a)e.removeEventListener(i,t.handlerCallBack,{capture:t.option.capture});let o=Reflect.get(e,t);n.delete(o,i),Object.keys(o).length===0&&n.delete(e,t)})})})}onReady(...e){let t=e[0],n,r=this,i=[{target:r.windowApi.document,eventType:`DOMContentLoaded`,callback:()=>{a.completed()}},{target:r.windowApi.window,eventType:`load`,callback:()=>{a.completed()}}],a={init(){if(e.length===0)return new Promise(e=>{n=e,a.check()});a.check()},check(){a.isReady()?setTimeout(()=>{a.completed()},0):a.onCompleted()},isReady(){try{return r.windowApi.document.readyState===`complete`||r.windowApi.document.readyState!==`loading`&&!r.windowApi.document.documentElement.doScroll}catch{return!1}},completed(){a.offCompleted(),typeof t==`function`&&t(),typeof n==`function`&&n()},onCompleted(){for(let e of i)r.on(e.target,e.eventType,e.callback)},offCompleted(){for(let e of i)r.off(e.target,e.eventType,e.callback)}};return a.init()}emit(e,t,n,r=!0){let i=this;if(typeof e==`string`&&(e=i.selectorAll(e)),e==null)return;let a=[];e instanceof NodeList||Array.isArray(e)?a=a.concat(Array.from(e)):a.push(e);let o=(e,t)=>{e instanceof Event&&typeof t==`object`&&t&&!Array.isArray(t)&&Object.keys(t).forEach(n=>{let r=Reflect.get(t,n);Reflect.set(e,n,r)})},s=[],c=null;Array.isArray(t)?s=t.filter(e=>typeof e==`string`&&e.trim()!==``):typeof t==`string`?s=t.split(` `):t instanceof Event&&(c=t,o(c,n)),a.forEach(e=>{let t=Reflect.get(e,l.domEventSymbol)||{},i=(n,i)=>{r==0&&i in t?t[i].forEach(e=>{e.handlerCallBack(n)}):e.dispatchEvent(n)};if(c){let e=c,t=e.type;i(e,t)}else s.forEach(e=>{let t=new Event(e);o(t,n),i(t,e)})})}click(e,t,r,i){let a=this;if(typeof e==`string`&&(e=a.selectorAll(e)),e!=null){if(n.isNodeList(e))e.forEach(e=>{a.click(e,t,r,i)});else if(t==null)a.emit(e,`click`,r,i);else return a.on(e,`click`,null,t)}}blur(e,t,r,i){let a=this;if(typeof e==`string`&&(e=a.selectorAll(e)),e!=null){if(n.isNodeList(e))e.forEach(e=>{a.focus(e,t,r,i)});else if(t===null)a.emit(e,`blur`,r,i);else return a.on(e,`blur`,null,t)}}focus(e,t,r,i){let a=this;if(typeof e==`string`&&(e=a.selectorAll(e)),e!=null){if(n.isNodeList(e))e.forEach(e=>{a.focus(e,t,r,i)});else if(t==null)a.emit(e,`focus`,r,i);else return a.on(e,`focus`,null,t)}}onHover(e,t,r){let i=this;if(typeof e==`string`&&(e=i.selectorAll(e)),e==null)return;if(n.isNodeList(e)){let n=[];return e.forEach(e=>{let a=i.onHover(e,t,r);n.push(a)}),{off(){n.forEach(e=>{e&&e.off()})}}}let a=i.on(e,`mouseenter`,null,t,r),o=i.on(e,`mouseleave`,null,t,r);return{off(){a.off(),o.off()}}}onAnimationend(e,t,r){let i=this;if(typeof e==`string`&&(e=i.selector(e)),e==null)return;let a={once:!0};Object.assign(a,r||{});let o=n.getAnimationEndNameList();if(i.on(e,o,null,t,a),!a.once)return{off(){i.off(e,o,null,t,a)}}}onTransitionend(e,t,r){let i=this;if(typeof e==`string`&&(e=i.selector(e)),e==null)return;let a={once:!0};Object.assign(a,r||{});let o=n.getTransitionEndNameList();if(i.on(e,o,null,t,a),!a.once)return{off(){i.off(e,o,null,t,a)}}}onKeyup(e,t,r){let i=this;if(e!=null){if(typeof e==`string`&&(e=i.selectorAll(e)),n.isNodeList(e)){let n=[];return e.forEach(e=>{let a=i.onKeyup(e,t,r);n.push(a)}),{off(){n.forEach(e=>{e&&e.off()})}}}return i.on(e,`keyup`,null,t,r)}}onKeydown(e,t,r){let i=this;if(e!=null){if(typeof e==`string`&&(e=i.selectorAll(e)),n.isNodeList(e)){let n=[];return e.forEach(e=>{let a=i.onKeydown(e,t,r);n.push(a)}),{off(){n.forEach(e=>{e&&e.off()})}}}return i.on(e,`keydown`,null,t,r)}}onKeyboard(e,t=`keydown`,n,r){let i=this;return typeof e==`string`&&(e=i.selectorAll(e)),i.on(e,t,function(e){let t=e.key||e.code,r=e.charCode||e.keyCode||e.which,i=[];e.ctrlKey&&i.push(`ctrl`),e.altKey&&i.push(`alt`),e.metaKey&&i.push(`meta`),e.shiftKey&&i.push(`shift`),typeof n==`function`&&n(t,r,i,e)},r)}onInput(e,t,n){let r=!1,i=async e=>{r||await t(e)},a=()=>{r=!0},o=()=>{r=!1,this.emit(e,`input`,{isComposite:r})},s=this.on(e,`input`,i,n),c=this.on(e,`compositionstart`,a,n),l=this.on(e,`compositionend`,o,n);return{off(){s.off(),c.off(),l.off()},emit(e,t){s.emit(e,t)}}}onOneOrDouble(...e){let t=e[0],n,r,i;if(e.length===2){if(typeof e[1]==`function`)r=e[1];else throw TypeError(`handler is not a function`)}else if(e.length===3)typeof e[1]==`function`?(r=e[1],i=e[2]):(n=e[1],r=e[2]);else if(e.length===4)n=e[1],r=e[2],i=e[3];else throw Error(`args length error`);let a=new WeakMap,o=!1,s,c=`pointerup`,l=200;typeof i==`object`&&i&&((typeof i.eventType==`string`||Array.isArray(i.eventType))&&(c=i.eventType),typeof i.checkClickTime==`number`&&(l=i.checkClickTime));let u=(e,t,n)=>n?r(e,n,t):r(e,t),d=this.on(t,c,n,(e,t)=>{clearTimeout(s),s=void 0,o&&a.has(t)?(o=!1,a.delete(t),u(e,{isDouble:!0},t)):(s=setTimeout(()=>{o=!1,u(e,{isDouble:!1},t)},l),o=!0,a.set(t,e))},i);return{off(){d.off(),a=null},emit(e,t){u(e,t||{isDouble:!1})}}}preventEvent(...e){let t=(e,t)=>{if(e?.stopPropagation(),e?.stopImmediatePropagation(),!(typeof t==`boolean`&&t))return e?.preventDefault(),!1};if(e[0]instanceof Event){let n=e[1];return t(e[0],n)}{let n=e[0],r=e[1],i,a=!1,o=!1;typeof r==`string`&&(r=[r]);let s;if(e.length!==2){if(typeof e[2]==`string`||Array.isArray(e[2]))i=e[2],typeof e[3]==`object`&&e[3]!=null&&(s=e[3]);else if(typeof e[2]==`object`&&e[2]!=null&&!Array.isArray(e[2]))s=e[2];else throw TypeError(`Invalid argument`)}return s&&(a=!!s.capture,o=!!s.onlyStopPropagation),this.on(n,r,i,e=>t(e,o),{capture:a})}}simulateClick(e,t={}){let{clientX:n=0,clientY:r=0,...i}=t;e.dispatchEvent(new PointerEvent(`pointerdown`,{clientX:n,clientY:r,bubbles:!0,cancelable:!0,...i})),e.dispatchEvent(new PointerEvent(`pointerup`,{clientX:n,clientY:r,bubbles:!0,cancelable:!0,...i})),e.dispatchEvent(new MouseEvent(`mousedown`,{clientX:n,clientY:r,bubbles:!0,cancelable:!0,...i})),e.dispatchEvent(new MouseEvent(`mouseup`,{clientX:n,clientY:r,bubbles:!0,cancelable:!0,...i})),e.dispatchEvent(new MouseEvent(`click`,{clientX:n,clientY:r,bubbles:!0,cancelable:!0,...i}))}simulateTouchClick(e,t,n){if(t==null&&n==null){let r=e.getBoundingClientRect();t=r.left+r.width/2,n=r.top+r.height/2}else t??=0,n??=0;let r={touches:[new Touch({identifier:0,target:e,clientX:t,clientY:n})],changedTouches:[new Touch({identifier:0,target:e,clientX:t,clientY:n})],targetTouches:[new Touch({identifier:0,target:e,clientX:t,clientY:n})],bubbles:!0,cancelable:!0};e.dispatchEvent(new TouchEvent(`touchstart`,r)),e.dispatchEvent(new TouchEvent(`touchend`,r)),this.simulateClick(e,{clientX:t,clientY:n})}};new d;var f=class extends d{windowApi;constructor(e){super(e),this.windowApi=new t(e)}getElementSelector(e){let t=this;if(!e||!e.parentElement)return;if(e.id)return`#${e.id}`;let n=t.getElementSelector(e.parentElement);if(!n)return e.tagName.toLowerCase();if(e.parentElement.querySelectorAll(e.tagName).length>1){let t=Array.prototype.indexOf.call(e.parentElement.children,e)+1;n+=` > ${e.tagName.toLowerCase()}:nth-child(${t})`}else n+=` > ${e.tagName.toLowerCase()}`;return n}};new f;var p=new class t extends f{constructor(e){super(e)}version=e;noConflict(){let e=this;return e.windowApi.window.DOMUtils&&n.delete(window,`DOMUtils`),e.windowApi.window.DOMUtils=this,this}attr(e,t,r){let i=this;if(typeof e==`string`&&(e=i.selectorAll(e)),e!=null){if(n.isNodeList(e)){if(r==null)return i.attr(e[0],t,r);e.forEach(e=>{i.attr(e,t,r)})}else{if(r==null)return e.getAttribute(t);e.setAttribute(t,r)}}}createElement(e,t,n){let r=this,i=r.windowApi.document.createElement(e);return typeof t==`string`?(r.html(i,t),i):(t??={},n??={},Object.keys(t).forEach(e=>{let n=t[e];e===`innerHTML`?r.html(i,n):i[e]=n}),Object.keys(n).forEach(e=>{let t=n[e];typeof t==`object`?t=JSON.stringify(t):typeof t==`function`&&(t=t.toString()),i.setAttribute(e,t)}),i)}css(e,t,r){let i=this;function a(e,t){return typeof t==`number`&&(t=t.toString()),typeof t==`string`&&[`width`,`height`,`top`,`left`,`right`,`bottom`,`font-size`].includes(e)&&t.match(/[0-9]$/gi)&&(t+=`px`),t}if(typeof e==`string`&&(e=i.selectorAll(e)),e==null)return;if(n.isNodeList(e)){if(typeof t==`string`){if(r==null)return i.css(e[0],t);e.forEach(e=>{i.css(e,t)});return}if(typeof t==`object`){e.forEach(e=>{i.css(e,t)});return}return}let o=(t,n)=>{typeof n==`string`&&n.trim().endsWith(`!important`)?(n=n.trim().replace(/!important$/gi,``).trim(),e.style.setProperty(t,n,`important`)):(n=a(t,n),e.style.setProperty(t,n))};if(typeof t==`string`){if(r==null)return i.windowApi.globalThis.getComputedStyle(e).getPropertyValue(t);o(t,r)}else if(typeof t==`object`)for(let e in t){let n=t[e];o(e,n)}else throw TypeError(`property must be string or object`)}text(e,t){let r=this;if(typeof e==`string`&&(e=r.selectorAll(e)),e!=null){if(n.isNodeList(e)){if(t==null)return r.text(e[0]);e.forEach(e=>{r.text(e,t)})}else{if(t==null)return e.textContent||e.innerText;t instanceof Node&&(t=t.textContent||t.innerText),`textContent`in e?e.textContent=t:`innerText`in e&&(e.innerText=t)}}}html(e,t){let r=this;if(typeof e==`string`&&(e=r.selectorAll(e)),e!=null){if(n.isNodeList(e)){if(t==null)return r.html(e[0]);e.forEach(e=>{r.html(e,t)})}else{if(t==null)return e.innerHTML;t instanceof Element&&(t=t.innerHTML),`innerHTML`in e&&n.setSafeHTML(e,t)}}}getTransform(e,t=!1){let r=this,i=0,a=0;if(!(t||!t&&n.isShow(e))){let{recovery:t}=n.forceShow(e),i=r.getTransform(e,!0);return t(),i}let o=r.windowApi.globalThis.getComputedStyle(e).transform;if(o!=null&&o!==`none`&&o!==``){let e=o.match(/\((.+)\)/)?.[1].split(`,`);e?(i=Math.abs(parseInt(e[4])),a=Math.abs(parseInt(e[5]))):(i=0,a=0)}return{transformLeft:i,transformTop:a}}val(e,t){let r=this;if(typeof e==`string`&&(e=r.selectorAll(e)),e!=null){if(n.isNodeList(e)){if(t==null)return r.val(e[0]);e.forEach(e=>{r.val(e,t)})}else{if(t==null)return e.localName===`input`&&(e.type===`checkbox`||e.type===`radio`)?e.checked:e.value;e.localName===`input`&&(e.type===`checkbox`||e.type===`radio`)?e.checked=!!t:e.value=t}}}prop(e,t,r){let i=this;if(typeof e==`string`&&(e=i.selectorAll(e)),e!=null){if(n.isNodeList(e)){if(r==null)return i.prop(e[0],t);e.forEach(e=>{i.prop(e,t,r)})}else{if(r==null)return Reflect.get(e,t);e instanceof Element&&t===`innerHTML`?i.html(e,r):Reflect.set(e,t,r)}}}removeAttr(e,t){let r=this;typeof e==`string`&&(e=r.selectorAll(e)),e!=null&&(n.isNodeList(e)?e.forEach(e=>{r.removeAttr(e,t)}):e.removeAttribute(t))}removeClass(e,t){let r=this;typeof e==`string`&&(e=r.selectorAll(e)),e!=null&&(n.isNodeList(e)?e.forEach(e=>{r.removeClass(e,t)}):t==null?e.className=``:(Array.isArray(t)||(t=t.trim().split(` `)),t.forEach(t=>{e.classList.remove(t)})))}removeProp(e,t){let r=this;typeof e==`string`&&(e=r.selectorAll(e)),e!=null&&(n.isNodeList(e)?e.forEach(e=>{r.removeProp(e,t)}):n.delete(e,t))}addClass(e,t){let r=this;typeof e==`string`&&(e=r.selectorAll(e)),e!=null&&(n.isNodeList(e)?e.forEach(e=>{r.addClass(e,t)}):(Array.isArray(t)||(t=t.split(` `)),t.forEach(t=>{t.trim()!=``&&e.classList.add(t)})))}hasClass(e,t){let r=this;if(typeof e==`string`&&(e=r.selectorAll(e)),e==null)return!1;if(n.isNodeList(e)){let n=!0;for(let i=0;i<e.length;i++){let a=e[i];n&&=r.hasClass(a,t)}return n}if(!e?.classList)return!1;Array.isArray(t)||(t=t.split(` `));for(let n=0;n<t.length;n++){let r=t[n].trim();if(!e.classList.contains(r))return!1}return!0}append(e,...t){if(typeof e==`string`&&(e=this.selectorAll(e)),e==null)return;if(n.isNodeList(e)){e.forEach(e=>{this.append(e,...t)});return}let r=(e,t)=>{e instanceof DocumentFragment?(typeof t==`string`&&(t=this.toElement(t,!0,!1)),e.appendChild(t)):typeof t==`string`?e.insertAdjacentHTML(`beforeend`,n.createSafeHTML(t)):e.appendChild(t)},i=this.windowApi.document.createDocumentFragment();t.forEach(e=>{n.isNodeList(e)?e.forEach(e=>{r(i,e)}):r(i,e)}),r(e,i)}prepend(e,...t){if(typeof e==`string`&&(e=this.selectorAll(e)),e==null)return;if(n.isNodeList(e)){e.forEach(e=>{this.prepend(e,...t)});return}let r=(e,t)=>{if(e instanceof DocumentFragment)typeof t==`string`&&(t=this.toElement(t,!0,!1)),e.appendChild(t);else if(typeof t==`string`)e.insertAdjacentHTML(`afterbegin`,n.createSafeHTML(t));else{let n=e.firstChild;n?e.insertBefore(t,n):e.prepend(t)}},i=this.windowApi.document.createDocumentFragment();t.forEach(e=>{n.isNodeList(e)?e.forEach(e=>{r(i,e)}):r(i,e)}),r(e,i)}after(e,...t){if(typeof e==`string`&&(e=this.selectorAll(e)),e==null)return;if(n.isNodeList(e)){e.forEach(e=>{this.after(e,...t)});return}let r=(t,r)=>{if(t instanceof DocumentFragment)typeof r==`string`&&(r=this.toElement(r,!0,!1)),t.appendChild(r);else if(typeof r==`string`)t.insertAdjacentHTML(`afterend`,n.createSafeHTML(r));else{let t=e.parentElement,n=e.nextSibling;t&&n?t.insertBefore(r,n):e.after(r)}},i=this.windowApi.document.createDocumentFragment();t.forEach(e=>{n.isNodeList(e)?e.forEach(e=>{r(i,e)}):r(i,e)}),r(e,i)}before(e,...t){if(typeof e==`string`&&(e=this.selectorAll(e)),e==null)return;if(n.isNodeList(e)){e.forEach(e=>{this.before(e,...t)});return}let r=(t,r)=>{if(t instanceof DocumentFragment)typeof r==`string`&&(r=this.toElement(r,!0,!1)),t.appendChild(r);else if(typeof r==`string`)e.insertAdjacentHTML(`beforebegin`,n.createSafeHTML(r));else{let t=e.parentElement;t?t.insertBefore(r,e):e.before(r)}},i=this.windowApi.document.createDocumentFragment();t.forEach(e=>{n.isNodeList(e)?e.forEach(e=>{r(i,e)}):r(i,e)}),r(e,i)}remove(e){typeof e==`string`&&(e=this.selectorAll(e)),e!=null&&(n.isNodeList(e)?e.forEach(e=>{this.remove(e)}):(e.querySelectorAll(`*`).forEach(e=>{e instanceof Element&&this.offAll(e)}),this.offAll(e),typeof e.remove==`function`?e.remove():e.parentElement?e.parentElement.removeChild(e):e.parentNode&&e.parentNode.removeChild(e)))}empty(e){let t=this;typeof e==`string`&&(e=t.selectorAll(e)),e!=null&&(n.isNodeList(e)?e.forEach(e=>{t.empty(e)}):e.innerHTML?n.setSafeHTML(e,``):e.textContent&&(e.textContent=``))}offset(e){let t=this;if(typeof e==`string`&&(e=t.selector(e)),e==null)return;let n=e.getBoundingClientRect();return{top:n.top+t.windowApi.globalThis.scrollY,left:n.left+t.windowApi.globalThis.scrollX}}width(e,t=!1){let r=this;if(typeof e==`string`&&(e=r.selector(e)),n.isWin(e))return r.windowApi.window.document.documentElement.clientWidth;if(e.nodeType===9)return e=e,Math.max(e.body.scrollWidth,e.documentElement.scrollWidth,e.body.offsetWidth,e.documentElement.offsetWidth,e.documentElement.clientWidth);if(t||!t&&n.isShow(e)){if(e=e,parseFloat(n.getStyleValue(e,`width`).toString())>0)return parseFloat(n.getStyleValue(e,`width`).toString());if(e.offsetWidth>0){let t=n.getStyleValue(e,`borderLeftWidth`),r=n.getStyleValue(e,`borderRightWidth`),i=n.getStyleValue(e,`paddingLeft`),a=n.getStyleValue(e,`paddingRight`),o=parseFloat(e.offsetWidth.toString())-parseFloat(t.toString())-parseFloat(r.toString())-parseFloat(i.toString())-parseFloat(a.toString());return parseFloat(o.toString())}return 0}{e=e;let{recovery:t}=n.forceShow(e),i=r.width(e,!0);return t(),i}}height(e,t=!1){let r=this;if(n.isWin(e))return r.windowApi.window.document.documentElement.clientHeight;if(typeof e==`string`&&(e=r.selector(e)),e.nodeType===9)return e=e,Math.max(e.body.scrollHeight,e.documentElement.scrollHeight,e.body.offsetHeight,e.documentElement.offsetHeight,e.documentElement.clientHeight);if(t||!t&&n.isShow(e)){if(e=e,parseFloat(n.getStyleValue(e,`height`).toString())>0)return parseFloat(n.getStyleValue(e,`height`).toString());if(e.offsetHeight>0){let t=n.getStyleValue(e,`borderTopWidth`),r=n.getStyleValue(e,`borderBottomWidth`),i=n.getStyleValue(e,`paddingTop`),a=n.getStyleValue(e,`paddingBottom`),o=parseFloat(e.offsetHeight.toString())-parseFloat(t.toString())-parseFloat(r.toString())-parseFloat(i.toString())-parseFloat(a.toString());return parseFloat(o.toString())}return 0}{e=e;let{recovery:t}=n.forceShow(e),i=r.height(e,!0);return t(),i}}outerWidth(e,t=!1){let r=this;if(n.isWin(e))return r.windowApi.window.innerWidth;if(typeof e==`string`&&(e=r.selector(e)),e=e,t||!t&&n.isShow(e)){let t=r.windowApi.globalThis.getComputedStyle(e,null),i=n.getStyleValue(t,`marginLeft`),a=n.getStyleValue(t,`marginRight`);return e.offsetWidth+i+a}{let{recovery:t}=n.forceShow(e),i=r.outerWidth(e,!0);return t(),i}}outerHeight(e,t=!1){let r=this;if(n.isWin(e))return r.windowApi.window.innerHeight;if(typeof e==`string`&&(e=r.selector(e)),e=e,t||!t&&n.isShow(e)){let t=r.windowApi.globalThis.getComputedStyle(e,null),i=n.getStyleValue(t,`marginTop`),a=n.getStyleValue(t,`marginBottom`);return e.offsetHeight+i+a}{let{recovery:t}=n.forceShow(e),i=r.outerHeight(e,!0);return t(),i}}replaceWith(e,t){let r=this;if(typeof e==`string`&&(e=r.selectorAll(e)),e==null)return;if(n.isNodeList(e)){e.forEach(e=>{r.replaceWith(e,t)});return}typeof t==`string`&&(t=r.toElement(t,!1,!1));let i=e.parentElement;i?i.replaceChild(t,e):(r.after(e,t),this.remove(e))}wrap(e,t){let r=this;if(typeof e==`string`&&(e=r.selectorAll(e)),e==null)return;if(n.isNodeList(e)){e.forEach(e=>{r.wrap(e,t)});return}e=e;let i=r.windowApi.document.createElement(`div`);r.html(i,t);let a=i.firstChild;e.parentElement.insertBefore(a,e),a.appendChild(e)}prev(e){let t=this;if(typeof e==`string`&&(e=t.selector(e)),e!=null)return e.previousElementSibling}next(e){let t=this;if(typeof e==`string`&&(e=t.selector(e)),e!=null)return e.nextElementSibling}siblings(e){let t=this;if(typeof e==`string`&&(e=t.selector(e)),e!=null)return Array.from(e.parentElement.children).filter(t=>t!==e)}parent(e){let t=this;if(typeof e==`string`&&(e=t.selector(e)),e!=null){if(n.isNodeList(e)){let n=[];return e.forEach(e=>{n.push(t.parent(e))}),n}return e.parentElement}}toElement(e,t=!1,n=!1){let r=this;e=e.trim();function i(){let t=new DOMParser;return n?t.parseFromString(e,`text/html`):t.parseFromString(e,`text/html`).body.firstChild}function a(){let t=r.windowApi.document.createElement(`div`);return r.html(t,e),n?t:t.firstElementChild??t.firstChild}return t?i():a()}toElements(e,t=!1){let n=this;e=e.trim();function r(){let t=new DOMParser;return Array.from(t.parseFromString(e,`text/html`).body.childNodes)}function i(){let t=n.windowApi.document.createElement(`div`);return n.html(t,e),Array.from(t.childNodes)}return t?r():i()}serialize(e){if(!(e instanceof HTMLFormElement))throw TypeError(`DOMUtils.serialize 参数必须是HTMLFormElement`);let t=e.elements,n=[];for(let e=0;e<t.length;e++){let r=t[e];if(r.name&&!r.disabled&&(r.checked||[`text`,`hidden`,`password`,`textarea`,`select-one`,`select-multiple`].includes(r.type))){if(r.type===`select-multiple`)for(let e=0;e<r.options.length;e++)r.options[e].selected&&n.push({name:r.name,value:r.options[e].value});else n.push({name:r.name,value:r.value})}}return n.map(e=>`${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`).join(`&`)}createDOMUtils(e){return new t(e)}getTextBoundingRect(e,t,n){let r=this;if(!e||!(`value`in e))return e;if(t??=e.selectionStart||0,n??=e.selectionEnd||0,typeof t==`string`&&(t=parseFloat(t)),(typeof t!=`number`||isNaN(t))&&(t=0),t=t<0?0:Math.min(e.value.length,t),typeof n==`string`&&(n=parseFloat(n)),(typeof n!=`number`||isNaN(n)||n<t)&&(n=t),n=n<0?0:Math.min(e.value.length,n),typeof e.createTextRange==`function`){let r=e.createTextRange();return r.collapse(!0),r.moveStart(`character`,t),r.moveEnd(`character`,n-t),r.getBoundingClientRect()}let i=_(),a=v(`width`,!0),o=v(`height`,!0),s=i.top,c=i.left,l=`white-space:pre;padding:0;margin:0;`,u=[`direction`,`font-family`,`font-size`,`font-size-adjust`,`font-variant`,`font-weight`,`font-style`,`letter-spacing`,`line-height`,`text-align`,`text-indent`,`text-transform`,`word-wrap`,`word-spacing`];s+=v(`padding-top`,!0),s+=v(`border-top-width`,!0),c+=v(`padding-left`,!0),c+=v(`border-left-width`,!0),c+=1;for(let e=0;e<u.length;e++){let t=u[e];l+=t+`:`+v(t,!1)+`;`}let d=e.value||`G`,f=d.length,p=r.windowApi.document.createElement(`div`);t>0&&g(0,t);let m=g(t,n);f>n&&g(n,f),p.style.cssText=l,p.style.position=`absolute`,p.style.top=s+`px`,p.style.left=c+`px`,p.style.width=a+`px`,p.style.height=o+`px`,r.windowApi.document.body.appendChild(p);let h=m.getBoundingClientRect();return p?.parentNode?.removeChild(p),h;function g(e,t){let n=r.windowApi.document.createElement(`span`);return n.style.cssText=l,n.textContent=d.substring(e,t),p.appendChild(n),n}function _(){let t=r.windowApi.document.body,n=r.windowApi.document.defaultView,i=r.windowApi.document.documentElement,a=r.windowApi.document.createElement(`div`);a.style.paddingLeft=a.style.width=`1px`,t.appendChild(a);let o=a.offsetWidth==2;t.removeChild(a);let s=e.getBoundingClientRect(),c=i.clientTop||t.clientTop||0,l=i.clientLeft||t.clientLeft||0,u=n.pageYOffset||o&&i.scrollTop||t.scrollTop,d=n.pageXOffset||o&&i.scrollLeft||t.scrollLeft;return{top:s.top+u-c,left:s.left+d-l}}function v(t,n){let i=r.windowApi.document.defaultView.getComputedStyle(e,null).getPropertyValue(t);return n?parseFloat(i):i}}addStyle(e,t){if(typeof e!=`string`)throw Error(`DOMUtils.addStyle 参数cssText 必须为String类型`);let n=this.createElement(`style`,{type:`text/css`,innerHTML:e});return t?t.appendChild(n):this.windowApi.document.head?this.windowApi.document.head.appendChild(n):this.windowApi.document.documentElement.childNodes.length===0?this.windowApi.document.documentElement.appendChild(n):this.windowApi.document.documentElement.insertBefore(n,this.windowApi.document.documentElement.childNodes[0]),n}checkUserClickInNode(e){let t=this;if(!n.isDOM(e))throw Error(`DOMUtils.checkUserClickInNode 参数 targetNode 必须为 Element|Node 类型`);let r=t.windowApi.window.event,i=t.windowApi.window.event,a=r?.composedPath()?.[0],o=r?.clientX??i?.touches?.[0]?.clientX,s=r?.clientY??i?.touches?.[0]?.clientY;if(o==null||s==null||!(a instanceof Element))return!1;let{left:c,right:l,top:u,bottom:d}=e.getBoundingClientRect();return!!(o>=c&&o<=l&&s>=u&&s<=d||a&&e.contains(a)||a==e)}deleteParentNode(e,t){if(e==null)return;if(!n.isDOM(e))throw Error(`DOMUtils.deleteParentNode 参数 target 必须为 Node|HTMLElement 类型`);if(typeof t!=`string`)throw Error(`DOMUtils.deleteParentNode 参数 targetSelector 必须为 string 类型`);let r=!1,i=p.closest(e,t);return i&&(this.remove(i),r=!0),r}*findElementsWithText(e,t,n){let r=this;if(e.outerHTML.includes(t)){if(e.children.length===0)typeof n==`function`&&n(e)||(yield e);else{let r=Array.from(e.childNodes).filter(e=>e.nodeType===Node.TEXT_NODE);for(let i of r)i.textContent.includes(t)&&(typeof n==`function`&&n(e)||(yield i))}}for(let i=0;i<e.children.length;i++){let a=e.children[i];yield*r.findElementsWithText(a,t,n)}}findVisibleElement(e){let t=e;for(;t;){if(t.getBoundingClientRect().length)return t;t=t.parentElement}return null}setElementSelection(e,t,n,r){let i=this.windowApi.document.createRange();if(i.selectNodeContents(e),t){if(t.nodeType!==Node.TEXT_NODE)throw TypeError(`childTextNode必须是#text元素`);n!=null&&r!=null&&(i.setStart(t,n),i.setEnd(t,r))}let a=this.windowApi.globalThis.getSelection();a&&(a.removeAllRanges(),a.addRange(i))}},m=`4.2.11`,h={config:{},setGlobalConfig(e){Reflect.ownKeys(e).forEach(t=>{Reflect.set(h.config,t,Reflect.get(e,t))})},getGlobalConfig(){let e={};return Object.keys(h.config).forEach(t=>{let n=Reflect.get(h.config,t);if(t===`style`){let t=n==null?``:typeof n==`function`?n():n;typeof t==`string`&&(e.style=t)}else if(t===`zIndex`)e.zIndex=()=>{let e=n==null?``:typeof n==`function`?n():n;if(typeof e==`string`){let t=e=Number(e);if(!Number.isNaN(t))return t}else if(!Number.isNaN(e))return e;return 0};else if(t===`mask`){let t=h.config.mask==null?{}:h.config.mask;typeof t==`object`&&t&&(e.mask=t)}else Reflect.set(e,t,n)}),e}},g=class{[Symbol.toStringTag]=`EventEmiter`;type;data=new Map;constructor(e){this.type=e}on(e,t){let n=this.data.get(e)??[];return n.push({type:this.type,time:Date.now(),callback:t}),this.data.set(e,n),{off:()=>{this.off(e,t)},emit:(...t)=>{this.emit(e,...t)}}}off(e,t){let n=this.data.get(e)??[],r=!1;for(let e=n.length-1;e>=0;e--)n[e].callback===t&&(r=!0,n.splice(e,1));n.length===0?this.data.delete(e):r&&this.data.set(e,n)}async emit(e,...t){let n=this.data.get(e)??[];for(let e of n)await e.callback(...t)}offAll(e){typeof e==`string`?this.data.delete(e):this.data.clear()}getAllEvents(e){return typeof e==`string`?this.data.get(e):Array.from(this.data.values())}},_={$data:{min:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="min">\r
  <path fill="currentColor" d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"></path>\r
</svg>\r
`,mise:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="mise">\r
  <path\r
    fill="currentColor"\r
    d="M885.333333 85.333333H330.410667a53.333333 53.333333 0 0 0-53.333334 53.333334v106.666666H138.666667A53.333333 53.333333 0 0 0 85.333333 298.666667v586.666666a53.333333 53.333333 0 0 0 53.333334 53.333334H725.333333a53.333333 53.333333 0 0 0 53.333334-53.333334V746.154667h106.666666c29.44 0 53.333333-23.893333 53.333334-53.333334V138.666667A53.333333 53.333333 0 0 0 885.333333 85.333333zM725.333333 692.821333v192.512H138.666667V298.666667H725.333333v394.154666z m157.866667 0H778.666667V298.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H330.410667v-106.666666h554.922666l-2.133333 554.154666z"></path>\r
</svg>\r
`,max:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="max">\r
  <path\r
    fill="currentColor"\r
    d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"></path>\r
</svg>\r
`,close:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="close">\r
	<path\r
		fill="currentColor"\r
		d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>\r
</svg>\r
`,edit:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="edit">\r
  <path\r
    fill="currentColor"\r
    d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"></path>\r
  <path\r
    fill="currentColor"\r
    d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path>\r
</svg>\r
`,share:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="share">\r
  <path\r
    fill="currentColor"\r
    d="m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"></path>\r
</svg>\r
`,delete:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="delete">\r
  <path\r
    fill="currentColor"\r
    d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>\r
</svg>\r
`,search:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="search">\r
  <path\r
    fill="currentColor"\r
    d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path>\r
</svg>\r
`,upload:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="upload">\r
  <path\r
    fill="currentColor"\r
    d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"></path>\r
</svg>\r
`,loading:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="loading">\r
  <path\r
    fill="currentColor"\r
    d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>\r
</svg>\r
`,next:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="next">\r
  <path\r
    fill="currentColor"\r
    d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,prev:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="prev">\r
  <path\r
    fill="currentColor"\r
    d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,eleme:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="eleme">\r
  <path\r
    fill="currentColor"\r
    d="M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"></path>\r
</svg>\r
`,elemePlus:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="elemePlus">\r
  <path\r
    d="M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z"\r
    fill="currentColor"></path>\r
</svg>\r
`,chromeFilled:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" xml:space="preserve" data-type="chromeFilled">\r
	<path\r
		d="M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z"\r
		fill="currentColor"></path>\r
	<path\r
		d="M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z"\r
		fill="currentColor"></path>\r
	<path\r
		d="M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zM512.01 938.68H512zM414.76 701.95a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z"\r
		fill="currentColor"></path>\r
</svg>\r
`,cpu:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="cpu">\r
  <path\r
    fill="currentColor"\r
    d="M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"></path>\r
  <path\r
    fill="currentColor"\r
    d="M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"></path>\r
</svg>\r
`,videoPlay:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="videoPlay">\r
  <path\r
    fill="currentColor"\r
    d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"></path>\r
</svg>\r
`,videoPause:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="videoPause">\r
  <path\r
    fill="currentColor"\r
    d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"></path>\r
</svg>\r
`,headset:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="headset">\r
  <path\r
    fill="currentColor"\r
    d="M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"></path>\r
</svg>\r
`,monitor:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="monitor">\r
  <path\r
    fill="currentColor"\r
    d="M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"></path>\r
</svg>\r
`,documentCopy:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="documentCopy">\r
  <path\r
    fill="currentColor"\r
    d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"></path>\r
</svg>\r
`,picture:`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="picture">\r
  <path\r
    fill="currentColor"\r
    d="M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"></path>\r
  <path\r
    fill="currentColor"\r
    d="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"></path>\r
</svg>\r
`,circleClose:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="circleClose">\r
	<path\r
		fill="currentColor"\r
		d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path>\r
</svg>\r
`,view:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="view">\r
  <path\r
    fill="currentColor"\r
    d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"></path>\r
</svg>\r
`,hide:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="hide">\r
  <path\r
    fill="currentColor"\r
    d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"></path>\r
  <path\r
    fill="currentColor"\r
    d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"></path>\r
</svg>\r
`,keyboard:`<svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">\r
  <path\r
    d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>\r
  <path\r
    d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>\r
  <path\r
    d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>\r
</svg>\r
`,arrowRight:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="arrowRight">\r
	<path\r
		d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,arrowLeft:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="arrowLeft">\r
	<path\r
		d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`},hasIcon(e){return Object.keys(_.$data).includes(e)},getIcon(e){return _.$data[e]},deleteIcon(e){return Reflect.deleteProperty(_.$data,e)},setIcon(e,t){Reflect.set(_.$data,e,t)}},v={flexCenter:`pops-flex-items-center`,flexYCenter:`pops-flex-y-center`,flexXCenter:`pops-flex-x-center`,hide:`pops-hide`,hideImportant:`pops-hide-important`,noBorder:`pops-no-border`,noBorderImportant:`pops-no-border-important`,userSelectNone:`pops-user-select-none`,lineHeightCenter:`pops-line-height-center`,widthFill:`pops-width-fill`,textIsDisabled:`pops-text-is-disabled`,textIsDisabledImportant:`pops-text-is-disabled-important`},y={Object:{defineProperty:Object.defineProperty,defineProperties:Object.defineProperties}},b={document,window,globalThis,self,setTimeout:globalThis.setTimeout.bind(globalThis),setInterval:globalThis.setInterval.bind(globalThis),clearTimeout:globalThis.clearTimeout.bind(globalThis),clearInterval:globalThis.clearInterval.bind(globalThis)},x=Object.assign({},b),S={init(e){e||=Object.assign({},b),Object.assign(x,e)},get document(){return x.document},get window(){return x.window},get globalThis(){return x.globalThis},get self(){return x.self},get setTimeout(){return x.setTimeout},get setInterval(){return x.setInterval},get clearTimeout(){return x.clearTimeout},get clearInterval(){return x.clearInterval}},C={getSafeHTML(e){return window.trustedTypes?window.trustedTypes.createPolicy(`safe-innerHTML`,{createHTML:e=>e}).createHTML(e):e},setSafeHTML(e,t){e.innerHTML=this.getSafeHTML(t)}},w=`clientX`,T=`clientY`,ee=16,E=`start`,D=`move`,O=`cancel`,te=`end`,ne=`left`,re=`right`,ie=`up`,ae=`down`,oe={4:`start`,5:`move`,1:`end`,3:`cancel`};function se(e){return oe[e]}function ce(e,t,n){let r={1:{0:{move:4},4:{move:5,end:1,cancel:3},5:{move:5,end:1,cancel:3}},0:{4:{move:2,end:1,cancel:3},5:{start:2,move:2,end:1,cancel:3}}}[Number(e)][t];return r!==void 0&&r[n]||0}function le(e){[1,3,2].includes(e.state)&&(e.state=0)}function ue(e){return[5,1,3].includes(e)}function de(e){if(e.disabled)return e.state=0,!0}function fe(e,t){return Object.assign(Object.assign(Object.assign({},e),t),{state:0,disabled:!1})}function pe(e){return Math.round(100*e)/100}var me=e=>Math.sqrt(e.x*e.x+e.y*e.y),he=(e,t)=>e.x*t.x+e.y*t.y,ge=(e,t)=>{var n=me(e)*me(t);if(n===0)return 0;var r=he(e,t)/n;return r>1&&(r=1),Math.acos(r)},_e=(e,t)=>e.x*t.y-t.x*e.y,ve=e=>e/Math.PI*180,ye=(e,t)=>{var n=ge(e,t);return _e(e,t)>0&&(n*=-1),ve(n)},be=(e,t)=>{if(e!==0||t!==0)return Math.abs(e)>=Math.abs(t)?0<e?re:ne:0<t?ae:ie};function xe(){let e=0,t=0;return function(n,r){let{prevVecotr:i,startVecotr:a,activeVecotr:o}=r;return o&&(t=Math.round(ye(o,i)),e=Math.round(ye(o,a))),{angle:e,deltaAngle:t}}}function Se(){return function(e){let{prevInput:t}=e,n=0,r=0,i=0;if(t!==void 0&&(n=e.x-t.x,r=e.y-t.y,n!==0||r!==0)){let e=Math.sqrt(n**2+r**2);i=Math.round(ve(Math.acos(Math.abs(n)/e)))}return{deltaX:n,deltaY:r,deltaXYAngle:i}}}function Ce(){let e,t=0,n=0,r=0,i=0,a=0;return function(o){let{phase:s,startInput:c}=o;return E===s?(t=0,n=0,r=0,i=0,a=0):D===s&&(t=Math.round(o.points[0][w]-c.points[0][w]),n=Math.round(o.points[0][T]-c.points[0][T]),r=Math.abs(t),i=Math.abs(n),a=Math.round(me({x:r,y:i})),e=be(t,n)),{displacementX:t,displacementY:n,distanceX:r,distanceY:i,distance:a,overallDirection:e}}}function we(){let e=1;return function(t,n){let r=1,{prevVecotr:i,startVecotr:a,activeVecotr:o}=n;return o&&(r=pe(me(o)/me(i)),e=pe(me(o)/me(a))),{scale:e,deltaScale:r}}}function Te(){let e,t,n=0,r=0,i=0,a=0;return function(o){if(o!==void 0){t||=o.startInput;let s=o.timestamp-t.timestamp;if(ee<s){let c=o.x-t.x,l=o.y-t.y;i=Math.round(c/s*100)/100,a=Math.round(l/s*100)/100,n=Math.abs(i),r=Math.abs(a),e=be(c,l),t=o}}return{velocityX:n,velocityY:r,speedX:i,speedY:a,direction:e}}}function Ee(){let e=0;return function(t){let{phase:n}=t;return E===n&&(e=t.pointLength),{maxPointLength:e}}}function De(e){return{x:e.points[1][w]-e.points[0][w],y:e.points[1][T]-e.points[0][T]}}function Oe(){let e,t,n;return function(r){let{prevInput:i,startMultiInput:a}=r;return a!==void 0&&i!==void 0&&r.id!==a.id&&1<i.pointLength&&1<r.pointLength?(e=De(a),t=De(i),n=De(r)):n=void 0,{startVecotr:e,prevVecotr:t,activeVecotr:n}}}var ke={name:`tap`,pointLength:1,tapTimes:1,waitNextTapTime:300,maxDistance:2,maxDistanceFromPrevTap:9,maxPressTime:250};function Ae(e,t){let n=fe(ke,t),r,i,a,o=0;function s(){o=0,r=void 0,i=void 0}return e.compute([Ce,Ee],(t=>{if(de(n))return;let{phase:c,x:l,y:u}=t;te===c&&(n.state=0,function(){let{startInput:e,pointLength:r,timestamp:i}=t,a=i-e.timestamp,{distance:o,maxPointLength:s}=t;return s===n.pointLength&&r===0&&n.maxDistance>=o&&n.maxPressTime>a}()?(clearTimeout(a),function(e,t){if(r!==void 0){let n=me({x:e.x-r.x,y:e.y-r.y});return r=e,t.maxDistanceFromPrevTap>=n}return r=e,!0}({x:l,y:u},n)&&function(e){let t=performance.now();if(i===void 0)return i=t,!0;{let n=t-i;return i=t,n<e}}(n.waitNextTapTime)?o++:o=1,o%n.tapTimes==0?(n.state=1,e.emit2(n.name,t,n),s()):a=setTimeout((()=>{n.state=2,s()}),n.waitNextTapTime)):(s(),n.state=2))})),n}function je(e){e.use(Ae,{name:`doubletap`,tapTimes:2});let t=e.get(`doubletap`),n;return e.beforeEach(((e,r)=>{e===`tap`?(clearTimeout(n),n=setTimeout((()=>{[0,2].includes(t.state)&&r()}),300)):r()})),t}var Me=class{constructor(){this.__map={}}beforeEach(e){this.__interceptor=e}on(e,t){let n=Array.isArray(e)?e:[e];for(let e of n){this.__map[e]=this.__map[e]||[];let n=this.__map[e];n&&n.push(t)}return this}emit(e,t,n){this.__interceptor===void 0?(this.__emit(e,t),n&&n()):this.__interceptor(e,(()=>{this.__emit(e,t),n&&n()}))}__emit(e,t){let n=this.__map[e];if(Array.isArray(n)&&n?.length)for(let r of n)r(t,e);this.event=t}off(e,t){let n=this.__map[e];if(n!==void 0){if(t===void 0)delete this.__map[e];else{let e=n.findIndex((e=>e===t));n.splice(e,1)}}}destroy(){this.__map={}}};function Ne(){let e,t,n,r,i=0;return function(a){if(e=t,a!==void 0){i=2**53-1>i?++i:1;let o=function(e,t){let{phase:n,points:r,changedPoints:i,nativeEvent:a}=e,o=r.length,s=E===n,c=te===n&&o===0||O===n,l=Date.now(),{x:u,y:d}=Pe(r)||Pe(i),{currentTarget:f}=a;return Object.assign(e,{id:t,x:u,y:d,timestamp:l,isStart:s,isEnd:c,pointLength:o,currentTarget:f,getOffset(e=f){let t=e.getBoundingClientRect();return{x:u-Math.round(t.left),y:d-Math.round(t.top)}}})}(a,i);t=o;let{isStart:s,pointLength:c}=o;return s&&(n=o,e=void 0,r=1<c?o:void 0),Object.assign(Object.assign({},o),{prevInput:e,startMultiInput:r,startInput:n})}}}function Pe(e){let{length:t}=e;if(0<t){if(t===1){let{clientX:t,clientY:n}=e[0];return{x:Math.round(t),y:Math.round(n)}}let n=e.reduce(((e,t)=>(e.x+=t[w],e.y+=t[T],e)),{x:0,y:0});return{x:Math.round(n.x/t),y:Math.round(n.y/t)}}}function Fe(e,t,n,r){let i={};for(let e in n)[`target`,`currentTarget`,`type`].includes(e)||(i[e]=n[e]);let a;return document.createEvent?(a=document.createEvent(`HTMLEvents`),a.initEvent(e,r?.bubbles,r?.cancelable)):a=new Event(e,r),Object.assign(a,i,{match:()=>n.targets&&0<n.targets.length&&n.targets.every((e=>a.currentTarget.contains(e)))}),t.dispatchEvent(a)}function Ie(e,t){let{preventDefault:n}=t;return r=n,Object.prototype.toString.call(r)===`[object Function]`?n(e):!!n;var r}var Le=[`touchstart`,`touchmove`,`touchend`,`touchcancel`,`mousedown`],Re=[`mousemove`,`mouseup`],ze={domEvents:{bubbles:!0,cancelable:!0},preventDefault:e=>{if(e.target&&`tagName`in e.target){let{tagName:t}=e.target;return!/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/.test(t)}return!1}},Be=class extends Me{constructor(e,t){super(),this.v=`2.1.3`,this.__computeFunctionList=[],this.__computeFunctionCreatorList=[],this.__pluginContexts=[],this.__isIgnoreMouse=!1,this.el=e,this.c={},this.__options=Object.assign(Object.assign({},ze),t);let n=function(e){let t=Ne();return function(n){let r=[],i=[];Array.from(n.touches).forEach((({clientX:t,clientY:n,target:a})=>{e!=null&&e.contains(a)&&(r.push(a),i.push({clientX:t,clientY:n,target:a}))}));let a=Array.from(n.changedTouches).map((({clientX:e,clientY:t,target:n})=>({clientX:e,clientY:t,target:n})));return t({phase:n.type.replace(`touch`,``),changedPoints:a,points:i,nativeEvent:n,target:n.target,targets:r})}}(this.el),r=function(){let e,t=!1,n=null,r=Ne();return function(i){let{clientX:a,clientY:o,type:s,button:c,target:l}=i,u,d=[{clientX:a,clientY:o,target:l}];if(s===`mousedown`&&c===0)n=l,t=!0,u=`start`;else{if(!t)return;s===`mousemove`?u=`move`:s===`mouseup`&&(d=[],u=`end`,t=!1)}let f=e||[{clientX:a,clientY:o,target:l}];if(e=[{clientX:a,clientY:o,target:l}],u!==void 0)return r({phase:u,changedPoints:f,points:d,target:n,targets:[n],nativeEvent:i})}}();if(this.__inputCreatorMap={touchstart:n,touchmove:n,touchend:n,touchcancel:n,mousedown:r,mousemove:r,mouseup:r},this.on(`at:after`,(e=>{let{target:t,__type:n}=e,{domEvents:r}=this.__options;r&&this.el!==void 0&&t&&(Fe(n,t,e,r),Fe(`at:after`,t,e,r))})),e!==void 0){e.style.webkitTapHighlightColor=`rgba(0,0,0,0)`;let t=!1;try{let e={};Object.defineProperty(e,"passive",{get(){t=!0}}),window.addEventListener(`_`,(()=>{}),e)}catch{}this.on(`u`,function(e,t,n){return Le.forEach((r=>{e.addEventListener(r,t,n)})),Re.forEach((e=>{window.addEventListener(e,t,n)})),()=>{Le.forEach((n=>{e.removeEventListener(n,t)})),Re.forEach((e=>{window.removeEventListener(e,t)}))}}(e,this.catchEvent.bind(this),!1===this.__options.preventDefault&&t?{passive:!0}:{passive:!1}))}}use(e,t){this.__pluginContexts.push(e(this,t))}catchEvent(e){let t=this.__inputCreatorMap[e.type](e);if(t!==void 0){let n=()=>e.stopPropagation(),r=()=>e.stopImmediatePropagation(),i=()=>e.preventDefault();if(Ie(e,this.__options))i();else if(e.type===`touchstart`?this.__isIgnoreMouse=!0:e.type===`touchmove`&&(this.__isIgnoreMouse=!1),this.__isIgnoreMouse&&e.type.startsWith(`mouse`))return void(e.type===`mouseup`&&(this.__isIgnoreMouse=!1));this.emit(`input`,t),this.emit2(`at:${t.phase}`,t,{});let a={};this.__computeFunctionList.forEach((e=>{let n=e(t,a);if(n!==void 0)for(let e in n)a[e]=n[e]})),this.emit(`computed`,Object.assign(Object.assign(Object.assign({},t),a),{stopPropagation:n,stopImmediatePropagation:r,preventDefault:i}))}}compute(e,t){for(let t of e)this.__computeFunctionCreatorList.includes(t)||(this.__computeFunctionCreatorList.push(t),this.__computeFunctionList.push(t()));this.on(`computed`,t)}beforeEach(e){super.beforeEach(((t,n)=>{this.c?.name?e(t,n):n()}))}get(e){return this.__pluginContexts.find((t=>e===t.name))}set(e){this.__options=Object.assign(Object.assign({},this.__options),e)}emit2(e,t,n){this.c=n,this.emit(e,Object.assign(Object.assign({},t),{type:e}),(()=>{this.emit(`at:after`,Object.assign(Object.assign({},t),{name:e,__type:e}))}))}destroy(){this.emit(`u`),super.destroy()}},Ve={name:`pan`,threshold:10,pointLength:1};function He(e,t){let n=fe(Ve,t);return e.compute([Te,Ce,Se],(t=>{if(le(n),de(n))return;let r=function(){let{pointLength:e,distance:r}=t;return n.pointLength===e&&n.threshold<=r}();if(n.state=ce(r,n.state,t.phase),r||ue(n.state)){let{name:r}=n;e.emit2(r,t,n),e.emit2(r+se(n.state),t,n),![te,O].includes(t.phase)&&t.direction&&e.emit2(r+t.direction,t,n)}})),n}var Ue={name:`swipe`,threshold:10,velocity:.3,pointLength:1};function We(e,t){let n=fe(Ue,t);return e.compute([Ce,Te,Ee],(t=>{if(n.state=0,!n.disabled&&function(){if(te!==t.phase)return!1;let{velocityX:e,velocityY:r,distance:i,maxPointLength:a}=t;return a===n.pointLength&&t.points.length===0&&n.threshold<i&&n.velocity<Math.max(e,r)}()){let{name:r}=n;n.state=1,e.emit2(r,t,n),e.emit2(r+t.direction,t,n)}})),n}var Ge={name:`press`,pointLength:1,maxDistance:9,minPressTime:251};function Ke(e,t){let n=fe(Ge,t),r=0;return e.compute([Ce],(t=>{if(de(n))return;let{phase:i,startInput:a,pointLength:o}=t;if(E===i&&n.pointLength===o)le(n),clearTimeout(r),r=setTimeout((()=>{n.state=1,e.emit2(n.name,t,n)}),n.minPressTime);else if(te===i&&n.state===1)e.emit2(`${n.name}${ie}`,t,n);else if(n.state!==1){let e=t.timestamp-a.timestamp;(!function(){let{distance:e}=t;return e&&n.maxDistance>e}()||n.minPressTime>e&&[te,O].includes(i))&&(clearTimeout(r),n.state=2)}})),n}var qe={name:`pinch`,threshold:0,pointLength:2};function Je(e,t){let n=fe(qe,t);return e.compute([Oe,we],(t=>{if(le(n),de(n))return;let r=function(){let{pointLength:e,scale:r,deltaScale:i,phase:a}=t;return n.pointLength===e&&n.threshold<Math.abs(r-1)}();n.state=ce(r,n.state,t.phase);let{name:i}=n;if(r||ue(n.state)){e.emit2(i,t,n);let{deltaScale:r}=t;r!==1&&e.emit2(i+(1<r?`in`:`out`),t,n)}let a=se(n.state);a&&e.emit2(i+a,t,n)})),n}var Ye={name:`rotate`,threshold:0,pointLength:2};function Xe(e,t){let n=fe(Ye,t);return e.compute([Oe,xe],(t=>{if(de(n))return;le(n);let r=function(){let{pointLength:e,angle:r}=t;return n.pointLength===e&&n.threshold<Math.abs(r)}();n.state=ce(r,n.state,t.phase);let{name:i}=n;(r||ue(n.state))&&e.emit2(i,t,n);let a=se(n.state);a&&e.emit2(i+a,t,n)})),n}var Ze=class extends Be{constructor(e,t){super(e,t),this.use(Ae),this.use(He),this.use(We),this.use(Ke),this.use(Je),this.use(Xe)}};Ze.STATE_POSSIBLE=0,Ze.STATE_START=4,Ze.STATE_MOVE=5,Ze.STATE_END=1,Ze.STATE_CANCELLED=3,Ze.STATE_FAILED=2,Ze.STATE_RECOGNIZED=1,Ze.tap=Ae,Ze.pan=He,Ze.swipe=We,Ze.press=Ke,Ze.rotate=Xe,Ze.pinch=Je,Ze.doubletap=je;var k=new class{sleep(e){return new Promise(t=>{setTimeout(()=>{t(!0)},e)})}isWin(e){return typeof e!=`object`||e instanceof Node?!1:e===globalThis||e===window||e===self||e===S.globalThis||e===S.window||e===S.self||typeof unsafeWindow<`u`&&e===unsafeWindow||e?.Math?.toString()===`[object Math]`}isDOM(e){return e instanceof Node}isNodeList(e){return Array.isArray(e)||e instanceof NodeList}delete(e,t){typeof Reflect==`object`&&typeof Reflect.deleteProperty==`function`?Reflect.deleteProperty(e,t):delete e[t]}assign(e={},t={},n=!1){let r=this;if(Array.isArray(t)&&!t.filter(e=>typeof e==`object`).length)return t;if(t==null)return e;e??={};let i;i=n?t:e;for(let a in i){if(!n&&!(a in t))continue;let i=Reflect.get(e,a),o=Reflect.get(t,a);if(typeof o==`object`&&o&&a in e&&!r.isDOM(o)&&!(o instanceof g)){let t;Array.isArray(o)?(Array.isArray(i)&&(i.length=0),t=o):t=r.assign(i,o,n),Reflect.set(e,a,t)}else Reflect.set(e,a,o)}return e}getRandomGUID(){return typeof S.globalThis?.crypto?.randomUUID==`function`?S.globalThis.crypto.randomUUID():`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,function(e){let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})}contains(...e){let[t,n]=e;if(e.length===1)return this.contains(S.document.body||S.document.documentElement,e[0]);if(n==null)return!1;if(typeof n[Symbol.iterator]==`function`){let e=!0;for(let r of n)if(!t.contains(r)){e=!1;break}return e}return t.contains(n)}formatTime(e=new Date,t=`yyyy-MM-dd HH:mm:ss`){let n=e==null?new Date:new Date(e);function r(e){return e<10?`0`+e:e}function i(e){return e>12?e-12:e}let a={yyyy:n.getFullYear(),MM:r(n.getMonth()+1),dd:r(n.getDate()),HH:r(n.getHours()),hh:r(i(n.getHours())),mm:r(n.getMinutes()),ss:r(n.getSeconds())};return Object.keys(a).forEach(function(e){let n=new RegExp(e,`g`);t=t.replace(n,a[e])}),t}formatByteToSize(e,t=!0){if(e=parseInt(e.toString()),isNaN(e))throw TypeError(`Utils.formatByteToSize 参数 byteSize 格式不正确`);let n=0,r=`KB`,i={};i.B=1,i.KB=1024,i.MB=i.KB*i.KB,i.GB=i.MB*i.KB,i.TB=i.GB*i.KB,i.PB=i.TB*i.KB,i.EB=i.PB*i.KB,i.ZB=i.EB*i.KB,i.YB=i.ZB*i.KB,i.BB=i.YB*i.KB,i.NB=i.BB*i.KB,i.DB=i.NB*i.KB;for(let t in i)if(n=e/i[t],r=t,i.KB>=n)break;return n=n.toFixed(2),n=t?n+r.toString():parseFloat(n.toString()),n}AnyTouch=()=>Ze;AnyTouchDoubleTapPlugin=()=>je;isPhone(e=S.globalThis.navigator.userAgent){return!!/(iPhone|iPad|iPod|iOS|Android)/i.test(e)}setTimeout(e,t=0){return S.setTimeout(e,t)}clearTimeout(e){return S.clearTimeout(e)}setInterval(e,t=0){return S.setInterval(e,t)}clearInterval(e){return S.clearInterval(e)}setArray(e,t,n){if(e==null||!Array.isArray(n))return;let r=e[t];Array.isArray(e[t])?r.length=0:e[t]=[],e[t]=n}getMaxZIndexNodeInfoFromPoint(e,t){typeof e==`function`&&(e=e()),typeof e==`number`&&(t=e,e=void 0),(typeof t!=`number`||Number.isNaN(t))&&(t=10);let n=2*10**9,r=[],i=globalThis.innerWidth,a=globalThis.innerHeight;for(let e=0;e<8;e++)for(let t=0;t<8;t++){let n={x:globalThis.innerWidth*(e/8)+10,y:globalThis.innerHeight*(t/8)+10};n.x>i&&(n.x=i),n.y>a&&(n.y=a),r.push(n)}let o=r;e&&(o.length=0,Array.isArray(e)?o.push(...e):o.push(e));let s=o.map(e=>{let r,i,a;if(e instanceof HTMLElement){r=e;let t=e.getBoundingClientRect();i=t.x+t.width/2,a=t.y+t.height/2}else r=document.elementFromPoint(e.x,e.y),i=e.x,a=e.y;let o=r?.shadowRoot;if(o&&(r=o.elementFromPoint(i,a)),!(r instanceof HTMLElement))return;let s=r,c=0,l=null,u={x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0};for(;s;){let e=globalThis.getComputedStyle(s),t=parseInt(e.zIndex);e.position!==`static`&&!isNaN(t)&&t>c&&(c=t,l=s),s=s.parentElement}if(l){let e=l.getBoundingClientRect();u={x:e.x,y:e.y,width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left}}let d=c+t;if(!(d>=n))return{zIndex:d,originZIndex:c,node:l,positionNode:r,positionX:i,positionY:a,rect:u}}).filter(e=>e!=null);return s.sort((e,t)=>e.zIndex<t.zIndex?1:e.zIndex>t.zIndex?-1:0),s}},Qe={domEventSymbol:Symbol(`events_`+((1+Math.random())*65536|0).toString(16).substring(1))},$e={isWin:k.isWin.bind(k),delete:k.delete.bind(k),isNodeList:k.isNodeList.bind(k)},et=class{get windowApi(){return S.window}on(e,t,n,r,i){let a=function(e,t,n){let r=e[t];if(typeof r==`boolean`)n.capture=r,typeof e[t+1]==`boolean`&&(n.once=e[t+1]),typeof e[t+2]==`boolean`&&(n.passive=e[t+2]);else if(r&&typeof r==`object`)for(let e in n)Reflect.has(r,e)&&Reflect.set(n,e,r[e]);return n},o=this,s=arguments;if(typeof e==`string`&&(e=o.selectorAll(e)),e==null)return{off(){},emit(){}};let c=[];e instanceof NodeList||Array.isArray(e)?c=c.concat(Array.from(e)):c.push(e);let l=[];Array.isArray(t)?l=l.concat(t.filter(e=>typeof e==`string`&&e.toString()!==``)):typeof t==`string`&&(l=l.concat(t.split(` `).filter(e=>e!==``)));let u=[];Array.isArray(n)?u=u.concat(n.filter(e=>typeof e==`string`&&e.toString()!==``)):typeof n==`string`&&u.push(n);let d=r,f={capture:!1,once:!1,passive:!1,isComposedPath:!1,overrideTarget:!0};return typeof n==`function`?(d=n,f=a(s,3,f)):f=a(s,4,f),c.forEach(e=>{let t=$e.isWin(e);l.forEach(a=>{let s=()=>{f.once&&this.off(e,a,n,r,i)},c=function(n){f.isPreventEvent&&o.preventEvent(n);let r,i,a,c=!1;if(u.length){let s;if(f.isComposedPath){let e=n.composedPath();!e.length&&n.target&&e.push(n.target),s=e[0]}else s=n.target;let l=t?o.windowApi.document.documentElement:e;if(u.find(e=>{if(o.matches(s,e))return!0;let t=o.closest(s,e);return t&&l?.contains?.(t)?(s=t,!0):!1})){if(f.overrideTarget)try{let e=n.target;y.Object.defineProperties(n,{target:{get(){return s}},originTarget:{get(){return e}}})}catch{}c=!0,r=s,i=n,a=s}}else c=!0,r=e,i=n;if(c){let e=d.call(r,i,a);if(s(),typeof e==`boolean`&&!e)return!1}};e.addEventListener(a,c,f);let l=Reflect.get(e,Qe.domEventSymbol)||{};l[a]=l[a]||[],l[a].push({selector:u,option:f,handlerCallBack:c,callback:d}),Reflect.set(e,Qe.domEventSymbol,l)})}),{off:e=>{o.off(c,l,u,d,f,e)},emit:(e,t)=>{o.emit(c,l,e,t)}}}off(e,t,n,r,i,a){let o=function(e,t,n){let r=e[t];return typeof r==`boolean`?n.capture=r:r&&typeof r==`object`&&`capture`in r&&(n.capture=r.capture),n},s=this,c=arguments;if(typeof e==`string`&&(e=s.selectorAll(e)),e==null)return;let l=[];e instanceof NodeList||Array.isArray(e)?(e=e,l=l.concat(Array.from(e))):l.push(e);let u=[];Array.isArray(t)?u=u.concat(t.filter(e=>typeof e==`string`&&e.toString()!==``)):typeof t==`string`&&(u=u.concat(t.split(` `).filter(e=>e!==``)));let d=[];Array.isArray(n)?d=d.concat(n.filter(e=>typeof e==`string`&&e.toString()!==``)):typeof n==`string`&&d.push(n);let f=r,p={capture:!1};typeof n==`function`?(f=n,p=o(c,3,p)):p=o(c,4,p),c.length===5&&typeof c[4]==`function`&&typeof a!=`function`&&(a=i),l.forEach(e=>{let n=Reflect.get(e,Qe.domEventSymbol)||{};u.forEach(r=>{let i=n[r]||[],o=typeof a==`function`?i.filter(a):i;for(let t=0;t<o.length;t++){let n=o[t],a=!0;if(a&&f&&n.callback!==f&&(a=!1),a&&d.length&&Array.isArray(n.selector)&&JSON.stringify(n.selector)!==JSON.stringify(d)&&(a=!1),a&&typeof n.option.capture==`boolean`&&p.capture!==n.option.capture&&(a=!1),a){e.removeEventListener(r,n.handlerCallBack,n.option);for(let e=i.length-1;e>=0;e--)i[e]===n&&i.splice(e,1)}}i.length===0&&($e.delete(n,t),Object.keys(n).length===0&&$e.delete(e,Qe.domEventSymbol))}),Reflect.set(e,Qe.domEventSymbol,n)})}offAll(e,t){let n=this;if(typeof e==`string`&&(e=n.selectorAll(e)),e==null)return;let r=[];e instanceof NodeList||Array.isArray(e)?r=r.concat(Array.from(e)):r.push(e);let i=[];Array.isArray(t)?i=i.concat(t):typeof t==`string`&&(i=i.concat(t.split(` `))),r.forEach(e=>{[...new Set([...Object.getOwnPropertySymbols(e),Qe.domEventSymbol])].forEach(t=>{if(!t.toString().startsWith(`Symbol(events_`))return;let n=Reflect.get(e,t)||{};(i.length?i:Object.keys(n)).forEach(r=>{let i=n[r];if(!i)return;for(let t of i)e.removeEventListener(r,t.handlerCallBack,{capture:t.option.capture});let a=Reflect.get(e,t);$e.delete(a,r),Object.keys(a).length===0&&$e.delete(e,t)})})})}onReady(e){let t=this;if(typeof e!=`function`)return;function n(){try{return document.readyState===`complete`||document.readyState!==`loading`&&!document.documentElement.doScroll}catch{return!1}}function r(){o(),e()}let i=[{target:S.document,eventType:`DOMContentLoaded`,callback:r},{target:S.window,eventType:`load`,callback:r}];function a(){for(let e=0;e<i.length;e++){let n=i[e];t.on(n.target,n.eventType,n.callback)}}function o(){for(let e=0;e<i.length;e++){let n=i[e];t.off(n.target,n.eventType,n.callback)}}n()?k.setTimeout(e,0):a()}emit(e,t,n,r=!0){let i=this;if(typeof e==`string`&&(e=i.selectorAll(e)),e==null)return;let a=[];e instanceof NodeList||Array.isArray(e)?a=a.concat(Array.from(e)):a.push(e);let o=(e,t)=>{e instanceof Event&&typeof t==`object`&&t&&!Array.isArray(t)&&Object.keys(t).forEach(n=>{let r=Reflect.get(t,n);Reflect.set(e,n,r)})},s=[],c=null;Array.isArray(t)?s=t.filter(e=>typeof e==`string`&&e.trim()!==``):typeof t==`string`?s=t.split(` `):t instanceof Event&&(c=t,o(c,n)),a.forEach(e=>{let t=Reflect.get(e,Qe.domEventSymbol)||{},i=(n,i)=>{r==0&&i in t?t[i].forEach(e=>{e.handlerCallBack(n)}):e.dispatchEvent(n)};if(c){let e=c,t=e.type;i(e,t)}else s.forEach(e=>{let t=new Event(e);o(t,n),i(t,e)})})}onKeyup(e,t,n){let r=this;if(e!=null){if(typeof e==`string`&&(e=r.selectorAll(e)),$e.isNodeList(e)){let i=[];return e.forEach(e=>{let a=r.onKeyup(e,t,n);i.push(a)}),{off(){i.forEach(e=>{e&&e.off()})}}}return r.on(e,`keyup`,null,t,n)}}onKeydown(e,t,n){let r=this;if(e!=null){if(typeof e==`string`&&(e=r.selectorAll(e)),$e.isNodeList(e)){let i=[];return e.forEach(e=>{let a=r.onKeydown(e,t,n);i.push(a)}),{off(){i.forEach(e=>{e&&e.off()})}}}return r.on(e,`keydown`,null,t,n)}}preventEvent(...e){let t=(e,t)=>{if(e?.stopPropagation(),e?.stopImmediatePropagation(),!(typeof t==`boolean`&&t))return e?.preventDefault(),!1};if(e[0]instanceof Event){let n=e[1];return t(e[0],n)}{let n=e[0],r=e[1],i,a=!1,o=!1;typeof r==`string`&&(r=[r]);let s;if(e.length!==2){if(typeof e[2]==`string`||Array.isArray(e[2]))i=e[2],typeof e[3]==`object`&&e[3]!=null&&(s=e[3]);else if(typeof e[2]==`object`&&e[2]!=null&&!Array.isArray(e[2]))s=e[2];else throw TypeError(`Invalid argument`)}return s&&(a=!!s.capture,o=!!s.onlyStopPropagation),this.on(n,r,i,e=>t(e,o),{capture:a})}}selector(e){return this.selectorAll(e)[0]}selectorAll(e){if(e=e.trim(),e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,``),Array.from(S.document.querySelectorAll(e)).filter(e=>e?.innerHTML?.trim()===``);if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let t=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];return e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,``),Array.from(S.document.querySelectorAll(e)).filter(e=>(e?.textContent||e?.innerText)?.includes(t))}if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let t=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],n=t.match(/("|'),[\s]*("|')([igm]{0,3})$/i),r=``;n&&(t=t.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,``),r=n[3]);let i=new RegExp(t,r);return e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,``),Array.from(S.document.querySelectorAll(e)).filter(e=>!!(e?.textContent||e?.innerText)?.match(i))}return Array.from(S.document.querySelectorAll(e))}matches(e,t){if(t=t.trim(),e==null)return!1;if(t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,``),e.matches(t)&&e?.innerHTML?.trim()===``;if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let n=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,``);let r=e?.textContent||e?.innerText;return typeof r!=`string`&&(r=``),e.matches(t)&&r?.includes(n)}if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let n=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],r=n.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i=``;r&&(n=n.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,``),i=r[3]);let a=new RegExp(n,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,``);let o=e?.textContent||e?.innerText;return typeof o!=`string`&&(o=``),e.matches(t)&&!!o?.match(a)}return e.matches(t)}closest(e,t){if(t=t.trim(),t.match(/[^\s]{1}:empty$/gi)){t=t.replace(/:empty$/gi,``);let n=e?.closest(t);return n&&n?.innerHTML?.trim()===``?n:null}if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let n=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,``);let r=e?.closest(t);if(r){let t=e?.textContent||e?.innerText;if(typeof t==`string`&&t.includes(n))return r}return null}if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let n=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],r=n.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i=``;r&&(n=n.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,``),i=r[3]);let a=new RegExp(n,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,``);let o=e?.closest(t);if(o){let t=e?.textContent||e?.innerText;if(typeof t==`string`&&t.match(a))return o}return null}return e?.closest(t)}onInput(e,t,n){let r=!1,i=async e=>{r||await t(e)},a=()=>{r=!0},o=()=>{r=!1,this.emit(e,`input`,{isComposite:r})},s=this.on(e,`input`,i,n),c=this.on(e,`compositionstart`,a,n),l=this.on(e,`compositionend`,o,n);return{off:()=>{s.off(),c.off(),l.off()}}}},A=new class extends et{getAnimationEndNameList(){return[`webkitAnimationEnd`,`mozAnimationEnd`,`MSAnimationEnd`,`oanimationend`,`animationend`]}getTransitionEndNameList(){return[`webkitTransitionEnd`,`mozTransitionEnd`,`MSTransitionEnd`,`otransitionend`,`transitionend`]}offset(e,t=!0){let n=e.getBoundingClientRect(),r=e.ownerDocument.defaultView;return new DOMRect(t?parseFloat((n.left+(r?.pageXOffset||0)).toString()):n.left,t?parseFloat((n.top+(r?.pageYOffset||0)).toString()):n.top,n.width,n.height)}width(e,t=!1,n){let r=this;if(typeof e==`string`&&(e=this.selector(e)),e!=null){if(k.isWin(e))return S.window.document.documentElement.clientWidth;if(e.nodeType===9)return e=e,Math.max(e.body.scrollWidth,e.documentElement.scrollWidth,e.body.offsetWidth,e.documentElement.offsetWidth,e.documentElement.clientWidth);if(t||!t&&A.isShow(e)){if(e=e,parseFloat(A.getStyleValue(e,`width`).toString())>0)return parseFloat(A.getStyleValue(e,`width`).toString());if(e.offsetWidth>0){let t=A.getStyleValue(e,`borderLeftWidth`),n=A.getStyleValue(e,`borderRightWidth`),r=A.getStyleValue(e,`paddingLeft`),i=A.getStyleValue(e,`paddingRight`),a=parseFloat(e.offsetWidth.toString())-parseFloat(t.toString())-parseFloat(n.toString())-parseFloat(r.toString())-parseFloat(i.toString());return parseFloat(a.toString())}return 0}{e=e;let{cloneNode:t,recovery:i}=A.showElement(e,n),a=r.width(t,!0,n);return i(),a}}}height(e,t=!1,n){let r=this;if(k.isWin(e))return S.window.document.documentElement.clientHeight;if(typeof e==`string`&&(e=this.selector(e)),e!=null){if(e.nodeType===9)return e=e,Math.max(e.body.scrollHeight,e.documentElement.scrollHeight,e.body.offsetHeight,e.documentElement.offsetHeight,e.documentElement.clientHeight);if(t||!t&&A.isShow(e)){if(e=e,parseFloat(A.getStyleValue(e,`height`).toString())>0)return parseFloat(A.getStyleValue(e,`height`).toString());if(e.offsetHeight>0){let t=A.getStyleValue(e,`borderTopWidth`),n=A.getStyleValue(e,`borderBottomWidth`),r=A.getStyleValue(e,`paddingTop`),i=A.getStyleValue(e,`paddingBottom`),a=parseFloat(e.offsetHeight.toString())-parseFloat(t.toString())-parseFloat(n.toString())-parseFloat(r.toString())-parseFloat(i.toString());return parseFloat(a.toString())}return 0}{e=e;let{cloneNode:t,recovery:i}=A.showElement(e,n),a=r.height(t,!0,n);return i(),a}}}outerWidth(e,t=!1,n){let r=this;if(k.isWin(e))return S.window.innerWidth;if(typeof e==`string`&&(e=this.selector(e)),e!=null){if(e=e,t||!t&&A.isShow(e)){let t=getComputedStyle(e,null),n=A.getStyleValue(t,`marginLeft`),r=A.getStyleValue(t,`marginRight`);return e.offsetWidth+n+r}{let{cloneNode:t,recovery:i}=A.showElement(e,n),a=r.outerWidth(t,!0,n);return i(),a}}}outerHeight(e,t=!1,n){let r=this;if(k.isWin(e))return S.window.innerHeight;if(typeof e==`string`&&(e=this.selector(e)),e=e,t||!t&&A.isShow(e)){let t=getComputedStyle(e,null),n=A.getStyleValue(t,`marginTop`),r=A.getStyleValue(t,`marginBottom`);return e.offsetHeight+n+r}{let{cloneNode:t,recovery:i}=A.showElement(e,n),a=r.outerHeight(t,!0,n);return i(),a}}addClassName(e,...t){e!=null&&e instanceof Element&&t.length!==0&&t.forEach(t=>{if(t==null)return;if(Array.isArray(t)){this.addClassName(e,...t);return}if(typeof t==`function`&&(t=t()),typeof t!=`string`||t.trim()===``)return;let n=t.split(` `).filter(e=>e.trim()!==``);e.classList.add(...n)})}removeClassName(e,...t){e!=null&&e instanceof Element&&t.length!==0&&t.forEach(t=>{if(t==null)return;if(Array.isArray(t)){this.removeClassName(e,...t);return}if(typeof t==`function`&&(t=t()),typeof t!=`string`||t.trim()===``)return;let n=t.split(` `).filter(e=>e.trim()!==``);e.classList.remove(...n)})}containsClassName(e,t){return e==null||typeof t!=`string`||t.trim()===``?!1:e.classList.contains(t)}css(e,t,n){let r=this;function i(e,t){return typeof t==`number`&&(t=t.toString()),typeof t==`string`&&[`width`,`height`,`top`,`left`,`right`,`bottom`,`font-size`].includes(e)&&t.match(/[0-9]$/gi)&&(t+=`px`),t}if(typeof e==`string`&&(e=r.selectorAll(e)),e==null)return;if(Array.isArray(e)||e instanceof NodeList){if(typeof t==`string`){if(n==null)return r.css(e[0],t);e.forEach(e=>{r.css(e,t)});return}if(typeof t==`object`){e.forEach(e=>{r.css(e,t)});return}return}let a=(t,n)=>{typeof n==`string`&&n.trim().endsWith(`!important`)?(n=n.trim().replace(/!important$/gi,``).trim(),e.style.setProperty(t,n,`important`)):(n=i(t,n),e.style.setProperty(t,n))};if(typeof t==`string`){if(n==null)return S.globalThis.getComputedStyle(e).getPropertyValue(t);a(t,n)}else if(typeof t==`object`)for(let e in t){let n=t[e];a(e,n)}else throw TypeError(`property must be string or object`)}createElement(e,t,n){let r=S.document.createElement(e);return typeof t==`string`?(C.setSafeHTML(r,t),r):(t??={},n??={},Object.keys(t).forEach(e=>{let n=t[e];e===`innerHTML`?C.setSafeHTML(r,n):Reflect.set(r,e,n)}),Object.keys(n).forEach(e=>{let t=n[e];typeof t==`object`?t=JSON.stringify(t):typeof t==`function`&&(t=t.toString()),r.setAttribute(e,t)}),r)}parseTextToDOM(e){return e=e.replace(/^[\n|\s]*/g,``).replace(/[\n|\s]*$/g,``),this.createElement(`div`,{innerHTML:e}).firstChild}getTextBoundingRect(e,t,n,r){if(!e||!(`value`in e))return e;if(typeof t==`string`&&(t=parseFloat(t)),(typeof t!=`number`||isNaN(t))&&(t=0),t=t<0?0:Math.min(e.value.length,t),typeof n==`string`&&(n=parseFloat(n)),(typeof n!=`number`||isNaN(n)||n<t)&&(n=t),n=n<0?0:Math.min(e.value.length,n),typeof e.createTextRange==`function`){let r=e.createTextRange();return r.collapse(!0),r.moveStart(`character`,t),r.moveEnd(`character`,n-t),r.getBoundingClientRect()}let i=_(),a=i.top,o=i.left,s=v(`width`,!0),c=v(`height`,!0),l=`white-space:pre;padding:0;margin:0;`,u=[`direction`,`font-family`,`font-size`,`font-size-adjust`,`font-variant`,`font-weight`,`font-style`,`letter-spacing`,`line-height`,`text-align`,`text-indent`,`text-transform`,`word-wrap`,`word-spacing`];a+=v(`padding-top`,!0),a+=v(`border-top-width`,!0),o+=v(`padding-left`,!0),o+=v(`border-left-width`,!0),o+=1;for(let e=0;e<u.length;e++){let t=u[e];l+=t+`:`+v(t,!1)+`;`}let d=e.value||`G`,f=d.length,p=document.createElement(`div`);t>0&&g(0,t);let m=g(t,n);f>n&&g(n,f),p.style.cssText=l,p.style.position=`absolute`,p.style.top=a+`px`,p.style.left=o+`px`,p.style.width=s+`px`,p.style.height=c+`px`,S.document.body.appendChild(p);let h=m.getBoundingClientRect();return r||p.parentNode.removeChild(p),h;function g(e,t){let n=document.createElement(`span`);return n.style.cssText=l,n.textContent=d.substring(e,t),p.appendChild(n),n}function _(){let t=document.body,n=document.defaultView,r=document.documentElement,i=document.createElement(`div`);i.style.paddingLeft=i.style.width=`1px`,t.appendChild(i);let a=i.offsetWidth==2;t.removeChild(i);let o=e.getBoundingClientRect(),s=r.clientTop||t.clientTop||0,c=r.clientLeft||t.clientLeft||0,l=n?.pageYOffset||a&&r.scrollTop||t.scrollTop,u=n?.pageXOffset||a&&r.scrollLeft||t.scrollLeft;return{top:o.top+l-s,left:o.left+u-c}}function v(t,n){let r=S.document.defaultView.getComputedStyle(e,null).getPropertyValue(t);return n?parseFloat(r):r}}cssHide(e,t=!1){e!=null&&(t?A.addClassName(e,v.hideImportant):A.addClassName(e,v.hide))}cssShow(e){e!=null&&(A.removeClassName(e,v.hide),A.removeClassName(e,v.hideImportant))}toElement(e,t=!1,n=!1){function r(){let t=new DOMParser;return n?t.parseFromString(e,`text/html`):t.parseFromString(e,`text/html`).body.firstChild}function i(){let t=S.document.createElement(`div`);return C.setSafeHTML(t,e),n?t:t.firstChild}return t?r():i()}append(e,t){if(typeof e==`string`&&(e=this.selector(e)),e==null)return;function n(e,n){typeof t==`string`?e.insertAdjacentHTML(`beforeend`,C.getSafeHTML(n)):e.appendChild(n)}if(Array.isArray(t)||t instanceof NodeList){let n=S.document.createDocumentFragment();t.forEach(e=>{typeof e==`string`&&(e=this.toElement(e,!0,!1)),n.appendChild(e)}),e.appendChild(n)}else n(e,t)}appendHead(e){S.document.head?S.document.head.appendChild(e):S.document.documentElement.appendChild(e)}appendBody(e){S.document.body?S.document.body.appendChild(e):S.document.documentElement.appendChild(e)}isShow(e){return!!e.getClientRects().length}showElement(e,t){let n=e.cloneNode(!0);n.setAttribute(`style`,`visibility: hidden !important;display:block !important;`);let r=S.document.documentElement,i=e.getRootNode();return r=t??(i==e?S.document.documentElement:i),r.appendChild(n),{cloneNode:n,recovery(){A.remove(n)}}}getStyleValue(e,t){let n=null,r=null;e instanceof CSSStyleDeclaration?r=e:(n=e.ownerDocument.defaultView,n&&n.opener||(n=window),r=n.getComputedStyle(e));let i=parseFloat(r[t]);return isNaN(i)?0:i}before(e,t){typeof e==`string`&&(e=this.selector(e)),e!=null&&(typeof t==`string`?e.insertAdjacentHTML(`beforebegin`,C.getSafeHTML(t)):e.parentElement.insertBefore(t,e))}after(e,t){typeof e==`string`&&(e=this.selector(e)),e!=null&&(typeof t==`string`?e.insertAdjacentHTML(`afterend`,C.getSafeHTML(t)):e.parentElement.insertBefore(t,e.nextSibling))}getKeyFrames(e){let t={};return Object.keys(e.cssRules).forEach(n=>{e.cssRules[n].type===7&&e.cssRules[n].name.startsWith(`pops-anim-`)&&(t[e.cssRules[n].name]=e.cssRules[n])}),t}calcColor(){function e(){return{hexToRgb:e=>{let t=``;if(!/^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(e))return console.warn(`输入错误的hex`),``;e=e.replace(`#`,``),t=e.match(/../g);for(let e=0;e<3;e++)t[e]=parseInt(t[e],16);return t},rgbToHex:(e,t,n)=>{let r=/^\d{1,3}$/;if(!r.test(e)||!r.test(t)||!r.test(n))return console.warn(`输入错误的rgb颜色值`),``;let i=[e.toString(16),t.toString(16),n.toString(16)];for(let e=0;e<3;e++)i[e].length==1&&(i[e]=`0${i[e]}`);return`#${i.join(``)}`},getDarkColor:(t,n)=>{if(!/^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t))return console.warn(`输入错误的hex颜色值`),``;let r=e().hexToRgb(t);for(let e=0;e<3;e++)r[e]=Math.floor(r[e]*(1-n));return e().rgbToHex(r[0],r[1],r[2])},getLightColor:(t,n)=>{if(!/^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t))return console.warn(`输入错误的hex颜色值`),``;let r=e().hexToRgb(t);for(let e=0;e<3;e++)r[e]=Math.floor((255-r[e])*n+r[e]);return e().rgbToHex(r[0],r[1],r[2])}}}return e()}getTransform(e){let t=0,n=0,r=S.globalThis.getComputedStyle(e).transform;if(r!==`none`&&r!=null&&r!==``){let e=r.match(/\((.+)\)/)?.[1]?.split?.(`,`);t=Math.abs(parseInt(e[4])),n=Math.abs(parseInt(e[5]))}return{transformLeft:t,transformTop:n}}remove(e){typeof e==`string`&&(e=this.selectorAll(e)),e!=null&&($e.isNodeList(e)?e.forEach(e=>{this.remove(e)}):(e.querySelectorAll(`*`).forEach(e=>{e instanceof Element&&this.offAll(e)}),this.offAll(e),typeof e.remove==`function`?e.remove():e.parentElement?e.parentElement.removeChild(e):e.parentNode&&e.parentNode.removeChild(e)))}},j={createMask(e,t=101,n=``){return t-=100,n.startsWith(`;`)&&(n=n.replace(`;`,``)),`<div class="pops-mask" data-guid="${e}" style="z-index:${t};${n}"></div>`},createAnim(e,t,n,r=``,i=``,a){let o=n,s=``,c=``,l=o.position||``;n.zIndex!=null&&(s+=`z-index: ${a};`),o.width!=null&&(c+=`width: ${o.width};`),o.height!=null&&(c+=`height: ${o.height};`);let u=i.trim()!==``,d=[`pops`];return n.class&&d.push(...n.class.split(` `)),`
		<div class="pops-anim" anim="${o.animation||``}" style="${s}" data-guid="${e}">${n.style==null?``:`<style tyle="text/css" data-name="style">${n.style}</style>`}
    ${n.lightStyle==null?``:`<style tyle="text/css" data-name="lightStyle">@media (prefers-color-scheme: light) {${n.lightStyle}}</style>`}
    ${n.darkStyle==null?``:`<style tyle="text/css" data-name="darkStyle">@media (prefers-color-scheme: dark) {${n.darkStyle}}</style>`}
			<div class="${d.join(` `)}" data-bottom-btn="${u}" type-value="${t}" style="${c}" position="${l}" data-guid="${e}">${r}</div>
		</div>`},createHeader(e,t){if(!t.btn)return``;let n=t;if(e!==`iframe`&&!n.btn?.close?.enable)return``;let r=``,i=``,a=t;if(e===`iframe`&&a.topRightButton?.trim()!==``){let e=``;a.topRightButton.split(`|`).forEach(t=>{t=t.toLowerCase(),e+=`
                <button class="pops-header-control" type="button" data-type="${t}">
                    <i class="pops-icon">${_.getIcon(t)}</i>
                </button>`}),r=`
            <div class="pops-header-controls" data-margin>${e}</div>`}else n.btn?.close?.enable&&(i=`
                <div class="pops-header-controls">
                    <button class="pops-header-control" type="button" data-type="close" data-header>
                    	<i class="pops-icon">${_.getIcon(`close`)}</i>
                    </button>
                </div>`),r=i;return r},createHeaderStyle(e,t){return{headerStyle:t?.title?.html&&t?.title?.style||``,headerPStyle:t?.title?.html?``:t?.title?.style||``}},createBottom(e,t){if(t.btn==null)return``;let n=t;if(!(t.btn?.ok?.enable||n.btn?.cancel?.enable||n.btn?.other?.enable))return``;let r=``,i=``,a=``,o=``,s=``;if(t.btn.position&&(r+=`justify-content: ${t.btn.position};`),n.btn.reverse&&(r+=`flex-direction: row-reverse;`),t.btn?.ok?.enable){let r=``;(t.btn.ok.size===`large`||t.btn.ok.size===`small`)&&(r=`pops-button-`+t.btn.ok.size);let i=``,o=n.btn.ok.icon;if(o!==``){let e=``;e=_.hasIcon(o)?_.getIcon(o):o,e||=``,i=`<i class="pops-bottom-icon" is-loading="${t.btn.ok.iconIsLoading}">${e}</i>`}a=`
            <button 
				class="pops-${e}-btn-ok ${r}"
				type="button"
				data-type="${n.btn.ok?.type}"
				data-has-icon="${(n.btn.ok.icon||``)!==``}"
				data-rightIcon="${n.btn.ok?.rightIcon}"
            >${i}<span>${t.btn.ok.text}</span>
            </button>`}if(n.btn?.cancel?.enable){let t=``;(n.btn.cancel.size===`large`||n.btn.cancel.size===`small`)&&(t=`pops-button-`+n.btn.cancel.size);let r=``,i=n.btn.cancel.icon;if(i!==``){let e=``;e=_.hasIcon(i)?_.getIcon(i):i,e||=``,r=`<i class="pops-bottom-icon" is-loading="${n.btn.cancel.iconIsLoading}">${e}</i>`}o=`
            <button
				class="pops-${e}-btn-cancel ${t}"
				type="button"
				data-type="${n.btn.cancel.type}"
				data-has-icon="${(n.btn.cancel.icon||``)!==``}"
				data-rightIcon="${n.btn.cancel.rightIcon}"
            >${r}<span>${n.btn.cancel.text}</span>
            </button>`}if(n.btn?.other?.enable){let t=``;(n.btn.other.size===`large`||n.btn.other.size===`small`)&&(t=`pops-button-`+n.btn.other.size);let r=``,i=n.btn.other.icon;if(i!==``){let e=``;_.hasIcon(i)&&(e=_.getIcon(i)),e||=``,r=`<i class="pops-bottom-icon" is-loading="${n.btn.other.iconIsLoading}">${e}</i>`}s=`
            <button
				class="pops-${e}-btn-other ${t}"
				type="button"
				data-type="${n.btn.other.type}"
				data-has-icon="${(n.btn.other.icon||``)!==``}"
				data-rightIcon="${n.btn.other.rightIcon}"
            >${r}<span>${n.btn.other.text}</span>
            </button>`}if(n.btn.merge){let t=`display: flex;`;n.btn.mergeReverse?t+=`flex-direction: row-reverse;`:t+=`flex-direction: row;`,i=`
            <div class="pops-botttom-btn-controls pops-${e}-btn" style="${r}">${s}<div 
                    class="pops-${e}-btn-merge"
                    style="${t}">${a}${o}</div>
            </div>
            `}else i=`<div class="pops-botttom-btn-controls pops-${e}-btn" style="${r}">${a}${o}${s}</div>`;return i},createContentStyle(e,t){return{contentStyle:t?.content?.html&&t?.content?.style||``,contentPStyle:t?.content?.html?``:t?.content?.style||``}},parseElement(e){return A.parseTextToDOM(e)},addStyle(e,t){if(t==null)return;let n=A.createElement(`style`,{innerHTML:t},{type:`text/css`,"data-name":`general`});return e.appendChild(n),n},addLightStyle(e,t){let n=`
      @media (prefers-color-scheme: light) {
        ${t??``}
      }
    `,r=this.addStyle(e,n);if(r)return r.setAttribute(`data-name`,`light`),r},addDarkStyle(e,t){let n=`
      @media (prefers-color-scheme: dark) {
        ${t??``}
      }
    `,r=this.addStyle(e,n);if(r)return r.setAttribute(`data-name`,`dark`),r}},M={index:`@charset "utf-8";
.pops * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  /* 代替::-webkit-scrollbar */
  scrollbar-width: thin;
}
.pops {
  --pops-bg-opacity: 1;
  --pops-bd-opacity: 1;
  --pops-font-size: 16px;
  interpolate-size: allow-keywords;
  --pops-color: #000000;
  --pops-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
  --pops-bd-color: rgb(235, 238, 245, var(--pops-bd-opacity));
  --pops-box-shadow-color: rgba(0, 0, 0, 0.12);
  --pops-title-color: #000000;
  --pops-title-border-color: var(--pops-bd-color);
  --pops-content-color: #000000;
  --pops-bottom-btn-controls-border-color: var(--pops-bd-color);
  --pops-components-is-disabled-text-color: #a8abb2;
  --pops-components-is-disabled-bg-color: #f5f7fa;
}
@media (prefers-color-scheme: dark) {
  .pops {
    --pops-mask-bg-opacity: 0.8;
    --pops-color: #ffffff;
    --pops-dark-color: #262626;
    --pops-bg-color: rgb(17, 17, 17, var(--pops-bg-opacity));
    --pops-bd-color: rgb(55, 55, 55, var(--pops-bd-opacity));
    --pops-box-shadow-color: rgba(81, 81, 81, 0.12);
    --pops-title-color: #e8e8e8;
    --pops-title-border-color: var(--pops-bd-color);
    --pops-content-color: #e5e5e5;
    --pops-components-is-disabled-text-color: #a8abb2;
    --pops-components-is-disabled-bg-color: #262727;
  }
}
.pops {
  color: var(--pops-color);
  background-color: var(--pops-bg-color);
  border: 1px solid var(--pops-bd-color);
  border-radius: 4px;
  font-size: var(--pops-font-size);
  line-height: normal;
  box-shadow: 0 0 12px var(--pops-box-shadow-color);
  box-sizing: border-box;
  overflow: hidden;
  transition: all 0.35s;
  display: flex;
  flex-direction: column;
}
.pops-anim {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.pops-anim[anim=""] {
  top: unset;
  right: unset;
  bottom: unset;
  left: unset;
  width: unset;
  height: unset;
  transition: none;
}
/* 底部图标动画和样式 */
.pops i.pops-bottom-icon[is-loading="true"] {
  animation: rotating 2s linear infinite;
}
.pops i.pops-bottom-icon {
  height: 1em;
  width: 1em;
  line-height: normal;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: inherit;
  font-size: inherit;
}

/* 遮罩层样式 */
.pops-mask {
  --pops-mask-bg-opacity: 0.4;
  --pops-mask-bg-color: rgba(0, 0, 0, var(--pops-mask-bg-opacity));
}
.pops-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 0;
  background-color: var(--pops-mask-bg-color);
  box-shadow: none;
  transition: none;
}

.pops-header-controls button.pops-header-control[type][data-header] {
  float: right;
  margin: 0 0;
  outline: 0;
  border: 0;
  border-color: rgb(136, 136, 136, var(--pops-bd-opacity));
  background-color: transparent;
  color: #888;
  cursor: pointer;
}
.pops-header-controls button.pops-header-control[data-type="max"],
.pops-header-controls button.pops-header-control[data-type="mise"],
.pops-header-controls button.pops-header-control[data-type="min"] {
  outline: 0 !important;
  border: 0;
  border-color: rgb(136, 136, 136, var(--pops-bd-opacity));
  background-color: transparent;
  color: rgb(136, 136, 136);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
button.pops-header-control i {
  color: rgb(144, 147, 153);
  font-size: inherit;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
}
button.pops-header-control svg {
  height: 1.25em;
  width: 1.25em;
}
button.pops-header-control {
  right: 15px;
  padding: 0;
  border: none;
  outline: 0;
  background: 0 0;
  cursor: pointer;
  position: unset;
  line-height: normal;
}
button.pops-header-control i:hover {
  color: rgb(64, 158, 255);
}
.pops-header-controls[data-margin] button.pops-header-control {
  margin: 0 6px;
  display: flex;
  align-items: center;
}
.pops[type-value] .pops-header-controls {
  display: flex;
  gap: 6px;
}

/* 代码块 <code> */
.pops code {
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 0.85em;
  color: #000;
  background-color: #f0f0f0;
  border-radius: 3px;
  border: 0;
  padding: 0.2em 0;
  white-space: normal;
  background: #f5f5f5;
  text-wrap: wrap;
  text-align: left;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.4;
  -moz-tab-size: 8;
  -o-tab-size: 8;
  tab-size: 8;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  direction: ltr;
}

.pops code::before,
.pops code::after {
  letter-spacing: -0.2em;
  content: "\\00a0";
}

/* 标题 */
.pops .pops-title {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--pops-title-border-color);
  width: 100%;
  height: var(--container-title-height);
}
/* 标题-普通文本 */
.pops .pops-title p[pops] {
  color: var(--pops-title-color);
  width: 100%;
  height: 100%;
  align-content: center;
  overflow: hidden;
  text-indent: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  line-height: normal;
}

/* 内容 */
.pops .pops-content {
  width: 100%;
  /*height: calc(
		100% - var(--container-title-height) - var(--container-bottom-btn-height)
	);*/
  flex: 1;
  overflow: auto;
  word-break: break-word;
}
/* 内容-普通文本 */
.pops .pops-content p[pops] {
  color: var(--pops-content-color);
  padding: 5px 10px;
  text-indent: 15px;
}

/* 底部-按钮组 */
.pops .pops-botttom-btn-controls {
  display: flex;
  padding: 10px 10px 10px 10px;
  width: 100%;
  height: var(--container-bottom-btn-height);
  max-height: var(--container-bottom-btn-height);
  line-height: normal;
  border-top: 1px solid var(--pops-bottom-btn-controls-border-color);
  text-align: right;
  align-items: center;
}
`,ninePalaceGridPosition:`.pops[position="top_left"] {
  position: fixed;
  top: 0;
  left: 0;
}
.pops[position="top"] {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.pops[position="top_right"] {
  position: fixed;
  top: 0;
  right: 0;
}
.pops[position="center_left"] {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.pops[position="center"] {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.pops[position="center_right"] {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
.pops[position="bottom_left"] {
  position: fixed;
  bottom: 0;
  left: 0;
}
.pops[position="bottom"] {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
.pops[position="bottom_right"] {
  position: fixed;
  right: 0;
  bottom: 0;
}
`,scrollbar:`/* ::-webkit-scrollbar 是非标准的css */
/* https://caniuse.com/?search=%20%3A%3A-webkit-scrollbar */
.pops ::-webkit-scrollbar {
  width: 6px;
  height: 0;
}

/* 滚动条轨道 */
.pops ::-webkit-scrollbar-track {
  width: 0;
}
/* 滚动条滑块 */
.pops ::-webkit-scrollbar-thumb {
  min-height: 28px;
  border-radius: 2em;
  background: rgb(204, 204, 204, var(--pops-bg-opacity, 1));
  background-clip: padding-box;
}
/* 滚动条滑块 */
.pops ::-webkit-scrollbar-thumb:hover {
  background: rgb(178, 178, 178, var(--pops-bg-opacity, 1));
}
`,button:`.pops {
  --button-font-size: 14px;
  --button-height: 32px;
  --button-color: rgb(51, 51, 51);
  --button-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));
  --button-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));
  --button-margin-top: 0px;
  --button-margin-bottom: 0px;
  --button-margin-left: 5px;
  --button-margin-right: 5px;
  --button-padding-top: 6px;
  --button-padding-bottom: 6px;
  --button-padding-left: 12px;
  --button-padding-right: 12px;
  --button-radius: 4px;

  --container-title-height: 55px;
  --container-bottom-btn-height: 55px;

  /* default按钮 */
  --button-default-color: #333333;
  --button-default-bd-color: #dcdfe6;
  --button-default-bg-color: #ffffff;
  --button-default-active-color: #409eff;
  --button-default-active-bd-color: #409eff;
  --button-default-active-bg-color: #ecf5ff;
  --button-default-hover-color: #409eff;
  --button-default-hover-bd-color: #c6e2ff;
  --button-default-hover-bg-color: #ecf5ff;
  --button-default-focus-visible-outline-color: #a0cfff;
  --button-default-focus-visible-outline: 2px solid var(--button-default-focus-visible-outline-color);
  --button-default-focus-visible-outline-offset: 1px;
  --button-default-disabled-color: #a8abb2;
  --button-default-disabled-bd-color: #ffffff;
  --button-default-disabled-bg-color: #e4e7ed;

  /* primary按钮 */
  --button-primary-color: #ffffff;
  --button-primary-bd-color: #409eff;
  --button-primary-bg-color: #409eff;
  --button-primary-active-color: #ffffff;
  --button-primary-active-bd-color: #337ecc;
  --button-primary-active-bg-color: #337ecc;
  --button-primary-hover-color: #ffffff;
  --button-primary-hover-bd-color: #79bbff;
  --button-primary-hover-bg-color: #79bbff;
  --button-primary-focus-visible-outline-color: #a0cfff;
  --button-primary-focus-visible-outline: 2px solid var(--button-primary-focus-visible-outline-color);
  --button-primary-focus-visible-outline-offset: 1px;
  --button-primary-disabled-color: #ffffff80;
  --button-primary-disabled-bd-color: #a0cfff;
  --button-primary-disabled-bg-color: #a0cfff;

  /* success按钮 */
  --button-success-color: #ffffff;
  --button-success-bd-color: #4cae4c;
  --button-success-bg-color: #5cb85c;
  --button-success-active-color: #ffffff;
  --button-success-active-bd-color: #529b2e;
  --button-success-active-bg-color: #529b2e;
  --button-success-hover-color: #ffffff;
  --button-success-hover-bd-color: #95d475;
  --button-success-hover-bg-color: #95d475;
  --button-success-focus-visible-outline-color: #b3e19d;
  --button-success-focus-visible-outline: 2px solid var(--button-success-focus-visible-outline-color);
  --button-success-focus-visible-outline-offset: 1px;
  --button-success-disabled-color: #ffffff80;
  --button-success-disabled-bd-color: #b3e19d;
  --button-success-disabled-bg-color: #b3e19d;

  /* info按钮 */
  --button-info-color: #ffffff;
  --button-info-bd-color: #909399;
  --button-info-bg-color: #909399;
  --button-info-active-color: #ffffff;
  --button-info-active-bd-color: #73767a;
  --button-info-active-bg-color: #73767a;
  --button-info-hover-color: #ffffff;
  --button-info-hover-bd-color: #b1b3b8;
  --button-info-hover-bg-color: #b1b3b8;
  --button-info-focus-visible-outline-color: #c8c9cc;
  --button-info-focus-visible-outline: 2px solid var(--button-info-focus-visible-outline-color);
  --button-info-focus-visible-outline-offset: 1px;
  --button-info-disabled-color: #ffffff80;
  --button-info-disabled-bd-color: #c8c9cc;
  --button-info-disabled-bg-color: #c8c9cc;

  /* warning按钮 */
  --button-warning-color: #ffffff;
  --button-warning-bd-color: #e6a23c;
  --button-warning-bg-color: #e6a23c;
  --button-warning-active-color: #ffffff;
  --button-warning-active-bd-color: #b88230;
  --button-warning-active-bg-color: #b88230;
  --button-warning-hover-color: #ffffff80;
  --button-warning-hover-bd-color: #eebe77;
  --button-warning-hover-bg-color: #eebe77;
  --button-warning-focus-visible-outline-color: #f3d19e;
  --button-warning-focus-visible-outline: 2px solid var(--button-warning-focus-visible-outline-color);
  --button-warning-focus-visible-outline-offset: 1px;
  --button-warning-disabled-color: #ffffff80;
  --button-warning-disabled-bd-color: #f3d19e;
  --button-warning-disabled-bg-color: #f3d19e;

  /* danger按钮 */
  --button-danger-color: #ffffff;
  --button-danger-bd-color: #f56c6c;
  --button-danger-bg-color: #f56c6c;
  --button-danger-active-color: #ffffff;
  --button-danger-active-bd-color: #c45656;
  --button-danger-active-bg-color: #c45656;
  --button-danger-hover-color: #ffffff;
  --button-danger-hover-bd-color: #f89898;
  --button-danger-hover-bg-color: #f89898;
  --button-danger-focus-visible-outline-color: #fab6b6;
  --button-danger-focus-visible-outline: 2px solid var(--button-danger-focus-visible-outline-color);
  --button-danger-focus-visible-outline-offset: 1px;
  --button-danger-disabled-color: #ffffff80;
  --button-danger-disabled-bd-color: #fab6b6;
  --button-danger-disabled-bg-color: #fab6b6;

  /* xiaomi-primary按钮 */
  --button-xiaomi-primary-color: #ffffff;
  --button-xiaomi-primary-bd-color: #ff5c00;
  --button-xiaomi-primary-bg-color: #ff5c00;
  --button-xiaomi-primary-active-color: #ffffff;
  --button-xiaomi-primary-active-bd-color: #da4f00;
  --button-xiaomi-primary-active-bg-color: #da4f00;
  --button-xiaomi-primary-hover-color: #ffffff;
  --button-xiaomi-primary-hover-bd-color: #ff7e29;
  --button-xiaomi-primary-hover-bg-color: #ff7e29;
  --button-xiaomi-primary-focus-visible-outline-color: #ffa061;
  --button-xiaomi-primary-focus-visible-outline: 2px solid var(--button-xiaomi-primary-focus-visible-outline-color);
  --button-xiaomi-primary-focus-visible-outline-offset: 1px;
  --button-xiaomi-primary-disabled-color: #ffffff80;
  --button-xiaomi-primary-disabled-bd-color: #fad5b6;
  --button-xiaomi-primary-disabled-bg-color: #fad5b6;

  /* violet按钮 */
  --button-violet-color: #ffffff;
  --button-violet-bd-color: #626aef;
  --button-violet-bg-color: #626aef;
  --button-violet-active-color: #ffffff;
  --button-violet-active-bd-color: #8188f2;
  --button-violet-active-bg-color: #8188f2;
  --button-violet-hover-color: #ffffff;
  --button-violet-hover-bd-color: #4b50ad;
  --button-violet-hover-bg-color: #4b50ad;
  --button-violet-focus-visible-outline-color: #2a598a;
  --button-violet-focus-visible-outline: 2px solid var(--button-violet-focus-visible-outline-color);
  --button-violet-focus-visible-outline-offset: 1px;
  --button-violet-disabled-color: #ffffff80;
  --button-violet-disabled-bd-color: #3b3f82;
  --button-violet-disabled-bg-color: #3b3f82;
}

@media (prefers-color-scheme: dark) {
  .pops {
    /* default按钮 */
    --button-default-color: #cfd3dc;
    --button-default-bd-color: #4c4d4f;
    --button-default-bg-color: transparent;
    --button-default-active-color: #409eff;
    --button-default-active-bd-color: #409eff;
    --button-default-active-bg-color: #18222c;
    --button-default-hover-color: #409eff;
    --button-default-hover-bd-color: #213d5b;
    --button-default-hover-bg-color: #18222c;
    --button-default-focus-visible-outline-color: #2a598a;
    --button-default-focus-visible-outline: 2px solid var(--button-default-focus-visible-outline-color);
    --button-default-focus-visible-outline-offset: 1px;
    --button-default-disabled-color: #ffffff80;
    --button-default-disabled-bd-color: #414243;
    --button-default-disabled-bg-color: transparent;

    /* primary按钮 */
    --button-primary-color: #ffffff;
    --button-primary-bd-color: #409eff;
    --button-primary-bg-color: #409eff;
    --button-primary-active-color: #ffffff;
    --button-primary-active-bd-color: #66b1ff;
    --button-primary-active-bg-color: #66b1ff;
    --button-primary-hover-color: #ffffff;
    --button-primary-hover-bd-color: #3375b9;
    --button-primary-hover-bg-color: #3375b9;
    --button-primary-focus-visible-outline-color: #2a598a;
    --button-primary-focus-visible-outline: 2px solid var(--button-primary-focus-visible-outline-color);
    --button-primary-focus-visible-outline-offset: 1px;
    --button-primary-disabled-color: #ffffff80;
    --button-primary-disabled-bd-color: #2a598a;
    --button-primary-disabled-bg-color: #2a598a;

    /* success按钮 */
    --button-success-color: #ffffff;
    --button-success-bd-color: #67c23a;
    --button-success-bg-color: #67c23a;
    --button-success-active-color: #ffffff;
    --button-success-active-bd-color: #85ce61;
    --button-success-active-bg-color: #85ce61;
    --button-success-hover-color: #ffffff;
    --button-success-hover-bd-color: #4e8e2f;
    --button-success-hover-bg-color: #4e8e2f;
    --button-success-focus-visible-outline-color: #3e6b27;
    --button-success-focus-visible-outline: 2px solid var(--button-success-focus-visible-outline-color);
    --button-success-focus-visible-outline-offset: 1px;
    --button-success-disabled-color: #ffffff80;
    --button-success-disabled-bd-color: #3e6b27;
    --button-success-disabled-bg-color: #3e6b27;

    /* info按钮 */
    --button-info-color: #ffffff;
    --button-info-bd-color: #909399;
    --button-info-bg-color: #909399;
    --button-info-active-color: #ffffff;
    --button-info-active-bd-color: #a6a9ad;
    --button-info-active-bg-color: #a6a9ad;
    --button-info-hover-color: #ffffff;
    --button-info-hover-bd-color: #6b6d71;
    --button-info-hover-bg-color: #6b6d71;
    --button-info-focus-visible-outline-color: #525457;
    --button-info-focus-visible-outline: 2px solid var(--button-info-focus-visible-outline-color);
    --button-info-focus-visible-outline-offset: 1px;
    --button-info-disabled-color: #ffffff80;
    --button-info-disabled-bd-color: #525457;
    --button-info-disabled-bg-color: #525457;

    /* warning按钮 */
    --button-warning-color: #ffffff;
    --button-warning-bd-color: #e6a23c;
    --button-warning-bg-color: #e6a23c;
    --button-warning-active-color: #ffffff;
    --button-warning-active-bd-color: #ebb563;
    --button-warning-active-bg-color: #ebb563;
    --button-warning-hover-color: #ffffff80;
    --button-warning-hover-bd-color: #a77730;
    --button-warning-hover-bg-color: #a77730;
    --button-warning-focus-visible-outline-color: #7d5b28;
    --button-warning-focus-visible-outline: 2px solid var(--button-warning-focus-visible-outline-color);
    --button-warning-focus-visible-outline-offset: 1px;
    --button-warning-disabled-color: #ffffff80;
    --button-warning-disabled-bd-color: #7d5b28;
    --button-warning-disabled-bg-color: #7d5b28;

    /* danger按钮 */
    --button-danger-color: #ffffff;
    --button-danger-bd-color: #f56c6c;
    --button-danger-bg-color: #f56c6c;
    --button-danger-active-color: #ffffff;
    --button-danger-active-bd-color: #f78989;
    --button-danger-active-bg-color: #f78989;
    --button-danger-hover-color: #ffffff;
    --button-danger-hover-bd-color: #b25252;
    --button-danger-hover-bg-color: #b25252;
    --button-danger-focus-visible-outline-color: #854040;
    --button-danger-focus-visible-outline: 2px solid var(--button-danger-focus-visible-outline-color);
    --button-danger-focus-visible-outline-offset: 1px;
    --button-danger-disabled-color: #ffffff80;
    --button-danger-disabled-bd-color: #854040;
    --button-danger-disabled-bg-color: #854040;
  }
}
.pops[data-bottom-btn="false"] {
  --container-bottom-btn-height: 0px;
}
.pops button {
  white-space: nowrap;
  float: right;
  display: inline-block;
  margin: var(--button-margin-top) var(--button-margin-right) var(--button-margin-bottom) var(--button-margin-left);
  padding: var(--button-padding-top) var(--button-padding-right) var(--button-padding-bottom) var(--button-padding-left);
  outline: 0;
}
.pops button[data-has-icon="false"] .pops-bottom-icon {
  display: none;
}
.pops button {
  border-radius: var(--button-radius);
  box-shadow: none;
  font-weight: 400;
  font-size: var(--button-font-size);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.pops button {
  display: flex;
  align-items: center;
  height: var(--button-height);
  line-height: normal;
  box-sizing: border-box;
  border: 1px solid var(--button-bd-color);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.pops button {
  color: var(--button-color);
  border-color: var(--button-bd-color);
  background-color: var(--button-bg-color);
}
.pops button:active {
  color: var(--button-color);
  border-color: var(--button-bd-color);
  background-color: var(--button-bg-color);
  outline: 0;
}
.pops button:hover {
  color: var(--button-color);
  border-color: var(--button-bd-color);
  background-color: var(--button-bg-color);
}
.pops button:focus-visible {
  color: var(--button-color);
  border-color: var(--button-bd-color);
  background-color: var(--button-bg-color);
}
.pops button:disabled {
  cursor: not-allowed;
  color: var(--button-color);
  border-color: var(--button-bd-color);
  background-color: var(--button-bg-color);
}
.pops button.pops-button-large {
  --button-height: 32px;
  --button-padding-top: 12px;
  --button-padding-bottom: 12px;
  --button-padding-left: 19px;
  --button-padding-right: 19px;
  --button-font-size: 14px;
  --button-border-radius: 4px;
}

.pops button.pops-button-small {
  --button-height: 24px;
  --button-padding-top: 5px;
  --button-padding-bottom: 5px;
  --button-padding-left: 11px;
  --button-padding-right: 11px;
  --button-font-size: 12px;
  --button-border-radius: 4px;
}
.pops-panel-button-no-icon .pops-panel-button_inner i {
  display: none;
}
.pops-panel-button-right-icon .pops-panel-button_inner {
  flex-direction: row-reverse;
}
.pops-panel-button .pops-panel-button_inner i:has(svg),
.pops-panel-button-right-icon .pops-panel-button-text {
  margin-right: 6px;
}

.pops button[data-type="default"] {
  --button-color: var(--button-default-color);
  --button-bd-color: var(--button-default-bd-color);
  --button-bg-color: var(--button-default-bg-color);
}
.pops button[data-type="default"]:active {
  --button-color: var(--button-default-active-color);
  --button-bd-color: var(--button-default-active-bd-color);
  --button-bg-color: var(--button-default-active-bg-color);
}
.pops button[data-type="default"]:hover {
  --button-color: var(--button-default-hover-color);
  --button-bd-color: var(--button-default-hover-bd-color);
  --button-bg-color: var(--button-default-hover-bg-color);
}
.pops button[data-type="default"]:focus-visible {
  outline: var(--button-default-focus-visible-outline);
  outline-offset: var(--button-default-focus-visible-outline-offset);
}
.pops button[data-type="default"]:disabled {
  --button-color: var(--button-default-disabled-color);
  --button-bd-color: var(--button-default-disabled-bd-color);
  --button-bg-color: var(--button-default-disabled-bg-color);
}

.pops button[data-type="primary"] {
  --button-color: var(--button-primary-color);
  --button-bd-color: var(--button-primary-bd-color);
  --button-bg-color: var(--button-primary-bg-color);
}
.pops button[data-type="primary"]:active {
  --button-color: var(--button-primary-active-color);
  --button-bd-color: var(--button-primary-active-bd-color);
  --button-bg-color: var(--button-primary-active-bg-color);
}
.pops button[data-type="primary"]:hover {
  --button-color: var(--button-primary-hover-color);
  --button-bd-color: var(--button-primary-hover-bd-color);
  --button-bg-color: var(--button-primary-hover-bg-color);
}
.pops button[data-type="primary"]:focus-visible {
  outline: var(--button-primary-focus-visible-outline);
  outline-offset: var(--button-primary-focus-visible-outline-offset);
}
.pops button[data-type="primary"]:disabled {
  --button-color: var(--button-primary-disabled-color);
  --button-bd-color: var(--button-primary-disabled-bd-color);
  --button-bg-color: var(--button-primary-disabled-bg-color);
}

.pops button[data-type="success"] {
  --button-color: var(--button-success-color);
  --button-bd-color: var(--button-success-bd-color);
  --button-bg-color: var(--button-success-bg-color);
}
.pops button[data-type="success"]:active {
  --button-color: var(--button-success-active-color);
  --button-bd-color: var(--button-success-active-bd-color);
  --button-bg-color: var(--button-success-active-bg-color);
}
.pops button[data-type="success"]:hover {
  --button-color: var(--button-success-hover-color);
  --button-bd-color: var(--button-success-hover-bd-color);
  --button-bg-color: var(--button-success-hover-bg-color);
}
.pops button[data-type="success"]:focus-visible {
  outline: var(--button-success-focus-visible-outline);
  outline-offset: var(--button-success-focus-visible-outline-offset);
}
.pops button[data-type="success"]:disabled {
  --button-color: var(--button-success-disabled-color);
  --button-bd-color: var(--button-success-disabled-bd-color);
  --button-bg-color: var(--button-success-disabled-bg-color);
}

.pops button[data-type="info"] {
  --button-color: var(--button-info-color);
  --button-bd-color: var(--button-info-bd-color);
  --button-bg-color: var(--button-info-bg-color);
}
.pops button[data-type="info"]:active {
  --button-color: var(--button-info-active-color);
  --button-bd-color: var(--button-info-active-bd-color);
  --button-bg-color: var(--button-info-active-bg-color);
}
.pops button[data-type="info"]:hover {
  --button-color: var(--button-info-hover-color);
  --button-bd-color: var(--button-info-hover-bd-color);
  --button-bg-color: var(--button-info-hover-bg-color);
}
.pops button[data-type="info"]:focus-visible {
  outline: var(--button-info-focus-visible-outline);
  outline-offset: var(--button-info-focus-visible-outline-offset);
}
.pops button[data-type="info"]:disabled {
  --button-color: var(--button-info-disabled-color);
  --button-bd-color: var(--button-info-disabled-bd-color);
  --button-bg-color: var(--button-info-disabled-bg-color);
}

.pops button[data-type="warning"] {
  --button-color: var(--button-warning-color);
  --button-bd-color: var(--button-warning-bd-color);
  --button-bg-color: var(--button-warning-bg-color);
}
.pops button[data-type="warning"]:active {
  --button-color: var(--button-warning-active-color);
  --button-bd-color: var(--button-warning-active-bd-color);
  --button-bg-color: var(--button-warning-active-bg-color);
}
.pops button[data-type="warning"]:hover {
  --button-color: var(--button-warning-hover-color);
  --button-bd-color: var(--button-warning-hover-bd-color);
  --button-bg-color: var(--button-warning-hover-bg-color);
}
.pops button[data-type="warning"]:focus-visible {
  outline: var(--button-warning-focus-visible-outline);
  outline-offset: var(--button-warning-focus-visible-outline-offset);
}
.pops button[data-type="warning"]:disabled {
  --button-color: var(--button-warning-disabled-color);
  --button-bd-color: var(--button-warning-disabled-bd-color);
  --button-bg-color: var(--button-warning-disabled-bg-color);
}

.pops button[data-type="danger"] {
  --button-color: var(--button-danger-color);
  --button-bd-color: var(--button-danger-bd-color);
  --button-bg-color: var(--button-danger-bg-color);
}
.pops button[data-type="danger"]:active {
  --button-color: var(--button-danger-active-color);
  --button-bd-color: var(--button-danger-active-bd-color);
  --button-bg-color: var(--button-danger-active-bg-color);
}
.pops button[data-type="danger"]:hover {
  --button-color: var(--button-danger-hover-color);
  --button-bd-color: var(--button-danger-hover-bd-color);
  --button-bg-color: var(--button-danger-hover-bg-color);
}
.pops button[data-type="danger"]:focus-visible {
  outline: var(--button-danger-focus-visible-outline);
  outline-offset: var(--button-danger-focus-visible-outline-offset);
}
.pops button[data-type="danger"]:disabled {
  --button-color: var(--button-danger-disabled-color);
  --button-bd-color: var(--button-danger-disabled-bd-color);
  --button-bg-color: var(--button-danger-disabled-bg-color);
}

.pops button[data-type="xiaomi-primary"] {
  --button-color: var(--button-xiaomi-primary-color);
  --button-bd-color: var(--button-xiaomi-primary-bd-color);
  --button-bg-color: var(--button-xiaomi-primary-bg-color);
}
.pops button[data-type="xiaomi-primary"]:active {
  --button-color: var(--button-xiaomi-primary-active-color);
  --button-bd-color: var(--button-xiaomi-primary-active-bd-color);
  --button-bg-color: var(--button-xiaomi-primary-active-bg-color);
}
.pops button[data-type="xiaomi-primary"]:hover {
  --button-color: var(--button-xiaomi-primary-hover-color);
  --button-bd-color: var(--button-xiaomi-primary-hover-bd-color);
  --button-bg-color: var(--button-xiaomi-primary-hover-bg-color);
}
.pops button[data-type="xiaomi-primary"]:focus-visible {
  outline: var(--button-xiaomi-primary-focus-visible-outline);
  outline-offset: var(--button-xiaomi-primary-focus-visible-outline-offset);
}
.pops button[data-type="xiaomi-primary"]:disabled {
  --button-color: var(--button-xiaomi-primary-disabled-color);
  --button-bd-color: var(--button-xiaomi-primary-disabled-bd-color);
  --button-bg-color: var(--button-xiaomi-primary-disabled-bg-color);
}

.pops button[data-type="violet"] {
  --button-color: var(--button-violet-color);
  --button-bd-color: var(--button-violet-bd-color);
  --button-bg-color: var(--button-violet-bg-color);
}
.pops button[data-type="violet"]:active {
  --button-color: var(--button-violet-active-color);
  --button-bd-color: var(--button-violet-active-bd-color);
  --button-bg-color: var(--button-violet-active-bg-color);
}
.pops button[data-type="violet"]:hover {
  --button-color: var(--button-violet-hover-color);
  --button-bd-color: var(--button-violet-hover-bd-color);
  --button-bg-color: var(--button-violet-hover-bg-color);
}
.pops button[data-type="violet"]:focus-visible {
  outline: var(--button-violet-focus-visible-outline);
  outline-offset: var(--button-violet-focus-visible-outline-offset);
}
.pops button[data-type="violet"]:disabled {
  --button-color: var(--button-violet-disabled-color);
  --button-bd-color: var(--button-violet-disabled-bd-color);
  --button-bg-color: var(--button-violet-disabled-bg-color);
}
`,common:`.pops-flex-items-center {
  display: flex;
  align-items: center;
}
.pops-flex-y-center {
  display: flex;
  justify-content: space-between;
}
.pops-flex-x-center {
  display: flex;
  align-content: center;
}
.pops-hide {
  display: none;
}
.pops-hide-important {
  display: none !important;
}
.pops-no-border {
  border: 0;
}
.pops-no-border-important {
  border: 0 !important;
}
.pops-user-select-none {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.pops-line-height-center {
  line-height: normal;
  align-content: center;
}
.pops-width-fill {
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
}
.pops-height-fill {
  height: 100%;
  height: -moz-available;
  height: -webkit-fill-available;
}
.pops-text-is-disabled {
  --pops-text-is-disabled-color: #a8abb2;
  --pops-panel-forms-container-item-left-desc-text-color: var(--pops-text-is-disabled-color);
  color: var(--pops-text-is-disabled-color);
}
.pops-text-is-disabled-important {
  --pops-text-is-disabled-color: #a8abb2;
  --pops-panel-forms-container-item-left-desc-text-color: var(--pops-text-is-disabled-color) !important;
  color: var(--pops-text-is-disabled-color) !important;
}
`,anim:`@keyframes rotating {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes iframeLoadingChange_85 {
  0% {
    background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));
  }
  20% {
    background: linear-gradient(to right, #4995dd, #ead0d0, rgb(123 185 246));
  }
  40% {
    background: linear-gradient(to right, #4995dd, #f4b7b7, rgb(112 178 244));
  }
  60% {
    background: linear-gradient(to right, #4995dd, #ec9393, rgb(80 163 246));
  }
  80% {
    background: linear-gradient(to right, #4995dd, #e87f7f, rgb(25 139 253));
  }
  100% {
    background: linear-gradient(to right, #4995dd, #ee2c2c, rgb(0 124 247));
  }
  from {
    width: 75%;
  }
  to {
    width: 100%;
  }
}
@keyframes iframeLoadingChange {
  0% {
    background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));
  }
  20% {
    background: linear-gradient(to right, #4995dd, #ead0d0, rgb(123 185 246));
  }
  40% {
    background: linear-gradient(to right, #4995dd, #f4b7b7, rgb(112 178 244));
  }
  60% {
    background: linear-gradient(to right, #4995dd, #ec9393, rgb(80 163 246));
  }
  80% {
    background: linear-gradient(to right, #4995dd, #e87f7f, rgb(25 139 253));
  }
  100% {
    background: linear-gradient(to right, #4995dd, #ee2c2c, rgb(0 124 247));
  }
  from {
    width: 0;
  }
  to {
    width: 75%;
  }
}

@keyframes searchSelectFalIn {
  from {
    opacity: 0;
    display: none;
  }
  to {
    display: block;
    opacity: 1;
  }
}
@keyframes searchSelectFalOut {
  from {
    display: block;
    opacity: 1;
  }
  to {
    opacity: 0;
    display: none;
  }
}

@keyframes pops-anim-wait-rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes pops-anim-spread {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}
@keyframes pops-anim-shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(10px);
  }
}
@keyframes pops-anim-rolling-left {
  0% {
    opacity: 0;
    transform: translateX(-100%) rotate(-120deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(0);
  }
}
@keyframes pops-anim-rolling-right {
  0% {
    opacity: 0;
    transform: translateX(100%) rotate(120deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(0);
  }
}
@keyframes pops-anim-slide-top {
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes pops-anim-slide-bottom {
  0% {
    opacity: 0;
    transform: translateY(200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes pops-anim-slide-left {
  0% {
    opacity: 0;
    transform: translateX(-200%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes pops-anim-slide-right {
  0% {
    transform: translateX(200%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes pops-anim-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes pops-anim-fadein-zoom {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes pops-anim-fadein-alert {
  0% {
    transform: scale(0.5);
  }
  45% {
    transform: scale(1.05);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes pops-anim-don {
  0% {
    opacity: 0;
    transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  2.08333% {
    transform: matrix3d(0.75266, 0, 0, 0, 0, 0.76342, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  4.16667% {
    transform: matrix3d(0.81071, 0, 0, 0, 0, 0.84545, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  6.25% {
    transform: matrix3d(0.86808, 0, 0, 0, 0, 0.9286, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  8.33333% {
    transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  10.4167% {
    transform: matrix3d(0.96482, 0, 0, 0, 0, 1.05202, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  12.5% {
    transform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  14.5833% {
    transform: matrix3d(1.02563, 0, 0, 0, 0, 1.09149, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  16.6667% {
    transform: matrix3d(1.04227, 0, 0, 0, 0, 1.08453, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  18.75% {
    transform: matrix3d(1.05102, 0, 0, 0, 0, 1.06666, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  20.8333% {
    transform: matrix3d(1.05334, 0, 0, 0, 0, 1.04355, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  22.9167% {
    transform: matrix3d(1.05078, 0, 0, 0, 0, 1.02012, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  25% {
    transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  27.0833% {
    transform: matrix3d(1.03699, 0, 0, 0, 0, 0.98534, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  29.1667% {
    transform: matrix3d(1.02831, 0, 0, 0, 0, 0.97688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  31.25% {
    transform: matrix3d(1.01973, 0, 0, 0, 0, 0.97422, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  33.3333% {
    transform: matrix3d(1.01191, 0, 0, 0, 0, 0.97618, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  35.4167% {
    transform: matrix3d(1.00526, 0, 0, 0, 0, 0.98122, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  37.5% {
    transform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  39.5833% {
    transform: matrix3d(0.99617, 0, 0, 0, 0, 0.99433, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  41.6667% {
    transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  43.75% {
    transform: matrix3d(0.99237, 0, 0, 0, 0, 1.00413, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  45.8333% {
    transform: matrix3d(0.99202, 0, 0, 0, 0, 1.00651, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  47.9167% {
    transform: matrix3d(0.99241, 0, 0, 0, 0, 1.00726, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  50% {
    opacity: 1;
    transform: matrix3d(0.99329, 0, 0, 0, 0, 1.00671, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  52.0833% {
    transform: matrix3d(0.99447, 0, 0, 0, 0, 1.00529, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  54.1667% {
    transform: matrix3d(0.99577, 0, 0, 0, 0, 1.00346, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  56.25% {
    transform: matrix3d(0.99705, 0, 0, 0, 0, 1.0016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  58.3333% {
    transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  60.4167% {
    transform: matrix3d(0.99921, 0, 0, 0, 0, 0.99884, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  62.5% {
    transform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  64.5833% {
    transform: matrix3d(1.00057, 0, 0, 0, 0, 0.99795, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  66.6667% {
    transform: matrix3d(1.00095, 0, 0, 0, 0, 0.99811, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  68.75% {
    transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99851, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  70.8333% {
    transform: matrix3d(1.00119, 0, 0, 0, 0, 0.99903, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  72.9167% {
    transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99955, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  75% {
    transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  77.0833% {
    transform: matrix3d(1.00083, 0, 0, 0, 0, 1.00033, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  79.1667% {
    transform: matrix3d(1.00063, 0, 0, 0, 0, 1.00052, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  81.25% {
    transform: matrix3d(1.00044, 0, 0, 0, 0, 1.00058, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  83.3333% {
    transform: matrix3d(1.00027, 0, 0, 0, 0, 1.00053, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  85.4167% {
    transform: matrix3d(1.00012, 0, 0, 0, 0, 1.00042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  87.5% {
    transform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  89.5833% {
    transform: matrix3d(0.99991, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  91.6667% {
    transform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  93.75% {
    transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  95.8333% {
    transform: matrix3d(0.99982, 0, 0, 0, 0, 0.99985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  97.9167% {
    transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99984, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  100% {
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}
@keyframes pops-anim-roll {
  0% {
    transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);
  }
  100% {
    transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);
  }
}
@keyframes pops-anim-sandra {
  0% {
    opacity: 0;
    transform: scale3d(1.1, 1.1, 1);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
@keyframes pops-anim-gather {
  0% {
    opacity: 0;
    transform: scale(5, 0);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}
@keyframes pops-anim-spread-reverse {
  0% {
    opacity: 1;
    transform: scaleX(1);
  }
  100% {
    opacity: 0;
    transform: scaleX(0);
  }
}
@keyframes pops-anim-shake-reverse {
  0%,
  100% {
    transform: translateX(10px);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(0);
  }
}
@keyframes pops-anim-rolling-left-reverse {
  0% {
    opacity: 1;
    transform: translateX(0) rotate(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%) rotate(-120deg);
  }
}
@keyframes pops-anim-rolling-right-reverse {
  0% {
    opacity: 1;
    transform: translateX(0) rotate(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%) rotate(120deg);
  }
}
@keyframes pops-anim-slide-top-reverse {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-200%);
  }
}
@keyframes pops-anim-slide-bottom-reverse {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(200%);
  }
}
@keyframes pops-anim-slide-left-reverse {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-200%);
  }
}
@keyframes pops-anim-slide-right-reverse {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    transform: translateX(200%);
  }
}
@keyframes pops-anim-fadein-reverse {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes pops-anim-fadein-zoom-reverse {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}
@keyframes pops-anim-fadein-alert-reverse {
  0% {
    transform: scale(1);
  }
  45% {
    transform: scale(0.95);
  }
  80% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(0.5);
  }
}
@keyframes pops-anim-don-reverse {
  100% {
    opacity: 0;
    transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  97.9167% {
    transform: matrix3d(0.75266, 0, 0, 0, 0, 0.76342, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  95.8333% {
    transform: matrix3d(0.81071, 0, 0, 0, 0, 0.84545, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  93.75% {
    transform: matrix3d(0.86808, 0, 0, 0, 0, 0.9286, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  91.6667% {
    transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  89.5833% {
    transform: matrix3d(0.96482, 0, 0, 0, 0, 1.05202, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  87.5% {
    transform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  85.4167% {
    transform: matrix3d(1.02563, 0, 0, 0, 0, 1.09149, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  83.3333% {
    transform: matrix3d(1.04227, 0, 0, 0, 0, 1.08453, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  81.25% {
    transform: matrix3d(1.05102, 0, 0, 0, 0, 1.06666, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  79.1667% {
    transform: matrix3d(1.05334, 0, 0, 0, 0, 1.04355, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  77.0833% {
    transform: matrix3d(1.05078, 0, 0, 0, 0, 1.02012, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  75% {
    transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  72.9167% {
    transform: matrix3d(1.03699, 0, 0, 0, 0, 0.98534, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  70.8333% {
    transform: matrix3d(1.02831, 0, 0, 0, 0, 0.97688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  68.75% {
    transform: matrix3d(1.01973, 0, 0, 0, 0, 0.97422, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  66.6667% {
    transform: matrix3d(1.01191, 0, 0, 0, 0, 0.97618, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  64.5833% {
    transform: matrix3d(1.00526, 0, 0, 0, 0, 0.98122, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  62.5% {
    transform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  60.4167% {
    transform: matrix3d(0.99617, 0, 0, 0, 0, 0.99433, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  58.3333% {
    transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  56.25% {
    transform: matrix3d(0.99237, 0, 0, 0, 0, 1.00413, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  54.1667% {
    transform: matrix3d(0.99202, 0, 0, 0, 0, 1.00651, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  52.0833% {
    transform: matrix3d(0.99241, 0, 0, 0, 0, 1.00726, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  50% {
    opacity: 1;
    transform: matrix3d(0.99329, 0, 0, 0, 0, 1.00671, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  47.9167% {
    transform: matrix3d(0.99447, 0, 0, 0, 0, 1.00529, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  45.8333% {
    transform: matrix3d(0.99577, 0, 0, 0, 0, 1.00346, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  43.75% {
    transform: matrix3d(0.99705, 0, 0, 0, 0, 1.0016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  41.6667% {
    transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  39.5833% {
    transform: matrix3d(0.99921, 0, 0, 0, 0, 0.99884, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  37.5% {
    transform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  35.4167% {
    transform: matrix3d(1.00057, 0, 0, 0, 0, 0.99795, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  33.3333% {
    transform: matrix3d(1.00095, 0, 0, 0, 0, 0.99811, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  31.25% {
    transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99851, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  29.1667% {
    transform: matrix3d(1.00119, 0, 0, 0, 0, 0.99903, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  27.0833% {
    transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99955, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  25% {
    transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  22.9167% {
    transform: matrix3d(1.00083, 0, 0, 0, 0, 1.00033, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  20.8333% {
    transform: matrix3d(1.00063, 0, 0, 0, 0, 1.00052, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  18.75% {
    transform: matrix3d(1.00044, 0, 0, 0, 0, 1.00058, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  16.6667% {
    transform: matrix3d(1.00027, 0, 0, 0, 0, 1.00053, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  14.5833% {
    transform: matrix3d(1.00012, 0, 0, 0, 0, 1.00042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  12.5% {
    transform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  10.4167% {
    transform: matrix3d(0.99991, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  8.33333% {
    transform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  6.25% {
    transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  4.16667% {
    transform: matrix3d(0.99982, 0, 0, 0, 0, 0.99985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  2.08333% {
    transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99984, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  0% {
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}
@keyframes pops-anim-roll-reverse {
  0% {
    transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);
  }
  100% {
    transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);
  }
}
@keyframes pops-anim-sandra-reverse {
  0% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
  100% {
    opacity: 0;
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes pops-anim-gather-reverse {
  0% {
    opacity: 0;
    transform: scale(5, 0);
  }
  100% {
    opacity: 0;
    transform: scale(5, 0);
  }
}

@-webkit-keyframes pops-motion-fadeInTop {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes pops-motion-fadeInTop {
  0% {
    opacity: 0;
    transform: translateY(-30px);
    -ms-transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
    -ms-transform: translateX(0);
  }
}
@-webkit-keyframes pops-motion-fadeOutTop {
  0% {
    opacity: 10;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
}
@keyframes pops-motion-fadeOutTop {
  0% {
    opacity: 1;
    transform: translateY(0);
    -ms-transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px);
    -ms-transform: translateY(-30px);
  }
}
@-webkit-keyframes pops-motion-fadeInBottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes pops-motion-fadeInBottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    -ms-transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -ms-transform: translateY(0);
  }
}
@-webkit-keyframes pops-motion-fadeOutBottom {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
}
@keyframes pops-motion-fadeOutBottom {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -ms-transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    -ms-transform: translateY(20px);
  }
}
@-webkit-keyframes pops-motion-fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes pops-motion-fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-30px);
    transform: translateX(-30px);
    -ms-transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -ms-transform: translateX(0);
  }
}
@-webkit-keyframes pops-motion-fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-30px);
    transform: translateX(-30px);
  }
}
@keyframes pops-motion-fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -ms-transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
    -ms-transform: translateX(-20px);
  }
}
@-webkit-keyframes pops-motion-fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes pops-motion-fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
    -ms-transform: translateX(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -ms-transform: translateX(0);
  }
}
@-webkit-keyframes pops-motion-fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
}
@keyframes pops-motion-fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -ms-transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
    -ms-transform: translateX(20px);
  }
}

/* 动画 */
.pops-anim[anim="pops-anim-spread"] {
  animation: pops-anim-spread 0.3s;
}
.pops-anim[anim="pops-anim-shake"] {
  animation: pops-anim-shake 0.3s;
}
.pops-anim[anim="pops-anim-rolling-left"] {
  animation: pops-anim-rolling-left 0.3s;
}
.pops-anim[anim="pops-anim-rolling-right"] {
  animation: pops-anim-rolling-right 0.3s;
}
.pops-anim[anim="pops-anim-slide-top"] {
  animation: pops-anim-slide-top 0.3s;
}
.pops-anim[anim="pops-anim-slide-bottom"] {
  animation: pops-anim-slide-bottom 0.3s;
}
.pops-anim[anim="pops-anim-slide-left"] {
  animation: pops-anim-slide-left 0.3s;
}
.pops-anim[anim="pops-anim-slide-right"] {
  animation: pops-anim-slide-right 0.3s;
}
.pops-anim[anim="pops-anim-fadein"] {
  animation: pops-anim-fadein 0.3s;
}
.pops-anim[anim="pops-anim-fadein-zoom"] {
  animation: pops-anim-fadein-zoom 0.3s;
}
.pops-anim[anim="pops-anim-fadein-alert"] {
  animation: pops-anim-fadein-alert 0.3s;
}
.pops-anim[anim="pops-anim-don"] {
  animation: pops-anim-don 0.3s;
}
.pops-anim[anim="pops-anim-roll"] {
  animation: pops-anim-roll 0.3s;
}
.pops-anim[anim="pops-anim-sandra"] {
  animation: pops-anim-sandra 0.3s;
}
.pops-anim[anim="pops-anim-gather"] {
  animation: pops-anim-gather 0.3s;
}
.pops-anim[anim="pops-anim-spread-reverse"] {
  animation: pops-anim-spread-reverse 0.3s;
}
.pops-anim[anim="pops-anim-shake-reverse"] {
  animation: pops-anim-shake-reverse 0.3s;
}
.pops-anim[anim="pops-anim-rolling-left-reverse"] {
  animation: pops-anim-rolling-left-reverse 0.3s;
}
.pops-anim[anim="pops-anim-rolling-right-reverse"] {
  animation: pops-anim-rolling-right-reverse 0.3s;
}
.pops-anim[anim="pops-anim-slide-top-reverse"] {
  animation: pops-anim-slide-top-reverse 0.3s;
}
.pops-anim[anim="pops-anim-slide-bottom-reverse"] {
  animation: pops-anim-slide-bottom-reverse 0.3s;
}
.pops-anim[anim="pops-anim-slide-left-reverse"] {
  animation: pops-anim-slide-left-reverse 0.3s;
}
.pops-anim[anim="pops-anim-slide-right-reverse"] {
  animation: pops-anim-slide-right-reverse 0.3s;
}
.pops-anim[anim="pops-anim-fadein-reverse"] {
  animation: pops-anim-fadein-reverse 0.3s;
}
.pops-anim[anim="pops-anim-fadein-zoom-reverse"] {
  animation: pops-anim-fadein-zoom-reverse 0.3s;
}
.pops-anim[anim="pops-anim-fadein-alert-reverse"] {
  animation: pops-anim-fadein-alert-reverse 0.3s;
}
.pops-anim[anim="pops-anim-don-reverse"] {
  animation: pops-anim-don-reverse 0.3s;
}
.pops-anim[anim="pops-anim-roll-reverse"] {
  animation: pops-anim-roll-reverse 0.3s;
}
.pops-anim[anim="pops-anim-sandra-reverse"] {
  animation: pops-anim-sandra-reverse 0.3s;
}
.pops-anim[anim="pops-anim-gather-reverse"] {
  animation: pops-anim-gather-reverse 0.3s;
}
`,alertCSS:``,confirmCSS:``,promptCSS:`.pops[type-value="prompt"] {
  --input-color: #000000;
  --input-bg-color: none;
  --input-placeholder-color: #a1a4ac;
}
.pops[type-value="prompt"] input[pops],
.pops[type-value="prompt"] textarea[pops] {
  width: 100%;
  height: 100%;
  outline: 0;
  border: 0;
  color: var(--input-color);
  background-color: var(--input-bg-color);
}

.pops[type-value="prompt"] input[pops] {
  padding: 5px 10px;
}
.pops[type-value="prompt"] textarea[pops] {
  padding: 5px 10px;
  resize: none;
}

.pops[type-value="prompt"] input[pops]::placeholder,
.pops[type-value="prompt"] textarea[pops]::placeholder {
  color: var(--input-placeholder-color);
}
@media (prefers-color-scheme: dark) {
  .pops[type-value="prompt"] {
    --input-color: #ffffff;
    --input-bg-color: #333333;
    --input-placeholder-color: #8d9095;
  }
}
`,loadingCSS:`.pops[type-value="loading"] {
  --loading-bd-color: rgba(0, 0, 0, 0.2);
  --loading-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
  --loading-box-shadow-color: rgb(0 0 0 / 50%);
  --loading-icon-color: rgba(100, 149, 237, 0.1);
  --loading-icon-bd-top-color: rgb(100, 149, 237, var(--pops-bd-opacity));
}
.pops[type-value="loading"] {
  position: absolute;
  top: 272.5px;
  top: 50%;
  left: 26px;
  left: 50%;
  display: flex;
  overflow: hidden;
  padding: 10px 15px;
  max-width: 100%;
  max-height: 100%;
  min-width: 0;
  min-height: 0;
  border: 1px solid var(--loading-bd-color);
  border-radius: 5px;
  background-color: var(--loading-bg-color);
  box-shadow: 0 0 5px var(--loading-box-shadow-color);
  vertical-align: middle;
  transition: all 0.35s;
  transform: translate(-50%, -50%);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.pops[type-value="loading"]:before {
  float: left;
  display: inline-block;
  width: 2em;
  height: 2em;
  border: 0.3em solid var(--loading-icon-color);
  border-top: 0.3em solid var(--loading-icon-bd-top-color);
  border-radius: 50%;
  content: " ";
  vertical-align: middle;
  font-size: inherit;
  animation: pops-anim-wait-rotate 1.2s linear infinite;
}
.pops[type-value="loading"] .pops-loading-content {
  position: static;
  top: 0;
  bottom: 0;
  float: left;
  overflow: hidden;
  width: auto;
  font-size: inherit;
  line-height: normal;
  align-content: center;
}

@media (prefers-color-scheme: dark) {
  .pops[type-value="loading"] {
    --loading-bg-color: #222222;
  }
}
`,iframeCSS:`.pops[type-value="iframe"] {
  --container-title-height: 55px;
  transition:
    width 0.35s ease,
    height 0.35s ease;
}
.pops[type-value="iframe"] .pops-content {
  overflow: hidden;
}
.pops-loading {
  position: absolute;
  top: 40px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background-color: rgb(255, 255, 255, var(--pops-bg-opacity));
}
.pops-loading:before {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  display: block;
  margin: -20px 0 0 -20px;
  padding: 20px;
  border: 4px solid rgb(221, 221, 221, var(--pops-bd-opacity));
  border-radius: 50%;
  content: "";
  border-top-color: transparent;
  animation: pops-anim-wait-rotate 1.2s linear infinite;
}
.pops[type-value="iframe"].pops[type-module="min"] {
  bottom: 0;
  max-width: 200px;
  max-height: 53px;
  position: unset;
}
.pops[type-value="iframe"].pops[type-module="min"] .pops-header-control[data-type="min"] {
  display: none;
}
.pops[type-value="iframe"].pops-iframe-unset-top {
  top: unset !important;
}
.pops[type-value="iframe"].pops-iframe-unset-left {
  left: unset !important;
}
.pops[type-value="iframe"].pops-iframe-unset-transform {
  transform: none !important;
}
.pops[type-value="iframe"].pops-iframe-unset-transition {
  transition: none !important;
}
.pops[type-value="iframe"].pops[type-module="max"] {
  width: 100% !important;
  height: 100% !important;
}
.pops[type-value="iframe"] iframe[pops] {
  width: 100%;
  height: 100%;
  border: 0;
}
.pops-iframe-content-global-loading {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999;
  width: 0;
  height: 4px;
  background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));
  animation: iframeLoadingChange 2s forwards;
}

.pops-anim:has(.pops[type-value="iframe"].pops[type-module="min"]) {
  position: unset;
}
`,tooltipCSS:`.pops-tip {
  --pops-bg-opacity: 1;
  --tooltip-color: #4e4e4e;
  --tooltip-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
  --tooltip-bd-radius: 2px;
  --tooltip-box-shadow-left-color: rgba(0, 0, 0, 0.24);
  --tooltip-box-shadow-right-color: rgba(0, 0, 0, 0.12);
  --tooltip-font-size: 14px;
  --tooltip-padding-top: 13px;
  --tooltip-padding-right: 13px;
  --tooltip-padding-bottom: 13px;
  --tooltip-padding-left: 13px;

  --tooltip-arrow-box-shadow-left-color: rgba(0, 0, 0, 0.24);
  --tooltip-arrow-box-shadow-right-color: rgba(0, 0, 0, 0.12);
  --tooltip-arrow--after-color: rgb(78, 78, 78);
  --tooltip-arrow--after-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
  --tooltip-arrow--after-width: 12px;
  --tooltip-arrow--after-height: 12px;
}
.pops-tip {
  padding: var(--tooltip-padding-top) var(--tooltip-padding-right) var(--tooltip-padding-bottom)
    var(--tooltip-padding-left);
  max-width: 400px;
  max-height: 300px;
  border-radius: var(--tooltip-bd-radius);
  background-color: var(--tooltip-bg-color);
  box-shadow:
    0 1.5px 4px var(--tooltip-box-shadow-left-color),
    0 1.5px 6px var(--tooltip-box-shadow-right-color);
  color: var(--tooltip-color);
  font-size: var(--tooltip-font-size);
}
.pops-tip[data-position="absolute"] {
  position: absolute;
}
.pops-tip[data-position="fixed"] {
  position: fixed;
}

.pops-tip .pops-tip-arrow {
  position: absolute;
  top: 100%;
  left: 50%;
  overflow: hidden;
  width: 100%;
  height: 12.5px;
  transform: translateX(-50%);
}

.pops-tip .pops-tip-arrow::after {
  position: absolute;
  top: 0;
  left: 50%;
  width: var(--tooltip-arrow--after-width);
  height: var(--tooltip-arrow--after-height);
  background: var(--tooltip-arrow--after-bg-color);
  color: var(--tooltip-arrow--after-color);
  box-shadow:
    0 1px 7px var(--tooltip-arrow-box-shadow-left-color),
    0 1px 7px var(--tooltip-arrow-box-shadow-right-color);
  content: "";
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
}

.pops-tip .pops-tip-arrow[data-position="bottom"] {
  position: absolute;
  top: 100%;
  left: 50%;
  overflow: hidden;
  width: 100%;
  height: 12.5px;
  transform: translateX(-50%);
}

.pops-tip .pops-tip-arrow[data-position="bottom"]:after {
  position: absolute;
  top: 0;
  left: 50%;
  width: var(--tooltip-arrow--after-width);
  height: var(--tooltip-arrow--after-height);
  background: var(--tooltip-arrow--after-bg-color);
  box-shadow:
    0 1px 7px var(--tooltip-arrow-box-shadow-left-color),
    0 1px 7px var(--tooltip-arrow-box-shadow-right-color);
  content: "";
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
}

.pops-tip .pops-tip-arrow[data-position="left"] {
  top: 50%;
  left: -12.5px;
  width: 12.5px;
  height: 50px;
  transform: translateY(-50%);
}

.pops-tip .pops-tip-arrow[data-position="left"]:after {
  position: absolute;
  top: 50%;
  left: 100%;
  content: "";
}

.pops-tip .pops-tip-arrow[data-position="right"] {
  top: 50%;
  right: -12.5px;
  left: auto;
  width: 12.5px;
  height: 50px;
  transform: translateY(-50%);
}

.pops-tip .pops-tip-arrow[data-position="right"]:after {
  position: absolute;
  top: 50%;
  left: 0;
  content: "";
}

.pops-tip .pops-tip-arrow[data-position="top"] {
  top: -12.5px;
  left: 50%;
  transform: translateX(-50%);
}

.pops-tip .pops-tip-arrow[data-position="top"]:after {
  position: absolute;
  top: 100%;
  left: 50%;
  content: "";
}

.pops-tip[data-motion] {
  -webkit-animation-duration: 0.25s;
  animation-duration: 0.25s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.pops-tip[data-motion="fadeOutRight"] {
  -webkit-animation-name: pops-motion-fadeOutRight;
  animation-name: pops-motion-fadeOutRight;
}
.pops-tip[data-motion="fadeInTop"] {
  -webkit-animation-name: pops-motion-fadeInTop;
  animation-name: pops-motion-fadeInTop;
  animation-timing-function: cubic-bezier(0.49, 0.49, 0.13, 1.3);
}
.pops-tip[data-motion="fadeOutTop"] {
  -webkit-animation-name: pops-motion-fadeOutTop;
  animation-name: pops-motion-fadeOutTop;
  animation-timing-function: cubic-bezier(0.32, 0.37, 0.06, 0.87);
}
.pops-tip[data-motion="fadeInBottom"] {
  -webkit-animation-name: pops-motion-fadeInBottom;
  animation-name: pops-motion-fadeInBottom;
}
.pops-tip[data-motion="fadeOutBottom"] {
  -webkit-animation-name: pops-motion-fadeOutBottom;
  animation-name: pops-motion-fadeOutBottom;
}
.pops-tip[data-motion="fadeInLeft"] {
  -webkit-animation-name: pops-motion-fadeInLeft;
  animation-name: pops-motion-fadeInLeft;
}
.pops-tip[data-motion="fadeOutLeft"] {
  -webkit-animation-name: pops-motion-fadeOutLeft;
  animation-name: pops-motion-fadeOutLeft;
}
.pops-tip[data-motion="fadeInRight"] {
  -webkit-animation-name: pops-motion-fadeInRight;
  animation-name: pops-motion-fadeInRight;
}

/* github的样式 */
.pops-tip.github-tooltip {
  --tooltip-bg-opacity: 1;
  --tooltip-color: #ffffff;
  --tooltip-bg-color: rgb(36, 41, 47, var(--tooltip-bg-opacity));
  --tooltip-bd-radius: 6px;
  --tooltip-padding-top: 6px;
  --tooltip-padding-right: 8px;
  --tooltip-padding-bottom: 6px;
  --tooltip-padding-left: 8px;

  --tooltip-arrow--after-color: rgb(255, 255, 255);
  --tooltip-arrow--after-bg-color: rgb(36, 41, 47, var(--tooltip-bg-opacity));
  --tooltip-arrow--after-width: 8px;
  --tooltip-arrow--after-height: 8px;
}

@media (prefers-color-scheme: dark) {
  .pops-tip {
    --tooltip-color: #ffffff;
    --tooltip-bg-color: #fafafa;
    --tooltip-arrow--after-color: #fafafa;
    --tooltip-arrow--after-bg-color: rgb(250, 250, 250, var(--pops-bg-opacity));
  }
}
`,drawerCSS:`.pops[type-value="drawer"] {
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow:
    0px 16px 48px 16px rgba(0, 0, 0, 0.08),
    0px 12px 32px rgba(0, 0, 0, 0.12),
    0px 8px 16px -8px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  transition: all 0.3s;
}

.pops[type-value="drawer"][direction="top"] {
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
}
.pops[type-value="drawer"][direction="bottom"] {
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
}
.pops[type-value="drawer"][direction="left"] {
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
}
.pops[type-value="drawer"][direction="right"] {
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
}
`,folderCSS:`.pops-folder-list {
  --folder-arrow-fill-color: #d4d7de;
  --folder-arrow-active-fill-color: #06a7ff;
  --header-breadcrumb-text-color: #06a7ff;
  --header-breadcrumb-all-files-text-color: var(--header-breadcrumb-text-color);
  --header-breadcrumb-all-files-first-text-color: var(--header-breadcrumb-text-color);
  --header-breadcrumb-all-files-last-text-color: #999999;
  --table-header-row-text-color: #818999;
  --table-body-td-text-color: rgb(247, 248, 250, var(--pops-bg-opacity));
  --table-body-th-text-color: rgb(247, 248, 250, var(--pops-bg-opacity));
  --table-body-row-text-color: #05082c;
  --table-body-row-file-name-text-color: #05082c;
  --table-body-row-hover-bd-color: rgb(245, 246, 247, var(--pops-bg-opacity));
  --table-body-row-hover-bg-color: rgb(245, 246, 247, var(--pops-bg-opacity));
  --table-body-row-file-name-hover-text-color: #06a7ff;
  --table-body-row-content-text-color: #818999;
}
.pops-folder-list .cursor-p {
  cursor: pointer;
}
.pops-folder-list a {
  background: 0 0;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  color: var(--header-breadcrumb-text-color);
}
table.pops-folder-list-table__body,
table.pops-folder-list-table__header {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
}
.pops-folder-list-table__header-div,
.pops-folder-list-table__body-div {
  padding: 0 20px;
}
table.pops-folder-list-table__body,
table.pops-folder-list-table__header {
  height: auto;
  background: 0 0;
  overflow: hidden;
  -ms-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
}
table.pops-folder-list-table__body {
  height: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.pops-folder-list table tr {
  line-height: normal;
  align-content: center;
}
.pops-folder-list-table__header-row {
  height: 50px;
  line-height: normal;
  align-content: center;
  color: var(--table-header-row-text-color);
  text-align: left;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.pops-folder-list-table__body-row {
  height: 50px;
  line-height: normal;
  align-content: center;
  color: var(--table-body-row-text-color);
  font-size: 12px;
}
.pops-folder-list-table__body-row:hover {
  background-color: var(--table-body-row-hover-bg-color);
  border-color: var(--table-body-row-hover-bd-color);
  border: 0;
  outline: none;
}
.pops-folder-list table th {
  border: 0;
  border-bottom: 1px solid var(--table-body-th-text-color);
}
.pops-folder-list table td {
  border: 0;
  border-bottom: 1px solid var(--table-body-td-text-color);
  position: relative;
}
.pops-folder-list .list-name-text {
  display: inline-block;
  padding-left: 12px;
  line-height: normal;
  align-content: center;
  max-width: 176px;
}
.pops-folder-list-file-name > div {
  display: flex;
  align-items: center;
}

.pops-mobile-folder-list-file-name {
  display: flex;
  align-items: center;
}
.pops-mobile-folder-list-file-name > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6px 0px;
  flex-direction: column;
}
.pops-mobile-folder-list-file-name img.pops-folder-list-file-icon {
  width: 45px;
  height: 45px;
}
.pops-mobile-folder-list-file-name a.pops-folder-list-file-name-title-text {
  padding-left: unset;
  max-width: 250px;
  overflow-x: hidden;
  font-weight: 400;
  line-height: unset;
  margin-bottom: 4px;
  white-space: normal;
  text-overflow: unset;
}

/* 修改滚动 */
.pops-folder-content {
  overflow: hidden !important;
}
.pops-folder-content .pops-folder-list {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.pops-folder-content .pops-folder-list-table__body-div {
  height: 100%;
  flex: 1 auto;
  overflow: auto;
  padding-bottom: 0;
}
.pops-mobile-folder-content .pops-folder-list-table__body-div {
  height: 100%;
  flex: 1 auto;
  overflow: auto;
  padding-bottom: 0;
}
.pops-folder-content table.pops-folder-list-table__body {
  overflow: auto;
}
.pops-folder-content .pops-folder-list-table__header-div {
  flex: 0;
}
.pops-mobile-folder-content .pops-folder-list-table__header-div {
  display: none;
}

.pops-folder-list .pops-folder-list-file-name-title-text {
  color: var(--table-body-row-file-name-text-color);
}
.pops-folder-list .pops-folder-list-file-name-title-text:hover {
  text-decoration: none;
  color: var(--table-body-row-file-name-hover-text-color);
}
.pops-folder-list .text-ellip {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.pops-folder-list .content {
  color: var(--table-body-row-content-text-color);
  position: relative;
  width: 100%;
  text-align: left;
}
.pops-folder-list .inline-block-v-middle {
  display: inline-block;
  vertical-align: middle;
}
.pops-folder-list .flex-a-i-center {
  display: flex;
  align-items: center;
}
.pops-folder-list .u-file-icon {
  display: inline-block;
  vertical-align: middle;
}
.pops-folder-list .u-file-icon--list {
  width: 32px;
  height: 32px;
}
.pops-folder-list .pops-folder-list-file-icon {
  line-height: normal;
  align-content: center;
  position: relative;
  vertical-align: middle;
}
.pops-folder-list .pops-folder-file-list-breadcrumb-primary {
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  min-height: 17px;
  flex-wrap: wrap;
}
.pops-folder-list .pops-folder-list-table__sort {
  display: inline-flex;
  margin-left: 4px;
  flex-direction: column;
}

.pops-folder-list .pops-folder-icon-arrow {
  width: 10px;
  height: 10px;
  fill: var(--folder-arrow-fill-color);
}
.pops-folder-list .pops-folder-icon-active {
  fill: var(--folder-arrow-active-fill-color);
}
.pops-folder-list .pops-folder-file-list-breadcrumb {
  padding: 4px 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  min-height: 35px;
}
.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles {
  font-size: 12px;
  color: var(--header-breadcrumb-all-files-text-color);
  line-height: normal;
  align-content: center;
  font-weight: 700;
  display: inline-block;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:last-child a {
  color: var(--header-breadcrumb-all-files-last-text-color);
}
.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child a {
  font-size: 14px;
  color: var(--header-breadcrumb-all-files-first-text-color);
}
.pops-folder-list .pops-folder-file-list-breadcrumb .iconArrow {
  width: 16px;
  height: 16px;
}
.pops-folder-list .iconArrow {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTOLi4uLi4t7e3uPj49/f397e3t3d3f///97e3vDw8N3d3d7e3t3d3d3d3ejo6N/f397e3t7e3t3d3d/f393d3d3d3RK+NoEAAAAWdFJOUwAnM4YPU/iQA+UIeMDaHhY41i7zX7UebpjFAAAAUElEQVQI15XOORaAIAwE0LATXHCd+x9VfCiksXCq+UUWou8oZ1vXHrt7YVBiYkW4gdMKYFIC4CSATWCNHWPuM6HuHkr1x3N0ZrBu/9gl0b9c3+kF7C7hS1YAAAAASUVORK5CYII=)
    55% 50%/6px 9px no-repeat;
}

@media (prefers-color-scheme: dark) {
  .pops[type-value="folder"] {
    --pops-title-border-color: rgb(73, 83, 102, var(--pops-bg-opacity));
    --pops-bottom-btn-controls-border-color: rgb(73, 83, 102, var(--pops-bg-opacity));
  }
  .pops-folder-list {
    --header-breadcrumb-text-color: #06a7ff;
    --header-breadcrumb-all-files-text-color: var(--header-breadcrumb-text-color);
    --header-breadcrumb-all-files-first-text-color: var(--header-breadcrumb-text-color);
    --header-breadcrumb-all-files-last-text-color: #818999;
    --table-body-row-text-color: #f7f8fa;
    --table-body-td-text-color: rgb(73, 83, 102, var(--pops-bg-opacity));
    --table-body-th-text-color: rgb(73, 83, 102, var(--pops-bg-opacity));
    --table-body-td-text-color: #495366;
    --table-body-row-hover-bd-color: #1f2022;
    --table-body-row-hover-bg-color: #1f2022;
    --table-body-row-file-name-text-color: #f7f8fa;
  }
}
`,panelCSS:`.pops[type-value="panel"] {
  --pops-bg-color: #f2f2f2;
  --pops-color: #333333;
  --panel-title-bg-color: #ffffff;

  --panel-aside-bg-color: #ffffff;
  --panel-aside-hover-color: rgb(64, 158, 255);
  --panel-aside-hover-bg-color: rgba(64, 158, 255, 0.1);

  --pops-panel-forms-margin-top-bottom: 10px;
  --pops-panel-forms-margin-left-right: 20px;
  --pops-panel-forms-header-icon-size: calc(var(--pops-panel-forms-container-li-padding-left-right) + 1px);
  --pops-panel-forms-header-padding-top-bottom: 15px;
  --pops-panel-forms-header-padding-left-right: 10px;
  --pops-panel-forms-container-item-left-text-gap: 6px;
  --pops-panel-forms-container-item-left-desc-text-size: 0.8em;
  --pops-panel-forms-container-item-left-desc-text-color: #6c6c6c;
  --pops-panel-forms-container-item-bg-color: #ffffff;
  --pops-panel-forms-container-item-title-color: #333;
  --pops-panel-forms-container-item-border-radius: 6px;
  --pops-panel-forms-container-item-margin-top-bottom: 10px;
  --pops-panel-forms-container-item-margin-left-right: var(--pops-panel-forms-margin-left-right);
  --pops-panel-forms-container-li-border-color: var(--pops-bd-color);
  --pops-panel-forms-container-li-padding-top-bottom: 12px;
  --pops-panel-forms-container-li-padding-left-right: 16px;

  --pops-panel-forms-container-deepMenu-item-active-bg: #e9e9e9;
}
.pops[type-value="panel"] {
  color: var(--pops-color);
  background: var(--pops-bg-color);
}
.pops[type-value] .pops-panel-title {
  background: var(--panel-title-bg-color);
}

/* ↓panel的CSS↓ */
/* 左侧的列表 */
aside.pops-panel-aside {
  box-sizing: border-box;
  flex-shrink: 0;
  max-width: 200px;
  min-width: 100px;
  height: 100%;
  background: var(--panel-aside-bg-color);
  border-right: 1px solid var(--panel-aside-bg-color);
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
aside.pops-panel-aside .pops-panel-aside-top-container {
  overflow: auto;
}
aside.pops-panel-aside ul li {
  margin: 6px 8px;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
aside.pops-panel-aside .pops-is-visited,
aside.pops-panel-aside ul li:not(.pops-panel-disabled-aside-hover-css):hover {
  color: var(--panel-aside-hover-color);
  background: var(--panel-aside-hover-bg-color);
}
/* 左侧的列表 */

/* 底部的容器 */
.pops-panel-bottom-wrapper {
  background: var(--panel-aside-bg-color);
  border-top: 1px solid #ebeef5;
}
.pops-panel-bottom-wrapper:has(.pops-panel-bottom-left-container:empty):has(.pops-panel-bottom-right-container:empty) {
  border-top: 0;
}
.pops-panel-bottom-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.pops-panel-bottom-left-container {
}
.pops-panel-bottom-right-container {
}
.pops-panel-bottom-wrapper .pops-panel-bottom-item {
  list-style-type: none;
  margin: 6px 8px;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: default;
}
.pops-panel-bottom-wrapper:not(.pops-panel-disable-bottom-item-hover-css) .pops-panel-bottom-item:hover {
  color: var(--panel-aside-hover-color);
  background: var(--panel-aside-hover-bg-color);
}
/* 底部的容器 */

.pops-panel-content {
  display: flex;
  flex-direction: row;
  flex: 1;
  overflow: auto;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  bottom: 0 !important;
}

.pops-panel-section-wrapper {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

section.pops-panel-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
section.pops-panel-container .pops-panel-container-header-ul,
section.pops-panel-container .pops-panel-deepMenu-container-header-ul {
  border-bottom: 1px solid rgba(223, 223, 223, var(--pops-bg-opacity));
  flex: 0 auto;
}
section.pops-panel-container .pops-panel-container-header-ul li,
section.pops-panel-container .pops-panel-container-header-ul li.pops-panel-container-header-title-text {
  display: flex;
  justify-content: flex-start !important;
  margin: 0px !important;
  padding: var(--pops-panel-forms-header-padding-top-bottom)
    calc(var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-container-li-padding-left-right));
  text-align: left;
}
section.pops-panel-container ul.pops-panel-container-main-ul {
  overflow: auto;
  /*flex: 1;*/
}
section.pops-panel-container > ul li:not(.pops-panel-forms-container-item) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: var(--pops-panel-forms-margin-top-bottom)
    calc(var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-margin-left-right));
  gap: 10px;
}
section.pops-panel-container .pops-panel-forms-container-item-header-text {
  margin: 10px;
  margin-left: calc(
    var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-container-li-padding-left-right)
  );
  font-size: 0.9em;
  text-align: left;
  color: var(--pops-panel-forms-container-item-title-color);
}
section.pops-panel-container li.pops-panel-forms-container-item {
  /* 去除<li>左侧的圆点 */
  display: block;
}
section.pops-panel-container .pops-panel-forms-container-item ul.pops-panel-forms-container-item-formlist {
  border-radius: var(--pops-panel-forms-container-item-border-radius);
  background: var(--pops-panel-forms-container-item-bg-color);
  margin: var(--pops-panel-forms-container-item-margin-top-bottom) var(--pops-panel-forms-margin-left-right);
}
section.pops-panel-container .pops-panel-forms-container-item ul.pops-panel-forms-container-item-formlist li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--pops-panel-forms-container-li-padding-top-bottom)
    var(--pops-panel-forms-container-li-padding-left-right);
  margin: 0px 0px;
  border-bottom: 1px solid var(--pops-panel-forms-container-li-border-color);
  text-align: left;
}
/*section.pops-panel-container
	.pops-panel-forms-container-item
	ul
	li.pops-panel-deepMenu-nav-item {
	padding: var(--pops-panel-forms-container-li-padding-top-bottom) 0px;
	margin: 0px var(--pops-panel-forms-container-li-padding-left-right);
	border-bottom: 1px solid var(--pops-panel-forms-container-li-border-color);
}*/
section.pops-panel-container
  .pops-panel-forms-container-item
  ul.pops-panel-forms-container-item-formlist
  li:last-child {
  border: 0px;
}
/* 左侧的文字 */
section.pops-panel-container .pops-panel-item-left-text {
  display: flex;
  flex-direction: column;
  gap: var(--pops-panel-forms-container-item-left-text-gap);
}

/* 左侧的主文字 */
/*section.pops-panel-container .pops-panel-item-left-main-text {
	
}*/
/* 左侧的描述文字 */
section.pops-panel-container .pops-panel-item-left-desc-text {
  font-size: var(--pops-panel-forms-container-item-left-desc-text-size);
  color: var(--pops-panel-forms-container-item-left-desc-text-color);
}

/* 折叠面板 */
section.pops-panel-container .pops-panel-forms-fold {
  border-radius: var(--pops-panel-forms-container-item-border-radius);
  background: var(--pops-panel-forms-container-item-bg-color);
  margin: var(--pops-panel-forms-margin-top-bottom) var(--pops-panel-forms-margin-left-right);
}
section.pops-panel-container .pops-panel-forms-fold .pops-panel-forms-fold-container {
  display: flex;
  align-items: center;
  fill: #6c6c6c;
  justify-content: space-between;
  margin: 0px var(--pops-panel-forms-container-li-padding-left-right) !important;
  padding: var(--pops-panel-forms-container-li-padding-top-bottom) 0px !important;
}
section.pops-panel-container .pops-panel-forms-fold[data-fold-enable] .pops-panel-forms-fold-container-icon {
  transform: rotate(90deg);
}
section.pops-panel-container .pops-panel-forms-fold .pops-panel-forms-fold-container-icon {
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  transform: rotate(-90deg);
  transition: transform 0.3s;
}
/* 折叠状态 */
section.pops-panel-container .pops-panel-forms-fold[data-fold-enable] .pops-panel-forms-container-item-formlist {
  height: 0;
}
/* 非折叠状态 */
section.pops-panel-container .pops-panel-forms-fold ul.pops-panel-forms-container-item-formlist {
  margin: 0;
}
section.pops-panel-container .pops-panel-forms-fold .pops-panel-forms-container-item-formlist {
  transition: height 0.3s;
  overflow: hidden;
  border-radius: unset;
  background: unset;
  margin: 0;
  height: calc-size(auto, size);
}
/* 折叠面板 */

/* 姑且认为小于600px的屏幕为移动端 */
@media (max-width: 600px) {
  /* 兼容移动端CSS */
  .pops[type-value="panel"] {
    --pops-panel-forms-margin-left-right: 10px;
  }
  .pops[type-value="panel"] {
    width: 92%;
    width: 92vw;
    width: 92dvw;
  }
  .pops[type-value="panel"] .pops-panel-content aside.pops-panel-aside {
    max-width: 20%;
    min-width: auto;
  }
  .pops[type-value="panel"] section.pops-panel-container .pops-panel-forms-container-item > div {
    text-align: left;
    --pops-panel-forms-margin-left-right: 0px;
  }
  .pops[type-value="panel"] section.pops-panel-container .pops-panel-forms-container-item ul {
    margin: 0px !important;
  }
  .pops[type-value="panel"] section.pops-panel-container > ul > li {
    margin: 10px 10px;
  }
  .pops[type-value="panel"] section.pops-panel-container > ul > li div:nth-child(2) {
    max-width: 55%;
  }
  .pops[type-value="panel"] .pops-panel-select .el-select__selected-item.el-select__placeholder {
    max-width: -moz-available;
    max-width: -webkit-fill-available;
  }
  .pops[type-value="panel"] section.pops-panel-container > ul > li .pops-panel-input span.pops-panel-input__suffix {
    padding: 0 4px;
  }
  .pops[type-value="panel"] section.pops-panel-container .pops-panel-select select {
    min-width: 88px !important;
    width: -moz-available;
    width: -webkit-fill-available;
  }
  .pops[type-value="panel"] section.pops-panel-container .pops-panel-container-header-ul li {
    font-size: 16px;
  }
  .pops[type-value="panel"] .pops-panel-title p[pops],
  .pops[type-value="panel"] section.pops-panel-container > ul li,
  .pops[type-value="panel"] aside.pops-panel-aside ul li {
    font-size: 14px;
  }
}
/* switch的CSS */
.pops-panel-switch {
  --panel-switch-core-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));
  --panel-switch-core-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));
  --panel-switch-circle-color: #dcdfe6;
  --panel-switch-circle-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
  --panel-switch-checked-circle-color: #409eff;
  --panel-switch-checked-core-bd-color: rgb(64, 158, 255, var(--pops-bd-opacity));
  --panel-switch-checked-core-bg-color: rgb(64, 158, 255, var(--pops-bg-opacity));
}
.pops-panel-switch {
  display: inline-flex;
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: normal;
  align-content: center;
  height: 32px;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.pops-panel-switch input.pops-panel-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
.pops-panel-switch:has(input.pops-panel-switch__input:disabled),
.pops-panel-switch[data-disabled],
.pops-panel-switch[data-disabled] .pops-panel-switch__core,
.pops-panel-switch input.pops-panel-switch__input:disabled + .pops-panel-switch__core {
  cursor: not-allowed;
  opacity: 0.6;
}
.pops-panel-switch span.pops-panel-switch__core {
  display: inline-flex;
  position: relative;
  align-items: center;
  min-width: 40px;
  height: 20px;
  border: 1px solid var(--panel-switch-core-bd-color);
  outline: 0;
  border-radius: 10px;
  box-sizing: border-box;
  background: var(--panel-switch-core-bg-color);
  cursor: pointer;
  transition:
    border-color 0.3s,
    background-color 0.3s;
}
.pops-panel-switch .pops-panel-switch__action {
  position: absolute;
  left: 1px;
  border-radius: 100%;
  transition: all 0.3s;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--panel-switch-circle-bg-color);
  color: var(--panel-switch-circle-color);
}
.pops-panel-switch.pops-panel-switch-is-checked span.pops-panel-switch__core {
  border-color: var(--panel-switch-checked-core-bd-color);
  background-color: var(--panel-switch-checked-core-bg-color);
}
.pops-panel-switch.pops-panel-switch-is-checked .pops-panel-switch__action {
  left: calc(100% - 17px);
  color: var(--panel-switch-checked-circle-color);
}
/* switch的CSS */

/* slider旧的CSS */
section.pops-panel-container .pops-panel-slider:has(> input[type="range"]) {
  overflow: hidden;
  height: 25px;
  line-height: normal;
  align-content: center;
  display: flex;
  align-items: center;
}
section.pops-panel-container .pops-panel-slider input[type="range"] {
  height: 6px;
  background: rgb(228, 231, 237, var(--pops-bg-opacity));
  outline: 0;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
}
section.pops-panel-container .pops-panel-slider input[type="range"]::-webkit-slider-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid rgb(64, 158, 255, var(--pops-bd-opacity));
  background-color: rgb(255, 255, 255, var(--pops-bg-opacity));
  box-shadow:
    0 0 2px rgba(0, 0, 0, 0.3),
    0 3px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  border-image: linear-gradient(#409eff, #409eff) 0 fill/9 25 9 0/0 0 0 100vw;
}
section.pops-panel-container .pops-panel-slider input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid rgb(64, 159, 255, var(--pops-bd-opacity));
  background-color: rgb(255, 255, 255, var(--pops-bg-opacity));
  box-shadow:
    0 0 2px rgba(0, 0, 0, 0.3),
    0 3px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
}
section.pops-panel-container .pops-panel-slider input[type="range"]::-moz-range-progress {
  height: 6px;
  border-image: linear-gradient(#409eff, #409eff) 0 fill/9 25 9 0/0 0 0 100vw;
}
/* slider旧的CSS */

/* slider的CSS */
.pops-slider {
  --pops-slider-color-white: #ffffff;
  --pops-slider-color-primary: #409eff;
  --pops-slider-color-info: #909399;
  --pops-slider-text-color-placeholder: #a8abb2;
  --pops-slider-border-color-light: #e4e7ed;
  --pops-slider-border-radius-circle: 100%;
  --pops-slider-transition-duration-fast: 0.2s;

  --pops-slider-main-bg-color: var(--pops-slider-color-primary);
  --pops-slider-runway-bg-color: var(--pops-slider-border-color-light);
  --pops-slider-stop-bg-color: var(--pops-slider-color-white);
  --pops-slider-disabled-color: var(--pops-slider-text-color-placeholder);
  --pops-slider-border-radius: 3px;
  --pops-slider-height: 6px;
  --pops-slider-button-size: 20px;
  --pops-slider-button-wrapper-size: 36px;
  --pops-slider-button-wrapper-offset: -15px;
  --pops-slider-value-text-gap: 10px;
}

.pops-slider {
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.pops-slider-width {
  flex: 0 0 52%;
  margin-left: 10px;
}

.pops-slider:has(.pops-slider__value_text:not(:empty)) {
  gap: var(--pops-slider-value-text-gap);
}
.pops-slider__runway {
  flex: 1;
  height: var(--pops-slider-height);
  background-color: var(--pops-slider-runway-bg-color);
  border-radius: var(--pops-slider-border-radius);
  position: relative;
  cursor: pointer;
}

.pops-slider__runway.show-input {
  margin-right: 30px;
  width: auto;
}

.pops-slider__runway.pops-slider-is-disabled {
  cursor: default;
}

.pops-slider__runway.pops-slider-is-disabled .pops-slider__bar {
  background-color: var(--pops-slider-disabled-color);
}

.pops-slider__runway.pops-slider-is-disabled .pops-slider__button {
  border-color: var(--pops-slider-disabled-color);
}

.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {
  cursor: not-allowed;
}

.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {
  transform: scale(1);
}

.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {
  cursor: not-allowed;
}

.pops-slider__input {
  flex-shrink: 0;
  width: 130px;
}

.pops-slider__bar {
  height: var(--pops-slider-height);
  background-color: var(--pops-slider-main-bg-color);
  border-top-left-radius: var(--pops-slider-border-radius);
  border-bottom-left-radius: var(--pops-slider-border-radius);
  position: absolute;
}

.pops-slider__button-wrapper {
  height: var(--pops-slider-button-wrapper-size);
  width: var(--pops-slider-button-wrapper-size);
  position: absolute;
  z-index: 1;
  top: var(--pops-slider-button-wrapper-offset);
  transform: translate(-50%);
  background-color: transparent;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: normal;
  outline: none;
}

.pops-slider__button-wrapper:after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}

.pops-slider__button:hover,
.pops-slider__button.hover {
  cursor: grab;
}

.pops-slider__button {
  display: inline-block;
  width: var(--pops-slider-button-size);
  height: var(--pops-slider-button-size);
  vertical-align: middle;
  border: solid 2px var(--pops-slider-main-bg-color);
  background-color: var(--pops-slider-color-white);
  border-radius: 50%;
  box-sizing: border-box;
  transition: var(--pops-slider-transition-duration-fast);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.pops-slider__button:hover,
.pops-slider__button.hover,
.pops-slider__button.dragging {
  transform: scale(1.2);
}

.pops-slider__button:hover,
.pops-slider__button.hover {
  cursor: grab;
}

.pops-slider__button.dragging {
  cursor: grabbing;
}

.pops-slider__stop {
  position: absolute;
  height: var(--pops-slider-height);
  width: var(--pops-slider-height);
  border-radius: var(--pops-slider-border-radius-circle);
  background-color: var(--pops-slider-stop-bg-color);
  transform: translate(-50%);
}

.pops-slider__marks {
  top: 0;
  left: 12px;
  width: 18px;
  height: 100%;
}

.pops-slider__marks-text {
  position: absolute;
  transform: translate(-50%);
  font-size: 14px;
  color: var(--pops-slider-color-info);
  margin-top: 15px;
  white-space: pre;
}

.pops-slider.is-vertical {
  position: relative;
  display: inline-flex;
  width: auto;
  height: 100%;
  flex: 0;
}

.pops-slider.is-vertical .pops-slider__runway {
  width: var(--pops-slider-height);
  height: 100%;
  margin: 0 16px;
}

.pops-slider.is-vertical .pops-slider__bar {
  width: var(--pops-slider-height);
  height: auto;
  border-radius: 0 0 3px 3px;
}

.pops-slider.is-vertical .pops-slider__button-wrapper {
  top: auto;
  left: var(--pops-slider-button-wrapper-offset);
  transform: translateY(50%);
}

.pops-slider.is-vertical .pops-slider__stop {
  transform: translateY(50%);
}

.pops-slider.is-vertical .pops-slider__marks-text {
  margin-top: 0;
  left: 15px;
  transform: translateY(50%);
}

.pops-slider--large {
  height: 40px;
}

.pops-slider--small {
  height: 24px;
}
/* slider的CSS */

/* input的CSS */
.pops-panel-input {
  --el-disabled-text-color: #a8abb2;
  --el-disabled-bg-color: #f5f7fa;
  --el-disabled-border-color: #e4e7ed;
  --el-color-danger: #f56c6c;

  --pops-panel-components-input-border-radius: 4px;
  --pops-panel-components-input-text-color: #000000;
  --pops-panel-components-input-text-bg-color: transparent;
  --pops-panel-components-input-text-default-padding: 8px;
  --pops-panel-components-input-bd-color: #dcdfe6;
  --pops-panel-components-input-bg-color: #ffffff;
  --pops-panel-components-input-hover-bd-color: #c0c4cc;
  --pops-panel-components-input-focus-bd-color: #409eff;
  --pops-panel-components-input-suffix-color: #a8abb2;
  --pops-panel-components-input-suffix-bg-color: #ffffff;
}
.pops-panel-input {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-shadow: none;
  width: 200px;
  border: 0px;
}
.pops-panel-input_inner {
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid var(--pops-panel-components-input-bd-color);
  border-radius: var(--pops-panel-components-input-border-radius);
  background-color: var(--pops-panel-components-input-bg-color);
  box-shadow: none;
}
.pops-panel-input_inner:hover {
  border: 1px solid var(--pops-panel-components-input-hover-bd-color);
}
.pops-panel-input:has(input:disabled):hover {
  --pops-panel-components-input-hover-bd-color: var(--pops-panel-components-input-bd-color);
}
.pops-panel-input_inner:has(input:focus) {
  outline: 0;
  border: 1px solid var(--pops-panel-components-input-focus-bd-color);
  border-radius: var(--pops-panel-components-input-border-radius);
  box-shadow: none;
}
.pops-panel-input input {
  display: inline-flex;
  justify-content: center;
  text-align: start;
  align-items: center;
  align-content: center;
  white-space: nowrap;
  cursor: text;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  appearance: none;
  color: var(--pops-panel-components-input-text-color);
  background-color: var(--pops-panel-components-input-text-bg-color);
  outline: 0;
  transition: 0.1s;
  border: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  height: 32px;
  width: 100%;
  flex: 1;
  /*margin-right: calc(1em + 8px);*/
  margin: 0px;
  padding: var(--pops-panel-components-input-text-default-padding);
}
.pops-panel-input input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none;
}
/* 颜色选择器不需要那么宽 */
.pops-panel-input:has(input[type="color"]) {
  width: 50px;
}
.pops-panel-input input[type="color"] {
  padding: 0px;
}
.pops-panel-input_inner:has(input[type="file"]) {
  border: 0px;
  background: transparent;
}
.pops-panel-input input[type="file"] {
  padding: 0px;
  line-height: 32px;
}
.pops-panel-input span.pops-panel-input__suffix {
  display: inline-flex;
  white-space: nowrap;
  flex-shrink: 0;
  flex-wrap: nowrap;
  height: 100%;
  height: -moz-available;
  height: -webkit-fill-available;
  text-align: center;
  color: var(--pops-panel-components-input-suffix-color);
  background: var(--pops-panel-components-input-suffix-bg-color);
  transition: all 0.3s;
  pointer-events: none;
  padding: 0 8px;
  position: relative;
  right: 0px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 1px solid transparent;
}
.pops-panel-input span.pops-panel-input__suffix-inner {
  pointer-events: all;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
/* 如果包含清空图标的按钮，则默认隐藏清空图标，当:hover、:focus、:focus-within、:active时显示清空图标 */
.pops-panel-input span.pops-panel-input__suffix:has(svg[data-type="circleClose"]) {
  display: none;
}
.pops-panel-input:hover span.pops-panel-input__suffix:has(svg[data-type="circleClose"]),
.pops-panel-input:focus span.pops-panel-input__suffix:has(svg[data-type="circleClose"]),
.pops-panel-input:focus-within span.pops-panel-input__suffix:has(svg[data-type="circleClose"]),
.pops-panel-input:active span.pops-panel-input__suffix:has(svg[data-type="circleClose"]) {
  display: inline-flex;
}
/* 当清空图标显示时或查看图标存在时，则隐藏输入框的padding-right */
.pops-panel-input:hover:has(span.pops-panel-input__suffix svg[data-type="circleClose"]) input,
.pops-panel-input:focus:has(span.pops-panel-input__suffix svg[data-type="circleClose"]) input,
.pops-panel-input:focus-within:has(span.pops-panel-input__suffix svg[data-type="circleClose"]) input,
.pops-panel-input:active:has(span.pops-panel-input__suffix svg[data-type="circleClose"]) input,
.pops-panel-input:has(span.pops-panel-input__suffix svg[data-type="view"]) input,
.pops-panel-input:has(span.pops-panel-input__suffix svg[data-type="hide"]) input {
  padding-right: 0;
}
.pops-panel-input .pops-panel-icon {
  cursor: pointer;
}
.pops-panel-input .pops-panel-icon {
  height: inherit;
  line-height: normal;
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}
.pops-panel-input .pops-panel-icon svg {
  height: 1em;
  width: 1em;
}

.pops-input-disabled {
  background-color: var(--pops-components-is-disabled-bg-color);
  border-radius: 4px;
}
.pops-panel-input.pops-input-disabled:hover {
  --pops-panel-components-input-hover-bd-color: var(--pops-panel-components-input-bd-color);
}
.pops-panel-input input:disabled,
.pops-panel-input input:disabled + .pops-panel-input__suffix {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: var(--el-disabled-text-color);
  -webkit-text-fill-color: var(--el-disabled-text-color);
  cursor: not-allowed;
}
.pops-panel-input input:disabled + .pops-panel-input__suffix {
  display: none;
}
/* 校验样式 */
.pops-panel-input:has(.pops-panel-input-valid-error) {
  --pops-panel-components-input-bd-color: var(--el-color-danger) !important;
  --pops-panel-components-input-hover-bd-color: var(--pops-panel-components-input-bd-color);
  --pops-panel-components-input-focus-bd-color: var(--pops-panel-components-input-bd-color);
}
.pops-panel-input .pops-panel-input-valid-error {
  width: 100%;
  color: var(--el-color-danger);
  font-weight: 500;
  font-size: 0.8em;
  box-sizing: border-box;
  vertical-align: middle;
  display: inline-flex;
  position: relative;
}
/* input的CSS */

/* textarea的CSS */
.pops-panel-textarea {
  --pops-panel-components-textarea-text-color: #000000;
  --pops-panel-components-textarea-text-bg-color: #ffffff;
  --pops-panel-components-textarea-bd-color: #dcdfe6;
  --pops-panel-components-textarea-hover-bd-color: #c0c4cc;
  --pops-panel-components-textarea-focus-bd-color: #409eff;
}
.pops-panel-textarea textarea {
  width: 100%;
  /*vertical-align: bottom;*/
  position: relative;
  display: block;
  resize: none;
  padding: 5px 11px;
  /*line-height: 1;*/
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
  color: var(--pops-panel-components-textarea-text-color);
  background-color: var(--pops-panel-components-textarea-text-bg-color);
  background-image: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  border-radius: 0;
  transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid var(--pops-panel-components-textarea-bd-color);
}
.pops-panel-textarea textarea:hover {
  border-color: var(--pops-panel-components-textarea-hover-bd-color);
}
.pops-panel-textarea:has(textarea:disabled):hover {
  --pops-panel-components-textarea-hover-bd-color: var(--pops-panel-components-textarea-bd-color);
}
.pops-panel-textarea-disable {
  --pops-panel-components-textarea-text-bg-color: var(--pops-components-is-disabled-bg-color) !important;
  --pops-panel-components-textarea-text-color: var(--pops-components-is-disabled-text-color);
}
.pops-panel-textarea-disable textarea {
  cursor: not-allowed;
}
.pops-panel-textarea textarea:focus {
  outline: 0;
  border-color: var(--pops-panel-components-textarea-focus-bd-color);
}
/* textarea的CSS */

/* select的CSS */
.pops-panel-select {
  --pops-panel-components-select-disabled-text-color: #a8abb2;
  --pops-panel-components-select-text-color: #000000;
  --pops-panel-components-select-bd-color: rgb(184, 184, 184, var(--pops-bd-opacity));
  --pops-panel-components-select-hover-bd-color: rgb(184, 184, 184, var(--pops-bd-opacity));
  --pops-panel-components-select-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
}
.pops-panel-select {
  border: 0;
}
.pops-panel-select select {
  width: 100%;
  height: 32px;
  line-height: normal;
  align-content: center;
  min-width: 200px;
  border: 1px solid var(--pops-panel-components-select-bd-color);
  border-radius: 5px;
  text-align: center;
  outline: 0;
  color: var(--pops-panel-components-select-text-color);
  background-color: var(--pops-panel-components-select-bg-color);
  box-shadow: none;
}
.pops-panel-select select:hover {
  border: 1px solid var(--pops-panel-components-select-hover-bd-color);
}
.pops-panel-select-disable {
  --pops-panel-components-select-text-color: var(--pops-components-is-disabled-text-color);
  --pops-panel-components-select-bg-color: var(--pops-components-is-disabled-bg-color);
}
.pops-panel-select-disable select {
  cursor: not-allowed;
}
.pops-panel-select-disable select:hover {
  box-shadow: none;
  --pops-panel-components-select-hover-bd-color: var(--pops-panel-components-select-bd-color);
}
.pops-panel-select select:focus {
  border: 1px solid rgb(64, 158, 255, var(--pops-bd-opacity));
  box-shadow: none;
}
/* select的CSS */

/* select dialog 的CSS */
.pops-panel-select[data-mode="dialog"] {
}
/* select dialog 的CSS */

/* select horizontal 的CSS */
.pops-panel-select[data-mode="horizontal"] {
  --pops-panel-components-select-horizontal-selected-text-color: #626aef;
  --pops-panel-components-select-horizontal-selected-bg-color: #eff0fd;
}
.pops-panel-select[data-mode="horizontal"] .el-select__wrapper {
  padding: 0;
  gap: 0;
  border: 0;
}
.pops-panel-select[data-mode="horizontal"] .select-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--el-border-color);
  height: -moz-available;
  height: -webkit-fill-available;
  border-left: 0;
}
.pops-panel-select[data-mode="horizontal"] .select-item:hover {
  color: var(--el-color-primary);
}
.pops-panel-select[data-mode="horizontal"] .select-item:first-child {
  border-left: 1px solid var(--el-border-color);
  border-top-left-radius: var(--el-border-radius-base);
  border-bottom-left-radius: var(--el-border-radius-base);
}
.pops-panel-select[data-mode="horizontal"] .select-item:last-child {
  border-top-right-radius: var(--el-border-radius-base);
  border-bottom-right-radius: var(--el-border-radius-base);
}
.pops-panel-select[data-mode="horizontal"] .select-item.select__selected-item {
  color: var(--pops-panel-components-select-horizontal-selected-text-color);
  background-color: var(--pops-panel-components-select-horizontal-selected-bg-color);
  border-color: var(--pops-panel-components-select-horizontal-selected-bg-color);
}
.pops-panel-select[data-mode="horizontal"] .select-item:has(+ .select__selected-item) {
  border-right: 0;
}
.pops-panel-select[data-mode="horizontal"] .select-item[disabled] {
  color: var(--pops-panel-components-select-disabled-text-color);
  --pops-panel-components-select-horizontal-selected-text-color: var(
    --pops-panel-components-select-disabled-text-color
  );
  cursor: not-allowed;
  background: unset;
}
/* select horizontal 的CSS */

/* select-multiple的CSS*/
.pops-panel-select-multiple,
.pops-panel-select {
  --el-border-radius-base: 4px;
  --el-fill-color-blank: #ffffff;
  --el-transition-duration: 0.3s;
  --el-border-color: #cbcbcb;
  --el-text-color-placeholder: #a8abb2;
  --color: inherit;
  --el-select-input-color: #a8abb2;
  --el-select-input-font-size: 14px;
  --el-text-color-regular: #606266;
  --el-color-info: #909399;
  --el-color-info-light-9: #f4f4f5;
  --el-color-info-light-8: #e9e9eb;
  --el-color-primary-light-9: #ecf5ff;
  --el-color-primary-light-8: #d9ecff;
  --el-color-primary: #007dfe;
  --el-color-white: #ffffff;
  width: 200px;
}
.pops-panel-select .el-select__wrapper,
.pops-panel-select-multiple .el-select__wrapper {
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  text-align: left;
  font-size: 14px;
  padding: 4px 12px;
  gap: 6px;
  min-height: 32px;
  line-height: normal;
  align-content: center;
  border-radius: var(--el-border-radius-base);
  background-color: var(--el-fill-color-blank);
  transition: var(--el-transition-duration);
  transform: translateZ(0);
  border: 1px solid var(--el-border-color);
}
.pops-panel-select .el-select__wrapper.is-focused,
.pops-panel-select-multiple .el-select__wrapper.is-focused {
  --el-border-color: var(--el-color-primary);
}
.pops-panel-select .el-select__selection,
.pops-panel-select-multiple .el-select__selection {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
  min-width: 0;
  gap: 6px;
}
.pops-panel-select .el-select__selection[data-selected-text-align="left"] {
  justify-content: left;
}
.pops-panel-select .el-select__selection[data-selected-text-align="center"] {
  justify-content: center;
}
.pops-panel-select .el-select__selection[data-selected-text-align="right"] {
  justify-content: right;
}
.pops-panel-select .el-select__selected-item,
.pops-panel-select-multiple .el-select__selected-item {
  display: flex;
  flex-wrap: wrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.pops-panel-select .el-select__selected-item span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.pops-panel-select .el-select__selected-item.el-select__choose_tag .el-tag,
.pops-panel-select-multiple .el-select__selected-item.el-select__choose_tag .el-tag {
  max-width: 200px;
}
.pops-panel-select .el-select__input-wrapper,
.pops-panel-select-multiple .el-select__input-wrapper {
  max-width: 100%;
}
.pops-panel-select .el-select__selection.is-near,
.pops-panel-select-multiple .el-select__selection.is-near {
  margin-left: -8px;
}
.pops-panel-select .el-select__placeholder,
.pops-panel-select-multiple .el-select__placeholder {
  position: absolute;
  display: block;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--el-input-text-color, var(--el-text-color-regular));
}
.pops-panel-select .el-select__placeholder.is-transparent,
.pops-panel-select-multiple .el-select__placeholder.is-transparent {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: var(--el-text-color-placeholder);
}
.pops-panel-select .el-select__prefix,
.pops-panel-select .el-select__suffix,
.pops-panel-select-multiple .el-select__prefix,
.pops-panel-select-multiple .el-select__suffix {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 6px;
  color: var(--el-input-icon-color, var(--el-text-color-placeholder));
}
.pops-panel-select .el-icon,
.pops-panel-select-multiple .el-icon {
  --color: inherit;
  height: 1em;
  width: 1em;
  line-height: normal;
  align-content: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: var(--color);
  font-size: inherit;
}
.pops-panel-select .el-icon svg,
.pops-panel-select-multiple .el-icon svg {
  height: 1em;
  width: 1em;
}
.pops-panel-select .el-select__caret,
.pops-panel-select-multiple .el-select__caret {
  color: var(--el-select-input-color);
  font-size: var(--el-select-input-font-size);
  transition: transform var(--el-transition-duration);
  transform: rotate(0);
  cursor: pointer;
}
/* 把箭头旋转 */
.pops-panel-select[data-show-option] .el-select__caret,
.pops-panel-select-multiple[data-show-option] .el-select__caret {
  transform: rotate(180deg);
}
.pops-panel-select-multiple .el-tag {
  --el-tag-font-size: 12px;
  --el-tag-border-radius: 4px;
  --el-tag-border-radius-rounded: 9999px;
}
.pops-panel-select-multiple .el-tag {
  background-color: var(--el-tag-bg-color);
  border-color: var(--el-tag-border-color);
  color: var(--el-tag-text-color);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  height: 24px;
  padding: 0 9px;
  font-size: var(--el-tag-font-size);
  line-height: normal;
  align-content: center;
  border-width: 1px;
  border-style: solid;
  border-radius: var(--el-tag-border-radius);
  box-sizing: border-box;
  white-space: nowrap;
  --el-icon-size: 14px;
  --el-tag-bg-color: var(--el-color-primary-light-9);
  --el-tag-border-color: var(--el-color-primary-light-8);
  --el-tag-hover-color: var(--el-color-primary);
}
.pops-panel-select-multiple .el-select__selection .el-tag {
  cursor: pointer;
  border-color: transparent;
}
.pops-panel-select-multiple .el-tag.el-tag--info {
  --el-tag-bg-color: var(--el-color-info-light-9);
  --el-tag-border-color: var(--el-color-info-light-8);
  --el-tag-hover-color: var(--el-color-info);
}
.pops-panel-select-multiple .el-tag.el-tag--info {
  --el-tag-text-color: var(--el-color-info);
}
.pops-panel-select-multiple .el-tag.is-closable {
  padding-right: 5px;
}
.pops-panel-select-multiple .el-select__selection .el-tag .el-tag__content {
  min-width: 0;
}
.pops-panel-select-multiple .el-tag .el-tag__close {
  flex-shrink: 0;
  color: var(--el-tag-text-color);
}
.pops-panel-select-multiple .el-tag .el-tag__close:hover {
  color: var(--el-color-white);
  background-color: var(--el-tag-hover-color);
}
.pops-panel-select-multiple .el-tag .el-icon {
  border-radius: 50%;
  cursor: pointer;
  font-size: calc(var(--el-icon-size) - 2px);
  height: var(--el-icon-size);
  width: var(--el-icon-size);
}
.pops-panel-select-multiple .el-tag .el-tag__close {
  margin-left: 6px;
}
.pops-panel-select-multiple .el-select__tags-text {
  display: block;
  line-height: normal;
  align-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 禁用样式 */
.pops-panel-select-disable {
  --el-fill-color-blank: #f5f7fa;
  --color: #a8abb2;
  --el-border-color: #cbcbcb;
}
.pops-panel-select-disable .el-tag.el-tag--info {
  --el-tag-bg-color: #e7e7e7;
  --el-tag-text-color: var(--pops-components-is-disabled-text-color);
}
.pops-panel-select-disable .el-select__selection .el-tag,
.pops-panel-select-disable .el-tag .el-tag__close:hover,
.pops-panel-select-disable .el-select__wrapper,
.pops-panel-select-disable .el-select__caret {
  cursor: not-allowed;
}
/* select-multiple的CSS*/

/* deepMenu的css */
.pops-panel-deepMenu-nav-item {
  cursor: pointer;
}
.pops-panel-deepMenu-nav-item:active {
  background: var(--pops-panel-forms-container-deepMenu-item-active-bg);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
section.pops-panel-container .pops-panel-forms-container-item ul li.pops-panel-deepMenu-nav-item:active {
  padding: var(--pops-panel-forms-container-li-padding-top-bottom)
    var(--pops-panel-forms-container-li-padding-left-right);
  margin: 0px;
}
/* 去除上个兄弟item的底部边框颜色 */
section.pops-panel-container .pops-panel-forms-container-item ul li:has(+ .pops-panel-deepMenu-nav-item:active) {
  border-bottom: 1px solid transparent;
}
/* 第一个和最后一个跟随圆角 */
section.pops-panel-container .pops-panel-forms-container-item ul li.pops-panel-deepMenu-nav-item:first-child:active {
  border-top-left-radius: var(--pops-panel-forms-container-item-border-radius);
  border-top-right-radius: var(--pops-panel-forms-container-item-border-radius);
}
section.pops-panel-container .pops-panel-forms-container-item ul li.pops-panel-deepMenu-nav-item:last-child:active {
  border-bottom-left-radius: var(--pops-panel-forms-container-item-border-radius);
  border-bottom-right-radius: var(--pops-panel-forms-container-item-border-radius);
}
.pops-panel-deepMenu-nav-item .pops-panel-deepMenu {
  display: flex;
  align-items: center;
  color: #6c6c6c;
  fill: #6c6c6c;
}
.pops-panel-deepMenu-nav-item .pops-panel-deepMenu-arrowRight-icon {
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
}
section.pops-panel-deepMenu-container .pops-panel-container-header-ul li.pops-panel-deepMenu-container-header {
  display: flex;
  align-items: center;
  width: -moz-available;
  width: -webkit-fill-available;
  padding: var(--pops-panel-forms-header-padding-top-bottom)
    calc(
      var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-container-li-padding-left-right) -
        var(--pops-panel-forms-header-icon-size)
    );
  gap: 0px;
}
.pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon {
  width: var(--pops-panel-forms-header-icon-size);
  height: var(--pops-panel-forms-header-icon-size);
  display: flex;
  align-items: center;
  cursor: pointer;
}
/* 修复safari上图标大小未正常显示 */
.pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon > svg {
  width: inherit;
  height: inherit;
}
/* deepMenu的css */

/* 文字对齐 */
.pops-panel-item-left-desc-text:has(code) {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
}

@media (prefers-color-scheme: dark) {
  .pops[type-value="panel"] {
    --pops-bg-color: #000000;
    --pops-color: #f2f2f2;
    --panel-title-bg-color: #000000;
    --panel-aside-bg-color: #262626;
    --pops-panel-forms-container-item-left-desc-text-color: #6c6c6c;
    --pops-panel-forms-container-item-bg-color: #262626;
    --pops-panel-forms-container-item-title-color: #c1c1c1;

    --pops-panel-forms-container-li-border-color: rgb(51, 51, 51, var(--pops-bd-opacity));
    --pops-panel-forms-container-deepMenu-item-active-bg: #333333;
  }
  .pops[type-value="panel"] .pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon {
    fill: #f2f2f2;
  }

  /* switch的CSS */
  .pops-panel-switch {
    --panel-switch-core-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));
    --panel-switch-core-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));
    --panel-switch-circle-color: #dcdfe6;
    --panel-switch-circle-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
    --panel-switch-checked-circle-color: #409eff;
    --panel-switch-checked-core-bd-color: rgb(64, 158, 255, var(--pops-bd-opacity));
    --panel-switch-checked-core-bg-color: rgb(64, 158, 255, var(--pops-bg-opacity));
  }
  /* select的CSS */
  .pops-panel-select {
    --pops-panel-components-select-text-color: #f2f2f2;
    --pops-panel-components-select-bd-color: rgb(51, 51, 51, var(--pops-bd-opacity));
    --pops-panel-components-select-bg-color: #141414;
  }
  /* select-multiple的CSS*/
  .pops-panel-select-multiple {
    --el-fill-color-blank: #141414;
    --el-border-color: #4c4d4f;
    --el-text-color-placeholder: #a8abb2;
    --el-select-input-color: #a8abb2;
    --el-text-color-regular: #606266;
    --el-color-info: #909399;
    --el-color-info-light-8: #e9e9eb;
    --el-color-primary-light-9: #ecf5ff;
    --el-color-primary-light-8: #d9ecff;
    --el-color-primary: #007dfe;
    --el-color-white: #ffffff;
  }
  .pops-panel-select-multiple .el-tag {
    --el-color-info-light-9: #202121;
  }
  .pops-panel-select-multiple-disable {
    --el-border-color: rgb(51, 51, 51, var(--pops-bd-opacity));
  }
  .pops-panel-select-multiple-disable .el-tag.el-tag--info {
    --el-tag-bg-color: #2f2f2f;
  }
  /* select-multiple的CSS*/
  /* slider的CSS */
  .pops-slider {
    --pops-slider-border-color-light: #414243;
  }
  /* input的CSS */
  .pops-panel-input {
    --pops-panel-components-input-text-color: #f2f2f2;
    --pops-panel-components-input-bd-color: #4f5052;
    --pops-panel-components-input-bg-color: #141414;
    --pops-panel-components-input-hover-bd-color: #6f7175;
    --pops-panel-components-input-focus-bd-color: #409eff;
    --pops-panel-components-input-suffix-color: #a8abb2;
    --pops-panel-components-input-suffix-bg-color: var(--pops-dark-color);
  }
  /* textarea的CSS */
  .pops-panel-textarea {
    --pops-panel-components-textarea-text-color: #f2f2f2;
    --pops-panel-components-textarea-text-bg-color: #141414;
    --pops-panel-components-textarea-bd-color: #4f5052;
    --pops-panel-components-textarea-hover-bd-color: #6f7175;
    --pops-panel-components-textarea-focus-bd-color: #409eff;
  }
  .pops-panel-textarea-disable {
    --pops-panel-components-textarea-text-color: var(--pops-components-is-disabled-text-color);
    --pops-panel-components-textarea-text-bg-color: var(--pops-components-is-disabled-bg-color);
  }
  /* slider */
  .pops-slider {
    --pops-slider-text-color-placeholder: #8d9095;
  }
}
`,rightClickMenu:`.pops-rightClickMenu {
  --pops-right-context-color: #000000;
  --pops-right-context-bg-color: rgb(255, 255, 255, 0.733);
  --pops-right-context-backdrop-filter: blur(10px);
  --pops-right-context-z-index: 10000;
  --pops-right-context-bd-radius: 6px;
  --pops-right-context-menu-shadow-color: rgb(114, 114, 114, 0.251);
  --pops-right-context-menu-row-bd-radius: 6px;
  --pops-right-context-menu-row-visited-color: rgb(0, 0, 0, 0.067);
  --pops-right-context-menu-row-hover-color: rgb(0, 0, 0, 0.067);
}
.pops-rightClickMenu * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  scrollbar-width: thin;
}
.pops-rightClickMenu {
  position: fixed;
  z-index: var(--pops-right-context-z-index);
  text-align: center;
  border-radius: var(--pops-right-context-bd-radius);
  font-size: 16px;
  font-weight: 500;
  color: var(--pops-right-context-color);
  background: var(--pops-right-context-bg-color);
  box-shadow: 0 0.25rem 0.5rem 0.125rem var(--pops-right-context-menu-shadow-color);
  -webkit-backdrop-filter: var(--pops-right-context-backdrop-filter);
  backdrop-filter: var(--pops-right-context-backdrop-filter);
}
.pops-rightClickMenu[data-position="absolute"] {
  position: absolute;
}
/* scale动画 */
.pops-rightClickMenu-anim-scale {
  transition:
    opacity 150ms cubic-bezier(0.2, 0, 0.2, 1),
    transform 150ms cubic-bezier(0.2, 0, 0.2, 1);
  transform: scale(0.85);
}
.pops-rightClickMenu-anim-scale-open {
  transform: scale(1);
}
.pops-rightClickMenu-anim-scale-not-open {
  opacity: 0;
}
/* 展开动画 */
.pops-rightClickMenu-anim-grid {
  display: grid;
  transition: 0.3s;
  grid-template-rows: 0fr;
}
.pops-rightClickMenu-anim-show {
  grid-template-rows: 1fr;
}
.pops-rightClickMenu-is-visited {
  background: var(--pops-right-context-menu-row-visited-color);
}
i.pops-rightClickMenu-icon {
  height: 1em;
  width: 1em;
  line-height: normal;
  align-content: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: inherit;
  font-size: inherit;
  margin-right: 6px;
}
i.pops-rightClickMenu-icon[is-loading="true"] {
  animation: rotating 2s linear infinite;
}
.pops-rightClickMenu li:hover {
  background: var(--pops-right-context-menu-row-hover-color);
  cursor: pointer;
}
.pops-rightClickMenu ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
}
.pops-rightClickMenu ul li {
  padding: 5px 10px;
  margin: 5px 5px;
  border-radius: var(--pops-right-context-menu-row-bd-radius);
  display: flex;
  width: -moz-available;
  width: -webkit-fill-available;
  text-align: left;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (prefers-color-scheme: dark) {
  /*.pops-rightClickMenu {
		--pops-right-context-menu-shadow-color: #3c3c3c;
	}*/
}
@media (hover: hover) {
  .pops-rightClickMenu ul li:active {
    transform: scale(0.98);
  }
}
`,panelComponents_Select:`.pops {
  max-height: 300px;
}
.select-container {
  --el-font-size-base: 14px;
  --el-text-color-regular: #191b20;
  --el-color-primary: #007dfe;
  --el-fill-color-light: #f5f7fa;
  --el-disable-color: #a8abb2;
}
.select-item {
  cursor: pointer;
  font-size: var(--el-font-size-base);
  padding: 0 20px 0 20px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--el-text-color-regular);
  min-height: 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
}
.select-item[aria-disabled],
.select-item[disabled] {
  cursor: not-allowed;
  color: var(--el-disable-color);
  background: unset;
}
.select-item:hover {
  background-color: var(--el-fill-color-light);
}
.select-item.select-item-is-selected:has(.pops-panel-input input) {
  background-color: #e7e7e7;
}
.select-item.select-item-is-selected {
  color: var(--el-color-primary);
  font-weight: 700;
}
.select-item.select-item-is-selected:not(:has(.pops-panel-input))::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 12px;
  border-top: none;
  border-right: none;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--el-color-primary);
  mask: url("data:image/svg+xml;utf8,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='currentColor' d='M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: url("data:image/svg+xml;utf8,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='currentColor' d='M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat;
  -webkit-mask-size: 100% 100%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
}

.select-item .pops-panel-input {
  width: 100%;
  margin: 5px 0px;
}
.select-item .pops-panel-input:has(.pops-panel-input-valid-error) {
  margin-bottom: 0px;
}

.select-item .select-item-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

@media (prefers-color-scheme: dark) {
  .select-container {
    --el-text-color-regular: #f2f2f2;
    --el-disable-color: #8d9095;
    --el-fill-color-light: #262727;
  }
}
`,skeletonCSS:`.pops-skeleton-item {
  --el-skeleton-color: #f0f2f5;
  --el-skeleton-to-color: #e6e8eb;
  width: 100%;
  height: 18px;
  border-radius: 4px;
  background: var(--el-skeleton-color);
  display: inline-block;
}
.pops-skeleton-item[data-circle] {
  border-radius: 50%;
}
.pops-skeleton-item[data-img] {
  width: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px;
}
.pops-skeleton-item[data-img] svg {
  color: #dcdfe6;
  fill: currentcolor;
  width: 22%;
  height: 22%;
}
.pops-skeleton-item[data-animated] {
  background: linear-gradient(
    90deg,
    var(--el-skeleton-color) 25%,
    var(--el-skeleton-to-color) 37%,
    var(--el-skeleton-color) 63%
  );
  background-size: 400% 100%;
  animation: pops-el-skeleton-loading 1.4s ease infinite;
}
@keyframes pops-el-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
`},tt={$data:{},$flag:{isInit:!1},init(){if(!this.$flag.isInit){this.$flag.isInit=!0;let e=A.createElement(`style`,{innerHTML:M.anim});A.appendHead(e),this.$data=null,this.$data=A.getKeyFrames(e.sheet),k.setTimeout(()=>{A.remove(e)},50)}},hasAnim(e){return Object.prototype.hasOwnProperty.call(this.$data,e)},createSwitchElementWithAnimation(e,t,n){let r={duration:220,easing:`ease-in-out`,...n.animOptions??{}};return n.useAnimation??=!0,{async enter(){let i=async()=>{A.cssHide(e,!0),await n.enterToAddElementCallback()};if(n.useAnimation&&typeof document.startViewTransition==`function`){let e=document.startViewTransition(i);await e.ready,await t.animate([{transform:`translateX(100%)`},{transform:`translateX(0)`}],r).finished,await e.finished}else await i()},async exit(){let i=async()=>{A.cssShow(e),A.remove(t),typeof n.exitToRemoveElementCallback==`function`&&await n.exitToRemoveElementCallback()};if(n.useAnimation&&typeof document.startViewTransition==`function`){let n=document.startViewTransition(i);await n.ready,await Promise.all([t.animate([{transform:`translateX(0)`},{transform:`translateX(100%)`}],r).finished,e.animate([{transform:`translateX(-100%)`},{transform:`translateX(0)`}],r).finished]),await n.finished}else await i()}}}},N={alert:[],confirm:[],drawer:[],folder:[],iframe:[],loading:[],panel:[],prompt:[],rightClickMenu:[],tooltip:[]},nt={getPopsMaxZIndex(e=10){e=Number.isNaN(e)?10:e;let t=2*10**9,n=0,r=null;Object.keys(N).forEach(e=>{let t=N[e];for(let e=0;e<t.length;e++){let i=t[e],a=[i.$anim,i.$pops,i.$mask].filter(e=>e instanceof HTMLElement),o=k.getMaxZIndexNodeInfoFromPoint(a)[0];if(o){let e=o.zIndex;e>n&&(n=e,r=o.node||o.positionNode)}}}),n+=e;let i=n>=t;return i&&(n=t),{zIndex:n,animElement:r,isOverMaxZIndex:i}},sortElementListByProperty(e,t,n=!0){if(typeof n!=`boolean`)throw TypeError(`参数 sortByDesc 必须为boolean类型`);if(e==null||t==null)throw Error(`获取前面的值或后面的值的方法不能为空`);return function(r,i){let a=e(i),o=t(r);return n?o>a?-1:+(o<a):o<a?-1:+(o>a)}},isHide(e){let t=!1;if(A.containsClassName(e,v.hide)||A.containsClassName(e,v.hideImportant))t=!0;else{if(e instanceof HTMLElement){let n=e.style;t=n.display.includes(`none`)||n.visibility.includes(`hidden`)||n.opacity!==`0`}if(!t){let n=globalThis.getComputedStyle(e);t=n.display.includes(`none`)||n.visibility.includes(`hidden`)||n.opacity!==`0`}}return t},isNodeInPopsNode(e){return!!(e.closest(`.pops`)||e.matches(`.pops`))},isAnimNode(e){return!!(e?.localName?.toLowerCase()===`div`&&e.className&&e.className===`pops-anim`&&e.hasAttribute(`anim`))}},rt={async removeInstance(e,t,n=!1){let r=async e=>{await e.emitter.emit(`pops:before-destory`,e),A.offAll(e.$shadowRoot),A.remove(e?.$anim),A.remove(e?.$pops),A.remove(e?.$mask),A.remove(e?.$shadowContainer),await e.emitter.emit(`pops:destory`),await e.emitter.offAll()},i=[];for(let a of e)for(let e=0;e<a.length;e++){let o=a[e];if(n||typeof t==`string`&&o.guid===t){let t=o.$anim.getAttribute(`anim`);if(tt.hasAnim(t)){let e=t+`-reverse`;A.css(o.$anim,`width`,`100%`),A.css(o.$anim,`height`,`100%`),A.css(o.$anim,`animation-name`,e),tt.hasAnim(A.css(o.$anim,`animation-name`))?i.push(new Promise(e=>{A.on(o.$anim,A.getAnimationEndNameList(),async()=>{await r(o),e()},{capture:!0})})):i.push(r(o))}else i.push(r(o));a.splice(e,1),e--}}return await Promise.all(i),e},show(e,t,n,r,i,a){return new Promise(async o=>{let s=i.querySelector(`.pops[type-value]`),c=n.find(e=>e.guid===r);if(c){let n=()=>!nt.isHide(i),r=async()=>{if(t===`drawer`){let t=e;await k.sleep(t.openDelay??0),a&&A.css(a,`display`,``);let n=t.direction,r=t.size.toString();[`top`,`bottom`].includes(n)?s.style.setProperty(`height`,r):[`left`,`right`].includes(n)?s.style.setProperty(`width`,r):console.error(`未知direction：`,n)}else u.$anim.style.width=``,u.$anim.style.height=``,Reflect.set(u.$anim.style,`animation-name`,d);u.$anim.style.display=``,u.$mask&&(u.$mask.style.display=``)},l=()=>{c.emitter.emit(`pops:show`,u)},u=c,d=u.$anim.getAttribute(`anim`).replace(`-reverse`,``);if(c.emitter.emit(`pops:before-show`,u),n()&&tt.hasAnim(d)){let e=A.on(u.$anim,A.getAnimationEndNameList(),()=>{e.off(),l(),o()},{capture:!0});await r()}else await r(),l(),o()}else console.error(`show-error: 该实例未存储`),o()})},hide(e,t,n,r,i,a){return new Promise(async o=>{let s=i.querySelector(`.pops[type-value]`),c=n.find(e=>e.guid===r);if(c){let n=()=>!nt.isHide(i),r=async()=>{if(t===`drawer`){let t=e;await k.sleep(t.closeDelay??0),a&&A.css(a,`display`,`none`);let n=t.direction;[`top`,`bottom`].includes(n)?s.style.setProperty(`height`,`0`):[`left`,`right`].includes(n)?s.style.setProperty(`width`,`0`):console.error(`未知direction: `,n)}else u.$anim.style.width=`100%`,u.$anim.style.height=`100%`,Reflect.set(u.$anim.style,`animation-name`,d)},l=()=>{u.$anim.style.display=`none`,u.$mask&&(u.$mask.style.display=`none`),c.emitter.emit(`pops:hide`,u)},u=c,d=u.$anim.getAttribute(`anim`).replace(`-reverse`,``)+`-reverse`;if(c.emitter.emit(`pops:before-hide`,u),!n()&&tt.hasAnim(d)){let e=A.on(u.$anim,A.getAnimationEndNameList(),()=>{e.off(),l(),o()},{capture:!0,once:!0});await r()}else await r(),l(),o()}else console.error(`hide-error: 该实例未存储`),o()})},async close(e,t,n,r,i){N.rightClickMenu.forEach(e=>{let t=e.config;if(t.$target instanceof HTMLElement){let n=t.$target.getRootNode();n instanceof HTMLElement&&n.parentElement==null&&e.emitter.emit(`pops:before-destory`,e)}}),N.tooltip.forEach(e=>{let t=e.config;if(t.$target instanceof HTMLElement){let n=t.$target.getRootNode();n instanceof HTMLElement&&n.parentElement==null&&e.emitter.emit(`pops:before-destory`,e)}}),await new Promise(async a=>{let o=i.querySelector(`.pops[type-value]`),s=e;t===`drawer`?(await k.sleep(s.closeDelay??0),(()=>{let e=A.on(o,A.getTransitionEndNameList(),async t=>{t.propertyName===`transform`&&(e.off(),await rt.removeInstance([n],r),a())},{once:!0});globalThis.getComputedStyle(o).transform===`none`?[`top`].includes(s.direction)?o.style.setProperty(`transform`,`translateY(-100%)`):[`bottom`].includes(s.direction)?o.style.setProperty(`transform`,`translateY(100%)`):[`left`].includes(s.direction)?o.style.setProperty(`transform`,`translateX(-100%)`):[`right`].includes(s.direction)?o.style.setProperty(`transform`,`translateX(100%)`):console.error(`未知direction: `,s.direction):e.emit({propertyName:`transform`})})()):(await rt.removeInstance([n],r),a())})},drag(e,t){t=Object.assign({limit:!0,extraDistance:3,container:S.globalThis,emitClick:!0},t);let n=!1,r=0,i=0,a=new(k.AnyTouch())(t.dragElement,{preventDefault(e){return typeof t.preventEvent!=`function`||t.preventEvent(e)}});A.css(t.dragElement,{cursor:`move`});function o(e){let t=e.style.transitionDuration;return globalThis.getComputedStyle(e).transitionDuration!==`0s`&&(e.style.transitionDuration=`0s`),()=>{e.style.transitionDuration=t}}function s(e){return e??=globalThis,{width:A.width(e),height:A.height(e)}}function c(e){if(e??=globalThis,k.isWin(e))return{left:0,top:0};{let t=e.getBoundingClientRect();return{left:t.left,top:t.top}}}let l=A.getTransform(e),u=null;a.on(`pan`,function(a){if(!n){n=!0;let s=t.dragElement.getBoundingClientRect();r=a.x-s.left,i=a.y-s.top,l=A.getTransform(e),u=o(e),typeof t.startCallBack==`function`&&t.startCallBack(e,r,i)}let d=a.x-r+l.transformLeft,f=a.y-i+l.transformTop;if(a.phase===`move`){if(t.limit){let n=s(t.container).width-A.width(e)+l.transformLeft,{left:r,top:i}=c(t.container),a=s(t.container).height-A.height(e)+l.transformTop;d>n&&(d=n),f>a&&(f=a),d-t.extraDistance*2<r+l.transformLeft?(d=r+l.transformLeft,d+=t.extraDistance):d-=t.extraDistance,f-t.extraDistance*2<i+l.transformTop?(f=i+l.transformTop,f+=t.extraDistance):f-=t.extraDistance}typeof t.moveCallBack==`function`&&t.moveCallBack(e,d,f),A.css(e,{left:d+`px`,top:f+`px`})}a.phase===`end`&&(n=!1,typeof u==`function`&&(u(),u=null),typeof t.endCallBack==`function`&&t.endCallBack(e,d,f))}),t.emitClick&&a.on([`tap`],function(e){e.changedPoints.forEach(e=>{A.emit(e.target,`click`,void 0,!0)})})}},P={handlerShadow(e){let t=A.createElement(`div`,{className:`pops-shadow-container`}),n;return n=e.useShadowRoot?t.attachShadow({mode:`open`}):t,e.stopKeyDownEventPropagation&&A.on(n,`keydown`,[`input[type="text"]`,`input[type="password"]`,`input[type="number"]`,`input[type="email"]`,`input[type="url"]`,`input[type="search"]`,`input:not([type])`,`textarea`],e=>{e.stopImmediatePropagation(),e.stopPropagation()},{capture:!0,overrideTarget:!1}),{$shadowContainer:t,$shadowRoot:n}},handleInit(e,t){if(tt.init(),arguments.length&&e!=null&&t!=null){if(typeof t==`string`){if(t.trim()===``)return;t=[{css:t}]}else t=t.map(e=>typeof e==`string`?{css:e}:e);for(let n of t){let t=A.createElement(`style`,{},{"data-type":`PopsHandler.handleInit`});t.textContent=n.css,typeof n.name==`string`&&t.setAttribute(`data-name`,n.name),e.appendChild(t)}}},handleMask(e={}){let t={maskElement:A.parseTextToDOM(e.maskHTML)},n=!1,r=n=>{A.preventEvent(n);let r=N[e.type],i=()=>{if(e.config.mask.clickEvent.toClose)return rt.close(e.config,e.type,r,e.guid,e.animElement);if(e.config.mask.clickEvent.toHide)return rt.hide(e.config,e.type,r,e.guid,e.animElement,t.maskElement)};return typeof e.config.mask.clickCallBack==`function`?e.config.mask.clickCallBack(i,e.config):i(),!1};return(e.config.mask.clickEvent.toClose||e.config.mask.clickEvent.toHide)&&(A.on(e.animElement,`pointerup`,e=>{let t=e.composedPath()[0];n=nt.isAnimNode(t)}),A.on(e.animElement,`click`,e=>{let t=e.composedPath()[0];if(n&&nt.isAnimNode(t))return r(e)}),A.on(t.maskElement,`click`,e=>{n=!0,r(e)})),t},handleQueryElement(e,t){return{$pops:e.querySelector(`.pops[type-value`),$btnOk:e.querySelector(`.pops-${t}-btn-ok`),$btnCancel:e.querySelector(`.pops-${t}-btn-cancel`),$btnOther:e.querySelector(`.pops-${t}-btn-other`),$title:e.querySelector(`.pops-${t}-title`),$input:e.querySelector(`.pops-${t}-content textarea[pops]`)?e.querySelector(`.pops-${t}-content textarea[pops]`):e.querySelector(`.pops-${t}-content input[pops]`),$headerControls:e.querySelector(`.pops-header-controls`),$iframe:e.querySelector(`iframe[pops]`),$loading:e.querySelector(`.pops-loading`),$content:e.querySelector(`.pops-${t}-content`),$panelRightSectionWrapper:e.querySelector(`.pops-${t}-section-wrapper`),$panelLeftAside:e.querySelector(`.pops-${t}-content aside.pops-${t}-aside`),$panelContentSectionContainer:e.querySelector(`.pops-${t}-content section.pops-${t}-container`),$panelBottomWrapper:e.querySelector(`.pops-${t}-bottom-wrapper`),$panelBottomContainer:e.querySelector(`.pops-${t}-bottom-container`),$panelBottomLeftContainer:e.querySelector(`.pops-${t}-bottom-left-container`),$panelBottomRightContainer:e.querySelector(`.pops-${t}-bottom-right-container`),$contentLoading:e.querySelector(`.pops-${t}-content-global-loading`),$headerBtnMin:e.querySelector(`.pops-header-control[data-type='min']`),$headerBtnMax:e.querySelector(`.pops-header-control[data-type='max']`),$headerBtnMise:e.querySelector(`.pops-header-control[data-type='mise']`),$headerBtnClose:e.querySelector(`.pops-header-control[data-type='close']`),$folderList:e.querySelector(`.pops-folder-list`),$folderHeaderNav:e.querySelector(`.pops-folder-list .pops-folder-list-table__header-div`),$folderHeaderRow:e.querySelector(`.pops-folder-list .pops-folder-list-table__header-div .pops-folder-list-table__header-row`),$folderTbody:e.querySelector(`.pops-folder-list .pops-folder-list-table__body-div tbody`),$folderHeaderBreadcrumbPrimary:e.querySelector(`.pops-folder-list .pops-folder-file-list-breadcrumb-primary`),$folderSortFileName:e.querySelector(`.pops-folder-list-table__sort[data-sort="fileName"]`),$folderSortLatestTime:e.querySelector(`.pops-folder-list-table__sort[data-sort="latestTime"]`),$folderSortFileSize:e.querySelector(`.pops-folder-list-table__sort[data-sort="fileSize"]`)}},handleEventConfig(e,t,n,r,i,a,o,s,c){return{$shadowContainer:n,$shadowRoot:r,$el:a,$anim:a,$pops:o,$mask:c,mode:i,guid:t,emitter:s,close(){return rt.close(e,i,N[i],t,a)},hide(){return rt.hide(e,i,N[i],t,a,c)},show(n){return n&&n.appendChild(N[i][0].$shadowRoot),rt.show(e,i,N[i],t,a,c)}}},handleLoadingEventConfig(e,t,n,r,i,a,o){return{$el:r,$anim:r,$pops:i,$mask:o,mode:n,guid:t,emitter:a,close(){return rt.close(e,n,N[n],t,r)},hide(){return rt.hide(e,n,N[n],t,r,o)},show(){return rt.show(e,n,N[n],t,r,o)}}},handleResultConfig(e){let t=Object.assign({},e);return k.delete(t,`type`),k.delete(t,`function`),t},handleClickEvent(e,t,n,r){if(typeof r==`function`)return A.on(t,`click`,t=>{r(Object.assign(n,{type:e}),t)},{capture:!0})},handleKeyboardEvent(e,t=[],n){return A.on(S.globalThis,`keydown`,function(r){let i=r.code||r.key,a=r.charCode||r.keyCode||r.which;t.includes(`ctrl`)&&!r.ctrlKey||t.includes(`alt`)&&!r.altKey||t.includes(`meta`)&&!r.metaKey||t.includes(`shift`)&&!r.shiftKey||(typeof e==`string`&&e===i?n&&n(r):typeof e==`number`&&e===a&&n&&n(r))},{capture:!0})},handlePromptClickEvent(e,t,n,r,i){A.on(n,`click`,n=>{let a={type:e,text:t.value};i(Object.assign(r,a),n)},{capture:!0})},getTargerOrFunctionValue(e){return typeof e==`function`?e():e},handleOnly(e,t){if(t.only){if(e===`loading`||e===`tooltip`||e===`rightClickMenu`){let t=N[e];t&&rt.removeInstance([t],``,!0)}else rt.removeInstance([N.alert,N.confirm,N.drawer,N.folder,N.iframe,N.panel,N.prompt],``,!0)}return e!==`rightClickMenu`&&(t=this.handleZIndex(t)),t},handleZIndex(e){let t=e.zIndex;return e.zIndex=()=>{let e=100;e+=P.getTargerOrFunctionValue(t)??0;let n=e,r=k.getMaxZIndexNodeInfoFromPoint(e)[0]?.zIndex??0;return n=Math.max(n,r),n===e?n:n+e},e},handlePush(e,t){N[e].push(t)}},it=()=>({title:{text:`默认标题`,position:`left`,html:!1,style:``},content:{text:`默认内容`,html:!1,style:``},btn:{position:`flex-end`,ok:{size:void 0,enable:!0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:`确定`,type:`primary`,callback:function(e){e.close()}},close:{enable:!0,callback:function(e){e.close()}}},useShadowRoot:!0,class:``,only:!1,width:window.innerWidth<550?`88vw`:`350px`,height:window.innerHeight<450?`70vh`:`200px`,position:`center`,animation:`pops-anim-fadein-zoom`,zIndex:1e4,mask:{enable:!1,clickEvent:{toClose:!1,toHide:!1},clickCallBack:null},drag:!1,dragLimit:!0,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:!1,style:null,lightStyle:null,darkStyle:null,stopKeyDownEventPropagation:!0,emitter:null}),at={init(e){let t=k.getRandomGUID(),n=`alert`,r=it();r=k.assign(r,h.getGlobalConfig()),r=k.assign(r,e),r=P.handleOnly(n,r);let i=r.emitter??new g(n),{$shadowContainer:a,$shadowRoot:o}=P.handlerShadow(r);P.handleInit(o,[{name:`index`,css:M.index},{name:`ninePalaceGridPosition`,css:M.ninePalaceGridPosition},{name:`scrollbar`,css:M.scrollbar},{name:`button`,css:M.button},{name:`anim`,css:M.anim},{name:`common`,css:M.common},{name:`skeleton`,css:M.skeletonCSS},{name:`alertCSS`,css:M.alertCSS}]);let s=P.getTargerOrFunctionValue(r.zIndex),c=j.createMask(t,s),l=j.createHeader(n,r),u=j.createBottom(n,r),{headerStyle:d,headerPStyle:f}=j.createHeaderStyle(n,r),{contentStyle:p,contentPStyle:m}=j.createContentStyle(n,r),_=j.createAnim(t,n,r,`
			<div class="pops-title pops-${n}-title pops-user-select-none" style="text-align: ${r.title.position};${d}">${r.title.html?r.title.text:`<p pops class="pops-${n}-title-text" style="${f}">${r.title.text}</p>`}${l}</div>
			<div class="pops-content pops-${n}-content" style="${p}">${r.content.html?r.content.text:`<p pops class="pops-${n}-content-text" style="${m}">${r.content.text}</p>`}</div>${u}`,u,s),v=j.parseElement(_),{$pops:y,$headerBtnClose:b,$btnOk:x,$title:S}=P.handleQueryElement(v,n),C,w=[v];r.mask.enable&&(C=P.handleMask({type:n,guid:t,config:r,animElement:v,maskHTML:c}).maskElement,w.push(C));let T=P.handleEventConfig(r,t,a,o,n,v,y,i,C),ee=P.handleResultConfig(T);return P.handleClickEvent(`close`,b,T,r.btn.close?.callback),P.handleClickEvent(`ok`,x,T,r.btn.ok?.callback),A.append(o,w),i.emit(`pops:before-append-to-page`,o,a),A.appendBody(a),C!=null&&v.after(C),P.handlePush(n,{guid:t,$anim:v,$pops:y,$mask:C,$shadowContainer:a,$shadowRoot:o,config:r,emitter:i}),r.drag&&rt.drag(y,{dragElement:S,limit:r.dragLimit,extraDistance:r.dragExtraDistance,moveCallBack:r.dragMoveCallBack,endCallBack:r.dragEndCallBack}),ee}},ot=()=>({title:{text:`默认标题`,position:`left`,html:!1,style:``},content:{text:`默认内容`,html:!1,style:``},btn:{merge:!1,mergeReverse:!1,reverse:!1,position:`flex-end`,ok:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:`确定`,type:`primary`,callback(e){e.close()}},cancel:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:`关闭`,type:`default`,callback(e){e.close()}},other:{enable:!1,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:`其它按钮`,type:`default`,callback(e){e.close()}},close:{enable:!0,callback(e){e.close()}}},useShadowRoot:!0,class:``,only:!1,width:window.innerWidth<550?`88vw`:`350px`,height:window.innerHeight<450?`70vh`:`200px`,position:`center`,animation:`pops-anim-fadein-zoom`,zIndex:1e4,mask:{enable:!1,clickEvent:{toClose:!1,toHide:!1},clickCallBack:null},drag:!1,dragLimit:!0,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:!1,style:null,lightStyle:null,darkStyle:null,stopKeyDownEventPropagation:!0,emitter:null}),st={init(e){let t=k.getRandomGUID(),n=`confirm`,r=ot();r=k.assign(r,h.getGlobalConfig()),r=k.assign(r,e),r=P.handleOnly(n,r);let i=r.emitter??new g(n),{$shadowContainer:a,$shadowRoot:o}=P.handlerShadow(r);P.handleInit(o,[{name:`index`,css:M.index},{name:`ninePalaceGridPosition`,css:M.ninePalaceGridPosition},{name:`scrollbar`,css:M.scrollbar},{name:`button`,css:M.button},{name:`anim`,css:M.anim},{name:`common`,css:M.common},{name:`skeleton`,css:M.skeletonCSS},{name:`confirmCSS`,css:M.confirmCSS}]);let s=P.getTargerOrFunctionValue(r.zIndex),c=j.createMask(t,s),l=j.createHeader(n,r),u=j.createBottom(n,r),{headerStyle:d,headerPStyle:f}=j.createHeaderStyle(n,r),{contentStyle:p,contentPStyle:m}=j.createContentStyle(n,r),_=j.createAnim(t,n,r,`
            <div class="pops-title pops-${n}-title pops-user-select-none" style="text-align: ${r.title.position};${d}">${r.title.html?r.title.text:`<p pops class="pops-${n}-title-text" style="${f}">${r.title.text}</p>`}${l}</div>
                        <div class="pops-content pops-${n}-content" style="${p}">${r.content.html?r.content.text:`<p pops class="pops-${n}-content-text" style="${m}">${r.content.text}</p>`}</div>${u}`,u,s),v=j.parseElement(_),{$pops:y,$title:b,$headerBtnClose:x,$btnOk:S,$btnCancel:C,$btnOther:w}=P.handleQueryElement(v,n),T,ee=[v];r.mask.enable&&(T=P.handleMask({type:n,guid:t,config:r,animElement:v,maskHTML:c}).maskElement,ee.push(T));let E=P.handleEventConfig(r,t,a,o,n,v,y,i,T),D=P.handleResultConfig(E);return P.handleClickEvent(`close`,x,E,r.btn.close.callback),P.handleClickEvent(`ok`,S,E,r.btn.ok.callback),P.handleClickEvent(`cancel`,C,E,r.btn.cancel.callback),P.handleClickEvent(`other`,w,E,r.btn.other.callback),A.append(o,ee),i.emit(`pops:before-append-to-page`,o,a),A.appendBody(a),T!=null&&v.after(T),P.handlePush(n,{guid:t,$anim:v,$pops:y,$mask:T,$shadowContainer:a,$shadowRoot:o,config:r,emitter:i}),r.drag&&rt.drag(y,{dragElement:b,limit:r.dragLimit,extraDistance:r.dragExtraDistance,moveCallBack:r.dragMoveCallBack,endCallBack:r.dragEndCallBack}),D}},ct=()=>({title:{enable:!0,position:`center`,text:`默认标题`,html:!1,style:``},content:{text:`默认内容`,html:!1,style:``},btn:{merge:!1,mergeReverse:!1,reverse:!1,position:`flex-end`,ok:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:`确定`,type:`primary`,callback(e){e.close()}},cancel:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:`关闭`,type:`default`,callback(e){e.close()}},other:{enable:!1,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:`其它按钮`,type:`default`,callback(e){e.close()}},close:{enable:!0,callback(e){e.close()}}},mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1},clickCallBack:null},useShadowRoot:!0,class:``,zIndex:1e4,only:!1,direction:`right`,size:`30%`,lockScroll:!1,closeOnPressEscape:!0,openDelay:0,closeDelay:0,borderRadius:0,style:null,lightStyle:null,darkStyle:null,forbiddenScroll:!1,stopKeyDownEventPropagation:!0,emitter:null}),lt={init(e){let t=k.getRandomGUID(),n=`drawer`,r=ct();r=k.assign(r,h.getGlobalConfig()),r=k.assign(r,e),r=P.handleOnly(n,r);let i=r.emitter??new g(n),{$shadowContainer:a,$shadowRoot:o}=P.handlerShadow(r);P.handleInit(o,[{name:`index`,css:M.index},{name:`ninePalaceGridPosition`,css:M.ninePalaceGridPosition},{name:`scrollbar`,css:M.scrollbar},{name:`button`,css:M.button},{name:`anim`,css:M.anim},{name:`common`,css:M.common},{name:`skeleton`,css:M.skeletonCSS},{name:`drawerCSS`,css:M.drawerCSS}]);let s=P.getTargerOrFunctionValue(r.zIndex),c=j.createMask(t,s),l=j.createHeader(n,r),u=j.createBottom(n,r),{headerStyle:d,headerPStyle:f}=j.createHeaderStyle(n,r),{contentStyle:p,contentPStyle:m}=j.createContentStyle(n,r),_=j.createAnim(t,n,r,`
            ${r.title.enable?`<div class="pops-title pops-${n}-title pops-user-select-none" style="${d}">${r.title.html?r.title.text:`<p pops class="pops-${n}-title-text" style="width: 100%;text-align: ${r.title.position};${f}">${r.title.text}</p>`}${l}</div>`:``}
            <div class="pops-content pops-${n}-content" style="${p}">${r.content.html?r.content.text:`<p pops class="pops-${n}-content-text" style="${m}">${r.content.text}</p>`}</div>${u}`,u,s),v=j.parseElement(_),{$pops:y,$headerBtnClose:b,$btnCancel:x,$btnOk:S,$btnOther:C}=P.handleQueryElement(v,n),w=y,T=b,ee=x,E=S,D=C,O,te=[v];r.mask.enable&&(O=P.handleMask({type:n,guid:t,config:r,animElement:v,maskHTML:c}).maskElement,te.push(O));let ne=P.handleEventConfig(r,t,a,o,n,v,w,i,O),re=P.handleResultConfig(ne);if(w.setAttribute(`direction`,r.direction),r.direction===`top`?(w.style.setProperty(`height`,`0`),w.style.setProperty(`border-radius`,`0px 0px ${r.borderRadius}px ${r.borderRadius}px`)):r.direction===`bottom`?(w.style.setProperty(`height`,`0`),w.style.setProperty(`border-radius`,`${r.borderRadius}px ${r.borderRadius}px 0px 0px`)):r.direction===`left`?(w.style.setProperty(`width`,`0`),w.style.setProperty(`border-radius`,`0px ${r.borderRadius}px 0px ${r.borderRadius}px`)):r.direction===`right`&&(w.style.setProperty(`width`,`0`),w.style.setProperty(`border-radius`,`${r.borderRadius}px 0px ${r.borderRadius}px 0px`)),r.closeOnPressEscape){let e=P.handleKeyboardEvent(`Escape`,[],function(){ne.close()});i.on(`pops:destory`,()=>{e.off()})}return[{type:`close`,ele:T},{type:`cancel`,ele:ee},{type:`ok`,ele:E},{type:`other`,ele:D}].forEach(e=>{P.handleClickEvent(e.type,e.ele,ne,(t,n)=>{let i=r.btn[e.type].callback;typeof i==`function`&&i(t,n)})}),te.forEach(e=>{e.style.setProperty(`display`,`none`),[`top`].includes(r.direction)?(w.style.setProperty(`height`,r.size.toString()),w.style.setProperty(`transform`,`translateY(-100%)`)):[`bottom`].includes(r.direction)?(w.style.setProperty(`height`,r.size.toString()),w.style.setProperty(`transform`,`translateY(100%)`)):[`left`].includes(r.direction)?(w.style.setProperty(`width`,r.size.toString()),w.style.setProperty(`transform`,`translateX(-100%)`)):[`right`].includes(r.direction)&&(w.style.setProperty(`width`,r.size.toString()),w.style.setProperty(`transform`,`translateX(100%)`)),e.style.setProperty(`display`,``)}),A.append(o,te),i.emit(`pops:before-append-to-page`,o,a),A.appendBody(a),k.setTimeout(()=>{k.setTimeout(()=>{w.style.setProperty(`transform`,``)},r.openDelay)},50),O!=null&&v.after(O),P.handlePush(n,{guid:t,$anim:v,$pops:w,$mask:O,$shadowContainer:a,$shadowRoot:o,config:r,emitter:i}),re}},ut=()=>({$parent:document.body||document.documentElement,content:{text:`加载中...`,icon:`loading`,style:``},useShadowRoot:!0,class:``,only:!1,zIndex:1e4,mask:{enable:!1,clickEvent:{toClose:!1,toHide:!1},clickCallBack:null},animation:`pops-anim-fadein-zoom`,forbiddenScroll:!1,isAbsolute:!1,style:null,lightStyle:null,darkStyle:null,addIndexCSS:!0,stopKeyDownEventPropagation:!0,emitter:null}),dt={init(e){let t=k.getRandomGUID(),n=`loading`,r=ut();r=k.assign(r,h.getGlobalConfig()),r=k.assign(r,e),r=P.handleOnly(n,r);let i=r.emitter??new g(n),a=P.getTargerOrFunctionValue(r.zIndex),o=j.createMask(t,a),{contentPStyle:s}=j.createContentStyle(`loading`,r),c=j.createAnim(t,n,r,`
            <div class="pops-content pops-${n}-content">${r.addIndexCSS?`
                <style data-model-name="index">${M.index}</style>
                <style data-model-name="anim">${M.anim}</style>
                <style data-model-name="common">${M.common}</style>
                <style data-model-name="skeleton">${M.skeletonCSS}</style>
                `:``}
                <style data-model-name="loadingCSS">
                    ${M.loadingCSS}
                </style>
            ${r.style==null?``:`<style>${r.style}</style>`}
            	<p pops class="pops-${n}-content-text" style="${s}">${r.content.text}</p>
            </div>`,``,a),l=j.parseElement(c),{$pops:u}=P.handleQueryElement(l,n),d,f=[l];r.mask.enable&&(d=P.handleMask({type:n,guid:t,config:r,animElement:l,maskHTML:o}).maskElement,f.push(d));let p=P.handleLoadingEventConfig(r,t,n,l,u,i,d);return A.append(r.$parent,f),d!=null&&l.after(d),P.handlePush(n,{$shadowContainer:u,$shadowRoot:u,guid:t,$anim:l,$pops:u,$mask:d,emitter:i,config:r}),r.isAbsolute&&(A.css(l,`position`,`absolute !important`),d&&A.css(d,`position`,`absolute !important`)),P.handleResultConfig(p)}},ft=()=>({title:{text:`pops.Folder`,position:`center`,html:!1,style:``},sort:{name:`latestTime`,isDesc:!1,callback(){}},folder:[{fileName:`测试文件夹`,fileSize:0,fileType:``,createTime:0,latestTime:0,isFolder:!0,index:0,clickEvent(){return[{fileName:`测试文件夹2222`,fileSize:0,fileType:``,createTime:0,latestTime:0,isFolder:!0,index:0,clickEvent(){return[{fileName:`内部-测试文件.zip`,fileSize:1025e3,fileType:`zip`,createTime:1702038410440,latestTime:1702039602126,isFolder:!1,index:1,clickEvent(e,t){return console.log(`下载文件：`,t),{autoDownload:!0,url:`https://update.greasyfork.org/scripts/456485/pops.js`,mode:`aBlank`}}}]}}]}},{fileName:`测试文件.apk`,fileSize:30125682,fileType:`apk`,createTime:1702036410440,latestTime:1702039410440,isFolder:!1,index:1,clickEvent(){return console.log(`下载文件：`,this.fileName),{autoDownload:!0,url:`https://update.greasyfork.org/scripts/456485/pops.js`,mode:`openBlank`}}}],btn:{merge:!1,mergeReverse:!1,reverse:!1,position:`flex-end`,ok:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:`确定`,type:`primary`,callback(e){e.close()}},cancel:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:`关闭`,type:`default`,callback(e){e.close()}},other:{enable:!1,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:`其它按钮`,type:`default`,callback(e){e.close()}},close:{enable:!0,callback(e){e.close()}}},useShadowRoot:!0,class:``,only:!1,width:window.innerWidth<550?`88vw`:`500px`,height:window.innerHeight<450?`70vh`:`400px`,position:`center`,animation:`pops-anim-fadein-zoom`,zIndex:1e4,mask:{enable:!1,clickEvent:{toClose:!1,toHide:!1},clickCallBack:null},drag:!1,dragLimit:!0,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:!1,style:null,lightStyle:null,darkStyle:null,stopKeyDownEventPropagation:!0,emitter:null}),F={folder:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUxpcf++Hv/ZU//OPv/DL/+9Gv/BI/+4Bf+4Ef/XcP/LOP/TSf/RRP/WTv/JM/+3Ef+9Ff/bhf+5BP/DJf+yDv/imv/kqv/bXP/w0v/fd//calQXUgwAAAAKdFJOUwB///8d3L9enl8sr20gAAACN0lEQVRYw+2Y65abIBRGE1EzVbyNSW18/wctHA6XYw4q9Ee7Vt2AgOHbcVyTOMztdnFxcXFMWf7gKHN190VRKDpFC0iNqB5ZvqpXzJRxHoF7hrAa9/hK9j2oYIA2QA/UqXeyNg5QDBrshhHbUH8xxO+uT7sOJ/tU5a4wh0eK8KmKHTxd28Bfo16pqphep5l6I+R/p8xr668kVghVceH8M5EZYnGhnBKRceGqmaZXPPw2xbO+1xU+8axwe8NfzkIV7xVZdF0AVhi+rWdxIfgmwloE6CkrDCPwJbYUeFgK61icxFcNKyxIxE+WgnllQ0y4+HffzZ8WZtJlCDtz+CzqaaFaVGiWBNEOZZ15zihsT2CFnXk4QStsLohTU3FC+Af8I8JWV1fa1jy8u+hnOUy2vnd5SkeGrJBfHZwDbxe87pfxQvejmMZZYxxdYSoyVyixSvtXFLJ7hWq5xCRNSTozczzHCj8T54kI5d8QCtvZAodDIa7DgRkJaII2hBfaJC7EOE7D076XuIoVBu8oN3kpBLVt4YXBVaUSFSbS5Akb00znSoPn9KCJCN0am7SnGhganC4kKhR2MV0vvEn4M7bFhM3GIZqtgfiPr9BdSAYnrnCX3rQeB/2xsKcHouiBBhpO+phQL9CdjmKqsRkXpkMz57dmfTY1v3k8is26zvN2A6yIbKVqm/tMjFBMp5jpxrWKbsB1dJw/AsC3Lt/YEaK7x1t5r7aLj3ned/fRj1TK3H9wXFxc/F/8BgM0jBZ4nc19AAAAAElFTkSuQmCC`,zip:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUxpcYHaOWDM+pryU4TbPXLU/XHT/X3Y/nrZpIffP/+gI4La/+9QTvhycXjQL4fbQvBUUoXaQHrSMf+cJPl2dfBXVf+KMDu99IveRv+ZJf+NLv+PLIncRPdvbV7L+VnJ+P/u5HDS/P+DD1PG93fV/U3D9kTB9WfP+2vR/GLN+nvSM86bL33UNf/69f/+/XzTNP+vVf/iyf/06sOCRsGhYP2Jh/t8e4TVPX3QNat7jnzCMfxfXXrUMP/UqJPoTX/cM/aDLOVjKP/jw/9yC/98HP+GLP/Ec2C63f+iQ4TjNvOiasmpZLuTpfaQgfjEu4HGOPKGeHDC4s2YXU+02/Ozn/B0J+1oYHvSNGnM9P/r291KSNGeZIHGObeOn5zzVM6PHkS978mNUt+EO/GadPOgbZzyVJvyVNG6g66AksCer4LGOc7Mp/eWh/SZVu6adP6VKOSF/TkAAAAKdFJOUwDf39+Af5/9MKAONWYwAAADB0lEQVRYw+3Y+U/TYBjAcUDYIahlA3bCimM3Y64MERWdeExFOhDoxkTnDuTm///R9+jx9MjbtcT4S78sIVnCh+c9mjDGxry8vLz+TwGffxp2/Ql0vYJbJuXzE76AvTc1rc9//gx0vqxg+XwON+XY8+8+BO22NayQKxQKSzZiwMj5D/TgQZtORjASe9U+QKHQfplAilEuhfIxQT/g6P4bwEZbGS1FS08wQR1GzpOCYfSFX7XGEtDSJPaEQCPH2cagwmEwpdfSmQwbXIEaOlAMhsNkRvQ9jEANy9CYoA7Dt6PdqIVBtUY6rdOy2SwbVLEcvR5G8DCjWkSzA3VPAbkcJlCHZbORCBPUY+h+pKzArKZF7MAcvLf4PDUwRsDfikU1O9DwFKDzPKzFYjGMkW8yGIExQbpO9SlAB0BANQxGDDFBdbS0ctdMYMQReHn5Te0n6aIPwf7WBWoLdsEEN57PoR6RFnGSVIdgfV6J47gZHPdqVBBzG6IobutCb+w5B+dkcE5Ys0iQZJBzPOENAsvG1oQ910u+EcplvroDqvLlsrDveEJlyXvox8Xbz6BbEf2KfdcTIlA4On4KOj4SNJBzAQpmUHAxobrkE4E3gyf7YECHE1qAPAWd7+EiAXleHMI/RYYiz5/c41AQaO4+YNXKq7oHpe2dqqmd7XnXhyJJg8Hd8CtoeDcYSDPuwflOp/NOF3qjwzm42Oc/SN/ler3eer8O6q+b6jHBszfRaDSZTD7BzaI2m6UEqPTyxWqrUiwWQ6HQY9zrt1+Y4B8ZTDLASoV4o4G/EJiMat7s5un9QDKhDBLSPGGl4mTJeA+T8pLphFeleCIeTyTwK04mJJvofg9PS3GQMqGjPdSfsjVYdA82jSA6lJa7CWdNEy6QCVedLPnMYg8XQHTJFecTwottAJ3dwwcWSzaBrRY8lHEmGJQvtjbhlQWomzDI/vAIn5TRlmzzkXnSvIcfQWZw0u4D86Rhyc3uB1CXgOCUbT206uA4PJRm9z2oKz/LFBwPjvAvAi8vL69/0l8fxm2XCv5p+gAAAABJRU5ErkJggg==`,mp4:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcZKU/5eZ/4SG/5CS/5eb/6Sm/4WG/5uc/6eq/4uM/4iJ/6Ci/5ye/6eo/6Ol/46P/5mb/5eY/5GS//39/5SV//X1/6Ol/+3u/+Li/3Z498/Q/7u8/zCK/WcAAAAKdFJOUwB7Pf+fHN2gn59fp7PNAAACSElEQVRYw+3Ya3OjIBQG4FqamnDzTkT9/79zOQdUzG0PJjP7YX2DeAR5EtKZTu3X15EjR46Q851dnuY7nTtd9Kv8nlK9X60/Kl60/qh4wjUFNjx8XSznIlHMClgICadC+2PWYShFvFwpSRAvBSl0MYDyVpB7xfOyLXmVrl2h99cQPw49VTzLV7lGNVF8DW5CExNAeSaCSsHdyi9SUPi2Ds2h/KY4K+epbZANpYoKmRHBGy6qbt7qnAzKaZzU86SDtje91Z8Ddd+2renHIh6sEsFKVS64stKmhRg7rRi2yrM0MEoAW2Osrh4kFaxnEPd9/SiI+94N1jW0qu5icN13Xfl7iCBqPlsQ9y3nObyJCNYr2G9Bt28VzRPBroYWQGNMiy+Dlel116WBP24BrOlcGgC9NaNWdjjV4T0/NHAJgnF6O/Fo/l2wt6Nm4i2w6OOMExtYmQ42Tdd00BxoV85O9TCI0k26hDckgc2acgXtKIeB8WabvaCFL89xZfMuKG1vgZsa2O2dRwbdUng1vBut48bK7dZ9ezgOrC/diQSWUdg0jrhb4a3bJIOCVYrDD6N8HCLol0PP2QC7fexxTgN5yctF4Mxz8wE953gDdHQwSiDQmK9Lr3IamJCcAObPl4u9oBAL4EohRESGC+FrGoiOX+E/lYD4y3kg0CRQJOSfggwbFksZZhg2GKOAGQscrFrE+RrachaC8hfsN7uLCJ24myE9BuQb52HmGcqO3fPtc2jXB3RiTuNy+hPpKcv/mmzHfzOOHDny/+YPi6+BG+WQsHsAAAAASUVORK5CYII=`,apk:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcXnGVmm8P2q8QHzIV4bNYXXDTWu8P3nFUYfNY26/RIPLXoDJWobNYXHASH3HVnXDTXnFUfT/7onPZej/2/v/+Ov+4cDypVmtLqvjjt38y57afsvyti89dh4AAAAKdFJOUwAQ3/8n3Xugn58KiJgCAAACeElEQVRYw+2Y2ZajIBBAuxuTtIhsKgTx/79zisUlaZ0pPPM048WwBa6FkpyYj4+Li4sLNNW9PqQq133W3e+4lSqr24GpPWms08S23ZhCmnvatsxYtZE4/a229BQZ78nxk27TXWKsWwwFRhA2ITXz3FBp1maxsc6OLF1Usb6cocBYNynAnKcs55tm22CNdYPl9vmXhUhj3bA8PpaMLdUNqc1qZIQggRRUi42lPIvmEzDMZazZBiHYOy9dd4TwezPXj1Pzqgxd7dpVlwnVNAzjS0SiM4N2a893mVC6MF2BsvO+64QQzTgMfadKhSIdQvFJD9p3duyNMf3khB0G44gSLCWcUKxwBhEZM2S0Af/E5TqgVKiI18MrRnKV3mRnhNy/+QbdbQIsF3oTFmr0vGJY8sjUGaGCBEcPht65UIDK2+C3UuUhaKFKSUmngen5tCE07Z+kh7bxMp9RKZRQLYg+CgmZQqk94SaUli8jyoTSx/lmsrHUvR1TqU4KuY3zddKtFVjzOSEd9S7G8UJhDEBKAp+4Hg7Itpg+C6WSKKEMgE8Se4CnaYAsEAbo8wDC5yGFQndAd1II13AfR08JOYlfg3BTTCzD3UktRwqFHJLk/DjCcBE5Wgi6BLH7xtHHuxKG4IRACJKTdhr3sISmM0r+QAgffIaS1u3uwlnIC4WckP1tuPhKhRDjHquvdMlrSdcmncvQgRLCDEpTtr6SNjX5klGkEM+/IyTxmF/bKlkLghbGrZE2SPLFFs1dZLuXMMJ71m1m0vkMdOmI71KC+QVbkQJQjyoPvA+zYnig/8L6vpDPUhUyxgfuSSr9ifH4I/cT/2ZcXFz8v/wC1sx9JR+88xQAAAAASUVORK5CYII=`,gif:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC`,txt:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTOL+DSL+DqO+Veb/mKl/kmX+zWL+U6a+2ao/0aW+0CS+kyZ/GCk/mWn/1yi/lef/VGc/Pr9/+jz/2+s+46//b3a/4O3/AJIojgAAAAKdFJOUwDf//8d3U+en52O09RGAAACF0lEQVRYw+2Y63ajIBCAW8ZqHC5KrZv3f9MFhpuJTQfrjz1n/SDIbT4npw2pfXu7uLi4YNOP39O367rRvOKja/V9GHOqcTTmVGNnzLlGl6A2WvvWxGsqJo9ajKMuGP0dDcbxSWTShKlGfOOoebCNRTidYxynDXrb1dUU0ziGEF3ZdHHoza14xocMXzJyhLdpmme/e6ag2XeobqYCnBRvs98fm32meId56nnCErk+czfVhlub0CyfOyzaHhTa9XOX9aDQqnU/w7uyjULrcC3i+ocI4iUOVkQ7+8IVeptXWgUgMXD3xjv1UYCyCa6QUAiC0E64fMUBYBTOrUJnROmBryCEMEAsCbYKrSIkCSXS0LYLla8U6K4KSYi+H5ZsWmcJY1ohmpos3OLWmoSF9JajX9m8ckyIRfjIrzM8KERfq5J/yridZwrDx0HF6suOMF24QoXJGijCR/gZboB/TZgDYyd9lqU8mqGPlGQMJR8OfiDjZNjDEQ5S0hlDZ4ushWkqwxSWJCgezOKYIMsw7Ri4wi0g3HfBKuF55bBQTNod1WcKw9kv6yShTQgUQA6A6IsjAEmFJ4RXOF24W+gBcIUxAaiapChi/zolw5rfC+GYUKTqG1G11Vxo2Bn6AJLk8NiPC6JBKOjXLv0ZEruwN2AJe8GCnKzHgEGw4STonm/fub535rNUx8xx4D+RdsPP9Af+m3FxcfH/8hcLt2QJ3T9wuwAAAABJRU5ErkJggg==`,exe:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcVq2/kOv/0uw/163/1Cz/0+x/zGp/zad+0Ku/165/Tms/zWq/zKp/1i1/1W1/1K0/0Wv/0Cu/06y//7//0qx/1q2/1y3/1+3/j6p/vf7/y+o/9zu/+r2/yqM9xCa/4LK/8De/3ay/p7P/n3B/rLW/12n+xyf/0XRgzgAAAALdFJOUwDdez2eoByg/Z+vFPUOhAAAAoZJREFUWMPtmOt2mzAMgNuEBDquhhgwgWwMQt//DSfJ3BJIJ3P6a+MLviDkDxE4OaVvbzs7OztsjgfrJUdz3flH/hXvZ1Pfe55/q9HK8iyDluOW4xz3cHcYzIxnMqSZNi3BuJHxALIsTXHLsB+nuOlzmRktbUl71RIKGhitNA3gMxEM3TgxM1rog2UB0vcoopAezIxWwIRrPM0XhX17jJgZT+ETwWwSPBzgGRfCL7C4wojSI91FEfVDJBo2hPNLcYqeCKmFs71pcuAJw0cbkCRREq1wMq4wQVnQNkAbJtuESYKWiAbUtXVVENU9p1iiT4NzrjChRQnNmqK4DBSNDuoj0NjCkbScdGgsUzlXmgplWl4eKcpkZjQVSnHv6yuqapjdhZycLKGUkI+bFK22VOW9ae79xRe5NkInWcIPSOxR5IC7292ArqYqi1qNCfKDIxyzRV7pp8W53RxstX56oMRNQqEaEpTdzVGAc+tKCjRqNLIuWYpBWOsCwScAMOoSaxIKdoWCkEI4dYm06JNkbClQO32KFAZCIWLnN9GBUOoSOwq0TjzkGAnxGhFHxU8B/RUYC2PlEGpcrobIxgpjpYmfI1OAJ4zjWOCaWN+UBTUdxyyeMB5wq8sqlTummAn9V0Jvs7BYpfS3CstqlQ1CRdnX9tcqraFQwcNB98T7/LnKp0cJ+PywhG7s9vjXVXxXp0DHE7qT0lXuK+gIR2g/ydSjV01zZSR8Xdoc26jCbxN6rut5HuZTR/s0eH03xVlCz4B/Q3hYWefDxxua7/s6CAPnL9ijv8DzX8F6DbB9Npwrhvdb5wq5V4bPYb5Lne3lrwKcYDG1+W+k54P9Vw4b/puxs7Pz//IHkvGjBU3hWj4AAAAASUVORK5CYII=`,qm:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=`,php:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=`,pdf:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcf9zfP9ldv98gP92fP9+gf9we/9md/9yfP9/gv9/gf93fv90ff9od/9ref9ve/9ldv/x8f/q6v/8/PlYaP/g4f6lq/63vP2Ejv6Um/7Iy//S1LO+3cAAAAAKdFJOUwA93/8c3Xugn58XiwqYAAACVklEQVRYw+2Y23KjMAxAmzolxXc7tYHw//+5kmxI2tBWMDx0ZjkhMr6dkWoeSl5eDg4ODticmvZbTut151b+xNt5re9Nyl2NrZS7Gs9S7mts5M7GVu5sJKH4KhDbjS1shu2CKA36yj2ZaZ5vbGdNbT9zH+MaW8GFaeQLmcYF4XAbu37J2HKFiparyReu12ta+oOKEztDVXwKP+mKdKV3H8a7ZkWGqmxWihIEoVLT+FyA4tTc4g68VI39LHyGI3yva0WVKl1KzroOimkOvu8rhJNWmY6Eg17IcL0QcFRzkGovofZYc/C7ZahNBuHNbs+wpHKPrscH2yqt4YIBbGlOc4WPYK8rp/w4WhexhPoJem6SeJ7YKMRTDteQdxN2odDvIXRwpRBSjhD6rUJXL/xoPUBynRohjkL0Geh1nWILYblzk/cWQhx0DymGFDFCvqSDFSyhc64YCzKisBvDA1HqsoAvLBmil44khk/EXNesEhIiF1eMMaVaMWa8UahyimRLacy98xmdwM3ZTcKhbE+pG9xHIY+QaOf9JmFGW4hpIJU31npsMZgtJZMP60MJ2GDIGl/cbo3QAs5aUeqNqfe2DtVgax86bCFQE0wZ6lvSERzhpW6hE0np5r198sysEBqL5wm+D/sDlxUZep+73MMJ7CQs5/mLjys0pqSIj4uh8mdM7dTIE8KmCZLXW1MnHma5Qj4sofnrwmZhn3+I0Ph5gvMf7Am2ELjX0z21ZKozJUDDeg24eDaciuH99pXre2W+S52ZOV74b6Tn5vIrzYZfMw4ODv5f/gEm33Cvx+zPHgAAAABJRU5ErkJggg==`,Null:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=`,ipa:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcUOv/zar/1K0/1Cz/0+x/1q2/jGp/0Ku/163/zGp/1a1/zus/1q2/02y/0ew/0Gu//f8/164/+/4/+f1/9fu/yek/73j/6TY/xad/43O/3nG/21bnhoAAAAKdFJOUwB7//+gJ92gn59E+c9oAAACbUlEQVRYw+2Y27aqIBRAd5iVsLiICKT//5+Hi5hmdcD2wxnjOIPF4jZdPXX5+Tk4ODjIpj41b6l3+Br5iUupsr5I+avGVB99GvcaayqpI4ioz2MWJnGl0HiiNCpfIuNeibFZ6OQ6ysdqgbGhWeQbvZDQGMjCQOYlUmZsCHFXSIoTNEWvjXu5xjNZQVOgC3Hkskv4ict+YfXa2GQJq4r4lkI1z+UoSUhj9w+p84QrSEqGvpeLaeC0QzhBTdca8bx63i+0bavGvULmG1sNUrXKIu7SxU6ZcLoV7jM2qN5ixKJwkrJMIVtRxWG0g9Z8teQpEKZbZLB2kAzf9WiNsXL9uOIKiVVd23bKDLZ3icss+UpovMWTxlYZUii8hZPcvRgfZs+MkYKFPR/YLUfI3VkP41RtfL3Ugk/brmcKw3F3YdwU2A0a0q7nnC0MmI1QUeBLbkVC4YTzKzZViS+EYLpnFOd7hOK9UO4QCi6CUsCgNkYreNp2TeQJEzCqFyWKJdlC7hvwPji6h1d1hkSVr7O0QoGNCjqlQvdDp/phT4WTcOyjxvuS+hshCKM2GATlQogd9FTign7UMD0NMoUw4S4gbZ+MvdUo7PltgDxhOu3QyARj7/Gj4RoWFFXoC0GaGacydhhsSEgoML2FYiEAvovRjuzuAPdBxe8YSiu8wpPRox0hWfvyhWgOgLHWGDnc6JLZFbJrltDfjneQv4fiEJdR3ExZlhB9BFazXxCif0aIF/ExxmQKOE94SofxQxrTqWMHig3lfIOt8Qb0dpr1U+WKs8l5xw7I9UHmb6n6+qv1xT8xrn/ltOffjIODg/+WP3HMcIG4JOLbAAAAAElFTkSuQmCC`,doc:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTSL+DmO+VSd/k6Y/Vmg/kOT+jSL+UeW+1uh/1ig/k6a/T6R+l2i/0SU+0mX/Oz1//n8/y6G99fp/3ex/J7I/77b/4u9/gFOo+kAAAAKdFJOUwD///8n3Xugn58WcbRuAAACn0lEQVRYw+2Ya3ekIAyGCzozHQFRUPz//3RzQaSXbYPtOfthfccoCcljEM9pZ15eLl26dEms/v78q/oTvKf7SrdWZH9z7leJT+d+ldhTzQCfooH9oUw0Ee8D1qPyZXBsOxDdFuJzkKiBKAM2EIVAObEGdtlqv0SkRAB2XTfgQSMao5M/FKHpmxDYvdHO2G9S69YE/FD+5i5szxMdfq1eBDSYasiMYY8DJkcPuwuAr12uxNO2LgaHGWCM29Yhe3g7yZpfTa41xq/THJ3BNunUGZ8gMnAAs15FQBbUjHGe57W4IDfN87T44suAXUZ6WwFZCwDnZSx+S4cA1AeQnwEBp2X054DjAVxiXPclzyeAno4d6I2DwbT5/Rky0IuBnnjeH8AVrrC7PgPtniED+l0Z6D1txTwn7w8gp5wEJuLh+1KA/jRwWv2GFGwymR8CFQEH7DMmRG0ZOLYCucAyEFFx0REvWwGOcuAIgnw4qwgrRdCUVNhgMEFgQiBO4yEGkqyielB0IahEw5mBWSeBcQ1KB7fjfw5MXlmrw5rdRf8QGJegrbVqTNltBtrRVsC4agU+tLjECkhJIiA0A+koBqYBGsSI4kUD0I6cJAVSOjw12ljcEcJDi0PKQBKkSDvkfAJGeAU138PSy5iBvIYmIO1rTAu8MiUwJogYVVIkwMcBVAb+jFKDOQCL3lZ3BOyjCQhLROkKSBHVDNRQSqb28gyliOIImQioK0ExC2E5oqp5GZBrbVX3PmJ3p7nD7/TPgEpXD0oVU8XN00oGpEqsUQc5UxWb2k0EVG/F2Ix4LwnwXld+AtF1WPIfbK8aJPqq8pDzJCsG4YICV4S9NByUUFwt/C7VP7AgUBGcw0cmTQZhf/wjxuNb3c/8mnHp0qX/Vn8A5AVWOPvxckoAAAAASUVORK5CYII=`,xls:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcYXMX2m8Pmm8P3zJWYbNYXvGVGu9QHrGU4jOZITMX4fOY4HKW3fET3LBSm+/RnrGU37IV2u9QWm7P22+Q+r94PP/7dv2zfv/+GGyNlmsLsfrtaTZiLPhm5TQdN9r514AAAAKdFJOUwB/e98c3T2gn5+4KvYSAAACu0lEQVRYw+2Y63qjIBCGmzRtqhwV1Arq/V/mDgMeYtLtkM2/9ROBGWZe0aB96NvboUOHDpH1eSp+1Gc+7lKwv+njksv7YOylxIKxlxIvjL2WeGIvJhYlY1BYiRU0ZahZcqYjh1ggJCqmL8bcCVejE4tyL/awSybeA38QlXgL5PsuzyYWMYmvhfNECS3nWDCGRiw4T0lr2bjwLCOSnyjAL56hz2wg2yNuHadM4NA0vpyNCs6pa7ot8osIrGI6a76/Wx96FVZ8Asc3OmIAEVghDw7WQX47Qq8KNo+212ihjwSsFsmxjcQo1oHZdpNYIzKBVnokDmiVvgV1Q/88UPQCic0EhvZN5Cn9DDAmyb5Kt1lV8Is3TTc4k3iaDNRah/DQaOngwYWJMZgg8MYeblhrHIOWDFxl3QREmKMeuq4bVS8TLooIrDZE44bw7FpvpnGYeYvyZ6iF6cdAbCbn3J6XCxSR6JDYTb2RuzEaUKQMEbLgkH2a45A8cw0tDXgjAMve+kTc6wmgECOsPhGJ7BXA8D43ggdi05X/DsTvQ8Nc6fFN4c8AJRyhBOEXsPXKwAJHYnimOChzZihThmRxUVe9hAWORB8vJCOXBJSAk1E8vMiN186KhTjKTQAFeMVwgVn43HzpDFgKliMShwQTdOCsMgC6CXkr0as1IhMoPHxhht4kgnXKw1+9wa4R1yygMnoYJ9cvM6qdHMfB1PnAhDAufGHU5gpgoiP6FA2oIFBFGUi30UQIOmqFXaXIwK2supW1N5584C8iAu+mdW+kmga04caCQpqdLWXTwDwaeiSgzRAVWGNZzrVb12tTk4E1CKuUbdGyyZWGoijAc30nu1xhrzNl8/0o0dSPRdoGXGuTVMezNvVibioQ5Y5hf/u+JPygefiduJe6XA1JV/qO9HK+/qrzE//NOHTo0P+rP7x4jQVHYv00AAAAAElFTkSuQmCC`,ppt:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcf+ubP+iWP+SO/+nX/+lXfyPQv+SO/+dUP+xcP+ua/+VQP+jWf+XRP+cS/+eT/+UPf+ZSP+gVP+qZf+saP+SOv+mXv+wcP+ta/+ubf+oYv/79//x5f/m0vmEO//MpP/Sr/+9i//Zu/7Dl/ufY/2zfqeIp1YAAAALdFJOUwDdPXugHPygn596VuVMqAAAAl1JREFUWMPtmOtyqjAQgNuqUBQSEi9cDHJR3v8Vzy5JJHi03dAz0x+HD3LZTfIZ6tCZ+Pa2sLCwQOZjG73kw1+3ibKveN/4+t6z7J8a7f6Kp7bC27gp7mTFC7yM28nS/OfGKC9y0OSIafJi6A1FJ3IPY5SToBuj/JAfDkMxNSzHzpDN9e1jXB+IUI1/CfemjJGfcb0HDvbe23rvZGxMM673dCKqsJwsK+916SYQyn+KdemQVec7qmqy8oGtr7A5T6kfhGsP4QlLd/7aSBKeRuJueFSNUmi8nspxfJ6wuWn6Gv+gleM7neYI1fViucIeVTtLGOv5slMg5FITXGCLqo6dCTRhfIoRqLVQ2lA0Sqkujk0MGZLQrEZAqKwQ4ChspDOBIvyMR2QzEUr4plXNnQmfnkI+FbYQVf0coTRlFGZt22KgOm78UlKFckQL4VuulaHqA2dczhFWICwro6uuAfuJkDXVIJSNfvu69jLZIFnIXWHLZXKrkf52Cbi/kHOORmg4q2FbLePMvnwJw5HhA3GcU4UWK+QiQATjD/gKhRW+4idCePCZQjaihQK7nLnYyFeYjMKnPjZnh90TIfMSCsG0QrDk2lVdD5EQOoE9HDYTBE2IizRJ33RNkYgJzOkTdzgKg6zNggeh8BSGxqWF8HYEj5bkXtGEiUsa7IYWDM8IvYXf8GvCHZLglZgIG33ZLvZ2JOHOg98Vpvc2HQOHNKUJV6kHK8rh+8m64ysh6RgQpsdjaq7hhmK6OmeGIU95YjjfBkciAfEstQlpvpB+It2swm9Zzfg1Y2Fh4f/lD1FNqKcd3wCLAAAAAElFTkSuQmCC`,png:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC`,html:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=`,js:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcUOv/0uw/zar/0+x/0Gj/Fq2/jOp/0ew/123/zKp/1S0/zqs/1Gz/123/02y/1i2/kWv/0mx/0Ct/1y1/vb7/1i2//7//zel+zOe+e32/9zt/5nN/ieV9oDG/avZ/83m/77h/2S6/HhIljsAAAAKdFJOUwB7Pf8c+92gn59dd850AAAC8klEQVRYw+3Yi3KjIBQG4CbGpgaMNyQIiJf3f8g9B8Rqp9mCszO7M5u/Kgj6iRrb2Le3V1555ZXgnE/Z05zjuUt2/13eL7He+/0+457zlpk/i1jRjo/ZCQC2Hx6LH+MF92EOhIJt9LtviRJPFsMgY0vPr2aUmDmFlY5i68q2ZBFiVpYcf3jpwjnDFoZ15mZsChczRKxkC86Xlc+4erCY+T34TvENnPuxh4rZdiR8M0BeLlfCwcFiRqxGcOJYJxB3AEJ4STiuEuzhYWJGvqYkz5IdA58FDnQ+AOb5bOY8/948BYAfFoEJZ6gWWraK5S5kaffLkHP+yPepxsejHep9I1nKj3iwThWAOi3y7xIIbnYuPOiHCH0Fzm6jIBC2LZZ9IJUHi2JpsYsocJeqW8Fv8g+AtQcrEOuDYF3Xbl8oNmBtJiXlONxtb23nILDepfEgmdr2AdVWGduBxz0Cpp1qARTVAFwrJSwVX3vjwapZwEI+HnLSelKtNHFgZYNYBROCLYB3BLu+F2YYWGW7YItgsK58PJjjpTRCdL0QYu2NGOFXMJ3wGqrBFEI0fwIUbJT2Jkv96R0AGw/SjuhR2Q+OjgWbBqHakAZCEZRaNKLrajPgMOUM/bBFEw5CcngqNJQilwAaATTckG6GS9kOjU8QaLekGh2dixnPWDHBBk0o3GRzEBRGoQgBTw6dgAdPDXda2D8INBqE09Mo2siRdWKQ9smDRw/GSw+MsOv0KG3UxPoOnmV7i/GzqLsVvAaPkMJTxvQ0juOgU/AoHGBSSqpxgseFokgDwSsFjuIt7fsUvlqmPXo0gWduNsbMokcPN4FFGOgCJ927oOcPsa65xIA0ARIjbsnSkMDvBZHQo+AC7ISdFgwmid8xwfqmZjtcxdWDwGQNXebniQR/zl8Eb3Za8rV2s/MtEDwlN4hdLFkbkm2LXQn5Bnu+hQbIoNeAa7B4CzljeL9NQ7008F3qEjjGa/gb6eV0/TGnA//NeOWVV/7f/AJAsosfySCrjgAAAABJRU5ErkJggg==`,css:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVGm8P3zGVXzJWYbNYXbDTWu8QHnFUofNZITMX3zHVXTCS22+Q3jEUIHKW4jOZGq9QHDAR////mi6PvP97pbRd/v++tXwx+b33afbjV2vMrznpsnquGjfsnAAAAAKdFJOUwA936wc3Xign58XA1ZcAAACuUlEQVRYw+2Y2XbjIAyGm540qc1qAl7j93/NkQTEdJsKtxdzzvg3iSVAH8JRFufp6dChQ4fYOl2aL3Wqx50b+ze9nGt5L9b+KrGx9leJZ4ppv2C11KqIlxTUUnib6akn2TXEBigY3RKtJdncgRb1VBCb9o0Ikq0Hvob4Dvil2EQukE18CzSfmlXEJoaaTDCtMYmFZ2Oo0SCP2BiTgrZWdNGjjUjTsIEP2TvIRrsv7KRTJbDtpwCaKEkb7b4EXhjA1zJgHG63YYiQfhrQG8vxVz5QECMAYRrv5Oj7OAEx9MUEJlCkJhA49cJLjJZe9BMChcnju4DjsihtBEgtC1wCAAph4sEDik0EVJpsYGqVgVk1QJOBMjkgHYFGxGbErgzl5uufZPgZUBJQ7wbqeYC6ewcc5t1AM0PdDfcMBI5coRCn2USPD9QUYMcAvGmW6FC8lj0uEcYWHc0F6igxwwW8DasjJ/ZJhynewpzmaDYQAbhh3LEuRHuGrHWaVJOh1PcplNmgMOsw3p2szRCB3vf4oq7ybYLD2HuvdwC18wvUIZRNAaSyWbyrBErasZaKCttFj9agwu6kTBeFCZQQgA2qJAJpAVQEYoeMs1hAuSkCNz8Ciwk7gMOofgi8FvHx83DrUONtV4auBIbZJldYKsPe1QJdIjpn4TtkCGHUDnvGEPCzwbo0DBOunC3jRJJ0ag30VrPo2onex6tym3jAjHPOt+sEWuMS0bY+DspaIEotvp/n2SDDeQFmr5a9GZL8QurQ7qLtdwEfQcqDusJWJY8LVBClElahMj06xRALqB5y6jtVAtU/Duw+I3TpGQ9oHOAF5r6TSo8PHYrzC/bUcQVI1m3AFSd7FpKzY7i/fQaaj0Sf0dsCNOLpeGbeS52vnY/K52R3yeji6cq/Iz1frt/qsuPfjEOHDv2/+gP0toi4gXoofgAAAABJRU5ErkJggg==`,epub:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcXXDTXvGVGm8P33HVnzJWYbNYWm7PYjOZXPBSmu8QG6/RXPBSoHKW4TMX37IV3nFUYbNYonOZOv+4fX/7/z/+1utMK3gkuL412O1OFOpJ7ripNf4xXK6TKHWhX88Tv4AAAAKdFJOUwB7Pd+gHN2gn59lNj8pAAACeklEQVRYw+3Y2XaqMBQG4GK10gxCgDII8v6P2T0kMhR7dujl4QcMCcm3Ni7tkr69HTly5Ig4pyR9mVM8d0mL3/JxifU+Xkhup5jyQudmkpuNuEjx4ii0fHlWUIt7lJiwsZVpOEZMnSQRYnpzsGH8WmyphxdcGJaL6U0WsSgFxeIStOtTGy2eeZGddmu9gq21tNMcmXi21i+adtsMQ8MdOm5M2lQMrtKUVVU2GxdO+8Cm/IJsickukL1N8SwEM9wzS2cZeVXlRT9uuZGBmfey7OmVfU9Nk3HoKhwiMFuEvaaum4XoEw8G736ve7rr8W8gfF64PqXqrsX3sv8TSF4Lns5zPWKF7ZjvAHPcYZt5jFft2Bm+RpsYpCBRVegpxqEz1p3BSzQHDhFI2JPg+3162LGjYy4CRKKt8AuM9c086BRDC+8kJwI0AxDVsPYMeNAZIsBPD/ZYYfsAIh/beX34l6c30aDOeyxrKHyB8/rKPtPxYP3AGksQDbxrw8J71FGggS033T2IpstHu/Du+OHBaZ+yClei6+7wVf7pQWSgMQYPTWJZloPt6g48N0CnJY9n5EYEhsn5JN40jJBXes+TQjBkEp33qD7ttXhwLi69kFhwJm568eAkbnpScL5IPcXJ09EVatq4CSJ5ylvabyKQpkKoEC/Cb5vg8bjhCTJQMxeCd62KQqG3jhA0k0ivCr973gvXTAz4I6qr6436ZOBVb4lqi9P6KgSV5vXzVz8YXvlEDoZlrE2KmholrVC9iN4Yk4AJLdW0XqvQeO454HXJL9iTiojoMeAq9yR3DM+371LvXfgsdRHWeJU/kV6S6z+T7PhvxpEjR/7ffAMGOojXQYbbiwAAAABJRU5ErkJggg==`,psd:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcUOv/0uw/zer/123/0+x/1q2/jOp/zSm+Uew/zKp/zys/1O0/1e1/0Ku/0+z/1q2/0mx//7//164/vf8/9vw/+r2/yie86HX/sno/7Dd/5TR/W6//H/H/Eyv911ykpAAAAAKdFJOUwB7Pf+fHN2g/p8jQekrAAACx0lEQVRYw+2Y7WKrIAyG12JXJn4xEQG193+ZJwnYOdedE7r9O74qBQyPARNb+/Jy6NChQ2ydT8W3OufjLkX/N71ecnmvff+rxC/+dT8jXnB8162sLhK7T/As4glgHR1xT0Vs0iW6PGKxYXxo35FBJGC9B37p4BOLdXhd42e9QdaxXecRi5opLpEN5BITsKL9oao8YkGoqkpIrJAIRY2azuFR8IB31bvPXQuY5zzgA8hOJwbwbTWevY3yof+GV3Hm/NZG29ab9yhjrOsq6E57C2Ub9zcWMEoP7x8yvqPOalOicoANAu0AsuCqce0j5QJNmPt+cQMQ7fwzoI7AaURNdueizgRq3CJQKiXl6GH2Xn/QyIAN1BqsdQS6BmvSAXDQO6ERF6hX4BSrAYGNnp3HqJw1eYhlDlCRh1TtcA2DmixFJkTl3ct8IE65whC3S49YSzG0PAt8H1wIAaPGeFxI46cJmiY8DYS0M4YyZZawkGaGIJpDmJs8YANbAqZk9ouUOPFwgyAapWySEQvYRBHQrI+bUSoKb+unVkoVTXTDA9LFCWiG4JxbejnKppG0mHiTa4JpKHM9TKk3Iq+RcvKDoRvUJptngBJFU1RyvM3BU14/AxQEVI1aByNxHG/OYtb8ALiqcq5SAlYTgW0+UO2BkHjWzbqZTPRQsYEwS4Xzi0BFY2Gb4R5jFGEawlMNjOAcDxgFgWzspO6S0xC/tYwNcJsQp9Q1B7h4COgNEHLOD9YO3kUeigO8rgB5629SbYljvSzLfBtH8QxQYJBsgfhdEKP8zssCAlEKsQViD4V5arGBQgmBKEGVeNBwkZpCxS4hWECRoWyg+m3gb3lYRvPyXpapsjlRZnlYpm2tf7pEmcqSBzyVDyUe9nJ+wZ73gx+jolivAdeSLc6M4f1WcnmS+S51Yfp45b+RXk7Xf+r0xL8Zhw4d+n/1B13vfAhtdKi2AAAAAElFTkSuQmCC`,dwg:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVIbNYXvHVHzJWYbNYXbDTWu9QHrGU4jOZHLBSW+/RYDJWmy+QoXMYHzHVYjOZHfET2m7P4LLXf3/+/T+7u3+5MXrsaXbiVyuMZjUeNb2xOP81bPjmuZ7vy0AAAAKdFJOUwA9z1wc33ign591Bg7OAAACdUlEQVRYw+2Yi3KjIBRAm51UI4gKxMei+f/f3PsQNU3SXtzOdGfWo0W4wBGFau3b28HBwYGYU1a85JSuOxfNZ/w6p/rem895TzQWTfOtxjP1qWCDtJoLK1WyMcM+VUUu1pJ3ls6nSDEW1UpTvSLBWFRf0iQZXwn93jFuhd7fK/2SJhgL9Hh0ecp5P4tn3xzwYmPhX0En2SL7nXkirEIPNA/xspAIL9Cw9CUmsV85dG3bBcjNgSUjeVJcykeG9nrtAmX9/MNJtk9Yk7B5cqbLvymsdwjr2LOmBIVtU3OMQ9xGJIQOQHSFGzBegR5zoV4Qj7DeQiumbVGIx26gEXICpAvr4bqlHe5r04WWhB1BQvsdwo5uX4/GvxCGgejBMv4mJpwZjoY0IY7C9nSZNB+jI1DY8tXfsJGVCi3Rt8tUjBoDelrn5mbBJxVi29qqG60XXDLtqFjYXudQd1N8VqEQUUNPTNA/jhCyE0cHRUNMEiq+cbiwV2E3cFTvGKHjqQ34bB0Jespy1NlkIQwR0aG7I2iOJwmVje1BG6atbwpQxbUqZYRq3ej9NIJ1GjGHwk21SKgiFndL7xQU0jvFLlWERJhHE3ehuQnTNI2WZmOxUQuhcDsK44xzJCx5vdyRJFzRYQShf6xQ+U8J9VOh3inU4NMAaTULccWUmopUrRQ3kAkfqQJgn1TsFBpaO+77hHp+xOwXmo9DhNVoOLipMlKh0dibd8waLq7HWDBGJDQJ/IgwM3zHIm5JlpQ33CV/wZ6wj1t7UT4KaLY5R4noMyB3EXN32BRiRHLF8H2rnRAt/JY65zJfLv8iPWf5l2Q7/ptxcHDw//IHYWiLelDcDu8AAAAASUVORK5CYII=`},pt={init(e){let t=k.getRandomGUID(),n=`folder`,r=ft();r=k.assign(r,h.getGlobalConfig()),r=k.assign(r,e),r=P.handleOnly(n,r);let i=r.emitter??new g(n),{$shadowContainer:a,$shadowRoot:o}=P.handlerShadow(r);P.handleInit(o,[{name:`index`,css:M.index},{name:`ninePalaceGridPosition`,css:M.ninePalaceGridPosition},{name:`scrollbar`,css:M.scrollbar},{name:`button`,css:M.button},{name:`anim`,css:M.anim},{name:`common`,css:M.common},{name:`skeleton`,css:M.skeletonCSS},{name:`folderCSS`,css:M.folderCSS}]),Reflect.set(F,`docx`,F.doc),Reflect.set(F,`rtf`,F.doc),Reflect.set(F,`xlsx`,F.xls),Reflect.set(F,`pptx`,F.ppt),Reflect.set(F,`dmg`,F.ipa),Reflect.set(F,`json`,F.js),[`rar`,`7z`,`arj`,`bz2`,`cab`,`iso`,`jar`,`lz`,`lzh`,`tar`,`uue`,`xz`,`z`,`zipx`,`zst`,`001`].forEach(e=>{F[e]=F.zip}),[`jpg`,`jpeg`,`ico`,`webp`].forEach(e=>{F[e]=F.png}),[`htm`,`py`,`vue`,`bat`,`sh`,`vbs`,`java`,`kt`].forEach(e=>{F[e]=F.html}),[`apk`,`apkm`,`xapk`].forEach(e=>{F[e]=F.apk}),r?.folder&&Reflect.set(r,`folder`,r.folder);let s=P.getTargerOrFunctionValue(r.zIndex),c=j.createMask(t,s),l=j.createHeader(n,r),u=j.createBottom(n,r),{headerStyle:d,headerPStyle:f}=j.createHeaderStyle(n,r),p=j.createAnim(t,n,r,`
            <div class="pops-title pops-${n}-title pops-user-select-none" style="text-align: ${r.title.position};${d}">${r.title.html?r.title.text:`<p pops class="pops-${n}-title-text" style="${f}">${r.title.text}</p>`}${l}</div>
			<div class="pops-content pops-${n}-content ${k.isPhone()?`pops-mobile-folder-content`:``}">
                <div class="pops-folder-list">
                    <div class="pops-folder-file-list-breadcrumb">
						<div class="pops-folder-file-list-breadcrumb-primary">
							<span class="pops-folder-file-list-breadcrumb-allFiles cursor-p" title="全部文件">
								<a>全部文件</a>
							</span>
						</div>
                    </div>
                    <div class="pops-folder-list-table__header-div">
						<table class="pops-folder-list-table__header">
							<colgroup>
								<col width="52%">
								<col width="24%">
								<col width="16%">
							</colgroup>
							<thead>
								<tr class="pops-folder-list-table__header-row">
									<th class="pops-folder-list-table__header-th cursor-p">
										<div class="text-ellip content flex-a-i-center">
											<span>文件名</span>
											<div class="pops-folder-list-table__sort" data-sort="fileName">
												<div class="pops-folder-icon-arrow" data-sort="按文件名排序">
													<svg
														viewBox="0 0 1024 1024"
														xmlns="http://www.w3.org/2000/svg">
														<path
															d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
															class="pops-folder-icon-arrow-up"></path>
														<path
															d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
															class="pops-folder-icon-arrow-down"></path>
													</svg>
												</div>
											</div>
										</div>
									</th>
									<th class="pops-folder-list-table__header-th cursor-p">
										<div class="text-ellip content flex-a-i-center">
											<span>修改时间</span>
											<div class="pops-folder-list-table__sort" data-sort="latestTime">
												<div class="pops-folder-icon-arrow" title="按修改时间排序">
													<svg
														viewBox="0 0 1024 1024"
														xmlns="http://www.w3.org/2000/svg">
														<path
															d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
															class="pops-folder-icon-arrow-up"></path>
														<path
															d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
															class="pops-folder-icon-arrow-down"></path>
													</svg>
												</div>
											</div>
										</div>
									</th>
									<th class="pops-folder-list-table__header-th cursor-p">
										<div class="text-ellip content flex-a-i-center">
											<span>大小</span>
											<div class="pops-folder-list-table__sort" data-sort="fileSize">
												<div class="pops-folder-icon-arrow" title="按大小排序">
													<svg
														viewBox="0 0 1024 1024"
														xmlns="http://www.w3.org/2000/svg">
														<path
															d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
															class="pops-folder-icon-arrow-up"></path>
														<path
															d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
															class="pops-folder-icon-arrow-down"></path>
													</svg>
												</div>
											</div>
										</div>
									</th>
								</tr>
							</thead>
						</table>
                    </div>
                    <div class="pops-folder-list-table__body-div">
						<table class="pops-folder-list-table__body">
							<colgroup>
							${k.isPhone()?`<col width="100%">`:`
								<col width="52%">
								<col width="24%">
								<col width="16%">`}
							</colgroup>
							<tbody></tbody>
						</table>
                    </div>
                </div>
            </div>${u}`,u,s),m=j.parseElement(p),{$pops:_,$title:v,$content:y,$folderTbody:b,$folderHeaderBreadcrumbPrimary:x,$headerBtnClose:S,$btnOk:w,$btnCancel:T,$btnOther:ee,$folderSortFileName:E,$folderSortLatestTime:D,$folderSortFileSize:O}=P.handleQueryElement(m,n),te,ne=[m];r.mask.enable&&(te=P.handleMask({type:n,guid:t,config:r,animElement:m,maskHTML:c}).maskElement,ne.push(te));let re=P.handleEventConfig(r,t,a,o,n,m,_,i,te),ie=P.handleResultConfig(re);P.handleClickEvent(`close`,S,re,r.btn.close.callback),P.handleClickEvent(`ok`,w,re,r.btn.ok.callback),P.handleClickEvent(`cancel`,T,re,r.btn.cancel.callback),P.handleClickEvent(`other`,ee,re,r.btn.other.callback),A.append(o,ne),i.emit(`pops:before-append-to-page`,o,a),A.appendBody(a),te!=null&&m.after(te);class ae{init(){r.folder.sort(),this.initFolderView(r.folder);let e=x.querySelector(`.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child`);Reflect.set(e,`data-config`,r.folder),A.on(e,`click`,e=>{this.setBreadcrumbClickEvent(e,!0,r.folder)}),A.on(E.closest(`th`),`click`,e=>{this.arrowToSortFolderInfoView(E,e,`fileName`)},{capture:!0}),A.on(D.closest(`th`),`click`,e=>{this.arrowToSortFolderInfoView(D,e,`latestTime`)},{capture:!0}),A.on(O.closest(`th`),`click`,e=>{this.arrowToSortFolderInfoView(O,e,`fileSize`)},{capture:!0}),r.sort.name===`fileName`?A.emit(E,`click`,{notChangeSortRule:!0}):r.sort.name===`latestTime`?A.emit(D,`click`,{notChangeSortRule:!0}):r.sort.name===`fileSize`&&A.emit(O,`click`,{notChangeSortRule:!0})}handlerWithBeforeCreateFileOrFolderInfoNode(e){let{fileSize:t}=e,{fileName:n,latestTime:r,isFolder:i=!1}=e;e.latestTime=e.latestTime??`-`,e.fileSize=e.fileSize??`-`;let a=A.createElement(`tr`),o=A.createElement(`td`),s=A.createElement(`td`),c=A.createElement(`td`),l=``,u=``,d=``,f=``;if(i)d=``,f=F.folder,l=``,t=``,u=``;else{typeof r==`function`?l=r().showText:typeof r==`number`?l=k.formatTime(r):typeof r==`string`&&(l=r),typeof t==`number`?u=k.formatByteToSize(t,!0):typeof t==`string`&&(u=t);let e=Object.keys(F).find(e=>{if(n.toLowerCase().endsWith(`.`+e))return d=e,f=Reflect.get(F,e),!0});e?(f=Reflect.get(F,e),d=e):(d=`Null`,f=F.Null)}return typeof e.fileIcon==`string`&&(f=e.fileIcon),a.className=`pops-folder-list-table__body-row`,o.className=`pops-folder-list-table__body-td`,s.className=`pops-folder-list-table__body-td`,c.className=`pops-folder-list-table__body-td`,{$folder:a,$fileName:o,$fileTime:s,$fileFormatSize:c,data:{fileType:d,fileIcon:f,show_latestTime:l,show_fileSize:u}}}createFolderRowElement(e){let{$folder:t,$fileName:n,$fileTime:r,$fileFormatSize:i,data:a}=this.handlerWithBeforeCreateFileOrFolderInfoNode(e),{fileName:o}=e;return C.setSafeHTML(n,`
          <div class="pops-folder-list-file-name cursor-p">
            <div>
              <img src="${a.fileIcon}" alt="${a.fileType}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
              <a href="javascript:;" title="${o}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">${o}</a>
            </div>
          </div>`),C.setSafeHTML(r,`
          <div class="pops-folder-list__time">
            <span>${a.show_latestTime}</span>
          </div>`),C.setSafeHTML(i,`
          <div class="pops-folder-list-format-size">
            <span>${a.show_fileSize}</span>
          </div>`),Reflect.set(n,`__value__`,e),Reflect.set(r,`__value__`,e),Reflect.set(i,`__value__`,e),Reflect.set(t,`__value__`,e),t.appendChild(n),t.appendChild(r),t.appendChild(i),{folderElement:t,fileNameElement:n,fileTimeElement:r,fileFormatSize:i}}createFolderRowElementByMobile(e){let{$folder:t,$fileName:n,data:r}=this.handlerWithBeforeCreateFileOrFolderInfoNode(e),{fileName:i}=e;return C.setSafeHTML(n,`
          <div class="pops-folder-list-file-name pops-mobile-folder-list-file-name cursor-p">
            <img src="${r.fileIcon}" alt="${r.fileType}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
            <div>
              <a title="${i}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">${i}</a>
              <span>${r.show_latestTime} ${r.show_fileSize}</span>
            </div>
          </div>`),Reflect.set(n,`__value__`,e),Reflect.set(t,`__value__`,e),t.appendChild(n),{folderElement:t,fileNameElement:n}}clearFolderInfoView(){C.setSafeHTML(b,``)}createHeaderArrowIcon(){return A.createElement(`div`,{className:`iconArrow`})}createBreadcrumb(e,t){return A.createElement(`span`,{className:`pops-folder-file-list-breadcrumb-allFiles cursor-p`,innerHTML:`<a>${e}</a>`,"data-config":t},{title:e})}setBreadcrumbClickEvent(e,t,n){this.clearFolderInfoView();let r=e.target.closest(`span.pops-folder-file-list-breadcrumb-allFiles`);if(r)for(;r.nextElementSibling;)A.remove(r.nextElementSibling);else console.error(`获取导航按钮失败`);let i=dt.init({$parent:y,content:{text:`获取文件列表中...`},mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},addIndexCSS:!1});this.initFolderView(n),i.close()}async enterFolder(e,t){this.clearFolderInfoView();let n=dt.init({$parent:y,content:{text:`获取文件列表中...`},mask:{enable:!0},addIndexCSS:!1}),r;if(typeof t.clickEvent==`function`){let n=await t.clickEvent(e,t);Array.isArray(n)&&(r=n)}else Array.isArray(t.clickEvent)&&(r=t.clickEvent);if(r){x.appendChild(this.createHeaderArrowIcon());let e=this.createBreadcrumb(t.fileName,r);x.appendChild(e),A.on(e,`click`,e=>{this.setBreadcrumbClickEvent(e,!1,r)}),this.initFolderView(r)}n.close()}updateFileLink(e,t){let n=typeof t?.url==`string`?t.url.trim():``;if(n!==``&&n!==`null`&&n!==`undefined`)return e.querySelector(`a`).setAttribute(`href`,n),n}async onFileClick(e,t,n){let r;if(typeof n.clickEvent==`function`){let t=await n.clickEvent(e,n);typeof t==`object`&&t&&!Array.isArray(t)&&(r=t)}else typeof n.clickEvent==`object`&&n.clickEvent!=null&&!Array.isArray(n.clickEvent)&&(r=n.clickEvent);if(r){let e=this.updateFileLink(t,r);if(e&&typeof r.mode==`string`){if(r.mode===`a`||r.mode===`aBlank`){let t=A.createElement(`a`);r.mode===`aBlank`&&t.setAttribute(`target`,`_blank`),t.href=e,t.click()}else if(r.mode===`open`||r.mode===`openBlank`)r.mode===`openBlank`?globalThis.open(e,`_blank`):globalThis.open(e);else if(r.mode===`iframe`){let t=A.createElement(`iframe`);t.src=e,t.onload=function(){k.setTimeout(()=>{A.remove(t)},1e3)},o.appendChild(t),k.setTimeout(()=>{A.remove(t)},18e4)}else console.error(`未知的下载模式`,r)}}}sortFolderConfig(e,t=`fileName`,n=!1){let r=e.filter(e=>e.isFolder),i=e.filter(e=>!e.isFolder);return t===`fileName`?(r.sort((e,r)=>{let i=e[t].toString(),a=r[t].toString(),o=i.localeCompare(a);return n&&(o>0?o=-1:o<0&&(o=1)),o}),i.sort((e,r)=>{let i=e[t].toString(),a=r[t].toString(),o=i.localeCompare(a);return n&&(o>0?o=-1:o<0&&(o=1)),o})):(r.sort((e,r)=>{let i=e[t],a=r[t];return typeof i==`function`&&(i=i().timeStamp),typeof a==`function`&&(a=a().timeStamp),t===`fileSize`?(i=parseFloat(i.toString()),a=parseFloat(a.toString())):t===`latestTime`&&(i=new Date(i||``).getTime(),a=new Date(a||``).getTime()),i>a?n?-1:1:i<a?n?1:-1:0}),i.sort((e,r)=>{let i=e[t],a=r[t];return typeof i==`function`&&(i=i().timeStamp),typeof a==`function`&&(a=a().timeStamp),t===`fileSize`?(i=parseFloat(i.toString()),a=parseFloat(a.toString())):t===`latestTime`&&(i=new Date(i).getTime(),a=new Date(a).getTime()),i>a?n?-1:1:i<a?n?1:-1:0})),[...r,...i]}initFolderView(e){this.sortFolderConfig(e,r.sort.name,r.sort.isDesc).forEach(e=>{if(e.isFolder){let{folderElement:t,fileNameElement:n}=k.isPhone()?this.createFolderRowElementByMobile(e):this.createFolderRowElement(e);A.on(n,`click`,t=>{this.enterFolder(t,e)}),b.appendChild(t)}else{let{folderElement:t,fileNameElement:n}=k.isPhone()?this.createFolderRowElementByMobile(e):this.createFolderRowElement(e);A.on(n,`click`,t=>{A.preventEvent(t),this.onFileClick(t,n,e)}),typeof e.clickEvent==`object`&&e.clickEvent!==null&&!Array.isArray(e.clickEvent)&&this.updateFileLink(n,e.clickEvent),b.appendChild(t)}})}removeArrowActiveStatus(){[...Array.from(E.querySelectorAll(`.pops-folder-icon-active`)),...Array.from(D.querySelectorAll(`.pops-folder-icon-active`)),...Array.from(O.querySelectorAll(`.pops-folder-icon-active`))].forEach(e=>A.removeClassName(e,`pops-folder-icon-active`))}changeArrowActive(e,t,n){this.removeArrowActiveStatus(),A.addClassName(n?t:e,`pops-folder-icon-active`)}arrowToSortFolderInfoView(e,t,n){Reflect.get(t,`notChangeSortRule`)||(r.sort.name=n,r.sort.isDesc=!r.sort.isDesc);let i=e.querySelector(`.pops-folder-icon-arrow-up`),a=e.querySelector(`.pops-folder-icon-arrow-down`);if(this.changeArrowActive(i,a,r.sort.isDesc),typeof r.sort.callback==`function`&&r.sort.callback(e,t,r.sort.name,r.sort.isDesc))return;let o=[];Array.from(b.children).forEach(e=>{let t=Reflect.get(e,`__value__`);Reflect.set(t,`target`,e),o.push(t)}),this.sortFolderConfig(o,r.sort.name,r.sort.isDesc).forEach(e=>{b.appendChild(e.target)})}}let oe=new ae;return oe.init(),Reflect.set(_,`data-pops-folder`,oe),r.drag&&rt.drag(_,{dragElement:v,limit:r.dragLimit,extraDistance:r.dragExtraDistance,moveCallBack:r.dragMoveCallBack,endCallBack:r.dragEndCallBack}),P.handlePush(n,{guid:t,$anim:m,$pops:_,$mask:te,$shadowContainer:a,$shadowRoot:o,config:r,emitter:i}),ie}},mt=()=>({title:{position:`center`,text:``,html:!1,style:``},loading:{enable:!0,icon:!0,text:``},useShadowRoot:!0,class:``,url:window.location.href,only:!1,zIndex:1e4,mask:{enable:!1,clickEvent:{toClose:!1,toHide:!1},clickCallBack:null},animation:`pops-anim-fadein-zoom`,position:`center`,drag:!0,dragLimit:!0,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},width:window.innerWidth<550?`88vw`:`350px`,height:window.innerHeight<450?`70vh`:`200px`,topRightButton:`min|max|mise|close`,sandbox:!1,forbiddenScroll:!1,loadEndCallBack(){},btn:{min:{callback(){}},max:{callback(){}},mise:{callback(){}},close:{callback(){}}},style:null,lightStyle:null,darkStyle:null,stopKeyDownEventPropagation:!0,emitter:null}),ht={init(e){let t=k.getRandomGUID(),n=`iframe`,r=mt();if(r=k.assign(r,h.getGlobalConfig()),r=k.assign(r,e),r.url==null)throw TypeError(`config.url must not be null.`);r=P.handleOnly(n,r);let i=r.emitter??new g(n),{$shadowContainer:a,$shadowRoot:o}=P.handlerShadow(r);P.handleInit(o,[{name:`index`,css:M.index},{name:`ninePalaceGridPosition`,css:M.ninePalaceGridPosition},{name:`scrollbar`,css:M.scrollbar},{name:`anim`,css:M.anim},{name:`common`,css:M.common},{name:`skeleton`,css:M.skeletonCSS},{name:`iframeCSS`,css:M.iframeCSS}]);let s=r.animation!=null&&r.animation!=``&&r.animation?`position:absolute;`:``,c=P.getTargerOrFunctionValue(r.zIndex),l=j.createMask(t,c,s),u=j.createHeader(n,r),d=r.title.text.trim()===``?r.url:r.title.text,{headerStyle:f,headerPStyle:p}=j.createHeaderStyle(n,r),m=j.createAnim(t,n,r,`
            <div class="pops-title pops-${n}-title pops-user-select-none" style="text-align: ${r.title.position};${f}">${r.title.html?d:`<p pops class="pops-${n}-title-text" style="${p}">${d}</p>`}${u}</div>
			<div class="pops-content pops-${n}-content">
                <div class="pops-${n}-content-global-loading"></div>
                <iframe src="${r.url}" pops ${r.sandbox?`sandbox='allow-forms allow-same-origin allow-scripts'`:``}>
                </iframe>
			</div>${r.loading.enable?`<div class="pops-loading"></div>`:``}`,``,c),_=j.parseElement(m),{$pops:v,$headerBtnClose:y,$headerControls:b,$title:x,$iframe:S,$loading:C,$contentLoading:w,$headerBtnMin:T,$headerBtnMax:ee,$headerBtnMise:E}=P.handleQueryElement(_,n),D=A.selector(`.pops-iframe-container`);D||(D=A.createElement(`div`,{className:`pops-iframe-container`}),D.style.cssText=`display: flex;position: fixed;bottom: 0px;flex-flow: wrap-reverse;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;`,A.appendBody(D));let O,te=[_];r.mask.enable&&(O=P.handleMask({type:n,guid:t,config:r,animElement:_,maskHTML:l}).maskElement,te.push(O));let ne=P.handleEventConfig(r,t,a,o,n,_,v,i,O);ne.$iframe=S;let re=P.handleResultConfig(ne);A.on(_,A.getAnimationEndNameList(),function(){_.style.width=`0%`,_.style.height=`0%`}),A.on(S,`load`,()=>{A.remove(C),w.style.animation=`iframeLoadingChange_85 0.3s forwards`,A.on(w,A.getAnimationEndNameList(),()=>{A.remove(w)}),r.title.text.trim()===``&&S.contentDocument&&(x.querySelector(`p`).innerText=S.contentDocument.title),r.loadEndCallBack(ne)}),A.append(o,te),i.emit(`pops:before-append-to-page`,o,a),D.appendChild(a),O!=null&&_.after(O),r.drag&&rt.drag(v,{dragElement:x,limit:r.dragLimit,extraDistance:r.dragExtraDistance,moveCallBack:r.dragMoveCallBack,endCallBack:r.dragEndCallBack});let ie=`type-module`,ae=``,oe=``,se=!1;return A.on(T,`click`,e=>{e.preventDefault(),e.stopPropagation(),ae=v.style.left,oe=v.style.top,A.addClassName(v,`pops-iframe-unset-top`,`pops-iframe-unset-left`,`pops-iframe-unset-transform`),v.style.transitionDuration=``,v.setAttribute(ie,`min`),b.setAttribute(`type`,`min`),ee.style.setProperty(`display`,`none`),E.style.setProperty(`display`,``),typeof r?.btn?.min?.callback==`function`&&r.btn.min.callback(ne,e),i.emit(`pops:iframe-min`,ne,e)},{capture:!0}),A.on(ee,`click`,e=>{e.preventDefault(),e.stopPropagation(),v.getAttribute(ie)!==`min`&&(ae=v.style.left,oe=v.style.top),se=!0,v.style.transitionDuration=``,v.style.transform=``,v.removeAttribute(ie),A.addClassName(v,`pops-iframe-unset-transition`,`pops-iframe-unset-left`,`pops-iframe-unset-top`,`pops-iframe-unset-transform`),A.removeClassName(v,`pops-iframe-unset-transition`),v.setAttribute(ie,`max`),b.setAttribute(`type`,`max`),ee.style.setProperty(`display`,`none`),E.style.setProperty(`display`,``),typeof r?.btn?.max?.callback==`function`&&r.btn.max.callback(ne,e),i.emit(`pops:iframe-max`,ne,e)},{capture:!0}),E?.style?.setProperty(`display`,`none`),A.on(E,`click`,e=>{e.preventDefault(),e.stopPropagation(),se&&v.getAttribute(ie)===`min`?(A.addClassName(v,`pops-iframe-unset-transition`,`pops-iframe-unset-left`,`pops-iframe-unset-top`,`pops-iframe-unset-transform`),A.removeClassName(v,`pops-iframe-unset-transition`),v.setAttribute(ie,`max`),b.setAttribute(`type`,`max`)):(se=!1,v.style.left=ae,v.style.top=oe,v.style.transitionDuration=``,v.style.transform=``,b.removeAttribute(`type`),v.removeAttribute(ie),A.removeClassName(v,`pops-iframe-unset-top`,`pops-iframe-unset-left`,`pops-iframe-unset-transform`),ee.style.setProperty(`display`,``),E.style.setProperty(`display`,`none`)),typeof r?.btn?.mise?.callback==`function`&&r.btn.mise.callback(ne,e),i.emit(`pops:iframe-mise`,ne,e)},{capture:!0}),A.on(y,`click`,async e=>{e.preventDefault(),e.stopPropagation(),await rt.removeInstance([N.iframe],t,!1),typeof r?.btn?.close?.callback==`function`&&r.btn.close.callback(ne,e)},{capture:!0}),P.handlePush(n,{guid:t,$anim:_,$pops:v,$mask:O,$shadowContainer:a,$shadowRoot:o,config:r,emitter:i}),re}},gt=()=>({title:{text:`默认标题`,position:`center`,html:!1,style:``},content:[{id:`whitesev-panel-config-1`,title:`菜单配置1`,headerTitle:`菜单配置1`,isDefault:!0,attributes:{"data-test":`test`,"data-test-2":`test2`},views:[{className:`forms-1`,text:`区域设置`,type:`container`,views:[{className:`panel-switch`,text:`switch`,type:`switch`,disabled:!1,description:``,getValue(){return!0},callback(e,t){console.log(`按钮开启状态：`,t)}},{className:`panel-slider`,text:`slider`,type:`slider`,description:``,disabled:!1,getToolTipContent(e){return String(e)},isShowHoverTip:!0,step:1,getValue(){return 50},callback(e,t){console.log(`滑块当前数值：`,t)},min:1,max:100},{className:`panel-button`,text:`button`,type:`button`,description:``,disable:!1,buttonIsRightIcon:!1,buttonIcon:`view`,buttonIconIsLoading:!0,buttonType:`default`,buttonText:`default按钮`,callback(e){console.log(`点击按钮`,e)}},{className:`panel-button`,text:`button`,type:`button`,buttonIcon:`eleme`,buttonIconIsLoading:!0,buttonType:`warning`,buttonText:`warning按钮`,callback(e){console.log(`点击按钮`,e)}},{className:`panel-button`,text:`button`,type:`button`,buttonIcon:`chromeFilled`,buttonIconIsLoading:!0,buttonType:`danger`,buttonText:`danger按钮`,callback(e){console.log(`点击按钮`,e)}},{className:`panel-button`,text:`button`,type:`button`,buttonIcon:`upload`,buttonIconIsLoading:!1,buttonType:`info`,buttonText:`info按钮`,callback(e){console.log(`点击按钮`,e)}}]}]},{id:`whitesev-panel-config-2`,title:`菜单配置2`,headerTitle:`菜单配置2`,isDefault:!1,attributes:{"data-value":`value`,"data-value-2":`value2`},views:[{className:`panel-input`,text:`input`,type:`input`,getValue(){return`50`},callback(e,t){A.preventEvent(e),console.log(`输入框内容改变：`,t)},placeholder:`请输入内容`},{className:`panel-input-number`,text:`input-number`,type:`input`,inputType:`number`,getValue(){return`50`},callback(e,t,n){if(A.preventEvent(e),console.log(`输入框内容改变：`,n),n>60)return{valid:!1,message:`输入值不能大于60，当前：`+t}},placeholder:`请输入内容`},{className:`panel-input-password`,text:`input-password`,type:`input`,inputType:`password`,placeholder:`请输入密码`,getValue(){return`123456`},callback(e,t){A.preventEvent(e),console.log(`密码输入框内容改变：`,t)}},{className:`panel-input-file`,text:`input-file`,type:`input`,inputType:`file`,getValue(){return``},callback(e,t){A.preventEvent(e),console.log(`内容改变：`,t)},placeholder:`请输入密码`},{className:`panel-input-date`,text:`input-date`,type:`input`,inputType:`date`,placeholder:`请输入内容`,getValue(){let e=new Date,t=e.getHours().toString(),n=e.getMinutes().toString();return t.length===1&&(t=`0${t}`),n.length===1&&(n=`0${n}`),`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},callback(e,t,n,r){A.preventEvent(e),console.log(`输入框内容改变：`,t,n,r)}},{className:`panel-input-datetime-local`,text:`input-datetime-local`,type:`input`,inputType:`datetime-local`,getValue(){let e=new Date,t=e.getHours().toString(),n=e.getMinutes().toString();return t.length===1&&(t=`0${t}`),n.length===1&&(n=`0${n}`),`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}T${t}:${n}`},callback(e,t,n,r){A.preventEvent(e),console.log(`输入框内容改变：`,t,n,r)},placeholder:`请输入内容`},{className:`panel-input-time`,text:`input-time`,type:`input`,inputType:`time`,getValue(){return`11:30`},callback(e,t,n,r){A.preventEvent(e),console.log(`输入框内容改变：`,t,n,r)},placeholder:`请输入内容`},{className:`panel-input-month`,text:`input-month`,type:`input`,inputType:`month`,getValue(){let e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}`},callback(e,t,n,r){A.preventEvent(e),console.log(`输入框内容改变：`,t,n,r)},placeholder:`请输入内容`},{className:`panel-input-week`,text:`input-week`,type:`input`,inputType:`week`,getValue(){return`${new Date().getFullYear()}-W01`},callback(e,t,n,r){A.preventEvent(e),console.log(`输入框内容改变：`,t,n,r)},placeholder:`请输入内容`},{className:`panel-input-search`,text:`input-search`,type:`input`,inputType:`search`,getValue(){return`search test`},callback(e,t){A.preventEvent(e),console.log(`输入框内容改变：`,t)},placeholder:`请输入内容`},{className:`panel-input-color`,text:`input-color`,type:`input`,inputType:`color`,getValue(){return`#ff0000`},callback(e,t){A.preventEvent(e),console.log(`输入框内容改变：`,t)},placeholder:`请输入内容`},{className:`panel-input-email`,text:`input-email`,type:`input`,inputType:`email`,getValue(){return`test@gmail.com`},callback(e,t){A.preventEvent(e);let n=e.target;console.log(`输入框内容改变：`,t,n.validity)},placeholder:`请输入内容`},{className:`panel-input-tel`,text:`input-tel`,type:`input`,inputType:`tel`,getValue(){return`11111111111`},callback(e,t){A.preventEvent(e);let n=e.target;console.log(`输入框内容改变：`,t,n.validity)},placeholder:`请输入内容`},{className:`panel-input-url`,text:`input-url`,type:`input`,inputType:`url`,getValue(){return`https://github.com/`},callback(e,t){A.preventEvent(e);let n=e.target;console.log(`输入框内容改变：`,t,n.validity)},placeholder:`请输入内容`},{className:`panel-textarea`,text:`textarea`,type:`textarea`,getValue(){return`50`},callback(e,t){A.preventEvent(e),console.log(`textarea输入框内容改变：`,t)},placeholder:`请输入内容`},{type:`container`,text:``,views:[{className:`panel-select-disabled`,text:`select-disabled`,type:`select`,disabled:!0,getValue(){return`text`},callback(e){e!=null&&console.log(`select当前选项：${e.value}，当前选项文本：${e.text}`)},data:[{value:`all`,text:`所有`,disable(){return!1}},{value:`text`,text:`文本`,disable(){return!1}},{value:`html`,text:`超文本`,disable(){return!1}}]},{className:`panel-select-multiple-disabled`,type:`select-multiple`,text:`select-multiple-disabled`,disabled:!0,placeholder:`请至少选择一个选项`,getValue(){return[`select-1`,`select-2`]},callback(e){console.log(`select值改变，多选信息`,e)},clickCallBack(e,t){console.log(`点击`,e,t)},closeIconClickCallBack(e,t){console.log(`点击关闭图标的事件`,t)},data:[{value:`select-1`,text:`单选1`,isHTML:!1},{value:`select-2`,text:`单选2`,isHTML:!1},{value:`select-3`,text:`单选3`,isHTML:!1},{value:`select-4`,text:`单选4`,isHTML:!1}]},{className:`panel-select-native`,text:`select-native`,type:`select`,mode:`native`,getValue(){return`all`},callback(e){e!=null&&console.log(`select当前选项：${e.value}，当前选项文本：${e.text}`)},data:[{value:`all`,text:`所有`,disable(){return!1}},{value:`text`,text:`文本`,disable(){return!1}},{value:`html`,text:`超文本`,disable(){return!1}}]},{className:`panel-select-dialog`,text:`select-dialog`,type:`select`,mode:`dialog`,getValue(){return window.localStorage.getItem(`select-dialog-customInput`)||``},callback(e){e==null?console.warn(`select当前选项为空`):e.addCustomInput?e.value===``?e.customInputStoreKey&&(console.log(`select删除自定义输入的值`),window.localStorage.removeItem(e.customInputStoreKey)):(console.log(`select当前自定义输入框内容：${e.value}，当前选项显示文本：${e.text}`),e.customInputStoreKey&&window.localStorage.setItem(e.customInputStoreKey,e.value)):console.log(`select当前选项：${e.value}，当前选项显示文本：${e.text}`)},data:[{value:`all`,text:`所有`,disable(){return!1}},{value:`text`,text:`文本`,disable(e,t){return t?.value===`all`}},{value:`html`,text:`超文本`,disable(e,t){return t?.value===`all`}},{value:`own`,text:`自定义`,disable(e,t){return t?.value===`all`}},{value:window.localStorage.getItem(`select-dialog-customInput`)||``,text:window.localStorage.getItem(`select-dialog-customInput`)||``,addCustomInput:!0,customInputStoreKey:`select-dialog-customInput`,onValid(e){return e.value===`123`?(console.error(`非规范值`),{valid:!1,message:`非规范值`}):{valid:!0}}}]},{className:`panel-select-horizontal`,text:`select-horizontal`,type:`select`,mode:`horizontal`,getValue(){return`text`},callback(e){e!=null&&console.log(`select当前选项：${e.value}，当前选项文本：${e.text}`)},data:[{value:`all`,text:`所有`,disable(){return!1}},{value:`text`,text:`文本`,disable(){return!1}},{value:`html`,text:`超文本`,disable(){return!1}},{value:`own`,text:`自定义`,disable(){return!0}}]},{className:`panel-select-multiple`,type:`select-multiple`,text:`select-multiple`,placeholder:`请至少选择一个选项`,getValue(){return[`select-1`,`select-2`]},callback(e){console.log(`select值改变，多选信息`,e)},clickCallBack(e,t){console.log(`点击`,e,t)},closeIconClickCallBack(e,t){console.log(`点击关闭图标的事件`,t)},data:[{value:`select-1`,text:`单选1`,isHTML:!1,disable(e,t){return t.findIndex(e=>[`select-5`].includes(e.value))!==-1}},{value:`select-2`,text:`单选2`,isHTML:!1,disable(e,t){return t.findIndex(e=>[`select-5`].includes(e.value))!==-1}},{value:`select-3`,text:`单选3`,isHTML:!1,disable(e,t){return t.findIndex(e=>[`select-2`,`select-5`].includes(e.value))!==-1}},{value:`select-4`,text:`单选4`,isHTML:!1,disable(e,t){return t.findIndex(e=>[`select-3`,`select-5`].includes(e.value))!==-1}},{value:`select-5`,text(e,t){return t.findIndex(e=>[`select-4`].includes(e.value))===-1?`单选5`:`单选5-禁用`},isHTML:!1,disable(e,t){return t.findIndex(e=>[`select-4`].includes(e.value))!==-1}}]}]},{type:`container`,text:`deep菜单`,views:[{type:`deepMenu`,className:`panel-deepMenu`,text:`deepMenu`,description:`二级菜单`,rightText:`自定义配置`,arrowRightIcon:!0,afterAddToUListCallBack(e,t){console.log(e,t)},clickCallBack(e,t){console.log(`进入子配置`,e,t)},views:[{className:`forms-1`,text:`区域设置`,type:`container`,views:[{className:`panel-switch`,text:`switch`,type:`switch`,getValue(){return!0},callback(e,t){console.log(`按钮开启状态：`,t)}},{className:`panel-slider`,text:`slider`,type:`slider`,getValue(){return 50},callback(e,t){console.log(`滑块当前数值：`,t)},valueTextPosition:`right`,min:1e3,max:1e4,step:1e3},{className:`panel-button`,text:`button`,type:`button`,buttonIcon:`eleme`,buttonIconIsLoading:!0,buttonType:`warning`,buttonText:`warning按钮`,callback(e){console.log(`点击按钮`,e)}},{className:`panel-button`,text:`button`,type:`button`,buttonIcon:`chromeFilled`,buttonIconIsLoading:!0,buttonType:`danger`,buttonText:`danger按钮`,callback(e){console.log(`点击按钮`,e)}},{className:`panel-button`,text:`button`,type:`button`,buttonIcon:`upload`,buttonIconIsLoading:!1,buttonType:`info`,buttonText:`info按钮`,callback(e){console.log(`点击按钮`,e)}}]}]},{type:`deepMenu`,className:`panel-deepMenu2`,text:`deepMenu2`,description:`二级菜单`,rightText:`自定义配置`,arrowRightIcon:!0,afterAddToUListCallBack(e,t){console.log(e,t)},clickCallBack(e,t){console.log(`进入子配置`,e,t)},views:[]}]},{type:`container`,isFold:!0,text:`折叠菜单`,afterAddToUListCallBack(e,t){console.log(e,t)},views:[{className:`panel-switch`,text:`switch`,type:`switch`,getValue(){return!0},callback(e,t){console.log(`按钮开启状态：`,t)}}]}]},{id:`whitesev-panel-bottom-config-1`,title:`
					<a rel="nofollow" href="https://www.npmjs.com/package/@whitesev/pops" target="_blank"><img src="https://img.shields.io/npm/v/@whitesev/pops?label=pops" alt="npm pops version"></a>
				`,isBottom:!0,disableAsideItemHoverCSS:!0,attributes:{"data-value":`value`,"data-value-2":`value2`},views:[],clickFirstCallback:function(){return!1}},{id:`whitesev-panel-bottom-config-2`,title:`版本：xxx.xx.xx`,isBottom:!0,attributes:{"data-value":`value`,"data-value-2":`value2`},views:[],clickFirstCallback:function(){return!1}}],bottomContentConfig:[],btn:{close:{enable:!0,callback(e){e.close()}}},mask:{enable:!1,clickEvent:{toClose:!1,toHide:!1},clickCallBack:null},useShadowRoot:!0,class:``,mobileClassName:`pops-panel-is-mobile`,isMobile:!1,only:!1,width:window.innerWidth<550?`88vw`:`700px`,height:window.innerHeight<450?`70vh`:`500px`,position:`center`,animation:`pops-anim-fadein-zoom`,useDeepMenuSwtichAnimation:!0,zIndex:1e4,drag:!1,dragLimit:!0,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:!1,style:null,lightStyle:null,darkStyle:null,stopKeyDownEventPropagation:!0,listenEscapeKeyUpToExitDeepMenu:!0,emitter:null}),_t={isFloat(e){return Number(e)===e&&e%1!=0},add(e,t){let n,r;try{n=e.toString().split(`.`)[1].length}catch{n=0}try{r=t.toString().split(`.`)[1].length}catch{r=0}let i=10**Math.max(n,r);return Math.round(e*i+t*i)/i},sub(e,t){let n,r;try{n=e.toString().split(`.`)[1].length}catch{n=0}try{r=t.toString().split(`.`)[1].length}catch{r=0}let i=10**Math.max(n,r),a=n>=r?n:r;return(Math.round(e*i-t*i)/i).toFixed(a)},division(e,t){let n,r;try{n=e.toString().split(`.`)[1].length}catch{n=0}try{r=t.toString().split(`.`)[1].length}catch{r=0}return Number(e.toString().replace(`.`,``))/Number(t.toString().replace(`.`,``))*10**(r-n)}},vt=()=>({useShadowRoot:!0,$target:null,content:`默认文字`,isDiffContent:!1,position:`top`,className:``,isFixed:!1,alwaysShow:!1,onShowEventName:`mouseenter touchstart`,onCloseEventName:`mouseleave touchend touchcancel`,zIndex:1e4,only:!1,eventOption:{once:!1,passive:!1,capture:!0},showBeforeCallBack(){},showAfterCallBack(){},closeBeforeCallBack(){},closeAfterCallBack(){},delayCloseTime:100,showArrow:!0,arrowDistance:12.5,otherDistance:0,style:``,lightStyle:null,darkStyle:null,emitter:null}),yt=class{$el={$shadowContainer:null,$shadowRoot:null,$toolTip:null,$content:null,$arrow:null};emitter;$data={config:null,guid:null,timeId_close_TouchEvent:[],timeId_close_MouseEvent:[]};constructor(e,t,n,r){this.emitter=r,this.$data.config=e,this.$data.guid=t,this.$el.$shadowContainer=n.$shadowContainer,this.$el.$shadowRoot=n.$shadowRoot,this.show=this.show.bind(this),this.close=this.close.bind(this),this.toolTipAnimationFinishEvent=this.toolTipAnimationFinishEvent.bind(this),this.toolTipMouseEnterEvent=this.toolTipMouseEnterEvent.bind(this),this.toolTipMouseLeaveEvent=this.toolTipMouseLeaveEvent.bind(this),this.init()}init(){let e=this.createToolTip();this.$el.$toolTip=e.$toolTipContainer,this.$el.$content=e.$toolTipContent,this.$el.$arrow=e.$toolTipArrow,this.changeContent(),this.changeZIndex(),this.changePosition(),this.$data.config.alwaysShow||(this.offEvent(),this.onEvent())}createToolTip(){let e=A.createElement(`div`,{className:`pops-tip`,innerHTML:`
				<div class="pops-tip-content" style="text-align: center;"></div>
				<div class="pops-tip-arrow"></div>
			`},{"data-position":this.$data.config.isFixed?`fixed`:`absolute`,"data-guid":this.$data.guid}),t=e.querySelector(`.pops-tip-content`),n=e.querySelector(`.pops-tip-arrow`);return A.addClassName(e,this.$data.config.className),e.style.zIndex=P.getTargerOrFunctionValue(this.$data.config.zIndex).toString(),j.addStyle(e,this.$data.config.style),j.addLightStyle(e,this.$data.config.lightStyle),j.addDarkStyle(e,this.$data.config.darkStyle),this.$data.config.showArrow||A.remove(n),{$toolTipContainer:e,$toolTipArrow:n,$toolTipContent:t}}getContent(){return typeof this.$data.config.content==`function`?this.$data.config.content():this.$data.config.content}changeContent(e){if(e??=this.getContent(),this.$data.config.isDiffContent){let t=`data-content`,n=Reflect.get(this.$el.$content,t);if(typeof n==`string`&&n===e)return;Reflect.set(this.$el.$content,t,e)}C.setSafeHTML(this.$el.$content,e)}getZIndex(){return P.getTargerOrFunctionValue(this.$data.config.zIndex)}changeZIndex(){let e=this.getZIndex();this.$el.$toolTip.style.setProperty(`z-index`,e.toString())}calcToolTipPosition(e,t,n,r){let i=A.offset(e,!this.$data.config.isFixed),a=i.width,o=i.height,s=i.top,c=i.left,l=A.outerWidth(this.$el.$toolTip),u=A.outerHeight(this.$el.$toolTip),d=c+a/2-l/2,f=s+o/2-u/2,p=0,m=0;if(r!=null){if(r instanceof MouseEvent||r instanceof PointerEvent)p=r.pageX,m=r.y;else if(r instanceof TouchEvent){let e=r.touches[0];p=e.pageX,m=e.pageY}else typeof r.clientX==`number`&&(p=r.clientX),typeof r.clientY==`number`&&(m=r.clientY)}return{TOP:{left:d-n,top:s-u-t,arrow:`bottom`,motion:`fadeInTop`},RIGHT:{left:c+a+t,top:f+n,arrow:`left`,motion:`fadeInRight`},BOTTOM:{left:d-n,top:s+o+t,arrow:`top`,motion:`fadeInBottom`},LEFT:{left:c-l-t,top:f+n,arrow:`right`,motion:`fadeInLeft`},FOLLOW:{left:p+n,top:m+n,arrow:`follow`,motion:``}}}changePosition(e){let t=this.calcToolTipPosition(this.$data.config.$target,this.$data.config.arrowDistance,this.$data.config.otherDistance,e)[this.$data.config.position.toUpperCase()];t?(this.$el.$toolTip.style.left=t.left+`px`,this.$el.$toolTip.style.top=t.top+`px`,this.$el.$toolTip.setAttribute(`data-motion`,t.motion),this.$el.$arrow.setAttribute(`data-position`,t.arrow)):console.error(`不存在该位置`,this.$data.config.position)}onEvent(){this.onToolTipAnimationFinishEvent(),this.onShowEvent(),this.onCloseEvent(),this.onToolTipMouseEnterEvent(),this.onToolTipMouseLeaveEvent()}offEvent(){this.offToolTipAnimationFinishEvent(),this.offShowEvent(),this.offCloseEvent(),this.offToolTipMouseEnterEvent(),this.offToolTipMouseLeaveEvent()}addCloseTimeoutId(e,t){e===`MouseEvent`?this.$data.timeId_close_MouseEvent.push(t):this.$data.timeId_close_TouchEvent.push(t)}clearCloseTimeoutId(e,t){let n=e===`MouseEvent`?this.$data.timeId_close_MouseEvent:this.$data.timeId_close_TouchEvent;for(let e=0;e<n.length;e++){let r=n[e];if(typeof t==`number`){if(t==r){k.clearTimeout(t),n.splice(e,1);break}}else k.clearTimeout(r),n.splice(e,1),e--}}show(...e){let t=e[0],n=t instanceof MouseEvent?`MouseEvent`:`TouchEvent`;if(this.clearCloseTimeoutId(n),typeof this.$data.config.showBeforeCallBack==`function`){let e=this.$data.config.showBeforeCallBack(this.$el.$toolTip);if(typeof e==`boolean`&&!e)return}k.contains(this.$el.$shadowRoot,this.$el.$toolTip)||(this.init(),A.append(this.$el.$shadowRoot,this.$el.$toolTip)),k.contains(this.$el.$shadowContainer)||(this.emitter.emit(`pops:before-append-to-page`,this.$el.$shadowRoot,this.$el.$shadowContainer),A.append(document.body,this.$el.$shadowContainer)),this.changeContent(),this.changePosition(t),typeof this.$data.config.showAfterCallBack==`function`&&this.$data.config.showAfterCallBack(this.$el.$toolTip)}onShowEvent(){A.on(this.$data.config.$target,this.$data.config.onShowEventName,this.show,this.$data.config.eventOption)}offShowEvent(){A.off(this.$data.config.$target,this.$data.config.onShowEventName,this.show,this.$data.config.eventOption)}close(...e){let t=e[0],n=t instanceof MouseEvent?`MouseEvent`:`TouchEvent`;if(t&&t instanceof MouseEvent){let e=t.composedPath()[0];if(e!=this.$data.config.$target&&e!=this.$el.$toolTip)return}if(typeof this.$data.config.closeBeforeCallBack==`function`){let e=this.$data.config.closeBeforeCallBack(this.$el.$toolTip);if(typeof e==`boolean`&&!e)return}(this.$data.config.delayCloseTime==null||typeof this.$data.config.delayCloseTime==`number`&&this.$data.config.delayCloseTime<=0)&&(this.$data.config.delayCloseTime=100);let r=k.setTimeout(()=>{if(this.clearCloseTimeoutId(n,r),this.$el.$toolTip==null)return;let e=this.$el.$toolTip.getAttribute(`data-motion`);e==null||e.trim()===``?this.toolTipAnimationFinishEvent():this.$el.$toolTip.setAttribute(`data-motion`,this.$el.$toolTip.getAttribute(`data-motion`).replace(`fadeIn`,`fadeOut`))},this.$data.config.delayCloseTime);this.addCloseTimeoutId(n,r),typeof this.$data.config.closeAfterCallBack==`function`&&this.$data.config.closeAfterCallBack(this.$el.$toolTip)}onCloseEvent(){A.on(this.$data.config.$target,this.$data.config.onCloseEventName,this.close,this.$data.config.eventOption)}offCloseEvent(){A.off(this.$data.config.$target,this.$data.config.onCloseEventName,this.close,this.$data.config.eventOption)}destory(){this.$el.$toolTip&&A.remove(this.$el.$toolTip),this.$el.$toolTip=null,this.$el.$arrow=null,this.$el.$content=null}toolTipAnimationFinishEvent(){this.$el.$toolTip&&(this.$el.$toolTip.getAttribute(`data-motion`).includes(`In`)||this.destory())}onToolTipAnimationFinishEvent(){A.on(this.$el.$toolTip,A.getAnimationEndNameList(),this.toolTipAnimationFinishEvent)}offToolTipAnimationFinishEvent(){A.off(this.$el.$toolTip,A.getAnimationEndNameList(),this.toolTipAnimationFinishEvent)}toolTipMouseEnterEvent(){this.clearCloseTimeoutId(`MouseEvent`),this.clearCloseTimeoutId(`TouchEvent`)}onToolTipMouseEnterEvent(){this.clearCloseTimeoutId(`MouseEvent`),this.clearCloseTimeoutId(`TouchEvent`),A.on(this.$el.$toolTip,`mouseenter touchstart`,this.toolTipMouseEnterEvent,this.$data.config.eventOption)}offToolTipMouseEnterEvent(){A.off(this.$el.$toolTip,`mouseenter touchstart`,this.toolTipMouseEnterEvent,this.$data.config.eventOption)}toolTipMouseLeaveEvent(e){this.close(e)}onToolTipMouseLeaveEvent(){A.on(this.$el.$toolTip,`mouseleave touchend touchcancel`,this.toolTipMouseLeaveEvent,this.$data.config.eventOption)}offToolTipMouseLeaveEvent(){A.off(this.$el.$toolTip,`mouseleave touchend touchcancel`,this.toolTipMouseLeaveEvent,this.$data.config.eventOption)}},bt={init(e){let t=k.getRandomGUID(),n=`tooltip`,r=vt();if(r=k.assign(r,h.getGlobalConfig()),r=k.assign(r,e),!(r.$target instanceof HTMLElement))throw TypeError(`config.target 必须是HTMLElement类型`);if(r=P.handleOnly(n,r),r.position===`follow`){r.onShowEventName=r.onShowEventName.trim();let e=r.onShowEventName.split(` `);[`mousemove`,`touchmove`].forEach(t=>{e.includes(t)||(r.onShowEventName+=` ${t}`)})}let i=r.emitter??new g(n),{$shadowContainer:a,$shadowRoot:o}=P.handlerShadow(r);P.handleInit(o,[{name:`index`,css:M.index},{name:`anim`,css:M.anim},{name:`common`,css:M.common},{name:`skeleton`,css:M.skeletonCSS},{name:`tooltipCSS`,css:M.tooltipCSS}]);let s=new yt(r,t,{$shadowContainer:a,$shadowRoot:o},i);return r.alwaysShow&&s.show(),{guid:t,config:r,$shadowContainer:a,$shadowRoot:o,toolTip:s,emitter:i}}},xt=()=>({asideULElement:null,asideBottomULElement:null,sectionContainerHeaderULElement:null,sectionContainerULElement:null,$el:{$pops:null,$content:null,$panelRightSectionWrapper:null,$panelLeftAside:null,$panelContentSectionContainer:null,$panelBottomWrapper:null,$panelBottomContainer:null,$panelBottomLeftContainer:null,$panelBottomRightContainer:null},$data:{nodeStoreConfigKey:`data-view-config`},$config:{},emitter:null,init(e){let t=`panel`;this.$el={...e.$el},this.$config=e.config,this.emitter=e.emitter,this.asideULElement=this.$el.$panelLeftAside.querySelector(`ul.pops-${t}-aside-top-container`),this.asideBottomULElement=this.$el.$panelLeftAside.querySelector(`ul.pops-${t}-aside-bottom-container`),this.sectionContainerHeaderULElement=this.$el.$panelContentSectionContainer.querySelector(`ul.pops-${t}-container-header-ul`),this.sectionContainerULElement=this.$el.$panelContentSectionContainer.querySelector(`ul.pops-${t}-container-main-ul`);let n=null,r=!1;e.config.content.forEach(e=>{let t=this.createAsideItem(e);if(this.onAsideItemClick(t,e),(typeof e.isBottom==`function`?e.isBottom():e.isBottom)?this.asideBottomULElement.appendChild(t):this.asideULElement.appendChild(t),n==null){let i=!1;i=typeof e.isDefault==`function`?!!e.isDefault():!!e.isDefault,i&&(n=t,r=!!e.scrollToDefaultView)}typeof e.afterRender==`function`&&e.afterRender({asideConfig:e,$asideLiElement:t})}),(e.config?.bottomContentConfig||[]).forEach(e=>{let t=this.createBottomItem(e);if(this.onBottomItemClick(t,e),e.position===`left`||e.position==null)this.$el.$panelBottomLeftContainer.appendChild(t);else if(e.position===`right`)this.$el.$panelBottomRightContainer.appendChild(t);else throw Error(`pops.panel：bottomContentConfig.position参数错误`);typeof e.afterRender==`function`&&e.afterRender({$bottomWrapper:this.$el.$panelBottomWrapper,$bottomContainer:this.$el.$panelBottomContainer,$bottomLeftContainer:this.$el.$panelBottomLeftContainer,$bottomRightContainer:this.$el.$panelBottomRightContainer})}),n==null&&this.asideULElement.children.length&&(n=this.asideULElement.children[0]),n?(n.click(),r&&n?.scrollIntoView()):console.error(`pops.panel：左侧容器没有项`)},clearContainer(){Reflect.deleteProperty(this.$el.$panelContentSectionContainer,this.$data.nodeStoreConfigKey),C.setSafeHTML(this.sectionContainerHeaderULElement,``),C.setSafeHTML(this.sectionContainerULElement,``),this.clearDeepMenuContainer()},clearDeepMenuContainer(){this.$el.$panelRightSectionWrapper?.querySelectorAll(`section.pops-panel-deepMenu-container`).forEach(e=>A.remove(e))},clearAsideItemIsVisited(){this.$el.$panelLeftAside.querySelectorAll(`.pops-is-visited`).forEach(e=>{A.removeClassName(e,`pops-is-visited`)})},setAsideItemIsVisited(e){A.addClassName(e,`pops-is-visited`)},setElementAttributes(e,t){t!=null&&(Array.isArray(t)?t.forEach(t=>{this.setElementAttributes(e,t)}):Object.keys(t).forEach(n=>{e.setAttribute(n,t[n])}))},setElementProps(e,t){typeof t==`object`&&t&&Object.keys(t).forEach(n=>{let r=t[n];n===`innerHTML`?C.setSafeHTML(e,r):Reflect.set(e,n,r)})},setElementClassName(e,t){A.addClassName(e,t)},createBottomItem(e){let t=typeof e.text==`function`?e.text():e.text,n=Array.isArray(e.className)?e.className.join(` `):e.className||``,r=A.createElement(`li`,{className:[`pops-panel-bottom-item`,`pops-user-select-none`,n].join(` `),innerHTML:t});this.setElementAttributes(r,e.attributes),this.setElementProps(r,e.props);let i=`pops-panel-disable-bottom-item-hover-css`;return(typeof e.disableHoverCSS==`function`?e.disableHoverCSS():e.disableHoverCSS)?A.addClassName(r,i):A.removeClassName(r,i),r},onBottomItemClick(e,t){A.on(e,`click`,async e=>{if(typeof t.clickCallback==`function`){let n=await t.clickCallback(e);if(typeof n==`boolean`&&!n)return}})},createAsideItem(e){let t=typeof e.title==`function`?e.title():e.title,n=A.createElement(`li`,{id:e.id,innerHTML:t});Reflect.set(n,`__forms__`,e.views),this.setElementClassName(n,`pops-panel-aside-item`),this.setElementClassName(n,e.className),this.setElementAttributes(n,e.attributes),this.setElementProps(n,e.props);let r=`pops-panel-disabled-aside-hover-css`;return(typeof e.disableAsideItemHoverCSS==`function`?e.disableAsideItemHoverCSS():e.disableAsideItemHoverCSS)?A.addClassName(n,r):A.removeClassName(n,r),n},createSectionContainerItem_switch(e){let t=A.createElement(`li`);Reflect.set(t,this.$data.nodeStoreConfigKey,e),this.setElementClassName(t,e.className),this.setElementAttributes(t,e.attributes),this.setElementProps(t,e.props);let n=``;e.description&&(n=`<p class="pops-panel-item-left-desc-text">${e.description}</p>`),C.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${e.text}</p>${n}</div>
				<div class="pops-panel-switch">
					<input class="pops-panel-switch__input" type="checkbox">
					<span class="pops-panel-switch__core">
						<div class="pops-panel-switch__action">
						</div>
					</span>
				</div>`);let r={[Symbol.toStringTag]:`PopsPanelSwitch`,$data:{value:!!e.getValue()},$ele:{itemLeftTextContainer:t.querySelector(`.pops-panel-item-left-text`),switch:t.querySelector(`.pops-panel-switch`),input:t.querySelector(`.pops-panel-switch__input`),core:t.querySelector(`.pops-panel-switch__core`)},init(){this.setStatus(this.$data.value),(typeof e.disabled==`function`?e.disabled():e.disabled)&&this.disable(),this.onClick()},onClick(){A.on(this.$ele.core,`click`,async t=>{if(this.$ele.input.disabled||this.$ele.switch.hasAttribute(`data-disabled`))return;let n=this.getStatus();if(typeof e.beforeSwitchStatusChangeCallBack==`function`){let r=await e.beforeSwitchStatusChangeCallBack(t,n);if(typeof r==`boolean`&&!r)return}this.$data.value=!n,this.setStatus(this.$data.value),typeof e.callback==`function`&&await e.callback(t,this.$data.value)})},setStatus(e=!1){e=!!e,this.$ele.input.checked=e,e?A.addClassName(this.$ele.switch,`pops-panel-switch-is-checked`):A.removeClassName(this.$ele.switch,`pops-panel-switch-is-checked`)},getReverseStatus(){return!this.getStatus()},getStatus(){let e=!1;return A.containsClassName(this.$ele.switch,`pops-panel-switch-is-checked`)&&(e=!0),e},disable(){this.$ele.input.disabled=!0,this.$ele.switch.setAttribute(`data-disabled`,`true`),A.addClassName(this.$ele.itemLeftTextContainer,v.textIsDisabled)},notDisable(){this.$ele.input.disabled=!1,this.$ele.switch.removeAttribute(`data-disabled`),A.removeClassName(this.$ele.itemLeftTextContainer,v.textIsDisabled)}};return r.init(),Reflect.set(t,`data-switch`,r),{$el:t,handler:r}},createSectionContainerItem_slider(e){let t=A.createElement(`li`);Reflect.set(t,this.$data.nodeStoreConfigKey,e),this.setElementClassName(t,e.className),this.setElementAttributes(t,e.attributes),this.setElementProps(t,e.props);let n=``;e.description&&(n=`<p class="pops-panel-item-left-desc-text">${e.description}</p>`),C.setSafeHTML(t,`
				<div class="pops-panel-item-left-text" style="flex: 1;">
					<p class="pops-panel-item-left-main-text">${e.text}</p>${n}</div>
				<div class="pops-slider pops-slider-width">
					<div class="pops-slider__runway">
						<div class="pops-slider__bar" style="width: 0%; left: 0%"></div>
						<div class="pops-slider__button-wrapper" style="left: 0%">
							<div class="pops-slider__button"></div>
						</div>
					</div>
				</div>`);let r={[Symbol.toStringTag]:`PopsPanelSlider`,value:e.getValue(),min:e.min,max:e.max,step:e.step||1,$data:{isMove:!1,isInitDragPosition:!1,isCheckingStopDragMove:!1,totalWidth:0,stepPx:0,dragWidth:0,dragPercent:0,stepBlockMap:new Map,tooltip:null},$ele:{itemLeftTextContainer:t.querySelector(`.pops-panel-item-left-text`),slider:t.querySelector(`.pops-slider`),runAway:t.querySelector(`.pops-slider__runway`),valueText:null,bar:t.querySelector(`.pops-slider__bar`),buttonWrapper:t.querySelector(`.pops-slider__button-wrapper`),button:t.querySelector(`.pops-slider__button`)},$interval:{isCheck:!1},$tooltip:null,init(){this.initEleData(),this.initSliderValueText(),this.setToolTipEvent(),this.setPanEvent(),this.onRunAwayClick(),this.intervalInit(),this.isDisabledDragWithConfig()&&this.disableDrag()},intervalInit(e=200,t=1e4){if(this.$interval.isCheck)return;this.$interval.isCheck=!0;let n=!1,r=this.$data.totalWidth,i,a=setInterval(()=>{n?(this.$interval.isCheck=!1,clearTimeout(i),clearInterval(a)):(this.initTotalWidth(),this.$data.totalWidth!==0&&(n=!0,this.$data.totalWidth!==r&&(_t.isFloat(this.step)?this.initFloatStepMap():this.initStepMap(),this.initSliderPosition())))},e);i=setTimeout(()=>{clearInterval(a)},t)},initEleData(){this.$ele.slider.setAttribute(`data-min`,this.min.toString()),this.$ele.slider.setAttribute(`data-max`,this.max.toString()),this.$ele.slider.setAttribute(`data-value`,this.value.toString()),this.$ele.slider.setAttribute(`data-step`,this.step.toString()),Reflect.set(this.$ele.slider,`data-min`,this.min),Reflect.set(this.$ele.slider,`data-max`,this.max),Reflect.set(this.$ele.slider,`data-value`,this.value),Reflect.set(this.$ele.slider,`data-step`,this.step)},initSliderValueText(){if(!(typeof e.isShowValueText==`function`?e.isShowValueText():e.isShowValueText??!1))return;let t=typeof e.getShowValueText==`function`?e.getShowValueText(this.value):this.value.toString(),n=typeof e.valueTextWidth==`function`?e.valueTextWidth(this.value):e.valueTextWidth??`2em`,r=A.createElement(`div`,{className:`pops-slider__value_text`,textContent:t});A.css(r,`width`,n);let i=e.valueTextPosition??`left`;if(i==`left`)A.before(this.$ele.runAway,r);else if(i==`right`)A.after(this.$ele.runAway,r);else throw Error(`valueTextPosition is not support`);this.$ele.valueText=r},initTotalWidth(){this.$data.totalWidth=A.width(this.$ele.runAway)},initStepMap(){let e=0,t=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/t;let n=0;for(let t=this.min;t<=this.max;t+=this.step){let r=this.formatValue(t),i;i=r===this.min?{value:r,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:{value:r,px:n,pxLeft:n-this.$data.stepPx/2,pxRight:n+this.$data.stepPx/2,percent:n/this.$data.totalWidth},this.$data.stepBlockMap.set(e,i),e++,n+=this.$data.stepPx}},initFloatStepMap(){let e=0,t=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/t;let n=0;for(let t=this.min;t<=this.max;t=_t.add(t,this.step)){let r=this.formatValue(t),i;i=r===this.min?{value:r,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:{value:r,px:n,pxLeft:n-this.$data.stepPx/2,pxRight:n+this.$data.stepPx/2,percent:n/this.$data.totalWidth},this.$data.stepBlockMap.set(e,i),e++,n+=this.$data.stepPx}},initSliderPosition(){let e=0;for(let[,t]of this.$data.stepBlockMap.entries())if(t.value==this.value){e=t.percent,this.$data.dragWidth=t.px;break}e=this.formatValue(e*100),this.setSliderPosition(e)},isFloat(e){return Number(e)===e&&e%1!=0},valueChangeCallBack(t,n){typeof e.callback==`function`&&e.callback(t,n)},getDragInfo(e){let t=this.$data.stepBlockMap.get(0);for(let[,n]of this.$data.stepBlockMap.entries())if(n.pxLeft<=e&&e<n.pxRight){t=n;break}return t},getSliderPositonPercent(e){return e/this.$data.totalWidth},formatValue(e){return e=_t.isFloat(this.step)?parseFloat(e.toFixed(2)):parseInt(e.toString()),e},setSliderPosition(e){parseInt(e.toString())===1&&(e=1),e>1&&(e/=100),this.$ele.buttonWrapper.style.left=`${e*100}%`,this.$ele.bar.style.width=`${e*100}%`},disableDrag(){A.addClassName(this.$ele.runAway,`pops-slider-is-disabled`),A.addClassName(this.$ele.runAway,v.textIsDisabled)},allowDrag(){A.removeClassName(this.$ele.runAway,`pops-slider-is-disabled`),A.removeClassName(this.$ele.runAway,v.textIsDisabled)},isDisabledDrag(){return A.containsClassName(this.$ele.runAway,`pops-slider-is-disabled`)},isDisabledDragWithConfig(){let t=typeof e.disabled==`function`?e.disabled():e.disabled;return typeof t==`boolean`&&t},onRunAwayClick(){A.on(this.$ele.runAway,`click`,e=>{if(e.target!==this.$ele.runAway&&e.target!==this.$ele.bar)return;let t=parseFloat(e.offsetX.toString());this.dragStartCallBack()&&(this.dragMoveCallBack(e,t,this.value),this.dragEndCallBack(t))},{capture:!1})},dragStartCallBack(){return this.isDisabledDragWithConfig()?(this.disableDrag(),!1):(this.$data.isMove||(this.isDisabledDrag()&&this.allowDrag(),this.$data.isMove=!0),!0)},dragMoveCallBack(e,t,n){let r=0;if(t<=0)r=0,this.value=this.min;else if(t>=this.$data.totalWidth)r=1,this.value=this.max;else{let e=this.getDragInfo(t);r=e.percent,this.value=this.formatValue(e.value)}this.$data.dragPercent=r,this.setSliderPosition(this.$data.dragPercent),this.showToolTip(),this.updateValueText(),n!==this.value&&this.valueChangeCallBack(e,this.value)},dragEndCallBack(e){this.$data.isMove=!1,e<=0?this.$data.dragWidth=0:e>=this.$data.totalWidth?this.$data.dragWidth=this.$data.totalWidth:this.$data.dragWidth=e,this.closeToolTip()},updateValueText(){if(!this.$ele.valueText)return;let t=typeof e.getShowValueText==`function`?e.getShowValueText(this.value):this.value.toString();this.$ele.valueText.textContent=t},setPanEvent(){let e=k.AnyTouch();this.$tooltip=new e(this.$ele.button,{preventDefault(){return!1}});let t=0;this.$tooltip.on(`at:move`,e=>{if(!this.dragStartCallBack())return;let n=this.value,r=this.$ele.runAway.getBoundingClientRect(),i=e.x-(r.left+globalThis.screenX);i<=0?i=0:i>=r.width&&(i=r.width),t=i,this.dragMoveCallBack(e,t,n)}),this.$tooltip.on(`at:end`,()=>{this.dragEndCallBack(t)})},showToolTip(){this.$data.tooltip.toolTip.show()},closeToolTip(){this.$data.tooltip.toolTip.close()},checkStopDragMove(){if(this.$data.isCheckingStopDragMove)return;this.$data.isCheckingStopDragMove=!0;let e=setInterval(()=>{this.$data.isMove||(this.$data.isCheckingStopDragMove=!1,this.closeToolTip(),clearInterval(e))},200);setTimeout(()=>{this.$data.isCheckingStopDragMove=!1,clearInterval(e)},2e3)},setToolTipEvent(){function t(){return typeof e.getToolTipContent==`function`?e.getToolTipContent(r.value):r.value.toString()}let n=bt.init({$target:this.$ele.button,content:t,zIndex:()=>k.getMaxZIndexNodeInfoFromPoint(this.$ele.button)[0].zIndex,isFixed:!0,className:`github-tooltip`,only:!1,eventOption:{capture:!0,passive:!0},showBeforeCallBack:()=>{if(!(typeof e.isShowHoverTip==`function`?e.isShowHoverTip():typeof e.isShowHoverTip!=`boolean`||e.isShowHoverTip))return!1;this.intervalInit()},showAfterCallBack:()=>{n.toolTip.changeContent(t())},closeBeforeCallBack:()=>{if(this.$data.isMove)return this.checkStopDragMove(),!1},alwaysShow:!1,position:`top`,arrowDistance:10});this.$data.tooltip=n}};return r.init(),Reflect.set(t,`data-slider`,r),{$el:t,handler:r}},createSectionContainerItem_input(e){let t=A.createElement(`li`);Reflect.set(t,this.$data.nodeStoreConfigKey,e),this.setElementClassName(t,e.className),this.setElementAttributes(t,e.attributes),this.setElementProps(t,e.props);let n=`text`,r=e.inputType||n,i=``;e.description&&(i=`<p class="pops-panel-item-left-desc-text">${e.description}</p>`),C.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${e.text}</p>${i}</div>
				<div class="pops-panel-input">
          <div class="pops-panel-input_inner">
					  <input type="${r}" placeholder="${e.placeholder??``}">
          </div>
				</div>
				`);let a={[Symbol.toStringTag]:`PopsPanelInput`,$el:{itemLeftTextContainer:t.querySelector(`.pops-panel-item-left-text`),panelInput:t.querySelector(`.pops-panel-input`),panelInputInner:t.querySelector(`.pops-panel-input_inner`),input:t.querySelector(`input`),suffix:A.createElement(`span`),suffixInner:null,icon:null},$data:{value:e.getValue(),isVisible:!1},init(){this.initEle(),this.setInputValue(this.$data.value),e.inputType===`password`?(this.setCircleIcon(_.getIcon(`view`)),this.onIconClick()):this.$el.input.value!=``&&this.isTextInputType()?(this.setCircleIcon(_.getIcon(`circleClose`)),this.onIconClick()):this.hideCircleIconWrapper(),this.onValueChange(),(typeof e.disabled==`function`?e.disabled():e.disabled)&&this.disable(),typeof e.handlerCallBack==`function`&&e.handlerCallBack(t,this.$el.input)},initEle(){this.$el.input.parentElement.insertBefore(this.$el.suffix,this.$el.input.nextSibling),A.addClassName(this.$el.suffix,`pops-panel-input__suffix`),C.setSafeHTML(this.$el.suffix,`
						<span class="pops-panel-input__suffix-inner">
							<i class="pops-panel-icon"></i>
						</span>
					`),this.$el.suffixInner=this.$el.suffix.querySelector(`.pops-panel-input__suffix-inner`),this.$el.icon=this.$el.suffix.querySelector(`.pops-panel-icon`),A.addClassName(this.$el.panelInput,v.userSelectNone)},isTextInputType(){return[`text`,`search`,`email`,`tel`,`url`].includes(e.inputType||n)},isDateInputType(){return[`date`,`datetime-local`,`month`,`time`,`week`].includes(e.inputType||n)},isNumberInputType(){return[`number`].includes(e.inputType||n)},disable(){this.$el.input.disabled=!0,A.addClassName(this.$el.panelInput,`pops-input-disabled`),A.addClassName(this.$el.itemLeftTextContainer,v.textIsDisabled)},notDisable(){this.$el.input.disabled=!1,A.removeClassName(this.$el.panelInput,`pops-input-disabled`),A.removeClassName(this.$el.itemLeftTextContainer,v.textIsDisabled)},isDisabled(){return this.$el.input.disabled},setInputValue(e=``){typeof e==`number`&&this.isNumberInputType()?this.$el.input.valueAsNumber=e:typeof e==`object`&&e instanceof Date&&this.isDateInputType()?this.$el.input.valueAsDate=e:this.$el.input.value=e.toString()},setInputType(e=`text`){this.$el.input.setAttribute(`type`,e)},removeCircleIcon(){C.setSafeHTML(this.$el.icon,``)},setCircleIcon(e=_.getIcon(`circleClose`)){C.setSafeHTML(this.$el.icon,e)},hideCircleIconWrapper(){A.cssHide(this.$el.suffix,!0)},showCircleIconWrapper(){A.cssShow(this.$el.suffix)},onIconClick(){A.on(this.$el.icon,`click`,e=>{A.preventEvent(e),this.isDisabled()||(this.removeCircleIcon(),r===`password`?this.$data.isVisible?(this.$data.isVisible=!1,this.setInputType(`text`),this.setCircleIcon(_.getIcon(`hide`))):(this.$data.isVisible=!0,this.setInputType(`password`),this.setCircleIcon(_.getIcon(`view`))):(this.setInputValue(``),this.$el.input.focus(),this.$el.input.dispatchEvent(new Event(`input`))))})},onValueChange(){A.on(this.$el.input,[`input`,`propertychange`],t=>{if(this.$data.value=this.$el.input.value,r!==`password`&&(this.$el.input.value!==``&&this.$el.icon.innerHTML===``&&this.isTextInputType()?(this.setCircleIcon(_.getIcon(`circleClose`)),this.onIconClick(),this.showCircleIconWrapper()):this.$el.input.value===``&&this.removeCircleIcon()),typeof e.callback==`function`){let n;n=e.inputType===`number`?e.callback(t,this.$el.input.value,this.$el.input.valueAsNumber):this.isDateInputType()?e.callback(t,this.$el.input.value,this.$el.input.valueAsNumber,this.$el.input.valueAsDate):e.callback(t,this.$el.input.value),n?n.valid?this.removeValidErrorMsg():this.addValidErrorMsg(n.message):this.removeValidErrorMsg()}})},emitValueChange(){this.$el.input.dispatchEvent(new Event(`input`))},addValidErrorMsg(e){if(e==null)return;let t=this.$el.panelInput.querySelector(`.pops-panel-input-valid-error`)||A.createElement(`div`,{className:`pops-panel-input-valid-error`,innerHTML:`<span></span>`}),n=t.querySelector(`span`);n.innerHTML!==e&&C.setSafeHTML(n,e),t.parentElement||A.after(this.$el.panelInputInner,t)},removeValidErrorMsg(){let e=this.$el.panelInput.querySelector(`.pops-panel-input-valid-error`);A.remove(e)}};return a.init(),Reflect.set(t,`data-input`,a),{$el:t,handler:a}},createSectionContainerItem_textarea(e){let t=A.createElement(`li`);Reflect.set(t,this.$data.nodeStoreConfigKey,e),this.setElementClassName(t,e.className),this.setElementAttributes(t,e.attributes),this.setElementProps(t,e.props);let n=``;e.description&&(n=`<p class="pops-panel-item-left-desc-text">${e.description}</p>`),C.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${e.text}</p>${n}</div>
				<div class="pops-panel-textarea">
					<textarea placeholder="${e.placeholder??``}"></textarea>
				</div>
			`);let r={[Symbol.toStringTag]:`PopsPanelTextArea`,$ele:{itemLeftTextContainer:t.querySelector(`.pops-panel-item-left-text`),panelTextarea:t.querySelector(`.pops-panel-textarea`),textarea:t.querySelector(`.pops-panel-textarea textarea`)},$data:{value:e.getValue()},init(){this.setValue(this.$data.value),this.onValueChange(),(typeof e.disabled==`function`?e.disabled():e.disabled)&&this.disable()},disable(){this.$ele.textarea.setAttribute(`disabled`,`true`),A.addClassName(this.$ele.panelTextarea,`pops-panel-textarea-disable`),A.addClassName(this.$ele.itemLeftTextContainer,v.textIsDisabled)},notDisable(){this.$ele.textarea.removeAttribute(`disabled`),A.removeClassName(this.$ele.panelTextarea,`pops-panel-textarea-disable`),A.removeClassName(this.$ele.itemLeftTextContainer,v.textIsDisabled)},isDisabled(){return this.$ele.textarea.hasAttribute(`disabled`)||A.containsClassName(this.$ele.panelTextarea,`pops-panel-textarea-disable`)},setValue(e){this.$ele.textarea.value=e},onValueChange(){A.on(this.$ele.textarea,[`input`,`propertychange`],t=>{let n=this.$ele.textarea.value;this.$data.value=n,typeof e.callback==`function`&&e.callback(t,n)})}};return r.init(),Reflect.set(t,`data-textarea`,r),{$el:t,handler:r}},createSectionContainerItem_select(e){let t=this,n=A.createElement(`li`);Reflect.set(n,this.$data.nodeStoreConfigKey,e),this.setElementClassName(n,e.className),this.setElementAttributes(n,e.attributes),this.setElementProps(n,e.props);let r=``;e.description&&(r=`<p class="pops-panel-item-left-desc-text">${e.description}</p>`),C.setSafeHTML(n,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${e.text}</p>${r}</div>
				<div class="pops-panel-select">
					<select></select>
				</div>
				`);let i=n.querySelector(`.pops-panel-item-left-text`),a=n.querySelector(`.pops-panel-select`),o=n.querySelector(`.pops-panel-select select`),s=(typeof e.width==`number`?`${e.width}px`:e.width)??`200px`;A.css(a,`width`,s);let c=e.mode??`native`,l;if(c===`native`){let r={[Symbol.toStringTag]:`PopsPanelSelectNative`,$el:{itemLeftTextContainer:i,$container:a,$select:o},$eleKey:{disable:`__disable__`,value:`__value__`,viewConfig:`data-view-config`},$data:{data:[],defaultValue:e.getValue()},init(){this.$el.$container.setAttribute(`data-mode`,c),this.$data.data=typeof e.data==`function`?e.data():e.data,A.addClassName(this.$el.$container,v.userSelectNone),this.initOption(),this.onValueChange(),this.onClick(),(typeof e.disabled==`function`?e.disabled():e.disabled)&&this.disable()},setNodeValue(e,t,n){Reflect.set(e,t,n)},getNodeValue(e,t){return Reflect.get(e,t)},disable(){this.$el.$select.setAttribute(`disabled`,`true`),A.addClassName(this.$el.$container,`pops-panel-select-disable`),A.addClassName(this.$el.itemLeftTextContainer,v.textIsDisabled)},notDisable(){this.$el.$select.removeAttribute(`disabled`),A.removeClassName(this.$el.$container,`pops-panel-select-disable`),A.removeClassName(this.$el.itemLeftTextContainer,v.textIsDisabled)},isDisabled(){return this.$el.$select.hasAttribute(`disabled`)||A.containsClassName(this.$el.$container,`pops-panel-select-disable`)},initOption(){this.$data.data.forEach(e=>{let t=A.createElement(`option`);this.setNodeValue(t,this.$eleKey.value,e.value),this.setNodeValue(t,this.$eleKey.disable,e.disable),this.setNodeValue(t,this.$eleKey.viewConfig,e.views),e.value===this.$data.defaultValue&&this.setOptionSelected(t),t.innerText=typeof e.text==`function`?e.text(e.value,e):e.text,this.$el.$select.appendChild(t)})},setOptionSelected(e){e.setAttribute(`selected`,`true`)},setSelectOptionsDisableStatus(){this.$el.$select.options&&this.$el.$select.options.length&&Array.from(this.$el.$select.options).forEach(e=>{this.setOptionDisableStatus(e)})},setOptionDisableStatus(e){let t=!1,n=this.getNodeValue(e,this.$eleKey.disable);n===`function`&&(t=!!n(this.getNodeValue(e,this.$eleKey.value))),t?e.setAttribute(`disabled`,`true`):e.removeAttribute(`disabled`)},getSelectOptionInfo(e){return{value:this.getNodeValue(e,this.$eleKey.value),text:e.innerText||e.textContent,views:this.getNodeValue(e,this.$eleKey.viewConfig),$option:e}},onValueChange(){A.on(this.$el.$select,`change`,()=>{let r=this.$el.$select[this.$el.$select.selectedIndex],i=this.getSelectOptionInfo(r);this.setSelectOptionsDisableStatus(),typeof e.callback==`function`&&e.callback(i);let a=typeof i.views==`function`?i.views():i.views;if(Array.isArray(a)){let r=`pops-panel-select-child-forms`;for(;n.nextElementSibling&&A.containsClassName(n.nextElementSibling,r);)A.remove(n.nextElementSibling);let i=A.createElement(`ul`);i.className=r,A.after(n,i),t.uListContainerAddItem(e,{ulElement:i})}})},onClick(){A.on(this.$el.$select,`click`,t=>{if(this.setSelectOptionsDisableStatus(),typeof e.clickCallBack==`function`){let n=this.$el.$select[this.$el.$select.selectedIndex],r=this.getSelectOptionInfo(n);e.clickCallBack(t,r)}})}};r.init(),Reflect.set(n,`data-select`,r),l=r}else if(c===`dialog`){let r={[Symbol.toStringTag]:`PopsPanelSelect`,$el:{$itemLeftContainer:i,$container:void 0,$wrapper:void 0,$section:void 0,$selectedInputWrapper:void 0,$selectedPlaceHolderWrapper:void 0,$suffix:void 0,$suffixIcon:void 0,$selectDialogContainer:void 0},$data:{data:[],defaultValue:e.getValue(),selectedData:void 0,isValidSuccess:!0,rotateKey:`data-show-option`},init(){this.initDefault(),this.initEl(),this.initPlaceHolder(),this.renderSelectText(),this.onShowSelectDialogClick(),(typeof e.disabled==`function`?e.disabled():e.disabled)&&this.disable()},initDefault(){this.$data.data=typeof e.data==`function`?e.data():e.data,this.$data.data.forEach(e=>{this.$data.defaultValue.includes(e.value)&&(this.resetCurrentSelectedInfo(),this.updateSelectedInfo(e))})},initEl(){this.$el.$container=a,this.$el.$container.setAttribute(`data-mode`,c),C.setSafeHTML(this.$el.$container,`
              <div class="el-select__wrapper">
                <div class="el-select__selection">
                  <!-- 这个是用于手动输入的，这里暂不适配 -->
                  <div class="el-select__selected-item el-select__input-wrapper"></div>
                  <!-- 这个是placeholder -->
                  <div class="el-select__selected-item el-select__placeholder"></div>
                </div>
                <!-- 下拉箭头 -->
                <div class="el-select__suffix">
                  <i class="el-icon el-select__caret el-select__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                      <path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
                    </svg>
                  </i>
                </div>
              </div>`),this.$el.$wrapper=n.querySelector(`.el-select__wrapper`),this.$el.$section=n.querySelector(`.el-select__selection`),this.$el.$selectedInputWrapper=n.querySelector(`.el-select__selected-item.el-select__input-wrapper`),this.$el.$selectedPlaceHolderWrapper=n.querySelector(`.el-select__selected-item.el-select__placeholder`),this.$el.$suffix=n.querySelector(`.el-select__suffix`),this.$el.$suffixIcon=n.querySelector(`.el-select__suffix .el-icon`),this.hideInputWrapper()},initPlaceHolder(){let t=`--请选择--`;if(typeof e.placeholder==`string`)t=e.placeholder;else if(typeof e.placeholder==`function`){let n=e.placeholder();typeof n==`string`&&(t=n)}this.$el.$section.setAttribute(`data-selected-text-align`,e.selectedTextAlign||`left`);let n=A.createElement(`span`,{innerText:t});this.$el.$selectedPlaceHolderWrapper.appendChild(n)},renderSelectText(){let e=this.$data.data.find(e=>e.value===this.$data.selectedData?.value);if(e==null&&this.$data.selectedData&&this.$data.selectedData.addCustomInput&&(e=this.$data.selectedData),e!=null){let t=typeof e.text==`function`?e.text(e.value,e):e.text;e.isHTML?C.setSafeHTML(this.$el.$selectedInputWrapper,t):C.setSafeHTML(this.$el.$selectedInputWrapper,`
                  <span>${t}</span>
                `),this.showInputWrapper(),this.hidePlaceHolderWrapper()}else this.hideInputWrapper(),this.showPlaceHolderWrapper()},disable(){A.addClassName(this.$el.$container,`pops-panel-select-disable`),A.addClassName(this.$el.$itemLeftContainer,v.textIsDisabled)},cancleDisable(){A.removeClassName(this.$el.$container,`pops-panel-select-disable`),A.removeClassName(this.$el.$itemLeftContainer,v.textIsDisabled)},isDisabled(){return A.containsClassName(this.$el.$container,`pops-panel-select-disable`)||A.containsClassName(this.$el.$itemLeftContainer,v.textIsDisabled)},onShowSelectDialogClick(){let n=M.panelComponents_Select;A.on(this.$el.$container,`click`,()=>{if(this.isDisabled())return;let{style:r,lightStyle:i,darkStyle:a,...o}=e.selectConfirmDialogConfig||{},s=()=>{if(this.$data.selectedData?.addCustomInput&&!this.$data.isValidSuccess)return!1;this.getAllSelectItems(!1).forEach(e=>{e.data.addCustomInput&&(e.data.value=``,e.data.text=``,this.onValueChangeCallback(e.data))}),this.renderSelectText(),this.$el.$selectDialogContainer=null,this.$el.$container.removeAttribute(this.$data.rotateKey)};this.$el.$container.setAttribute(this.$data.rotateKey,`true`);let c=k.assign({title:{text:`请勾选需要选择的选项`,position:`center`},content:{text:`<ul class="select-container pops-user-select-none"></ul>`,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){let t=s();(typeof t!=`boolean`||t)&&e.close()}}},mask:{enable:!0,clickCallBack(e){let t=s();(typeof t!=`boolean`||t)&&e()},clickEvent:{toClose:!0}},drag:!0,dragLimit:!0,width:`300px`,height:`auto`,style:`
                  ${n}

                  ${M.panelCSS}

								  ${r||``}
								  `,lightStyle:i,darkStyle:a},o),l=at.init(c).$shadowRoot.querySelector(`.select-container`);this.$data.data.forEach(e=>{if(e.addCustomInput){let n=e,r=this.createSelectItemElement(n),i=this,a=t.createSectionContainerItem_input({type:`input`,text:``,getValue(){return n.value},callback(e,t){if(n.text=t,n.value=t,typeof n.onValid==`function`){let e=n.onValid(n);if(i.$data.isValidSuccess=e.valid,e.valid)o.removeValidErrorMsg();else return o.addValidErrorMsg(e.message),e}i.updateSelectedInfo(n),i.onValueChangeCallback(n)}}),o=a.handler,s=a.$el.querySelector(`.pops-panel-input`);C.setSafeHTML(r,``),r.appendChild(s),l.appendChild(r),this.onSelectItemClick(n,r)}else{let t=this.createSelectItemElement(e);l.appendChild(t),this.onSelectItemClick(e,t)}}),this.$el.$selectDialogContainer=l,this.updateAllSelectItemStatus()})},onValueChangeCallback(t,n=!0){n&&this.updateAllSelectItemStatus(),typeof e.callback==`function`&&e.callback(t||this.$data.selectedData)},updateAllSelectItemStatus(){this.getAllSelectItems(!1).forEach(e=>{let{data:t,$select:n}=e;this.setSelectItemText(t,e.$select),typeof t.disable==`function`&&t.disable(t.value,this.$data.selectedData)?(this.removeItemSelected(n),this.setSelectItemDisabled(n)):this.removeSelectItemDisabled(n),this.$data.selectedData!=null&&this.$data.selectedData.value===t.value?this.setItemSelected(n):this.removeItemSelected(n)})},resetAllSelectedItemStatus(){let e=this.getAllSelectItems(!0);e.length&&this.resetCurrentSelectedInfo(),e.forEach(e=>{let{data:t,$select:n}=e;this.setSelectItemText(t,e.$select),this.removeItemSelected(n),this.removeSelectItemDisabled(n)})},setItemSelected(e){this.isItemSelected(e)||A.addClassName(e,`select-item-is-selected`)},removeItemSelected(e){A.removeClassName(e,`select-item-is-selected`)},isItemSelected(e){return A.containsClassName(e,`select-item-is-selected`)},getItemDataOption(e){return Reflect.get(e,`data-info`)},addSelectedItemInfo(e){this.resetCurrentSelectedInfo(),this.updateSelectedInfo(e),this.onValueChangeCallback(e)},removeSelectedItemInfo(){this.updateSelectedInfo(),this.onValueChangeCallback()},updateSelectedInfo(e){if(this.$data.selectedData=void 0,e){if(e.addCustomInput&&e.value.toString()===``)return;this.$data.selectedData=e}},resetCurrentSelectedInfo(){this.updateSelectedInfo()},getAllSelectItems(e=!0){return Array.from(this.$el.$selectDialogContainer?.querySelectorAll(`.select-item`)??[]).map(t=>{let n={data:this.getItemDataOption(t),$select:t};return e?this.isItemSelected(t)?n:void 0:n}).filter(e=>e!=null)},createSelectItemElement(e){let t=A.createElement(`li`,{className:`select-item`,innerHTML:`<span class="select-item-text"></span>`});return this.setSelectItemText(e,t),Reflect.set(t,`data-info`,e),t},setSelectItemText(e,t){let n=typeof e.text==`function`?e.text(e.value,this.$data.selectedData):e.text,r=t.querySelector(`.select-item-text`);r&&(e.isHTML?C.setSafeHTML(r,n):r.innerText=n)},setSelectItemDisabled(e){e.setAttribute(`aria-disabled`,`true`),e.setAttribute(`disabled`,`true`)},removeSelectItemDisabled(e){e.removeAttribute(`aria-disabled`),e.removeAttribute(`disabled`)},isSelectItemDisabled(e){return e.hasAttribute(`disabled`)||e.ariaDisabled},onSelectItemClick(t,n){let r=()=>{this.setItemSelected(n),this.addSelectedItemInfo(t)};A.on(n,`click`,i=>{A.preventEvent(i);let a=i.target;if(t?.addCustomInput&&a instanceof HTMLInputElement)r();else if(!this.isSelectItemDisabled(n)){if(typeof e.clickCallBack==`function`){let t=e.clickCallBack(i,this.$data.selectedData);if(typeof t==`boolean`&&!t)return}t?.addCustomInput?r():this.isItemSelected(n)?(this.removeItemSelected(n),this.removeSelectedItemInfo()):(this.setItemSelected(n),this.addSelectedItemInfo(t))}})},showInputWrapper(){A.cssShow(this.$el.$selectedInputWrapper)},hideInputWrapper(){A.cssHide(this.$el.$selectedInputWrapper,!0)},showPlaceHolderWrapper(){A.cssShow(this.$el.$selectedPlaceHolderWrapper)},hidePlaceHolderWrapper(){A.cssHide(this.$el.$selectedPlaceHolderWrapper,!0)}};r.init(),Reflect.set(n,`data-select`,r),l=r}else if(c===`horizontal`){let t={[Symbol.toStringTag]:`PopsPanelSelectHorizontal`,$el:{$itemLeftContainer:i,$container:a,$wrapper:void 0},$data:{data:[],defaultValue:e.getValue(),selectedData:void 0,rotateKey:`data-show-option`},init(){this.initDefault(),this.initEl(),(typeof e.disabled==`function`?e.disabled():e.disabled)&&this.disable()},initDefault(){if(this.$data.data=typeof e.data==`function`?e.data():e.data,!this.$data.data.length)throw Error(`PopsPanelSelect: data is empty`)},initEl(){this.$el.$container.setAttribute(`data-mode`,c),C.setSafeHTML(this.$el.$container,`
              <div class="el-select__wrapper pops-user-select-none">
              </div>`),this.$el.$wrapper=n.querySelector(`.el-select__wrapper`),this.$data.data.forEach(e=>{let t=this.createSelectItemElement(e);this.onSelectItemClick(e,t),this.$data.defaultValue===e.value&&this.addSelectedItemInfo(e),this.$el.$wrapper.appendChild(t)}),this.updateAllSelectItemStatus()},disable(){A.addClassName(this.$el.$container,`pops-panel-select-disable`),A.addClassName(this.$el.$itemLeftContainer,v.textIsDisabled)},cancleDisable(){A.removeClassName(this.$el.$container,`pops-panel-select-disable`),A.removeClassName(this.$el.$itemLeftContainer,v.textIsDisabled)},isDisabled(){return A.containsClassName(this.$el.$container,`pops-panel-select-disable`)||A.containsClassName(this.$el.$itemLeftContainer,v.textIsDisabled)},createSelectItemElement(e){let t=A.createElement(`div`,{className:`select-item`,innerHTML:`
                <span class="select-item-text"></span>
              `});return this.setSelectItemText(e,t),Reflect.set(t,`data-info`,e),t},setSelectItemText(e,t){let n=typeof e.text==`function`?e.text(e.value,this.$data.selectedData):e.text,r=t.querySelector(`.select-item-text`);r&&(e.isHTML?C.setSafeHTML(r,n):r.innerText=n)},onSelectItemClick(t,n){A.on(n,`click`,r=>{if(A.preventEvent(r),!this.isDisabled()&&!this.isSelectItemDisabled(n)){if(typeof e.clickCallBack==`function`){let t=e.clickCallBack(r,this.$data.selectedData);if(typeof t==`boolean`&&!t)return}this.isItemSelected(n)?(this.removeItemSelected(n),this.removeSelectedItemInfo()):(this.setItemSelected(n),this.addSelectedItemInfo(t))}})},onValueChangeCallback(t,n=!0){n&&this.updateAllSelectItemStatus(),typeof e.callback==`function`&&e.callback(t||this.$data.selectedData)},updateAllSelectItemStatus(){this.getAllSelectItems(!1).forEach(e=>{let{data:t,$select:n}=e;this.setSelectItemText(t,e.$select),typeof t.disable==`function`&&t.disable(t.value,this.$data.selectedData)?(this.removeItemSelected(n),this.setSelectItemDisabled(n)):this.removeSelectItemDisabled(n),this.$data.selectedData!=null&&this.$data.selectedData.value===t.value?this.setItemSelected(n):this.removeItemSelected(n)})},resetAllSelectedItemStatus(){let e=this.getAllSelectItems(!0);e.length&&this.resetCurrentSelectedInfo(),e.forEach(e=>{let{data:t,$select:n}=e;this.setSelectItemText(t,e.$select),this.removeItemSelected(n),this.removeSelectItemDisabled(n)})},addSelectedItemInfo(e){this.resetCurrentSelectedInfo(),this.updateSelectedInfo(e),this.onValueChangeCallback(e)},removeSelectedItemInfo(){this.updateSelectedInfo(),this.onValueChangeCallback()},updateSelectedInfo(e){if(this.$data.selectedData=void 0,e){if(e.addCustomInput&&e.value.toString()===``)return;this.$data.selectedData=e}},resetCurrentSelectedInfo(){this.updateSelectedInfo()},setSelectItemDisabled(e){e.setAttribute(`aria-disabled`,`true`),e.setAttribute(`disabled`,`true`)},removeSelectItemDisabled(e){e.removeAttribute(`aria-disabled`),e.removeAttribute(`disabled`)},isSelectItemDisabled(e){return e.hasAttribute(`disabled`)||e.ariaDisabled},setItemSelected(e){this.isItemSelected(e)||A.addClassName(e,`select__selected-item`)},removeItemSelected(e){A.removeClassName(e,`select__selected-item`)},isItemSelected(e){return A.containsClassName(e,`select__selected-item`)},getAllSelectItems(e=!0){return Array.from(this.$el.$wrapper?.querySelectorAll(`.select-item`)??[]).map(t=>{let n={data:this.getItemDataOption(t),$select:t};return e?this.isItemSelected(t)?n:void 0:n}).filter(e=>e!=null)},getItemDataOption(e){return Reflect.get(e,`data-info`)}};t.init(),Reflect.set(n,`data-select`,t),l=t}return{$el:n,handler:l}},createSectionContainerItem_select_multiple(e){let t=A.createElement(`li`);Reflect.set(t,this.$data.nodeStoreConfigKey,e),this.setElementClassName(t,e.className),this.setElementAttributes(t,e.attributes),this.setElementProps(t,e.props);let n=``;e.description&&(n=`<p class="pops-panel-item-left-desc-text">${e.description}</p>`),C.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${e.text}</p>${n}</div>
				<div class="pops-panel-select-multiple">
					<div class="el-select__wrapper">
						<div class="el-select__selection">
							<!-- 这个是用于手动输入的，这里暂不适配 -->
							<div class="el-select__selected-item el-select__input-wrapper">
		
							</div>
							<!-- 这个是placeholder -->
							<div class="el-select__selected-item el-select__placeholder">
							</div>
						</div>
						<!-- 下拉箭头 -->
						<div class="el-select__suffix">
							<i class="el-icon el-select__caret el-select__icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
									<path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
								</svg>
							</i>
						</div>
					</div>
				</div>
				`);let r={[Symbol.toStringTag]:`PopsPanelSelectMultiple`,$el:{$itemLeftContainer:t.querySelector(`.pops-panel-item-left-text`),$container:void 0,$wrapper:void 0,$section:void 0,$selectedInputWrapper:void 0,$selectedPlaceHolderWrapper:void 0,$suffix:void 0,$suffixIcon:void 0,$selectContainer:void 0},$data:{defaultValue:e.getValue(),selectedDataList:[],rotateKey:`data-show-option`},init(){this.initDefault(),this.inintEl(),this.initPlaceHolder(),this.initTagElement(),this.onShowSelectDialogClick(),(typeof e.disabled==`function`?e.disabled():e.disabled)&&this.disable()},initDefault(){e.data.forEach(e=>{this.$data.defaultValue.includes(e.value)&&this.$data.selectedDataList.push(e)})},inintEl(){this.$el.$container=t.querySelector(`.pops-panel-select-multiple`),this.$el.$wrapper=t.querySelector(`.el-select__wrapper`),this.$el.$section=t.querySelector(`.el-select__selection`),this.$el.$selectedInputWrapper=t.querySelector(`.el-select__selected-item.el-select__input-wrapper`),this.$el.$selectedPlaceHolderWrapper=t.querySelector(`.el-select__selected-item.el-select__placeholder`),this.$el.$suffix=t.querySelector(`.el-select__suffix`),this.$el.$suffixIcon=t.querySelector(`.el-select__suffix .el-icon`),this.hideInputWrapper()},initPlaceHolder(){let t=``;if(typeof e.placeholder==`string`)t=e.placeholder;else if(typeof e.placeholder==`function`){let n=e.placeholder();typeof n==`string`&&(t=n)}let n=A.createElement(`span`,{innerText:t});this.$el.$selectedPlaceHolderWrapper.appendChild(n)},initTagElement(){e.data.forEach(e=>{if(this.$data.selectedDataList.find(t=>t.value===e.value)){let t=this.createTagItem(e);this.addTagItem(t.$tag),this.onSelectItemCloseIconClick({$tag:t.$tag,$closeIcon:t.$closeIcon,value:e.value,text:e.text})}}),this.checkTagEmpty()},createTagItem(e){let t=A.createElement(`div`,{className:`el-select__selected-item el-select__choose_tag`,innerHTML:`
						<span class="el-tag is-closable el-tag--info el-tag--default el-tag--light">
							<span class="el-tag__content">
								<span class="el-select__tags-text"></span>
							</span>
							<!-- 关闭tag的图标 -->
							<i class="el-icon el-tag__close">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
									<path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
								</svg>
							</i>
						</span>
						`}),n=t.querySelector(`.el-select__tags-text`),r=t.querySelector(`.el-icon.el-tag__close`),i=typeof e.text==`function`?e.text(e,this.$data.selectedDataList):e.text;return e.isHTML?C.setSafeHTML(n,i):n.innerText=i,{$tag:t,$tagText:n,$closeIcon:r}},addTagItem(e){if(this.setSectionIsNear(),this.$el.$section.contains(this.$el.$selectedInputWrapper)){let t=this.$el.$selectedInputWrapper.previousElementSibling;t?A.after(t,e):A.before(this.$el.$selectedInputWrapper,e)}else if(this.$el.$section.contains(this.$el.$selectedPlaceHolderWrapper)){let t=this.$el.$selectedPlaceHolderWrapper.previousElementSibling;t?A.after(t,e):A.before(this.$el.$selectedPlaceHolderWrapper,e)}else this.$el.$section.appendChild(e);this.hideInputWrapper(),this.hidePlaceHolderWrapper()},updateTagItem(){this.$el.$section.querySelectorAll(`.el-select__choose_tag`).forEach(e=>{A.remove(e)}),this.initTagElement()},onValueChange(t){this.updateAllSelectItems(),typeof e.callback==`function`&&e.callback(t||this.$data.selectedDataList)},updateAllSelectItems(){this.getAllSelectItemInfo(!1).forEach(e=>{let{data:t,$select:n}=e;this.setSelectItemText(t,e.$select),typeof t.disable==`function`&&t.disable(t.value,this.$data.selectedDataList)?(this.disableSelectItem(n),this.removeSelectedInfo(t,!1),this.removeItemSelected(n)):this.cancleDisableSelectItem(n),this.$data.selectedDataList.find(e=>e.value===t.value)?this.setItemSelected(n):this.removeItemSelected(n)})},setItemSelected(e){this.isItemSelected(e)||A.addClassName(e,`select-item-is-selected`)},removeItemSelected(e){A.removeClassName(e,`select-item-is-selected`)},isItemSelected(e){return A.containsClassName(e,`select-item-is-selected`)},addItemSelected(e,t){let n=this.getSelectedItemInfo(t);e.find(e=>e.value===n.value)||e.push(n),this.onValueChange(e)},getSelectedItemInfo(e){return Reflect.get(e,`data-info`)},removeSelectedItemInfo(e,t){let n=this.getSelectedItemInfo(t),r=e.findIndex(e=>e.value===n.value);r!==-1&&e.splice(r,1),this.onValueChange(e)},getAllSelectItemInfo(e=!0){return Array.from(this.$el.$selectContainer?.querySelectorAll(`.select-item`)??[]).map(t=>{let n={data:this.getSelectedItemInfo(t),$select:t};return e?this.isItemSelected(t)?n:void 0:n}).filter(e=>e!=null)},createSelectItemElement(e){let t=A.createElement(`li`,{className:`select-item`,innerHTML:`
							<span class="select-item-text"></span>
						`});return this.setSelectItemText(e,t),Reflect.set(t,`data-info`,e),t},setSelectItemText(e,t){let n=typeof e.text==`function`?e.text(e.value,this.$data.selectedDataList):e.text,r=t.querySelector(`.select-item-text`);e.isHTML?C.setSafeHTML(r,n):r.innerText=n},disableSelectItem(e){e.setAttribute(`aria-disabled`,`true`),e.setAttribute(`disabled`,`true`)},cancleDisableSelectItem(e){e.removeAttribute(`aria-disabled`),e.removeAttribute(`disabled`)},isSelectItemDisabled(e){return e.hasAttribute(`disabled`)||e.ariaDisabled},onSelectItemClick(t,n){A.on(n,`click`,r=>{if(A.preventEvent(r),!this.isSelectItemDisabled(n)){if(typeof e.clickCallBack==`function`){let t=this.getAllSelectItemInfo().map(e=>e.data),n=e.clickCallBack(r,t);if(typeof n==`boolean`&&!n)return}this.isItemSelected(n)?(this.removeItemSelected(n),this.removeSelectedItemInfo(t,n)):(this.setItemSelected(n),this.addItemSelected(t,n))}})},onShowSelectDialogClick(){let t=M.panelComponents_Select;A.on(this.$el.$container,`click`,()=>{if(this.isDisabled())return;let n=this.$data.selectedDataList,{style:r,lightStyle:i,darkStyle:a,...o}=e.selectConfirmDialogConfig||{},s=()=>{this.$data.selectedDataList=[...n],this.updateTagItem(),this.$el.$selectContainer=null,this.$el.$container.removeAttribute(this.$data.rotateKey)};this.$el.$container.setAttribute(this.$data.rotateKey,`true`);let c=k.assign({title:{text:`请勾选需要选择的选项`,position:`center`},content:{text:`<ul class="select-container pops-user-select-none"></ul>`,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close(),s()}}},mask:{enable:!0,clickCallBack(e){e(),s()},clickEvent:{toClose:!0}},drag:!0,dragLimit:!0,width:`300px`,height:`auto`,style:`
                  ${t}

								  ${r||``}
								`,lightStyle:i,darkStyle:a},o),l=at.init(c).$shadowRoot.querySelector(`.select-container`);e.data.forEach(e=>{let t=this.createSelectItemElement(e);l.appendChild(t),this.onSelectItemClick(n,t)}),this.$el.$selectContainer=l,this.updateAllSelectItems()})},onSelectItemCloseIconClick(t){A.on(t.$closeIcon,`click`,n=>{if(A.preventEvent(n),!this.isDisabled()){if(typeof e.closeIconClickCallBack==`function`){let r=e.closeIconClickCallBack(n,{$tag:t.$tag,$closeIcon:t.$closeIcon,value:t.value,text:typeof t.text==`function`?t.text.bind(t):t.text});if(typeof r==`boolean`&&!r)return}this.removeSelectedTagItem(t.$tag),this.removeSelectedInfo({value:t.value,text:t.text})}},{capture:!0})},checkTagEmpty(){this.$el.$section.querySelectorAll(`.el-select__choose_tag`).length||(this.showPlaceHolderWrapper(),this.removeSectionIsNear())},removeSelectedTagItem(e){A.remove(e),this.checkTagEmpty()},removeSelectedInfo(e,t=!0){for(let t=0;t<this.$data.selectedDataList.length;t++)if(this.$data.selectedDataList[t].value===e.value){this.$data.selectedDataList.splice(t,1);break}t&&this.onValueChange()},showInputWrapper(){A.cssShow(this.$el.$selectedInputWrapper)},hideInputWrapper(){A.cssHide(this.$el.$selectedInputWrapper,!0)},showPlaceHolderWrapper(){A.cssShow(this.$el.$selectedPlaceHolderWrapper)},hidePlaceHolderWrapper(){A.cssHide(this.$el.$selectedPlaceHolderWrapper,!0)},setSectionIsNear(){A.addClassName(this.$el.$section,`is-near`)},removeSectionIsNear(){A.removeClassName(this.$el.$section,`is-near`)},disable(){A.addClassName(this.$el.$itemLeftContainer,v.textIsDisabled),A.addClassName(this.$el.$container,`pops-panel-select-disable`)},isDisabled(){return A.containsClassName(this.$el.$container,`pops-panel-select-disable`)},cancleDisable(){A.removeClassName(this.$el.$itemLeftContainer,v.textIsDisabled),A.removeClassName(this.$el.$container,`pops-panel-select-disable`)}};return r.init(),Reflect.set(t,`data-select-multiple`,r),{$el:t,handler:r}},createSectionContainerItem_button(e){let t=A.createElement(`li`);Reflect.set(t,this.$data.nodeStoreConfigKey,e),this.setElementClassName(t,e.className),this.setElementAttributes(t,e.attributes),this.setElementProps(t,e.props);let n=``;e.description&&(n=`<p class="pops-panel-item-left-desc-text">${e.description}</p>`),C.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${e.text}</p>${n}</div>
				<div class="pops-panel-button">
					<button class="pops-panel-button_inner" type="button">
						<i class="pops-bottom-icon"></i>
						<span class="pops-panel-button-text"></span>
					</button>
				</div>
				`);let r={[Symbol.toStringTag]:`PopsPanelButton`,$ele:{panelButton:t.querySelector(`.pops-panel-button`),button:t.querySelector(`.pops-panel-button .pops-panel-button_inner`),icon:t.querySelector(`.pops-panel-button .pops-bottom-icon`),spanText:t.querySelector(`.pops-panel-button .pops-panel-button-text`)},$data:{},init(){this.$ele.panelButton.appendChild(this.$ele.button),this.initButton(),this.onButtonClick()},initButton(){typeof e.buttonIcon==`string`&&e.buttonIcon.trim()!==``?(_.hasIcon(e.buttonIcon)?this.setIconSVG(_.getIcon(e.buttonIcon)):this.setIconSVG(e.buttonIcon),this.showIcon()):this.hideIcon();let t=e.buttonText;typeof e.buttonText==`function`&&(t=e.buttonText()),this.setButtonType(e.buttonType),e.buttonIsRightIcon?this.setIconRight():this.setIconLeft(),e.disable&&this.disable(),this.setButtonText(t),this.setIconLoadingStatus(e.buttonIconIsLoading)},disable(){this.$ele.button.setAttribute(`disabled`,`true`)},notDisable(){this.$ele.button.removeAttribute(`disabled`)},hideIcon(){A.addClassName(this.$ele.panelButton,`pops-panel-button-no-icon`)},showIcon(){A.removeClassName(this.$ele.panelButton,`pops-panel-button-no-icon`)},setIconSVG(e){C.setSafeHTML(this.$ele.icon,e)},setIconLoadingStatus(e){this.$ele.icon.setAttribute(`is-loading`,(!!e).toString())},setHasIcon(e){this.$ele.button.setAttribute(`data-icon`,(!!e).toString())},setButtonType(e){this.$ele.button.setAttribute(`data-type`,e)},setIconRight(){A.addClassName(this.$ele.button,`pops-panel-button-right-icon`)},setIconLeft(){A.removeClassName(this.$ele.button,`pops-panel-button-right-icon`)},setButtonText(e){C.setSafeHTML(this.$ele.spanText,e)},onButtonClick(){A.on(this.$ele.button,`click`,t=>{typeof e.callback==`function`&&e.callback(t)})}};return r.init(),Reflect.set(t,`data-button`,r),{$el:t,handler:r}},createSectionContainerItem_deepMenu(e){let t=this,n=A.createElement(`li`);A.addClassName(n,`pops-panel-deepMenu-nav-item`),Reflect.set(n,this.$data.nodeStoreConfigKey,e),this.setElementClassName(n,e.className),this.setElementAttributes(n,e.attributes),this.setElementProps(n,e.props);let r=``;e.description&&(r=`<p class="pops-panel-item-left-desc-text">${e.description}</p>`);let i=typeof e.arrowRightIcon!=`boolean`||e.arrowRightIcon,a=``;i&&(a=`<i class="pops-panel-deepMenu-arrowRight-icon">${_.getIcon(`arrowRight`)}</i>`);let o=``;e.rightText&&(o=`<p class="pops-panel-item-right-text">${e.rightText}</p>`),C.setSafeHTML(n,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${e.text}</p>${r}</div>
				<div class="pops-panel-deepMenu">${o}${a}</div>
				`);let s={[Symbol.toStringTag]:`PopsPanelDeepMenu`,$ele:{get parentSection(){return t.$el.$panelContentSectionContainer}},init(){this.onLiClick()},initContainerItem(n,r){let i=r;if(i.type===`container`){let a=i.views,o=A.createElement(`li`),s=A.createElement(`ul`);A.addClassName(s,`pops-panel-forms-container-item-formlist`),A.addClassName(o,`pops-panel-forms-container-item`);let c=A.createElement(`div`,{className:`pops-panel-forms-container-item-header-text`});C.setSafeHTML(c,i.text),i.isFold&&(C.setSafeHTML(c,`
								<p>${i.text}</p>
								<i class="pops-panel-forms-fold-container-icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
										<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
									</svg>
								</i>
							`),A.on(c,`click`,()=>{o.hasAttribute(`data-fold-enable`)?o.removeAttribute(`data-fold-enable`):o.setAttribute(`data-fold-enable`,``)}),A.addClassName(c,`pops-panel-forms-fold-container`),A.addClassName(c,v.userSelectNone),o.setAttribute(`data-fold-enable`,``),A.addClassName(c,`pops-panel-forms-fold`)),o.appendChild(c),t.setElementClassName(o,r.className),t.setElementAttributes(o,r.attributes),t.setElementProps(o,r.props),o.appendChild(s),n.appendChild(o),a.forEach(e=>{t.uListContainerAddItem(e,{ulElement:s,sectionContainerULElement:t.sectionContainerULElement,formContainerListElement:o,formHeaderDivElement:c})}),typeof i.afterAddToUListCallBack==`function`&&i.afterAddToUListCallBack(e,{target:o,ulElement:s,sectionContainerULElement:t.sectionContainerULElement,formContainerListElement:o,formHeaderDivElement:c})}else t.uListContainerAddItem(e,{ulElement:t.sectionContainerULElement})},async gotoDeepMenu(n,r){let i=r.closest(`section.pops-panel-container`),a=A.createElement(`section`,{className:`pops-panel-container pops-panel-deepMenu-container`});Reflect.set(a,t.$data.nodeStoreConfigKey,e);let o=A.createElement(`ul`,{className:`pops-panel-container-header-ul pops-panel-deepMenu-container-header-ul`}),s=A.createElement(`ul`,{className:`pops-panel-container-main-ul`}),c=e.headerTitle??e.text,l=A.createElement(`li`,{className:`pops-panel-container-header-title-text pops-panel-deepMenu-container-header`,innerHTML:`<p class="pops-panel-deepMenu-container-header-title-text">${c}</p>`}),u=A.createElement(`i`,{className:`pops-panel-deepMenu-container-left-arrow-icon`,innerHTML:_.getIcon(`arrowLeft`)}),d=tt.createSwitchElementWithAnimation(i,a,{useAnimation:t.$config.useDeepMenuSwtichAnimation,enterToAddElementCallback:()=>{if(A.on(u,`click`,async e=>{A.preventEvent(e),await d.exit(),t.emitRenderRightContainer(i)},{once:!0}),A.before(l.firstElementChild,u),o.appendChild(l),a.appendChild(o),a.appendChild(s),e.views&&Array.isArray(e.views))for(let t=0;t<e.views.length;t++){let n=e.views[t];this.initContainerItem(s,n)}t.$el.$panelRightSectionWrapper.appendChild(a)}});await d.enter(),typeof e.afterEnterDeepMenuCallBack==`function`&&e.afterEnterDeepMenuCallBack(e,{$sectionContainer:a,$sectionContainerHeaderContainer:o,$sectionContainerHeader:l,$sectionBodyContainer:s}),t.emitRenderRightContainer(a)},onLiClick(){A.on(n,`click`,async t=>{typeof e.clickCallBack==`function`&&await e.clickCallBack(t,e)||await this.gotoDeepMenu(t,n)})}};return s.init(),Reflect.set(n,`data-deepMenu`,s),{$el:n,handler:s}},createSectionContainerItem_own(e){let t=A.createElement(`li`);return Reflect.set(t,this.$data.nodeStoreConfigKey,e),this.setElementClassName(t,e.className),this.setElementAttributes(t,e.attributes),this.setElementProps(t,e.props),t=e.createLIElement(t),{$el:t}},createSectionContainerItem(e){let t=e.type;if(t===`switch`)return this.createSectionContainerItem_switch(e);if(t===`slider`)return this.createSectionContainerItem_slider(e);if(t===`input`)return this.createSectionContainerItem_input(e);if(t===`textarea`)return this.createSectionContainerItem_textarea(e);if(t===`select`)return this.createSectionContainerItem_select(e);if(t===`select-multiple`)return this.createSectionContainerItem_select_multiple(e);if(t===`button`)return this.createSectionContainerItem_button(e);if(t===`deepMenu`)return this.createSectionContainerItem_deepMenu(e);if(t===`own`)return this.createSectionContainerItem_own(e);console.error(`尚未实现的type类型`,e)},createSectionContainerItem_forms(e){let t=this,n=e;if(n.type===`container`){let r=e.views,i=A.createElement(`li`),a=A.createElement(`ul`);A.addClassName(i,`pops-panel-forms-container-item`),A.addClassName(a,`pops-panel-forms-container-item-formlist`);let o=A.createElement(`div`,{className:`pops-panel-forms-container-item-header-text`});C.setSafeHTML(o,n.text),n.isFold&&(C.setSafeHTML(o,`
						<p>${n.text}</p>
						<i class="pops-panel-forms-fold-container-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
								<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
							</svg>
						</i>
					`),A.on(o,`click`,()=>{i.hasAttribute(`data-fold-enable`)?i.removeAttribute(`data-fold-enable`):i.setAttribute(`data-fold-enable`,``)}),A.addClassName(o,`pops-panel-forms-fold-container`),A.addClassName(o,v.userSelectNone),i.setAttribute(`data-fold-enable`,``),A.addClassName(i,`pops-panel-forms-fold`)),i.appendChild(o),t.setElementClassName(i,e.className),t.setElementAttributes(i,e.attributes),t.setElementProps(i,e.props),r.forEach(e=>{t.uListContainerAddItem(e,{ulElement:a,sectionContainerULElement:t.sectionContainerULElement,formContainerListElement:i,formHeaderDivElement:o})}),i.appendChild(a),t.sectionContainerULElement.appendChild(i),typeof n.afterAddToUListCallBack==`function`&&n.afterAddToUListCallBack(n,{target:i,ulElement:a,sectionContainerULElement:t.sectionContainerULElement,formContainerListElement:i,formHeaderDivElement:o})}else t.uListContainerAddItem(e,{ulElement:t.sectionContainerULElement})},emitRenderRightContainer(e){let t=Reflect.get(e,this.$data.nodeStoreConfigKey);this.emitter.emit(`pops:renderRightContainer`,{viewConfig:t})},uListContainerAddItem(e,t){let n=this.createSectionContainerItem(e);n&&t.ulElement.appendChild(n.$el),typeof e.afterAddToUListCallBack==`function`&&e.afterAddToUListCallBack(e,{...t,target:n?.$el})},onAsideItemClick(e,t){A.on(e,`click`,async n=>{if(typeof t.clickFirstCallback==`function`){let e=await t.clickFirstCallback(n,this.sectionContainerHeaderULElement,this.sectionContainerULElement);if(typeof e==`boolean`&&!e)return}this.clearContainer();let r=Reflect.get(e,`__forms__`);Reflect.set(this.$el.$panelContentSectionContainer,this.$data.nodeStoreConfigKey,r),A.cssShow(this.$el.$panelContentSectionContainer),this.clearAsideItemIsVisited(),this.setAsideItemIsVisited(e);let i=typeof t.title==`function`?t.title():t.title,a=typeof t.headerTitle==`function`?t.headerTitle():t.headerTitle;if(a??=i,typeof a==`string`&&a.trim()!==``){let e=A.createElement(`li`);A.addClassName(e,`pops-panel-container-header-title-text`),Reflect.set(e,`__asideConfig__`,t),C.setSafeHTML(e,a),this.sectionContainerHeaderULElement.appendChild(e)}if(r.forEach(e=>{this.createSectionContainerItem_forms(e)}),typeof t.clickCallback==`function`){let e=await t.clickCallback(n,this.sectionContainerHeaderULElement,this.sectionContainerULElement);if(typeof e==`boolean`&&!e)return}this.emitRenderRightContainer(this.$el.$panelContentSectionContainer)})}}),St={init(e){let t=k.getRandomGUID(),n=`panel`,r=gt();r=k.assign(r,h.getGlobalConfig()),r=k.assign(r,e),r=P.handleOnly(n,r);let i=r.emitter??new g(n),{$shadowContainer:a,$shadowRoot:o}=P.handlerShadow(r);P.handleInit(o,[{name:`index`,css:M.index},{name:`ninePalaceGridPosition`,css:M.ninePalaceGridPosition},{name:`scrollbar`,css:M.scrollbar},{name:`button`,css:M.button},{name:`anim`,css:M.anim},{name:`common`,css:M.common},{name:`skeleton`,css:M.skeletonCSS},{name:`panelCSS`,css:M.panelCSS}]);let s=P.getTargerOrFunctionValue(r.zIndex),c=j.createMask(t,s),l=j.createHeader(n,r),{headerStyle:u,headerPStyle:d}=j.createHeaderStyle(n,r),f=j.createAnim(t,n,r,`
			<div class="pops-title pops-${n}-title pops-user-select-none" style="text-align: ${r.title.position};${u}">${r.title.html?r.title.text:`<p pops class="pops-${n}-title-text" class="pops-${n}-title-text" style="${d}">${r.title.text}</p>`}${l}</div>
			<div class="pops-content pops-${n}-content">
				<aside class="pops-${n}-aside pops-user-select-none">
					<ul class="pops-${n}-aside-top-container"></ul>
					<ul class="pops-${n}-aside-bottom-container"></ul>
				</aside>
				<div class="pops-${n}-section-wrapper">
					<section class="pops-${n}-container">
						<ul class="pops-${n}-container-header-ul"></ul>
						<ul class="pops-${n}-container-main-ul"></ul>
					</section>
				</div>
			</div>
      <div class="pops-${n}-bottom-wrapper">
        <section class="pops-${n}-bottom-container">
          <ul class="pops-${n}-bottom-left-container"></ul>
          <ul class="pops-${n}-bottom-right-container"></ul>
        </section>
      </div>
      `,``,s),p=j.parseElement(f),{$pops:m,$headerBtnClose:_,$title:v,$content:y,$panelRightSectionWrapper:b,$panelLeftAside:x,$panelContentSectionContainer:S,$panelBottomWrapper:C,$panelBottomContainer:w,$panelBottomLeftContainer:T,$panelBottomRightContainer:ee}=P.handleQueryElement(p,n);(r.isMobile||k.isPhone())&&A.addClassName(m,r.mobileClassName);let E,D=[p];r.mask.enable&&(E=P.handleMask({type:n,guid:t,config:r,animElement:p,maskHTML:c}).maskElement,D.push(E));let O=P.handleEventConfig(r,t,a,o,n,p,m,i,E),te=P.handleResultConfig(O);if(P.handleClickEvent(`close`,_,O,r.btn?.close?.callback),A.append(o,D),i.emit(`pops:before-append-to-page`,o,a),A.appendBody(a),E!=null&&p.after(E),xt().init({config:r,$el:{$pops:m,$content:y,$panelRightSectionWrapper:b,$panelLeftAside:x,$panelContentSectionContainer:S,$panelBottomWrapper:C,$panelBottomContainer:w,$panelBottomLeftContainer:T,$panelBottomRightContainer:ee},emitter:i}),P.handlePush(n,{guid:t,$anim:p,$pops:m,$mask:E,$shadowContainer:a,$shadowRoot:o,config:r,emitter:i}),r.drag&&rt.drag(m,{dragElement:v,limit:r.dragLimit,extraDistance:r.dragExtraDistance,moveCallBack:r.dragMoveCallBack,endCallBack:r.dragEndCallBack}),r.listenEscapeKeyUpToExitDeepMenu){let e=A.onKeyup(globalThis,e=>{if(e.key===`Escape`&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!e.metaKey){let e=b.querySelector(`.pops-panel-container:last-child .pops-panel-deepMenu-container-left-arrow-icon`);e&&e.click()}},{capture:!0});i.on(`pops:before-destory`,()=>{e?.off()})}return te}},Ct=()=>({title:{text:`默认标题`,position:`left`,html:!1,style:``},content:{text:``,select:!1,password:!1,row:!1,focus:!0,placeholder:`默认提示`,style:``},btn:{merge:!1,mergeReverse:!1,reverse:!1,position:`flex-end`,ok:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:`确定`,type:`success`,callback(e){e.close()}},cancel:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:`关闭`,type:`default`,callback(e){e.close()}},other:{enable:!1,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:`其它按钮`,type:`default`,callback(e){e.close()}},close:{enable:!0,callback(e){e.close()}}},useShadowRoot:!0,class:``,only:!1,width:window.innerWidth<550?`88vw`:`350px`,height:window.innerHeight<450?`70vh`:`200px`,position:`center`,animation:`pops-anim-fadein-zoom`,zIndex:1e4,mask:{enable:!1,clickEvent:{toClose:!1,toHide:!1},clickCallBack:null},drag:!1,dragLimit:!0,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:!1,style:null,lightStyle:null,darkStyle:null,stopKeyDownEventPropagation:!0,emitter:null}),wt={init(e){let t=k.getRandomGUID(),n=`prompt`,r=Ct();r=k.assign(r,h.getGlobalConfig()),r=k.assign(r,e),r=P.handleOnly(n,r);let i=r.emitter??new g(n),{$shadowContainer:a,$shadowRoot:o}=P.handlerShadow(r);P.handleInit(o,[{name:`index`,css:M.index},{name:`ninePalaceGridPosition`,css:M.ninePalaceGridPosition},{name:`scrollbar`,css:M.scrollbar},{name:`button`,css:M.button},{name:`anim`,css:M.anim},{name:`common`,css:M.common},{name:`skeleton`,css:M.skeletonCSS},{name:`promptCSS`,css:M.promptCSS}]);let s=P.getTargerOrFunctionValue(r.zIndex),c=j.createMask(t,s),l=j.createHeader(n,r),u=j.createBottom(n,r),{headerStyle:d,headerPStyle:f}=j.createHeaderStyle(n,r),{contentPStyle:p}=j.createContentStyle(n,r),m=j.createAnim(t,n,r,`
            <div class="pops-title pops-${n}-title pops-user-select-none" style="text-align: ${r.title.position};${d}">${r.title.html?r.title.text:`<p pops class="pops-${n}-title-text" style="${f}">${r.title.text}</p>`}${l}</div>
            <div class="pops-content pops-${n}-content" style="${p}">${r.content.row?`<textarea name="pops-input-text" pops="" placeholder="`+r.content.placeholder+`"></textarea>`:`<input name="pops-input-text" pops="" placeholder="`+r.content.placeholder+`" type="`+(r.content.password?`password`:`text`)+`">`}</div>${u}`,u,s),_=j.parseElement(m),{$pops:v,$input:y,$headerBtnClose:b,$btnOk:x,$btnCancel:S,$btnOther:C,$title:w}=P.handleQueryElement(_,n),T,ee=[_];r.mask.enable&&(T=P.handleMask({type:n,guid:t,config:r,animElement:_,maskHTML:c}).maskElement,ee.push(T));let E=P.handleEventConfig(r,t,a,o,n,_,v,i,T),D=P.handleResultConfig(E);return y.value=r.content.text,P.handlePromptClickEvent(`close`,y,b,E,r.btn.close.callback),P.handlePromptClickEvent(`ok`,y,x,E,r.btn.ok.callback),P.handlePromptClickEvent(`cancel`,y,S,E,r.btn.cancel.callback),P.handlePromptClickEvent(`other`,y,C,E,r.btn.other.callback),A.append(o,ee),i.emit(`pops:before-append-to-page`,o,a),A.appendBody(a),T!=null&&_.after(T),P.handlePush(n,{guid:t,$anim:_,$pops:v,$mask:T,$shadowContainer:a,$shadowRoot:o,config:r,emitter:i}),r.drag&&rt.drag(v,{dragElement:w,limit:r.dragLimit,extraDistance:r.dragExtraDistance,moveCallBack:r.dragMoveCallBack,endCallBack:r.dragEndCallBack}),r.content.focus&&y.focus(),r.content.select&&y.select(),D}},Tt=()=>({$target:document.documentElement,targetSelector:null,position:`fixed`,data:[{icon:_.getIcon(`search`),iconIsLoading:!1,text:`搜索`,item:[],callback(e,t,n){console.log(`点击：`+this.text,[e,t,n])}},{icon:_.getIcon(`documentCopy`),iconIsLoading:!1,text:`复制`,item:[],callback(e,t,n){console.log(`点击：`+this.text,[e,t,n])}},{icon:_.getIcon(`delete`),text:`删除`,iconIsLoading:!1,item:[],callback(e,t,n){console.log(`点击：`+this.text,[e,t,n])}},{icon:_.getIcon(`loading`),iconIsLoading:!0,text:`加载`,item:[],callback(e,t,n){return console.log(`点击：`+this.text,[e,t,n]),!1}},{icon:_.getIcon(`elemePlus`),iconIsLoading:!0,text:`饿了么`,callback(e,t,n){return console.log(`点击：`+this.text,[e,t,n]),!1},item:[{icon:``,iconIsLoading:!1,text:`处理文件`,item:[],callback(e,t,n){console.log(`点击：`+this.text,[e,t,n])}},{icon:``,iconIsLoading:!1,text:`其它处理`,callback(e,t,n){return console.log(`点击：`+this.text,[e,t,n]),!1},item:[{icon:_.getIcon(`view`),iconIsLoading:!1,text:`查看`,item:[],callback(e,t,n){console.log(`点击：`+this.text,[e,t,n])}}]}]}],chileMenuLeftOrRightDistance:0,childMenuTopOrBottomDistance:0,useShadowRoot:!0,className:``,isAnimation:!1,useScaleAnimation:!0,only:!1,zIndex:1e4,preventDefault:!0,style:null,lightStyle:null,darkStyle:null,limitPositionXInView:!0,limitPositionYInView:!0,beforeShowCallBack(){},emitter:null}),Et={init(e){let t=k.getRandomGUID(),n=`rightClickMenu`,r=Tt();r=k.assign(r,h.getGlobalConfig()),r=k.assign(r,e),r=P.handleOnly(n,r);let i=r.emitter??new g(n),{$shadowContainer:a,$shadowRoot:o}=P.handlerShadow(r);P.handleInit(o,[{name:`index`,css:M.index},{name:`anim`,css:M.anim},{name:`common`,css:M.common},{name:`skeleton`,css:M.skeletonCSS},{name:`rightClickMenu`,css:M.rightClickMenu}]),j.addStyle(o,r.style),j.addLightStyle(o,r.lightStyle),j.addDarkStyle(o,r.darkStyle);let s={$data:{menuDataKey:`data-menu`},$el:{$root:null},windowCheckClickEvent(e){if(!s.$el.$root)return;let t=e.target;t.closest(`.pops-${n}`)||(t.className&&t.className===`pops-shadow-container`&&t.shadowRoot!=null?s.shadowRootCheckClickEvent(e):s.closeAllMenu(s.$el.$root))},shadowRootCheckClickEvent(e){s.$el.$root&&(e.composedPath()[0].closest(`.pops-${n}`)||s.closeAllMenu(s.$el.$root))},addWindowCheckClickListener(){if(A.on(globalThis,`click touchstart`,s.windowCheckClickEvent,{capture:!0}),r.$target instanceof Node){let e=r.$target.getRootNode();e instanceof ShadowRoot&&A.on(e,`click touchstart`,s.shadowRootCheckClickEvent,{capture:!0})}},removeWindowCheckClickListener(){if(A.off(globalThis,`click touchstart`,s.windowCheckClickEvent,{capture:!0}),r.$target instanceof Node){let e=r.$target.getRootNode();e instanceof ShadowRoot&&A.off(e,`click touchstart`,s.windowCheckClickEvent,{capture:!0})}},async contextMenuEvent(e,c){r.preventDefault&&A.preventEvent(e),P.handleOnly(n,r),s.$el.$root&&s.closeAllMenu(s.$el.$root),c??=r.$target;let l=await r?.beforeShowCallBack(e);if(typeof l==`boolean`&&!l)return;let u=s.showMenu(e,r.data,c);s.$el.$root=u,r.only&&(P.handlePush(n,{$shadowRoot:o,$shadowContainer:a,guid:t,$anim:u,$pops:u,config:r,emitter:i}),i.on(`pops:before-destory`,()=>{s.closeAllMenu(u)}),i.on(`pops:destory`,()=>{s.closeAllMenu(u)}))},addContextMenuEvent(e,t){A.on(e,`contextmenu`,t,s.contextMenuEvent)},removeContextMenuEvent(e,t){A.off(e,`contextmenu`,t,s.contextMenuEvent)},animationCloseMenu(e){let t=n=>{A.off(e,A.getTransitionEndNameList(),t,{capture:!0}),A.remove(e)};A.containsClassName(e,`pops-${n}-anim-show`)?(A.on(e,A.getTransitionEndNameList(),t,{capture:!0}),A.removeClassName(e,`pops-${n}-anim-show`)):A.containsClassName(e,`pops-${n}-anim-scale`)&&A.containsClassName(e,`pops-${n}-anim-scale-open`)?(A.on(e,A.getTransitionEndNameList(),t,{capture:!0}),A.removeClassName(e,`pops-${n}-anim-scale-open`),A.addClassName(e,`pops-${n}-anim-scale-not-open`)):A.remove(e)},closeAllMenu(e){if(e==null)return;let t=Reflect.get(e,s.$data.menuDataKey);t?.root&&(e=t.root),t.child.forEach(e=>{this.animationCloseMenu(e)}),this.animationCloseMenu(e),s.$el.$root=null},createMenuContainerElement(e){let t=A.createElement(`div`,{className:`pops-${n}`,innerHTML:`<ul class="pops-${n}-wrapper"></ul>`},{"data-position":r.position}),i=this.getMenuZIndex();return i>1e4&&(t.style.zIndex=i.toString()),e&&t.setAttribute(`is-children`,`true`),r.isAnimation&&A.addClassName(t,`pops-${n}-anim-grid`),r.useScaleAnimation&&(A.addClassName(t,`pops-${n}-anim-scale`),A.addClassName(t,`pops-${n}-anim-scale-not-open`)),t},getMenuZIndex(){return P.getTargerOrFunctionValue(r.zIndex)},getOffset(e,t,n){let i={top:0,right:0,bottom:0,left:0},a=A.width(e),o=A.height(e),s=A.width(globalThis)-1,c=A.height(globalThis)-1;r.position===`absolute`&&(s+=globalThis.scrollX,c+=globalThis.scrollY);let l=s-a,u=c-o,d=r.chileMenuLeftOrRightDistance,f=r.childMenuTopOrBottomDistance,p=t.x,m=t.y;if(p=p<0?0:p,m=m<0?0:m,r.limitPositionXInView&&p+d>=l){if(n){let e=A.offset(n.$menu);p=s-e.left-d+1}else p=1+d;p<0?p=0:p>l&&(p=l),i.right=p,Reflect.deleteProperty(i,`left`)}else p+=d,i.left=p,Reflect.deleteProperty(i,`right`);if(r.limitPositionYInView&&m+f>=u){if(n){let e=A.offset(n.$parentItem,!1);m=c-e.bottom-f+1}else m=1+f;m<0?m=1:m>u&&(m=u),i.bottom=m,Reflect.deleteProperty(i,`top`)}else m+=f,i.top=m,Reflect.deleteProperty(i,`bottom`);return i},showMenu(e,t,n){let r=this.createMenuContainerElement(!1);Reflect.set(r,s.$data.menuDataKey,{child:[]}),s.addMenuLiELement(e,r,r,t,n),A.append(o,r),document.contains(a)||(i.emit(`pops:before-append-to-page`,o,a),A.appendBody(a));let c;return c=e instanceof TouchEvent?{clientX:e.touches?.[0].clientX||0,clientY:e.touches?.[0].clientY||0}:e,this.handlerShowMenuCSS(r,c),r},showClildMenu(e,t,n,r,i,a){let c=this.createMenuContainerElement(!0);Reflect.set(c,s.$data.menuDataKey,{parent:i,root:r}),Reflect.get(r,s.$data.menuDataKey).child.push(c),s.addMenuLiELement(e,r,c,n,a),A.append(o,c);let l=i.closest(`.pops-rightClickMenu`);return this.handlerShowMenuCSS(c,t,{$menu:l,$parentItem:i}),c},handlerShowMenuCSS(e,t,i){let a=this.getOffset(e,{x:t.clientX,y:t.clientY},i);A.css(e,{...a}),r.isAnimation&&A.addClassName(e,`pops-${n}-anim-show`),r.useScaleAnimation&&(A.removeClassName(e,`pops-${n}-anim-scale-not-open`),A.addClassName(e,`pops-${n}-anim-scale-open`))},addMenuLiELement(e,t,r,i,a){let c=e.target,l=r.querySelector(`ul`);i.forEach(r=>{let i=A.parseTextToDOM(`<li></li>`);if(typeof r.icon==`string`&&r.icon.trim()!==``){let e=_.getIcon(r.icon)??r.icon,t=A.parseTextToDOM(`<i class="pops-${n}-icon" is-loading="${r.iconIsLoading??!1}">${e}</i>`);i.appendChild(t)}let u=typeof r.text==`function`?r.text():r.text;i.insertAdjacentHTML(`beforeend`,C.getSafeHTML(`<span>${u}</span>`)),r.item&&Array.isArray(r.item)&&A.addClassName(i,`pops-${n}-item`);let d=!1;function f(c){if(c.type===`touchstart`&&(d=!0),d&&c.type===`mouseenter`)return;Array.from(l.children).forEach(e=>{A.removeClassName(e,`pops-${n}-is-visited`);let t=Reflect.get(e,s.$data.menuDataKey);if(!t)return;function r(e){e&&(e.querySelectorAll(`ul li`).forEach(e=>{let t=Reflect.get(e,s.$data.menuDataKey);t?.child&&r(t.child)}),A.remove(e))}r(t.child)});let u=Reflect.get(t,s.$data.menuDataKey);for(let e=0;e<u.child.length;e++){let t=u.child[e];o.contains(t)||(u.child.splice(e,1),e--)}if(A.addClassName(i,`pops-${n}-is-visited`),!r.item)return;let f=i.getBoundingClientRect(),p=s.showClildMenu(e,{clientX:f.left+A.outerWidth(i),clientY:f.top},r.item,t,i,a);Reflect.set(i,s.$data.menuDataKey,{child:p})}async function p(n){if(typeof r.callback==`function`){try{y.Object.defineProperty(e,`target`,{get(){return c}})}catch{}let t=await r.callback(n,e,i,a);if(typeof t==`boolean`&&t==0)return}Array.from(l.children).forEach(e=>{A.off(e,`mouseenter touchstart`)}),s.closeAllMenu(t)}A.on(i,`mouseenter touchstart`,f),A.on(i,`click`,p),l.appendChild(i)})}};return s.addContextMenuEvent(r.$target,r.targetSelector),s.addWindowCheckClickListener(),{guid:t,config:r,addWindowCheckClickListener:s.addWindowCheckClickListener,removeWindowCheckClickListener:s.removeWindowCheckClickListener,addContextMenuEvent:s.addContextMenuEvent,removeContextMenuEvent:s.removeContextMenuEvent,removeInitEventListener:{contextMenu(){s.removeContextMenuEvent(r.$target,r.targetSelector)},windowClick(){s.removeWindowCheckClickListener()}},PopsContextMenu:s}}},Dt=()=>{let e=[];for(let t=0;t<10;t++)e.push({value:`测试${t}`,enableDeleteButton:!0,deleteButtonClickCallback(e,t,n,r){let i=n.value;return console.log(`删除当前项：`+i,[e,t,n,r]),!0},itemView(e){return`${e.value}-html`},clickCallback(e,n,r,i){let a=t%2==0,o=r.value;return console.log(a?`item项的点击回调,更新input内的值：`+o:`item项的点击回调：`+o,[e,n,r,i,o]),a},selectCallback(e,t,n,r){let i=n.value;console.log(`item项的选中回调：`+i,[e,t,n,r])}});return{$target:null,$inputTarget:null,$selfDocument:document,data:e,useShadowRoot:!0,className:``,isAbsolute:!0,isAnimation:!1,useFoldAnimation:!0,useArrow:!1,width:`250px`,maxHeight:`300px`,followTargetWidth:!0,topDistance:0,position:`auto`,positionTopToReverse:!0,zIndex:1e4,searchingTip:`正在搜索中...`,toSearhNotResultHTML:`<li data-none="true">暂无其它数据</li>`,toHideWithNotResult:!1,followPosition:`target`,async inputTargetChangeRefreshShowDataCallback(e,t){return console.log(`当前输入框的值是：`,e),t.filter(t=>t.value.includes(e))},style:``,lightStyle:null,darkStyle:null,emitter:null}},Ot={init(e){let t=k.getRandomGUID(),n=`searchSuggestion`,r=Dt();r=k.assign(r,h.getGlobalConfig()),r=k.assign(r,e),r.$inputTarget??(r.$inputTarget=r.$target);let i=r.emitter??new g(n),{$shadowContainer:a,$shadowRoot:o}=P.handlerShadow(r);P.handleInit(o,[{name:`index`,css:M.index},{name:`anim`,css:M.anim},{name:`common`,css:M.common},{name:`skeleton`,css:M.skeletonCSS}]),j.addStyle(o,r.style),j.addLightStyle(o,r.lightStyle),j.addDarkStyle(o,r.darkStyle);let s={capture:!0,passive:!0},c={emitter:i,selfDocument:r.$selfDocument,$el:{root:null,$dropdownWrapper:null,$dropdownContainer:null,$arrow:null,$dynamicCSS:null},$evt:{offInputChangeEvtHandler:[]},$data:{isEmpty:!0,storeNodeHandlerKey:`data-SearchSuggestion`},init(e=document.body||document.documentElement){c.initEl(),c.update(c.getData()),c.updateStyleSheet(),c.hide(),o.appendChild(c.$el.root),e.appendChild(a)},initEl(){c.$el.root=c.createSearchSelectElement(),Reflect.set(c.$el.root,this.$data.storeNodeHandlerKey,c),c.$el.$dynamicCSS=c.$el.root.querySelector(`style[data-dynamic]`),c.$el.$dropdownWrapper=c.$el.root.querySelector(`.pops-${n}-search-suggestion-dropdown-wrapper`),c.$el.$dropdownContainer=c.$el.root.querySelector(`ul.pops-${n}-search-suggestion-dropdown-container`),c.$el.$arrow=c.$el.root.querySelector(`.pops-${n}-search-suggestion-arrow`)},getData(){return typeof r.data==`function`?r.data():r.data},setData(e){r.data=e},createSearchSelectElement(){let e=A.createElement(`div`,{className:`pops pops-${n}-search-suggestion`,innerHTML:`
						<style type="text/css">
							.pops-${n}-animation{
								-moz-animation: searchSelectFalIn 0.5s 1 linear;
								-webkit-animation: searchSelectFalIn 0.5s 1 linear;
								-o-animation: searchSelectFalIn 0.5s 1 linear;
								-ms-animation: searchSelectFalIn 0.5s 1 linear;
							}
						</style>
						<style type="text/css">
							.pops-${n}-search-suggestion-arrow{
								--suggestion-arrow-box-shadow-left-color: rgba(0, 0, 0, 0.24);
								--suggestion-arrow-box-shadow-right-color: rgba(0, 0, 0, 0.12);
								--suggestion-arrow--after-color: rgb(78, 78, 78);
								--suggestion-arrow--after-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
								--suggestion-arrow--after-width: 10px;
								--suggestion-arrow--after-height: 10px;
							}
							.pops-${n}-search-suggestion-arrow{
								position: absolute;
								top: 100%;
								left: 50%;
								overflow: hidden;
								width: 100%;
								height: 12.5px;
								transform: translateX(-50%);
							}
							.pops-${n}-search-suggestion-arrow::after{
								position: absolute;
								top: 0;
								left: 50%;
								width: var(--suggestion-arrow--after-width);
								height: var(--suggestion-arrow--after-height);
								background: var(--suggestion-arrow--after-bg-color);
								color: var(--suggestion-arrow--after-color);
								box-shadow:
									0 1px 7px var(--suggestion-arrow-box-shadow-left-color),
									0 1px 7px var(--suggestion-arrow-box-shadow-right-color);
								content: "";
								transform: translateX(-50%) translateY(-50%) rotate(45deg);
							}
							.pops-${n}-search-suggestion[data-popper-placement^="top"] .pops-${n}-search-suggestion-arrow{
								position: absolute;
								top: 100%;
								left: 50%;
								overflow: hidden;
								width: 100%;
								height: 12.5px;
								transform: translateX(-50%);
							}
							.pops-${n}-search-suggestion[data-popper-placement^="top"] .pops-${n}-search-suggestion-arrow::after{
								position: absolute;
								top: 0;
								left: 50%;
								width: var(--suggestion-arrow--after-width);
								height: var(--suggestion-arrow--after-height);
								background: var(--suggestion-arrow--after-bg-color);
								box-shadow:
									0 1px 7px var(--suggestion-arrow-box-shadow-left-color),
									0 1px 7px var(--suggestion-arrow-box-shadow-right-color);
								content: "";
								transform: translateX(-50%) translateY(-50%) rotate(45deg);
							}
							.pops-${n}-search-suggestion[data-popper-placement^="bottom"] .pops-${n}-search-suggestion-arrow{
								top: -12.5px;
								left: 50%;
								transform: translateX(-50%);
							}
							.pops-${n}-search-suggestion[data-popper-placement^="bottom"] .pops-${n}-search-suggestion-arrow::after{
								position: absolute;
								top: 100%;
								left: 50%;
								content: "";
							}
						</style>
						<style type="text/css" data-dynamic="true">
							${c.getDynamicCSS()}
						</style>
						<style>
							.el-zoom-in-top-animation{
								--el-transition-md-fade: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
									opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
								transition: var(--el-transition-md-fade);
								transform-origin: center top;
							}
							.el-zoom-in-top-animation[data-popper-placement^="top"] {
								transform-origin: center bottom;
							}
							.el-zoom-in-top-animation-hide{
								opacity: 0;
								transform: scaleY(0);
							}
							.el-zoom-in-top-animation-show{
								opacity: 1;
								transform: scaleY(1);
							}
						</style>
						<style type="text/css" data-user-css>
							${r.style||``}
						</style>
            <div class="pops-${n}-search-suggestion-dropdown-wrapper">
              <ul class="pops-${n}-search-suggestion-dropdown-container ${v.userSelectNone}">${r.toSearhNotResultHTML}</ul>
            </div>
            <!-- 箭头 -->
						${r.useArrow?`<div class="pops-${n}-search-suggestion-arrow"></div>`:``}
         				 `},{"data-guid":t,"type-value":n});return r.className!==``&&r.className!=null&&A.addClassName(e,r.className),r.isAnimation&&A.addClassName(e,`pops-${n}-animation`),r.useFoldAnimation&&A.addClassName(e,`el-zoom-in-top-animation`),e},getDynamicCSS(){return`
				.pops-${n}-search-suggestion{
					--search-suggestion-bg-color: #ffffff;
					--search-suggestion-box-shadow-color: rgb(0 0 0 / 20%);
					--search-suggestion-item-color: #515a6e;
					--search-suggestion-item-none-color: #8e8e8e;
					--search-suggestion-item-is-hover-bg-color: #f5f7fa;
					--search-suggestion-item-is-select-bg-color: #409eff;
				}
				.pops-${n}-search-suggestion{
					border: initial;
					overflow: initial;
					position: ${r.isAbsolute?`absolute`:`fixed`};
					z-index: ${P.getTargerOrFunctionValue(r.zIndex)};
				}
        .pops-${n}-search-suggestion-dropdown-wrapper{
					max-height: ${r.maxHeight};
					border-radius: 4px;
					box-shadow: 0 1px 6px var(--search-suggestion-box-shadow-color);
					background-color: var(--search-suggestion-bg-color);
					padding: 5px 0;
					overflow-x: hidden;
					overflow-y: auto;
        }
				.pops-${n}-search-suggestion-dropdown-wrapper ul.pops-${n}-search-suggestion-dropdown-container{
					box-sizing: border-box;
				}
				// 建议框在上面时
				.pops-${n}-search-suggestion[data-top-reverse] ul.pops-${n}-search-suggestion-dropdown-container{
					display: flex;
					flex-direction: column-reverse;
				}
				.pops-${n}-search-suggestion[data-top-reverse] ul.pops-${n}-search-suggestion-dropdown-container li{
					flex-shrink: 0;
				}
				ul.pops-${n}-search-suggestion-dropdown-container li{
					padding: 7px;
					margin: 0;
					clear: both;
					color: var(--search-suggestion-item-color);
					font-size: 14px;
					list-style: none;
					cursor: pointer;
					transition: background .2s ease-in-out;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 100%;
				}
				ul.pops-${n}-search-suggestion-dropdown-container li[data-none]{
					text-align: center;
					font-size: 12px;
					color: var(--search-suggestion-item-none-color);
				}
				ul.pops-${n}-search-suggestion-dropdown-container li:not([data-none]):hover{
					background-color: var(--search-suggestion-item-is-hover-bg-color);
				}
				@media (prefers-color-scheme: dark){
					.pops-${n}-search-suggestion{
						--search-suggestion-bg-color: #1d1e1f;
						--search-suggestion-item-color: #cfd3d4;
						--search-suggestion-item-is-hover-bg-color: rgba(175, 175, 175, .1);
					}
				}
				`},getItemDataValue(e){return e},createSearchItemLiElement(e,t){let i=c.getItemDataValue(e),a=A.createElement(`li`,{className:`pops-${n}-search-suggestion-dropdown-item`,"data-index":t,"data-value":i});Reflect.set(a,`data-index`,t),Reflect.set(a,`data-value`,i);let o=e.itemView(e,a,r);typeof o==`string`?C.setSafeHTML(a,o):A.append(a,o);let s=e.enableDeleteButton;if(typeof s==`boolean`&&s){let e=c.createItemDeleteIcon();A.append(a,e)}return A.addClassName(a,v.flexCenter),A.addClassName(a,v.flexYCenter),a},setSearchItemClickEvent(e){A.on(e,`click`,async t=>{A.preventEvent(t);let i=t.target,a=c.getData(),o=Reflect.get(e,`data-value`);if(i.closest(`.pops-${n}-delete-icon`)){if(typeof o.deleteButtonClickCallback==`function`){let n=await o.deleteButtonClickCallback(t,e,o,r);typeof n==`boolean`&&n&&(a.splice(a.indexOf(o),1),A.remove(e))}c.$el.$dropdownContainer.children.length||c.clear(),c.updateStyleSheet()}else if(typeof o.clickCallback==`function`){let n=await o.clickCallback(t,e,o,r);typeof n==`boolean`&&n&&(r.$inputTarget instanceof HTMLInputElement||r.$inputTarget instanceof HTMLTextAreaElement)&&(r.$inputTarget.value=String(o.value))}},{capture:!0})},setSearchItemSelectEvent(e){},setInputChangeEvent(e=s){if(!(r.$inputTarget instanceof HTMLInputElement||r.$inputTarget instanceof HTMLTextAreaElement))return;r.$inputTarget.setAttribute(`autocomplete`,`off`);let t=A.onInput(r.$inputTarget,async()=>{let e=c.getData(),t=await r.inputTargetChangeRefreshShowDataCallback(r.$inputTarget.value,e,r);c.update(t),c.updateStyleSheet()},e);c.$evt.offInputChangeEvtHandler.push(t.off)},removeInputChangeEvent(){for(let e=0;e<c.$evt.offInputChangeEvtHandler.length;e++){let t=c.$evt.offInputChangeEvtHandler[e];t(),c.$evt.offInputChangeEvtHandler.splice(e,1),e--}},showEvent(){c.updateStyleSheet(),r.toHideWithNotResult&&c.$data.isEmpty?c.hide(!0):c.show()},setShowEvent(e=s){if(r.followPosition===`target`)A.on([r.$target],[`focus`,`click`],c.showEvent,e);else if(r.followPosition===`input`)A.on([r.$inputTarget],[`focus`,`click`],c.showEvent,e);else if(r.followPosition===`inputCursor`)A.on([r.$inputTarget],[`focus`,`click`,`input`],c.showEvent,e);else throw Error(`未知followPosition：`+r.followPosition)},removeShowEvent(e=s){A.off([r.$target,r.$inputTarget],[`focus`,`click`],c.showEvent,e),A.off([r.$inputTarget],[`input`],c.showEvent,e)},hideEvent(e){if(e.target instanceof Node){if(a.contains(e.target)||r.$target.contains(e.target)||r.$inputTarget.contains(e.target))return;c.hide(!0)}},setHideEvent(e=s){Array.isArray(c.selfDocument)?c.selfDocument.forEach(t=>{A.on(t,[`click`,`touchstart`],c.hideEvent,e)}):A.on(c.selfDocument,[`click`,`touchstart`],c.hideEvent,e)},removeHideEvent(e=s){Array.isArray(c.selfDocument)?c.selfDocument.forEach(t=>{A.off(t,[`click`,`touchstart`],c.hideEvent,e)}):A.off(c.selfDocument,[`click`,`touchstart`],c.hideEvent,e)},setAllEvent(e=s){c.setInputChangeEvent(e),c.setHideEvent(e),c.setShowEvent(e)},removeAllEvent(e=s){c.removeInputChangeEvent(),c.removeHideEvent(e),c.removeShowEvent(e)},createItemDeleteIcon(e=16,t=`#bababa`){return A.parseTextToDOM(`
					<svg class="pops-${n}-delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" fill="${t}">
						<path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"></path>
						<path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"></path>
					</svg>
        			`)},setPromptsInSearch(){let e=A.createElement(`li`,{className:`pops-${n}-search-suggestion-dropdown-searching-item`,innerHTML:r.searchingTip});c.addItem(e)},removePromptsInSearch(){A.remove(c.$el.$dropdownContainer.querySelector(`li.pops-${n}-search-suggestion-dropdown-searching-item`))},changeHintULElementPosition(e=r.$target??r.$inputTarget,t=!0){let n=null;if(n=r.followPosition===`inputCursor`?A.getTextBoundingRect(r.$inputTarget,r.$inputTarget.selectionStart||0,r.$inputTarget.selectionEnd||0,!1):r.isAbsolute?A.offset(e):e.getBoundingClientRect(),n==null)return;let i=document.documentElement.clientHeight;r.isAbsolute&&(i=A.height(document));let a=A.width(document),o=r.useArrow?A.height(c.$el.$arrow):0,s=r.position;if(r.position===`auto`&&(s=n.bottom+(A.height(c.$el.$dropdownWrapper)+o)>i?`top`:`bottom`),s===`top`){r.positionTopToReverse&&c.$el.root.setAttribute(`data-top-reverse`,`true`),r.useFoldAnimation&&c.$el.root.setAttribute(`data-popper-placement`,`top`);let e=i-n.top+r.topDistance+o;c.$el.root.style.top=``,c.$el.root.style.bottom=e+`px`}else if(s===`bottom`){r.useFoldAnimation&&c.$el.root.setAttribute(`data-popper-placement`,`bottom-center`);let e=n.height+n.top+r.topDistance+o;c.$el.root.removeAttribute(`data-top-reverse`),c.$el.root.style.bottom=``,c.$el.root.style.top=e+`px`}let l=n.left,u=A.width(c.$el.$dropdownWrapper);u>a&&(l=l+a-u),c.$el.root.style.left=l+`px`,t&&c.changeHintULElementPosition(e,!t)},changeHintULElementWidth(e=r.$target??r.$inputTarget){let t=e.getBoundingClientRect();r.followTargetWidth?c.$el.$dropdownWrapper.style.width=t.width+`px`:c.$el.$dropdownWrapper.style.width=r.width},updateDynamicCSS(){let e=c.getDynamicCSS();C.setSafeHTML(c.$el.$dynamicCSS,e)},updateStyleSheet(){c.updateDynamicCSS(),c.changeHintULElementWidth(),c.changeHintULElementPosition()},addItem(e){c.$el.$dropdownContainer.appendChild(e)},update(e=[]){if(!Array.isArray(e))throw TypeError(`传入的数据不是数组`);let t=e;if(t.length){c.$data.isEmpty=!1,r.toHideWithNotResult&&c.show(),c.clear(!0);let e=document.createDocumentFragment();t.forEach((t,n)=>{let r=c.createSearchItemLiElement(t,n);c.setSearchItemClickEvent(r),c.setSearchItemSelectEvent(r),e.appendChild(r)}),c.addItem(e)}else c.clear()},clear(e=!1){if(C.setSafeHTML(c.$el.$dropdownContainer,``),e)return;c.$data.isEmpty=!0;let t;t=typeof r.toSearhNotResultHTML==`string`?A.parseTextToDOM(r.toSearhNotResultHTML):r.toSearhNotResultHTML(),c.addItem(t),r.toHideWithNotResult&&c.hide()},hide(e=!1){r.useFoldAnimation?(e||A.removeClassName(c.$el.root,`el-zoom-in-top-animation`),A.addClassName(c.$el.root,`el-zoom-in-top-animation`),A.addClassName(c.$el.root,`el-zoom-in-top-animation-hide`),A.removeClassName(c.$el.root,`el-zoom-in-top-animation-show`)):c.$el.root.style.display=`none`},show(){c.$el.root.style.display=``,r.useFoldAnimation&&(A.addClassName(c.$el.root,`el-zoom-in-top-animation`),A.removeClassName(c.$el.root,`el-zoom-in-top-animation-hide`),A.addClassName(c.$el.root,`el-zoom-in-top-animation-show`))}};return c}},kt=new class e{config={version:m,cssText:M,iconSVG:_.$data,animation:tt.$data,instData:N};fn={Utils:k,DOMUtils:A,InstanceUtils:nt,MathFloatUtils:_t,InstHandler:rt,PanelHandlerComponents:xt,Animation:tt,EventEmiter:g,CommonCSSClassName:v};noConflict(){return typeof S.globalThis.pops==`object`&&k.delete(S.globalThis,`pops`),typeof unsafeWindow==`object`&&unsafeWindow!=null&&typeof unsafeWindow.pops==`object`&&k.delete(unsafeWindow,`pops`),new e}isPhone(e){return k.isPhone(e)}GlobalConfig=h;alert=e=>at.init(e);confirm=e=>st.init(e);prompt=e=>wt.init(e);loading=e=>dt.init(e);iframe=e=>ht.init(e);tooltip=e=>bt.init(e);drawer=e=>lt.init(e);folder=e=>pt.init(e);panel=e=>St.init(e);rightClickMenu=e=>Et.init(e);searchSuggestion=e=>Ot.init(e)},At=e=>(t,n)=>(e.set(t,n),n),jt=2**53-1,Mt=536870912,Nt=Mt*2,Pt=(e,t)=>n=>{let r=t.get(n),i=r===void 0?n.size:r<Nt?r+1:0;if(!n.has(i))return e(n,i);if(n.size<Mt){for(;n.has(i);)i=Math.floor(Math.random()*Nt);return e(n,i)}if(n.size>jt)throw Error(`Congratulations, you created a collection of unique numbers which uses all available integers!`);for(;n.has(i);)i=Math.floor(Math.random()*jt);return e(n,i)},Ft=new WeakMap,It=Pt(At(Ft),Ft),Lt=((e,t,n,r)=>i=>{let a=t(i);return t=>{let i=e(t);t.addEventListener(`message`,(({data:e})=>{let{id:t}=e;if(t!==null&&i.has(t)){let{reject:n,resolve:r}=i.get(t);i.delete(t),e.error===void 0?r(e.result):n(Error(e.error.message))}})),r(t)&&t.start();let o=(e,r=null,a=[])=>new Promise((o,s)=>{let c=n(i);i.set(c,{reject:s,resolve:o}),r===null?t.postMessage({id:c,method:e},a):t.postMessage({id:c,method:e,params:r},a)}),s=(e,n,r=[])=>{t.postMessage({id:null,method:e,params:n},r)},c={};for(let[e,t]of Object.entries(a))c={...c,[e]:t({call:o,notify:s})};return{...c}}})((e=>t=>{if(e.has(t))return e.get(t);let n=new Map;return e.set(t,n),n})(new WeakMap),(e=>t=>({...t,connect:({call:t})=>async()=>{let{port1:n,port2:r}=new MessageChannel,i=await t(`connect`,{port:n},[n]);return e.set(r,i),r},disconnect:({call:t})=>async n=>{let r=e.get(n);if(r===void 0)throw Error(`The given port is not connected.`);await t(`disconnect`,{portId:r})},isSupported:({call:e})=>()=>e(`isSupported`)}))(new WeakMap),It,e=>typeof e.start==`function`),Rt=e=>t=>n=>{typeof e.get(n)==`symbol`&&(e.set(n,null),t(n).then(()=>{e.delete(n)}))},zt=e=>t=>n=>{typeof e.get(n)==`symbol`&&(e.set(n,null),t(n).then(()=>{e.delete(n)}))},Bt=(e,t)=>n=>(r,i=0,...a)=>{let o=Symbol(),s=e(t);t.set(s,o);let c=()=>n(i,s).then(()=>{let e=t.get(s);if(e===void 0)throw Error(`The timer is in an undefined state.`);e===o&&(r(...a),t.get(s)===o&&c())});return c(),s},Vt=(e,t)=>n=>(r,i=0,...a)=>{let o=Symbol(),s=e(t);return t.set(s,o),n(i,s).then(()=>{let e=t.get(s);if(e===void 0)throw Error(`The timer is in an undefined state.`);e===o&&(t.delete(s),r(...a))}),s},Ht=new Map([[0,null]]),Ut=new Map([[0,null]]),Wt=Rt(Ht),Gt=zt(Ut),Kt=Bt(It,Ht),qt=Vt(It,Ut),Jt=Lt({clearInterval:({call:e})=>Wt(t=>e(`clear`,{timerId:t,timerType:`interval`})),clearTimeout:({call:e})=>Gt(t=>e(`clear`,{timerId:t,timerType:`timeout`})),setInterval:({call:e})=>Kt((t,n)=>e(`set`,{delay:t,now:performance.timeOrigin+performance.now(),timerId:n,timerType:`interval`})),setTimeout:({call:e})=>qt((t,n)=>e(`set`,{delay:t,now:performance.timeOrigin+performance.now(),timerId:n,timerType:`timeout`}))}),Yt=((e,t)=>{let n=null;return()=>{if(n!==null)return n;let r=new Blob([t],{type:`application/javascript; charset=utf-8`}),i=URL.createObjectURL(r);return n=e(i),setTimeout(()=>URL.revokeObjectURL(i)),n}})(e=>Jt(new Worker(e)),`(()=>{var e={455(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}};const t={};function r(n){const o=t[n];if(void 0!==o)return o.exports;const s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},m=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},f=new Map,h=d(globalThis.clearTimeout,f),p=new Map,w=d(globalThis.clearTimeout,p),v=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=m(f,performance,globalThis.setTimeout,v),T=m(p,performance,globalThis.setTimeout,v);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):w(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`),Xt=e=>Yt().clearInterval(e),Zt=e=>Yt().clearTimeout(e),Qt=(...e)=>Yt().setInterval(...e),$t=(...e)=>Yt().setTimeout(...e),en=`2.15.2`,tn=function(){let e=`1.4.8`,t={hookFns:[],filters:[]},n=window.unsafeWindow||document.defaultView||window,r=n.__ajaxHooker,i=n.Response.prototype,a=[`response`,`responseText`,`responseXML`],o=[`arrayBuffer`,`blob`,`formData`,`json`,`text`],s=[`responseType`,`timeout`,`withCredentials`],c=[`cache`,`credentials`,`integrity`,`keepalive`,`mode`,`priority`,`redirect`,`referrer`,`referrerPolicy`,`signal`],l=[`readystatechange`,`load`,`loadend`],u={}.toString.call.bind({}.toString),d=Object.getOwnPropertyDescriptor.bind(Object),f=()=>{},p=e=>console.error(e);function m(e){return e&&[`object`,`function`].includes(typeof e)&&typeof e.then==`function`}function h(e,...t){try{let n=e(...t);return m(n)?n.then(null,p):n}catch(e){console.error(e)}}function g(e,t,n,r){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:n,set:r})}function _(e,t,n=e[t]){g(e,t,()=>n,f)}function v(e,t,n=e[t]){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,writable:!0,value:n})}function y(e){let t={};switch(u(e)){case`[object String]`:for(let n of e.trim().split(/[\r\n]+/)){let[e,r]=n.split(/(?<=^[^:]+)\s*:\s*/);if(!r)continue;let i=e.toLowerCase();t[i]=i in t?`${t[i]}, ${r}`:r}break;case`[object Headers]`:for(let[n,r]of e)t[n]=r;break;case`[object Object]`:return{...e}}return t}function b(){this.ajaxHooker_isStopped=!0}class x{then(e){return e&&e(),new x}}class S{constructor(e){this.request=e,this.requestClone={...this.request}}_recoverRequestKey(e){e in this.requestClone?this.request[e]=this.requestClone[e]:delete this.request[e]}shouldFilter(e){let{type:t,url:n,method:r,async:i}=this.request;return e.length&&!e.find(e=>{switch(!0){case e.type&&e.type!==t:case u(e.url)===`[object String]`&&!n.includes(e.url):case u(e.url)===`[object RegExp]`&&!e.url.test(n):case e.method&&e.method.toUpperCase()!==r.toUpperCase():case`async`in e&&e.async!==i:return!1}return!0})}waitForRequestKeys(){let e=n.__ajaxHooker.hookInsts;if(!this.request.async)return e.forEach(({hookFns:e,filters:t})=>{if(!this.shouldFilter(t)){e.forEach(e=>{u(e)===`[object Function]`&&h(e,this.request)});for(let e in this.request)m(this.request[e])&&this._recoverRequestKey(e)}}),new x;let t=[],r=new Set([`type`,`async`,`response`]);return e.forEach(({hookFns:e,filters:n})=>{this.shouldFilter(n)||t.push(Promise.all(e.map((e,t)=>h(e,this.request,t))).then(()=>{let e=[];for(let t in this.request)!r.has(t)&&e.push(t);return Promise.all(e.map(e=>Promise.resolve(this.request[e]).then(t=>this.request[e]=t,()=>this._recoverRequestKey(e))))}))}),Promise.all(t)}waitForResponseKeys(e){let t=this.request.type===`xhr`?a:o;return this.request.async?Promise.resolve(h(this.request.response,e)).then(()=>Promise.all(t.map(t=>{let n=d(e,t);if(n&&`value`in n)return Promise.resolve(n.value).then(n=>e[t]=n,()=>delete e[t]);delete e[t]}))):(u(this.request.response)===`[object Function]`&&(h(this.request.response,e),t.forEach(t=>{(`get`in d(e,t)||m(e[t]))&&delete e[t]})),new x)}}let C={get(e,t){let n=d(e,t);if(n&&!n.configurable&&!n.writable&&!n.get)return e[t];let r=e.__ajaxHooker;if(r&&r.proxyProps){if(t in r.proxyProps){let e=r.proxyProps[t];return`get`in e?e.get():typeof e.value==`function`?e.value.bind(r):e.value}if(typeof e[t]==`function`)return e[t].bind(e)}return e[t]},set(e,t,n){let r=d(e,t);if(r&&!r.configurable&&!r.writable&&!r.set)return!0;let i=e.__ajaxHooker;if(i&&i.proxyProps&&t in i.proxyProps){let e=i.proxyProps[t];e.set?e.set(n):e.value=n}else e[t]=n;return!0}};class w{constructor(e){let t=this;Object.assign(t,{originalXhr:e,proxyXhr:new Proxy(e,C),resThenable:new x,proxyProps:{},proxyEvents:{}}),e.addEventListener(`readystatechange`,e=>{if(t.proxyXhr.readyState===4&&t.request&&typeof t.request.response==`function`){let e={finalUrl:t.proxyXhr.responseURL,status:t.proxyXhr.status,responseHeaders:y(t.proxyXhr.getAllResponseHeaders())},n={};for(let r of a){try{n[r]=t.originalXhr[r]}catch{}g(e,r,()=>e[r]=n[r],t=>{delete e[r],e[r]=t})}t.resThenable=new S(t.request).waitForResponseKeys(e).then(()=>{for(let r of a)t.proxyProps[r]={get:()=>(r in e||(e[r]=n[r]),e[r])}})}t.dispatchEvent(e)}),e.addEventListener(`load`,e=>t.dispatchEvent(e)),e.addEventListener(`loadend`,e=>t.dispatchEvent(e));for(let e of l){let n=`on`+e;t.proxyProps[n]={get:()=>t.proxyEvents[n]||null,set:e=>t.addEvent(n,e)}}for(let e of[`setRequestHeader`,`addEventListener`,`removeEventListener`,`open`,`send`])t.proxyProps[e]={value:t[e]}}toJSON(){}addEvent(e,t){if(e.startsWith(`on`))this.proxyEvents[e]=typeof t==`function`?t:null;else{if(typeof t==`object`&&t&&(t=t.handleEvent),typeof t!=`function`)return;this.proxyEvents[e]=this.proxyEvents[e]||new Set,this.proxyEvents[e].add(t)}}removeEvent(e,t){e.startsWith(`on`)?this.proxyEvents[e]=null:(typeof t==`object`&&t&&(t=t.handleEvent),this.proxyEvents[e]&&this.proxyEvents[e].delete(t))}dispatchEvent(e){if(e.stopImmediatePropagation=b,g(e,`target`,()=>this.proxyXhr),g(e,`currentTarget`,()=>this.proxyXhr),g(e,`srcElement`,()=>this.proxyXhr),this.proxyEvents[e.type]&&this.proxyEvents[e.type].forEach(t=>{this.resThenable.then(()=>!e.ajaxHooker_isStopped&&t.call(this.proxyXhr,e))}),e.ajaxHooker_isStopped)return;let t=this.proxyEvents[`on`+e.type];t&&this.resThenable.then(t.bind(this.proxyXhr,e))}setRequestHeader(e,t){if(this.originalXhr.setRequestHeader(e,t),!this.request)return;let n=this.request.headers;n[e]=e in n?`${n[e]}, ${t}`:t}addEventListener(...e){l.includes(e[0])?this.addEvent(e[0],e[1]):this.originalXhr.addEventListener(...e)}removeEventListener(...e){l.includes(e[0])?this.removeEvent(e[0],e[1]):this.originalXhr.removeEventListener(...e)}open(e,t,n=!0,...r){return this.request={type:`xhr`,url:t.toString(),method:e.toUpperCase(),abort:!1,headers:{},data:null,response:null,async:!!n},this.openArgs=r,this.resThenable=new x,[`responseURL`,`readyState`,`status`,`statusText`,...a].forEach(e=>{delete this.proxyProps[e]}),this.originalXhr.open(e,t,n,...r)}send(e){let t=this,n=t.originalXhr,r=t.request;if(!r)return n.send(e);r.data=e,new S(r).waitForRequestKeys().then(()=>{if(r.abort)typeof r.response==`function`&&(Object.assign(t.proxyProps,{responseURL:{value:r.url},readyState:{value:4},status:{value:200},statusText:{value:`OK`}}),l.forEach(e=>n.dispatchEvent(new Event(e))));else{n.open(r.method,r.url,r.async,...t.openArgs);for(let e in r.headers)n.setRequestHeader(e,r.headers[e]);for(let e of s)e in r&&(n[e]=r[e]);n.send(r.data)}})}}function T(){let e=new r.realXHR;return`__ajaxHooker`in e&&console.warn(`检测到不同版本的ajaxHooker，可能发生冲突！`),e.__ajaxHooker=new w(e),e.__ajaxHooker.proxyXhr}T.prototype=n.XMLHttpRequest.prototype,Object.keys(n.XMLHttpRequest).forEach(e=>T[e]=n.XMLHttpRequest[e]);function ee(e,t={}){return e?new Promise(async(a,s)=>{let l={};if(u(e)===`[object Request]`){l.method=e.method,l.headers=e.headers,e.body&&(l.body=await e.arrayBuffer());for(let t of c)l[t]=e[t];e=e.url}e=e.toString(),Object.assign(l,t),l.method=l.method||`GET`,l.headers=l.headers||{};let d={type:`fetch`,url:e,method:l.method.toUpperCase(),abort:!1,headers:y(l.headers),data:l.body,response:null,async:!0},f=new S(d);if(await f.waitForRequestKeys(),d.abort){if(typeof d.response==`function`){let e={finalUrl:d.url,status:200,responseHeaders:{}};await f.waitForResponseKeys(e);let t=o.find(t=>t in e),n=e[t];t===`json`&&typeof n==`object`&&(n=h(JSON.stringify.bind(JSON),n));let r=new Response(n,{status:200,statusText:`OK`});g(r,`type`,()=>`basic`),g(r,`url`,()=>d.url),a(r)}else s(new DOMException(`aborted`,`AbortError`))}else{l.method=d.method,l.headers=d.headers,l.body=d.data;for(let e of c)e in d&&(l[e]=d[e]);r.realFetch.call(n,d.url,l).then(e=>{if(typeof d.response==`function`){let t={finalUrl:e.url,status:e.status,responseHeaders:y(e.headers)};e.ok?o.forEach(n=>e[n]=function(){return n in t?Promise.resolve(t[n]):i[n].call(this).then(e=>(t[n]=e,f.waitForResponseKeys(t).then(()=>n in t?t[n]:e)))}):h(d.response,t)}a(e)},s)}}):r.realFetch.call(n,e,t)}function E(){let e=Object.getOwnPropertyDescriptors(this),t=r.realFetchClone.call(this);return Object.defineProperties(t,e),t}r=n.__ajaxHooker=r||{version:e,fakeXHR:T,fakeFetch:ee,fakeFetchClone:E,realXHR:n.XMLHttpRequest,realFetch:n.fetch,realFetchClone:i.clone,hookInsts:new Set},r.version!==e&&console.warn(`检测到不同版本的ajaxHooker，可能发生冲突！`),n.XMLHttpRequest=r.fakeXHR,n.fetch=r.fakeFetch,i.clone=r.fakeFetchClone,r.hookInsts.add(t);class D extends Function{call(e,...t){return e&&e.__ajaxHooker&&e.__ajaxHooker.proxyXhr===e&&(e=e.__ajaxHooker.originalXhr),Reflect.apply(this,e,t)}apply(e,t){return e&&e.__ajaxHooker&&e.__ajaxHooker.proxyXhr===e&&(e=e.__ajaxHooker.originalXhr),Reflect.apply(this,e,t||[])}}function O(e){Object.setPrototypeOf(e.nativeXMLHttpRequestSetRequestHeader,D.prototype),Object.setPrototypeOf(e.nativeXMLHttpRequestOpen,D.prototype),Object.setPrototypeOf(e.nativeXMLHttpRequestSend,D.prototype)}n.secsdk?n.secsdk.csrf&&n.secsdk.csrf.nativeXMLHttpRequestOpen&&O(n.secsdk.csrf):g(n,`secsdk`,f,e=>{delete n.secsdk,n.secsdk=e,g(e,`csrf`,f,t=>{delete e.csrf,e.csrf=t,t.nativeXMLHttpRequestOpen&&O(t)})});let te=(e,n=!1)=>{let r=!1;for(let i=t.hookFns.length-1;i>=0&&!(e===t.hookFns[i]&&(t.hookFns.splice(i,1),r=!0,n));i--);return r},ne=()=>{Array.isArray(t.filters)?t.filters.length=0:t.filters=[]};return{hook:e=>(t.hookFns.push(e),{remove:()=>te(e,!0)}),filter:e=>(Array.isArray(e)&&(t.filters=e),{remove:ne}),protect:()=>{_(n,`XMLHttpRequest`,r.fakeXHR),_(n,`fetch`,r.fakeFetch),_(i,`clone`,r.fakeFetchClone)},unhook:()=>{r.hookInsts.delete(t),r.hookInsts.size||(v(n,`XMLHttpRequest`,r.realXHR),v(n,`fetch`,r.realFetch),v(i,`clone`,r.realFetchClone),delete n.__ajaxHooker)},removeHook:te,removeFilter:ne}},nn=function(){return(function(){let e=window.unsafeWindow||document.defaultView||window,t=[],n=e.XMLHttpRequest,r=e.Response.prototype,i=Object.prototype.toString,a=e.fetch,o=[`response`,`responseText`,`responseXML`],s=[`arrayBuffer`,`blob`,`formData`,`json`,`text`],c=[`readystatechange`,`load`,`loadend`],l;function u(){}function d(e){console.error(e)}function f(e,t,n,r){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:n,set:r})}function p(e,t,n=e[t]){f(e,t,()=>n,u)}function m(e,t,n=e[t]){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,writable:!0,value:n})}function h(e){return{type:e.type,url:e.url,method:e.method&&e.method.toUpperCase()}}function g(e,t,n){return l&&!l.find(r=>(!r.type||r.type===e)&&(!r.url||(i.call(r.url)===`[object String]`?t.includes(r.url):r.url.test(t)))&&(!r.method||r.method===n.toUpperCase()))}function _(e,t){let n,r=e;for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(n=e&&e.get,n)break;r=Object.getPrototypeOf(r)}return n?n.bind(e):u}function v(e){return Promise.all(t.map(t=>Promise.resolve(t(e)).then(u,d)))}function y(e,t){return Promise.all([`url`,`method`,`abort`,`headers`,`data`].map(n=>Promise.resolve(e[n]).then(t=>e[n]=t,()=>e[n]=t[n])))}function b(){this.ajaxHooker_stopped=!0}function x(e){let t=e.target;e.stopImmediatePropagation=b,t.__ajaxHooker.hookedEvents[e.type].forEach(n=>!e.ajaxHooker_stopped&&n.call(t,e));let n=t.__ajaxHooker.hookedEvents[`on`+e.type];typeof n==`function`&&n.call(t,e)}function S(e){e.target.readyState===4?e.target.dispatchEvent(new CustomEvent(`ajaxHooker_responseReady`,{detail:e})):e.target.__ajaxHooker.delegateEvent(e)}function C(e){e.target.__ajaxHooker.delegateEvent(e)}function w(e,t,...n){let r=this.__ajaxHooker;return r.url=t.toString(),r.method=e.toUpperCase(),r.openArgs=n,r.headers={},r.originalMethods.open(e,t,...n)}function T(){let e=new n,t=e.__ajaxHooker;if(!t){t=e.__ajaxHooker={headers:{},hookedEvents:{readystatechange:new Set,load:new Set,loadend:new Set},delegateEvent:x,originalGetters:{},originalMethods:{}},e.addEventListener(`readystatechange`,S),e.addEventListener(`load`,C),e.addEventListener(`loadend`,C);for(let n of o)t.originalGetters[n]=_(e,n);for(let n of[`open`,`setRequestHeader`,`addEventListener`,`removeEventListener`])t.originalMethods[n]=e[n].bind(e);e.open=w,e.setRequestHeader=(n,r)=>{t.originalMethods.setRequestHeader(n,r),e.readyState===1&&(t.headers[n]?t.headers[n]+=`, `+r:t.headers[n]=r)},e.addEventListener=function(...e){c.includes(e[0])?t.hookedEvents[e[0]].add(e[1]):t.originalMethods.addEventListener(...e)},e.removeEventListener=function(...e){c.includes(e[0])?t.hookedEvents[e[0]].delete(e[1]):t.originalMethods.removeEventListener(...e)},c.forEach(n=>{let r=`on`+n;f(e,r,()=>t.hookedEvents[r]||null,e=>{t.hookedEvents[r]=typeof e==`function`?e:null})})}let r=e.send.bind(e);return e.send=function(n){if(e.readyState!==1)return r(n);if(t.delegateEvent=x,o.forEach(t=>{delete e[t]}),g(`xhr`,t.url,t.method))return e.addEventListener(`ajaxHooker_responseReady`,e=>{t.delegateEvent(e.detail)}),r(n);try{let i={type:`xhr`,url:t.url,method:t.method,abort:!1,headers:t.headers,data:n,response:null},a={...i};v(i).then(()=>{y(i,a).then(()=>{if(!i.abort){t.originalMethods.open(i.method,i.url,...t.openArgs);for(let e in i.headers)t.originalMethods.setRequestHeader(e,i.headers[e]);n=i.data,e.addEventListener(`ajaxHooker_responseReady`,n=>{try{if(typeof i.response==`function`){let n={finalUrl:e.responseURL,status:e.status,responseHeaders:{}};for(let t of e.getAllResponseHeaders().trim().split(/[\r\n]+/)){let e=t.split(/:\s*/);if(e.length===2){let t=e[0].toLowerCase();n.responseHeaders[t]?n.responseHeaders[t]+=`, `+e[1]:n.responseHeaders[t]=e[1]}}o.forEach(r=>{f(n,r,()=>n[r]=t.originalGetters[r](),e=>{delete n[r],n[r]=e}),f(e,r,()=>{let n=t.originalGetters[r]();return e.dispatchEvent(new CustomEvent(`ajaxHooker_readResponse`,{detail:{prop:r,val:n}})),n})}),e.addEventListener(`ajaxHooker_readResponse`,e=>{n[e.detail.prop]=e.detail.val});let r=Promise.resolve(i.response(n)).then(()=>{let t=[];return o.forEach(r=>{let i=Object.getOwnPropertyDescriptor(n,r);i&&`value`in i&&t.push(Promise.resolve(i.value).then(t=>{n[r]=t,f(e,r,()=>(e.dispatchEvent(new CustomEvent(`ajaxHooker_readResponse`,{detail:{prop:r,val:t}})),t))},u))}),Promise.all(t)},d),a={};c.forEach(e=>{a[e]=new Set([...t.hookedEvents[e]]),a[`on`+e]=t.hookedEvents[`on`+e]}),t.delegateEvent=t=>r.then(()=>{t.stopImmediatePropagation=b,a[t.type].forEach(n=>!t.ajaxHooker_stopped&&n.call(e,t));let n=a[`on`+t.type];typeof n==`function`&&n.call(e,t)})}}catch(e){console.error(e)}t.delegateEvent(n.detail)}),r(n)}})})}catch(e){console.error(e),r(n)}},e}function ee(e,t,n){s.forEach(i=>{e[i]=()=>new Promise((a,o)=>{r[i].call(e).then(e=>{if(i in t)a(t[i]);else try{t[i]=e,Promise.resolve(n(t)).then(()=>{i in t?Promise.resolve(t[i]).then(e=>a(t[i]=e),()=>a(e)):a(e)},d)}catch(t){console.error(t),a(e)}},o)})})}function E(t,n){if(t&&typeof t.toString==`function`){if(t=t.toString(),n||={},n.method=n.method||`GET`,n.headers=n.headers||{},g(`fetch`,t,n.method))return a.call(e,t,n);let o={type:`fetch`,url:t,method:n.method.toUpperCase(),abort:!1,headers:{},data:n.body,response:null};if(i.call(n.headers)===`[object Headers]`)for(let[e,t]of n.headers)o.headers[e]=t;else o.headers={...n.headers};let s={...o};return new Promise((i,c)=>{try{v(o).then(()=>{y(o,s).then(()=>{if(o.abort)return c(`aborted`);t=o.url,n.method=o.method,n.headers=o.headers,n.body=o.data,a.call(e,t,n).then(e=>{if(typeof o.response==`function`){let t={finalUrl:e.url,status:e.status,responseHeaders:{}};for(let[n,r]of e.headers)t.responseHeaders[n]=r;ee(e,t,o.response),e.clone=()=>{let n=r.clone.call(e);return ee(n,t,o.response),n}}i(e)},c)})})}catch(r){return console.error(r),a.call(e,t,n)}})}return a.call(e,t,n)}e.XMLHttpRequest=T,Object.keys(n).forEach(e=>T[e]=n[e]),T.prototype=n.prototype,e.fetch=E;let D=(e,n=!1)=>{let r=!1;for(let i=t.length-1;i>=0&&!(e===t[i]&&(t.splice(i,1),r=!0,n));i--);return r},O=()=>{Array.isArray(l)?l.length=0:l=void 0};return{hook:e=>(t.push(e),{remove:()=>D(e,!0)}),filter:e=>(l=Array.isArray(e)&&e.map(h),{remove:O}),protect:()=>{p(e,`XMLHttpRequest`,T),p(e,`fetch`,E)},unhook:()=>{m(e,`XMLHttpRequest`,n),m(e,`fetch`,a)},removeHook:D,removeFilter:O}})()},rn=function(...e){let t=null,n=null,r=()=>{},i={log:!0},a={config(e){return i=Object.assign(i,e),a},error(e){return r=e,a},run(e,i){t=e,n=i||this;let s=o(t,r,n);return s===void 0?a:s}};function o(t,n,r){let a;try{a=typeof t==`string`?Function(t).apply(r,e):t.apply(r,e)}catch(o){i.log&&(t=t,console.log(`%c ${t?.name?t?.name:`${t}`} `,`color: #f20000`),console.log(`%c ${o}`,`color: #f20000`),console.trace(t)),n&&(a=typeof n==`string`?Function(n).apply(r,[...e,o]):n.apply(r,[...e,o]))}return a}return a},I=new class{assign(e={},t={},n=!1){let r=this;if(Array.isArray(t)&&!t.filter(e=>typeof e==`object`).length)return t;if(t==null)return e;e??={};let i;i=n?t:e;for(let a in i){if(!n&&!(a in t))continue;let i=Reflect.get(e,a),o=Reflect.get(t,a);if(typeof o==`object`&&o&&a in e&&!r.isDOM(o)){let t;Array.isArray(o)?(Array.isArray(i)&&(i.length=0),t=o):t=r.assign(i,o,n),Reflect.set(e,a,t)}else Reflect.set(e,a,o)}return e}isNull(...e){let t=!0,n=[...e];for(let e of n){let n=!1;if(e==null)n=!0;else switch(typeof e){case`object`:if(typeof e[Symbol.iterator]==`function`){if(e instanceof Map)n=e.size===0;else{let t=e.length;typeof t==`number`&&(n=t===0)}}else e?.toString()===`[object Object]`&&(n=Object.keys(e).length===0);break;case`number`:n=isNaN(e)?!0:e===0;break;case`string`:{let t=e.trim();n=t.trim()===``||t===`null`||t===`undefined`;break}case`boolean`:n=!e;break;case`function`:n=!!e.toString().replace(/\s/g,``).match(/^\(.*?\)=>\{\}$|^function.*?\(.*?\)\{\}$/)}t&&=n}return t}isDOM(e){return e instanceof Node}isNotNull(...e){return!this.isNull.apply(this,e)}deepClone(e){let t=this;if(e===void 0)return;if(e===null)return null;let n=e instanceof Array?[]:{};for(let[r,i]of Object.entries(e))typeof i==`object`?Reflect.set(n,r,t.deepClone(i)):Reflect.set(n,r,i);return n}coverObjectFunctionThis(e,t){if(typeof e!=`object`||!e)throw Error(`target must be object`);t||=e,Object.keys(e).forEach(n=>{typeof e[n]==`function`&&(e[n]=e[n].bind(t))})}toJSON(e,t){let n={};return e==null?n:typeof e==`object`?e:(rn().config({log:!1}).error(()=>{rn().error(()=>{try{n=Function(`return ${e}`)()}catch(e){typeof t==`function`&&t(e)}}).run(()=>{e&&/^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\/bfnrt]|u[0-9a-fA-F]{4})/g,`@`).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g,`]`).replace(/(?:^|:|,)(?:\s*\[)+/g,``))?n=Function(`return ${e}`)():typeof t==`function`&&t(Error(`target is not JSON object`))})}).run(()=>{e=e.trim(),n=JSON.parse(e)}),n)}},an=class{windowApi={window,document};constructor(e){e&&(this.windowApi=Object.assign({},e))}getCookiesList(){return this.windowApi.document.cookie.trim()===``?[]:this.windowApi.document.cookie.split(`;`)}get(e){if(typeof e!=`string`)throw TypeError(`.get 参数cookieName 必须为字符串`);let t=this.getCookiesList(),n;for(let r of t){let t=r.trim().split(`=`),i=t[0];t.splice(0,1);let a=decodeURIComponent(t.join(``));if(i===e){n={domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:!0,httpOnly:!1,name:e,path:`/`,sameSite:`unspecified`,secure:!0,session:!1,value:a};break}}return n}list(e,t){if(e==null)throw Error(`.list 参数不能为空`);let n=[],r;try{let t={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:``,path:`/`};t=I.assign(t,e),this.getCookiesList().forEach(e=>{e=e.trim();let r=e.split(`=`),i=r[0];r.splice(0,1);let a=decodeURIComponent(r.join(``)),o=t.name instanceof RegExp?t.name:RegExp(`^${t.name}`,`g`);i.match(o)&&n.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:!0,httpOnly:!1,name:i,path:`/`,sameSite:`unspecified`,secure:!0,session:!1,value:a})})}catch(e){r=e}if(typeof t==`function`)t(n,r);else return{cookies:n,error:r}}getList(e){if(e==null)throw Error(`.list 参数不能为空`);let t=[],n={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:``,path:`/`};return n=I.assign(n,e),this.getCookiesList().forEach(e=>{e=e.trim();let r=e.split(`=`),i=r[0];r.splice(0,1);let a=decodeURIComponent(r.join(``)),o=n.name instanceof RegExp?n.name:RegExp(`^${n.name}`,`g`);i.match(o)&&t.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:!0,httpOnly:!1,name:i,path:`/`,sameSite:`unspecified`,secure:!0,session:!1,value:a})}),t}set(e,t){let n;try{let t={url:this.windowApi.window.location.href,name:``,value:``,domain:``,path:`/`,secure:!0,httpOnly:!1,expirationDate:Math.floor(Date.now())+2592e3};t=I.assign(t,e);let n=t.expirationDate?t.expirationDate:Math.floor(Date.now())+2592e3,r=`${t.name}=${decodeURIComponent(t.value)};expires=${new Date(n).toGMTString()}; path=/`;I.isNull(t.domain)&&(r+=`; domain=${t.domain}`),this.windowApi.document.cookie=r}catch(e){n=e}finally{typeof t==`function`&&t(n)}}delete(e,t){let n;try{let t={url:this.windowApi.window.location.href,name:``,path:`/`,firstPartyDomain:``};t=I.assign(t,e);let n=`${t.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${t.path}`;I.isNull(t.firstPartyDomain)&&(n+=`; domain=${t.firstPartyDomain};`),this.windowApi.document.cookie=n}catch(e){n=e}finally{typeof t==`function`&&t(n)}}parseCookie(e){if(e.trim()===``)return[];let t=e.split(`;`),n=[];for(let e of t){let t=e.trim().split(`=`),r=t[0];t.splice(0,1);let i=decodeURIComponent(t.join(``));n.push({key:r,value:i})}return n}},on=[`document.cookie`,`cookieStore`,`GM_cookie`,`GM.cookie`],sn=()=>!!((typeof GM_cookie==`object`&&GM_cookie||typeof GM_cookie==`function`)&&typeof GM_cookie?.list==`function`&&typeof GM_cookie?.set==`function`&&typeof GM_cookie?.delete==`function`),cn=()=>!!((typeof GM==`object`&&GM||typeof GM==`function`)&&(typeof GM?.cookie==`object`&&GM?.cookie||typeof GM?.cookie==`function`)&&typeof GM?.cookie?.list==`function`&&typeof GM?.cookie?.set==`function`&&typeof GM?.cookie?.delete==`function`),ln=sn()?GM_cookie:void 0,un=cn()?GM?.cookie:void 0,dn=new an,fn=class{__defaultCookieHandler=`document.cookie`;__option={};constructor(e={baseCookieHandler:this.__defaultCookieHandler}){this.setOptions(e)}get totalCookieManagerApiNameList(){return on}get baseCookieHandler(){let e=(typeof this.__option.baseCookieHandler==`function`?this.__option.baseCookieHandler(this.__defaultCookieHandler):this.__option.baseCookieHandler)??this.__defaultCookieHandler;if(typeof e==`string`){if(!this.totalCookieManagerApiNameList.includes(e))throw Error(`unknown cookie handler: ${e}`)}else throw TypeError(`unknown cookie handler type: ${e}`);return e}get cookieManager(){if(this.baseCookieHandler===`GM_cookie`)return{list(e,t){ln.list(e,e=>{t(e)})},set(e,t){ln.set(e,e=>{t(e)})},delete(e,t){ln.delete(e,e=>{t(e)})}};if(this.baseCookieHandler===`GM.cookie`)return{list(e,t){un.list().then(e=>{t(e)})},set(e,t){un.set(e).then(e=>{t(e??null)}).catch(e=>{t(e)})},delete(e,t){un.delete(e).then(e=>{t(e??null)}).catch(e=>{t(e)})}};if(this.baseCookieHandler===`cookieStore`){let e=globalThis.cookieStore;return{list(t,n){e.getAll().then(e=>{e.forEach(e=>{e.domain??=globalThis.location.hostname}),n(e)}).catch(e=>{console.error(e)})},set(t,n){e.set(t).then(()=>{n()}).catch(e=>{n(e)})},delete(t,n){e.delete(t).then(()=>{n()}).catch(e=>{n(e)})}}}return dn}get isSupportGM_cookie(){return sn()}get isSupportGM_async_cookie(){return cn()}get isSupportCookieStore(){let e=globalThis.cookieStore;return e!=null&&typeof e.set==`function`&&typeof e.getAll==`function`&&typeof e.delete==`function`&&typeof e.get==`function`&&typeof e.addEventListener==`function`&&typeof e.removeEventListener==`function`&&typeof e.dispatchEvent==`function`}setOptions(e){this.__option=e}listAll(){return new Promise((e,t)=>{try{this.cookieManager.list({},t=>{let n=t||[];n=n.sort((e,t)=>e.name.localeCompare(t.name)),e(n)})}catch(e){console.error(e),t(e)}})}clear(e){return new Promise((t,n)=>{try{this.cookieManager.list({},async n=>{let r=n||[],i={success:0,error:0,ignore:0};for(let t=0;t<r.length;t++){let n=r[t];typeof e==`function`&&e(n)?i.ignore++:await new Promise(e=>{this.delete(n).then(t=>{e(t)})})?i.error++:i.success++}t(i)})}catch(e){console.error(e),n(e)}})}get(e,t){return new Promise(async(n,r)=>{try{let t=await this.listAll(),r=typeof e==`string`?e:e.name;n(t.find(e=>e.name===r))}catch(e){console.error(e),t?.(e),r(e)}})}add(e,t){return new Promise((n,r)=>{try{Reflect.deleteProperty(e,`hostOnly`),this.cookieManager.set(e,e=>{t?.(e),n(e)})}catch(e){console.error(e),r(e)}})}delete(e,t){return new Promise((n,r)=>{try{typeof e==`string`&&(e={name:e}),this.cookieManager.delete(e,e=>{t?.(e),n(e)})}catch(e){console.error(e),r(e)}})}update(e,t){return new Promise(async n=>{let r;try{if(this.baseCookieHandler===`document.cookie`||this.baseCookieHandler===`cookieStore`){let t=await this.delete(e);if(t)throw TypeError(t.toString())}let t=await this.add(e);if(t)throw TypeError(t.toString())}catch(e){r=e}finally{t?.(r),n(r)}})}},pn=class{isHex(e){return!(typeof e!=`string`||!e.match(/^(#|)[0-9a-fA-F]{6}$/))}hexToRgba(e,t){if(!this.isHex(e))throw TypeError(`输入错误的hex：${e}`);return e&&e.replace(/\s+/g,``).length===7?`rgba(${parseInt(`0x${e.slice(1,3)}`)},${parseInt(`0x${e.slice(3,5)}`)},${parseInt(`0x${e.slice(5,7)}`)},${t})`:``}hexToRgb(e){if(!this.isHex(e))throw TypeError(`输入错误的hex：${e}`);e=e.replace(`#`,``);let t=e.match(/../g);for(let e=0;e<3;e++){let n=parseInt(t[e],16);Reflect.set(t,e,n)}return t}rgbToHex(e,t,n){let r=/^\d{1,3}$/;if(!r.test(e.toString())||!r.test(t.toString())||!r.test(n.toString()))throw TypeError(`输入错误的rgb颜色值`);let i=[e.toString(16),t.toString(16),n.toString(16)];for(let e=0;e<3;e++)i[e].length==1&&(i[e]=`0${i[e]}`);return`#${i.join(``)}`}getDarkColor(e,t){if(!this.isHex(e))throw TypeError(`输入错误的hex：${e}`);if(typeof t!=`number`&&(t=Number(t)),isNaN(t))throw TypeError(`输入错误的level：${t}`);if(t<0||t>1)throw TypeError(`level must between 0~1.0: ${t}`);let n=this.hexToRgb(e);for(let e=0;e<3;e++){let r=n[e],i=Math.floor(Number(r)*(1-t));i>255?i=255:i<0&&(i=0),Reflect.set(n,e,i)}return this.rgbToHex(n[0],n[1],n[2])}getLightColor(e,t){if(!this.isHex(e))throw TypeError(`输入错误的hex：${e}`);if(typeof t!=`number`&&(t=Number(t)),isNaN(t))throw TypeError(`输入错误的level：${t}`);if(t<0||t>1)throw TypeError(`level must between 0~1.0: ${t}`);let n=this.hexToRgb(e);for(let e=0;e<3;e++){let r=Number(n[e]),i=Math.floor(255-r*t+r);i>255?i=255:i<0&&(i=0),Reflect.set(n,e,i)}return this.rgbToHex(n[0],n[1],n[2])}},mn=class{items;constructor(...e){if(this.items=new Map,e.length===1){let t=e[0];if(Array.isArray(t))for(let e=0;e<t.length;e++){let n=t[e];if(Array.isArray(n)){let[e,t]=n;this.set(e,t)}}else if(typeof t==`object`&&t)for(let e in t)Reflect.has(t,e)&&this.set(e,t[e])}else if(e.length===2){let[t,n]=e;this.set(t,n)}}[Symbol.dispose](){this.clear()}async[Symbol.asyncDispose](){this.clear()}get length(){return this.size()}get entries(){let e=this;return function*(){let t=e.keys();for(let n of t)yield[n,e.get(n)]}}get[Symbol.iterator](){return()=>this.entries()}has(e){return this.items.has(e)}get(e){return this.items.get(e)}set(e,t){if(e===void 0)throw Error(`Utils.Dictionary().set 参数 key 不能为undefined`);this.items.set(e,t)}delete(e){return this.has(e)?this.items.delete(e):!1}keys(){let e=this.items.keys();return typeof e.toArray==`function`?e.toArray():[...e]}values(){let e=this.items.values();return typeof e.toArray==`function`?e.toArray():[...e]}clear(){this.items.clear()}size(){return this.items.size}getItems(){return this.items}concat(e){e.forEach((e,t)=>{this.items.set(t,e)})}forEach(e){this.items.forEach((t,n)=>{e(t,n,this)})}find(e){for(let[t,n]of this.items.entries()){let r=e(n,t,this);if(r)return r}}startsWith(e){let t=this.keys();for(let n of t)if(String(n).startsWith(e))return!0;return!1}getStartsWith(e){let t,n=this.keys();for(let r of n)if(String(r).startsWith(String(e))){t=this.get(r);break}return t}},hn=class{defaultApi={document,window,globalThis,self,top,setTimeout:globalThis.setTimeout.bind(globalThis),setInterval:globalThis.setInterval.bind(globalThis),clearTimeout:globalThis.clearTimeout.bind(globalThis),clearInterval:globalThis.clearInterval.bind(globalThis)};api;constructor(e){e&&(e.globalThis??(e.globalThis=e.window),e.self??(e.self=e.window)),e||=Object.assign({},this.defaultApi),this.api=Object.assign({},e)}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}get setTimeout(){return this.api.setTimeout}get setInterval(){return this.api.setInterval}get clearTimeout(){return this.api.clearTimeout}get clearInterval(){return this.api.clearInterval}},gn=new class{windowApi;constructor(e){this.windowApi=new hn(e)}selector(e,t){return this.selectorAll(e,t)[0]}selectorAll(e,t){let n=this;if(t||=n.windowApi.document,e=e.trim(),e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,``),Array.from(t.querySelectorAll(e)).filter(e=>e?.innerHTML?.trim()===``);if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let n=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];return e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,``),Array.from(t.querySelectorAll(e)).filter(e=>(e?.textContent||e?.innerText)?.includes(n))}if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let n=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],r=n.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i=``;r&&(n=n.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,``),i=r[3]);let a=new RegExp(n,i);return e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,``),Array.from(t.querySelectorAll(e)).filter(e=>!!(e?.textContent||e?.innerText)?.match(a))}return Array.from(t.querySelectorAll(e))}matches(e,t){if(t=t.trim(),e==null)return!1;if(t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,``),e.matches(t)&&e?.innerHTML?.trim()===``;if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let n=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,``);let r=e?.textContent||e?.innerText;return typeof r!=`string`&&(r=``),e.matches(t)&&r?.includes(n)}if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let n=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],r=n.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i=``;r&&(n=n.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,``),i=r[3]);let a=new RegExp(n,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,``);let o=e?.textContent||e?.innerText;return typeof o!=`string`&&(o=``),e.matches(t)&&!!o?.match(a)}return e.matches(t)}closest(e,t){if(t=t.trim(),t.match(/[^\s]{1}:empty$/gi)){t=t.replace(/:empty$/gi,``);let n=e?.closest(t);return n&&n?.innerHTML?.trim()===``?n:null}if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let n=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,``);let r=e?.closest(t);if(r){let t=e?.textContent||e?.innerText;if(typeof t==`string`&&t.includes(n))return r}return null}if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let n=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],r=n.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i=``;r&&(n=n.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,``),i=r[3]);let a=new RegExp(n,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,``);let o=e?.closest(t);if(o){let t=e?.textContent||e?.innerText;if(typeof t==`string`&&t.match(a))return o}return null}return e?.closest(t)}},_n=class{#e;#t={};#n={};constructor(){let e=this.handleText(`4e:020405060f12171f20212326292e2f313335373c40414244464a5155575a5b6263646567686a6b6c6d6e6f727475767778797a7b7c7d7f808182838485878a#909697999c9d9ea3aaafb0b1b4b6b7b8b9bcbdbec8cccfd0d2dadbdce0e2e6e7e9edeeeff1f4f8f9fafcfe,4f:00020304050607080b0c12131415161c1d212328292c2d2e31333537393b3e3f40414244454748494a4b4c525456616266686a6b6d6e7172757778797a7d8081828586878a8c8e909293959698999a9c9e9fa1a2a4abadb0b1b2b3b4b6b7b8b9babbbcbdbec0c1c2c6c7c8c9cbcccdd2d3d4d5d6d9dbe0e2e4e5e7ebecf0f2f4f5f6f7f9fbfcfdff,50:000102030405060708090a#0b0e1011131516171b1d1e20222324272b2f303132333435363738393b3d3f404142444546494a4b4d5051525354565758595b5d5e5f6061626364666768696a6b6d6e6f70717273747578797a7c7d818283848687898a8b8c8e8f909192939495969798999a9b9c9d9e9fa0a1a2a4a6aaabadaeafb0b1b3b4b5b6b7b8b9bcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdced0d1d2d3d4d5d7d8d9dbdcdddedfe0e1e2e3e4e5e8e9eaebeff0f1f2f4f6f7f8f9fafcfdfeff,51:00010203040508#090a0c0d0e0f1011131415161718191a1b1c1d1e1f2022232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e42474a4c4e4f5052535758595b5d5e5f606163646667696a6f727a7e7f838486878a8b8e8f90919394989a9d9e9fa1a3a6a7a8a9aaadaeb4b8b9babebfc1c2c3c5c8cacdced0d2d3d4d5d6d7d8d9dadcdedfe2e3e5e6e7e8e9eaeceef1f2f4f7fe,52:0405090b0c0f101314151c1e1f2122232526272a2c2f313234353c3e4445464748494b4e4f5253555758#595a5b5d5f6062636466686b6c6d6e7071737475767778797a7b7c7e808384858687898a8b8c8d8e8f91929495969798999a9ca4a5a6a7aeafb0b4b5b6b7b8b9babbbcbdc0c1c2c4c5c6c8cacccdcecfd1d3d4d5d7d9dadbdcdddee0e1e2e3e5e6e7e8e9eaebecedeeeff1f2f3f4f5f6f7f8fbfcfd,53:0102030407090a0b0c0e11121314181b1c1e1f2224252728292b2c2d2f3031323334353637383c3d404244464b4c4d505458595b5d65686a6c6d7276797b7c7d7e80818387888a8e8f#90919293949697999b9c9ea0a1a4a7aaabacadafb0b1b2b3b4b5b7b8b9babcbdbec0c3c4c5c6c7cecfd0d2d3d5dadcdddee1e2e7f4fafeff,54:000205070b1418191a1c2224252a303336373a3d3f4142444547494c4d4e4f515a5d5e5f6061636567696a6b6c6d6e6f7074797a7e7f8183858788898a8d919397989c9e9fa0a1a2a5aeb0b2b5b6b7b9babcbec3c5cacbd6d8dbe0e1e2e3e4ebeceff0f1f4f5f6f7f8f9fbfe,55:0002030405080a0b0c0d0e121315161718191a1c1d1e1f212526#28292b2d3234353638393a3b3d40424547484b4c4d4e4f515253545758595a5b5d5e5f60626368696b6f7071727374797a7d7f85868c8d8e9092939596979a9b9ea0a1a2a3a4a5a6a8a9aaabacadaeafb0b2b4b6b8babcbfc0c1c2c3c6c7c8cacbcecfd0d5d7d8d9dadbdee0e2e7e9edeef0f1f4f6f8f9fafbfcff,56:0203040506070a0b0d1011121314151617191a1c1d202122252628292a2b2e2f30333537383a3c3d3e404142434445464748494a4b4f5051525355565a5b5d5e5f6061#636566676d6e6f70727374757778797a7d7e7f80818283848788898a8b8c8d9091929495969798999a9b9c9d9e9fa0a1a2a4a5a6a7a8a9aaabacadaeb0b1b2b3b4b5b6b8b9babbbdbebfc0c1c2c3c4c5c6c7c8c9cbcccdcecfd0d1d2d3d5d6d8d9dce3e5e6e7e8e9eaeceeeff2f3f6f7f8fbfc,57:00010205070b0c0d0e0f101112131415161718191a1b1d1e202122242526272b313234353637383c3d3f414344454648494b52535455565859626365676c6e707172747578797a7d7e7f80#818788898a8d8e8f90919495969798999a9c9d9e9fa5a8aaacafb0b1b3b5b6b7b9babbbcbdbebfc0c1c4c5c6c7c8c9cacccdd0d1d3d6d7dbdcdee1e2e3e5e6e7e8e9eaebeceef0f1f2f3f5f6f7fbfcfeff,58:0103040508090a0c0e0f101213141617181a1b1c1d1f222325262728292b2c2d2e2f31323334363738393a3b3c3d3e3f4041424345464748494a4b4e4f505253555657595a5b5c5d5f6061626364666768696a6d6e6f707172737475767778797a7b7c7d7f82848687888a8b8c#8d8e8f909194959697989b9c9da0a1a2a3a4a5a6a7aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbdbebfc0c2c3c4c6c7c8c9cacbcccdcecfd0d2d3d4d6d7d8d9dadbdcdddedfe0e1e2e3e5e6e7e8e9eaedeff1f2f4f5f7f8fafbfcfdfeff,59:000103050608090a0b0c0e1011121317181b1d1e2021222326282c30323335363b3d3e3f404345464a4c4d505253595b5c5d5e5f616364666768696a6b6c6d6e6f70717275777a7b7c7e7f8085898b8c8e8f90919495989a9b9c9d9fa0a1a2a6#a7acadb0b1b3b4b5b6b7b8babcbdbfc0c1c2c3c4c5c7c8c9cccdcecfd5d6d9dbdedfe0e1e2e4e6e7e9eaebedeeeff0f1f2f3f4f5f6f7f8fafcfdfe,5a:00020a0b0d0e0f101214151617191a1b1d1e2122242627282a2b2c2d2e2f3033353738393a3b3d3e3f414243444547484b4c4d4e4f5051525354565758595b5c5d5e5f60616364656668696b6c6d6e6f7071727378797b7c7d7e808182838485868788898a8b8c8d8e8f9091939495969798999c9d9e9fa0a1a2a3a4a5a6a7a8a9abac#adaeafb0b1b4b6b7b9babbbcbdbfc0c3c4c5c6c7c8cacbcdcecfd0d1d3d5d7d9dadbdddedfe2e4e5e7e8eaecedeeeff0f2f3f4f5f6f7f8f9fafbfcfdfeff,5b:0001020304050607080a0b0c0d0e0f10111213141518191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303133353638393a3b3c3d3e3f4142434445464748494a4b4c4d4e4f52565e606167686b6d6e6f7274767778797b7c7e7f82868a8d8e90919294969fa7a8a9acadaeafb1b2b7babbbcc0c1c3c8c9cacbcdcecf#d1d4d5d6d7d8d9dadbdce0e2e3e6e7e9eaebecedeff1f2f3f4f5f6f7fdfe,5c:0002030507080b0c0d0e10121317191b1e1f2021232628292a2b2d2e2f303233353637434446474c4d5253545657585a5b5c5d5f62646768696a6b6c6d70727374757677787b7c7d7e808384858687898a8b8e8f9293959d9e9fa0a1a4a5a6a7a8aaaeafb0b2b4b6b9babbbcbec0c2c3c5c6c7c8c9cacccdcecfd0d1d3d4d5d6d7d8dadbdcdddedfe0e2e3e7e9ebeceeeff1f2f3f4f5f6f7f8f9fafcfdfeff,5d:00#01040508090a0b0c0d0f10111213151718191a1c1d1f2021222325282a2b2c2f3031323335363738393a3b3c3f4041424344454648494d4e4f5051525354555657595a5c5e5f6061626364656667686a6d6e7071727375767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f9091929394959697989a9b9c9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b8b9babbbcbdbebfc0c1c2c3c4c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d7d8d9dadcdfe0e3e4eaeced#f0f5f6f8f9fafbfcff,5e:000407090a0b0d0e1213171e1f20212223242528292a2b2c2f303233343536393a3e3f404143464748494a4b4d4e4f50515253565758595a5c5d5f60636465666768696a6b6c6d6e6f70717577797e8182838588898c8d8e92989b9da1a2a3a4a8a9aaabacaeafb0b1b2b4babbbcbdbfc0c1c2c3c4c5c6c7c8cbcccdcecfd0d4d5d7d8d9dadcdddedfe0e1e2e3e4e5e6e7e9ebecedeeeff0f1f2f3f5f8f9fbfcfd,5f:050607090c0d0e10121416191a1c1d1e21222324#282b2c2e30323334353637383b3d3e3f4142434445464748494a4b4c4d4e4f5154595a5b5c5e5f60636567686b6e6f72747576787a7d7e7f83868d8e8f919394969a9b9d9e9fa0a2a3a4a5a6a7a9abacafb0b1b2b3b4b6b8b9babbbebfc0c1c2c7c8cacbced3d4d5dadbdcdedfe2e3e5e6e8e9eceff0f2f3f4f6f7f9fafc,60:0708090b0c10111317181a1e1f2223242c2d2e3031323334363738393a3d3e404445464748494a4c4e4f5153545657585b5c5e5f606165666e71727475777e80#8182858687888a8b8e8f909193959798999c9ea1a2a4a5a7a9aaaeb0b3b5b6b7b9babdbebfc0c1c2c3c4c7c8c9cccdcecfd0d2d3d4d6d7d9dbdee1e2e3e4e5eaf1f2f5f7f8fbfcfdfeff,61:02030405070a0b0c1011121314161718191b1c1d1e21222528292a2c2d2e2f303132333435363738393a3b3c3d3e4041424344454647494b4d4f50525354565758595a5b5c5e5f606163646566696a6b6c6d6e6f717273747678797a7b7c7d7e7f808182838485868788898a8c8d8f9091929395#969798999a9b9c9e9fa0a1a2a3a4a5a6aaabadaeafb0b1b2b3b4b5b6b8b9babbbcbdbfc0c1c3c4c5c6c7c9cccdcecfd0d3d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e7e8e9eaebecedeeeff0f1f2f3f4f6f7f8f9fafbfcfdfe,62:00010203040507091314191c1d1e2023262728292b2d2f303132353638393a3b3c424445464a4f50555657595a5c5d5e5f6061626465687172747577787a7b7d818283858687888b8c8d8e8f9094999c9d9ea3a6a7a9aaadaeafb0b2b3b4b6b7b8babec0c1#c3cbcfd1d5dddee0e1e4eaebf0f2f5f8f9fafb,63:00030405060a0b0c0d0f10121314151718191c2627292c2d2e30313334353637383b3c3e3f40414447484a51525354565758595a5b5c5d60646566686a6b6c6f707273747578797c7d7e7f81838485868b8d9193949597999a9b9c9d9e9fa1a4a6abafb1b2b5b6b9bbbdbfc0c1c2c3c5c7c8cacbccd1d3d4d5d7d8d9dadbdcdddfe2e4e5e6e7e8ebeceeeff0f1f3f5f7f9fafbfcfe,64:0304060708090a0d0e111215161718191a1d1f222324#252728292b2e2f3031323335363738393b3c3e404243494b4c4d4e4f505153555657595a5b5c5d5f60616263646566686a6b6c6e6f70717273747576777b7c7d7e7f8081838688898a8b8c8d8e8f90939497989a9b9c9d9fa0a1a2a3a5a6a7a8aaabafb1b2b3b4b6b9bbbdbebfc1c3c4c6c7c8c9cacbcccfd1d3d4d5d6d9dadbdcdddfe0e1e3e5e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,65:01020304050607080a0b0c0d0e0f10111314151617191a1b1c1d1e1f2021#222324262728292a2c2d30313233373a3c3d404142434446474a4b4d4e5052535457585a5c5f606164656768696a6d6e6f7173757678797a7b7c7d7e7f8081828384858688898a8d8e8f92949596989a9d9ea0a2a3a6a8aaacaeb1b2b3b4b5b6b7b8babbbebfc0c2c7c8c9cacdd0d1d3d4d5d8d9dadbdcdddedfe1e3e4eaebf2f3f4f5f8f9fbfcfdfeff,66:0104050708090b0d1011121617181a1b1c1e2122232426292a2b2c2e3032333738393a3b3d3f40424445464748494a4d4e505158#595b5c5d5e6062636567696a6b6c6d7172737578797b7c7d7f808183858688898a8b8d8e8f909293949598999a9b9c9e9fa0a1a2a3a4a5a6a9aaabacadafb0b1b2b3b5b6b7b8babbbcbdbfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8dadedfe0e1e2e3e4e5e7e8eaebecedeeeff1f5f6f8fafbfd,67:010203040506070c0e0f1112131618191a1c1e20212223242527292e303233363738393b3c3e3f414445474a4b4d5254555758595a5b5d62636466676b6c6e717476#78797a7b7d8082838586888a8c8d8e8f9192939496999b9fa0a1a4a6a9acaeb1b2b4b9babbbcbdbebfc0c2c5c6c7c8c9cacbcccdced5d6d7dbdfe1e3e4e6e7e8eaebedeef2f5f6f7f8f9fafbfcfe,68:01020304060d1012141518191a1b1c1e1f20222324252627282b2c2d2e2f30313435363a3b3f474b4d4f52565758595a5b5c5d5e5f6a6c6d6e6f707172737578797a7b7c7d7e7f8082848788898a8b8c8d8e90919294959698999a9b9c9d9e9fa0a1a3a4a5a9aaabacaeb1b2b4b6b7b8#b9babbbcbdbebfc1c3c4c5c6c7c8cacccecfd0d1d3d4d6d7d9dbdcdddedfe1e2e4e5e6e7e8e9eaebecedeff2f3f4f6f7f8fbfdfeff,69:00020304060708090a0c0f11131415161718191a1b1c1d1e21222325262728292a2b2c2e2f313233353637383a3b3c3e4041434445464748494a4b4c4d4e4f50515253555658595b5c5f616264656768696a6c6d6f7072737475767a7b7d7e7f8183858a8b8c8e8f909192939697999a9d9e9fa0a1a2a3a4a5a6a9aaacaeafb0b2b3b5b6b8b9babcbd#bebfc0c2c3c4c5c6c7c8c9cbcdcfd1d2d3d5d6d7d8d9dadcdddee1e2e3e4e5e6e7e8e9eaebeceeeff0f1f3f4f5f6f7f8f9fafbfcfe,6a:000102030405060708090b0c0d0e0f10111213141516191a1b1c1d1e20222324252627292b2c2d2e30323334363738393a3b3c3f40414243454648494a4b4c4d4e4f515253545556575a5c5d5e5f60626364666768696a6b6c6d6e6f70727374757677787a7b7d7e7f81828385868788898a8b8c8d8f929394959698999a9b9c9d9e9fa1a2a3a4a5a6#a7a8aaadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,6b:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f252628292a2b2c2d2e2f303133343536383b3c3d3f4041424445484a4b4d4e4f5051525354555657585a5b5c5d5e5f606168696b6c6d6e6f7071727374757677787a7d7e7f808588#8c8e8f909194959798999c9d9e9fa0a2a3a4a5a6a7a8a9abacadaeafb0b1b2b6b8b9babbbcbdbec0c3c4c6c7c8c9caccced0d1d8dadcdddedfe0e2e3e4e5e6e7e8e9ecedeef0f1f2f4f6f7f8fafbfcfeff,6c:000102030408090a0b0c0e12171c1d1e2023252b2c2d31333637393a3b3c3e3f434445484b4c4d4e4f5152535658595a62636566676b6c6d6e6f71737577787a7b7c7f8084878a8b8d8e9192959697989a9c9d9ea0a2a8acafb0b4b5b6b7bac0c1c2c3c6c7c8cbcdcecfd1d2d8#d9dadcdddfe4e6e7e9ecedf2f4f9ff,6d:000203050608090a0d0f101113141516181c1d1f20212223242628292c2d2f30343637383a3f404244494c50555657585b5d5f6162646567686b6c6d707172737576797a7b7d7e7f8081838486878a8b8d8f9092969798999a9ca2a5acadb0b1b3b4b6b7b9babbbcbdbec1c2c3c8c9cacdcecfd0d2d3d4d5d7dadbdcdfe2e3e5e7e8e9eaedeff0f2f4f5f6f8fafdfeff,6e:0001020304060708090b0f12131518191b1c1e1f222627282a2c2e30313335#3637393b3c3d3e3f40414245464748494a4b4c4f5051525557595a5c5d5e606162636465666768696a6c6d6f707172737475767778797a7b7c7d8081828487888a8b8c8d8e91929394959697999a9b9d9ea0a1a3a4a6a8a9abacadaeb0b3b5b8b9bcbebfc0c3c4c5c6c8c9cacccdced0d2d6d8d9dbdcdde3e7eaebecedeeeff0f1f2f3f5f6f7f8fafbfcfdfeff,6f:000103040507080a0b0c0d0e101112161718191a1b1c1d1e1f212223252627282c2e303234353738393a3b3c3d3f404142#43444548494a4c4e4f5051525354555657595a5b5d5f60616364656768696a6b6c6f707173757677797b7d7e7f808182838586878a8b8f909192939495969798999a9b9d9e9fa0a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b7b8babbbcbdbebfc1c3c4c5c6c7c8cacbcccdcecfd0d3d4d5d6d7d8d9dadbdcdddfe2e3e4e5e6e7e8e9eaebecedf0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,70:000102030405060708090a0b0c0d0e0f1012131415161718191c1d1e1f2021222425262728292a#2b2c2d2e2f30313233343637383a3b3c3d3e3f404142434445464748494a4b4d4e505152535455565758595a5b5c5d5f606162636465666768696a6e7172737477797a7b7d818283848687888b8c8d8f90919397989a9b9e9fa0a1a2a3a4a5a6a7a8a9aab0b2b4b5b6babebfc4c5c6c7c9cbcccdcecfd0d1d2d3d4d5d6d7dadcdddee0e1e2e3e5eaeef0f1f2f3f4f5f6f8fafbfcfeff,71:0001020304050607080b0c0d0e0f111214171b1c1d1e1f2021222324252728292a2b2c2d2e323334#353738393a3b3c3d3e3f4041424344464748494b4d4f505152535455565758595a5b5d5f6061626365696a6b6c6d6f707174757677797b7c7e7f8081828385868788898b8c8d8e909192939596979a9b9c9d9ea1a2a3a4a5a6a7a9aaabadaeafb0b1b2b4b6b7b8babbbcbdbebfc0c1c2c4c5c6c7c8c9cacbcccdcfd0d1d2d3d6d7d8d9dadbdcdddedfe1e2e3e4e6e8e9eaebecedeff0f1f2f3f4f5f6f7f8fafbfcfdfeff,72:0001020304050708090a0b0c0d0e0f101112131415161718191a#1b1c1e1f2021222324252627292b2d2e2f3233343a3c3e40414243444546494a4b4e4f505153545557585a5c5e60636465686a6b6c6d707173747677787b7c7d828385868788898c8e9091939495969798999a9b9c9d9ea0a1a2a3a4a5a6a7a8a9aaabaeb1b2b3b5babbbcbdbebfc0c5c6c7c9cacbcccfd1d3d4d5d6d8dadb#95$,30:000102,00b702:c9c7,00a830:0305,2014ff5e20:162618191c1d,30:141508090a0b0c0d0e0f16171011,00:b1d7f7,22:362728110f2a2908371aa52520,231222:992b2e614c483d1d606e6f64651e3534,26:4240,00b020:3233,2103ff0400a4ff:e0e1,203000a7211626:0605,25:cbcfcec7c6a1a0b3b2,203b21:92909193,30:13#95$,21:70717273747576777879#4$,24:88898a8b8c8d8e8f909192939495969798999a9b7475767778797a7b7c7d7e7f808182838485868760616263646566676869##,32:20212223242526272829##,21:606162636465666768696a6b#97$,ff:010203e505060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5de3#95$,30:4142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f90919293#106$a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6#103$,03:9192939495969798999a9b9c9d9e9fa0a1a3a4a5a6a7a8a9#6$b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c3c4c5c6c7c8c9#5$,fe:3536393a3f403d3e41424344##3b3c373831#3334#104$,04:10111213141501161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f#13$30313233343551363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f#11$,02:cacbd9,20:13152535,21:050996979899,22:151f23526667bf,25:505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727381828384858687#88898a8b8c8d8e8f939495bcbde2e3e4e5,2609229530:121d1e#9$,010100e101ce00e0011300e9011b00e8012b00ed01d000ec014d00f301d200f2016b00fa01d400f901:d6d8dadc,00:fcea,0251e7c701:4448,e7c802:61#2$,31:05060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223242526272829#19$,30:212223242526272829,32a333:8e8f9c9d9ea1c4ced1d2d5,fe30ff:e2e4#,212132:31#,20:10#1$,30:fc9b9cfdfe069d9e,fe:494a4b4c4d4e4f50515254555657595a5b5c5d5e5f6061#626364656668696a6b,e7:e7e8e9eaebecedeeeff0f1f2f3,30:07#11$,25:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b#13$,72:dcdddfe2e3e4e5e6e7eaebf5f6f9fdfeff,73:00020405060708090b0c0d0f1011121418191a1f2023242627282d2f30323335363a3b3c3d404142434445464748#494a4b4c4e4f515354555658595a5b5c5d5e5f6162636465666768696a6b6e7071#92$72737475767778797a7b7c7d7f808182838586888a8c8d8f90929394959798999a9c9d9ea0a1a3a4a5a6a7a8aaacadb1b4b5b6b8b9bcbdbebfc1c3c4c5c6c7#cbccced2d3d4d5d6d7d8dadbdcdddfe1e2e3e4e6e8eaebeceeeff0f1f3f4f5f6f7#92$f8f9fafbfcfdfeff,74:0001020407080b0c0d0e1112131415161718191c1d1e1f2021232427292b2d2f31323738393a3b3d3e3f4042434445464748494a4b4c4d#4e4f505152535456585d606162636465666768696a6b6c6e6f717273747578797a#92$7b7c7d7f8284858688898a8c8d8f9192939495969798999a9b9d9fa0a1a2a3a4a5a6aaabacadaeafb0b1b2b3b4b5b6b7b8b9bbbcbdbebfc0c1c2c3c4c5c6c7#c8c9cacbcccdcecfd0d1d3d4d5d6d7d8d9dadbdddfe1e5e7e8e9eaebecedf0f1f2#92$f3f5f8f9fafbfcfdfe,75:0001020305060708090a0b0c0e1012141516171b1d1e202122232426272a2e3436393c3d3f414243444647494a4d5051525355565758#5d5e5f60616263646768696b6c6d6e6f7071737576777a7b7c7d7e808182848587#92$88898a8c8d8e909395989b9c9ea2a6a7a8a9aaadb6b7babbbfc0c1c6cbcccecfd0d1d3d7d9dadcdddfe0e1e5e9ecedeeeff2f3f5f6f7f8fafbfdfe,76:02040607#08090b0d0e0f11121314161a1c1d1e212327282c2e2f31323637393a3b3d414244#92$45464748494a4b4e4f50515253555758595a5b5d5f6061626465666768696a6c6d6e7071727374757677797a7c7f80818385898a8c8d8f9092949597989a9b#9c9d9e9fa0a1a2a3a5a6a7a8a9aaabacadafb0b3b5b6b7b8b9babbbcbdbec0c1c3,554a963f57c3632854ce550954c076:914c,853c77ee827e788d72319698978d6c285b894ffa630966975cb880fa684880ae660276ce51f9655671ac7ff1888450b2596561ca6fb382ad634c625253ed54277b06516b75a45df462d48dcb9776628a8019575d97387f627238767d67cf767e64464f708d2562dc7a17659173ed642c6273822c9881677f724862:6ecc,4f3474e3534a529e7eca90a65e2e6886699c81807ed168d278c5868c9551508d8c2482de80de53058912526576:c4c7c9cbccd3d5d9dadcdddee0e1e2e3e4e6e7e8e9eaebecedf0f3f5f6f7fafbfdff,77:00020305060a0c0e0f1011121314151617181b1c1d1e21232425272a2b#2c2e3031323334393b3d3e3f4244454648494a4b4c4d4e4f52535455565758595c,858496f94fdd582199715b9d62:b1a5,66b48c799c8d7206676f789160b253:5117,8f8880cc8d1d94a1500d72c8590760eb711988ab595482ef672c7b285d297ef7752d6cf58e668ff8903c9f3b6bd491197b145f7c78a784d6853d6b:d5d9d6,5e:0187,75f995ed655d5f:0ac5,8f9f58c181c2907f965b97ad8fb97f168d2c62414fbf53:d85e,8f:a8a9ab,904d68075f6a819888689cd6618b522b762a5f6c658c6fd26ee85bbe644851:75b0,67c44e1979c9997c70b377:5d5e5f606467696a6d6e6f7071727374757677787a7b7c818283868788898a8b8f90939495969798999a9b9c9d9ea1a3a4a6a8abadaeafb1b2b4b6b7b8b9ba#bcbec0c1c2c3c4c5c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d8d9dadddedfe0e1e4,75c55e7673bb83e064ad62e894b56ce2535a52c3640f94c27b944f2f5e1b823681:168a,6e246cca9a736355535c54fa886557e04e0d5e036b657c3f90e8601664e6731c88c16750624d8d22776c8e2991c75f6983dc8521991053c286956b8b60:ede8,707f82:cd31,4ed36ca785cf64cd7cd969fd66f9834953957b564fa7518c6d4b5c428e6d63d253c983:2c36,67e578b4643d5bdf5c945dee8be762c667f48c7a640063ba8749998b8c177f2094f24ea7961098a4660c731677:e6e8eaeff0f1f2f4f5f7f9fafbfc,78:0304050607080a0b0e0f101315191b1e20212224282a2b2e2f31323335363d3f414243444648494a4b4d4f51535458595a#5b5c5e5f606162636465666768696f7071727374757678797a7b7d7e7f80818283,573a5c1d5e38957f507f80a05382655e7545553150218d856284949e671d56326f6e5de2543570928f66626f64a463a35f7b6f8890f481e38fb05c1866685ff16c8996488d81886c649179f057ce6a59621054484e587a0b60e96f848bda627f901e9a8b79e4540375f4630153196c608fdf5f1b9a70803b9f7f4f885c3a8d647fc565a570bd51:45b2,866b5d075ba062bd916c75748e0c7a2061017b794ec77ef877854e1181ed521d51fa6a7153a88e87950496cf6ec19664695a78:848586888a8b8f9092949596999d9ea0a2a4a6a8a9aaabacadaeafb5b6b7b8babbbcbdbfc0c2c3c4c6c7c8cccdcecfd1d2d3d6d7d8dadbdcdddedfe0e1e2e3#e4e5e6e7e9eaebedeeeff0f1f3f5f6f8f9fbfcfdfeff,79:00020304060708090a0b0c,784050a877d7641089e6590463e35ddd7a7f693d4f20823955984e3275ae7a975e:628a,95ef521b5439708a6376952457826625693f918755076df37eaf882262337ef075b5832878c196cc8f9e614874f78bcd6b64523a8d506b21806a847156f153064e:ce1b,51d17c97918b7c074fc38e7f7be17a9c64675d1450ac810676017cb96dec7fe067515b:58f8,78cb64:ae13,63:aa2b,9519642d8fbe7b5476296253592754466b7950a362345e266b864ee38d37888b5f85902e79:0d0e0f1011121415161718191a1b1c1d1f2021222325262728292a2b2c2d2e2f3031323335363738393d3f42434445474a4b4c4d4e4f505152545558596163#6466696a6b6c6e70717273747576797b7c7d7e7f8283868788898b8c8d8e909192,6020803d62c54e39535590f863b880c665e66c2e4f4660ee6de18bde5f3986cb5f536321515a83616863520063638e4850125c9b79775bfc52307a3b60bc905376d75f:b797,76848e6c706f767b7b4977aa51f3909358244f4e6ef48fea654c7b1b72c46da47fdf5ae162b55e95573084827b2c5e1d5f1f90127f1498a063826ec7789870b95178975b57ab75354f4375385e9760e659606dc06bbf788953fc96d551cb52016389540a94938c038dcc7239789f87768fed8c0d53e079:939495969798999b9c9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b6b7b8bcbfc2c4c5c7c8cacccecfd0d3d4d6d7d9dadbdcdddee0e1e2e5e8ea#eceef1f2f3f4f5f6f7f9fafcfeff,7a:0104050708090a0c0f10111213151618191b1c,4e0176ef53ee948998769f0e952d5b9a8ba24e:221c,51ac846361c252a8680b4f97606b51bb6d1e515c6296659796618c46901775d890fd77636bd272:8aec,8bfb583577798d4c675c9540809a5ea66e2159927aef77ed953b6bb565ad7f0e58065151961f5bf958a954288e726566987f56e4949d76fe9041638754c659:1a3a,579b8eb267358dfa8235524160f0581586fe5ce89e454fc4989d8bb95a2560765384627c904f9102997f6069800c513f80335c1499756d314e8c7a:1d1f21222425262728292a2b2c2d2e2f303132343536383a3e4041424344454748494a4b4c4d4e4f50525354555658595a5b5c5d5e5f606162636465666768#696a6b6c6d6e6f717273757b7c7d7e828587898a8b8c8e8f909394999a9b9ea1a2,8d3053d17f5a7b4f4f104e4f96006cd573d085e95e06756a7ffb6a0a77fe94927e4151e170e653cd8fd483038d2972af996d6cdb574a82b365b980aa623f963259a84eff8bbf7eba653e83f2975e556198de80a5532a8bfd542080ba5e9f6cb88d3982ac915a54296c1b52067eb7575f711a6c7e7c89594b4efd5fff61247caa4e305c0167ab87025cf0950b98ce75af70fd902251af7f1d8bbd594951e44f5b5426592b657780a45b7562:76c2,8f905e456c1f7b264f:0fd8,670d7a:a3a4a7a9aaabaeafb0b1b2b4b5b6b7b8b9babbbcbdbec0c1c2c3c4c5c6c7c8c9cacccdcecfd0d1d2d3d4d5d7d8dadbdcdde1e2e4e7e8e9eaebeceef0f1f2f3#f4f5f6f7f8fbfcfe,7b:0001020507090c0d0e1012131617181a1c1d1f21222327292d,6d:6eaa,798f88b15f17752b629a8f854fef91dc65a781:2f51,5e9c81508d74526f89868d4b590d50854ed8961c723681798d1f5bcc8ba3964459877f1a549056:760e,8be565396982949976d66e895e72751867:46d1,7aff809d8d76611f79c665628d635188521a94a27f38809b7eb25c976e2f67607bd9768b9ad8818f7f947cd5641e95507a3f54:4ae5,6b4c640162089e3d80f3759952729769845b683c86e496:0194,94ec4e2a54047ed968398ddf801566f45e9a7fb97b:2f303234353637393b3d3f404142434446484a4d4e535557595c5e5f61636465666768696a6b6c6d6f70737476787a7c7d7f81828384868788898a8b8c8e8f#9192939698999a9b9e9fa0a3a4a5aeafb0b2b3b5b6b7b9babbbcbdbebfc0c2c3c4,57c2803f68975de5653b529f606d9f9a4f9b8eac516c5bab5f135de96c5e62f18d21517194a952fe6c9f82df72d757a267848d2d591f8f9c83c754957b8d4f306cbd5b6459d19f1353e486ca9aa88c3780a16545987e56fa96c7522e74dc52505be1630289024e5662d0602a68fa51735b9851a089c27ba199867f5060ef704c8d2f51495e7f901b747089c4572d78455f529f9f95fa8f689b3c8be17678684267dc8d:ea35,523d8f8a6eda68cd950590ed56fd679c88f98fc754c87b:c5c8c9cacbcdcecfd0d2d4d5d6d7d8dbdcdedfe0e2e3e4e7e8e9ebecedeff0f2f3f4f5f6f8f9fafbfdff,7c:0001020304050608090a0d0e101112131415171819#1a1b1c1d1e20212223242528292b2c2d2e2f3031323334353637393a3b3c3d3e42,9ab85b696d776c264ea55bb39a87916361a890af97e9542b6db55bd251fd558a7f:55f0,64bc634d65f161be608d710a6c:5749,592f676d822a58d5568e8c6a6beb90dd597d801753f76d695475559d83:77cf,683879be548c4f55540876d28c8996026cb36db88d6b89109e648d3a563f9ed175d55f8872e0606854fc4ea86a2a886160528f7054c470d886799e3f6d2a5b8f5f187ea255894faf7334543c539a501954:0e7c,4e4e5ffd745a58f6846b80e1877472d07cca6e567c:434445464748494a4b4c4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f70717275767778797a7e7f8081828384858687#888a8b8c8d8e8f90939496999a9ba0a1a3a6a7a8a9abacadafb0b4b5b6b7b8babb,5f27864e552c62a44e926caa623782b154d7534e733e6ed1753b521253168bdd69d05f8a60006dee574f6b2273af68538fd87f13636260a3552475ea8c6271156da35ba65e7b8352614c9ec478fa87577c27768751f060f6714c66435e4c604d8c0e707063258f895fbd606286d456de6bc160946167534960e066668d3f79fd4f1a70e96c478b:b3f2,7ed88364660f5a5a9b426d:51f7,8c416d3b4f19706b83b7621660d1970d8d27797851fb57:3efa,673a75787a3d79ef7b957c:bfc0c2c3c4c6c9cbcecfd0d1d2d3d4d8dadbdddee1e2e3e4e5e6e7e9eaebecedeef0f1f2f3f4f5f6f7f9fafcfdfeff,7d:000102030405060708090b0c0d0e0f10#1112131415161718191a1b1c1d1e1f212324252628292a2c2d2e30313233343536,808c99658ff96fc08ba59e2159ec7ee97f095409678168d88f917c4d96c653ca602575be6c7253735ac97ea7632451e0810a5df184df628051805b634f0e796d524260b86d4e5b:c4c2,8b:a1b0,65e25fcc964559937e:e7aa,560967b759394f735bb652a0835a988a8d3e753294be50477a3c4ef767b69a7e5ac16b7c76d1575a5c167b3a95f4714e517c80a9827059787f04832768c067ec78:b177,62e363617b804fed526a51cf835069db92748d:f531,89c1952e7bad4ef67d:3738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6f70717273747576#78797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798,506582305251996f6e:1085,6da75efa50f559dc5c066d466c5f7586848b686859568bb253209171964d854969127901712680f64ea490ca6d479a845a0756bc640594f077eb4fa5811a72e189d2997a7f347ede527f655991758f:7f83,53eb7a9663:eda5,768679f888579636622a52ab8282685467706377776b7aed6d017ed389e359d0621285c982a5754c501f4ecb75a58beb5c4a5dfe7b4b65a491d14eca6d25895f7d2795264ec58c288fdb9773664b79818fd170ec6d787d:999a9b9c9d9e9fa0a1a2a3a4a5a7a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9#dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fa,5c3d52b283465162830e775b66769cb84eac60ca7c:beb3,7ecf4e958b66666f988897595883656c955c5f8475c997567a:dfde,51c070af7a9863ea7a767ea0739697ed4e4570784e5d915253a965:51e7,81fc8205548e5c31759a97a062d872d975bd5c459a7983ca5c40548077e94e3e6cae805a62d2636e5de851778ddd8e1e952f4ff153e560e770ac526763509e435a1f5026773753777ee26485652b628963985014723589c951b38bc07edd574783cc94a7519b541b5cfb7d:fbfcfdfeff,7e:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f30313233343536373839#3a3c3d3e3f40424344454648494a4b4c4d4e4f505152535455565758595a5b5c5d,4fca7ae36d5a90e19a8f55805496536154af5f0063e9697751ef6168520a582a52d8574e780d770b5eb761777ce062:5b97,4ea27095800362f770e49760577782db67ef68f578d5989779d158f354b353ef6e34514b523b5ba28bfe80af554357a660735751542d7a7a60505b5463a762a053e362635bc767af54ed7a9f82e691775e9388e4593857ae630e8de880ef57577b774fa95feb5bbd6b3e53217b5072c2684677:ff36,65f751b54e8f76d45cbf7aa58475594e9b4150807e:5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f909192939495969798999a9c9d9e#aeb4bbbcd6e4ecf9,7f:0a101e37393b3c3d3e3f404143464748494a4b4c4d4e4f5253,998861276e8357646606634656f062:ec69,5ed39614578362c955878721814a8fa3556683b167658d5684dd5a6a680f62e67bee961151706f9c8c3063fd89c861d27f0670c26ee57405699472fc5eca90ce67176d6a635e52b3726280014f6c59e5916a70d96d9d52d24e5096f7956d857e78ca7d2f5121579264c2808b7c7b6cea68f1695e51b7539868a872819ece7bf172f879bb6f137406674e91cc9ca4793c83:8954,540f68174e3d538952b1783e5386522950884f:8bd0,7f:56595b5c5d5e6063646566676b6c6d6f7073757677787a7b7c7d7f8082838485868788898b8d8f9091929395969798999b9ca0a2a3a5a6a8a9aaabacadaeb1#b3b4b5b6b7babbbec0c2c3c4c6c7c8c9cbcdcfd0d1d2d3d6d7d9dadbdcdddee2e3,75e27acb7c926ca596b6529b748354e94fe9805483b28fde95705ec9601c6d9f5e18655b813894fe604b70bc7ec37cae51c968817cb1826f4e248f8691cf667e4eae8c0564a9804a50da759771ce5be58fbd6f664e86648295635ed66599521788c270c852a3730e7433679778f797164e3490bb9cde6dcb51db8d41541d62ce73b283f196f69f8494c34f367f9a51cc707596755cad988653e64ee46e9c740969b4786b998f7559521876246d4167f3516d9f99804b54997b3c7abf7f:e4e7e8eaebecedeff2f4f5f6f7f8f9fafdfeff,80:020708090a0e0f11131a1b1d1e1f2123242b2c2d2e2f303234393a3c3e404144454748494e4f505153555657#595b5c5d5e5f6061626364656667686b6c6d6e6f7072737475767778797a7b7c7d,9686578462e29647697c5a0464027bd36f0f964b82a6536298855e90708963b35364864f9c819e93788c97328d:ef42,9e7f6f5e79845f559646622e9a74541594dd4fa365c55c:6561,7f1586516c2f5f8b73876ee47eff5ce6631b5b6a6ee653754e7163a0756562a18f6e4f264ed16ca67eb68bba841d87ba7f57903b95237ba99aa188f8843d6d1b9a867edc59889ebb739b780186829a:6c82,561b541757cb4e709ea653568fc881097792999286ee6ee1851366fc61626f2b80:7e818285888a8d8e8f909192949597999ea3a6a7a8acb0b3b5b6b8b9bbc5c7c8c9cacbcfd0d1d2d3d4d5d8dfe0e2e3e6eef5f7f9fbfeff,81:000103040507080b#0c1517191b1c1d1f202122232425262728292a2b2d2e3033343537393a3b3c3d3f,8c298292832b76f26c135fd983bd732b8305951a6bdb77db94c6536f830251925e3d8c8c8d384e4873ab679a68859176970971646ca177095a9295416bcf7f8e66275bd059b95a9a95:e8f7,4eec84:0c99,6aac76df9530731b68a65b5f772f919a97617cdc8ff78c1c5f257c7379d889c56ccc871c5bc65e4268c977207ef551:954d,52c95a297f05976282d763cf778485d079d26e3a5e9959998511706d6c1162bf76bf654f60af95fd660e879f9e2394ed54:0d7d,8c2c647881:40414243444547494d4e4f525657585b5c5d5e5f6162636466686a6b6c6f727375767778818384858687898b8c8d8e90929394959697999a9e9fa0a1a2a4a5#a7a9abacadaeafb0b1b2b4b5b6b7b8b9bcbdbebfc4c5c7c8c9cbcdcecfd0d1d2d3,647986116a21819c78e864699b5462b9672b83ab58a89ed86cab6f205bde964c8c0b725f67d062c772614ea959c66bcd589366ae5e5552df6155672876ee776672677a4662ff54:ea50,94a090a35a1c7eb36c164e435976801059485357753796be56ca63208111607c95f96dd65462998151855ae980fd59ae9713502a6ce55c3c62df4f60533f817b90066eba852b62c85e7478be64b5637b5ff55a18917f9e1f5c3f634f80425b7d556e95:4a4d,6d8560a867e072de51dd5b8181:d4d5d6d7d8d9dadbdcdddedfe0e1e2e4e5e6e8e9ebeeeff0f1f2f5f6f7f8f9fafdff,82:030708090a0b0e0f111315161718191a1d2024252627292e323a3c3d3f#404142434546484a4c4d4e5051525354555657595b5c5d5e606162636465666769,62e76cde725b626d94ae7ebd81136d53519c5f04597452aa6012597366968650759f632a61e67cef8bfa54e66b279e256bb485d5545550766ca4556a8db4722c5e156015743662cd6392724c5f986e436d3e65006f5876d878d076fc7554522453db4e535e9e65c180:2ad6,629b5486522870ae888d8dd16ce1547880da57f988f48d54966a914d4f696c9b55b776c6783062a870f96f8e5f6d84ec68da787c7bf781a8670b9e4f636778b0576f7812973962:79ab,528874356bd782:6a6b6c6d71757677787b7c808183858687898c90939495969a9b9ea0a2a3a7b2b5b6babbbcbfc0c2c3c5c6c9d0d6d9dadde2e7e8e9eaecedeef0f2f3f5f6f8#fafcfdfeff,83:000a0b0d1012131618191d1e1f20212223242526292a2e3032373b3d,5564813e75b276ae533975de50fb5c418b6c7bc7504f72479a9798d86f0274e27968648777a562fc98918d2b54c180584e52576a82f9840d5e7351ed74f68bc45c4f57616cfc98875a4678349b448feb7c955256625194fa4ec68386846183e984b257d467345703666e6d668c3166dd7011671f6b3a6816621a59bb4e0351c46f0667d26c8f517668cb59476b6775665d0e81109f5065d779:4841,9a918d775c824e5e4f01542f5951780c56686c148fc45f036c:7de3,8bab639083:3e3f41424445484a4b4c4d4e5355565758595d6270717273747576797a7e7f808182838487888a8b8c8d8f909194959697999a9d9fa1a2a3a4a5a6a7acadae#afb5bbbebfc2c3c4c6c8c9cbcdced0d1d2d3d5d7d9dadbdee2e3e4e6e7e8ebeced,60706d3d7275626694:8ec5,53438fc17b7e4edf8c264e7e9ed494:b1b3,524d6f5c90636d458c3458115d4c6b:2049,67aa545b81547f8c589985375f3a62a26a47953965726084686577a74e544fa85de7979864ac7fd85ced4fcf7a8d520783044e14602f7a8394a64fb54eb279e6743452e482b964d279bd5bdd6c8197528f7b6c22503e537f6e0564ce66746c3060c598778bf75e86743c7a7779cb4e1890b174036c4256da914b6cc58d8b533a86c666f28eaf5c489a716e2083:eeeff3f4f5f6f7fafbfcfeff,84:0002050708090a10121314151617191a1b1e1f20212223292a2b2c2d2e2f30323334353637393a3b3e3f404142434445474849#4a4b4c4d4e4f505253545556585d5e5f606264656667686a6e6f70727477797b7c,53d65a369f8b8da353bb570898a76743919b6cc9516875ca62f372ac52:389d,7f3a7094763853749e4a69b7786e96c088d97fa471:36c3,518967d374e458e4651856b78ba9997662707ed560f970ed58ec4e:c1ba,5fcd97e74efb8ba45203598a7eab62544ecd65e5620e833884c98363878d71946eb65bb97ed2519763c967d480898339881551125b7a59828fb14e736c5d516589258f6f962e854a745e95:10f0,6da682e55f3164926d128428816e9cc3585e8d5b4e0953c184:7d7e7f8081838485868a8d8f90919293949596989a9b9d9e9fa0a2a3a4a5a6a7a8a9aaabacadaeb0b1b3b5b6b7bbbcbec0c2c3c5c6c7c8cbcccecfd2d4d5d7#d8d9dadbdcdee1e2e4e7e8e9eaebedeeeff1f2f3f4f5f6f7f8f9fafbfdfe,85:000102,4f1e6563685155d34e2764149a9a626b5ac2745f82726da968ee50e7838e7802674052396c997eb150bb5565715e7b5b665273ca82eb67495c715220717d886b95ea965564c58d6181b355846c5562477f2e58924f2455468d4f664c4e0a5c1a88f368a2634e7a0d70e7828d52fa97f65c1154e890b57ecd59628d4a86c782:0c0d,8d6664445c0461516d89793e8bbe78377533547b4f388eab6df15a207ec5795e6c885ba15a76751a80be614e6e1758f075:1f25,727253477ef385:030405060708090a0b0d0e0f101214151618191b1c1d1e2022232425262728292a2d2e2f303132333435363e3f404142444546474b4c4d4e4f505152535455#57585a5b5c5d5f60616263656667696a6b6c6d6e6f707173757677787c7d7f8081,770176db526980dc57235e08593172ee65bd6e7f8bd75c388671534177f362fe65f64ec098df86805b9e8bc653f277e24f7f5c4e9a7659cb5f0f793a58eb4e1667ff4e8b62ed8a93901d52bf662f55dc566c90024ed54f8d91ca99706c0f5e0260435ba489c68bd56536624b99965b:88ff,6388552e53d77626517d852c67a268b36b8a62928f9353d482126dd1758f4e668d4e5b70719f85af66:91d9,7f7287009ecd9f205c5e672f8ff06811675f620d7ad658855eb665706f3185:82838688898a8b8c8d8e909192939495969798999a9d9e9fa0a1a2a3a5a6a7a9abacadb1b2b3b4b5b6b8babbbcbdbebfc0c2c3c4c5c6c7c8cacbcccdced1d2#d4d6d7d8d9dadbdddedfe0e1e2e3e5e6e7e8eaebecedeeeff0f1f2f3f4f5f6f7f8,60555237800d6454887075295e05681362f4971c53cc723d8c016c3477617a0e542e77ac987a821c8bf47855671470c165af64955636601d79c153f84e1d6b7b80865bfa55e356db4f:3a3c,99725df3677e80386002988290015b8b8b:bcf5,641c825864de55fd82cf91654fd77d20901f7c9f50f358516eaf5bbf8bc980839178849c7b97867d96:8b8f,7ee59ad3788e5c817a57904296a7795f5b59635f7b0b84d168ad55067f2974107d2295016240584c4ed65b835979585485:f9fafcfdfe,86:0001020304060708090a0b0c0d0e0f10121314151718191a1b1c1d1e1f20212223242526282a2b2c2d2e2f3031323334353637393a3b3d3e3f40#4142434445464748494a4b4c525355565758595b5c5d5f6061636465666768696a,736d631e8e:4b0f,80ce82d462ac53f06cf0915e592a60016c70574d644a8d2a762b6ee9575b6a8075f06f6d8c:2d08,57666bef889278b363a253f970ad6c645858642a580268e0819b55107cd650188eba6dcc8d9f70eb638f6d9b6ed47ee68404684390036dd896768ba85957727985e4817e75bc8a8a68af52548e22951163d098988e44557c4f5366ff568f60d56d9552435c4959296dfb586b75:301c,606c82148146631167618fe2773a8d:f334,94c15e165385542c70c386:6d6f7072737475767778838485868788898e8f90919294969798999a9b9e9fa0a1a2a5a6abadaeb2b3b7b8b9bbbcbdbebfc1c2c3c5c8cccdd2d3d5d6d7dadc#dde0e1e2e3e5e6e7e8eaebeceff5f6f7fafbfcfdff,87:010405060b0c0e0f10111416,6c405ef7505c4ead5ead633a8247901a6850916e77b3540c94dc5f647ae5687663457b527edf75db507762955934900f51f879c37a8156fe5f9290146d825c60571f541051546e4d56e263a89893817f8715892a9000541e5c6f81c062:d658,81319e3596409a:6e7c,692d59a562d3553e631654c786d96d3c5a0374e6889c6b6a59168c4c5f2f6e7e73a9987d4e3870f75b8c7897633d665a769660cb5b9b5a494e0781556c6a738b4ea167897f515f8065fa671b5fd859845a0187:191b1d1f20242627282a2b2c2d2f303233353638393a3c3d404142434445464a4b4d4f505152545556585a5b5c5d5e5f6162666768696a6b6c6d6f71727375#7778797a7f8081848687898a8c8e8f90919294959698999a9b9c9d9ea0a1a2a3a4,5dcd5fae537197e68fdd684556f4552f60df4e3a6f4d7ef482c7840e59d44f:1f2a,5c3e7eac672a851a5473754f80c355829b4f4f4d6e2d8c135c096170536b761f6e29868a658795fb7eb9543b7a337d0a95ee55e17fc174ee631d87176da17a9d621165a1536763e16c835deb545c94a84e4c6c618bec5c4b65e0829c68a754:3e34,6b:cb66,4e9463425348821e4f:0dae,575e620a96fe6664726952:ffa1,609f8bef661471996790897f785277fd6670563b54389521727a87:a5a6a7a9aaaeb0b1b2b4b6b7b8b9bbbcbebfc1c2c3c4c5c7c8c9cccdcecfd0d4d5d6d7d8d9dadcdddedfe1e2e3e4e6e7e8e9ebecedeff0f1f2f3f4f5f6f7f8#fafbfcfdff,88:0001020405060708090b0c0d0e0f101112141718191a1c1d1e1f2023,7a00606f5e0c6089819d591560dc718470ef6eaa6c5072806a8488ad5e2d4e605ab3559c94e36d177cfb9699620f7ec6778e867e5323971e8f9666875ce14fa072ed4e0b53a6590f54136380952851484ed99c9c7ea454b88d248854823795f26d8e5f265acc663e966973:b02e,53bf817a99857fa15baa96:7750,7ebf76f853a2957699997bb189446e584e617fd479658be660f354cd4eab98795df76a6150cf54118c618427785d9704524a54ee56a395006d885bb56dc6665388:2425262728292a2b2c2d2e2f30313334353637383a3b3d3e3f414243464748494a4b4e4f505152535556585a5b5c5d5e5f6066676a6d6f717374757678797a#7b7c80838687898a8c8e8f90919394959798999a9b9d9e9fa0a1a3a5a6a7a8a9aa,5c0f5b5d6821809655787b11654869544e9b6b47874e978b534f631f643a90aa659c80c18c10519968b0537887f961c86c:c4fb,8c225c5185aa82af950c6b238f9b65b05f:fbc3,4fe18845661f8165732960fa51745211578b5f6290a2884c91925e78674f602759d351:44f6,80f853086c7996c4718a4f:11ee,7f9e673d55c5950879c088967ee3589f620c9700865a5618987b5f908bb884c4915753d965ed5e8f755c60647d6e5a7f7e:eaed,8f6955a75ba360ac65cb738488:acaeafb0b2b3b4b5b6b8b9babbbdbebfc0c3c4c7c8cacbcccdcfd0d1d3d6d7dadbdcdddee0e1e6e7e9eaebecedeeeff2f5f6f7fafbfdff,89:0001030405060708#090b0c0d0e0f1114151617181c1d1e1f20222324262728292c2d2e2f3132333537,9009766377297eda9774859b5b667a7496ea884052cb718f5faa65ec8be25bfb9a6f5de16b896c5b8b:adaf,900a8fc5538b62bc9e:262d,54404e2b82bd7259869c5d1688596daf96c554d14e9a8bb6710954bd960970df6df976d04e25781487125ca95ef68a00989c960e708e6cbf594463a9773c884d6f148273583071d5538c781a96c155015f6671305bb48c1a9a8c6b83592e9e2f79e76768626c4f6f75a17f8a6d0b96336c274ef075d2517b68376f3e908081705996747689:38393a3b3c3d3e3f40424345464748494a4b4c4d4e4f505152535455565758595a5b5c5d6061626364656768696a6b6c6d6e6f707172737475767778797a7c#7d7e808284858788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1,64475c2790657a918c2359da54ac8200836f898180006930564e8036723791ce51b64e5f987563964e1a53f666f3814b591c6db24e0058f9533b63d694f14f:9d0a,886398905937905779fb4eea80f075916c825b9c59e85f5d69058681501a5df24e5977e34ee5827a6291661390915c794ebf5f7981c69038808475ab4ea688d4610f6bc55fc64e4976ca6ea28b:e3ae,8c0a8bd15f027f:fccc,7ece83:356b,56e06bb797f3963459fb541f94f66deb5bc5996e5c395f15969089:a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c3cdd3d4d5d7d8d9dbdddfe0e1e2e4e7e8e9eaecedeef0f1f2f4f5f6f7f8f9fa#fbfcfdfeff,8a:01020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d,537082f16a315a749e705e947f2883b984:2425,836787478fce8d6276c85f719896786c662054df62e54f6381c375c85eb896cd8e0a86f9548f6cf36d8c6c38607f52c775285e7d4f1860a05fe75c24753190ae94c072b96cb96e389149670953:cbf3,4f5191c98bf153c85e7c8fc26de44e8e76c26986865e611a82064f:59de,903e9c7c61096e:1d14,96854e885a3196e84e0e5c7f79b95b878bed7fbd738957df828b90c15401904755bb5cea5fa161086b3272f180b28a:891e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f4041424344454647494a4b4c4d4e4f505152535455565758595a5b5c5d5e#5f606162636465666768696a6b6c6d6e6f7071727374757677787a7b7c7d7e7f80,6d745bd388d598848c6b9a6d9e336e0a51:a443,57a38881539f63f48f9556ed54585706733f6e907f188fdc82d1613f6028966266f07ea68d:8ac3,94a55cb37ca4670860a6960580184e9190e75300966851418fd08574915d665597f55b55531d78386742683d54c9707e5bb08f7d518d572854b1651266828d:5e43,810f846c906d7cdf51ff85fb67a365e96fa186a48e81566a90207682707671e58d2362e952196cfd8d3c600e589e618e66fe8d60624e55b36e23672d8f678a:81828384858687888b8c8d8e8f9091929495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3,94e195f87728680569a8548b4e4d70b88bc86458658b5b857a84503a5be877bb6be18a797c986cbe76cf65a98f975d2d5c5586386808536062187ad96e5b7efd6a1f7ae05f706f335f20638c6da867564e085e108d264ed780c07634969c62db662d627e6cbc8d7571677f695146808753ec906e629854f286f08f998005951785178fd96d5973cd659f771f7504782781fb8d1e94884fa6679575b98bca9707632f9547963584b8632377415f8172f04e896014657462ef6b63653f8a:e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8b:0001020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#24252728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,5e2775c790d18bc1829d679d652f5431871877e580a281026c414e4b7ec7804c76f4690d6b966267503c4f84574063076b628dbe53ea65e87eb85fd763:1ab7,81:f3f4,7f6e5e1c5cd95236667a79e97a1a8d28709975d46ede6cbb7a924e2d76c55fe0949f88777ec879cd80bf91cd4ef24f17821f54685dde6d328bcc7ca58f7480985e1a549276b15b99663c9aa473e0682a86db6731732a8b:f8db,90107af970db716e62c477a956314e3b845767f152a986c08d2e94f87b518b:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656768696a6b6d6e6f707172737475767778797a7b7c7d7e7f80818283848586#8788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9facb1bbc7d0ea,8c:091e,4f4f6ce8795d9a7b6293722a62fd4e1378168f6c64b08d5a7bc668695e8488c55986649e58ee72b6690e95258ffd8d5857607f008c0651c6634962d95353684c74228301914c55447740707c6d4a517954a88d4459ff6ecb6dc45b5c7d2b4ed47c7d6ed35b5081ea6e0d5b579b0368d58e2a5b977efc603b7eb590b98d70594f63cd79df8db3535265cf79568bc5963b7ec494bb7e825634918967007f6a5c0a907566285de64f5067de505a4f5c57505e:a7#3$,8c:38393a3b3c3d3e3f4042434445484a4b4d4e4f5051525354565758595b5c5d5e5f60636465666768696c6d6e6f707172747576777b7c7d7e7f808183848687#888b8d8e8f90919293959697999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacad,4e:8d0c,51404e105eff53454e:15981e,9b325b6c56694e2879ba4e3f53154e47592d723b536e6c1056df80e499976bd3777e9f174e:369f,9f104e:5c6993,82885b5b556c560f4ec453:8d9da3a5ae,97658d5d53:1af5262e3e,8d5c53:6663,52:02080e2d333f404c5e615c,84af52:7d82819093,51827f544e:bbc3c9c2e8e1ebde,4f1b4ef34f:2264,4ef54f:2527092b5e67,65384f:5a5d,8c:aeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebec#edeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8d:000102030405060708090a0b0c0d,4f:5f57323d76749189838f7e7baa7cac94e6e8eac5dae3dcd1dff8,50:294c,4ff350:2c0f2e2d,4ffe50:1c0c25287e4355484e6c7ba5a7a9bad6,510650:edece6ee,51:070b,4edd6c3d4f:5865ce,9fa06c467c74516e5dfd9ec999985181591452f9530d8a07531051eb591951554ea051564eb388:6ea4,4eb5811488d279805b3488037fb851:abb1bdbc,8d:0e0f101112131415161718191a1b1c205152575f6568696a6c6e6f717278797a7b7c7d7e7f808283868788898c8d8e8f90929395969798999a9b9c9d9ea0a1#a2a4a5a6a7a8a9aaabacadaeafb0b2b6b7b9bbbdc0c1c2c5c7c8c9cacdd0d2d3d4,51:c796a2a5,8b:a0a6a7aab4b5b7c2c3cbcfced2d3d4d6d8d9dcdfe0e4e8e9eef0f3f6f9fcff,8c:000204070c0f1112141516191b181d1f202125272a2b2e2f32333536,53:697a,96:1d2221312a3d3c4249545f676c7274888d97b0,90:979b9d99aca1b4b3b6ba,8d:d5d8d9dce0e1e2e5e6e7e9edeef0f1f2f4f6fcfeff,8e:00010203040607080b0d0e1011121315161718191a1b1c202124252627282b2d303233343637383b3c3e#3f4345464c4d4e4f505354555657585a5b5c5d5e5f60616263646567686a6b6e71,90:b8b0cfc5bed0c4c7d3e6e2dcd7dbebeffe,91:04221e23312f394346,520d594252:a2acadbe,54ff52:d0d6f0,53df71ee77cd5ef451:f5fc,9b2f53b65f01755a5def57:4ca9a1,58:7ebcc5d1,57:292c2a33392e2f5c3b4269856b867c7b686d7673ada48cb2cfa7b493a0d5d8dad9d2b8f4eff8e4dd,8e:73757778797a7b7d7e808283848688898a8b8c8d8e91929395969798999a9b9d9fa0a1a2a3a4a5a6a7a8a9aaadaeb0b1b3b4b5b6b7b8b9bbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4,58:0b0d,57:fded,58:001e194420656c81899a80,99a89f1961ff82:797d7f8f8aa8848e919799abb8beb0c8cae398b7aecbccc1a9b4a1aa9fc4cea4e1,830982:f7e4,83:0f07,82:dcf4d2d8,830c82:fbd3,83:111a061415,82:e0d5,83:1c515b5c08923c34319b5e2f4f47435f4017602d3a336665,8e:e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8f:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#2425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f4041424344,83:681b696c6a6d6eb078b3b4a0aa939c857cb6a97db87b989ea8babcc1,840183:e5d8,580784:180b,83:ddfdd6,84:1c381106,83:d4df,84:0f03,83:f8f9eac5c0,842683:f0e1,84:5c515a597387887a89783c4669768c8e316dc1cdd0e6bdd3cabfbae0a1b9b497e5e3,850c750d853884f085:391f3a,8f:45464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656a808c929da0a1a2a4a5a6a7aaacadaeafb2b3b4b5b7b8babbbcbfc0c3c6#c9cacbcccdcfd2d6d7dae0e1e3e7eceff1f2f4f5f6fafbfcfeff,90:07080c0e131518,85:563b,84:fffc,85:594868645e7a,77a285:43727ba4a8878f79ae9c85b9b7b0d3c1dcff,86:270529163c,5efe5f0859:3c41,803759:555a58,530f5c:22252c34,62:4c6a9fbbcadad7ee,632262f663:394b43adf6717a8eb46dac8a69aebcf2f8e0ffc4dece,645263:c6be,64:45410b1b200c26215e846d96,90:191c2324252728292a2b2c303132333437393a3d3f4043454648494a4b4c4e545556595a5c5d5e5f6061646667696a6b6c6f70717273767778797a7b7c7e81#84858687898a8c8d8e8f90929496989a9c9e9fa0a4a5a7a8a9abadb2b7bcbdbfc0,64:7ab7b899bac0d0d7e4e2,65:09252e,5f:0bd2,75195f1153:5ff1fde9e8fb,54:1216064b5253545643215759233282947771649a9b8476669dd0adc2b4d2a7a6d3d472a3d5bbbfccd9dadca9aaa4ddcfde,551b54e7552054fd551454f355:22230f11272a678fb5496d41553f503c,90:c2c3c6c8c9cbcccdd2d4d5d6d8d9dadedfe0e3e4e5e9eaeceef0f1f2f3f5f6f7f9fafbfcff,91:00010305060708090a0b0c0d0e0f1011121314151617181a1b1c#1d1f20212425262728292a2b2c2d2e30323334353637383a3b3c3d3e3f40414244,55:375675767733305c8bd283b1b988819f7ed6917bdfbdbe9499eaf7c9,561f55:d1ebecd4e6ddc4efe5f2f3cccde8f5e4,8f9456:1e080c012423,55fe56:00272d5839572c4d62595c4c548664716b7b7c8593afd4d7dde1f5ebf9ff,57:040a091c,5e:0f191411313b3c,91:454748515354555658595b5c5f606667686b6d737a7b7c808182838486888a8e8f939495969798999c9d9e9fa0a1a4a5a6a7a8a9abacb0b1b2b3b6b7b8b9bb#bcbdbebfc0c1c2c3c4c5c6c8cbd0d2d3d4d5d6d7d8d9dadbdddedfe0e1e2e3e4e5,5e:3744545b5e61,5c:8c7a8d9096889899919a9cb5a2bdacabb1a3c1b7c4d2e4cbe5,5d:020327262e241e061b583e343d6c5b6f5d6b4b4a697482999d,8c735d:b7c5,5f:73778287898c95999ca8adb5bc,88625f6172:adb0b4b7b8c3c1cecdd2e8efe9f2f4f7,730172f3730372fa91:e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,92:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021222324#25262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,72fb73:1713210a1e1d152239252c3831504d57606c6f7e,821b592598e759:2402,99:636768696a6b6c74777d8084878a8d9091939495,5e:80918b96a5a0b9b5beb3,8d535e:d2d1dbe8ea,81ba5f:c4c9d6cf,60035fee60045f:e1e4fe,60:0506,5f:eaedf8,60:1935261b0f0d292b0a3f2178797b7a42,92:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727375767778797a7b7c7d7e7f808182838485#868788898a8b8c8d8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7,60:6a7d969aad9d83928c9becbbb1ddd8c6dab4,61:20261523,60f461:000e2b4a75ac94a7b7d4f5,5fdd96b395:e9ebf1f3f5f6fcfe,96:030406080a0b0c0d0f12151617191a,4e2c723f62156c:35545c4aa38590948c6869747686a9d0d4adf7f8f1d7b2e0d6faebeeb1d3effe,92:a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8#e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,93:00010203040506070809,6d:39270c43480704190e2b4d2e351a4f525433916f9ea05e93945c607c63,6e1a6d:c7c5de,6e0e6d:bfe0,6e116d:e6ddd9,6e166dab6e0c6dae6e:2b6e4e6bb25f865354322544dfb198e0,6f2d6e:e2a5a7bdbbb7d7b4cf8fc29f,6f:6246472415,6ef96f:2f364b742a0929898d8c78727c7ad1,93:0a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f40414243444546474849#4a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696b,6f:c9a7b9b6c2e1eedee0ef,70:1a231b39354f5e,5b:80849593a5b8,752f9a9e64345b:e4ee,89305bf08e478b078f:b6d3d5e5eee4e9e6f3e8,90:05040b26110d162135362d2f445152506858625b,66b990:747d8288838b,5f:50575658,5c3b54ab5c:5059,5b715c:6366,7fbc5f:2a292d,82745f3c9b3b5c6e59:81838da9aaa3,93:6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaab#acadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cbcccd,59:97caab9ea4d2b2afd7be,5a:0506,59dd5a0859:e3d8f9,5a:0c09323411231340674a553c6275,80ec5a:aa9b777abeebb2d2d4b8e0e3f1d6e6d8dc,5b:091716323740,5c:151c,5b:5a6573515362,9a:7577787a7f7d808185888a90929396989b9c9d9fa0a2a3a5a7,7e:9fa1a3a5a8a9,93:cecfd0d1d2d3d4d5d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,94:000102030405060708090a0b0c0d#0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e,7e:adb0bec0c1c2c9cbccd0d4d7dbe0e1e8ebeeeff1f2,7f0d7e:f6fafbfe,7f:01020307080b0c0f111217191c1b1f212223242526272a2b2c2d2f3031323335,5e7a757f5ddb753e909573:8e91aea29fcfc2d1b7b3c0c9c8e5d9,987c740a73:e9e7debaf2,74:0f2a5b262528302e2c,94:2f303132333435363738393a3b3c3d3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6c6d6e6f#707172737475767778797a7b7c7d7e7f8081828384919698c7cfd3d4dae6fb,95:1c20,74:1b1a415c575559776d7e9c8e8081878b9ea8a990a7d2ba,97:eaebec,67:4c535e4869a5876a7398a775a89ead8b777cf0,680967d8680a67:e9b0,680c67:d9b5dab3dd,680067:c3b8e2,680e67:c1fd,68:323360614e624464831d55664167403e4a4929b58f7477936bc2,696e68fc69:1f20,68f995:27333d43484b555a606e74757778797a7b7c7d7e808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aa#abacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacb,692468f069:0b0157,68e369:10713960425d846b80987834cc8788ce896663799ba7bbabadd4b1c1cadf95e08dff,6a2f69ed6a:171865,69f26a:443ea0505b358e793d28587c9190a997ab,73:3752,6b:8182878492938d9a9ba1aa,8f:6b6d71727375767877797a7c7e818284878b,95:cccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7ecff,96:0713181b1e20232425262728292b2c2d2f303738393a3e41434a4e4f5152535657#58595a5c5d5e606365666b6d6e6f70717378797a7b7c7d7e7f808182838487898a,8f:8d8e8f989a,8ece62:0b171b1f222125242c,81e774:eff4ff,75:0f1113,65:34eeeff0,66:0a19,677266:031500,708566:f71d34313635,800666:5f54414f56615777848ca79dbedbdce6e9,8d:3233363b3d4045464849474d5559,89:c7cacbcccecfd0d1,72:6e9f5d666f7e7f848b8d8f92,63:0832b0,96:8c8e91929395969a9b9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb1b2b4b5b7b8babbbfc2c3c8cacbd0d1d3d4d6d7d8d9dadbdcdddedfe1e2e3e4e5e6e7eb#ecedeef0f1f2f4f5f8fafbfcfdff,97:0203050a0b0c10111214151718191a1b1d1f20,64:3fd8,80046b:eaf3fdf5f9,6c:0507060d1518191a2129242a32,65:35556b,72:4d525630,8662521680:9f9c93bc,670a80:bdb1abadb4b7e7e8e9eadbc2c4d9cdd7,671080:ddebf1f4ed,81:0d0e,80:f2fc,671581128c5a81:361e2c1832484c5374595a7160697c7d6d67,584d5ab581:888291,6ed581:a3aacc,672681:cabb,97:2122232425262728292b2c2e2f3133343536373a3b3c3d3f404142434445464748494a4b4c4d4e4f5051545557585a5c5d5f63646667686a6b6c6d6e6f7071#72757778797a7b7d7e7f8081828384868788898a8c8e8f9093959697999a9b9c9d,81:c1a6,6b:243739434659,98:d1d2d3d5d9da,6bb35f406bc289f365909f5165:93bcc6c4c3ccced2d6,70:809c969dbbc0b7abb1e8ca,71:1013162f31735c6845724a787a98b3b5a8a0e0d4e7f9,72:1d28,706c71:1866b9,62:3e3d434849,79:3b4046495b5c535a6257606f677a858a9aa7b3,5f:d1d0,97:9e9fa1a2a4a5a6a7a8a9aaacaeb0b1b3b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3#e4e5e8eeeff0f1f2f4f7f8f9fafbfcfdfeff,98:000102030405060708090a0b0c0d0e,60:3c5d5a67415963ab,61:060d5da99dcbd1,620680:807f,6c:93f6,6dfc77:f6f8,78:0009171811,65ab78:2d1c1d393a3b1f3c252c23294e6d56572650474c6a9b939a879ca1a3b2b9a5d4d9c9ecf2,790578f479:13241e34,9f9b9e:f9fbfc,76f177:040d,76f977:07081a22192d263538505147435a68,98:0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d#4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e,77:62657f8d7d808c919fa0b0b5bd,75:3a404e4b485b727983,7f:58615f,8a487f:68747179817e,76:cde5,883294:8586878b8a8c8d8f909497959a9b9ca3a4abaaadacafb0b2b4b6b7b8b9babcbdbfc4c8c9cacbcccdced0d1d2d5d6d7d9d8dbdedfe0e2e4e5e7e8ea,98:6f70717273748b8e929599a3a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcfd0d4d6d7dbdcdde0e1e2e3e4#e5e6e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,99:0001020304050607,94:e9ebeeeff3f4f5f7f9fcfdff,95:03020607090a0d0e0f1213141516181b1d1e1f222a2b292c3132343637383c3e3f4235444546494c4e4f525354565758595b5e5f5d61626465666768696a6b6c6f7172733a,77:e7ec,96c979:d5ede3eb,7a065d477a:03021e14,99:08090a0b0c0e0f1112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2f303132333435363738393a3b3c3d3e3f40414243444546474849#4a4b4c4d4e4f50515253565758595a5b5c5d5e5f60616264667378797b7e828389,7a:393751,9ecf99a57a7076:888e9399a4,74:dee0,752c9e:202228292a2b2c3231363837393a3e414244464748494b4c4e5155575a5b5c5e63666768696a6b6c716d73,75:929496a09daca3b3b4b8c4b1b0c3c2d6cde3e8e6e4ebe7,760375:f1fcff,76:1000050c170a25181519,99:8c8e9a9b9c9d9e9fa0a1a2a3a4a6a7a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8#d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9,76:1b3c2220402d303f35433e334d5e545c566b6f,7fca7a:e6787980868895a6a0aca8adb3,88:6469727d7f82a2c6b7bcc9e2cee3e5f1,891a88:fce8fef0,89:2119131b0a342b3641667b,758b80e576:b2b4,77dc80:1214161c20222526272928310b3543464d526971,898398:788083,99:fafbfcfdfeff,9a:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738#393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f50515253545556575859,98:898c8d8f949a9b9e9fa1a2a5a6,86:4d546c6e7f7a7c7ba88d8bac9da7a3aa93a9b6c4b5ceb0bab1afc9cfb4e9f1f2edf3d0,871386:def4dfd8d1,87:0307,86f887:080a0d09233b1e252e1a3e48343129373f82227d7e7b60704c6e8b53637c64596593afa8d2,9a:5a5b5c5d5e5f606162636465666768696a6b7283898d8e949599a6a9aaabacadaeafb2b3b4b5b9bbbdbebfc3c4c6c7c8c9cacdcecfd0d2d4d5d6d7d9dadbdc#dddee0e2e3e4e5e7e8e9eaeceef0f1f2f3f4f5f6f7f8fafcfdfeff,9b:000102040506,87:c68885ad9783abe5acb5b3cbd3bdd1c0cadbeae0ee,88:1613,87fe88:0a1b21393c,7f:36424445,82107a:fafd,7b:080304150a2b0f47382a192e31202524333e1e585a45754c5d606e7b62727190a6a7b8ac9da885aa9ca2abb4d1c1ccdddae5e6ea,7c0c7b:fefc,7c:0f160b,9b:07090a0b0c0d0e1011121415161718191a1b1c1d1e2021222425262728292a2b2c2d2e3031333435363738393a3d3e3f40464a4b4c4e50525355565758595a#5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b,7c:1f2a26384140,81fe82:010204,81ec884482:2122232d2f282b383b33343e44494b4f5a5f68,88:7e8588d8df,895e7f:9d9fa7afb0b2,7c7c65497c:919d9c9ea2b2bcbdc1c7cccdc8c5d7e8,826e66a87f:bfced5e5e1e6e9eef3,7cf87d:77a6ae,7e:479b,9e:b8b4,8d:73849491b1676d,8c:4749,91:4a504e4f64,9b:7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9ba#bbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadb,91:626170696f7d7e7274798c85908d91a2a3aaadaeafb5b4ba,8c559e7e8d:b8eb,8e:055969,8d:b5bfbcbac4d6d7dadececfdbc6ecf7f8e3f9fbe4,8e098dfd8e:141d1f2c2e232f3a4039353d3149414251524a70767c6f74858f94909c9e,8c:78828a859894,659b89:d6dedadc,9b:dcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9c:000102030405060708090a0b0c0d0e0f101112131415161718191a#1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b,89:e5ebef,8a3e8b26975396:e9f3ef,97:0601080f0e2a2d303e,9f:808385868788898a8c,9efe9f:0b0d,96:b9bcbdced2,77bf96e092:8eaec8,93:3e6aca8f,94:3e6b,9c:7f8285868788,7a239c:8b8e90919294959a9b9e9fa0a1a2a3a5a6a7a8a9abadaeb0b1b2b3b4b5b6b7babbbcbdc4c5c6c7cacb3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a#7b7d7e808384898a8c8f93969798999daaacafb9bebfc0c1c2c8c9d1d2dadbe0e1cccdcecfd0d3d4d5d7d8d9dcdddfe2,97:7c85919294afaba3b2b4,9a:b1b0b7,9e589a:b6babcc1c0c5c2cbccd1,9b:45434749484d51,98e899:0d2e5554,9a:dfe1e6efebfbedf9,9b:080f131f23,9e:bdbe,7e3b9e:8287888b92,93d69e:9d9fdbdcdde0dfe2e9e7e5eaef,9f:222c2f39373d3e44,9c:e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9d:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021#22232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142#92$434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081#82838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2#92$a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1#e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9e:000102#92$030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e24272e30343b3c404d5052535456595d5f606162656e6f727475767778797a7b7c7d80#8183848586898a8c8d8e8f90919495969798999a9b9c9ea0a1a2a3a4a5a7a8a9aa#92$abacadaeafb0b1b2b3b5b6b7b9babcbfc0c1c2c3c5c6c7c8cacbccd0d2d3d5d6d7d9dadee1e3e4e6e8ebecedeef0f1f2f3f4f5f6f7f8fafdff,9f:000102030405#060708090a0c0f1112141516181a1b1c1d1e1f21232425262728292a2b2d2e3031#92$3233343536383a3c3f4041424345464748494a4b4c4d4e4f52535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778#797a7b7c7d7e81828d8e8f9091929394959697989c9d9ea1a2a3a4a5,f9:2c7995e7f1#92$,fa:0c0d0e0f111314181f20212324272829,e8:15161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f40414243#4445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364`),t=0;this.#e=e.match(/..../g);for(let e=129;e<=254;e++)for(let n=64;n<=254;n++)this.#t[this.#e[t++]]=`%${e.toString(16)}%${n.toString(16)}`.toUpperCase();for(let e in this.#t){let t=Reflect.get(this.#t,e);Reflect.set(this.#n,t,e)}}handleText(e){return e=e.replace(/#(\d+)\$/g,function(e,t){return Array(+t+3).join(`#`)}).replace(/#/g,`####`).replace(/(\w\w):([\w#]+)(?:,|$)/g,function(e,t,n){return n.replace(/../g,function(e){return e==`##`?e:t+e})}),e}isAscii(e){return e<=127&&e>=0}encode(e){let t=this;return[...e].reduce((e,t)=>e+n(t),``);function n(e){let r=``;for(let i=0;i<e.length;i++){let a=e.codePointAt(i),o=String.fromCodePoint(a),s=a.toString(16);s.length!=4&&(s=`000${s}`.match(/....$/)?.[0]),i+=o.length-1,t.isAscii(a)?r+=encodeURIComponent(o):t.#t[s]?r+=t.#t[s]:r+=n(`&#${a};`)}return r}}decode(e){let t=/%[0-9A-F]{2}%[0-9A-F]{2}/,n=/%[0-9A-F]{2}/,r=!0,i=this;for(;r;){let a=e.match(t),o=e.match(n);r=!!o,e=a&&a in i.#n?e.replace(a,String.fromCharCode(`0x${i.#n[a]}`)):e.replace(o,decodeURIComponent(o))}return e}},vn=class{initEnv(){Function.prototype.hook=function(e,t,n){let r=null,i=null;if(r=n||window,i=a(this),r[`realFunc_${i}`]=this,r[i].prototype&&r[i].prototype.isHooked)return console.log(`Already has been hooked,unhook first`),!1;function a(e){let t=e.toString().match(/function\s+(\w+)\s*\(/);return t?t[1]:``}try{return Function(`_context`,`_funcName`,`hookFunc`,`_context[_funcName] = function ${i}() {
        let args = Array.prototype.slice.call(arguments, 0);
        let obj = this;
        hookFunc.apply(obj, args);
        return _context['realFunc_${i}'].apply(obj, args);
    };`)(r,i,t),r[i].prototype.isHooked=!0,!0}catch(e){return console.log(`Hook failed,check the params.`,e),!1}},Function.prototype.unhook=function(e,t,n){let r=null,i=null;return r=n||window,i=t,r[i].prototype.isHooked?(r[i]=r[`realFunc${i}`],Reflect.deleteProperty(r,`realFunc_${i}`),!0):(console.log(`No function is hooked on`),!1)}}cleanEnv(){return Object.prototype.hasOwnProperty.call(Function.prototype,`hook`)&&Reflect.deleteProperty(Function.prototype,`hook`),Object.prototype.hasOwnProperty.call(Function.prototype,`unhook`)&&Reflect.deleteProperty(Function.prototype,`unhook`),!0}},yn=function(){return typeof window?.crypto?.randomUUID==`function`?window.crypto.randomUUID():`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,function(e){let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})},bn=e=>typeof e==`string`&&(e=parseInt(e),isNaN(e)||e.toString().length!==3)?!1:Math.floor(e/100)===2,xn=class{GM_Api={xmlHttpRequest:null};HttpxInterceptRequest={$config:{configList:[]},async beforeRequestCallBack(e){if(typeof e.allowInterceptConfig==`boolean`){if(!e.allowInterceptConfig)return e}else if(e.allowInterceptConfig!=null&&typeof e.allowInterceptConfig.beforeRequest==`boolean`&&!e.allowInterceptConfig.beforeRequest)return e;for(let t=0;t<this.$config.configList.length;t++){let n=this.$config.configList[t];if(typeof n.fn==`function`&&await n.fn(e)==null)return}return e},add(e){if(typeof e==`function`){let t=yn();return this.$config.configList.push({id:t,fn:e}),t}console.warn(`[Httpx-HttpxRequestHook.addBeforeRequestCallBack] fn is not a function`)},delete(e){if(typeof e==`string`){let t=this.$config.configList.findIndex(t=>t.id===e);if(t!==-1)return this.$config.configList.splice(t,1),!0}return!1},clearAll(){this.$config.configList=[]}};HttpxInterceptResponse={$config:{configList:[]},async successResponseCallBack(e,t){let n=t.requestOption;if(typeof n.allowInterceptConfig==`boolean`){if(!n.allowInterceptConfig)return e}else if(n.allowInterceptConfig!=null&&typeof n.allowInterceptConfig.afterResponseSuccess==`boolean`&&!n.allowInterceptConfig.afterResponseSuccess)return e;for(let n=0;n<this.$config.configList.length;n++){let r=this.$config.configList[n];if(typeof r.data.successFn==`function`&&await r.data.successFn(e,t)==null)return}return e},async errorResponseCallBack(e){let t=e.resolveOption.requestOption;if(typeof t.allowInterceptConfig==`boolean`){if(!t.allowInterceptConfig)return e}else if(t.allowInterceptConfig!=null&&typeof t.allowInterceptConfig.afterResponseError==`boolean`&&!t.allowInterceptConfig.afterResponseError)return e;for(let t=0;t<this.$config.configList.length;t++){let n=this.$config.configList[t];if(typeof n.data.errorFn==`function`&&await n.data.errorFn(e)==null)return}return e},add(e,t){let n=yn();return this.$config.configList.push({id:n,data:{successFn:e,errorFn:t}}),n},delete(e){if(typeof e==`string`){let t=this.$config.configList.findIndex(t=>t.id===e);if(t!==-1)return this.$config.configList.splice(t,1),!0}return!1},clearAll(){this.$config.configList=[]}};HttpxRequestOption={context:this,handleBeforeRequestOptionArgs(...e){let t={url:void 0};if(typeof e[0]==`string`){let n=e[0];if(t.url=n,typeof e[1]==`object`){let r=e[1];I.assign(t,r,!0),t.url=n}}else{let n=e[0];I.assign(t,n,!0)}return t},getRequestOption(e,t,n,r){let i=this,a=t.url||this.context.#e.url;typeof a==`string`&&(a=a.trim(),a.startsWith(`http://`)||a.startsWith(`https://`)?this.context.#t.isAutoHttps&&(a=a.replace(/^http:\/\//,`https://`)):typeof this.context.#t.baseURL==`string`&&(a=this.context.#t.baseURL+a));let o={url:a,method:(e||`GET`).toString().toUpperCase().trim(),timeout:t.timeout||this.context.#e.timeout,responseType:t.responseType||this.context.#e.responseType,headers:I.deepClone(this.context.#e.headers),data:t.data||this.context.#e.data,redirect:t.redirect||this.context.#e.redirect,cookie:t.cookie||this.context.#e.cookie,cookiePartition:t.cookiePartition||this.context.#e.cookiePartition,binary:t.binary||this.context.#e.binary,nocache:t.nocache||this.context.#e.nocache,revalidate:t.revalidate||this.context.#e.revalidate,context:I.deepClone(t.context||this.context.#e.context),overrideMimeType:t.overrideMimeType||this.context.#e.overrideMimeType,anonymous:t.anonymous||this.context.#e.anonymous,fetch:t.fetch||this.context.#e.fetch,fetchInit:I.deepClone(this.context.#e.fetchInit),maxRetryCount:t.maxRetryCount??this.context.#e.maxRetryCount,__retryCount:t.__retryCount??this.context.#e.__retryCount,allowInterceptConfig:{beforeRequest:this.context.#e.allowInterceptConfig.beforeRequest,afterResponseSuccess:this.context.#e.allowInterceptConfig.afterResponseSuccess,afterResponseError:this.context.#e.allowInterceptConfig.afterResponseError},user:t.user||this.context.#e.user,password:t.password||this.context.#e.password,onabort(...e){i.context.HttpxResponseCallBack.onAbort(t,n,r,e)},onerror(...e){i.context.HttpxResponseCallBack.onError(t,n,r,e,void 0)},onloadstart(...e){i.context.HttpxResponseCallBack.onLoadStart(t,e)},onprogress(...e){i.context.HttpxResponseCallBack.onProgress(t,e)},onreadystatechange(...e){i.context.HttpxResponseCallBack.onReadyStateChange(t,e)},ontimeout(...e){i.context.HttpxResponseCallBack.onTimeout(t,n,r,e)},onload(...e){i.context.HttpxResponseCallBack.onLoad(t,n,r,e)}};typeof t.allowInterceptConfig==`boolean`?Object.keys(o.allowInterceptConfig).forEach(e=>{Reflect.set(o.allowInterceptConfig,e,t.allowInterceptConfig)}):typeof t.allowInterceptConfig==`object`&&t.allowInterceptConfig!=null&&Object.keys(o.allowInterceptConfig).forEach(e=>{let n=Reflect.get(t.allowInterceptConfig,e);typeof n==`boolean`&&Reflect.has(o.allowInterceptConfig,e)&&Reflect.set(o.allowInterceptConfig,e,n)}),typeof this.context.GM_Api.xmlHttpRequest!=`function`&&(o.fetch=!0),typeof o.headers==`object`?typeof t.headers==`object`&&Object.keys(o.headers).forEach(e=>{e in o.headers&&t.headers?.[e]==null?Reflect.deleteProperty(o.headers,e):o.headers[e]=t?.headers?.[e]}):Reflect.set(o,`headers`,t.headers),typeof o.fetchInit==`object`?typeof t.fetchInit==`object`&&Object.keys(o.fetchInit).forEach(e=>{e in o.fetchInit&&Reflect.get(t.fetchInit??{},e)==null?Reflect.deleteProperty(o.fetchInit,e):Reflect.set(o.fetchInit,e,Reflect.get(t.fetchInit,e))}):Reflect.set(o,`fetchInit`,t.fetchInit),typeof o.cookiePartition==`object`&&o.cookiePartition!=null&&Reflect.has(o.cookiePartition,`topLevelSite`)&&typeof o.cookiePartition.topLevelSite!=`string`&&Reflect.deleteProperty(o.cookiePartition,`topLevelSite`);try{new URL(o.url)}catch{o.url=o.url.startsWith(`//`)?globalThis.location.protocol+o.url:o.url.startsWith(`/`)?globalThis.location.origin+o.url:`${globalThis.location.origin}/${o.url}`}o.fetchInit&&!o.fetch&&Reflect.deleteProperty(o,`fetchInit`);try{let e=t.processData??!0;if(o.data!=null&&e){let e=o.method;if(e===`GET`||e===`HEAD`){let e=new URL(o.url),t=``,n=!1;typeof o.data==`string`?(n=!0,t=o.data):typeof o.data==`object`&&(n=!0,t=new URLSearchParams(o.data).toString()),n&&Reflect.deleteProperty(o,`data`),t.trim()!=``&&(e.search.trim()===``?e.search=t:e.search.trim().endsWith(`&`)?e.search+=t:e.search=`${e.search}&${t}`),o.url=e.toString()}else if(e===`POST`&&o.headers!=null){let e=Object.keys(o.headers),t=e.findIndex(e=>e.trim().toLowerCase()===`content-type`&&typeof o.headers[e]==`string`);if(t!==-1){let n=e[t],r=o.headers[n].toLowerCase();if(r.includes(`application/json`)){if(o.data instanceof FormData){let e={};o.data.forEach((t,n)=>{e[n]=t}),o.data=JSON.stringify(e)}else typeof o.data==`object`&&(o.data=JSON.stringify(o.data))}else r.includes(`application/x-www-form-urlencoded`)?typeof o.data==`object`&&(o.data=new URLSearchParams(o.data).toString()):r.includes(`multipart/form-data`)&&o.data instanceof FormData&&Reflect.deleteProperty(o.headers,n)}}}}catch(e){console.warn(`Httpx ==> 转换data参数错误`,e)}return o},removeRequestNullOption(e){if(Object.keys(e).forEach(t=>{let n=e[t];(n==null||n instanceof Function&&I.isNull(n))&&Reflect.deleteProperty(e,t)}),I.isNull(e.url))throw TypeError(`Utils.Httpx 参数url不能为空：${e.url}`);return e},handleFetchOption(e){let t={};(e.method===`GET`||e.method===`HEAD`)&&e.data!=null&&Reflect.deleteProperty(e,`data`);let n=new AbortController,r=n.signal;return r.onabort=()=>{e.onabort({error:`aborted`,isFetch:!0,isSuccess:!1,responseText:``,response:null,readyState:4,responseHeaders:``,status:0,statusText:``})},t.method=e.method??`GET`,t.headers=e.headers,t.body=e.data,t.mode=`cors`,t.credentials=`include`,t.cache=`no-cache`,t.redirect=`follow`,t.referrerPolicy=`origin-when-cross-origin`,t.signal=r,Object.assign(t,e.fetchInit||{}),{fetchOption:e,fetchRequestOption:t,abortController:n}}};HttpxResponseCallBack={context:this,getDefaultInterceptConfig:()=>({isRetry:!1}),async onAbort(e,t,n,r){typeof e?.onabort==`function`?e.onabort.apply(this,r):typeof this.context.#e?.onabort==`function`&&this.context.#e.onabort.apply(this,r);let i=r;i.length&&(i=i[0]);let a={data:i,isSuccess:!1,requestOption:e,msg:`请求被取消`,status:!1,statusCode:-1,type:`onabort`,InterceptConfig:this.getDefaultInterceptConfig()};await this.context.HttpxInterceptResponse.errorResponseCallBack({type:`onabort`,error:Error(`request cancel`),response:null,resolveOption:a})!=null&&t(a)},async onTimeout(e,t,n,r){typeof e?.ontimeout==`function`?e.ontimeout.apply(this,r):typeof this.context.#e?.ontimeout==`function`&&this.context.#e.ontimeout.apply(this,r);let i=r;i.length&&(i=i[0]);let a={data:i,isSuccess:i.isSuccess??!1,requestOption:e,msg:`请求超时`,status:i.isSuccess??!1,statusCode:0,type:`ontimeout`,InterceptConfig:this.getDefaultInterceptConfig()};await this.context.HttpxInterceptResponse.errorResponseCallBack({type:`ontimeout`,error:Error(`request timeout in `+e.timeout+`ms`),response:i,resolveOption:a})!=null&&t(a)},async onError(e,t,n,r,i){typeof e?.onerror==`function`?e.onerror.apply(this,r):typeof this.context.#e?.onerror==`function`&&this.context.#e.onerror.apply(this,r);let a=r;a.length&&(a=a[0]);let o={data:a,isSuccess:a.isSuccess??!1,requestOption:e,msg:`请求失败`,status:a.isSuccess??!1,statusCode:a.status,type:`onerror`,InterceptConfig:this.getDefaultInterceptConfig()};await this.context.HttpxInterceptResponse.errorResponseCallBack({type:`onerror`,error:Error(i??`request error`),response:a,resolveOption:o})!=null&&t(o)},async onLoad(e,t,n,r){let i=r[0];if(I.isNull(i.responseText)&&I.isNotNull(i.response)&&(typeof i.response==`object`?rn().run(()=>{i.responseText=JSON.stringify(i.response)}):i.responseText=i.response),i.response==null&&typeof i.responseText==`string`&&i.responseText.trim()!==``){let t=i.responseText,n=t;if(e.responseType===`json`)n=I.toJSON(t);else if(e.responseType===`document`)n=new DOMParser().parseFromString(t,`text/html`);else if(e.responseType===`arraybuffer`)n=new TextEncoder().encode(t);else if(e.responseType===`blob`){let e=new TextEncoder().encode(t);n=new Blob([e])}try{if(!Reflect.set(i,`response`,n)){console.warn(`[Httpx-HttpxCallBack.oonLoad] 覆盖原始 response 失败，尝试添加新的httpxResponse`);try{Reflect.set(i,`httpxResponse`,n)}catch{console.warn(`[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖`)}}}catch{console.warn(`[Httpx-HttpxCallBack.oonLoad] 原始 response 无法被覆盖，尝试添加新的httpxResponse`);try{Reflect.set(i,`httpxResponse`,n)}catch{console.warn(`[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖`)}}}let a=Reflect.get(i,`responseURL`);if(i.finalUrl==null&&a!=null&&Reflect.set(i,`finalUrl`,a),bn(i.status)){let n={data:i,isSuccess:!0,requestOption:e,msg:`请求成功`,status:!0,statusCode:i.status,type:`onload`,InterceptConfig:this.getDefaultInterceptConfig()};if(await this.context.HttpxInterceptResponse.successResponseCallBack(i,n)==null)return;t(n)}else this.context.HttpxResponseCallBack.onError(e,t,n,r,`response status is not 2xx`)},onLoadStart(e,t){typeof e?.onloadstart==`function`?e.onloadstart.apply(this,t):typeof this.context.#e?.onloadstart==`function`&&this.context.#e.onloadstart.apply(this,t)},onReadyStateChange(e,t){typeof e?.onreadystatechange==`function`?e.onreadystatechange.apply(this,t):typeof this.context.#e?.onreadystatechange==`function`&&this.context.#e.onreadystatechange.apply(this,t)},onProgress(e,t){typeof e?.onprogress==`function`?e.onprogress.apply(this,t):typeof this.context.#e?.onprogress==`function`&&this.context.#e.onprogress.apply(this,t)}};HttpxRequest={context:this,async request(e){if(this.context.#t.isConsoleRequestOption&&console.log(`[Httpx request] before request option:`,e),typeof this.context.HttpxInterceptRequest.beforeRequestCallBack!=`function`||await this.context.HttpxInterceptRequest.beforeRequestCallBack(e)!=null){if(e.fetch){let{fetchOption:t,fetchRequestOption:n,abortController:r}=this.context.HttpxRequestOption.handleFetchOption(e);return this.fetch(t,n,r)}return this.xmlHttpRequest(e)}},xmlHttpRequest(e){return this.context.GM_Api.xmlHttpRequest(e)},fetch(e,t,n){return fetch(e.url,t).then(async t=>{let n={isFetch:!0,isSuccess:bn(t.status),finalUrl:t.url,readyState:4,status:t.status,statusText:t.statusText,response:``,responseFetchHeaders:t.headers,responseHeaders:``,responseText:``,responseType:e.responseType,responseXML:void 0};Object.assign(n,e.context||{}),t.headers.forEach((e,t)=>{n.responseHeaders+=`${t}: ${e}\n`});let r=t.headers.get(`Content-Type`);if(e.responseType===`stream`||t.headers.has(`Content-Type`)&&t.headers.get(`Content-Type`).includes(`text/event-stream`)){Reflect.set(n,`isStream`,!0),Reflect.set(n,`response`,t.body),Reflect.deleteProperty(n,`responseText`),Reflect.deleteProperty(n,`responseXML`),e.onload(n);return}let i=``,a=``,o=``,s=await t.arrayBuffer(),c=`utf-8`;if(t.headers.has(`Content-Type`)){let e=t.headers.get(`Content-Type`)?.match(/charset=(.+)/);e&&(c=e[1],c=c.toLowerCase())}c=c.replace(/('|")/gi,``),a=new TextDecoder(c).decode(s),i=a,e.responseType===`arraybuffer`?i=s:e.responseType===`blob`?i=new Blob([s]):e.responseType===`json`||typeof r==`string`&&r.includes(`application/json`)?i=I.toJSON(a):(e.responseType===`document`||e.responseType==null)&&(i=new DOMParser().parseFromString(a,`text/html`)),o=new DOMParser().parseFromString(a,`text/xml`),n.response=i,n.responseText=a,n.responseXML=o,e.onload(n)}).catch(t=>{t.name!==`AbortError`&&e.onerror({error:t,finalUrl:e.url,isFetch:!0,isSuccess:!1,readyState:4,responseHeaders:``,responseText:``,status:0,statusText:``})}),e.onloadstart({isFetch:!0,isSuccess:!1,finalUrl:e.url,readyState:1,responseHeaders:``,responseText:``,status:0,statusText:``}),{abort(){n.abort()}}}};#e={url:void 0,timeout:5e3,async:!1,responseType:void 0,headers:void 0,data:void 0,redirect:void 0,cookie:void 0,cookiePartition:void 0,binary:void 0,nocache:void 0,revalidate:void 0,context:void 0,overrideMimeType:void 0,anonymous:void 0,fetch:void 0,fetchInit:void 0,allowInterceptConfig:{beforeRequest:!0,afterResponseSuccess:!0,afterResponseError:!0},user:void 0,password:void 0,maxRetryCount:0,__retryCount:0,onabort(){},onerror(){},ontimeout(){},onloadstart(){},onreadystatechange(){},onprogress(){}};#t={baseURL:void 0,isConsoleRequestOption:!1,isAutoHttps:!1};constructor(e={}){typeof e.xmlHttpRequest!=`function`&&console.warn(`[Httpx-constructor] 未传入GM_xmlhttpRequest函数或传入的GM_xmlhttpRequest不是Function，将默认使用window.fetch`),I.coverObjectFunctionThis(this),this.interceptors.request.context=this,this.interceptors.response.context=this,this.config(e)}config(e={}){typeof e.xmlHttpRequest==`function`&&(this.GM_Api.xmlHttpRequest=e.xmlHttpRequest),this.#e=I.assign(this.#e,e),this.#t=I.assign(this.#t,e)}interceptors={request:{context:null,use(e){if(typeof e!=`function`)console.warn(`[Httpx-interceptors-request] 请传入拦截器函数`);else return this.context.HttpxInterceptRequest.add(e)},eject(e){return this.context.HttpxInterceptRequest.delete(e)},ejectAll(){this.context.HttpxInterceptRequest.clearAll()}},response:{context:null,use(e,t){if(typeof e!=`function`&&typeof t!=`function`)console.warn(`[Httpx-interceptors-response] 必须传入一个拦截器函数`);else return this.context.HttpxInterceptResponse.add(e,t)},eject(e){return this.context.HttpxInterceptResponse.delete(e)},ejectAll(){this.context.HttpxInterceptResponse.clearAll()}}};setXMLHttpRequest(e){this.GM_Api.xmlHttpRequest=e}get(...e){let t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method=`GET`,this.request(t,e=>{Reflect.deleteProperty(e,`onprogress`)})}post(...e){let t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method=`POST`,this.request(t)}head(...e){let t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method=`HEAD`,this.request(t,e=>{Reflect.deleteProperty(e,`onprogress`)})}options(...e){let t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method=`OPTIONS`,this.request(t,e=>{Reflect.deleteProperty(e,`onprogress`)})}delete(...e){let t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method=`DELETE`,this.request(t,e=>{Reflect.deleteProperty(e,`onprogress`)})}put(...e){let t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method=`PUT`,this.request(t)}request(e,t){let n=this.HttpxRequestOption.handleBeforeRequestOptionArgs(e),r=null,i=new globalThis.Promise(async(e,i)=>{let a=e,o=n.maxRetryCount??0,s=0,c;for(;!(s>o);){let e=I.deepClone(n);if(e.__retryCount=s,c=await new globalThis.Promise(async n=>{let a=this.HttpxRequestOption.getRequestOption(e.method,e,e=>{n(e)},(...e)=>{i(...e)});a=this.HttpxRequestOption.removeRequestNullOption(a),typeof t==`function`&&t(a);let o=await this.HttpxRequest.request(a);o!=null&&typeof o.abort==`function`&&(r=()=>{o.abort()})}),c.InterceptConfig.isRetry)o++,s++;else if((c.type===`onerror`||c.type===`ontimeout`||!c.isSuccess)&&s<o)s++;else break}a(c)});return i.abort=()=>{typeof r==`function`&&r()},i}},Sn=class{#e;#t;#n;#r=globalThis.indexedDB||globalThis.mozIndexedDB||globalThis.webkitIndexedDB||globalThis.msIndexedDB;#i={};#a={operationSuccess:{code:200,msg:`操作成功`},operationFailed:{code:401,msg:`操作失败`},empty:{code:201,msg:`操作成功，但是没有数据`},openFailed:{code:91001,msg:`打开数据库失败`},saveFailed:{code:91002,msg:`保存数据失败`},getFailed:{code:91003,msg:`获取数据失败`},deleteFailed:{code:91004,msg:`删除数据失败`},deleteAllFailed:{code:91005,msg:`清空数据库失败`},regexpGetFailed:{code:91006,msg:`正则获取数据失败`}};constructor(e=`default_db`,t=`default_form`,n=1){if(this.#e=e,this.#t=t,this.#n=n,!this.#r)throw window.alert(`很抱歉，您的浏览器不支持indexedDB`),TypeError(`很抱歉，您的浏览器不支持indexedDB`)}createStore(e){return this.#i[e].transaction(this.#t,`readwrite`).objectStore(this.#t)}open(e,t){let n=this;if(n.#i[t])e(this.createStore(t));else{let r=n.#r.open(t,n.#n);r.onerror=function(t){e(null,{code:n.#a.openFailed.code,msg:n.#a.openFailed.msg,event:t})},r.onsuccess=function(r){if(!n.#i[t]){let e=r.target;n.#i[t]=e.result}e(n.createStore(t))},r.onupgradeneeded=function(r){let i=r.target;n.#i[t]=i.result;let a=n.#i[t].createObjectStore(n.#t,{keyPath:`key`});a.transaction.oncomplete=function(){e(a)}}}}async save(e,t){let n=this;return new Promise(r=>{let i=this.#e,a={key:e,value:t};this.open(function(e){if(e==null)r({success:!1,code:n.#a.saveFailed.code,msg:n.#a.saveFailed.msg});else{let t=e.put(a);t.onsuccess=function(e){r({success:!0,code:n.#a.operationSuccess.code,msg:n.#a.operationSuccess.msg,event:e})},t.onerror=function(e){r({success:!1,code:n.#a.saveFailed.code,msg:n.#a.saveFailed.msg,event:e})}}},i)})}async has(e){let t=this;return new Promise(n=>{let r=this.#e;this.open(function(r){if(r==null)n({success:!1,code:t.#a.getFailed.code,msg:t.#a.getFailed.msg});else{let i=r.get(e);i.onsuccess=function(e){n({success:!0,code:t.#a.operationSuccess.code,msg:t.#a.operationSuccess.msg,event:e})},i.onerror=function(e){n({success:!1,code:t.#a.getFailed.code,msg:t.#a.getFailed.msg,event:e})}}},r)})}async get(e){let t=this;return new Promise(n=>{let r=this.#e;this.open(function(r){if(r==null)n({success:!1,code:t.#a.getFailed.code,msg:t.#a.getFailed.msg,data:void 0});else{let i=r.get(e);i.onsuccess=function(e){let r=e.target.result,i=r?r.value:void 0;n(i==null?{success:!0,code:t.#a.empty.code,msg:t.#a.empty.msg,data:i,event:e,result:r}:{success:!0,code:t.#a.operationSuccess.code,msg:t.#a.operationSuccess.msg,data:i,event:e,result:r})},i.onerror=function(e){n({success:!1,code:t.#a.getFailed.code,msg:t.#a.getFailed.msg,data:void 0,event:e})}}},r)})}async regexpGet(e){let t=[],n=this;return new Promise(r=>{let i=n.#e;this.open(function(i){if(i==null)r({success:!1,code:n.#a.regexpGetFailed.code,msg:n.#a.regexpGetFailed.msg,data:[]});else{let a=i.getAll();a.onsuccess=function(i){let a=i.target.result;a.length!==0&&a.forEach(n=>{let r=n.key,i=n.value;r.match(e)&&(t=t.concat(i))}),r({success:!0,code:n.#a.operationSuccess.code,msg:n.#a.operationSuccess.msg,data:t,event:i})},a.onerror=function(e){r({success:!1,code:n.#a.getFailed.code,msg:n.#a.getFailed.msg,data:[],event:e})}}},i)})}async delete(e){let t=this;return new Promise(n=>{let r=t.#e;this.open(function(r){if(r==null)n({success:!1,code:t.#a.deleteFailed.code,msg:t.#a.deleteFailed.msg});else{let i=r.delete(e);i.onsuccess=function(e){n({success:!0,code:t.#a.operationSuccess.code,msg:t.#a.operationSuccess.msg,event:e})},i.onerror=function(e){n({success:!1,code:t.#a.deleteFailed.code,msg:t.#a.deleteFailed.msg,event:e})}}},r)})}async deleteAll(){let e=this;return new Promise(t=>{let n=e.#e;this.open(function(n){if(n==null)t({success:!1,code:e.#a.deleteAllFailed.code,msg:e.#a.deleteAllFailed.msg});else{let r=n.clear();r.onsuccess=function(n){t({success:!0,code:e.#a.operationSuccess.code,msg:e.#a.operationSuccess.msg,event:n})},r.onerror=function(n){t({success:!1,code:e.#a.deleteAllFailed.code,msg:e.#a.deleteAllFailed.msg,event:n})}}},n)})}},Cn=class{#e=!1;#t=0;#n;#r=void 0;lock;unlock;run;isLock;constructor(e,t,n){let r=this;this.#n=e,this.#t=typeof t==`number`?t:n,this.lock=function(){r.#e=!0,clearTimeout(r.#r)},this.unlock=function(){r.#r=setTimeout(()=>{r.#e=!1},r.#t)},this.isLock=function(){return r.#e},this.run=async function(...e){r.isLock()||(r.lock(),await r.#n.apply(this,e),r.unlock())}}},wn=class{#e=!1;tag=`Utils.Log`;#t=null;#n=0;#r={tag:!0,successColor:`background: #0eac0eff;`,errorColor:`background: #FF0000;`,infoColor:`background: #6495ed;`,warnColor:`background: #ff8c00;`,debug:!1,autoClearConsole:!1,logMaxCount:999};#i={commonStyle:`color: #ffffff; padding: 3px; border-radius: 3px;line-height: 1;margin-right: 6px;`,tagStyle:`background: #6495ed;`,callerNameStyle:`background: #78909C;`};constructor(e,t=window.console){typeof e==`string`?this.tag=e:typeof e==`object`&&typeof e?.script?.name==`string`&&(this.tag=e.script.name),this.#t=t}parseErrorStack(e){let t={name:``,position:``};for(let n of e){n=n.trim();let e=n.match(/^at[\s]+(.+?)[\s]+/i),r=n.match(/^at[\s]+.+[\s]+\((.+?)\)/i);if(e==null||r==null)continue;let i=e[e.length-1],a=r[r.length-1];if(!(i===``||i.match(/^(Utils\.|)Log(\.|)|.<anonymous>$|^Function.each|^NodeList.forEach|^k.fn.init.each/g))){t.name=i,t.position=a;break}}if(t.position===``){let n=e[e.length-1].trim();if(n.startsWith(`at chrome-extension://`)){let e=n.match(/^at[\s]+(.+)/);e&&(t.position=e[e.length-1])}}return t.position===``&&(t.position=e[e.length-1].trim().replace(/^at[\s]*/g,``)),t}checkClearConsole(){this.#n++,this.#r.autoClearConsole&&this.#n>this.#r.logMaxCount&&(this.#t.clear(),this.#n=0)}printContent(e,t){this.checkClearConsole();let n=Error().stack.split(`
`);n.splice(0,2);let{name:r,position:i}=this.parseErrorStack(n),a=this.tag,o=this,s=[],c=`%c${a}`;typeof t==`string`&&t.trim()!==``?s.push(o.#i.commonStyle+t):s.push(o.#i.commonStyle+o.#i.tagStyle),r.trim()==``||(c=`${c}%c${r}`,s.push(o.#i.commonStyle+o.#i.callerNameStyle)),Array.isArray(e)?o.#t.log(`${c}`,...s,...e):o.#t.log(`${c}`,...s,e),this.#r.debug&&this.#t.log(i)}info(...e){this.#e||this.printContent(e,this.#r.infoColor)}warn(...e){this.#e||this.printContent(e,this.#r.warnColor)}error(...e){this.#e||this.printContent(e,this.#r.errorColor)}success(...e){this.#e||this.printContent(e,this.#r.successColor)}table(e){if(this.#e)return;this.checkClearConsole();let t=Error().stack.split(`
`);t.splice(0,1);let n=this.parseErrorStack(t),r=n.name,i=n.position,a=r,o=[`${this.#i.commonStyle+this.#r.infoColor}`,`${this.#i.commonStyle+this.#i.callerNameStyle}`];this.#t.log(`%c${this.tag}%c${a}%c`,o),this.#t.table(e),this.#r.debug&&this.#t.log(i)}config(e){this.#r=Object.assign(this.#r,e)}disable(){this.#e=!0}recovery(){this.#e=!1}},Tn=class{constructor(e){this.moduleID=Math.random().toString(36).substring(7),this.functionArguments=[[[0],[(e,t,n)=>{this.modules=n.c,this.constructors=n.m,this.get=n}]],[[1e3],{[this.moduleID]:(e,t,n)=>{this.modules=n.c,this.constructors=n.m,this.get=n}},[[this.moduleID]]]],this.arrayArguments=[[[this.moduleID],{},e=>{let t=e.m;Object.keys(t).forEach(t=>{try{this.modules[t]=e(t)}catch(e){this.log(`[arrayArguments/1] Failed to require(${t}) with error:\n${e}\n${e.stack}`)}}),this.get=e}],this.functionArguments[1]],this.modules={},this.constructors=[];let t={target:window,entrypoint:`webpackJsonp`,debug:!1,strict:!1};typeof e==`object`&&(t=Object.assign(Object.assign({},t),e)),this.target=t.target,this.entrypoint=t.entrypoint,this.debug=t.debug,this.strict=t.strict,this.detectEntrypoint(),this.fillModules(),this.replaceGet(),this.setupPushEvent()}log(e){this.debug&&console.warn(`[moduleRaid] ${e}`)}replaceGet(){this.get===null&&(this.get=e=>this.modules[e])}fillModules(){if(typeof this.target[this.entrypoint]==`function`?this.functionArguments.forEach((e,t)=>{try{if(this.modules&&Object.keys(this.modules).length>0)return;this.target[this.entrypoint](...e)}catch(e){this.log(`moduleRaid.functionArguments[${t}] failed:\n${e}\n${e.stack}`)}}):this.arrayArguments.forEach((e,t)=>{try{if(this.modules&&Object.keys(this.modules).length>0)return;this.target[this.entrypoint].push(e)}catch(e){this.log(`Pushing moduleRaid.arrayArguments[${t}] into ${this.entrypoint} failed:\n${e}\n${e.stack}`)}}),this.modules&&Object.keys(this.modules).length==0){let e=!1,t=0;if(typeof this.target[this.entrypoint]!=`function`||!this.target[this.entrypoint]([],[],[t]))throw Error(`Unknown Webpack structure`);for(;!e;)try{this.modules[t]=this.target[this.entrypoint]([],[],[t]),t++}catch{e=!0}}}setupPushEvent(){let e=this.target[this.entrypoint].push;this.target[this.entrypoint].push=(...t)=>{let n=Reflect.apply(e,this.target[this.entrypoint],t);return document.dispatchEvent(new CustomEvent(`moduleraid:webpack-push`,{detail:t})),n}}detectEntrypoint(){if(this.target[this.entrypoint]!=null)return;if(this.strict)throw Error(`Strict mode is enabled and entrypoint at window.${this.entrypoint} couldn't be found. Please specify the correct one!`);let e=Object.keys(this.target);if(e=e.filter(e=>e.toLowerCase().includes(`chunk`)||e.toLowerCase().includes(`webpack`)).filter(e=>typeof this.target[e]==`function`||Array.isArray(this.target[e])),e.length>1)throw Error(`Multiple possible endpoints have been detected, please create a new moduleRaid instance with a specific one:\n${e.join(`, `)}`);if(e.length===0)throw Error(`No Webpack JSONP entrypoints could be detected`);this.log(`Entrypoint has been detected at window.${e[0]} and set for injection`),this.entrypoint=e[0]}searchObject(e,t){for(let n in e){let r=e[n],i=t.toLowerCase();if(typeof r!=`object`){if(n.toString().toLowerCase().includes(i))return!0;if(typeof r!=`object`){if(r.toString().toLowerCase().includes(i))return!0}else if(this.searchObject(r,t))return!0}}return!1}findModule(e){let t=[],n=Object.keys(this.modules);if(n.length===0)throw Error(`There are no modules to search through!`);return n.forEach(n=>{let r=this.modules[n.toString()];if(r!==void 0)try{if(typeof e==`string`)switch(e=e.toLowerCase(),typeof r){case`string`:r.toLowerCase().includes(e)&&t.push(r);break;case`function`:r.toString().toLowerCase().includes(e)&&t.push(r);break;case`object`:this.searchObject(r,e)&&t.push(r)}else if(typeof e==`function`)e(r)&&t.push(r);else throw TypeError(`findModule can only find via string and function, ${typeof e} was passed`)}catch(e){this.log(`There was an error while searching through module '${n}':\n${e}\n${e.stack}`)}}),t}findConstructor(e){let t=[],n=Object.keys(this.constructors);if(n.length===0)throw Error(`There are no constructors to search through!`);return n.forEach(n=>{let r=this.constructors[n];try{typeof e==`string`?(e=e.toLowerCase(),r.toString().toLowerCase().includes(e)&&t.push([this.constructors[n],this.modules[n]])):typeof e==`function`&&e(r)&&t.push([this.constructors[n],this.modules[n]])}catch(e){this.log(`There was an error while searching through constructor '${n}':\n${e}\n${e.stack}`)}}),t}},En=class{#e={canvasNode:null,deg:95,progress:0,lineWidth:10,lineBgColor:`#1e637c`,lineColor:`#25deff`,textColor:`#000000`,fontSize:22,circleRadius:50};#t;#n;#r;constructor(e){if(this.#e=I.assign(this.#e,e),!(this.#e.canvasNode instanceof HTMLCanvasElement))throw Error(`Utils.Progress 参数 canvasNode 必须是 HTMLCanvasElement`);let t=this.#e.canvasNode.getContext(`2d`);if(t==null)throw Error(`Utils.Progress 获取画笔失败`);this.#t=t,this.#n=this.#e.canvasNode.width,this.#r=this.#e.canvasNode.height,window.devicePixelRatio&&(this.#e.canvasNode.style.width=`${this.#n}px`,this.#e.canvasNode.style.height=`${this.#r}px`,this.#e.canvasNode.height=this.#r*window.devicePixelRatio,this.#e.canvasNode.width=this.#n*window.devicePixelRatio,this.#t.scale(window.devicePixelRatio,window.devicePixelRatio)),this.#t.lineWidth=this.#e.lineWidth}draw(){let e=this.#e.progress*360/100;this.#t.clearRect(0,0,this.#n,this.#r),this.#t.beginPath(),this.#t.arc(this.#n/2,this.#r/2,this.#e.circleRadius,1,8),this.#t.strokeStyle=this.#e.lineBgColor,this.#t.stroke(),this.#t.beginPath(),this.#t.arc(this.#n/2,this.#r/2,this.#e.circleRadius,-Math.PI/2,e*Math.PI/180-Math.PI/2),this.#t.strokeStyle=this.#e.lineColor,this.#t.stroke();let t=`${parseInt(this.#e.progress.toString())}%`;this.#t.font=`${this.#e.fontSize}px SimHei`;let n=this.#t.measureText(t).width,r=this.#e.fontSize/2;this.#t.fillStyle=this.#e.textColor,this.#t.fillText(t,this.#n/2-n/2,this.#r/2+r/2)}},Dn=class{GM_Api={getValue:null,setValue:null,registerMenuCommand:null,unregisterMenuCommand:null};MenuHandle={context:this,$data:{data:[],key:`GM_Menu_Local_Map`},$default:{autoReload:!0,isStoreValue:!0},$emoji:{success:`✅`,error:`❌`},init(){for(let e=0;e<this.$data.data.length;e++){let t=this.$data.data[e].data;t.enable=!!this.getLocalMenuData(t.key,t.enable),typeof t.showText!=`function`&&(t.showText=(e,t)=>t?`${this.$emoji.success} ${e}`:`${this.$emoji.error} ${e}`)}},register(e){let t=this;if(e==null)throw TypeError(`register菜单数据不能为空`);Array.isArray(e)||(e=[e]);for(let n=0;n<e.length;n++){let r=I.deepClone(e[n].data),{showText:i,clickCallBack:a}=this.handleMenuData(r),o=t.context.GM_Api.registerMenuCommand(i,a);e[n].id=o,r.deleteMenu=function(){t.context.GM_Api.unregisterMenuCommand(o)},Reflect.deleteProperty(e[n],`handleData`),e[n].handleData=r}},getLocalMenuData(e,t){let n=this.context.GM_Api.getValue(this.$data.key,{});return e in n?n[e]:t},setLocalMenuData(e,t){let n=this.context.GM_Api.getValue(this.$data.key,{});n[e]=t,this.context.GM_Api.setValue(this.$data.key,n)},handleInitDetail(e){return e.enable=!!this.getLocalMenuData(e.key,e.enable),typeof e.showText!=`function`&&(e.showText=(e,t)=>t?`${this.$emoji.success} ${e}`:`${this.$emoji.error} ${e}`),e},handleMenuData(e){let t=this,n=e.key,r=!!this.getLocalMenuData(n,e.enable),i=e.showText(e.text,r);e.autoReload=typeof e.autoReload==`boolean`?e.autoReload:this.$default.autoReload,e.isStoreValue=typeof e.isStoreValue==`boolean`?e.isStoreValue:this.$default.isStoreValue;function a(i){let a=!!t.getLocalMenuData(n,r);e.isStoreValue&&t.setLocalMenuData(n,!a),typeof e.callback==`function`&&e.callback({key:n,enable:!a,oldEnable:a,event:i,storeValue(e){t.setLocalMenuData(n,e)}}),e.autoReload?window.location.reload():t.context.update()}return{showText:i,clickCallBack:a}},getMenuData(e){return this.$data.data.find(t=>t.data.key===e)},getMenuOption(e){return this.$data.data.find(t=>t.data.key===e)?.data},getMenuHandledOption(e){return this.$data.data.find(t=>t.handleData.key===e)?.handleData}};constructor(e){this.GM_Api.getValue=e.GM_getValue,this.GM_Api.setValue=e.GM_setValue,this.GM_Api.registerMenuCommand=e.GM_registerMenuCommand,this.GM_Api.unregisterMenuCommand=e.GM_unregisterMenuCommand,this.MenuHandle.$default.autoReload=typeof e.autoReload!=`boolean`||e.autoReload;for(let e of Object.keys(this.GM_Api))if(typeof this.GM_Api[e]!=`function`)throw Error(`Utils.GM_Menu 请在脚本开头加上 @grant  ${e}，且传入该对象`);this.add(e?.data||[])}__add(e){if(Array.isArray(e))for(let t=0;t<e.length;t++){let n=e[t];this.MenuHandle.$data.data.push({data:n,id:void 0})}else this.MenuHandle.$data.data.push({data:e,id:void 0})}add(e){return this.__add(e),this.update(),{destory:()=>{Array.isArray(e)||(e=[e]),e.forEach(e=>{this.delete(e.key)})}}}update(e){let t=[];Array.isArray(e)?t=[...t,...e]:e!=null&&(t=[...t,e]),t.forEach(e=>{let t=this.MenuHandle.getMenuOption(e.key);t?Object.assign(t,e):this.__add(e)}),this.MenuHandle.$data.data.forEach(e=>{e.handleData&&e.handleData.deleteMenu()}),this.MenuHandle.init(),this.MenuHandle.register(this.MenuHandle.$data.data)}delete(e){if(typeof e==`string`){let t=this.getMenuId(e);t!=null&&(e=t)}this.GM_Api.unregisterMenuCommand(e)}getEnable(e){return this.MenuHandle.getMenuHandledOption(e).enable}getText(e){return this.MenuHandle.getMenuHandledOption(e).text}getShowTextValue(e){let t=this.getText(e),n=this.getEnable(e);return this.MenuHandle.getMenuHandledOption(e).showText(t,n)}getMenuId(e){let t=null;for(let n=0;n<this.MenuHandle.$data.data.length;n++){let r=this.MenuHandle.$data.data[n];if(r.handleData?.key===e){t=r.id;break}}return t}getAccessKey(e){return this.MenuHandle.getMenuHandledOption(e)?.accessKey}getAutoClose(e){return this.MenuHandle.getMenuHandledOption(e)?.autoClose}getAutoReload(e){return this.MenuHandle.getMenuHandledOption(e)?.autoReload}getCallBack(e){return this.MenuHandle.getMenuHandledOption(e)?.callback}getEnableTrueEmoji(){return this.MenuHandle.$emoji.success}getEnableFalseEmoji(){return this.MenuHandle.$emoji.error}getLocalStorageKeyName(){return this.MenuHandle.$data.key}setValue(e,t){this.MenuHandle.setLocalMenuData(e,t)}setEnable(e,t){this.setValue(e,!!t)}setEnableTrueEmoji(e){if(typeof e!=`string`)throw TypeError(`参数emojiString必须是string类型`);this.MenuHandle.$emoji.success=e}setEnableFalseEmoji(e){if(typeof e!=`string`)throw TypeError(`参数emojiString必须是string类型`);this.MenuHandle.$emoji.error=e}setLocalStorageKeyName(e){if(typeof e!=`string`)throw TypeError(`参数keyName必须是string类型`);this.MenuHandle.$data.key=e}},On={ReactiveFlags:{IS_REACTIVE:Symbol(`isReactive`)},isObject(e){return typeof e==`object`&&!!e},isFunction(e){return typeof e==`function`},isReactive(e){return!!(e&&e[On.ReactiveFlags.IS_REACTIVE])},isArray(e){return Array.isArray(e)}},kn=class{deps=[];active=!0;fn;scheduler;options;constructor(e,t,n){this.fn=e,this.scheduler=t,this.options=n}run(e){this.active||this.fn();try{return typeof e==`function`&&e(this),this.fn()}finally{typeof e==`function`&&e(void 0)}}stop(){this.active&&=(this.deps&&this.deps.length&&(this.deps.forEach(e=>{e.delete(this)}),this.deps.length=0),!1)}},An=class{_value;_isRef=!0;_rawValue;_vue;constructor(e,t){this._vue=e,this._rawValue=t,this._value=this._vue.toReactive(t)}get value(){return this._value}set value(e){e!==this._rawValue&&(this._value=this._vue.toReactive(e),this._rawValue=e)}},jn=class{object;key;constructor(e,t){this.object=e,this.key=t}get value(){return this.object[this.key]}set value(e){this.object[this.key]=e}},Mn=class{reactMap=new WeakMap;targetMap=new WeakMap;activeEffect=void 0;constructor(){}reactive(e){let t=this;if(!(typeof e==`object`&&e))return;if(On.isReactive(e))return e;let n=this.reactMap.get(e);if(n)return n;let r=new Proxy(e,{get(e,n,r){return n===On.ReactiveFlags.IS_REACTIVE||(t.track(e,`get`,n),Reflect.get(e,n,r))},set(e,n,r,i){let a=e[n],o=Reflect.set(e,n,r,i);return t.trigger(e,`set`,n,a,r),o}});return t.reactMap.set(e,r),r}watch(e,t,n){let r;if(On.isReactive(e))r=()=>this.traversal(e);else if(On.isFunction(e))r=e;else return;let i,a=()=>{s.stop()},o=()=>{let e=s.run(e=>{this.activeEffect=e});t(e,i),n?.once&&a(),i=e},s=new kn(r,o,{triggerMethod:`not-same`,...n??{}});return i=s.run(e=>{this.activeEffect=e}),n&&n.immediate&&o(),{unwatch:a}}toReactive(e){return On.isObject(e)?this.reactive(e):e}ref(e){return new An(this,e)}toRef(e,t){return new jn(e,t)}toRefs(e){let t=On.isArray(e)?Array(e.length):{};for(let n in e)t[n]=this.toRef(e,n);return t}trigger(e,t,n,r,i){let a=this.targetMap.get(e);if(!a)return;let o=a.get(n);this.triggerEffect(o,t,`effects`,r,i)}triggerEffect(e,t,n,r,i){if(e){let t=r===i;e.forEach(e=>{if(e.options.triggerMethod===`not-same`){if(t)return;e.scheduler?e.scheduler():e.run()}else e.options.triggerMethod===`set`&&(e.scheduler?e.scheduler():e.run())})}}track(e,t,n){if(!this.activeEffect)return;let r=this.targetMap.get(e);r||this.targetMap.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=new Set),this.trackEffect(i)}trackEffect(e){this.activeEffect&&(e.has(this.activeEffect)||(e.add(this.activeEffect),this.activeEffect.deps.push(e)))}traversal(e,t=new Set){if(!On.isObject(e)||t.has(e))return e;t.add(e);for(let n in e)this.traversal(e[n],t);return e}},Nn=new class e{windowApi;constructor(e){this.windowApi=new hn(e)}version=en;assign=I.assign.bind(I);async asyncReplaceAll(e,t,n){let r=this;if(typeof e!=`string`)throw TypeError(`string必须是字符串`);if(typeof n!=`function`)throw TypeError(`asyncFn必须是函数`);let i;if(typeof t==`string`)i=new RegExp(r.toRegExpStr(t),`g`);else if(t instanceof RegExp){if(!t.global)throw TypeError(`pattern必须是全局匹配`);i=new RegExp(t)}else throw TypeError(`pattern必须是正则对象`);let a=[],o,s=0;for(;(o=i.exec(e))!==null;){let t=n(o[0]),r=e.slice(s,o.index);s=o.index+o[0].length,a.push(t),a.push(r)}return a.push(e.slice(s)),a=await Promise.all(a),a.join(``)}ajaxHooker=()=>tn();oldAjaxHooker=()=>nn();canvasClickByPosition(e,t=0,n=0,r=this.windowApi.window){if(!(e instanceof HTMLCanvasElement))throw Error(`Utils.canvasClickByPosition 参数canvasElement必须是canvas元素`);t=parseInt(t.toString()),n=parseInt(n.toString());let i={cancelBubble:!0,cancelable:!0,clientX:t,clientY:n,view:r,detail:1};e.dispatchEvent(new MouseEvent(`mousedown`,i)),e.dispatchEvent(new MouseEvent(`mouseup`,i))}cloneFormData(e,t){let n=new FormData;return e.forEach((e,r)=>{let i=typeof t==`function`&&t(r,e);typeof i==`boolean`&&i||n.append(r,e)}),n}createOverload(){let e=new Map;function t(...t){let n=t.map(e=>typeof e).join(`,`),r=e.get(n);if(!r)throw TypeError(`没有找到对应的实现`);return r.apply(this,t)}return t.addImpl=function(...t){let n=t.pop();if(typeof n!=`function`)throw TypeError(`最后一个参数必须是函数`);let r=t.join(`,`);e.set(r,n)},t}ColorConversion=pn;deepClone=I.deepClone.bind(I);debounce(e,t=0){let n=null,r=this;return function(...i){clearTimeout(n),n=setTimeout(function(){e.apply(r,i)},t)}}Dictionary=mn;downloadBase64(e,t,n=!1){if(typeof e!=`string`)throw Error(`Utils.downloadBase64 参数 base64Data 必须为 string 类型`);if(typeof t!=`string`)throw Error(`Utils.downloadBase64 参数 fileName 必须为 string 类型`);if(n){let n=this.windowApi.document.createElement(`iframe`);n.style.display=`none`,n.src=e,(this.windowApi.document.body||this.windowApi.document.documentElement).appendChild(n),setTimeout(()=>{n.contentWindow.document.execCommand(`SaveAs`,!0,t),(this.windowApi.document.body||this.windowApi.document.documentElement).removeChild(n)},100)}else{let n=this.windowApi.document.createElement(`a`);n.setAttribute(`target`,`_blank`),n.download=t,n.href=e,n.click()}}findWebPageVisibleText(e=``,t=!1){let n=null,r;if(this.windowApi.globalThis.find){let n=this.windowApi.self.find;if(r=n(e,t,!0,!0,!1),r&&this.windowApi.self.getSelection&&!this.windowApi.self.getSelection().anchorNode&&(r=n(e,t,!0,!0,!1)),!r)for(r=n(e,0,1);n(e,0,1);)continue}else if(navigator.appName.indexOf(`Microsoft`)!=-1)n!=null&&(n=n,n.collapse(!1),r=n.findText(e),r&&n.select()),(n==null||r==0)&&(n=this.windowApi.self.document.body.createTextRange(),r=n.findText(e),r&&n.select());else if(navigator.appName==`Opera`){alert(`Opera browsers not supported, sorry...`);return}return!!r}formatByteToSize(e,t=!0,n=`1024`){if(e=parseInt(e.toString()),isNaN(e))throw Error(`Utils.formatByteToSize 参数 byteSize 格式不正确`);let r=0,i=`KB`,a={},o=Number(n);a.B=1,a.KB=o,a.MB=a.KB*a.KB,a.GB=a.MB*a.KB,a.TB=a.GB*a.KB,a.PB=a.TB*a.KB,a.EB=a.PB*a.KB,a.ZB=a.EB*a.KB,a.YB=a.ZB*a.KB,a.BB=a.YB*a.KB,a.NB=a.BB*a.KB,a.DB=a.NB*a.KB;for(let t in a)if(r=e/a[t],i=t,a.KB>=r)break;return r=r.toFixed(2),r=t?r+i.toString():parseFloat(r.toString()),r}getNodeListValue(...e){let t=[];for(let n of e){let e=n;if(typeof n==`function`&&(e=n()),e.length!==0){t=[...e];break}}return t}getNonNullValue(...e){let t=e[e.length-1],n=this;for(let r of e)if(n.isNotNull(r)){t=r;break}return t}formatTime(e=new Date,t=`yyyy-MM-dd HH:mm:ss`){let n=e==null?new Date:new Date(e);function r(e){return e<10?`0${e}`:e}function i(e){return e>12?e-12:e}let a={yyyy:n.getFullYear(),MM:r(n.getMonth()+1),dd:r(n.getDate()),HH:r(n.getHours()),hh:r(i(n.getHours())),mm:r(n.getMinutes()),ss:r(n.getSeconds())};return Object.keys(a).forEach(function(e){let n=new RegExp(e,`g`);t=t.replace(n,a[e])}),t}isToday(e){let t=Date.now();return Nn.formatTime(e,`yyyyMMdd`)===Nn.formatTime(t,`yyyyMMdd`)}formatToTimeStamp(e){if(typeof e!=`string`)throw Error(`Utils.formatToTimeStamp 参数 text 必须为 string 类型`);if(e.length===8){let t=new Date;e=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${e}`}return e=e.substring(0,19),e=e.replace(/-/g,`/`),new Date(e).getTime()}GBKEncoder=_n;getArrayLastValue(e){return e[e.length-1]}getArrayRealValue(...e){let t=null;for(let n of e)if(typeof n==`function`&&(n=n()),n!=null){t=n;break}return t}getDaysDifference(e=Date.now(),t=Date.now(),n=`天`){n=n.trim(),e.toString().length===10&&(e*=1e3),t.toString().length===10&&(t*=1e3);let r=e>t?t:e,i=e>t?e:t,a=new Date(i),o=new Date(r),s=1;n===`年`?s=31104e6:n===`月`?s=2592e6:n===`天`?s=864e5:n===`时`?s=36e5:n===`分`?s=6e4:n===`秒`&&(s=1e3);let c=Math.round(Math.abs((a-o)/s));if(n===`auto`){let e=i-r;if(c=Math.floor(e/864e5),c>0)c=`${c}天`;else{let t=e%864e5,n=Math.floor(t/36e5);if(n>0)c=`${n}小时`;else{let e=t%36e5,n=Math.floor(e/6e4);if(n>0)c=`${n}分钟`;else{let t=e%6e4;c=`${Math.round(t/1e3)}秒`}}}}return c}getMaxValue(...e){let t=[...e],n=[];if(t.length!==0){if(t.length>1){if(t.length===2&&typeof t[0]==`object`&&typeof t[1]==`function`){let e=t[0],r=t[1];Object.keys(e).forEach(t=>{n.push(r(t,e[t]))})}else if(t.length===2&&Array.isArray(t[0])&&typeof t[1]==`function`){let e=t[0],r=t[1];e.forEach((e,t,i)=>{n.push(r(e,t,i))})}else t.forEach(e=>{isNaN(parseFloat(e))||n.push(parseFloat(e))});return Math.max(...n)}return t[0].forEach(e=>{isNaN(parseFloat(e))||n.push(parseFloat(e))}),Math.max(...n)}}getMaxZIndexNodeInfo(e=1,t=this.windowApi.document,n){e=Number.isNaN(e)?1:e;let r=this,i=2*10**9,a=0,o=null,s=function(e,t){let n=!0;return n=t instanceof HTMLElement?typeof t.checkVisibility==`function`?t.checkVisibility():e.position!==`static`&&e.display!==`none`&&e.visibility!==`hidden`&&e.opacity!==`0`:!1,n},c=function(e){if(typeof n==`function`){let t=n(e);if(typeof t==`boolean`&&!t)return}let t=r.windowApi.globalThis.getComputedStyle(e);if(s(t,e)){let n=parseInt(t.zIndex);isNaN(n)||n>a&&(a=n,o=e),e.shadowRoot!=null&&e instanceof ShadowRoot&&e.shadowRoot.querySelectorAll(`*`).forEach(e=>{c(e)})}};return t.querySelectorAll(`*`).forEach(e=>{c(e)}),a+=e,a>=i&&(a=i),{node:o,zIndex:a}}getMaxZIndexNodeInfoFromPoint(e,t){typeof e==`function`&&(e=e()),typeof e==`number`&&(t=e,e=void 0),(typeof t!=`number`||Number.isNaN(t))&&(t=10);let n=2*10**9,r=[],i=globalThis.innerWidth,a=globalThis.innerHeight;for(let e=0;e<8;e++)for(let t=0;t<8;t++){let n={x:globalThis.innerWidth*(e/8)+10,y:globalThis.innerHeight*(t/8)+10};n.x>i&&(n.x=i),n.y>a&&(n.y=a),r.push(n)}let o=r;e&&(o.length=0,Array.isArray(e)?o.push(...e):o.push(e));let s=o.map(e=>{let r,i,a;if(e instanceof HTMLElement){r=e;let t=e.getBoundingClientRect();i=t.x+t.width/2,a=t.y+t.height/2}else r=document.elementFromPoint(e.x,e.y),i=e.x,a=e.y;let o=r?.shadowRoot;if(o&&(r=o.elementFromPoint(i,a)),!(r instanceof HTMLElement))return;let s=r,c=0,l=null,u={x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0};for(;s;){let e=globalThis.getComputedStyle(s),t=parseInt(e.zIndex);e.position!==`static`&&!isNaN(t)&&t>c&&(c=t,l=s),s=s.parentElement}if(l){let e=l.getBoundingClientRect();u={x:e.x,y:e.y,width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left}}let d=c+t;if(!(d>=n))return{zIndex:d,originZIndex:c,node:l,positionNode:r,positionX:i,positionY:a,rect:u}}).filter(e=>e!=null);return s.sort((e,t)=>e.zIndex<t.zIndex?1:e.zIndex>t.zIndex?-1:0),s}getMaxZIndex(e=1,t=this.windowApi.document,n){return this.getMaxZIndexNodeInfo(e,t,n).zIndex}getMinValue(...e){let t=[...e],n=[];if(t.length!==0){if(t.length>1){if(t.length===2&&typeof t[0]==`object`&&typeof t[1]==`function`){let e=t[0],r=t[1];Object.keys(e).forEach(t=>{n=[...n,r(t,e[t])]})}else t.forEach(e=>{isNaN(parseFloat(e))||(n=[...n,parseFloat(e)])});return Math.min(...n)}return t[0].forEach(e=>{isNaN(parseFloat(e))||(n=[...n,parseFloat(e)])}),Math.min(...n)}}getRandomAndroidUA(){let e=this;return`Mozilla/5.0 (Linux; Android ${e.getRandomValue(12,14)}; ${e.getRandomValue([`LDN-LX3`,`RNE-L03`,`ASUS_X00ID Build/NMF26F`,`WAS-LX3`,`PRA-LX3`,`MYA-L03`,`Moto G Play`,`Moto C Build/NRD90M.063`,`Redmi Note 4 Build/NRD90M`,`HUAWEI VNS-L21 Build/HUAWEIVNS-L21`,`VTR-L09`,`TRT-LX3`,`M2003J15SC Build/RP1A.200720.011; wv`,`MI 13 Build/OPR1.170623.027; wv`])}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${e.getRandomValue(130,140)}.${e.getRandomValue(0,0)}.${e.getRandomValue(2272,6099)}.${e.getRandomValue(1,218)} Mobile Safari/537.36`}getRandomPCUA(){let e=this;return`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${e.getRandomValue(130,140)}.${e.getRandomValue(0,0)}.${e.getRandomValue(2272,6099)}.${e.getRandomValue(1,218)} Safari/537.36`}getRandomValue(...e){let t=[...e];if(t.length>1){if(t.length===2&&typeof t[0]==`number`&&typeof t[1]==`number`){let e=t[0]>t[1]?t[1]:t[0],n=t[0]>t[1]?t[0]:t[1];return Math.round(Math.random()*(n-e))+e}return t[Math.floor(Math.random()*t.length)]}if(t.length===1){let e=t[0];return Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:typeof e==`object`&&Object.keys(e).length>0?e[Object.keys(e)[Math.floor(Math.random()*Object.keys(e).length)]]:e}}getReactInstance(e){let t={};return e==null||Object.keys(e).forEach(n=>{if(n.startsWith(`__react`)){let r=n.replace(/__(.+)\$.+/i,`$1`),i=Reflect.get(e,n);r in t?console.error(`重复属性 ${n}`):Reflect.set(t,r,i)}}),t}getSymbol(e,t){if(typeof e!=`object`)throw TypeError(`target不是一个对象`);let n=Object.getOwnPropertySymbols(e);if(typeof t==`string`){let r=n.find(e=>e.toString()===t);if(r)return e[r]}else if(typeof t==`symbol`){let r=n.find(e=>e===t);if(r)return e[r]}else{let t={};return n.forEach(n=>{t[n]=e[n]}),t}}getTextLength(e){return new TextEncoder().encode(e).length}getTextStorageSize(e,t=!0){let n=this;return n.formatByteToSize(n.getTextLength(e),t)}getThunderUrl(e){if(e==null)throw TypeError(`url不能为空`);if(typeof e!=`string`)throw TypeError(`url必须是string类型`);if(e.trim()===``)throw TypeError(`url不能为空字符串或纯空格`);return`thunder://${this.windowApi.globalThis.btoa(`AA${e}ZZ`)}`}DocumentCookieHandler=an;CookieManagerService=fn;GM_Menu=Dn;Hooks=vn;Httpx=xn;indexedDB=Sn;isNativeFunc(e){return!!e.toString().match(/^function .*\(\) { \[native code\] }$/)}isNearBottom(...e){let t=50,n=()=>{let e=this.windowApi.window.pageYOffset||this.windowApi.document.documentElement.scrollTop,n=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight,r=this.windowApi.document.documentElement.scrollHeight-t;return e+n>=r},r=e=>{let n=e.scrollTop,r=e.clientHeight;return n>=e.scrollHeight-r-t},i=e[0];if(e.length===0||typeof e[0]==`number`)return n();if(typeof e[0]==`object`&&e[0]instanceof HTMLElement)return typeof e[1]==`number`&&!Number.isNaN(e[1])&&(t=e[1]),r(e[0]);throw TypeError(`参数1类型错误${typeof i}`)}isDOM=I.isDOM.bind(I);isFullscreenEnabled(){return!!(this.windowApi.document.fullscreenEnabled||this.windowApi.document.webkitFullScreenEnabled||this.windowApi.document.mozFullScreenEnabled||this.windowApi.document.msFullScreenEnabled)}isJQuery(e){let t=!1;if(typeof jQuery==`object`&&e instanceof jQuery&&(t=!0),e==null)return!1;if(typeof e==`object`)for(let n of`add.addBack.addClass.after.ajaxComplete.ajaxError.ajaxSend.ajaxStart.ajaxStop.ajaxSuccess.animate.append.appendTo.attr.before.bind.blur.change.children.clearQueue.click.clone.closest.constructor.contents.contextmenu.css.data.dblclick.delay.delegate.dequeue.each.empty.end.eq.extend.fadeIn.fadeOut.fadeTo.fadeToggle.filter.find.first.focus.focusin.focusout.get.has.hasClass.height.hide.hover.html.index.init.innerHeight.innerWidth.insertAfter.insertBefore.is.jquery.keydown.keyup.last.load.map.mousedown.mouseenter.mouseleave.mousemove.mouseout.mouseover.mouseup.next.nextAll.not.off.offset.offsetParent.on.one.outerHeight.outerWidth.parent.parents.position.prepend.prependTo.prev.prevAll.prevUntil.promise.prop.pushStack.queue.ready.remove.removeAttr.removeClass.removeData.removeProp.replaceAll.replaceWith.resize.scroll.scrollLeft.scrollTop.select.show.siblings.slice.slideDown.slideToggle.slideUp.sort.splice.text.toArray.toggle.toggleClass.trigger.triggerHandler.unbind.width.wrap`.split(`.`))if(n in e)t=!0;else{t=!1;break}return t}isPhone(e=navigator.userAgent){return!!/(iPhone|iPad|iPod|iOS|Android|Mobile)/i.test(e)}isSameChars(e,t=1){if(typeof e!=`string`)throw TypeError(`参数 str 必须是 string 类型`);if(e.length<2)return!1;e=e.toLowerCase();let n={},r=0;for(let t of e)Reflect.has(n,t)?n[t]++:n[t]=1,r++;let i=!1;for(let e in n)if(n[e]/r>=t){i=!0;break}return i}isNotNull=I.isNotNull.bind(I);isNull=I.isNull.bind(I);isThemeDark(){return this.windowApi.globalThis.matchMedia(`(prefers-color-scheme: dark)`).matches}isVisible(e,t=!1){let n=[];e instanceof Array||e instanceof NodeList?(e=e,n=[...e]):n=[e];let r=!0;for(let e of n){if(this.windowApi.window.getComputedStyle(e).display===`none`)r=!1;else{let n=e.getBoundingClientRect();if(t){let e=this.windowApi.window.innerWidth||this.windowApi.document.documentElement.clientWidth,t=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight;r=!(n.right<0||n.left>e||n.bottom<0||n.top>t)}else r=!!e.getClientRects().length}if(!r)break}return r}isWebView_Via(){let e=!0,t=this;if(typeof this.windowApi.top.window.via==`object`){for(let n in Object.values(this.windowApi.top.window.via))if(Reflect.has(this.windowApi.top.window.via,n)){let r=this.windowApi.top.window.via[n];if(typeof r==`function`&&t.isNativeFunc(r))e=!0;else{e=!1;break}}}else e=!1;return e}isWebView_X(){let e=!0,t=this;if(typeof this.windowApi.top.window.mbrowser==`object`){for(let n in Object.values(this.windowApi.top.window.mbrowser))if(Reflect.has(this.windowApi.top.window.mbrowser,n)){let r=this.windowApi.top.window.mbrowser[n];if(typeof r==`function`&&t.isNativeFunc(r))e=!0;else{e=!1;break}}}else e=!1;return e}parseObjectToArray(e){if(typeof e!=`object`)throw Error(`Utils.parseObjectToArray 参数 target 必须为 object 类型`);let t=[];return Object.keys(e).forEach(function(n){let r=Reflect.get(e,n);t=t.concat(r)}),t}LockFunction=Cn;Log=wn;mergeArrayToString(e,t){if(!(e instanceof Array))throw Error(`Utils.mergeArrayToString 参数 data 必须为 Array 类型`);let n=``;return typeof t==`function`?e.forEach(e=>{n+=t(e)}):typeof t==`string`?e.forEach(e=>{n+=e[t]}):e.forEach(e=>{Object.values(e).filter(e=>typeof e==`string`).forEach(e=>{n+=e})}),n}mutationObserver(e,t){let n=this;t=n.assign({callback:()=>{},config:{subtree:void 0,childList:void 0,attributes:void 0,attributeFilter:void 0,attributeOldValue:void 0,characterData:void 0,characterDataOldValue:void 0},immediate:!1,once:!1},t);let r=this.windowApi.window.MutationObserver||this.windowApi.window.webkitMutationObserver||this.windowApi.window.MozMutationObserver,i=(e,n)=>{t.once&&n.disconnect(),typeof t.callback==`function`&&t.callback(e,n)},a=new r(function(e,t){i(e,t)});return Array.isArray(e)||e instanceof NodeList?e.forEach(e=>{a.observe(e,t.config)}):n.isJQuery(e)?e.each((e,n)=>{a.observe(n,t.config)}):a.observe(e,t.config),t.immediate&&i([],a),a}mutationVisible(e,t,n){if(typeof IntersectionObserver>`u`)throw TypeError(`IntersectionObserver is not defined`);if(e==null)throw TypeError(`mutatuinVisible target is null`);n||={};let r={root:null,rootMargin:`0px 0px 0px 0px`,threshold:[.01,.99]};r=this.assign(r,n);let i=(e,r)=>{n.once&&r.disconnect(),typeof t==`function`&&t(e,r)},a=new IntersectionObserver((e,t)=>{e[0].isIntersecting&&i(e,t)},r);return Array.isArray(e)?e.forEach(e=>{a.observe(e)}):a.observe(e),n.immediate&&i([],a),a}noConflict(){return this.windowApi.window.Utils&&Reflect.deleteProperty(this.windowApi.window,`Utils`),this.windowApi.window.Utils=Nn,Nn}noConflictFunc(e,t,n=[],r=!0){let i=this;if(typeof e!=`object`)throw Error(`Utils.noConflictFunc 参数 needReleaseObject 必须为 object 类型`);if(typeof t!=`string`)throw Error(`Utils.noConflictFunc 参数 needReleaseName 必须为 string 类型`);if(!Array.isArray(n))throw Error(`Utils.noConflictFunc 参数 functionNameList 必须为 Array 类型`);let a=`__${t}`;function o(){i.windowApi.window[a]===void 0&&(i.windowApi.window[a]=i.deepClone(e),Object.values(e).forEach(t=>{typeof t==`function`&&(e[t.name]=()=>{})}))}function s(){Array.from(n).forEach(t=>{Object.values(e).forEach(n=>{typeof n==`function`&&(i.windowApi.window[a]===void 0&&(i.windowApi.window[a]={}),t===n.name&&(i.windowApi.window[a][n.name]=e[n.name],e[n.name]=()=>{}))})})}function c(){i.windowApi.window[a]!==void 0&&(Object.assign(e,i.windowApi.window[a]),Reflect.deleteProperty(i.windowApi.window,`needReleaseKey`))}function l(){i.windowApi.window[a]!==void 0&&Array.from(n).forEach(t=>{i.windowApi.window[a][t]&&(e[t]=i.windowApi.window[a][t],Reflect.deleteProperty(i.windowApi.window[a],t),Object.keys(i.windowApi.window[a]).length===0&&Reflect.deleteProperty(window,a))})}r?n.length===0?o():s():n.length===0?c():l()}parseBase64ToBlob(e){if(typeof e!=`string`)throw Error(`Utils.parseBase64ToBlob 参数 dataUri 必须为 string 类型`);let t=e.split(`,`),n=t[0].match(/:(.*?);/)[1],r=atob(t[1]),i=r.length,a=new Uint8Array(i);for(;i--;)a[i]=r.charCodeAt(i);return new Blob([a],{type:n})}parseBase64ToFile(e,t=`example`){if(typeof e!=`string`)throw Error(`Utils.parseBase64ToFile 参数 dataUri 必须为 string 类型`);if(typeof t!=`string`)throw Error(`Utils.parseBase64ToFile 参数 fileName 必须为 string 类型`);let n=e.split(`,`),r=n[0].match(/:(.*?);/)[1],i=atob(n[1]),a=i.length,o=new Uint8Array(a);for(;a--;)o[a]=i.charCodeAt(a);return new File([o],t,{type:r})}parseInt(e=[],t=0){if(e==null)return parseInt(t.toString());let n=parseInt(e[e.length-1]);return isNaN(n)&&(n=parseInt(t.toString())),n}async parseBlobToFile(e,t=`example`){return new Promise((n,r)=>{fetch(e).then(e=>e.blob()).then(e=>{n(new File([e],t,{type:e.type}))}).catch(e=>{console.error(`Error:`,e),r(e)})})}parseCDATA(e=``){let t=``,n=/<!\[CDATA\[([\s\S]*)\]\]>/.exec(e.trim());return n&&n.length>1&&(t=n[n.length-1]),t}async parseFileToBase64(e){let t=new FileReader;return t.readAsDataURL(e),new Promise(e=>{t.onload=function(t){e(t.target.result)}})}parseFromString(e,t=`text/html`){return new DOMParser().parseFromString(e,t)}toRegExp(e,t=`gi`){let n;if(t=t.toLowerCase(),typeof e==`string`){let r=this.toRegExpStr(e);n=new RegExp(r,t)}else if(e instanceof RegExp)n=e;else throw Error(`Utils.toRegExp 参数text必须是string|Regexp类型`);return n}toRegExpStr(e){if(typeof e!=`string`)throw TypeError(`toRegExpStr 参数text必须是string类型`);return e.replace(/[.*+\-?^${}()|[\]\\]/g,`\\$&`)}Progress=En;hookEvent_isTrusted(e=!0,t){function n(t){return new Proxy(t,{get:function(t,n){return n===`isTrusted`?e:Reflect.get(t,n)}})}t??=function(e){return e===`click`};let r=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(...i){let a=i[0],o=i[1];if(t(a)){if(typeof o==`function`)i[1]=function(e){o.call(this,n(e))};else if(typeof o==`object`&&`handleEvent`in o){let t=o.handleEvent;i[1].handleEvent=function(r){if(r!=null)try{r instanceof Proxy,t.call(this,n(r))}catch{Reflect.set(r,`isTrusted`,e)}}}}return r.apply(this,i)}}reverseNumber(e){let t=0,n=!1;for(e<0&&(n=!0,e=Math.abs(e));e>0;)t=t*10+e%10,e=Math.floor(e/10);return n?-t:t}copy(e,t={type:`text`,mimetype:`text/plain`}){typeof e==`object`?e=e instanceof Element?e.outerHTML:JSON.stringify(e):typeof e!=`string`&&(e=e.toString());let n=typeof t==`object`?t.type:t;n=n.includes(`html`)?`text/html`:`text/plain`;let r=this;class i{#e;#t;#n;constructor(e,t,n){this.#e=e,this.#t=t,this.#n=n}async init(){let e=!1;if(await this.requestClipboardPermission(),this.hasClipboard()&&(this.hasClipboardWrite()||this.hasClipboardWriteText()))try{e=await this.copyDataByClipboard()}catch(t){console.error(`复制失败，使用第二种方式，error👉`,t),e=this.copyTextByTextArea()}else e=this.copyTextByTextArea();this.#e(e),this.destroy()}destroy(){this.#e=null,this.#t=null,this.#n=null}isText(){return this.#n.includes(`text`)}hasClipboard(){return navigator?.clipboard!=null}hasClipboardWrite(){return navigator?.clipboard?.write!=null}hasClipboardWriteText(){return navigator?.clipboard?.writeText!=null}copyTextByTextArea(){try{let e=r.windowApi.document.createElement(`textarea`);return e.value=this.#t,e.setAttribute(`type`,`text`),e.setAttribute(`style`,`opacity:0;position:absolute;`),e.setAttribute(`readonly`,`readonly`),r.windowApi.document.body.appendChild(e),e.select(),r.windowApi.document.execCommand(`copy`),r.windowApi.document.body.removeChild(e),!0}catch(e){return console.error(`复制失败，error👉`,e),!1}}requestClipboardPermission(){return new Promise(e=>{navigator.permissions&&navigator.permissions.query?navigator.permissions.query({name:`clipboard-write`}).then(()=>{e(!0)}).catch(t=>{console.error([`申请剪贴板权限失败，尝试直接写入👉`,t.message??t.name??t.stack]),e(!1)}):e(!1)})}copyDataByClipboard(){return new Promise((e,t)=>{if(this.isText())navigator.clipboard.writeText(this.#t).then(()=>{e(!0)}).catch(e=>{t(e)});else{let n=new Blob([this.#t],{type:this.#n});navigator.clipboard.write([new ClipboardItem({[this.#n]:n})]).then(()=>{e(!0)}).catch(e=>{t(e)})}})}}return new Promise(t=>{let a=new i(t,e,n);r.windowApi.document.hasFocus()?a.init():r.windowApi.window.addEventListener(`focus`,()=>{a.init()},{once:!0})})}async getClipboardInfo(){return new Promise(e=>{function t(){navigator.clipboard.readText().then(t=>{e({error:null,content:t})}).catch(t=>{e({error:t,content:``})})}function n(){navigator.permissions.query({name:`clipboard-read`}).then(()=>{t()}).catch(()=>{t()})}function r(){return typeof navigator?.clipboard?.readText==`function`&&typeof navigator?.permissions?.query==`function`}r()?document.hasFocus()?n():window.addEventListener(`focus`,()=>{n()},{once:!0}):e({error:Error(`当前环境不支持读取剪贴板Api`),content:``})})}setTimeout(e,t=0){if(typeof e!=`function`&&typeof e!=`string`)throw TypeError(`Utils.setTimeout 参数 callback 必须为 function|string 类型`);if(typeof t!=`number`)throw TypeError(`Utils.setTimeout 参数 delayTime 必须为 number 类型`);return new Promise(n=>{setTimeout(()=>{n(this.tryCatch().run(e))},t)})}sleep(e=0){if(typeof e!=`number`)throw Error(`Utils.sleep 参数 delayTime 必须为 number 类型`);return new Promise(t=>{setTimeout(()=>{t(void 0)},e)})}dragSlider(e,t=this.windowApi.window.innerWidth){let n=this;function r(e,t,r){let i=typeof unsafeWindow>`u`?globalThis:unsafeWindow,a=n.windowApi.document.createEvent(`MouseEvents`);return a.initMouseEvent(e,!0,!0,i,0,t,r,t,r,!1,!1,!1,!1,0,null),a}let i=typeof e==`string`?gn.selector(e):e;if(!(i instanceof Node)||!(i instanceof Element))throw Error(`Utils.dragSlider 参数selector 必须为Node/Element类型`);let a=i.getBoundingClientRect(),o=a.x||a.left,s=a.y||a.top,c=o+t,l=s;i.dispatchEvent(r(`mousedown`,o,s)),i.dispatchEvent(r(`mousemove`,c,l)),i.dispatchEvent(r(`mouseleave`,c,l)),i.dispatchEvent(r(`mouseout`,c,l))}enterFullScreen(e=this.windowApi.document.documentElement,t){try{if(e.requestFullscreen)e.requestFullscreen(t);else if(e.webkitRequestFullScreen)e.webkitRequestFullScreen();else if(e.mozRequestFullScreen)e.mozRequestFullScreen();else if(e.msRequestFullscreen)e.msRequestFullscreen();else throw TypeError(`该浏览器不支持全屏API`)}catch(e){console.error(e)}}exitFullScreen(e=this.windowApi.document.documentElement){return e.exitFullscreen?e.exitFullscreen():e.msExitFullscreen?e.msExitFullscreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.webkitCancelFullScreen?e.webkitCancelFullScreen():new Promise((e,t)=>{t(TypeError(`该浏览器不支持全屏API`))})}sortListByProperty(e,t,n=!0){let r=this;if(typeof t!=`function`&&typeof t!=`string`)throw Error(`Utils.sortListByProperty 参数 getPropertyValueFunc 必须为 function|string 类型`);if(typeof n!=`boolean`)throw Error(`Utils.sortListByProperty 参数 sortByDesc 必须为 boolean 类型`);let i=function(e){return typeof t==`string`?e[t]:t(e)},a=function(e,t){let r=i(t),a=i(e);return n?r<a?-1:+(r>a):r>a?-1:+(r<a)},o=function(e,t){let r=e.length;for(let a=0;a<r-1;a++)for(let o=0;o<r-1-a;o++){let r=e[o],a=e[o+1],s=i(r),c=i(a);if(n==1&&s<c||n==0&&s>c){let n=r.nextElementSibling;a.after(r),n==null?n.parentNode.appendChild(a):n.before(a),e=t()}}},s=e,c=null;if(e instanceof Function){c=e;let t=c();e=t,s=t}if(Array.isArray(e))e.sort(a);else if(e instanceof NodeList||r.isJQuery(e))o(e,c),s=c();else throw Error(`Utils.sortListByProperty 参数 data 必须为 Array|NodeList|jQuery 类型`);return s}stringTitleToUpperCase(e,t=!1){let n=e.slice(0,1).toUpperCase();return n+=t?e.slice(1).toLowerCase():e.slice(1),n}startsWith(e,t,n=0){let r=this;if(n>e.length)return!1;n!==0&&(e=e.slice(n,e.length));let i=t;if(typeof t==`string`)i=RegExp(`^${t}`);else if(Array.isArray(t)){let i=!1;for(let a of t)if(!r.startsWith(e,a,n)){i=!0;break}return i}return!!e.match(i)}firstLetterToLowercase(e,t=!1){let n=e.slice(0,1).toLowerCase();return n+=t?e.slice(1).toUpperCase():e.slice(1),n}toJSON=I.toJSON.bind(I);toSearchParamsStr(e,t){let n=this,r=``;return Array.isArray(e)?e.forEach(e=>{r+=r===``?n.toSearchParamsStr(e):`&${n.toSearchParamsStr(e)}`}):r=new URLSearchParams(Object.entries(e)).toString(),t&&!r.startsWith(`?`)&&(r=`?${r}`),r}searchParamStrToObj(e){let t={};return e==null||(e instanceof URLSearchParams?e:new URLSearchParams(e)).forEach((e,n)=>{Reflect.set(t,n,e)}),t}tryCatch=rn;uniqueArray(e=[],t,n=(e,t)=>e===t){if(typeof t==`function`){let n=t,r=new Set,i=[];for(let t of e){let e=n(t);r.has(e)||(r.add(e),i.push(t))}return i}{let r=new Set(t),i=[];for(let t=0;t<e.length;t++){let a=e[t],o=!1;for(let e of r)if(n(a,e)){o=!0;break}o||i.push(a)}return i}}waitArrayLoopToEnd(e,t){let n=this;if(typeof t!=`function`&&typeof t!=`string`)throw Error(`Utils.waitArrayLoopToEnd 参数 handleDataFunction 必须为 function|string 类型`);return Promise.all(Array.from(e).map(async(e,r)=>{await n.tryCatch(r,e).run(t)}))}waitProperty(e,t){return new Promise(n=>{let r=e;typeof e==`function`&&(r=e()),Reflect.has(r,t)?n(r[t]):Object.defineProperty(r,t,{set:function(e){try{n(e)}catch(e){console.error(`Error setting property:`,e)}}})})}waitPropertyByInterval(e,t,n=250,r=-1){if(e==null)throw TypeError(`checkObj 不能为空对象 `);let i=!1;return new Promise((a,o)=>{let s=setInterval(()=>{let n=e;typeof e==`function`&&(n=e()),typeof n==`object`&&n&&(typeof t==`function`&&t(n)||Reflect.has(n,t))&&(i=!0,clearInterval(s),a(n[t]))},n);r!==-1&&setTimeout(()=>{i||(clearInterval(s),o())},r)})}async waitVueByInterval(e,t,n=250,r=-1,i=`__vue__`){if(e==null)throw Error(`Utils.waitVueByInterval 参数element 不能为空`);let a=!1,o=this;try{await o.waitPropertyByInterval(e,function(e){if(e==null||!(i in e))return!1;if(t==null)return!0;let n=e[i];if(typeof t==`string`){if(t in n)return a=!0,!0}else if(t(n))return a=!0,!0;return!1},n,r)}catch{return a}return a}watchObject(e,t,n,r){(typeof n==`function`||typeof r==`function`)&&(typeof n==`function`?Object.defineProperty(e,t,{get(){return typeof n==`function`?n(e[t]):e[t]}}):typeof r==`function`?Object.defineProperty(e,t,{set(e){typeof r==`function`&&r(e)}}):Object.defineProperty(e,t,{get(){return typeof n==`function`?n(e[t]):e[t]},set(e){typeof r==`function`&&r(e)}}))}queryProperty(e,t){if(e==null)return;let n=t(e);return n&&typeof n.isFind==`boolean`&&n.isFind?n.data:this.queryProperty(n.data,t)}async asyncQueryProperty(e,t){if(e==null)return;let n=await t(e);return n&&typeof n.isFind==`boolean`&&n.isFind?n.data:await this.asyncQueryProperty(n.data,t)}createUtils(t){return new e(t)}toFormData(e,t=!1,n=!1){let r=new FormData;return Object.keys(e).forEach(i=>{let a=e[i];n&&(a=JSON.stringify(a)),typeof a==`number`&&(a=a.toString()),t&&typeof a==`string`&&(a=encodeURIComponent(a)),a instanceof File?r.append(i,a,a.name):r.append(i,a)}),r}toUrl(e){if(typeof e!=`string`)throw TypeError(`toUrl: text must be string`);if(e=e.trim(),e===``)throw TypeError(`toUrl: text must not be empty`);return e.startsWith(`//`)?e=this.windowApi.globalThis.location.protocol+e:e.startsWith(`/`)&&(e=this.windowApi.globalThis.location.origin+e),new URL(e)}coverObjectFunctionThis=I.coverObjectFunctionThis.bind(I);generateUUID=yn;Vue=Mn;ModuleRaid=Tn;workerSetTimeout(e,t=0){try{return $t(e,t)}catch{return this.windowApi.setTimeout(e,t)}}workerClearTimeout(e){try{e!=null&&Zt(e)}catch{this.windowApi.clearTimeout(e)}}workerSetInterval(e,t=0){try{return Qt(e,t)}catch{return this.windowApi.setInterval(e,t)}}workerClearInterval(e){try{e!=null&&Xt(e)}catch{this.windowApi.clearInterval(e)}}createFunction(...e){let t=e[e.length-1];if(typeof t==`boolean`?e.splice(e.length-1,1):t=!1,t){let t=Object.getPrototypeOf(async function(){}).constructor;return new t(...e)}{let t=Object.getPrototypeOf(function(){}).constructor;return new t(...e)}}hasWorkerCSP(e=1500){return new Promise(t=>{let n=!0,r,i,a,o=()=>{clearTimeout(r),i?.terminate(),typeof a==`string`&&(globalThis.URL.revokeObjectURL(a),a=void 0),t(n)};try{let t=new Blob([`
(() => {
    this.addEventListener(
    "message",
    function () {
        this.postMessage({
          success: true,
        });
    },
    {
        capture: true,
    }
    );
})();`],{type:`application/javascript`});a=globalThis.URL.createObjectURL(t),globalThis.trustedTypes&&typeof globalThis.trustedTypes.createPolicy==`function`&&(a=globalThis.trustedTypes.createPolicy(`workerPolicy`,{createScriptURL:e=>e}).createScriptURL(a)),i=new Worker(a),i.onmessage=e=>{e.data.success&&(n=!1,o())},r=setTimeout(()=>{o()},e),i.postMessage(`test`)}catch{n=!0,o()}finally{typeof a==`string`&&(globalThis.URL.revokeObjectURL(a),a=void 0)}})}calcPositionDistance(...e){let t={x:0,y:0},n={x:0,y:0};if(typeof e[0]==`object`&&e[0]!=null&&typeof e[1]==`object`&&e[1]!=null)t=e[0],n=e[1];else if(e.length===4)t={x:e[0],y:e[1]},n={x:e[2],y:e[3]};else throw Error(`Invalid arguments`);if(typeof t.x==`string`&&(t.x=Number(t.x)),isNaN(t.x))throw Error(`Invalid x: ${t.x}`);if(typeof t.y==`string`&&(t.y=Number(t.y)),isNaN(t.y))throw Error(`Invalid y: ${t.y}`);if(typeof n.x==`string`&&(n.x=Number(n.x)),isNaN(n.x))throw Error(`Invalid x: ${n.x}`);if(typeof n.y==`string`&&(n.y=Number(n.y)),isNaN(n.y))throw Error(`Invalid y: ${n.y}`);return Math.sqrt((n.x-t.x)**2+(n.y-t.y)**2)}isSame(e,t){if(Object.is(e,t))return!0;if(e==null||t==null||typeof e!=`object`||typeof t!=`object`)return!1;let n=Object.prototype.toString.call(e);if(n!==Object.prototype.toString.call(t))return!1;if(n===`[object Date]`)return e.getTime()===t.getTime();if(n===`[object RegExp]`)return e.source===t.source&&e.flags===t.flags;function r(e,t,n){if(e===t||n.get(e)===t)return!0;n.set(e,t);let a=Reflect.ownKeys(e),o=Reflect.ownKeys(t);if(a.length!==o.length)return!1;if(e instanceof Map){if(e.size!==t.size)return!1;for(let[i,a]of e)if(!t.has(i)||!r(a,t.get(i),n))return!1;return!0}if(e instanceof Set){if(e.size!==t.size)return!1;let i=[...t];for(let t of e){let e=i.findIndex(e=>r(e,t,new WeakMap(n)));if(e<0)return!1;i.splice(e,1)}return!0}for(let i of a)if(!o.includes(i)||!r(e[i],t[i],n))return!1;return i(e)===i(t)}function i(e){let t=new WeakSet;return JSON.stringify(e,function(e,n){if(e!==``&&n&&typeof n==`object`){if(t.has(n))return`[Circular]`;t.add(n)}if(n&&typeof n==`object`&&!Array.isArray(n)){let e={};for(let t of Object.keys(n).sort())e[t]=n[t];return e}return n})}return r(e,t,new WeakMap)}},Pn=typeof GM_addValueChangeListener<`u`?GM_addValueChangeListener:void 0,Fn=typeof GM_deleteValue<`u`?GM_deleteValue:void 0,In=typeof GM_download<`u`?GM_download:void 0,Ln=typeof GM_getResourceText<`u`?GM_getResourceText:void 0,Rn=typeof GM_getValue<`u`?GM_getValue:void 0,zn=typeof GM_info<`u`?GM_info:void 0,Bn=typeof GM_listValues<`u`?GM_listValues:void 0,Vn=typeof GM_registerMenuCommand<`u`?GM_registerMenuCommand:void 0,Hn=typeof GM_removeValueChangeListener<`u`?GM_removeValueChangeListener:void 0,Un=typeof GM_setValue<`u`?GM_setValue:void 0,Wn=typeof GM_setValues<`u`?GM_setValues:void 0,Gn=typeof GM_unregisterMenuCommand<`u`?GM_unregisterMenuCommand:void 0,Kn=typeof GM_xmlhttpRequest<`u`?GM_xmlhttpRequest:void 0,L=typeof unsafeWindow<`u`?unsafeWindow:void 0,qn=window;function Jn(){try{typeof Object.assign!=`function`&&(Object.assign=function(...e){let t=Object(e[0]||{});return e.length>1&&[...e].splice(1,e.length-1).forEach(e=>{for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}),t})}catch(e){console.warn(`Qmsg CompatibleProcessing Object.assign error`,e)}try{`classList`in document.documentElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){let e=this;function t(t){return function(n){let r=e.className.split(/\s+/g);t(r,r.indexOf(n),n),e.className=r.join(` `)}}return{add:t(function(e,t,n){~t||e.push(n)}),remove:t(function(e,t){~t&&e.splice(t,1)}),toggle:t(function(e,t,n){~t?e.splice(t,1):e.push(n)}),contains:function(t){return!!~e.className.split(/\s+/g).indexOf(t)},item:function(t){return e.className.split(/\s+/g)[t]||null}}}})}catch(e){console.warn(`Qmsg CompatibleProcessing HTMLElement.prototype.classList warning`,e)}}var Yn={INS_DEFAULT:{},get PLUGIN_NAME(){return`qmsg`},get NAMESPACE(){return`qmsg`},get config(){return{parent:null,useShadowRoot:!0,shadowRootMode:`open`,animation:!0,autoClose:!0,listenEventToPauseAutoClose:!0,listenEventToCloseInstance:!0,content:``,isHTML:!1,position:`top`,showClose:!1,maxNums:5,onClose:null,showIcon:!0,showReverse:!1,timeout:2500,type:`info`,zIndex:5e4,style:``,customClass:``,isLimitWidth:!1,limitWidthNum:200,limitWidthWrap:`no-wrap`,isTextWrap:!1,consoleLogContent:!1,afterRender:null}}},Xn=`
	<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
		<path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`,Zn={info:`
		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zm67.008 275.008q26.016 0 43.008-15.488t16.992-41.504-16.992-41.504-42.496-15.488-42.496 15.488-16.992 41.504 16.992 41.504 42.016 15.488zm12 360q0-6.016.992-16T592 664l-52.992 60.992q-8 8.992-16.512 14.016T508 742.016q-8.992-4-8-14.016l88-276.992q4.992-28-8.992-48t-44.992-24q-35.008.992-76.512 29.504t-72.512 72.512v15.008q-.992 10.016 0 19.008l52.992-60.992q8-8.992 16.512-14.016T468 437.024q10.016 4.992 7.008 16l-87.008 276q-7.008 24.992 7.008 44.512T444 800.032q50.016-.992 84-28.992t63.008-72z" fill="#909399"/>
		</svg>`,warning:`

		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64C264.64 64 64 264.64 64 512c0 247.424 200.64 448 448 448 247.488 0 448-200.576 448-448 0-247.36-200.512-448-448-448zm0 704c-26.432 0-48-21.504-48-48s21.568-48 48-48c26.624 0 48 21.504 48 48s-21.376 48-48 48zm48-240c0 26.56-21.376 48-48 48-26.432 0-48-21.44-48-48V304c0-26.56 21.568-48 48-48 26.624 0 48 21.44 48 48v224z" fill="#E6A23C"/>
		</svg>`,error:`

		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.57 448-448S759.42 64 512 64zm158.39 561.14a32 32 0 1 1-45.25 45.26L512 557.26 398.86 670.4a32 32 0 0 1-45.25-45.26L466.75 512 353.61 398.86a32 32 0 0 1 45.25-45.25L512 466.74l113.14-113.13a32 32 0 0 1 45.25 45.25L557.25 512z" fill="#F56C6C"/>
		</svg>`,success:`

		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zm-56 536l-99.008-99.008q-12-11.008-27.488-11.008t-27.008 11.488-11.488 26.496 11.008 27.008l127.008 127.008q11.008 11.008 27.008 11.008t27.008-11.008l263.008-263.008q15.008-15.008 9.504-36.512t-27.008-27.008-36.512 9.504z" fill="#67C23A"/>
		</svg>`,loading:`
		<svg class="animate-turn" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill="#fff" fill-opacity=".01" d="M0 0h48v48H0z"/>
			<path d="M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4" stroke="#409eff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M36 24c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12" stroke="#409eff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`},Qn={insInfoList:[],remove(e){let t=!1;for(let n=0;n<Qn.insInfoList.length;n++)if(Qn.insInfoList[n].uuid===e){Qn.insInfoList.splice(n,1),t=!0;break}return t}},$n={document,window,globalThis,self,setTimeout:globalThis.setTimeout.bind(globalThis),setInterval:globalThis.setInterval.bind(globalThis),clearTimeout:globalThis.clearTimeout.bind(globalThis),clearInterval:globalThis.clearInterval.bind(globalThis)},er=Object.assign({},$n),tr={init(e){e||=Object.assign({},$n),Object.assign(er,e)},get document(){return er.document},get window(){return er.window},get globalThis(){return er.globalThis},get self(){return er.self},get setTimeout(){return er.setTimeout},get setInterval(){return er.setInterval},get clearTimeout(){return er.clearTimeout},get clearInterval(){return er.clearInterval}},R={toStr(e){return JSON.stringify(e,(e,t)=>typeof t==`object`&&t&&t instanceof Node?String(t):t)},getNameSpacify(...e){return[Yn.NAMESPACE,...e].join(`-`)},isNumber(e){return/^\d+$/.test(e)},getUUID(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,function(e){let t=Math.random()*16|0;return(e==`x`?t:t&3|8).toString(16)})},mergeArgs(e=``,t){let n={};if(arguments.length===0)return n;if(t!=null){if(n.content=e,typeof t==`object`&&t)return Object.assign(n,t)}else if(typeof e==`object`&&e)return Object.assign(n,e);else n.content=e;return n},toDynamicObject(e,...t){let n=Object.assign({},e??{});return Object.keys(n).forEach(e=>{let r=n[e];Object.defineProperty(n,e,{get(){let n=t.findIndex(t=>typeof t==`object`&&!!t&&t.hasOwnProperty.call(t,e));return n===-1?r:t[n][e]},set(e){r=e}})}),n},setTimeout(e,t){return tr.setTimeout(e,t)},clearTimeout(e){e!=null&&tr.clearTimeout(e)},setInterval(e,t){tr.setInterval(e,t)},clearInterval(e){e!=null&&tr.clearInterval(e)},setSafeHTML(e,t){e.innerHTML=globalThis.trustedTypes&&typeof globalThis.trustedTypes.createPolicy==`function`?globalThis.trustedTypes.createPolicy(`safe-innerHTML`,{createHTML:e=>e}).createHTML(t):t}},nr={$state:{opening:`MessageMoveIn`,done:``,closing:`MessageMoveOut`},$name:{startNameList:[`animationName`,`WebkitAnimationName`,`MozAnimationName`,`msAnimationName`,`OAnimationName`],endNameList:[`animationend`,`webkitAnimationEnd`,`mozAnimationEnd`,`MSAnimationEnd`,`oanimationend`]},__CAN_ANIMATION__:void 0,get CAN_ANIMATION(){return this.__CAN_ANIMATION__=this.__CAN_ANIMATION__??this.getStyleAnimationNameValue(document.createElement(`div`))!=null,this.__CAN_ANIMATION__},getStyleAnimationNameValue(e){for(let t=0;t<this.$name.startNameList.length;t++){let n=this.$name.startNameList[t],r=e.style[n];if(r!=null)return r}},setStyleAnimationName(e,t=``){this.$name.startNameList.forEach(n=>{n in e.style&&(e.style[n]=t)})}},rr={css:`
    @charset "utf-8";
.qmsg.qmsg-wrapper {
  position: fixed;
  top: 16px;
  left: 0;
  z-index: 50000;
  display: flex;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  color: rgba(0, 0, 0, 0.55);
  list-style: none;
  font-variant: tabular-nums;
  font-size: 13px;
  line-height: 1;
  font-feature-settings: "tnum";
  pointer-events: none;
  flex-direction: column;
}
.qmsg.qmsg-data-position-center,
.qmsg.qmsg-data-position-left,
.qmsg.qmsg-data-position-right {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.qmsg.qmsg-data-position-bottom,
.qmsg.qmsg-data-position-bottomleft,
.qmsg.qmsg-data-position-bottomright {
  position: fixed;
  top: unset;
  bottom: 0;
  bottom: 8px;
  left: 50%;
  transform: translate(-50%, 0);
}
.qmsg.qmsg-data-position-bottomleft .qmsg-item,
.qmsg.qmsg-data-position-left .qmsg-item,
.qmsg.qmsg-data-position-topleft .qmsg-item {
  text-align: left;
}
.qmsg.qmsg-data-position-bottom .qmsg-item,
.qmsg.qmsg-data-position-center .qmsg-item,
.qmsg.qmsg-data-position-top .qmsg-item {
  text-align: center;
}
.qmsg.qmsg-data-position-bottomright .qmsg-item,
.qmsg.qmsg-data-position-right .qmsg-item,
.qmsg.qmsg-data-position-topright .qmsg-item {
  text-align: right;
}
.qmsg .qmsg-item {
  position: relative;
  padding: 8px;
  text-align: center;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
}
.qmsg .qmsg-item .qmsg-count {
  position: absolute;
  top: -4px;
  left: -4px;
  display: inline-block;
  height: 16px;
  min-width: 16px;
  border-radius: 2px;
  background-color: red;
  color: #fff;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
}
.qmsg .qmsg-item:first-child {
  margin-top: -8px;
}
.qmsg .qmsg-content-wrapper {
  position: relative;
  display: inline-block;
  padding: 10px 12px;
  max-width: 80%;
  min-width: 40px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  pointer-events: all;
}
.qmsg .qmsg-content-wrapper .qmsg-content-text[data-limitWidthWrap="no-wrap"] {
  white-space: nowrap;
}
.qmsg .qmsg-content-wrapper .qmsg-content-text[data-limitWidthWrap="ellipsis"] {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.qmsg .qmsg-content-wrapper .qmsg-content-text[data-limitWidthWrap="wrap"] {
  white-space: normal;
}
.qmsg .qmsg-content-wrapper .qmsg-content-text[data-overflowWrap] {
  white-space: unset;
  overflow-wrap: anywhere;
}
.qmsg .qmsg-content-wrapper [class^="qmsg-content-"]:not(.qmsg-content-text) {
  display: flex;
  align-items: center;
}
.qmsg .qmsg-icon {
  position: relative;
  top: 0;
  display: inline-block;
  margin-right: 8px;
  color: inherit;
  vertical-align: -0.125em;
  text-align: center;
  text-transform: none;
  font-style: normal;
  font-size: 16px;
  line-height: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.qmsg .qmsg-icon svg {
  display: inline-block;
}
.qmsg .qmsg-content-info .qmsg-icon {
  color: #1890ff;
}
.qmsg .qmsg-icon-close {
  margin: 0;
  margin-left: 8px;
  padding: 0;
  outline: 0;
  border: none;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  cursor: pointer;
  transition: color 0.3s;
}
.qmsg .qmsg-icon-close:hover > svg path {
  stroke: #555;
}
.qmsg .animate-turn {
  animation: MessageTurn 1s linear infinite;
  -webkit-animation: MessageTurn 1s linear infinite;
}


    @keyframes MessageTurn {
  0% {
    -webkit-transform: rotate(0);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes MessageTurn {
  0% {
    -webkit-transform: rotate(0);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes MessageMoveOut {
  0% {
    max-height: 150px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
}
@keyframes MessageMoveOut {
  0% {
    max-height: 150px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
}
@-webkit-keyframes MessageMoveIn {
  0% {
    opacity: 0;
    transform: translateY(-100%);
    transform-origin: 0 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    transform-origin: 0 0;
  }
}
@keyframes MessageMoveIn {
  0% {
    opacity: 0;
    transform: translateY(-100%);
    transform-origin: 0 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    transform-origin: 0 0;
  }
}
@-webkit-keyframes MessageShake {
  0%,
  100% {
    opacity: 1;
    transform: translateX(0);
  }
  25%,
  75% {
    opacity: 0.75;
    transform: translateX(-4px);
  }
  50% {
    opacity: 0.25;
    transform: translateX(4px);
  }
}
@keyframes MessageShake {
  0%,
  100% {
    opacity: 1;
    transform: translateX(0);
  }
  25%,
  75% {
    opacity: 0.75;
    transform: translateX(-4px);
  }
  50% {
    opacity: 0.25;
    transform: translateX(4px);
  }
}

  `,getStyleElement(){let e=document.createElement(`style`);return e.setAttribute(`type`,`text/css`),e.setAttribute(`data-type`,Yn.PLUGIN_NAME),R.setSafeHTML(e,rr.css),e}},ir=class{timeId=void 0;startTime;endTime;setting;settingStr;settingJSON;uuid;state;repeatNum;$el={$item:null,get $content(){let e=this.$item.querySelector(`[class^="qmsg-content-"] .qmsg-content-text`);if(!e)throw TypeError(`QmsgInst $content is null`);return e}};constructor(e,t){this.timeId=void 0,this.startTime=Date.now(),this.endTime=null,this.setting=R.toDynamicObject(Yn.config,e,Yn.INS_DEFAULT),this.settingStr=R.toStr(this.setting),this.settingJSON=Object.assign({},this.setting),this.uuid=t,this.state=`opening`,this.$el.$item=document.createElement(`div`),this.repeatNum=1,this.detectionType(),this.initEl(),(typeof this.setting.consoleLogContent==`function`?this.setting.consoleLogContent(this):this.setting.consoleLogContent)&&console.log(this.setting.content),Reflect.set(this.$el.$item,`data-inst`,this),typeof this.setting.afterRender==`function`&&this.setting.afterRender(this)}initEl(){let e=this;this.setting.customClass&&typeof this.setting.customClass==`string`&&this.$el.$item.classList.add(this.setting.customClass);let t=Zn[this.setting.type||`info`],n=R.getNameSpacify(`content-`+this.setting.type||`info`);this.setting.showClose&&(n+=` `+R.getNameSpacify(`content-with-close`));let r=this.setting.content||``,i=Xn,a=``;this.setting.showClose&&(a=`<i class="qmsg-icon qmsg-icon-close">${i}</i>`);let o=document.createElement(`span`);o.className=`qmsg-content-text`;let s=R.getNameSpacify(`data-position`,this.setting.position.toLowerCase());if(this.setting.isHTML?R.setSafeHTML(o,r):o.innerText=r,this.setting.isLimitWidth){let e=this.setting.limitWidthNum;typeof e==`string`?R.isNumber(e)&&(e+=`px`):e=e.toString()+`px`,o.style.maxWidth=e,o.setAttribute(`data-limitWidthWrap`,this.setting.limitWidthWrap)}else o.setAttribute(`data-limitWidthWrap`,`no-wrap`);this.setting.isTextWrap?o.setAttribute(`data-overflowWrap`,`true`):o.removeAttribute(`data-overflowWrap`),R.setSafeHTML(this.$el.$item,`
			<div class="qmsg-content-wrapper">
				<div class="${n}">
				${this.setting.showIcon?`<i class="qmsg-icon">${t}</i>`:``}
					${o.outerHTML}
					${a}
				</div>
			</div>
			`);let c=this.$el.$item.querySelector(`.qmsg-content-wrapper`);this.$el.$item.classList.add(R.getNameSpacify(`item`)),this.$el.$item.setAttribute(R.getNameSpacify(`uuid`),this.uuid);let l=null,u,d;if(this.setting.parent instanceof Element){for(let e of Array.from(this.setting.parent.childNodes))if(e instanceof HTMLElement&&e.matches(`.qmsg-shadow-container`)){l=e;break}}else l=document.querySelector(`.qmsg-shadow-container`);if(l)u=this.setting.useShadowRoot?l?.shadowRoot:l;else{let e=this.setting.parent??document.body??document.documentElement;if(l=document.createElement(`div`),l.className=`qmsg-shadow-container`,u=this.setting.useShadowRoot?l.attachShadow({mode:this.setting.shadowRootMode}):l,u.appendChild(rr.getStyleElement()),this.setting.style!=null){let e=document.createElement(`style`);e.setAttribute(`type`,`text/css`),e.setAttribute(`data-id`,this.uuid),R.setSafeHTML(e,this.setting.style),c.insertAdjacentElement(`afterend`,e)}e.appendChild(l)}if(u==null)throw TypeError(`QmsgInst `+Yn.PLUGIN_NAME+` $shadowRoot is null`);d=u.querySelector(`.${Yn.NAMESPACE}.${R.getNameSpacify(`wrapper`)}.${s}`),d||(d=document.createElement(`div`),d.classList.add(Yn.NAMESPACE,R.getNameSpacify(`wrapper`),R.getNameSpacify(`is-initialized`),s),u.appendChild(d)),this.setting.showReverse?d.style.flexDirection=`column-reverse`:d.style.flexDirection=`column`;let f=this.setting.zIndex;if(typeof f==`function`&&(f=f()),isNaN(f)||(d.style.zIndex=f.toString()),d.appendChild(this.$el.$item),this.setState(this.$el.$item,`opening`),this.setting.showClose){let t=this.$el.$item.querySelector(`.qmsg-icon-close`);t&&t.addEventListener(`click`,()=>{e.close()})}let p=()=>{nr.getStyleAnimationNameValue(e.$el.$item)===nr.$state.closing&&(e.endTime=Date.now(),e.destroy()),nr.setStyleAnimationName(this.$el.$item)};if(nr.$name.endNameList.forEach(function(t){e.$el.$item.addEventListener(t,p)}),this.setting.autoClose&&this.setting.listenEventToPauseAutoClose){this.resetAutoCloseTimer();let e=()=>{this.clearAutoCloseTimer()},t=()=>{this.timeId==null?this.startAutoCloseTimer():console.warn(`QmsgInst timeId is not null，mouseenter may be not first trigger，timeId：`+this.timeId)},n=!1;this.$el.$item.addEventListener(`mouseenter`,e),this.$el.$item.addEventListener(`mouseleave`,t),this.$el.$item.addEventListener(`touchstart`,()=>{n||(n=!0,this.$el.$item.removeEventListener(`mouseenter`,e),this.$el.$item.removeEventListener(`mouseleave`,t)),e()},{passive:!0}),this.$el.$item.addEventListener(`touchend`,t),this.$el.$item.addEventListener(`touchcancel`,t)}}detectionType(){this.setting.timeout!=null&&typeof this.setting.timeout==`string`&&(this.setting.timeout=parseInt(this.setting.timeout)),isNaN(this.setting.timeout)&&(this.setting.timeout=Yn.config.timeout),this.setting.timeout!=null&&parseInt(this.setting.timeout.toString())>=0&&parseInt(this.setting.timeout.toString())<=Number.MAX_VALUE||(this.setting.timeout=Yn.config.timeout),typeof this.setting.zIndex==`function`&&(this.setting.zIndex=this.setting.zIndex()),this.setting.zIndex!=null&&typeof this.setting.zIndex==`string`&&(this.setting.zIndex=parseInt(this.setting.zIndex)),isNaN(this.setting.zIndex)&&(this.setting.zIndex=typeof Yn.config.zIndex==`function`?Yn.config.zIndex():Yn.config.zIndex)}setState(e,t){t&&nr.$state[t]&&(this.state=t,nr.setStyleAnimationName(e,nr.$state[t]))}setRepeatNumIncreasing(){this.repeatNum++}setMsgCount(){let e=R.getNameSpacify(`count`),t=this.$el.$item.querySelector(`.${Yn.NAMESPACE}.${R.getNameSpacify(`wrapper`)} [class^="qmsg-content-"]`);if(!t)throw TypeError(`QmsgInst $content is null`);let n=t.querySelector(`.`+e);n||(n=document.createElement(`span`),n.classList.add(e),t.appendChild(n));let r=this.repeatNum;R.setSafeHTML(n,r.toString()),nr.setStyleAnimationName(n),nr.setStyleAnimationName(n,`MessageShake`),this.resetAutoCloseTimer()}clearAutoCloseTimer(){R.clearTimeout(this.timeId),this.timeId=void 0,this.startTime=null,this.endTime=null}startAutoCloseTimer(){this.setting.autoClose&&this.setting.listenEventToPauseAutoClose&&(this.startTime=Date.now(),this.endTime=null,this.timeId=R.setTimeout(()=>{this.close()},this.setting.timeout))}resetAutoCloseTimer(){this.clearAutoCloseTimer(),this.startAutoCloseTimer()}close(){this.setState(this.$el.$item,`closing`),nr.CAN_ANIMATION?Qn.remove(this.uuid):this.destroy();let e=this.setting.onClose;e&&typeof e==`function`&&e.call(this)}destroy(){this.endTime=Date.now(),this.$el.$item.remove(),R.clearTimeout(this.timeId),Qn.remove(this.uuid),this.timeId=void 0}setText(e){let t=this.$el.$content;t.innerText=e,this.setting.content=e}setHTML(e){let t=this.$el.$content;R.setSafeHTML(t,e),this.setting.content=e}};function ar(e={}){let t=R.toStr(e),n=R.toDynamicObject(Yn.config,e,Yn.INS_DEFAULT),r=R.toStr(n),i=Qn.insInfoList.find(e=>e.configStr===t&&e.inst.settingStr===r),a=i?.inst;if(a==null){let e=R.getUUID(),r={uuid:e,configStr:t,inst:new ir(n,e)};Qn.insInfoList.push(r);let o=Qn.insInfoList.length,s=r.inst.setting.maxNums;if(o>s)for(let e=0;e<o-s;e++){let t=Qn.insInfoList[e];t&&t.inst.setting.autoClose&&t.inst.close()}i=r,a=r.inst}else a.repeatNum?a.repeatNum>=99||a.setRepeatNumIncreasing():a.repeatNum=2,a.setMsgCount();if(a)a.$el.$item.setAttribute(`data-count`,a?.repeatNum.toString());else throw Error(`QmsgInst is null`);return a}var or={visibilitychange:{eventConfig:{callback(){if(document.visibilityState===`visible`)for(let e=0;e<Qn.insInfoList.length;e++){let t=Qn.insInfoList[e].inst,n=t.setting,r=Date.now();n.type!==`loading`&&n.autoClose&&typeof t.endTime!=`number`&&typeof t.startTime==`number`&&typeof n.timeout==`number`&&r-t.startTime>=n.timeout&&t.close()}},option:{capture:!0}},addEvent(){`visibilityState`in document?document.addEventListener(`visibilitychange`,or.visibilitychange.eventConfig.callback,or.visibilitychange.eventConfig.option):console.error(`Qmsg addEvent visibilityState not support`)},removeEvent(){document.removeEventListener(`visibilitychange`,or.visibilitychange.eventConfig.callback,or.visibilitychange.eventConfig.option)}}},sr=`1.7.4`;Jn();var z=new class{$data;$eventUtils;constructor(e){this.$data={version:sr,config:Yn,icon:Zn,instanceStorage:Qn},this.$eventUtils=or,this.$eventUtils.visibilitychange.addEvent(),this.config(e)}config(e){let t=Yn;if(typeof e!=`object`||!e)return t.INS_DEFAULT;for(let n in e){if(!Object.hasOwn(e,n))continue;let r=Object.getOwnPropertyDescriptor(e,n);if(r){if(`get`in r)Reflect.deleteProperty(t.INS_DEFAULT,n),Object.defineProperty(t.INS_DEFAULT,n,{get:r.get,configurable:!0,enumerable:!0});else if(`value`in r)Reflect.deleteProperty(t.INS_DEFAULT,n),Object.defineProperty(t.INS_DEFAULT,n,{get:()=>r.value,configurable:!0,enumerable:!0});else throw TypeError(`Qmsg.config: descriptor.get or descriptor.value is null`)}else Reflect.set(t.INS_DEFAULT,n,e[n])}return t.INS_DEFAULT}info(e,t){let n=R.mergeArgs(e,t);return n.type=`info`,ar.call(this,n)}warning(e,t){let n=R.mergeArgs(e,t);return n.type=`warning`,ar.call(this,n)}success(e,t){let n=R.mergeArgs(e,t);return n.type=`success`,ar.call(this,n)}error(e,t){let n=R.mergeArgs(e,t);return n.type=`error`,ar.call(this,n)}loading(e,t){let n=R.mergeArgs(e,t);return n.type=`loading`,n.autoClose=!1,ar.call(this,n)}remove(e){Qn.remove(e)}closeAll(){for(let e=Qn.insInfoList.length-1;e>=0;e--){let t=Qn.insInfoList[e];t&&t.inst&&t.inst.close()}}},cr={waitRemove(...e){e.forEach(e=>{typeof e==`string`&&p.waitNodeList(e).then(e=>{e.forEach(e=>e.remove())})})},createBlockCSSNode(...e){let t=[];if(e.length!==0&&(e.length!==1||typeof e[0]!=`string`||e[0].trim()!==``))return e.forEach(e=>{Array.isArray(e)?t=t.concat(e):t.push(e)}),p.createElement(`style`,{type:`text/css`,innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&(e.length!==1||typeof e[0]!=`string`||e[0].trim()!==``)&&(e.forEach(e=>{Array.isArray(e)?t=t.concat(e):t.push(e)}),t=t.map(e=>e.trim()).filter(e=>e!==``),t.length))return K(`${t.join(`,
`)}{display: none !important;}`)},addBlockCSSWithEnd(...e){let t=cr.addBlockCSS(...e);return t&&document.documentElement.appendChild(t),t},setGMResourceCSS(e){let t=typeof Ln==`function`?Ln(e.keyName):null;return typeof t==`string`&&t?K(t):cr.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement(`link`);return t.rel=`stylesheet`,t.type=`text/css`,t.href=e,new Promise(e=>{p.onReady(()=>{document.head.appendChild(t),e(t)})})},async loadScript(e){let t=document.createElement(`script`);return t.src=e,new Promise(e=>{t.onload=()=>{e(null)},(document.head||document.documentElement).appendChild(t)})},fixUrl(e){return e=e.trim(),e.startsWith(`data:`)||e.match(/^http(s|):\/\//i)?e:e.startsWith(`//`)?(e.startsWith(`///`)||(e=window.location.protocol+e),e):(e.startsWith(`/`)||(e+=`/`),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith(`https://`)||!e.startsWith(`http://`))return e;try{let t=new URL(e);return t.protocol=`https:`,t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement(`style`);t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(e=>{e.classList.add(`pops-overflow-hidden-important`)}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(e=>{e.classList.remove(`pops-overflow-hidden-important`)}),t.remove()}}},async getClipboardText(){function e(e){navigator.clipboard.readText().then(t=>{e(t)}).catch(t=>{G.error(`读取剪贴板内容失败👉`,t),e(``)})}function t(t){navigator.permissions.query({name:`clipboard-read`}).then(()=>{e(t)}).catch(n=>{G.error(`申请剪贴板权限失败，尝试直接读取👉`,n.message??n.name??n.stack),e(t)})}function n(){return typeof navigator?.clipboard?.readText==`function`&&typeof navigator?.permissions?.query==`function`}return new Promise(e=>{n()?document.hasFocus()?t(e):window.addEventListener(`focus`,()=>{t(e)},{once:!0}):e(``)})},escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`).replace(/©/g,`&copy;`).replace(/®/g,`&reg;`).replace(/™/g,`&trade;`).replace(/→/g,`&rarr;`).replace(/←/g,`&larr;`).replace(/↑/g,`&uarr;`).replace(/↓/g,`&darr;`).replace(/—/g,`&mdash;`).replace(/–/g,`&ndash;`).replace(/…/g,`&hellip;`).replace(/ /g,`&nbsp;`).replace(/\r\n/g,`<br>`).replace(/\r/g,`<br>`).replace(/\n/g,`<br>`).replace(/\t/g,`&nbsp;&nbsp;&nbsp;&nbsp;`)},interval(e,t,n=5e3){let r,i=n-t,a=t,o=async n=>{let s=await e(n);typeof s==`boolean`&&s||n?H.workerClearTimeout(r):(a+=t,a>i?o(!0):r=H.workerSetTimeout(()=>{o(!1)},t))};o(!1)},findParentNode(e,t,n){if(n){let r=p.closest(e,n);if(r)return r.querySelector(t)}else return p.matches(e,t)?e:p.closest(e,t)},toStr(e,t=2){if(typeof e==`string`||e==null)return e;let n=`__undefined__placeholder__replaced__str__`+performance.now();return JSON.stringify(e,(e,t)=>t===void 0?n:t,t).replace(RegExp(`"${n}"`,`g`),`undefined`)},isVerticalScreen(){return!globalThis.screen.orientation.type.includes(`landscape`)},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){let e=typeof L==`object`&&L?L:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!=`number`&&(e=parseInt(e)),isNaN(e))return e.toString();let t=function(e){return e<10?`0${e}`:e};if(e<60)return`0:${t(e)}`;if(e>=60&&e<3600)return`${Math.floor(e/60)}:${t(e%60)}`;{let n=Math.floor(e/3600),r=Math.floor(e/60)%60,i=e%60;return`${n}:${t(r)}:${t(i)}`}},formatTimeStamp(e,t){if(typeof e==`number`&&e<0xe8d4a51000){let t=String(Date.now()).length-String(e).length;e*=10**t}let n=e,r=new Date(typeof e==`string`?e.replace(/-/g,`/`):e),i=new Date(t??Date.now()).getTime()-r.getTime(),a=Math.floor(i/864e5);if(a>0)n=a>7?H.formatTime(r.getTime()):a+`天前`;else{let e=i%864e5,t=Math.floor(e/36e5);if(t>0)n=t+`小时前`;else{let t=e%36e5,r=Math.floor(t/6e4);if(r>0)n=r+`分钟前`;else{let e=t%6e4;n=Math.round(e/1e3)+`秒前`}}}return n}},lr=`GM_Panel`,ur=`data-init`,dr=`data-key`,fr=`data-default-value`,pr=`data-init-more-value`,mr=`data-plugin-search-config`,B=`data-storage-api`,hr={followBrowserSize:!1,get width(){return hr.followBrowserSize?globalThis.outerWidth:globalThis.innerWidth},get height(){return hr.followBrowserSize?globalThis.outerHeight:globalThis.innerHeight}},gr={setting:{get width(){return hr.width<550?`88vw`:hr.width<700?`550px`:`700px`},get height(){return hr.height<450?`70vh`:hr.height<550?`450px`:`550px`}},settingMiddle:{get width(){return hr.width<350?`88vw`:`350px`},get height(){return hr.height<450?`88vh`:`450px`}},settingBig:{get width(){return hr.width<800?`92vw`:`800px`},get height(){return hr.height<600?`80vh`:`600px`}},info:{get width(){return hr.width<350?`88vw`:`350px`},get height(){return hr.height<250?`88vh`:`250px`}}},_r={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig??=new H.Dictionary,this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){let t=typeof e==`function`?e:()=>e,n=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(n,t)},getAllContentConfig(){return this.$data.contentConfig.values().map(e=>typeof e==`function`?e():e).flat()},getConfig(e=0){let t=(this.$data.contentConfig.get(e)??(()=>[]))();return Array.isArray(t)?t:[t]},getDefaultBottomContentConfig(e){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=!1,n,r=(t,n)=>{if(e&&typeof e.translateCallback==`function`)return e.translateCallback(t,n);if(typeof n==`object`&&n)for(let e in n)t=t.replaceAll(`{{${e}}}`,n[e]);return t},i=(e,t)=>{typeof t!=`string`&&(t=cr.toStr(t));let n=new Blob([t]),r=globalThis.URL.createObjectURL(n);U.createElement(`a`,{href:r,download:e}).click(),H.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(r)},500)},a=()=>{let e=e=>{let t=W.alert({title:{text:r(`请选择导入方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="local">${r(`本地导入`)}</div>
            <div class="btn-control" data-mode="network">${r(`网络导入`)}</div>
            <div class="btn-control" data-mode="clipboard">${r(`剪贴板导入`)}</div>`,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:gr.info.width,height:gr.info.height,style:`
          .pops{
            max-height: 90dvh;
          }
          .btn-control{
            display: inline-block;
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`}),n=t.$shadowRoot.querySelector(`.btn-control[data-mode='local']`),i=t.$shadowRoot.querySelector(`.btn-control[data-mode='network']`),a=t.$shadowRoot.querySelector(`.btn-control[data-mode='clipboard']`),o=async t=>{confirm(r(`是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）`))&&(typeof Bn==`function`?typeof Fn==`function`?(Bn().forEach(e=>{Fn(e)}),z.success(r(`已清空脚本存储的配置`))):z.error(r(`不支持GM_deleteValue函数，无法执行删除脚本配置`)):z.error(r(`不支持GM_listValues函数，无法清空脚本存储的配置`))),typeof Wn==`function`?Wn(t):Object.keys(t).forEach(e=>{let n=t[e];Un(e,n)}),z.success(r(`配置导入完毕`)),e?.()},s=e=>new Promise(async t=>{let n=H.toJSON(e);Object.keys(n).length===0?z.warning(r(`解析为空配置，不导入`)):await o(n),t(!0)});U.on(n,`click`,e=>{U.preventEvent(e),t.close();let n=U.createElement(`input`,{type:`file`,accept:`.json`});U.on(n,[`propertychange`,`input`],()=>{if(!n.files?.length)return;let e=n.files[0],t=new FileReader;t.onload=()=>{s(t.result)},t.readAsText(e,`UTF-8`)}),n.click()}),U.on(i,`click`,e=>{U.preventEvent(e),t.close();let n=W.prompt({title:{text:r(`网络导入`),position:`center`},content:{text:``,placeholder:r(`请填写URL`),focus:!0},btn:{close:{enable:!0,callback(e){e.close()}},ok:{text:r(`导入`),callback:async e=>{let t=e.text;if(H.isNull(t)){z.error(r(`请填入完整的url`));return}let n=z.loading(r(`正在获取配置...`)),i=await Er.get(t,{allowInterceptConfig:!1});n.close(),i.status?await s(i.data.responseText)&&e.close():(G.error(i),z.error(r(`获取配置失败`),{consoleLogContent:!0}))}},cancel:{enable:!1}},drag:!0,mask:{enable:!0},width:gr.info.width,height:`auto`,style:`
            .pops{
              max-height: 90dvh;
            }
            `}),i=n.$shadowRoot.querySelector(`input`),a=n.$shadowRoot.querySelector(`.pops-prompt-btn-ok`);U.on(i,[`input`,`propertychange`],()=>{U.val(i)===``?U.attr(a,`disabled`,`true`):U.removeAttr(a,`disabled`)}),U.onKeyboard(i,`keydown`,(e,t,n)=>{e===`Enter`&&n.length===0&&U.val(i)!==``&&U.emit(a,`click`)}),U.emit(i,`input`)}),U.on(a,`click`,async e=>{U.preventEvent(e),t.close();let n=await cr.getClipboardText();n.trim()===``?z.warning(r(`获取到的剪贴板内容为空`)):await s(n)})},t=(e=`${Sr}_panel-setting-${H.formatTime(Date.now(),`yyyy_MM_dd_HH_mm_ss`)}.json`,t)=>{let n=W.alert({title:{text:r(`请选择导出方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${r(`导出至文件`)}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${r(`导出至剪贴板`)}</div>
            `,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:gr.info.width,height:gr.info.height,style:`
          .pops{
            max-height: 90dvh;
          }
          .btn-control{
            display: inline-block;
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`}),a=n.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-file']`),o=n.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-clipboard']`);U.on(a,`click`,r=>{U.preventEvent(r);try{i(e,t),n.close()}catch(e){z.error(e.toString(),{consoleLogContent:!0})}}),U.on(o,`click`,async()=>{await H.copy(t)?(z.success(r(`复制成功`)),n.close()):z.error(r(`复制失败`))})},n=W.confirm({title:{text:r(`配置`),position:`center`},content:{text:`<textarea name="config-value" id="config" readonly></textarea>`,html:!0},btn:{ok:{enable:!0,type:`primary`,text:r(`导入`),callback(){e()}},cancel:{enable:!0,text:r(`导出`),callback(){t(void 0,o)}}},width:hr.width<450?`90vw`:`450px`,height:`auto`,style:`
          .pops{
            max-height: 90dvh;
          }
          .pops-content textarea {
            --textarea-bd-color: #dcdfe6;
            display: inline-block;
            resize: vertical;
            padding: 5px 15px;
            margin: 0;
            line-height: normal;
            box-sizing: border-box;
            color: #606266;
            border: 0;
            border-radius: 0;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: none;
            width: 100%;
            height: 100%;
            appearance: none;
            resize: none;
          }
          .pops-content textarea{
            height: 500px;
          }
          .pops-content textarea:focus {
            --textarea-bd-color: #3677f0;
          }
          .pops-content textarea:hover {
            --textarea-bd-color: #c0c4cc;
          }
        `}).$shadowRoot.querySelector(`textarea`),a={};if(typeof Bn==`function`)Bn().forEach(e=>{let t=Rn(e);Reflect.set(a,e,t)});else{z.warning(r(`不支持函数GM_listValues，仅导出菜单配置`));let e=Rn(lr);Reflect.set(a,lr,e)}let o=cr.toStr(a);n.value=o},o=()=>{let e=zn?.script?.supportURL||zn?.script?.namespace;typeof e==`string`&&H.isNotNull(e)&&window.open(e,`_blank`)};return[{id:`script-version`,title:r(`版本：{{version}}`,{version:zn?.script?.version||r(`未知`)}),isBottom:!0,views:[],clickFirstCallback(){return!1},afterRender(e){new Cr(e.$asideLiElement).on(`tap`,function(){clearTimeout(n),n=void 0,t?(t=!1,a()):(n=setTimeout(()=>{t=!1,o()},200),t=!0)})}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e}},vr={$data:{__menuOption:[{key:`show_pops_panel_setting`,text:`⚙ 设置`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{V.showPanel(_r.getConfig(0))}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu()},initExtensionsMenu(){cr.isTopWindow()&&Tr.add(this.$data.menuOption)},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e)},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(e=>{let t=this.$data.menuOption.findIndex(t=>t.key===e.key);t!==-1&&(this.$data.menuOption[t]=e)})},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1)}},yr=class{data={storeNodeList:[],destoryFnList:[]};option={};constructor(e){this.option=e}handlerResult(e,t){let n=[],r=[],i=[];if(Array.isArray(t))i=i.concat(t);else{let e=t=>{if(typeof t==`object`&&t){if(t instanceof Element)i.push(t);else if(Array.isArray(t))e(t);else{let{$css:e,destory:n}=t;e!=null&&(Array.isArray(e)?i=i.concat(e):e instanceof Element&&i.push(e)),typeof n==`function`&&i.push(n)}}else i.push(t)};e(t)}let a=e=>{e!=null&&(e instanceof Element?n.push(e):typeof e==`function`&&r.push(e))};for(let e of i){let t=a(e);if(typeof t==`boolean`&&!t)break;if(Array.isArray(e))for(let t of e){let e=a(t);if(typeof e==`boolean`&&!e)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),e&&(this.data.storeNodeList=this.data.storeNodeList.concat(n),this.data.destoryFnList=this.data.destoryFnList.concat(r))}getEnableStatus(e){return!!this.option.getValue(e)}clearStoreNodeList=()=>{for(let e=this.data.storeNodeList.length-1;e>=0;e--)this.data.storeNodeList[e]?.remove(),this.data.storeNodeList.splice(e,1)};execDestoryFnAndClear=()=>{for(let e=this.data.destoryFnList.length-1;e>=0;e--){let t=this.data.destoryFnList[e];t(),this.data.destoryFnList.splice(e,1)}};checkMenuExec(){let e=!1;return e=typeof this.option.checkExec==`function`?this.option.checkExec(this.option.keyList):this.option.keyList.every(e=>this.getEnableStatus(e)),e}},br=new class{storageKey;listenerData;cacheData;callbacks=[];constructor(e){if(typeof e==`string`){let t=e.trim();if(t==``)throw Error(`key can not be empty string`);this.storageKey=t}else throw TypeError(`key must be a string`);this.listenerData=new Nn.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this)}[Symbol.dispose](){this.destory()}async[Symbol.asyncDispose](){this.destory()}destory(){this.cacheData=null;for(let e=this.callbacks.length-1;e>=0;e--){let t=this.callbacks[e];t(),this.callbacks.splice(e,1)}}getLocalValue(){if(this.cacheData==null){let e=Rn(this.storageKey);e??(e={},this.setLocalValue(e)),this.destory(),this.cacheData=e;let t=Pn(this.storageKey,(e,t,n)=>{this.cacheData=null,this.cacheData=n});return this.callbacks.push(()=>{Hn(t)}),e}return this.cacheData}setLocalValue(e){this.cacheData=null,this.cacheData=e,Un(this.storageKey,e)}set(e,t){let n=this.get(e),r=this.getLocalValue();Reflect.set(r,e,t),this.setLocalValue(r),this.emitValueChangeListener(e,t,n)}get(e,t){let n=this.getLocalValue();return Reflect.get(n,e)??t}getAll(){return this.getLocalValue()}delete(e){let t=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.emitValueChangeListener(e,void 0,t)}has(e){let t=this.getLocalValue();return Reflect.has(t,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(t=>Reflect.get(e,t))}clear(){this.destory(),Fn(this.storageKey)}addValueChangeListener(e,t){let n=Math.random(),r=this.listenerData.get(e)||[];return r.push({id:n,key:e,callback:t}),this.listenerData.set(e,r),n}removeValueChangeListener(e){let t=!1;for(let[n,r]of this.listenerData.entries()){for(let n=0;n<r.length;n++){let i=r[n];(typeof e==`string`&&i.key===e||typeof e==`number`&&i.id===e)&&(r.splice(n,1),n--,t=!0)}this.listenerData.set(n,r)}return t}async emitValueChangeListener(...e){let[t,n,r]=e;if(!this.listenerData.has(t))return;let i=this.listenerData.get(t);for(let a=0;a<i.length;a++){let o=i[a];if(typeof o.callback==`function`){let i,a;e.length===1||(e.length===2?i=n:e.length===3&&(i=n,a=r)),await o.callback(t,i,a)}}}}(lr),V={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue??=new H.Dictionary,this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData??=new H.Dictionary,this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce??=new H.Dictionary,this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData??=new H.Dictionary,this.__onceExecData},get scriptName(){return Sr},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e},key:lr,attributeKeyName:dr,attributeDefaultValueName:fr},init(){this.initContentDefaultValue(),vr.init()},initContentDefaultValue(){let e=e=>{if(!e.attributes||e.type===`button`||e.type===`container`||e.type===`deepMenu`)return;let t=e.attributes,n=t[ur];if(typeof n==`function`){let e=n();if(typeof e==`boolean`&&!e)return}let r=new Map,i=t[dr];if(i!=null){let e=t[fr];r.set(i,e)}let a=t[pr];if(typeof a==`object`&&a&&Object.keys(a).forEach(e=>{let t=a[e];r.set(e,t)}),!r.size)G.warn(`请先配置键`,e);else{if(e.type===`switch`){let t=typeof e.disabled==`function`?e.disabled():e.disabled;typeof t==`boolean`&&t&&this.$data.contentConfigInitDisabledKeys.push(...r.keys())}for(let[e,t]of r.entries())this.setDefaultValue(e,t)}},t=n=>{for(let r=0;r<n.length;r++){let i=n[r];e(i);let a=i.views;a&&Array.isArray(a)&&t(a)}},n=[..._r.getAllContentConfig()];for(let e=0;e<n.length;e++){let r=n[e];if(!r.views)continue;let i=r.views;i&&Array.isArray(i)&&t(i)}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)]},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&G.warn(`该key的默认值已进行初始化，覆盖该默认值: `,{key:e,defaultValue:t,coverDefaultValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t)},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){br.set(e,t)},getValue(e,t){return br.get(e)??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){br.delete(e)},hasKey(e){return br.has(e)},addValueChangeListener(e,t,n){let r=br.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){let r=this.getValue(e);n?.immediate?t(e,r,r):n?.immediateAll&&V.emitMenuValueChange(e,r,r)}return r},removeValueChangeListener(e){br.removeValueChangeListener(e)},emitMenuValueChange(e,t,n){br.emitValueChangeListener(e,t,n)},async exec(e,t,n,r=!0){let i;i=typeof e==`string`||Array.isArray(e)?()=>e:e;let a=!1,o=i(),s=[];Array.isArray(o)?(a=!0,s=o):s.push(o);let c=s.find(e=>!this.$data.contentConfigInitDefaultValue.has(e));if(c){G.warn(`${c} 键不存在`);return}let l=JSON.stringify(s);if(r&&this.$data.onceExecMenuData.has(l))return this.$data.onceExecMenuData.get(l);let u=[],d=new yr({keyList:s,getValue:e=>!!this.getValue(e),checkExec(e){let t=!1;return t=typeof n==`function`?n(e):e.every(e=>this.getValue(e)),t}}),f=async e=>{let n=d.checkMenuExec(),r=[];if(n){let i=s.map(e=>this.getValue(e));r=await t({key:s,triggerKey:e?.key,value:a?i:i[0],addStoreValue:(...e)=>d.handlerResult(n,e)})}d.handlerResult(n,r)};r&&s.forEach(e=>{let t=this.addValueChangeListener(e,(e,t,n)=>f({key:e,newValue:t,oldValue:n}));u.push(t)}),await f();let p={checkMenuExec:d.checkMenuExec.bind(d),keyList:s,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),f()},clear(){d.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData()},clearStoreNodeList:d.clearStoreNodeList.bind(d),execDestoryFnAndClear:d.execDestoryFnAndClear.bind(d),removeValueChangeListener:()=>{u.forEach(e=>{this.removeValueChangeListener(e)})},clearOnceExecMenuData(){r&&V.$data.onceExecMenuData.delete(l)}};return this.$data.onceExecMenuData.set(l,p),p},async execMenu(e,t,n=!1,r=!1,i=!1){return await this.exec(e,async(...e)=>await t(...e),e=>{let t=!1,a=e=>{let t=!!this.getValue(e);return V.$data.contentConfigInitDisabledKeys.includes(e)&&(t=!1,G.warn(`.execMenu${r?`Once`:``} ${e} 被禁用`)),n&&(t=!t),t};return t=i?e.some(a):e.every(a),t},r)},async execMenuOnce(e,t,n=!1,r=!1,i=!1){let a=await this.execMenu(e,t,n,!0,i);return r&&a&&(this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,()=>{a.reload()})),a},async execMoreMenu(e,t,n=!1,r=!1,i=!1,a=!1){let o=await Promise.all(e.map(async([e,t])=>await this.execMenu(e,(...e)=>t(...e),n,r,a))),s=new yr({keyList:e.map(([e])=>e),getValue:e=>!!this.getValue(e)}),c=[],l=(e=!1)=>{if(s.clearStoreNodeList(),s.execDestoryFnAndClear(),e){for(let e of c)this.removeValueChangeListener(e);for(let e of o)e&&this.removeUrlChangeWithExecMenuOnceListener(e.keyList)}},u=()=>{let e=o.every(e=>!e||e.checkMenuExec());if(l(!1),e){let n=t();s.handlerResult(e,n)}};u();for(let e of o)if(e){let t=this.addValueChangeListener(e.keyList[0],()=>{u()});c.push(t),i&&(this.removeUrlChangeWithExecMenuOnceListener(e.keyList),this.addUrlChangeWithExecMenuOnceListener(e.keyList,()=>{e.reload()}))}return{clear(){for(let e of o)e?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener()},execDestoryFnAndClear(){for(let e of o)e?.execDestoryFnAndClear();l(!1)},removeValueChangeListener(){for(let e of o)e?.removeValueChangeListener();l(!0)}}},async execMoreMenuOnce(e,t,n=!1,r=!1){return await this.execMoreMenu(e,t,n,!0,r)},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),br.removeValueChangeListener(e)},onceExec(e,t,n=!1){if(e=this.transformKey(e),typeof e!=`string`)throw TypeError(`key 必须是字符串`);this.$data.onceExecData.has(e)||n&&(Array.isArray(e)?e:[e]).findIndex(e=>{if(!V.getValue(e))return!0})!==-1||(t(),this.$data.onceExecData.set(e,1))},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e)},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e)},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){let t=this.$data.urlChangeReloadMenuExecOnce.values();for(let n of t)await n(e)},showPanel(e,t=`${Sr}-设置`,n=!1,r=!1){this.$data.$panel=null,this.$data.panelContent=[];let i=e.findIndex(e=>(typeof e.isBottom==`function`?e.isBottom():!!e.isBottom)&&e.id===`script-version`)!==-1;!n&&!i&&e.push(..._r.getDefaultBottomContentConfig());let a=W.panel({title:{text:t,position:`center`,html:!1,style:``},content:e,btn:{close:{enable:!0,callback:e=>{e.close(),this.$data.$panel=null}}},mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1},clickCallBack:e=>{e(),this.$data.$panel=null}},width:gr.setting.width,height:gr.setting.height,drag:!0,only:!0,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=a,this.$data.panelContent=e,r||this.registerConfigSearch({$panel:a,content:e}),{$panel:a,content:e}},registerConfigSearch(e){let{$panel:t,content:n}=e,r=(t,n)=>{if(typeof e.translateCallback==`function`)return e.translateCallback(t,n);if(typeof n==`object`&&n)for(let e in n)t=t.replaceAll(`{{${e}}}`,n[e]);return t},i=async(e,t)=>{if(e==null)return;let n=await t(e);return n&&typeof n.isFind==`boolean`&&n.isFind?n.data:await i(n.data,t)},a=(e,t)=>{let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(t?.(),n.disconnect())})},{root:null,threshold:1});n.observe(e),e.scrollIntoView({behavior:`smooth`,block:`center`})},o=e=>{let t=`pops-flashing`;U.onAnimationend(e,()=>{e.classList.remove(t)}),e.classList.add(t)},s=s=>{if(s.type===`dblclick`&&d)return;U.preventEvent(s);let c=W.alert({title:{text:r(`搜索配置`),position:`center`},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${r(`请输入需要搜素的配置名称`)}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:!0},btn:{ok:{enable:!1}},mask:{clickEvent:{toClose:!0}},width:gr.settingMiddle.width,height:`auto`,drag:!0,style:`
					${W.config.cssText.panelCSS}

					.search-wrapper{
						border-bottom: 1px solid rgb(235, 238, 245, 1);
					}
					.pops-content:has(.search-result-wrapper:empty) .search-wrapper{
						border-bottom: 0;
					}
					.search-config-text{
						width: 100%;
						border: 0;
						height: 32px;
						padding: 0px 10px;
						outline: none;
					}
					.search-result-wrapper{
						max-height: 400px;
						overflow: auto;
					}
					.search-result-item{
						cursor: pointer;
						padding: 5px 10px;
						display: flex;
						flex-direction: column;
					}
					.search-result-item:hover{
						background-color: #D8F1FD;
					}
					.search-result-item-path{
						display: flex;
            align-items: center;
            flex-wrap: wrap;
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${e.searchDialogStyle??``}
				`}),l=c.$shadowRoot.querySelector(`.search-config-text`),u=c.$shadowRoot.querySelector(`.search-result-wrapper`);l.focus();let f=()=>{U.empty(u)},p=e=>{let n=H.queryProperty(e,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}),s=U.createElement(`div`,{className:`search-result-item`,innerHTML:`
							<div class="search-result-item-path">${n.matchedData?.path}</div>
							<div class="search-result-item-description">${n.matchedData?.description??``}</div>
						`}),c=W.fn.PanelHandlerComponents();return U.on(s,`click`,()=>{let n=t.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-top-container li`)[e.index];n?(n.scrollIntoView({behavior:`smooth`,block:`center`}),n.click(),i(e.next,async e=>{if(e?.next){let n=await U.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(`.pops-panel-deepMenu-nav-item`)).find(t=>{let n=Reflect.get(t,c.$data.nodeStoreConfigKey);return typeof n==`object`&&!!n&&n.text===e.name}),5e3);if(n)n.click(),await H.sleep(500);else return z.error(r(`未找到对应的二级菜单`)),{isFind:!0,data:e};return{isFind:!1,data:e.next}}{let n=await U.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(t=>Reflect.get(t,c.$data.nodeStoreConfigKey)===e.matchedData?.formConfig),5e3);if(n){a(n);let e=n.closest(`.pops-panel-forms-fold[data-fold-enable]`);e&&(e.querySelector(`.pops-panel-forms-fold-container`).click(),await H.sleep(500)),a(n,()=>{o(n)})}else z.error(r(`未找到对应的菜单项`));return{isFind:!0,data:e}}})):z.error(r(`左侧项下标{{index}}不存在`,{index:e.index}))}),s},m=e=>{let t=new RegExp(e,`i`),r=[],i=(e,n)=>{for(let a=0;a<e.length;a++){let o=e[a],s=o.views;if(s&&Array.isArray(s)){let e=H.deepClone(n);if(o.type===`deepMenu`){let t=H.queryProperty(e,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});t.next={name:o.text}}i(s,e)}else{let e,i;if(o.type===`own`){let t=Reflect.get(o.attributes||{},mr);t&&(typeof t==`function`&&(t=t()),typeof t.text==`string`&&(e=t.text),typeof t.desc==`string`&&(i=t.desc))}else e=o.text,i=Reflect.get(o,`description`);let a=[e,i],s=a.findIndex(e=>{if(typeof e==`string`)return e.match(t)});if(s!==-1){let t=H.deepClone(n),c=H.queryProperty(t,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});c.next={name:e,matchedData:{path:``,formConfig:o,matchedText:a[s],description:i}};let l=[];H.queryProperty(t,e=>{let t=e?.name;return typeof t==`string`&&t.trim()!==``&&l.push(t),e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}});let u=l.join(cr.escapeHtml(` - `));c.next.matchedData.path=u,r.push(t)}}}};for(let e=0;e<n.length;e++){let t=n[e];if(!t.views||t.isBottom&&t.id===`script-version`)continue;let r=t.views;if(r&&Array.isArray(r)){let n=t.title;typeof n==`function`&&(n=n()),i(r,{index:e,name:n})}}let a=document.createDocumentFragment();for(let e of r){let t=p(e);a.appendChild(t)}f(),u.append(a)};U.on(l,`input`,H.debounce(e=>{U.preventEvent(e);let t=U.val(l).trim();t===``?f():m(t)},200))};t.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`).forEach(e=>{U.on(e,`dblclick`,s)});let c=new WeakMap,l=!1,u,d=!1;U.on(t.$shadowRoot,`touchend`,`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,(e,t)=>{d=!0,clearTimeout(u),u=void 0,l&&c.has(t)?(l=!1,c.delete(t),s(e)):(u=setTimeout(()=>{l=!1},200),l=!0,c.set(t,e))},{capture:!0}),t.$shadowRoot.appendChild(U.createElement(`style`,{type:`text/css`,textContent:`
    			.pops-flashing{
    				animation: double-blink 1.5s ease-in-out;
    			}
    			@keyframes double-blink {
    				 0% {
    					background-color: initial;
    				}
    				25% {
    					background-color: yellow;
    				}
    				50% {
    					background-color: initial;
    				}
    				75% {
    					background-color: yellow;
    				}
    				100% {
    					background-color: initial;
    				}
    			}
    		`}))},transformKey(e){if(Array.isArray(e)){if(e.length>1){let t=e.sort();return JSON.stringify(t)}return e[0]}return e},getDynamicValue(e,t){let n=!1,r=t,i=this.addValueChangeListener(e,(e,t)=>{r=t});return{get value(){return n||(n=!0,r=V.getValue(e,t)),r},destory(){V.removeValueChangeListener(i)}}}},xr={qmsg_config_position:{key:`qmsg-config-position`,defaultValue:`bottom`},qmsg_config_maxnums:{key:`qmsg-config-maxnums`,defaultValue:3},qmsg_config_showreverse:{key:`qmsg-config-showreverse`,defaultValue:!1},httpx_cookie_manager_enable:{key:`httpx-use-cookie-enable`,defaultValue:!1},httpx_cookie_manager_use_document_cookie:{key:`httpx-use-document-cookie`,defaultValue:!1}},H=Nn.noConflict(),U=p.noConflict(),W=kt,G=new H.Log(zn,L.console||qn.console),Sr=zn?.script?.name||void 0,Cr=kt.fn.Utils.AnyTouch();G.config({debug:!1,logMaxCount:250,autoClearConsole:!0,tag:!0});var wr=()=>{let e=kt.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,t=H.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,e,t)};z.config({isHTML:!0,autoClose:!0,showClose:!1,isTextWrap:!0,consoleLogContent(e){let t=e.setting.type;if(t===`loading`)return!1;let n=e.setting.content;return t===`warning`?G.warn(n):t===`error`?G.error(n):G.info(n),!1},get position(){return V.getValue(xr.qmsg_config_position.key,xr.qmsg_config_position.defaultValue)},get maxNums(){return V.getValue(xr.qmsg_config_maxnums.key,xr.qmsg_config_maxnums.defaultValue)},get showReverse(){return V.getValue(xr.qmsg_config_showreverse.key,xr.qmsg_config_showreverse.defaultValue)},get zIndex(){return wr()}}),W.GlobalConfig.setGlobalConfig({zIndex:()=>wr(),mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},drag:!0});var Tr=new H.GM_Menu({GM_getValue:Rn,GM_setValue:Un,GM_registerMenuCommand:Vn,GM_unregisterMenuCommand:Gn}),Er=new H.Httpx({xmlHttpRequest:Kn,isConsoleRequestOption:!1});Er.interceptors.request.use(e=>e),Er.interceptors.response.use(e=>e,e=>{G.error(`[Httpx-HttpxRequest.response] 响应错误`,{data:e});let t={consoleLogContent:!0};if(e.type===`onabort`)z.warning(`请求取消`,t);else if(e.type===`onerror`){let n=e.response.error;typeof n==`string`&&H.isNotNull(n)?n.includes(`@connect list`)?z.error(`请将该域名添加至@connect: `+e.resolveOption.requestOption.url,{...t,timeout:5e3}):z.error(n,t):z.error(`请求异常`,t)}else e.type===`ontimeout`?z.error(`请求超时`,t):z.error(`其它错误`,t);return e});var Dr={Object:{defineProperty:L.Object.defineProperty,keys:L.Object.keys,values:L.Object.values},Function:{apply:L.Function.prototype.apply,call:L.Function.prototype.call},Element:{appendChild:L.Element.prototype.appendChild},setTimeout:L.setTimeout.bind(L),clearTimeout:L.clearTimeout.bind(L),setInterval:L.setInterval.bind(L),clearInterval:L.clearInterval.bind(L)},K=U.addStyle.bind(U),q=cr.addBlockCSS.bind(cr);cr.addBlockCSSWithEnd.bind(cr);var J=p.selector.bind(p),Y=p.selectorAll.bind(p),Or=new H.CookieManagerService({baseCookieHandler:`GM_cookie`});Or.isSupportGM_cookie||(Or.isSupportCookieStore?Or.setOptions({baseCookieHandler:`cookieStore`}):Or.setOptions({baseCookieHandler:`document.cookie`})),new H.DocumentCookieHandler;var kr=Sr||`抖音优化`,Ar={__ajaxHooker:null,get ajaxHooker(){return this.__ajaxHooker??=H.ajaxHooker(),this.__ajaxHooker},init(){V.execMenuOnce(`dy-hook-higher-quality`,()=>this.hookVideoQuality())},hookUserNoLoginResponse(){this.ajaxHooker.hook(e=>{let t=e.response;e.response=e=>{t&&t(e);let n=H.toJSON(e.responseText);typeof n.status_code==`number`&&n.status_code!==0&&(n.status_code=0,typeof n.status_msg==`string`&&(n.status_msg=``)),typeof n?.user_collect_count?.status_code==`number`&&n?.user_collect_count?.status_code!==0&&(n.user_collect_count.status_code=0,typeof n?.user_collect_count?.status_msg==`string`&&(n.user_collect_count.status_msg=``)),e.responseText=JSON.stringify(n)}})},hookVideoQuality(){G.info(`篡改显示视频清晰度，让其显示最高清晰度`);let e=`NVIDIA GeForce RTX 4080/PCIe/SSE2`,t=`NVIDIA Corporation`;if(L.MediaCapabilities&&L.MediaCapabilities.prototype.decodingInfo){let e=L.MediaCapabilities.prototype.decodingInfo;L.MediaCapabilities.prototype.decodingInfo=function(t){return t&&t.video?Promise.resolve({supported:!0,smooth:!0,powerEfficient:!0}):e.call(this,t)}}try{Object.defineProperty(L.navigator,"hardwareConcurrency",{configurable:!0,get(){return 16}})}catch(e){G.error(`hardwareConcurrency 伪装失败`,e.message)}try{Object.defineProperty(L.navigator,"deviceMemory",{configurable:!0,get(){return 64}})}catch(e){G.error(`deviceMemory 伪装失败`,e.message)}function n(n){if(!n||!n.getParameter)return;let r=n.getParameter;n.getParameter=function(n){try{let r=this.getExtension&&this.getExtension(`WEBGL_debug_renderer_info`);if(r){if(n===r.UNMASKED_RENDERER_WEBGL)return e;if(n===r.UNMASKED_VENDOR_WEBGL)return t}if(n===7937)return e;if(n===7936)return t}catch{}return r.call(this,n)}}L.WebGLRenderingContext&&n(L.WebGLRenderingContext.prototype),L.WebGL2RenderingContext&&n(L.WebGL2RenderingContext.prototype);function r(e){if(!e||!e.canPlayType)return;let t=e.canPlayType;e.canPlayType=function(e){return/hev|hvc|av0|av1|vp0|mp4/i.test(e)?`probably`:t.call(this,e)}}if(r(L.HTMLMediaElement&&L.HTMLMediaElement.prototype),L.MediaSource&&L.MediaSource.isTypeSupported){let e=L.MediaSource.isTypeSupported;L.MediaSource.isTypeSupported=function(t){return/hev|hvc|av0|av1|vp0|mp4/i.test(t)?!0:e.call(this,t)}}let i=Object.keys(L.localStorage).find(e=>e.startsWith(`__tea_sdk_ab_version_`));if(i){let e=L.localStorage.getItem(i),t=H.toJSON(e);t.data&&(t.data.exposure_defination={val:1,vid:``},t.data.has_2k={val:1,vid:``},t.data.has_hdr={val:1,vid:``},L.localStorage.setItem(i,JSON.stringify(t)))}this.ajaxHooker.hook(e=>{let t=cr.fixUrl(e.url);new URL(t).pathname.startsWith(`/service/2/abtest_config/`)&&(e.response=e=>{let t=H.toJSON(e.responseText);t.data&&(t.data.has_2k={val:1,vid:``},t.data.has_hdr={val:1,vid:``}),e.responseText=JSON.stringify(t)})})}},jr=class e{__href__;get __href(){return this.__href__||globalThis.location.href}__origin={value:void 0,type:`same`};__protocol={value:void 0,type:`same`};__host={value:void 0,type:`same`,hasPort:!1};__pathname={value:void 0,type:`same`};__searchParams={value:new Set};__hash={value:void 0,type:`same`};otherInstResultWithOr=!1;constructor(e){typeof e==`string`&&this.href(e)}href(e){return this.__href__=e,this}origin(e){return this.__origin={value:e,type:`same`},this}originStartsWith(e){return this.__origin={value:e,type:`startsWith`},this}originEndsWith(e){return this.__origin={value:e,type:`endsWith`},this}originIncludes(e){return this.__origin={value:e,type:`includes`},this}originMatch(e){return this.__origin={value:e,type:`match`},this}protocol(e){return this.__protocol={value:e,type:`same`},this}protocolStartsWith(e){return this.__protocol={value:e,type:`startsWith`},this}protocolEndsWith(e){return this.__protocol={value:e,type:`endsWith`},this}protocolIncludes(e){return this.__protocol={value:e,type:`includes`},this}protocolMatch(e){return this.__protocol={value:e,type:`match`},this}host(e){return this.__host={value:e,type:`same`,hasPort:!0},this}hostStartsWith(e){return this.__host={value:e,type:`startsWith`,hasPort:!0},this}hostEndsWith(e){return this.__host={value:e,type:`endsWith`,hasPort:!0},this}hostIncludes(e){return this.__host={value:e,type:`includes`,hasPort:!0},this}hostMatch(e){return this.__host={value:e,type:`match`,hasPort:!0},this}hostName(e){return this.__host={value:e,type:`same`,hasPort:!1},this}hostNameStartsWith(e){return this.__host={value:e,type:`startsWith`,hasPort:!1},this}hostNameEndsWith(e){return this.__host={value:e,type:`endsWith`,hasPort:!1},this}hostNameIncludes(e){return this.__host={value:e,type:`includes`,hasPort:!1},this}hostNameMatch(e){return this.__host={value:e,type:`match`,hasPort:!1},this}pathname(e){return this.__pathname={value:e,type:`same`},this}pathnameStartsWith(e){return this.__pathname={value:e,type:`startsWith`},this}pathnameEndsWith(e){return this.__pathname={value:e,type:`endsWith`},this}pathnameIncludes(e){return this.__pathname={value:e,type:`includes`},this}pathnameMatch(e){return this.__pathname={value:e,type:`match`},this}searchParams(e,t){return this.__searchParams.value.add({name:e,value:t}),this}search(e){return this.__searchParams.value.add({name:``,value:e,type:`same`}),this}searchStartsWith(e){return this.__searchParams.value.add({name:``,value:e,type:`startsWith`}),this}searchEndsWith(e){return this.__searchParams.value.add({name:``,value:e,type:`endsWith`}),this}searchIncludes(e){return this.__searchParams.value.add({name:``,value:e,type:`includes`}),this}searchMatch(e){return this.__searchParams.value.add({name:``,value:e,type:`match`}),this}hash(e){return this.__hash={value:e,type:`same`},this}hashStartsWith(e){return this.__hash={value:e,type:`startsWith`},this}hashEndsWith(e){return this.__hash={value:e,type:`endsWith`},this}hashIncludes(e){this.__hash={value:e,type:`includes`}}hashMatch(e){return this.__hash={value:e,type:`match`},this}build(){if(!this.__host.value)throw TypeError(`host or hostName should be required`);let e=`${this.__protocol.value||`https`}://${this.__host.value}${this.__pathname.value||`/`}`.trim();if(this.__searchParams.value.size>0){let t=[];this.__searchParams.value.forEach(e=>{if(typeof e.name==`string`){let n=``;(typeof e.value==`string`||typeof e.value==`number`||typeof e.value==`boolean`)&&(n=e.value.toString()),t.push(`${encodeURIComponent(e.name)}=${encodeURIComponent(n)}`)}}),e.endsWith(`?`)||(e+=`?`),t.length&&(e+=t.join(`&`))}if(typeof this.__hash.value==`string`){let t=this.__hash.value.trim();!e.endsWith(`#`)&&!t.startsWith(`#`)&&(e+=`#`),e+=t}return e}or(t){this.otherInstResultWithOr=this.otherInstResultWithOr||this.r();let n=new e(t);return n.otherInstResultWithOr=this.otherInstResultWithOr,n}r(){if(this.otherInstResultWithOr)return this.otherInstResultWithOr;let e=new URL(this.__href),t=(t,n)=>{let r=typeof n==`function`?n():n;if(r.value){let n=e[t];if(typeof n!=`string`)return!1;if(r.type===`same`){if(typeof r.value==`string`)return n===r.value.toString();throw TypeError(`${t} value should be string by type ${r.type}`)}if(r.type===`startsWith`){if(typeof r.value==`string`)return n.startsWith(r.value.toString());throw TypeError(`${t} value should be string by type ${r.type}`)}if(r.type===`endsWith`){if(typeof r.value==`string`)return n.endsWith(r.value.toString());throw TypeError(`${t} value should be string by type ${r.type}`)}if(r.type===`includes`){if(typeof r.value==`string`)return n.includes(r.value.toString());throw TypeError(`${t} value should be string by type ${r.type}`)}if(r.type===`match`){if(r.value instanceof RegExp)return r.value.test(n);if(typeof r.value==`string`||typeof r.value==`number`||typeof r.value==`boolean`)return n.match(r.value.toString());throw TypeError(`${t} value should be RegExp or string by type ${r.type}`)}throw TypeError(`${t} type should be same,startsWith,endsWith,includes,match`)}return!0};return[()=>t(`origin`,this.__origin),()=>t(`protocol`,this.__protocol),()=>t(this.__host.hasPort?`host`:`hostname`,this.__host),()=>t(`pathname`,this.__pathname),()=>{let t=!0,n=[];this.__searchParams.value.forEach(e=>{n.push(e)});for(let r=0;r<n.length;r++){let i=n[r];if(i.type){if(i.type===`same`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search===i.value.toString();throw TypeError(`search value should be string、number、boolean by type `+i.type)}if(i.type===`startsWith`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.startsWith(i.value.toString());throw TypeError(`search value should be string、number、boolean by type `+i.type)}if(i.type===`endsWith`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.endsWith(i.value.toString());throw TypeError(`search value should be string、number、boolean by type `+i.type)}if(i.type===`includes`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.includes(i.value.toString());throw TypeError(`search value should be string、number、boolean by type `+i.type)}if(i.type===`match`){if(i.value instanceof RegExp)return i.value.test(e.search);if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.match(i.value.toString());throw TypeError(`search value should be RegExp、string、number、boolean by type `+i.type)}throw TypeError(`search type should be same, startsWith, endsWith, includes, match`)}if(typeof i.name==`string`){let n=i.value;if(n==null||typeof n==`string`||typeof n==`number`||typeof n==`boolean`){if(n=n?.toString(),!e.searchParams.has(i.name,n)){t=!1;break}}else if(n instanceof RegExp){let r=e.searchParams.get(i.name);if(r){if(!n.test(r)){t=!1;break}}else{t=!1;break}}else throw TypeError(`searchParams value should be string, RegExp, boolean, number, null, undefined`)}else if(i.name instanceof RegExp){let n,r;if(e.searchParams.forEach((e,t)=>{!n&&t.match(i.name)&&(n=t,r=e)}),n){let e=i.value;if(e!=null){if(typeof e==`string`||typeof e==`number`||typeof e==`boolean`){if(e=e.toString(),t=e===r,!t)break}else if(e instanceof RegExp){if(r){if(!e.test(r)){t=!1;break}}else{t=!1;break}}else throw TypeError(`searchParams value should be string, RegExp, boolean, number, null, undefined`)}}else{t=!1;break}}else throw TypeError(`searchParams name should be string or RegExp`)}return t},()=>t(`hash`,this.__hash)].every(e=>e())}},X={host(e,t){return X.builder(t).host(e)},hostName(e,t){return X.builder(t).hostName(e)},search(e,t){return X.builder(t).search(e)},seachParams(e,t,n){return X.builder(n).searchParams(e,t)},pathname(e,t){return X.builder(t).pathname(e)},protocol(e,t){return X.builder(t).protocol(e)},hash(e,t){return X.builder(t).hash(e)},builder(e){return new jr(e)}},Z={isIndex(e){return X.builder(e).hostName(`www.douyin.com`).or(e).hostName(`douyin.com`).r()},isLive(e){return X.hostName(`live.douyin.com`).r()||this.isFollowLive(e)||this.isRootLive(e)},isCreator(e){return X.hostName(`creator.douyin.com`).r()},isFollow(e){return this.isIndex(e)&&X.builder(e).pathnameStartsWith(`/follow`).r()},isFollowLive(e){return this.isIndex(e)&&X.builder(e).pathnameStartsWith(`/follow/live/`).r()},isRootLive(e){return this.isIndex(e)&&X.builder(e).pathnameStartsWith(`/root/live/`).r()},isRecommend(e){return this.isIndex(e)&&X.pathname(`/`).r()&&X.seachParams(`recommend`).r()},isSearch(e){return this.isIndex(e)&&(this.isRootSearch(e)||X.builder(e).pathnameStartsWith(`/search/`).r()||this.isUserSearch(e))},isRootSearch(e){return this.isIndex(e)&&X.builder(e).pathnameStartsWith(`/root/search/`).r()},isChannel(e){return this.isIndex(e)&&X.builder(e).pathnameStartsWith(`/channel/`).r()},isDiscover(e){return this.isIndex(e)&&X.builder(e).pathnameStartsWith(`/discover/`).r()},isUser(e){return this.isIndex(e)&&X.builder(e).pathnameStartsWith(`/user/`).r()},isUserSearch(e){return this.isUser(e)&&X.builder(e).pathnameIncludes(`/search/`).r()},isVideo(e){return this.isIndex(e)&&X.builder(e).pathnameStartsWith(`/video/`).r()},isNote(e){return this.isIndex(e)&&X.builder(e).pathnameStartsWith(`/note/`).r()},isJingXuan(e){return this.isIndex(e)&&X.builder(e).pathnameStartsWith(`/jingxuan`).r()},isFriend(e){return this.isIndex(e)&&X.builder(e).pathnameStartsWith(`/friend`).r()},isChat(e){return this.isIndex(e)&&X.builder(e).pathnameStartsWith(`/chat`).r()},isAISearch(e){return this.isIndex(e)&&X.builder(e).pathnameStartsWith(`/aisearch`).r()},isHot(e){return this.isIndex(e)&&X.builder(e).pathnameStartsWith(`/hot`).r()}},Mr={isVerticalScreen(){return!globalThis.screen.orientation.type.includes(`landscape`)},parseDuration(e){if(typeof e!=`number`&&(e=parseInt(e)),isNaN(e))return e.toString();let t=function(e){return e<10?`0${e}`:e};if(e<60)return`0:${t(e)}`;if(e>=60&&e<3600)return`${Math.floor(e/60)}:${t(e%60)}`;{let n=Math.floor(e/3600),r=Math.floor(e/60)%60,i=e%60;return`${n}:${t(r)}:${t(i)}`}},isVideoEmptySrc(e){return!!(e!=null&&H.isNull(e.src)&&H.isNull(e.currentSrc)&&e.srcObject==null&&!e.querySelector(`source[src]`))},simulateClick(e,t={}){let{clientX:n=0,clientY:r=0,...i}=t;e.dispatchEvent(new PointerEvent(`pointerdown`,{clientX:n,clientY:r,bubbles:!0,cancelable:!0,...i})),e.dispatchEvent(new PointerEvent(`pointerup`,{clientX:n,clientY:r,bubbles:!0,cancelable:!0,...i})),e.dispatchEvent(new MouseEvent(`mousedown`,{clientX:n,clientY:r,bubbles:!0,cancelable:!0,...i})),e.dispatchEvent(new MouseEvent(`mouseup`,{clientX:n,clientY:r,bubbles:!0,cancelable:!0,...i})),e.dispatchEvent(new MouseEvent(`click`,{clientX:n,clientY:r,bubbles:!0,cancelable:!0,...i}))},simulateTouchClick(e,t,n){if(t==null&&n==null){let r=e.getBoundingClientRect();t=r.left+r.width/2,n=r.top+r.height/2}else t??=0,n??=0;let r={touches:[new Touch({identifier:0,target:e,clientX:t,clientY:n})],changedTouches:[new Touch({identifier:0,target:e,clientX:t,clientY:n})],targetTouches:[new Touch({identifier:0,target:e,clientX:t,clientY:n})],bubbles:!0,cancelable:!0};e.dispatchEvent(new TouchEvent(`touchstart`,r)),e.dispatchEvent(new TouchEvent(`touchend`,r)),this.simulateClick(e,{clientX:t,clientY:n})}},Nr={watchFeedVideoListChange(e){let t=null;U.onReady(()=>{U.waitAnyNode([`#slidelist`,`#search-content-area ul[data-e2e="scroll-list"]`]).then(n=>{G.info(`启用观察器观察加载的视频`);let r=new H.LockFunction(n=>{t||=this.selectorRootOSNode(),t?e(t,n):G.error(`watchVideDataListChange：获取osElement失败`)},50);H.mutationObserver(document,{config:{childList:!0,subtree:!0},immediate:!0,callback:(e,t)=>{r.run(t)}})})})},selectorRootOSNode(){return J(`#root div[class*='-os']`)||J(`#douyin-right-container`)},getPercentInWindowView(e){let t=e.getBoundingClientRect(),n=window.innerWidth,r=window.innerHeight,i=Math.max(0,t.left),a=Math.max(0,t.top),o=Math.min(n,t.right),s=Math.min(r,t.bottom),c=Math.max(0,o-i),l=Math.max(0,s-a),u=t.width*t.height,d=c*l;if(u===0)return{percentage:0,horizontal:0,vertical:0,toCenter:0,nodeCenterX:0,nodeCenterY:0};let f=i+Math.max(0,(o-i)/2),p=a+Math.max(0,(s-a)/2),m=Math.max(0,n/2),h=Math.max(0,r/2),g=d/u*100,_=Math.sqrt((f-m)**2+(p-h)**2),v=c/t.width*100,y=l/t.height*100;return{percentage:Math.round(g*100)/100,horizontal:Math.round(v*100)/100,vertical:Math.round(y*100)/100,toCenter:_,nodeCenterX:f,nodeCenterY:p}},getInViewVideo(){let e=Array.from(Y(`video`)).map(e=>{if(!Mr.isVideoEmptySrc(e))return e}).filter(e=>e!=null);return this.getInViewNode(e)},getInViewPlayButton(){let e=Array.from(Y(`.xgplayer-play`));return e.push(...Array.from(Y(`#slidelist .douyin-player-play`))),this.getInViewNode(e).map(e=>{let t=e.$el,n=document.elementFromPoint(e.nodeCenterX,e.nodeCenterY);if(n===t||t.contains(n))return{...e,state:t.getAttribute(`data-state`)}}).filter(e=>e!=null)},getInViewNode(e){Array.isArray(e)||(e=[e]);let t=e.map(e=>{let t=this.getPercentInWindowView(e);if(!(t.percentage<=0))return{...t,$el:e}}).filter(e=>e!=null);return H.sortListByProperty(t,e=>e.toCenter,!1),t},findUpward(e,t){let n=U.selector(t,e);if(n)return n;for(;e.parentElement;){e=e.parentElement;let n=U.selector(t,e);if(n)return n}}},Pr={disguiseLogin(){G.info(`伪装登录`);let e=[q(`.login-tooltip-slot`)],t=2e4,n={uid:parseInt((Math.random()*1e5).toString()),secUid:``,shortId:parseInt((Math.random()*1e9).toString()),realName:`乌萨奇`,nickname:`乌萨奇`,desc:`除草证3级`,gender:0,avatarUrl:`https://picshack.net/ib/F9JKlC3yhh.gif`,avatar300Url:`https://picshack.net/ib/F9JKlC3yhh.gif`,followStatus:0,followerStatus:0,awemeCount:0,watchLaterCount:0,followingCount:0,followerCount:0,followerCountStr:``,mplatformFollowersCount:9999999,favoritingCount:0,totalFavorited:9999999,userCollectCount:{logPb:{impr_id:``},collectCountList:[],statusCode:0,extra:{fatal_item_ids:[],logid:``,now:Date.now()}},uniqueId:``,customVerify:``,generalPermission:{is_hit_active_fans_grayed:!1},age:new Date().getFullYear()-2019,country:``,province:``,city:``,district:``,school:`chiikawa`,schoolVisible:1,enterpriseVerifyReason:``,secret:1,userCanceled:!1,roomData:{},shareQrcodeUrl:``,shareInfo:{boolPersist:1,shareDesc:`长按复制此条消息，打开抖音搜索，查看TA的更多作品。`,shareImageUrl:{uri:``,url_list:[]},shareQrcodeUrl:{uri:``,url_list:[]},shareUrl:``,shareWeiboDesc:`长按复制此条消息，打开抖音搜索，查看TA的更多作品。`},coverAndHeadImageInfo:{profileCoverList:[]},roomId:0,favoritePermission:1,viewHistoryPermission:!0,isGovMediaVip:!1,isStar:!1,hideLocation:!1,needSpecialShowFollowerCount:!1,continuationState:0,im_role_ids:[],accountCertInfo:{},close_consecutive_chat:0,profileRankLabel:null};Object.freeze(n);let r=function(e){let t=[],n=H.getReactInstance(e)?.reactFiber;return n?.alternate?.return?.memoizedProps?.userInfo&&t.push(n?.alternate?.return?.memoizedProps?.userInfo),n?.alternate?.return?.memoizedProps?.userInfo?.userInfo&&t.push(n?.alternate?.return?.memoizedProps?.userInfo.userInfo),n?.alternate?.return?.return?.memoizedProps?.userInfo&&t.push(n?.alternate?.return?.return?.memoizedProps?.userInfo),n?.alternate?.return?.return?.memoizedProps?.userInfo?.userInfo&&t.push(n?.alternate?.return?.return?.memoizedProps?.userInfo.userInfo),t},i=function(e){r(e).forEach(e=>{e.isLogin||(e.info=n,e.isLogin=!0,e.statusCode=0)})};if(Nr.watchFeedVideoListChange(i),U.waitNode(`#root div[class*='-os']`,t).then(()=>{let t=new H.LockFunction(()=>{let e=Nr.selectorRootOSNode();e&&i(e)},70),n=H.mutationObserver(document.body,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{t.run()}});e.push(()=>{n.disconnect()})}),Z.isLive())G.info(`伪装登录：live`),U.waitNode(`[id^="douyin-header"] div:has(.dy-tip-container)`,t).then(()=>{let e=new H.LockFunction(()=>{i(J(`[id^="douyin-header"]`))},70);H.mutationObserver(document.body,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{e.run()}})});else if(Z.isSearch()){G.info(`伪装登录：search`);function e(e){let t=H.getReactInstance(e)?.reactProps;typeof t?.children?.[1]?.props?.userInfo?.isLogin==`boolean`&&Reflect.set(t.children[1].props.userInfo,`isLogin`,!0),typeof t?.children?.[1]?.props?.isClient==`boolean`&&Reflect.set(t.children[1].props,`isClient`,!0)}U.waitNode(`#root > div`,t).then(t=>{if(!t){G.error(`#root > div获取失败`);return}let n=new H.LockFunction(()=>{e(t)},70);H.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{n.run()}})})}return V.getValue(`watchLoginDialogToClose`)||e.push(...this.watchLoginDialogToClose()),e.push(...this.watchCommentDialogToClose()),window.localStorage.removeItem(`UNLOGIN_CLARITY_NEW`),window.localStorage.setItem(`HasUserLogin`,`1`),window.localStorage.setItem(`has_login_show`,JSON.stringify({count:1,lastTime:Date.now()-432e5,firstTime:Date.now()-432e5})),e},watchLoginDialogToClose(){G.info(`监听登录弹窗并关闭`);let e=V.getDynamicValue(`watchLoginDialogToClose`),t=V.getDynamicValue(`disguiseLogin`),n=new H.LockFunction(()=>{if(!e.value&&!t.value)return;U.remove(`.douyin_login_iframe:has(iframe)`);let n=J(`div[id^="login-full-panel-"]`);if(n&&n.children.length){let e=n.querySelector(`.dy-account-close`)||n.querySelector(`div:has(>svg path[d="M12.7929 22.2426C12.4024 22.6331 12.4024 23.2663 12.7929 23.6568C13.1834 24.0474 13.8166 24.0474 14.2071 23.6568L18.5 19.3639L22.7929 23.6568C23.1834 24.0474 23.8166 24.0474 24.2071 23.6568C24.5976 23.2663 24.5976 22.6331 24.2071 22.2426L19.9142 17.9497L24.1066 13.7573C24.4971 13.3668 24.4971 12.7336 24.1066 12.3431C23.7161 11.9526 23.0829 11.9526 22.6924 12.3431L18.5 16.5355L14.3076 12.3431C13.9171 11.9526 13.2839 11.9526 12.8934 12.3431C12.5029 12.7336 12.5029 13.3668 12.8934 13.7573L17.0858 17.9497L12.7929 22.2426Z"])`);if(e){let t=H.getReactInstance(e)?.reactProps?.onClick;typeof t==`function`?(t(new Event(`click`)),G.success(`调用onClick触发关闭弹窗`)):G.error(`监听到登录弹窗但是关闭失败，原因：未获取到onClick函数`)}else{let e=n.querySelector(`#login-panel-new > div`);(!e||e&&e.children.length)&&G.error(`未找到登录弹出的关闭按钮，此时键盘被聚焦在登录弹窗上从而导致'快捷键'失效`,n.cloneNode(!0))}}let r=J(`body > div > div:contains('为保障更好的访问体验，请在登录后继续使用抖音')`);if(r){let e=H.getReactInstance(r)?.reactProps?.onClick;typeof e==`function`?e(new Event(`click`)):G.error(`监听到【为保障更好的访问体验，请在登录后继续使用抖音】但是关闭失败，原因：未获取到onClick函数`)}}),r=H.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{n.run()}});return[q(`div[id^="login-full-panel-"]`,`.douyin_login_iframe:has(iframe)`),()=>{r.disconnect()},e.destory,t.destory]},watchCommentDialogToClose(){let e=new H.LockFunction(()=>{let e=J(`[id^="related-video-card-login-guide"]`);if(!e)return;let t=e.querySelector(`.related-video-card-login-guide__footer-close`);t?t.click():G.error(`监听到评论区的登录遮罩层但是未获取到关闭按钮`)}),t=H.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{e.run()}});return[q(`[id^="related-video-card-login-guide"]`),K(`
        /* 去除遮罩层 */
        [id^="related-video-card-login-guide"]+div{
          filter: none !important;
        }
      `),()=>{t?.disconnect()}]}},Fr={key:`douyin-live-danmu-rule`,$data:{rule:[],block_gift:!1,block_lucky_bag:!1,block_emoji:!1,block_room_message:!1},init(){this.initRule(),[{key:`live-danmu-shield-gift`,callback:e=>this.$data.block_gift=e},{key:`live-danmu-shield-lucky-bag`,callback:e=>this.$data.block_lucky_bag=e},{key:`live-message-shield-method-emoji-chat`,callback:e=>this.$data.block_emoji=e},{key:`live-message-shield-room-message`,callback:e=>this.$data.block_room_message=e}].forEach(e=>{V.addValueChangeListener(e.key,(t,n)=>{e.callback(n)},{immediate:!0})})},initRule(){this.$data.rule.length=0,this.get().trim().split(`
`).forEach(e=>{if(e.trim()==``)return;e=e.trim();let t=new RegExp(e.trim());this.$data.rule.push(t)})},change(){this.execMessageFilterWithNode(Array.from(Y(`#chatroom .webcast-chatroom .webcast-chatroom___item:not([data-is-filter])`)))},execMessageFilterWithNode(e){for(let t=0;t<e.length;t++){let n=e[t],r=H.getReactInstance(n),i=r?.reactFiber?.return?.memoizedProps?.message||r?.reactFiber?.memoizedProps?.children?.props?.children?.props?.message||r?.reactContainer?.memoizedState?.element?.props?.message;typeof i==`object`&&i&&this.checkMessageFilter(i)&&(n.setAttribute(`data-is-filter`,`true`),U.remove(n))}},checkMessageFilter(e,t){let n=e?.payload,r=n?.content||n?.common?.describe;t??=e?.method;let i=n?.chat_by,a=n?.biz_scene,o=n?.public_area_common||{},s=!1;return s||(t===`WebcastGiftMessage`?this.$data.block_gift&&(s=!0):t===`WebcastChatMessage`?(i===`9`||i===`10`||Object.keys(o?.individual_strategy_result||{}).length!==0)&&this.$data.block_lucky_bag&&(s=!0):t===`WebcastRoomMessage`?(this.$data.block_room_message&&(s=!0),a===`live_recommend`||n?.system_top_msg):t===`WebcastFansclubMessage`||t===`WebcastEmojiChatMessage`&&this.$data.block_emoji&&(s=!0)),s||=typeof r==`string`&&this.$data.rule.some(e=>{if(r.match(e))return!0}),s},set(e){Un(this.key,e)},get(){return Rn(this.key,``)}},Ir={filterMessage(){G.info(`消息过滤`);let e=new H.LockFunction(()=>{Z.isLive()&&Fr.change()});Fr.init();let t=H.mutationObserver(document.body,{config:{childList:!0,subtree:!0},immediate:!0,callback:()=>{e.run()}});return[K(`
				/* 修复一下聊天室屏蔽了某些聊天导致上下抖动不停 */
				.webcast-chatroom___list > div{
					height: 100% !important;
				}
			`),()=>t.disconnect()]},execFilter(e,t){return Fr.checkMessageFilter(e,t)}},Lr={$data:{document_addEventListener:[],element_addEventListener:[],setTimeout:[],setInterval:[],function_apply:[],function_call:[],defineProperty:[]},document_addEventListener(e){if(this.$data.document_addEventListener.push(e),G.info(`document.addEventListener hook新增劫持判断回调`),this.$data.document_addEventListener.length>1)return;let t=this,n=new WeakMap,r=L.document.addEventListener,i=L.document.removeEventListener;L.document.addEventListener=function(...e){let i=this,a=e[0],o=e[1],s=e[2];for(let r=0;r<t.$data.document_addEventListener.length;r++){let c=t.$data.document_addEventListener[r],l=Reflect.apply(c,this,[i,a,o,s]);if(typeof l==`function`){e[1]=l,n.set(o,{eventName:a,fn:l,options:s});break}if(typeof l==`boolean`&&!l)return}return Reflect.apply(r,this,e)},L.document.removeEventListener=function(...e){let t=e[0],r=e[1],a=e[2];if(n.has(r)){let{eventName:i,fn:o,options:s}=n.get(r),c=!1;t===i&&(typeof a==`boolean`&&a===s||typeof a==`object`&&typeof s==`object`&&a.capture===s.capture||a==a)&&(c=!0),c&&(e[1]=o)}return Reflect.apply(i,this,e)}},element_addEventListener(e){if(this.$data.element_addEventListener.push(e),G.info(`Element.prototype.addEventListener hook新增劫持判断回调`),this.$data.element_addEventListener.length>1)return;let t=this,n=new WeakMap,r=L.Element.prototype.addEventListener,i=L.Element.prototype.removeEventListener;L.Element.prototype.addEventListener=function(...e){let i=this,a=e[0],o=e[1],s=e[2];for(let r=0;r<t.$data.element_addEventListener.length;r++){let c=t.$data.element_addEventListener[r],l=Reflect.apply(c,this,[i,a,o,s]);if(typeof l==`function`){e[1]=l,n.set(o,{eventName:a,fn:l,options:s});break}if(typeof l==`boolean`&&!l)return}return Reflect.apply(r,this,e)},L.Element.prototype.removeEventListener=function(...e){let t=e[0],r=e[1],a=e[2];if(n.has(r)){let{eventName:i,fn:o,options:s}=n.get(r),c=!1;i===t&&(typeof a==`boolean`&&a===s||typeof a==`object`&&typeof s==`object`&&a.capture===s.capture||a==s)&&(c=!0),c&&(e[1]=o)}return Reflect.apply(i,this,e)}},setTimeout(e){if(this.$data.setTimeout.push(e),G.info(`window.setTimeout hook新增劫持`),this.$data.setTimeout.length>1)return;let t=this,n=L.setTimeout;L.setTimeout=function(...e){let r=e[0],i=e[1];for(let n=0;n<t.$data.setTimeout.length;n++){let a=t.$data.setTimeout[n],o=a(r,i);if(typeof o==`boolean`&&!o)return;if(typeof o==`function`){e[0]=o;break}}return Reflect.apply(n,this,e)}},setInterval(e){if(this.$data.setInterval.push(e),G.info(`window.setInterval hook新增劫持`),this.$data.setInterval.length>1)return;let t=this,n=L.setInterval;L.setInterval=function(...e){let r=e[0],i=e[1];for(let n=0;n<t.$data.setInterval.length;n++){let a=t.$data.setInterval[n],o=a(r,i);if(typeof o==`boolean`&&!o)return;if(typeof o==`function`){e[0]=o;break}}return Reflect.apply(n,this,e)}},function_apply(e){if(this.$data.function_apply.push(e),G.info(`Function.prototype.apply hook新增劫持`),this.$data.function_apply.length>1)return;let t=this,n=L.Function.prototype.apply;L.Function.prototype.apply=function(...e){let r=e[0],i=e[1],a=this;for(let n=0;n<t.$data.function_apply.length;n++){let o=t.$data.function_apply[n];if(typeof o.paramsHandler==`function`){let t=o.paramsHandler(a,r,i,e);if(t!=null){if(t.args&&(`thisArg`in t.args&&(e[0]=t.args.thisArg),`argArray`in t.args&&(e[1]=t.args.argArray),typeof t.args.fn==`function`&&(a=t.args.fn)),t.preventDefault)return`result`in t?t.result:void 0;break}}}let o=n.call(a,...e);for(let n=0;n<t.$data.function_apply.length;n++){let r=t.$data.function_apply[n];if(typeof r.returnsHandler==`function`){let t=r.returnsHandler(a,e[0],e[1],o,e);t!=null&&`result`in t&&(o=t.result)}}return o}},function_call(e){if(this.$data.function_call.push(e),G.info(`Function.prototype.call hook新增劫持`),this.$data.function_call.length>1)return;let t=this,n=L.Function.prototype.call;L.Function.prototype.call=function(...e){let r=e[0],i=e.slice(1),a=this;for(let n=0;n<t.$data.function_call.length;n++){let o=t.$data.function_call[n];if(typeof o.paramsHandler==`function`){let t=o.paramsHandler(a,r,i,e);if(t!=null){if(t.args&&(`thisArg`in t.args&&(e[0]=t.args.thisArg),`argArray`in t.args&&e.splice(1,i.length,...t.args.argArray),typeof t.args.fn==`function`&&(a=t.args.fn)),t.preventDefault)return`result`in t?t.result:void 0;break}}}let o=n.apply(a,e);for(let n=0;n<t.$data.function_call.length;n++){let r=t.$data.function_call[n];if(typeof r.returnsHandler==`function`){let t=r.returnsHandler(a,e[0],e[1],o,e);t!=null&&`result`in t&&(o=t.result)}}return o}},defineProperty(e){if(this.$data.defineProperty.push(e),G.info(`Object.defineProperty hook新增劫持`),this.$data.defineProperty.length>1)return;let t=this,n=L.Object.defineProperty;L.Object.defineProperty=function(...e){let r=e[0],i=e[1],a=e[2];for(let n=0;n<t.$data.defineProperty.length;n++){let o=t.$data.defineProperty[n],s=o(r,i,a);if(s!=null){e[0]=s.target,e[1]=s.key,e[2]=s.attributes;break}}return Reflect.apply(n,this,e)}},window_webpack(e=`webpackJsonp`,t,n){let r;Dr.Object.defineProperty(L,e,{get(){return r},set(e){r=e;let i=e.push;e.push=function(...e){let r=e[0][0],a=!1;if(typeof t==`function`){let e=t(r);typeof e==`boolean`&&(a=e)}else a=t==r,a||Array.isArray(t)&&Array.isArray(r)&&(a=JSON.stringify(t)===JSON.stringify(r));if(a){let t=e[0][1];Dr.Object.keys(t).forEach(r=>{let i=t[r];typeof i==`function`&&(e[0][1][r]=function(...e){let t=i.call(this,...e),r=e[0];return e[0]=n(r),t})})}return i.call(this,...e)}}})}},Rr={$data:{hookElementAddEventListener:[]},init(){V.execMenuOnce(`hookKeyboard`,()=>Rr.hookKeyboard()),V.execMenu(`dy-cookie-remove__ac__`,()=>{this.removeCookie()})},removeCookie(){[`__ac_signature`,`__ac_referer`,`__ac_nonce`].forEach(e=>{Or.delete({name:e,firstPartyDomain:``},t=>{t?G.error(`移除Cookie失败 ==> ${e}`,t):G.success(`移除Cookie成功 ==> ${e}`)})})},hookKeyboard(){let e=e=>{let t=document.activeElement?.shadowRoot?.activeElement,n=e??t??document.activeElement;return!!(n==null||[`input`,`textarea`].includes(n?.tagName?.toLowerCase())||n?.closest(`.DraftEditor-editorContainer`)||n?.closest(`.im-richtext-container`)||n?.closest(`.comment-input-container`)||n?.closest(`.danmakuInputContainer`)||n?.closest(`.pops`)&&n?.getRootNode()instanceof ShadowRoot||n?.closest(`[contenteditable]`))},t,n=n=>{let r=!1,i=n.code,a=[];if(n.ctrlKey&&a.push(`ctrl`),n.altKey&&a.push(`alt`),n.metaKey&&a.push(`meta`),n.shiftKey&&a.push(`shift`),e())return r=!1,r;let o=[{enableKey:`dy-keyboard-hook-likeOrDislike`,code:[`KeyZ`,`Space`],callback(n){if(n.code===`KeyZ`)return!0;if(n.code===`Space`&&!(Z.isChat()||Z.isLive())&&(H.workerClearTimeout(t),!e()))return t=H.workerSetTimeout(()=>{let e=Nr.getInViewVideo(),t=Nr.getInViewPlayButton();if(!e.length&&!t.length){G.error(`未找到在可视区域内的视频或播放按钮`);return}let n=e[0],r=t[0];if(n){let t=e[0].$el;t.paused?(G.info(`当前视频处于暂停状态，开始播放`),t.play()):(G.info(`当前视频处于播放状态，暂停播放`),t.pause())}else{let e=r.$el;G.info(`当前视频播放按钮状态：${r.state}，点击切换状态`,e),e.click()}},250),!0}},{enableKey:`dy-keyboard-hook-comment`,code:[`KeyX`]},{enableKey:`dy-keyboard-hook-danmaku-enable`,code:[`KeyB`]},{enableKey:`dy-keyboard-hook-collect-enable`,code:[`KeyC`]},{enableKey:`dy-keyboard-hook-copyShareLink`,code:[`KeyV`]},{enableKey:`dy-keyboard-hook-clearScreen`,code:[`KeyJ`]},{enableKey:`dy-keyboard-hook-automaticBroadcast`,code:[`KeyK`]},{enableKey:`dy-keyboard-hook-videoInfo`,code:[`KeyI`]},{enableKey:`dy-keyboard-hook-notInterested`,code:[`KeyR`]},{enableKey:`dy-keyboard-hook-enterAuthorHomePage`,code:[`KeyF`]},{enableKey:`dy-keyboard-hook-follow`,code:[`KeyG`]},{enableKey:`dy-keyboard-hook-search`,code:[`KeyF`],otherCodeList:[`shift`]},{enableKey:`dy-keyboard-hook-closeTheCurrentPageWithOneClick`,code:[`KeyQ`],otherCodeList:[`shift`]},{enableKey:`dy-keyboard-hook-pageUpAndDown`,code:[`ArrowUp`,`ArrowDown`]},{enableKey:`dy-keyboard-hook-fastForwardAndFastBack`,code:[`ArrowLeft`,`ArrowRight`]},{enableKey:`dy-keyboard-hook-pause`,code:[`Space`]},{enableKey:`dy-keyboard-hook-fullScreenInsideThePage`,code:[`KeyY`]},{enableKey:`dy-keyboard-hook-fullScreen`,code:[`KeyH`]},{enableKey:`dy-keyboard-hook-watchItOutLater`,code:[`KeyL`]},{enableKey:`dy-keyboard-hook-volumeAdjustment`,code:[`Minus`],otherCodeList:[`shift`]},{enableKey:`dy-keyboard-hook-listOfCallShortcutKeys`,code:[`Slash`],otherCodeList:[`shift`]},{enableKey:`dy-keyboard-hook-closeTheShortcutKeyList`,code:[`Escape`]},{enableKey:`dy-keyboard-hook-relevantRecommendation`,code:[`KeyN`]},{enableKey:`dy-keyboard-hook-listenToDouyin`,code:[`KeyT`]},{enableKey:`dy-keyboard-hook-smallWindowPlay`,code:[`KeyU`]},{enableKey:`dy-keyboard-hook-recommendVideo`,code:[`KeyP`]}],s=[];Z.isIndex()?s.push({enableKey:`dy-keyboard-hook-arrowUp-w`,code:[`KeyW`]},{enableKey:`dy-keyboard-hook-arrowDown-s`,code:[`KeyS`]},{enableKey:`dy-keyboard-hook-videoRewind`,code:[`KeyA`]},{enableKey:`dy-keyboard-hook-videoFastForward`,code:[`KeyD`]}):Z.isLive()&&(s.push({enableKey:`dy-live-threeScreen`,code:[`KeyS`]},{enableKey:`dy-live-refresh`,code:[`KeyR`]},{enableKey:`dy-live-screenRotation`,code:[`KeyD`]},{enableKey:`dy-live-enableSmallWindowMode`,code:[`KeyU`]},{enableKey:`dy-live-switchLiveRoom`,code:[`ArrowUp`,`ArrowDown`]},{enableKey:`dy-live-quickGift`,code:[`KeyE`]}),o=H.uniqueArray(o,s,(e,t)=>e.code.toSorted().toString()===t.code.toSorted().toString())),o=s.concat(o);for(let e=0;e<o.length;e++){let t=o[e];if(t.code.includes(i)){if(Array.isArray(t.otherCodeList)&&t.otherCodeList.find(e=>!a.includes(e))||!V.getValue(t.enableKey)||typeof t.callback==`function`&&t.callback({code:i,otherCodeList:a,keyboardEvent:n})==null)continue;r=!0;break}}return r};return U.on(document,`keydown`,e=>{Reflect.get(e,`disableHook`)||n(e)&&U.preventEvent(e,!0)},{capture:!0,overrideTarget:!1}).off},liveMessage(){G.info(`对直播消息过滤的劫持`),Lr.window_webpack(`webpackChunkdouyin_live_v2`,()=>!0,e=>(e==null||typeof e?.exports!=`object`||e?.exports==null||e.loaded||Dr.Object.values(e?.exports).forEach(t=>{if(typeof t==`function`&&typeof t.prototype?.start==`function`&&typeof t.prototype?.pause==`function`&&typeof t.prototype?.stop==`function`&&typeof t.prototype?.registerPublisher==`function`&&typeof t.prototype?.unregisterPublisher==`function`&&typeof t.prototype?.destroy==`function`&&typeof t.prototype?.getPlugin==`function`&&typeof t.prototype?.registerPlugin==`function`&&typeof t.prototype?.unregisterPlugin==`function`){G.success(`success hook live webpack：${e.id}`);let n=t?.VERSION;G.success(`version：${n}`);let r=t.prototype.start;t.prototype.start=function(...e){let t=this?.decoder;if(typeof t?.decode==`function`){G.success(`hook live message decode success`);let e=t?.decode;this.decoder.decode=async function(...t){let[,n]=t,r=await Reflect.apply(e,this,t),i=await Ir.execFilter({payload:r},n);if(typeof i==`boolean`&&i)G.success(`过滤：`,r);else return r}}if(typeof r==`function`)return Reflect.apply(r,this,e)}}}),e))},async hookLiveMessageDecoder(){Fr.init();let e=await U.wait(()=>{let e=unsafeWindow.__MESSAGE_INSTANCE__?.decoder;return{data:e,success:typeof e?.decode==`function`}},5e3);if(!e)return G.warn(`can't find live message decoder`),Ir.filterMessage();G.success(`hook live message decode success`);let t=e?.decode;return e.decode=async function(...e){let[n,r]=e,i=await Reflect.apply(t,this,e),a=await Ir.execFilter({payload:i},r);return typeof a==`boolean`&&a?{}:i},[()=>{e.decode=t}]}},zr={init(){V.exec([`shieldLeftNavigator`,`search-shieldLeftNavigator`],()=>this.shieldLeftNavigator(),e=>{let[t,n]=e,r=V.getValue(t),i=V.getValue(n);if(Z.isSearch()){if(i==1)return!0;if(i==0)return!1}return r}),V.execMenuOnce(`shieldLeftNavigator-tab-home`,()=>this.block_tab_home()),V.execMenuOnce(`shieldLeftNavigator-tab-recommend`,()=>this.block_tab_recommend()),V.execMenuOnce(`shieldLeftNavigator-tab-follow`,()=>this.block_tab_follow()),V.execMenuOnce(`shieldLeftNavigator-tab-friend`,()=>this.block_tab_friend()),V.execMenuOnce(`shieldLeftNavigator-tab-user_self`,()=>this.block_tab_user_self()),V.execMenuOnce(`shieldLeftNavigator-tab-live`,()=>this.block_tab_live()),V.execMenuOnce(`shieldLeftNavigator-tab-vs`,()=>this.block_tab_vs()),V.execMenuOnce(`shieldLeftNavigator-tab-series`,()=>this.block_tab_series()),V.execMenuOnce(`shieldLeftNavigator-tab-microgame`,()=>this.block_tab_microgame()),V.execMenuOnce(`shieldLeftNavigator-tab-ai-search`,()=>this.block_tab_ai_search()),V.execMenuOnce(`shieldLeftNavigator-tab-activity`,()=>this.block_tab_activity()),V.execMenuOnce(`shieldLeftNavigator-panel-menu-setting`,()=>this.block_panel_menu_setting()),V.execMenuOnce(`shieldLeftNavigator-panel-menu-about`,()=>this.block_panel_menu_about()),V.execMenuOnce(`shieldLeftNavigator-panel-menu-q_a`,()=>this.block_panel_menu_q_a()),V.execMenuOnce(`shieldLeftNavigator-panel-menu-survey`,()=>this.block_panel_menu_survey())},shieldLeftNavigator(){G.info(`【屏蔽】左侧导航栏`);let e=[];return e.push(q(`#douyin-navigation`)),e.push(K(`
			/* 修复顶部导航栏的宽度 */
			#douyin-header{
				width: 100%;
			}`)),e},block_tab_home(){return G.info(`【屏蔽】精选`),q(`[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-discover)`)},block_tab_recommend(){return G.info(`【屏蔽】推荐`),q(`[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-recommend)`)},block_tab_ai_search(){return G.info(`【屏蔽】AI搜索/抖音`),q(`[data-e2e="douyin-navigation"] > div > div > div > div:has([class^="tab-aisearch"])`)},block_tab_follow(){return G.info(`【屏蔽】关注`),q(`[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-follow)`)},block_tab_friend(){return G.info(`【屏蔽】朋友`),q(`[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-friend)`)},block_tab_user_self(){return G.info(`【屏蔽】我的`),q(`[data-e2e="douyin-navigation"] > div > div > div > div > div:has(.tab-user_self)`)},block_tab_activity(){return G.info(`【屏蔽】activity`),q(`[data-e2e="douyin-navigation"] > div > div > div > div:has([class^="tab-activity_"])`)},block_tab_live(){return G.info(`【屏蔽】直播`),q(`[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-live)`)},block_tab_vs(){return G.info(`【屏蔽】放映厅`),q(`[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-vs)`)},block_tab_series(){return G.info(`短剧`),q(`[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-series)`)},block_tab_microgame(){return G.info(`【屏蔽】小游戏`),q(`[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-microgame)`)},block_panel_menu_setting(){return G.info(`【屏蔽】设置`),q(`[data-e2e="douyin-navigation"] #panel-menu div:has(>#btn-feelgood) > div:has(path[d="M13.6032 3.57455L13.6012 3.5734C13.1238 3.29458 12.5424 3.17798 12.003 3.17798C11.4626 3.17798 10.8801 3.29506 10.4003 3.57252L10.4002 3.57256L5.91125 6.16801C5.8962 6.17671 5.88145 6.18593 5.86705 6.19566L5.84354 6.21152C5.45545 6.47347 5.12936 6.69357 4.8772 6.89334C4.615 7.10106 4.37899 7.32726 4.20899 7.62136C4.03466 7.92295 3.96491 8.23437 3.93338 8.55508C3.90423 8.8515 3.90425 9.20597 3.90427 9.6083V9.60833L3.90427 9.64131V14.3507L3.90427 14.3836V14.3837C3.90425 14.7881 3.90423 15.144 3.93334 15.4414C3.96481 15.7628 4.03439 16.0749 4.20852 16.377C4.37847 16.6719 4.61457 16.8985 4.877 17.1066C5.12925 17.3066 5.45543 17.5267 5.84343 17.7886L5.86705 17.8046C5.88145 17.8143 5.8962 17.8235 5.91125 17.8322L10.4002 20.4276C10.8801 20.7051 11.4625 20.8222 12.003 20.8222C12.5424 20.8222 13.1239 20.7056 13.6013 20.4267L13.6032 20.4257L18.0887 17.8322C18.1038 17.8235 18.1185 17.8143 18.1329 17.8046L18.1565 17.7887C18.5445 17.5267 18.8706 17.3066 19.1228 17.1069C19.385 16.8991 19.621 16.6729 19.791 16.3789C19.9653 16.0773 20.0351 15.7658 20.0666 15.4451C20.0957 15.1487 20.0957 14.7942 20.0957 14.3919V14.3919L20.0957 14.3589V9.64131L20.0957 9.60833V9.60831C20.0957 9.20598 20.0957 8.8515 20.0666 8.55508C20.0351 8.23437 19.9653 7.92295 19.791 7.62136C19.621 7.32726 19.385 7.10106 19.1228 6.89334C18.8706 6.69357 18.5445 6.47347 18.1564 6.21153L18.1329 6.19566C18.1185 6.18593 18.1038 6.17671 18.0887 6.16801L13.6032 3.57455ZM11.1512 4.87106C11.3488 4.75678 11.656 4.67798 12.003 4.67798C12.3506 4.67798 12.6538 4.75694 12.8454 4.86907L12.8454 4.86908L12.8489 4.87109L17.3153 7.45352C17.7211 7.72744 17.9929 7.91194 18.1913 8.06909C18.3882 8.22508 18.4583 8.31311 18.4923 8.37202C18.522 8.42343 18.5543 8.50378 18.5738 8.70186C18.5949 8.91616 18.5957 9.1962 18.5957 9.64131V14.3589C18.5957 14.804 18.5949 15.0841 18.5738 15.2983C18.5543 15.4964 18.522 15.5768 18.4923 15.6282C18.4583 15.6871 18.3882 15.7751 18.1913 15.9311C17.9929 16.0883 17.7211 16.2728 17.3153 16.5467L12.8489 19.1291L12.8489 19.1291L12.8454 19.1311C12.6538 19.2433 12.3506 19.3222 12.003 19.3222C11.656 19.3222 11.3488 19.2434 11.1512 19.1292L11.1511 19.1291L6.68465 16.5467C6.27885 16.2727 6.00712 16.0883 5.80886 15.9311C5.61219 15.7752 5.54221 15.6871 5.50811 15.628C5.47819 15.5761 5.44575 15.4948 5.42621 15.2952C5.4051 15.0796 5.40427 14.7978 5.40427 14.3507V9.64131C5.40427 9.1962 5.40511 8.91616 5.42618 8.70186C5.44565 8.50378 5.47793 8.42343 5.50764 8.37202C5.54169 8.31311 5.61175 8.22508 5.80866 8.06909C6.00703 7.91194 6.27888 7.72744 6.68464 7.45352L11.1511 4.87109L11.1512 4.87106ZM10.029 12C10.029 10.9114 10.9114 10.0289 12 10.0289C13.0886 10.0289 13.9711 10.9114 13.9711 12C13.9711 13.0886 13.0886 13.971 12 13.971C10.9114 13.971 10.029 13.0886 10.029 12ZM12 8.52893C10.083 8.52893 8.52896 10.083 8.52896 12C8.52896 13.917 10.083 15.471 12 15.471C13.917 15.471 15.4711 13.917 15.4711 12C15.4711 10.083 13.917 8.52893 12 8.52893Z"])`)},block_panel_menu_about(){return G.info(`【屏蔽】关于`),q(`[data-e2e="douyin-navigation"] #panel-menu div:has(>#btn-feelgood) > div:has(path[d="M5.68365 7.62549C5.68365 6.55301 6.55307 5.68359 7.62555 5.68359C8.69803 5.68359 9.56744 6.55301 9.56744 7.62549C9.56744 8.69797 8.69803 9.56738 7.62555 9.56738C6.55307 9.56738 5.68365 8.69797 5.68365 7.62549ZM7.62555 4.18359C5.72464 4.18359 4.18365 5.72458 4.18365 7.62549C4.18365 9.52639 5.72464 11.0674 7.62555 11.0674C9.52645 11.0674 11.0674 9.52639 11.0674 7.62549C11.0674 5.72458 9.52645 4.18359 7.62555 4.18359ZM5.68365 16.3741C5.68365 15.3017 6.55307 14.4322 7.62555 14.4322C8.69803 14.4322 9.56744 15.3017 9.56744 16.3741C9.56744 17.4466 8.69803 18.316 7.62555 18.316C6.55307 18.316 5.68365 17.4466 5.68365 16.3741ZM7.62555 12.9322C5.72464 12.9322 4.18365 14.4732 4.18365 16.3741C4.18365 18.275 5.72464 19.816 7.62555 19.816C9.52646 19.816 11.0674 18.275 11.0674 16.3741C11.0674 14.4732 9.52646 12.9322 7.62555 12.9322ZM16.3741 5.68359C15.3017 5.68359 14.4322 6.55301 14.4322 7.62549C14.4322 8.69797 15.3017 9.56738 16.3741 9.56738C17.4466 9.56738 18.316 8.69797 18.316 7.62549C18.316 6.55301 17.4466 5.68359 16.3741 5.68359ZM12.9322 7.62549C12.9322 5.72458 14.4732 4.18359 16.3741 4.18359C18.275 4.18359 19.816 5.72458 19.816 7.62549C19.816 9.52639 18.275 11.0674 16.3741 11.0674C14.4732 11.0674 12.9322 9.52639 12.9322 7.62549ZM14.4322 16.3741C14.4322 15.3017 15.3017 14.4322 16.3741 14.4322C17.4466 14.4322 18.316 15.3017 18.316 16.3741C18.316 17.4466 17.4466 18.316 16.3741 18.316C15.3017 18.316 14.4322 17.4466 14.4322 16.3741ZM16.3741 12.9322C14.4732 12.9322 12.9322 14.4732 12.9322 16.3741C12.9322 18.275 14.4732 19.816 16.3741 19.816C18.275 19.816 19.816 18.275 19.816 16.3741C19.816 14.4732 18.275 12.9322 16.3741 12.9322Z"])`)},block_panel_menu_q_a(){return G.info(`【屏蔽】问题/反馈`),q(`[data-e2e="douyin-navigation"] #panel-menu div:has(>#btn-feelgood) > div:has(path[d="M11.9999 4.75C7.99575 4.75 4.74976 7.99599 4.74976 12.0001C4.74976 16.0043 7.99575 19.2502 11.9999 19.2502C16.004 19.2502 19.25 16.0043 19.25 12.0001C19.25 10.5774 18.841 9.2525 18.1344 8.13394C16.8488 6.0989 14.5816 4.75 11.9999 4.75ZM3.24976 12.0001C3.24976 7.16756 7.16732 3.25 11.9999 3.25C15.1176 3.25 17.8537 4.88105 19.4025 7.33284C20.2561 8.68408 20.75 10.2856 20.75 12.0001C20.75 16.8327 16.8324 20.7502 11.9999 20.7502C7.16732 20.7502 3.24976 16.8327 3.24976 12.0001ZM8.25 10C8.25 7.92894 9.92894 6.25 12 6.25C14.0711 6.25 15.75 7.92894 15.75 10C15.75 11.8142 14.4617 13.3275 12.75 13.675V14.5H11.25V13C11.25 12.5858 11.5858 12.25 12 12.25C13.2426 12.25 14.25 11.2426 14.25 10C14.25 8.75736 13.2426 7.75 12 7.75C10.7574 7.75 9.75 8.75736 9.75 10H8.25ZM13.25 16.5625C13.25 17.2528 12.6903 17.8125 12 17.8125C11.3097 17.8125 10.75 17.2528 10.75 16.5625C10.75 15.8722 11.3097 15.3125 12 15.3125C12.6903 15.3125 13.25 15.8722 13.25 16.5625Z"])`)},block_panel_menu_survey(){return G.info(`【屏蔽】用户体验调研`),q(`[data-e2e="douyin-navigation"] #panel-menu #btn-feelgood`)}},Br={init(){V.execMenuOnce(`shieldLeftNavigator-tab-follow-red-dot`,()=>this.tabFollowRedHot())},tabFollowRedHot(){return G.info(`【屏蔽】左侧导航栏关注右边的小红点`),q(`[data-e2e="douyin-navigation"] > div > div > div .tab-follow a > div:has(svg):nth-child(3)`,`[data-e2e="douyin-navigation"] > div > div > div .tab-follow a > div:nth-child(3):not(:has(>div>*))`)}},Vr={init(){V.execMenuOnce(`shieldSearch`,()=>this.shieldSearch()),V.execMenuOnce(`blockSearchButton`,()=>this.blockSearchButton()),V.execMenuOnce(`blockSearchSuggestion`,()=>this.blockSearchSuggestion()),V.execMenuOnce(`shieldSearchPlaceholder`,()=>this.shieldSearchPlaceholder()),V.execMenuOnce(`shieldSearchGuessYouWantToSearch`,()=>this.shieldSearchGuessYouWantToSearch()),V.execMenuOnce(`shieldSearchTiktokHotspot`,()=>this.shieldSearchTiktokHotspot())},shieldSearch(){return G.info(`【屏蔽】搜索框`),q(`#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div:has(input[data-e2e="searchbar-input"])`)},blockSearchButton(){return G.info(`【屏蔽】搜索按钮`),q(`div:empty:has(+button[data-e2e="searchbar-button"])`,`button[data-e2e="searchbar-button"]`)},blockSearchSuggestion(){return G.info(`【屏蔽】搜索建议`),q(`button[data-e2e="searchbar-button"]+div:has([data-text])`)},shieldSearchPlaceholder(){G.info(`【屏蔽】搜索框的提示`);let e=[];return e.push(q(`#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div div:has( + input[data-e2e="searchbar-input"])`)),e.push(K(`
			#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div input[data-e2e="searchbar-input"]::placeholder{
				color: transparent;
			}`)),e},shieldSearchGuessYouWantToSearch(){return G.info(`【屏蔽】搜索-猜你想搜`),q(`button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-guess-container"])`,`button[data-e2e="searchbar-button"] + div div[data-e2e="search-guess-container"]`)},shieldSearchTiktokHotspot(){return G.info(`【屏蔽】搜索-抖音热点`),q(`button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-hot-container"])`,`button[data-e2e="searchbar-button"] + div div[data-e2e="search-hot-container"]`)}},Hr={init(){V.execMenuOnce(`shieldClientTip`,()=>this.shieldClientTip(),void 0,!0),V.execMenuOnce(`shieldFillingBricksAndStones`,()=>this.shieldFillingBricksAndStones(),void 0,!0),V.execMenuOnce(`shieldClient`,()=>this.shieldClient(),void 0,!0),V.execMenuOnce(`shieldQuickAccess`,()=>this.shieldQuickAccess(),void 0,!0),V.execMenuOnce(`shieldNotifitation`,()=>this.shieldNotifitation(),void 0,!0),V.execMenuOnce(`shieldPrivateMessage`,()=>this.shieldPrivateMessage(),void 0,!0),V.execMenuOnce(`shieldSubmission`,()=>this.shieldSubmission(),void 0,!0),V.execMenuOnce(`shieldWallpaper`,()=>this.shieldWallpaper(),void 0,!0),V.execMenuOnce(`shield-topNav-rightMenu`,()=>this.shieldRightMenu()),V.execMenuOnce(`shield-topNav-rightMenu-more`,()=>this.shieldRightMenuMore()),V.execMenuOnce(`shield-topNav-rightMenu-loginAvatar`,()=>this.shieldRightMenuLoginAvatar()),V.execMenuOnce(`shield-topNav-ai-search`,()=>this.shieldAISearch())},shieldTopNavigator(){G.info(`【屏蔽】顶部导航栏`);let e=[];return e.push(q(`#douyin-header`)),e.push(K(`
			/* 修复视频的高度 */
			#douyin-right-container{
				padding-top: 0px !important;
			}
			/* 兼容手机模式 */
			@media screen and (max-width: 550px)  and (orientation: portrait) {
				.is-mobile-pc{
					--header-height: 0px !important;
				}
			}
		`)),e.push(K(`
       /* pc端 or mobile端*/
      @media screen and ((min-width: 800px) or ((max-width: 550px) and (orientation: portrait))) {
        #slidelist{
          --recommend-video-slide-show-opt: 0px;
        }
        #slidelist .page-recommend-container{
          margin: 0px !important;
          height: calc(${window.innerHeight}px - var(--recommend-video-slide-show-opt)) !important;
          height: calc(round(nearest, 100dvh, 1px) - var(--recommend-video-slide-show-opt)) !important;
        }
        /* 当前播放的视频 */
        #slidelist .page-recommend-container:has([data-e2e="feed-active-video"]),
        /* 当前播放的直播 */
        #slidelist .page-recommend-container:has([data-e2e="feed-live"] [data-e2e="live-slider"]){
          margin-bottom: 12px !important;
        }
      }
			`)),Z.isSearch()&&e.push(K(`
				/* 把搜索顶部的工具栏置顶 */
				#search-content-area > div > div:nth-child(1) > div:nth-child(1){
					top: 0;
				}`)),e},shieldFillingBricksAndStones(){G.info(`【屏蔽】充钻石`);let e=[],t=`d="M12.8013 19.9762C12.3693 20.4436 11.6307 20.4436 11.1986 19.9762L3.11756 11.2346C2.74913 10.8361 2.72958 10.2274 3.07168 9.80599L6.92716 5.05714C7.13438 4.8019 7.44562 4.65369 7.77439 4.65369H16.2256C16.5544 4.65369 16.8656 4.8019 17.0728 5.05714L20.9283 9.80599C21.2704 10.2274 21.2508 10.8361 20.8824 11.2346L12.8013 19.9762ZM4.45944 10.4765L12 18.6334L19.5405 10.4765L16.031 6.15369H7.96901L4.45944 10.4765ZM16.0867 9.09336L16.0954 10.4557C15.3615 10.4557 14.6822 10.2315 14.1281 9.85065V12.5739C14.1281 13.9502 12.964 15.0659 11.5281 15.0659C10.0922 15.0659 8.9281 13.9502 8.9281 12.5739C8.9281 11.1976 10.0922 10.0819 11.5281 10.0819C11.6486 10.0819 11.7672 10.0897 11.8834 10.1049V11.4964C11.7713 11.4625 11.6519 11.4442 11.5281 11.4442C10.8771 11.4442 10.3494 11.95 10.3494 12.5739C10.3494 13.1978 10.8771 13.7036 11.5281 13.7036C12.179 13.7036 12.7067 13.1978 12.7067 12.5739V7.21604H14.1281C14.1281 8.25285 15.005 9.09336 16.0867 9.09336Z"`;return e.push(q(`div[id^="douyin-header-menu"] pace-island > div > div:has(path[${t}])`,`body .semi-portal .semi-portal-inner li.semi-dropdown-item:has(a[href*="douyin_recharge"])`)),Z.isSearch()?e.push(q(`div[id^="douyin-header-menu"] >  div > div > div:has(path[${t}])`)):Z.isLive()&&e.push(q(`#douyin-header pace-island[id^="island"] > div[class]:not([data-click]):has(div[data-e2e="something-button"]) > :has(path[d="M12.8013 19.9762C12.3693 20.4436 11.6307 20.4436 11.1986 19.9762L3.11756 11.2346C2.74913 10.8361 2.72958 10.2274 3.07168 9.80599L6.92716 5.05714C7.13438 4.8019 7.44562 4.65369 7.77439 4.65369H16.2256C16.5544 4.65369 16.8656 4.8019 17.0728 5.05714L20.9283 9.80599C21.2704 10.2274 21.2508 10.8361 20.8824 11.2346L12.8013 19.9762ZM4.45944 10.4765L12 18.6334L19.5405 10.4765L16.031 6.15369H7.96901L4.45944 10.4765ZM16.0867 9.09336L16.0954 10.4557C15.3615 10.4557 14.6822 10.2315 14.1281 9.85065V12.5739C14.1281 13.9502 12.964 15.0659 11.5281 15.0659C10.0922 15.0659 8.9281 13.9502 8.9281 12.5739C8.9281 11.1976 10.0922 10.0819 11.5281 10.0819C11.6486 10.0819 11.7672 10.0897 11.8834 10.1049V11.4964C11.7713 11.4625 11.6519 11.4442 11.5281 11.4442C10.8771 11.4442 10.3494 11.95 10.3494 12.5739C10.3494 13.1978 10.8771 13.7036 11.5281 13.7036C12.179 13.7036 12.7067 13.1978 12.7067 12.5739V7.21604H14.1281C14.1281 8.25285 15.005 9.09336 16.0867 9.09336Z"])`)),e},shieldClient(){G.info(`【屏蔽】客户端`);let e=[];return e.push(q(`#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container`,`div[id^="douyin-header-menu"] pace-island > div > div[aria-describedby]:has(a[download^="douyin-downloader"])`,`div[id^="douyin-header-menu"] pace-island > div > div[aria-describedby]:has(a[href*="/douyin-pc-web/"])`,`div[id^="douyin-header-menu"] pace-island > div > div:has(path[d="M18 18.75H6V17.25H18V18.75Z"])`)),Z.isSearch()?e.push(q(`div:has(> div[data-e2e="something-button"] path[d="M18.404 19.018h-12v-1.5h12v1.5zM11.654 13.457v-8.19h1.5v8.19l3.22-3.22 1.06 1.061-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5 1.06-1.06 3.22 3.22z"])`,`div[id^="douyin-header-menu"] >  div > div > div:has(a[download^="douyin-downloader"])`)):Z.isLive()&&e.push(q(`#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container:has(a)`,`#douyin-header pace-island[id^="island"] > div[class] span:has(a[download][href*="client"])`,`.semi-portal-inner .semi-dropdown-content .semi-dropdown-item:has(a[download][href*="client"])`)),e},shieldQuickAccess(){G.info(`【屏蔽】快捷访问`);let e=[];return e.push(q(`header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(.quick-access-nav-icon)`,`div[id^="douyin-header-menu"] pace-island > div > div:has(.quick-access-nav-icon)`)),Z.isSearch()?(e.push(q(`div:has(>div>div>.quick-access-nav-icon)`)),U.waitNode(`li.semi-dropdown-item[role="menuitem"]:contains("快捷访问")`,1e4).then(e=>{U.remove(e)})):Z.isLive(),e},shieldNotifitation(){G.info(`【屏蔽】通知`);let e=[];return e.push(q(`#douyin-right-container #douyin-header-menuCt pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M11.9998 4.50037C9.02034 4.50037 6.55167 6.81159 6.35561 9.78463L5.94855 15.9572H18.0507L17.6441 9.78506C17.4482 6.81184 14.9795 4.50037 11.9998 4.50037ZM7.85236 9.88334C7.99643 7.6987 9.81045 6.00037 11.9998 6.00037C14.1893 6.00037 16.0034 7.69888 16.1473 9.88365L16.4486 14.4572H7.55073L7.85236 9.88334Z"])`)),Z.isSearch()?e.push(q(`div[id^="douyin-header-menu"] >  div > div > ul:has(path[d="M11.9998 4.50037C9.02034 4.50037 6.55167 6.81159 6.35561 9.78463L5.94855 15.9572H18.0507L17.6441 9.78506C17.4482 6.81184 14.9795 4.50037 11.9998 4.50037ZM7.85236 9.88334C7.99643 7.6987 9.81045 6.00037 11.9998 6.00037C14.1893 6.00037 16.0034 7.69888 16.1473 9.88365L16.4486 14.4572H7.55073L7.85236 9.88334Z"])`)):Z.isLive()&&e.push(q(`div[id^="douyin-header-menu"] pace-island[id^="island"] > * > :has(path[d="M11.9998 4.50037C9.02034 4.50037 6.55167 6.81159 6.35561 9.78463L5.94855 15.9572H18.0507L17.6441 9.78506C17.4482 6.81184 14.9795 4.50037 11.9998 4.50037ZM7.85236 9.88334C7.99643 7.6987 9.81045 6.00037 11.9998 6.00037C14.1893 6.00037 16.0034 7.69888 16.1473 9.88365L16.4486 14.4572H7.55073L7.85236 9.88334Z"])`)),e},shieldPrivateMessage(){G.info(`【屏蔽】消息`);let e=[];return e.push(q(`#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])`,`.xgplayer >div:has(svg path[d="M11.348 18.245l6.883-11.841A1.6 1.6 0 0 0 16.847 4L3.13 4.007c-1.402 0-2.125 1.675-1.165 2.696L6.59 11.62a.1.1 0 0 1 .023.04l1.816 6.23c.394 1.35 2.213 1.572 2.92.355zM3.13 5.508L16.848 5.5c.03 0 .043.007.05.01a.11.11 0 0 1 .036.04.11.11 0 0 1 .016.051c0 .008 0 .022-.016.05l-6.882 11.84a.14.14 0 0 1-.026.035.048.048 0 0 1-.012.008.117.117 0 0 1-.06.007.117.117 0 0 1-.059-.021.046.046 0 0 1-.01-.011.142.142 0 0 1-.016-.04l-1.644-5.64 4.84-3.803c.184-.145.014-.433-.201-.342l-5.669 2.39-4.137-4.399a.141.141 0 0 1-.026-.034.045.045 0 0 1-.004-.014.116.116 0 0 1 .01-.06.116.116 0 0 1 .037-.05.045.045 0 0 1 .013-.005.141.141 0 0 1 .042-.005z"])`,`#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])`)),Z.isSearch()&&(G.info(`搜索-【屏蔽】私信`),e.push(q(`ul:has( div>div[data-e2e="im-entry"] )`,`div[id^="douyin-header-menu"] >  div > div > ul:has([data-e2e="im-entry"])`))),e},shieldSubmission(){G.info(`【屏蔽】投稿`);let e=[],t=`d="M11.3487 4.90125H11.3164H11.3164C10.2479 4.90124 9.40104 4.90124 8.71799 4.95587C8.01959 5.01173 7.42807 5.12824 6.88626 5.39747C5.95866 5.8584 5.20716 6.60991 4.74622 7.53751C4.477 8.07932 4.36048 8.67084 4.30462 9.36923C4.24999 10.0523 4.24999 10.8991 4.25 11.9677V12V12.0322C4.24999 13.1008 4.24999 13.9477 4.30462 14.6307C4.36048 15.3291 4.477 15.9206 4.74622 16.4624C5.20716 17.39 5.95866 18.1415 6.88626 18.6025C7.42807 18.8717 8.01959 18.9882 8.71799 19.0441C9.40104 19.0987 10.2479 19.0987 11.3164 19.0987H11.3487H12.6513H12.6836C13.7521 19.0987 14.599 19.0987 15.282 19.0441C15.9804 18.9882 16.5719 18.8717 17.1137 18.6025C18.0413 18.1415 18.7928 17.39 19.2538 16.4624C19.523 15.9206 19.6395 15.3291 19.6954 14.6307C19.75 13.9477 19.75 13.1008 19.75 12.0322V12V11.9677C19.75 10.8991 19.75 10.0523 19.6954 9.36923C19.6395 8.67084 19.523 8.07932 19.2538 7.53751C18.7928 6.60991 18.0413 5.8584 17.1137 5.39747C16.5719 5.12824 15.9804 5.01173 15.282 4.95587C14.599 4.90124 13.7521 4.90124 12.6836 4.90125H12.6513H11.3487ZM7.55376 6.74077C7.8529 6.59212 8.22981 6.4997 8.83757 6.45109C9.45382 6.4018 10.2407 6.40125 11.3487 6.40125H12.6513C13.7593 6.40125 14.5462 6.4018 15.1624 6.45109C15.7702 6.4997 16.1471 6.59212 16.4462 6.74077C17.0809 7.05614 17.5951 7.57033 17.9105 8.205C18.0591 8.50414 18.1515 8.88105 18.2002 9.48882C18.2494 10.1051 18.25 10.8919 18.25 12C18.25 13.108 18.2494 13.8949 18.2002 14.5111C18.1515 15.1189 18.0591 15.4958 17.9105 15.7949C17.5951 16.4296 17.0809 16.9438 16.4462 17.2592C16.1471 17.4078 15.7702 17.5002 15.1624 17.5488C14.5462 17.5981 13.7593 17.5987 12.6513 17.5987H11.3487C10.2407 17.5987 9.45382 17.5981 8.83757 17.5488C8.22981 17.5002 7.8529 17.4078 7.55376 17.2592C6.91909 16.9438 6.4049 16.4296 6.08952 15.7949C5.94088 15.4958 5.84846 15.1189 5.79985 14.5111C5.75056 13.8949 5.75 13.108 5.75 12C5.75 10.8919 5.75056 10.1051 5.79985 9.48882C5.84846 8.88105 5.94088 8.50414 6.08952 8.205C6.4049 7.57033 6.91909 7.05614 7.55376 6.74077ZM11.25 15V12.75H9V11.25H11.25V8.99997H12.75V11.25H15V12.75H12.75V15H11.25Z"`;return e.push(q(`div[id^="douyin-header-menu"] pace-island > div > div:has(path[${t}])`)),Z.isSearch()?e.push(q(`div[id^="douyin-header-menu"] >  div > div > div:has(path[${t}])`)):Z.isLive()&&e.push(q(`#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(ul[data-e2e="cooperate-list"])`)),e},shieldClientTip(){G.info(`【屏蔽】客户端提示`);let e=[];return e.push(q(`ul li div[data-e2e="something-button"] + div div:has(>a[download*="douyin-downloader"])`,`#douyin-header pace-island[id^="island_"] ul > div:has(>a[class][download])`,`#douyin-header pace-island[id^="island_"] ul[class] li div[data-e2e="im-entry"]  div>div div div:has(a[download][href])`,`#douyin-header header div[id^="douyin-header-menu"] pace-island[id^="island_"] .dy-tip-container div:has(+ #wallpaper-modal)`,`.imChatClientGuideDownloadBar`)),Z.isSearch()&&e.push(q(`div[id^="douyin-header-menu"] ul li div[data-e2e="im-entry"] div > div > div:has(>a[download*="douyin-downloader"])`,`div[id^="douyin-header-menu"] ul > div:has(>a[download*="douyin-downloader"])`)),e},shieldWallpaper(){G.info(`【屏蔽】壁纸`);let e=[];return e.push(q(`div[id^="douyin-header-menu"] pace-island > div > div:has(span.semi-icon path[d="M9.10335 4.79386C8.86882 4.64984 8.57425 4.64585 8.3359 4.78346C8.09755 4.92108 7.95372 5.17818 7.96117 5.4533L8.05873 9.05336L5.31808 11.3898C5.10864 11.5683 5.01381 11.8473 5.07104 12.1165C5.12826 12.3857 5.32833 12.6019 5.59229 12.6798L9.0463 13.6995L10.4215 17.028C10.5266 17.2824 10.7625 17.4588 11.0362 17.4875C11.3099 17.5163 11.5774 17.3929 11.7331 17.1659L13.3237 14.8471L16.4638 19.3577L17.6949 18.5007L14.6505 14.1276L17.3608 13.9168C17.6352 13.8954 17.8758 13.7255 17.9878 13.4741C18.0997 13.2226 18.065 12.9301 17.8972 12.7119L15.7022 9.85673L16.5462 6.35562C16.6107 6.08806 16.5234 5.80667 16.3189 5.62251C16.1144 5.43835 15.8254 5.38101 15.566 5.47312L12.1723 6.67838L9.10335 4.79386ZM9.56789 9.37117L9.49812 6.79649L11.693 8.14425C11.8862 8.26291 12.1227 8.28777 12.3364 8.21188L14.7635 7.34991L14.16 9.85382C14.1068 10.0743 14.1563 10.3069 14.2945 10.4867L15.8643 12.5286L13.2964 12.7284C13.0704 12.746 12.8644 12.8649 12.7361 13.0519L11.2792 15.1758L10.2957 12.7954C10.2091 12.5858 10.0324 12.4267 9.81491 12.3624L7.34469 11.6332L9.30473 9.96224C9.47729 9.81513 9.57403 9.59784 9.56789 9.37117Z"])`)),Z.isSearch()?e.push(q(`div[id^="douyin-header-menu"] >  div > div > div:has(span.semi-icon path[d="M9.10335 4.79386C8.86882 4.64984 8.57425 4.64585 8.3359 4.78346C8.09755 4.92108 7.95372 5.17818 7.96117 5.4533L8.05873 9.05336L5.31808 11.3898C5.10864 11.5683 5.01381 11.8473 5.07104 12.1165C5.12826 12.3857 5.32833 12.6019 5.59229 12.6798L9.0463 13.6995L10.4215 17.028C10.5266 17.2824 10.7625 17.4588 11.0362 17.4875C11.3099 17.5163 11.5774 17.3929 11.7331 17.1659L13.3237 14.8471L16.4638 19.3577L17.6949 18.5007L14.6505 14.1276L17.3608 13.9168C17.6352 13.8954 17.8758 13.7255 17.9878 13.4741C18.0997 13.2226 18.065 12.9301 17.8972 12.7119L15.7022 9.85673L16.5462 6.35562C16.6107 6.08806 16.5234 5.80667 16.3189 5.62251C16.1144 5.43835 15.8254 5.38101 15.566 5.47312L12.1723 6.67838L9.10335 4.79386ZM9.56789 9.37117L9.49812 6.79649L11.693 8.14425C11.8862 8.26291 12.1227 8.28777 12.3364 8.21188L14.7635 7.34991L14.16 9.85382C14.1068 10.0743 14.1563 10.3069 14.2945 10.4867L15.8643 12.5286L13.2964 12.7284C13.0704 12.746 12.8644 12.8649 12.7361 13.0519L11.2792 15.1758L10.2957 12.7954C10.2091 12.5858 10.0324 12.4267 9.81491 12.3624L7.34469 11.6332L9.30473 9.96224C9.47729 9.81513 9.57403 9.59784 9.56789 9.37117Z"])`)):Z.isLive()&&e.push(q(`#douyin-header header div[id^="douyin-header-menu"] pace-island[id^="island_"] .dy-tip-container:has(span.semi-icon)`,`#douyin-header pace-island[id^="island"] > div[class] span:has(.semi-icon)`)),e},shieldRightMenu(){return G.info(`【屏蔽】顶部右侧的菜单栏`),[q(`div[id^="douyin-header-menu"]`),K(`
      #douyin-header header>[data-click="doubleClick"]{
          margin-right: 0px !important;
      }
      #douyin-header header div:has(+[id^="douyin-header-menu"]){
          margin: auto !important;
          left: 0 !important;
          right: 0 !important;
      }
      `)]},shieldRightMenuMore(){return G.info(`【屏蔽】更多`),q(`#douyin-header header div[id^="douyin-header-menu"] pace-island > div > div:has(path[d="M17 8.75H7V7.25H17V8.75ZM17 12.75H7V11.25H17V12.75ZM7 16.75H17V15.25H7V16.75Z"])`)},shieldRightMenuLoginAvatar(){return G.info(`【屏蔽】登录头像`),q(`#douyin-header header div[id^="douyin-header-menu"] pace-island > div > div:has(path[d="M6.484 43.177c4.765-5.408 11.743-8.821 19.517-8.821 7.775 0 14.753 3.413 19.517 8.821C40.754 48.587 33.776 52 26.001 52c-7.774 0-14.752-3.413-19.517-8.822zM35.287 21.356a9.286 9.286 0 1 1-18.571 0 9.286 9.286 0 0 1 18.571 0z"])`,`#douyin-header header div[id^="douyin-header-menu"] pace-island > div > div:has([data-e2e="live-avatar"])`)},shieldAISearch(){return G.info(`【屏蔽】AI搜索/抖音`),q(`#douyin-header header div:has(>svg g[clip-path*="aiSearch"])`)}},Ur={init(){}},Wr={init(){zr.init(),Br.init(),Hr.init(),Vr.init(),Ur.init(),V.execMenuOnce(`block-continue-watching-phone-watching-live`,()=>this.continueWatchingPhoneWatchingLive())},continueWatchingPhoneWatchingLive(){return G.info(`【屏蔽】是否续播手机在看的直播？`),q(`#douyin-header>div:nth-child(2):has([aria-label*="直播"]):not(header)>div:first-child:not(:empty)`)}},Gr={init(){}},Kr=`/* 从顶部往下弹出的下载抖音电脑版的drawer提示 */\r
#douyin-web-download-guide-container\r
/* 视频信息区域的 及时接收作品更新提醒 下载电脑客户端 */\r
/* 但是这个CSS又会屏蔽右键菜单 */\r
/*.basePlayerContainer xg-bar.xg-right-bar + div:not(:has(>svg))*/ ,\r
/* 下载客户端，使用壁纸 */\r
div:has(+#wallpaper-modal),\r
/* 下载客户端，实时接收消息通知 */\r
/* 下载客户端，实时接收好友消息 */\r
div:has(> a[download*="douyin-downloade"]):has(+.popShadowAnimation),\r
div:has(> a[download*="douyin-downloade"]):has(+div>[data-e2e="listDlgTest-container"]),\r
/* 客户端登录访问更便捷 */\r
div:has(> a[download*="douyin-downloade"]):has(+.userMenuPanelShadowAnimation),\r
/* 前往电脑客户端，即享下载视频 */\r
[data-e2e="video-share-container"] div:has(>div>div> a[download*="douyin-downloader"]):first-child,\r
/* so.douyin.com的广告item */\r
.card-item:has(.h5-ad-video-card),\r
.card-item:has([data-is-ad="true"]),\r
/* 左侧导航栏的下面的下载抖音精选 */\r
[data-e2e="douyin-navigation"] div:has(>div:first-child>img[src*="douyin-pc-web"]),\r
/* 左上角顶部的 抖音精选 */\r
#douyin-navigation > a[href*="/jingxuan"]:empty,\r
/* 直播页面 左侧导航栏的下面的下载抖音精选 */\r
[data-e2e="douyin-navigation"] div:has(>div:only-child>img[src*="/webcast/douyin_live/media/"]),\r
[data-e2e="douyin-navigation"] div:only-child:has(>img[src*="/webcast/douyin_live/media/"]) {\r
  display: none !important;\r
}\r
`,qr={videoCommentDrawer:`videoCommentDrawer`},Jr=()=>{let e=Object.values(qr).find(e=>globalThis.location.hash.endsWith(e));e&&(globalThis.location.hash=``,G.success(`发现残留的手势返回hash，已清理 ==> `+e))},Yr={init(){V.execMenu(`douyin-redirect-url-home-to-root`,()=>{this.redirectUrlHomeToRoot()})},redirectUrlHomeToRoot(){window.location.pathname===`/home`&&(G.info(`从首页跳转到根目录`),window.location.href=window.location.origin+`/?is_from_mobile_home=1&recommend=1`)}},Xr={init(){V.execMenuOnce(`dy-follow-blockUserLiveFlashingAvatar`,()=>this.blockUserLiveFlashingAvatar())},blockUserLiveFlashingAvatar(){return G.info(`【屏蔽】用户直播时闪烁的头像`),K(`
    .route-scroll-container [data-e2e="follow-slide-avatar"] *{
        animation: none !important;
    }
    .route-scroll-container [data-e2e="follow-slide-avatar"] span{
        border: transparent;
    }
    .route-scroll-container [data-e2e="follow-slide-avatar"] img[src*="avatar-live"]{
        display: none !important;
    }
    `)}},Zr={init(){Xr.init()}},Qr={init(){V.execMenuOnce(`dy-hot-blockRightHotList`,()=>this.blockRightHotList())},blockRightHotList(){return G.info(`【屏蔽】右侧抖音热榜`),q(`#douyin-right-container [data-e2e="feed-right-list-container"]`)}},$r={init(){Qr.init()}},ei={async waitReactPropsToSet(e,t,n){Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);function r(){let t=null;return typeof e==`string`?t=U.selector(e):typeof e==`function`?t=e():e instanceof HTMLElement&&(t=e),t}(typeof e!=`string`||await U.waitNode(e,1e4))&&n.forEach(e=>{typeof e.msg==`string`&&G.info(e.msg);let n=function(){let n=r();if(n==null)return{status:!1,isTimeout:!0,inst:null,$el:n};let i=H.getReactInstance(n);if(i==null)return{status:!1,isTimeout:!1,inst:null,$el:n};let a=Array.from(t).findIndex(t=>{let r=i[t];return r?!!e.check(r,n):!1}),o=i[t[a]];return{status:a!==-1,isTimeout:!1,inst:o,$el:n}};H.waitPropertyByInterval(()=>r(),()=>n().status,250,1e4).then(()=>{let t=n();if(t.status){let n=t.inst;e.set(n,t.$el)}else typeof e.failWait==`function`&&e.failWait(t.isTimeout)})})}},ti={videoFullScreen(){return`xg-icon[data-e2e="xgplayer-page-full-screen"] .xgplayer-icon`},activeVideoFullScreen(){return`[data-e2e="feed-active-video"] .xgplayer-fullscreen`},searchPageActiveVideoFullScreen(){return`[data-e2e="feed-active-video"] dy-icon.douyin-player-page-full-screen .douyin-player-icon`},liveWebsiteFullScreen(){return`[id^="living_player_container"] .douyin-player .douyin-player-controls-right div:has(>svg path[d="M9.75 8.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2H9.75zM15 11.25h-3.75a1 1 0 0 0-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 0 1-1 1z"])`},liveFullScreen(){return`[id^="living_player_container"] .douyin-player .douyin-player-controls-right svg:has(>path[d="M9.5 8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-13zm10 11h-1.501v2H20.5a1 1 0 0 0 1-1v-2.5h-2V19zm-7 0v-1.5h-2V20a1 1 0 0 0 1 1h2.499v-2H12.5zm0-6h1.499v-2H11.5a1 1 0 0 0-1 1v2.5h2V13zm7 0h-1.501v-2H20.5a1 1 0 0 1 1 1v2.5h-2V13z"])`},liveQuitFullScreen(){return`[id^="living_player_container"] .douyin-player .douyin-player-controls-right svg:has(>path[d="M7.5 10a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V10zm3 4.5v-2h1.499V11h2v2.5a1 1 0 0 1-1 1H10.5zM20 11h-2v2.498a1 1 0 0 0 1 1h2.5v-2H20V11zm0 8.5h1.5v-2H19a1 1 0 0 0-1 1V21h2v-1.5zM12 21v-1.498h-1.5v-2H13a1 1 0 0 1 1 1V21h-2z"])`}},ni=class{isQuiting=!1;isEntering=!1;pushCount=0;config;constructor(e){if(this.config=e,this.enterGestureBackMode=this.enterGestureBackMode.bind(this),this.quitGestureBackMode=this.quitGestureBackMode.bind(this),this.popStateEvent=this.popStateEvent.bind(this),this.config.hash.trim()==``)throw Error(`hash不能为空`);(typeof this.config.backDelayTime!=`number`||isNaN(this.config.backDelayTime))&&(this.config.backDelayTime=150),this.config.win??(this.config.win=self)}popStateEvent(e){U.preventEvent(e),this.isEntering||this.isQuiting||this.quitGestureBackMode(void 0,!0)}fixHash(e){return e.startsWith(`#`)?e.startsWith(`#/`)||(e=e.replace(/^#/,`#/`)):(e.startsWith(`/`)||(e=`/`+e),e=`#`+e),e}async enterGestureBackMode(e){try{this.isEntering=!0;let t=e!=null;G.success(t?`追加手势记录 `+e:`进入手势模式`);let n=e??this.config.hash;if(n=this.fixHash(n),this.config.useUrl&&(n=this.config.win.location.origin+this.config.win.location.pathname+this.config.win.location.search+n),this.config.win.history.pushState({},``,n),t){await Nn.sleep(this.config.backDelayTime||150);return}U.off(this.config.win,`popstate`,this.popStateEvent,{capture:!0}),G.success(`监听popstate事件`),U.on(this.config.win,`popstate`,this.popStateEvent,{capture:!0}),typeof this.config.onEnter==`function`&&this.config.onEnter()}catch(e){console.error(e)}finally{this.isEntering=!1}}async quitGestureBackMode(e=this.config.hash,t=!1){try{if(this.isQuiting=!0,typeof this.config.beforeHistoryBackCallBack==`function`){let n=await this.config.beforeHistoryBackCallBack({hash:e,isFromPopStateEvent:t});if(typeof n==`object`&&n&&n.isPreventDefault){G.info(`取消手势退出`);return}}G.success(`开始检测并退出手势模式`);let n=Date.now()+5e3;for(e=this.fixHash(e);;){if(Date.now()>n){G.error(`未知情况，history.back()失败，无法退出手势模式`);break}if(this.config.win.location.hash==e)this.back(),G.info(`history.back()`),await Nn.sleep(this.config.backDelayTime);else break}let r=this.fixHash(this.config.hash);if(e!=r)return;G.success(`移除popstate事件`),U.off(this.config.win,`popstate`,this.popStateEvent,{capture:!0}),typeof this.config.afterHistoryBackCallBack==`function`&&await this.config.afterHistoryBackCallBack({hash:e,isFromPopStateEvent:t}),typeof this.config.onEnter==`function`&&this.config.onQuite(),G.success(`成功完整退出手势模式`)}catch(e){console.error(e)}finally{this.isQuiting=!1}}back(){return this.config.win.location.hash!=``&&(this.config.win.history.back(),!0)}},ri={init(){V.execMenuOnce(`shieldBottomVideoToolBar`,()=>this.blockBottomVideoToolBar()),V.execMenuOnce(`shieldBottomVideoToolBar-play`,()=>this.blockPlay()),V.execMenuOnce(`shieldBottomVideoToolBar-refresh`,()=>this.blockRefresh()),V.execMenuOnce(`shieldBottomVideoToolBar-time`,()=>this.blockTime()),V.execMenuOnce(`shieldBottomVideoToolbar-blockChapterContainer`,()=>this.blockChapterContainer()),V.execMenuOnce(`shieldBottomVideoToolbarDanmuContainer`,()=>this.blockBottomVideoToolbarDanmuContainer()),V.execMenuOnce(`shieldBottomVideoToolbar-autoPlay`,()=>this.autoPlay()),V.execMenuOnce(`shieldBottomVideoToolbar-aiNotes`,()=>this.aiNotes()),V.execMenuOnce(`shieldBottomVideoToolbar-clearScreen`,()=>this.clearScreen()),V.execMenuOnce(`shieldBottomVideoToolbar-playclarity`,()=>this.playclarity()),V.execMenuOnce(`shieldBottomVideoToolbar-playback`,()=>this.playback()),V.execMenuOnce(`shieldBottomVideoToolbar-watchLater`,()=>this.watchLater()),V.execMenuOnce(`shieldBottomVideoToolbar-miniMode`,()=>this.miniMode()),V.execMenuOnce(`shieldBottomVideoToolbar-volume`,()=>this.volume()),V.execMenuOnce(`shieldBottomVideoToolbar-pageFullScreen`,()=>this.pageFullScreen()),V.execMenuOnce(`shieldBottomVideoToolbar-fullScreen`,()=>this.fullScreen())},blockBottomVideoToolBar(){return G.info(`【屏蔽】播放器组件`),[q(`xg-controls.xgplayer-controls`,`.douyin-player-controls`),Qi.removeStyleBottom(),K(`
        /* 视频信息往下移 */
			  #sliderVideo[data-e2e="feed-active-video"] div:has( > div > #video-info-wrap),
        div:has(> #video-info-wrap),
        /* 右侧的 点赞、评论、收藏、分享下移 */
        .positionBox,
        /* 直播间的信息往下移 */
        [data-e2e="feed-live"] .douyin-player > div:has([aria-label*="直播中"]),
        /* 直播间的最右侧的更多按钮往下移 */
        [data-e2e="feed-live"] .douyin-player > div:has(svg path[d="M13.556 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM19.778 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM24.222 19.556a1.778 1.778 0 1 0 0-3.556 1.778 1.778 0 0 0 0 3.556z"]){
            bottom: 0px !important;
        }
      `)]},blockPlay(){return G.info(`【屏蔽】播放`),q(`.xgplayer-play`,`.douyin-player-controls .douyin-player-play`)},blockRefresh(){return G.info(`【屏蔽】刷新`),q(`.douyin-player-controls .douyin-player-play+slot:has(svg)`)},blockTime(){return G.info(`【屏蔽】播放时长`),q(`.xgplayer-time`,`.search-result-card .xgplayer[id^='oK_'] xg-controls.xgplayer-controls xg-left-grid.xg-left-grid .xgplayer-play+xg-icon.xgplayer-time`,`.douyin-player-controls .douyin-player-time`)},blockChapterContainer(){return G.info(`【屏蔽】章节要点`),q(`.chapterContainer[data-e2e="chapter-container"]`)},blockBottomVideoToolbarDanmuContainer(){return G.info(`【屏蔽】底部视频工具栏的弹幕容器`),q(`xg-controls xg-inner-controls .danmakuContainer[data-e2e="danmaku-container"]`,`.douyin-player-controls .danmakuContainer`)},aiNotes(){return G.info(`【屏蔽】AI笔记`),q(`.ai-note-container[data-e2e="ai-note-container"]`)},autoPlay(){return G.info(`【屏蔽】连播`),q(`.xgplayer-autoplay-setting`,`[data-e2e="feed-live"] xg-controls xg-right-grid .pluginContainer`,`.douyin-player-controls .douyin-player-controls-right slot:last-child:not([data-index])`,`.douyin-player-autoplay-setting`)},clearScreen(){return G.info(`【屏蔽】清屏`),q(`.xgplayer-immersive-switch-setting`,`.douyin-player-immersive-switch-setting`)},playclarity(){return G.info(`【屏蔽】清晰度`),q(`.xgplayer-playclarity-setting`,`.douyin-player-playclarity-setting`)},playback(){return G.info(`【屏蔽】倍速`),q(`.xgplayer-playback-setting`,`.douyin-player-playback-setting`)},watchLater(){return G.info(`【屏蔽】稍后再看`),q(`.xgplayer-watch-later`,`.douyin-player-watch-later`)},miniMode(){return G.info(`【屏蔽】小窗模式`),q(`.xgplayer-pip`,`.douyin-player-inpicture`)},volume(){return G.info(`【屏蔽】音量`),q(`.xgplayer-volume`,`.douyin-player-controls .douyin-player-volume`)},pageFullScreen(){return G.info(`【屏蔽】网页全屏`),q(`.xgplayer-page-full-screen`,`.douyin-player-page-full-screen`)},fullScreen(){return G.info(`【屏蔽】进入全屏`),q(`.xgplayer-fullscreen`,`.douyin-player-fullscreen`)}},ii={init(){V.execMenuOnce(`dy-video-bottom-shieldVideoInfoWrap`,()=>this.blockVideoInfoWrap()),V.execMenuOnce(`dy-video-blockClickRecommend`,()=>this.blockClickRecommend()),V.execMenuOnce(`dy-video-blockTitleTopTag`,()=>this.blobkTitleTopTag()),V.execMenuOnce(`dy-video-bottom-shieldVideoUnderTitleTag`,()=>this.blockVideoUnderTitleTag()),V.execMenuOnce(`dy-video-blockVideoTag`,()=>this.blockVideoTag()),V.execMenuOnce(`dy-video-blockAIIdentifyTheScreen`,()=>this.blockAIIdentifyTheScreen()),V.execMenuOnce(`dy-video-blockClickUpdateReminder`,()=>this.blockClickUpdateReminder()),V.execMenuOnce(`dy-video-blockAuthorDeclaration`,()=>this.blockAuthorDeclaration())},blockVideoInfoWrap(){return G.info(`【屏蔽】视频信息`),[q(`#video-info-wrap`,`[data-e2e="feed-live"] [data-e2e="basicPlayer"] > div:has([aria-label*="直播"])`,`[data-e2e="feed-live"] .douyin-player > div:has(a[href])`),this.blockClickRecommend(),this.blobkTitleTopTag()]},blockClickRecommend(){return G.info(`【屏蔽】点击推荐或共xx人推荐`),q(`.xgplayer-recommend-tag`)},blobkTitleTopTag(){return G.info(`【屏蔽】视频标题上面的标签`),q(`span:has(+#video-info-wrap):has(img)`,`span:has(+div #video-info-wrap):has(img)`,`.xgplayer .player-position-box-bottom:not(:has(>:only-child)) > div:nth-child(1):has(img[src*='game_center'])`,`.basePlayerContainer .player-position-box-bottom:not(:has(>:only-child)) > div:nth-child(1):has(img[src*='game_center'])`,`.player-position-box-bottom .xgplayer-shop-anchor`,`.douyin-player>div>div:has(img[src*="/game_center/"]):not(:has(#video-info-wrap))`)},blockVideoUnderTitleTag(){return G.info(`【屏蔽】视频标题下的标签`),[q(`#video-info-wrap .under-title-tag`,`.video-info-detail [data-e2e="video-desc"] + div`)]},blockVideoTag(){return G.info(`【屏蔽】视频标签`),q(`[data-e2e="video-desc"] span:has(>a[href*="douyin.com/search"])`)},blockAIIdentifyTheScreen(){return G.info(`【屏蔽】识别画面`),[q(`.under-title-tag + div:has(svg g[filter*="icon_ai_svg__filter"])`,`[data-e2e="video-desc"] + div:has(svg g[filter*="icon_ai_svg__filter"]):not(:has(.under-title-tag))`,`.video-info-detail > div > div > div:has(path[d="M5.352 3.497A2.66 2.66 0 0 1 8.12 1.003l.073.004a2.65 2.65 0 0 1 1.838.938c.399.474.629 1.086.605 1.744l-.003.064a2.506 2.506 0 0 1-.076.485l-.068.262 1.15-.295.066-.016c1.393-.322 2.825.479 3.2 1.836l.03.108a2.557 2.557 0 0 1-.314 1.911l-.035.057c-.336.52-.857.925-1.5 1.107l-.063.017a2.617 2.617 0 0 1-.493.079l-.274.017.642.988.037.056c.728 1.185.42 2.739-.73 3.524l-.057.038a2.668 2.668 0 0 1-2.043.357l-.066-.015a2.63 2.63 0 0 1-1.533-1.063l-.035-.053-.034-.053a2.635 2.635 0 0 1-.194-.384l-.101-.25-.755.904c-.913 1.094-2.545 1.306-3.677.458l-.054-.041a2.582 2.582 0 0 1-.976-1.801l-.006-.066a2.566 2.566 0 0 1 .947-2.16l.21-.173-1.108-.427C1.363 8.636.653 7.135 1.168 5.8A2.62 2.62 0 0 1 2.67 4.302a2.68 2.68 0 0 1 2.382.218l.23.143.07-1.168zm2.726-1.313a1.437 1.437 0 0 0-1.52 1.281v.005l-.275 4.462a.027.027 0 0 1-.031.024l-.007-.002-.098-.037-1.259-.486c.1-.167.168-.359.186-.578l.003-.054a1.43 1.43 0 0 0-.739-1.321l-.049-.025-.062-.03a1.453 1.453 0 0 0-.883-.09l-.06.014a1.43 1.43 0 0 0-.986.856 1.414 1.414 0 0 0 .767 1.82l.005.002 4.227 1.637c.018.007.022.029.012.04l-.066.08-.86 1.03a1.366 1.366 0 0 0-.462-.336l-.04-.017-.05-.02a1.477 1.477 0 0 0-1.503.284l-.04.037a1.409 1.409 0 0 0 .11 2.098 1.458 1.458 0 0 0 1.993-.156l.002-.002.001-.001 2.889-3.45a.03.03 0 0 1 .023-.01c.008 0 .014.002.018.006l.004.006.055.086.728 1.121c-.167.072-.326.18-.465.329l-.03.031a1.419 1.419 0 0 0-.2 1.587 1.456 1.456 0 0 0 2.058.546 1.409 1.409 0 0 0 .465-1.916v-.003l-.002-.002-2.442-3.77-.003-.006a.025.025 0 0 1 .02-.032l.1-.026 1.31-.337c.02.193.08.387.195.576.305.493.887.772 1.469.678l.067-.013c.333-.069.611-.246.81-.483l.174-.262c.149-.286.2-.622.122-.959l-.01-.043a1.441 1.441 0 0 0-1.706-1.027h-.006L7.64 6.447h-.001c-.008.003-.017 0-.024-.005a.027.027 0 0 1-.01-.022l.008-.12.08-1.31A1.444 1.444 0 0 0 9.42 3.819a1.387 1.387 0 0 0-.178-.924l-.033-.053a1.44 1.44 0 0 0-1.086-.654l-.045-.004z"])`)]},blockClickUpdateReminder(){let e=new H.LockFunction(()=>{let e=Y(`.basePlayerContainer div:has(>div>div):contains('及时接收作品更新提醒')`);if(e.length){for(let t of e){let e=t.closest(`.basePlayerContainer`)?.querySelector(`.video-info-detail`);e&&U.css(e,`padding-bottom`,`8px`)}U.remove(e),G.success(`【屏蔽】及时接收作品更新提醒`)}});H.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{e.run()}})},blockAuthorDeclaration(){return G.info(`【屏蔽】作者声明`),[q(`div:has(>a.safetyBar)`)]}},ai={init(){V.execMenuOnce(`dy-video-shieldUserCommentToolBar`,()=>this.shieldUserCommentToolBar()),V.execMenuOnce(`dy-video-shieldUserCommentEveryOneAllSearch`,()=>this.shieldUserCommentEveryOneAllSearch()),V.execMenuOnce(`dy-video-comment-blockDetails`,()=>this.blockDetails()),V.execMenuOnce(`dy-video-comment-blockTAWork`,()=>this.blockTAWork()),V.execMenuOnce(`dy-video-comment-blockComment`,()=>this.blockComment()),V.execMenuOnce(`dy-video-comment-blockCollection`,()=>this.blockCollection()),V.execMenuOnce(`dy-video-comment-blockAskAI`,()=>this.blockAskAI()),V.execMenuOnce(`dy-video-comment-blockRelatedRecommend`,()=>this.blockRelatedRecommend()),V.execMenuOnce(`dy-video-comment-blockHotSpot`,()=>this.blockHotSpot()),V.execMoreMenuOnce([[`dy-video-comment-blockReply`,()=>this.blockReply()],[`dy-video-comment-blockShare`,()=>this.blockShare()],[`dy-video-comment-blockLike`,()=>this.blockLike()],[`dy-video-comment-blockDislike`,()=>this.blockDislike()]],()=>q(`#videoSideCard .comment-item-stats-container`))},shieldUserCommentToolBar(){return G.info(`【屏蔽】评论工具栏`),[q(`.comment-input-container`)]},shieldUserCommentEveryOneAllSearch(){return G.info(`【屏蔽】大家都在搜`),[q(`.comment-header-with-search`)]},blockDetails(){return G.info(`【屏蔽】详情`),q(`#videoSideCard [role="tablist"] [aria-controls="semiTabPaneldetail_tab"][aria-selected="false"]`)},blockTAWork(){return G.info(`【屏蔽】TA的作品`),q(`#videoSideCard [role="tablist"] [aria-controls="semiTabPanelauthor_card"][aria-selected="false"]`)},blockComment(){return G.info(`【屏蔽】评论`),q(`#videoSideCard [role="tablist"] [aria-controls="semiTabPanelcomment"][aria-selected="false"]`)},blockCollection(){return G.info(`【屏蔽】合集`),q(`#videoSideCard [role="tablist"] [aria-controls="semiTabPanelplaylet_card"][aria-selected="false"]`,`#videoSideCard [role="tablist"] [aria-controls="semiTabPanelcompilation_card"][aria-selected="false"]`)},blockAskAI(){return G.info(`【屏蔽】问AI`),q(`#videoSideCard [role="tablist"] [aria-controls="semiTabPanelai_card"][aria-selected="false"]`)},blockRelatedRecommend(){return G.info(`【屏蔽】相关推荐`),q(`#videoSideCard [role="tablist"] [aria-controls="semiTabPanelrelated_card"][aria-selected="false"]`)},blockHotSpot(){return G.info(`【屏蔽】热点`),q(`#videoSideCard [role="tab"][aria-controls="semiTabPanelhot_card"][aria-selected="false"]`)},blockReply(){return G.info(`【屏蔽】回复`),q(`#videoSideCard .comment-item-stats-container > div:has([d="M6 17.617C6 11.561 11.578 7 18 7s12 4.561 12 10.617c0 3.036-1.51 5.529-3.749 7.728-.187.184-.381.364-.58.54-1.925 2.082-3.911 3.417-5.847 3.973-.77.221-1.702.242-2.454-.381-.68-.564-.837-1.361-.878-1.823a3.848 3.848 0 0 1-.01-.136C10.898 26.91 6 23.264 6 17.617zM18 10c-5.177 0-9 3.602-9 7.617 0 3.867 3.794 6.992 9.152 6.992h1.5v1.717l-.06.206c0-.001-.03.104-.06.259 1.155-.46 2.515-1.394 3.984-2.996l.056-.06.063-.055c.182-.16.353-.318.514-.475C26.075 21.312 27 19.543 27 17.617 27 13.602 23.177 10 18 10z"])`)},blockShare(){return G.info(`【屏蔽】分享`),q(`#videoSideCard .comment-item-stats-container > div:has([d="M12.066 5.295l-.553.578.553-.578zM10.281 7.3v.8h.8v-.8h-.8zm-.213.002l-.022.8h.035l-.013-.8zM4.823 9.35l.585.545-.585-.545zm-1.821 4.688l.8.024v-.049l-.8.025zm.632.765l-.703-.383.703.383zm6.647-2.056h.8v-.67l-.658-.118-.142.787zm1.754 1.965l.53.6-.53-.6zm4.275-3.776l.53.599-.53-.6zm.03-1.554l.553-.578-.553.578zm-5.259-3.326c0-.224.27-.34.432-.184l1.106-1.156c-1.18-1.13-3.138-.293-3.138 1.34h1.6zm0 1.244V6.057h-1.6v1.244h1.6zm-1 .801l.2-.001V6.5c-.076 0-.152 0-.228.002l.028 1.6zM5.408 9.896c1.605-1.72 3.93-1.813 4.638-1.794l.043-1.6c-.813-.021-3.754.054-5.851 2.303l1.17 1.091zm-1.607 4.118c-.014-.44.096-1.169.373-1.963.275-.79.69-1.572 1.234-2.155l-1.17-1.09c-.738.79-1.25 1.788-1.575 2.718-.322.924-.483 1.853-.461 2.54l1.6-.05zm-.87.407a.463.463 0 0 1 .234-.208.558.558 0 0 1 .485.034c.158.09.187.207.178.177a1.205 1.205 0 0 1-.027-.36l-1.6-.049c-.01.335.02.639.104.9.084.26.247.546.55.72.318.183.66.165.921.056.246-.101.442-.286.56-.504l-1.405-.766zm7.35-1.673l.141-.788h-.002l-.005-.001-.014-.003a3.758 3.758 0 0 0-.232-.034 11.84 11.84 0 0 0-2.684-.053c-1.532.15-3.549.708-4.554 2.552l1.405.766c.61-1.12 1.916-1.59 3.305-1.726a10.234 10.234 0 0 1 2.492.073h.007v.001l.141-.787zm.8 1.174v-1.175h-1.6v1.175h1.6zm.425.192a.255.255 0 0 1-.425-.192h-1.6c0 1.599 1.886 2.449 3.084 1.39l-1.06-1.198zm4.274-3.777l-4.274 3.777 1.059 1.199 4.274-3.777-1.059-1.199zm.007-.376a.255.255 0 0 1-.007.376l1.06 1.199c.813-.72.838-1.98.053-2.731L15.787 9.96zm-4.274-4.088l4.274 4.088 1.106-1.156-4.274-4.088-1.106 1.156z"])`)},blockLike(){return G.info(`【屏蔽】点赞`),q(`#videoSideCard .comment-item-stats-container > div>p:has([d="M7.646 4.168c-2.238 0-4.035 1.919-4.035 4.152l.002.13a.834.834 0 0 0-.001.073c.006.3.075.66.15.962.074.294.178.622.294.86.467 1.004 1.284 1.979 2.071 2.78a23.69 23.69 0 0 0 2.646 2.323l.015.012.012.01c.174.175.543.54 1.2.54h.019c.186 0 .63 0 1.028-.387l.033-.027c.033-.029.08-.067.14-.117l.003-.003c.436-.359 1.456-1.2 2.462-2.214.644-.646 1.312-1.396 1.822-2.17a7.94 7.94 0 0 0 .2-.318.84.84 0 0 0 .063-.13.956.956 0 0 1 .11-.214.835.835 0 0 0 .074-.144c.029-.073.05-.121.066-.154l.003-.007a.832.832 0 0 0 .147-.29c.125-.444.21-.835.219-1.316a.82.82 0 0 0-.002-.067 5.39 5.39 0 0 0 .002-.16c-.015-2.22-1.807-4.124-4.035-4.124-.845 0-1.667.262-2.316.789a4.029 4.029 0 0 0-2.392-.789zm7.076 4.153V8.424l-.002.07c0 .008 0 .022.002.039a3.065 3.065 0 0 1-.121.721 1.9 1.9 0 0 0-.078.144 3.297 3.297 0 0 0-.089.2c-.083.135-.137.24-.193.38a6.64 6.64 0 0 1-.124.195v.001c-.425.644-1.007 1.305-1.613 1.912l-.002.001a31.607 31.607 0 0 1-2.342 2.106l-.032.026-.12.1-.048-.046c-.05-.05-.119-.105-.152-.131l-.006-.005A22.003 22.003 0 0 1 7.32 11.96l-.003-.003c-.747-.76-1.408-1.577-1.753-2.323a3.149 3.149 0 0 1-.185-.555 3.468 3.468 0 0 1-.1-.553.964.964 0 0 0 0-.104V8.42a3.56 3.56 0 0 1-.001-.099c0-1.373 1.11-2.485 2.368-2.485.662 0 1.288.269 1.848.85a.833.833 0 0 0 1.282-.099c.33-.47.892-.751 1.578-.751 1.258 0 2.368 1.113 2.368 2.485z"])`)},blockDislike(){return G.info(`【屏蔽】不喜欢`),q(`#videoSideCard .comment-item-stats-container > div>p:has([d="M15.58 8.58c0 .1 0 .21-.01.31v.13l-.01.06c-.04.44-.13.8-.27 1.22-.02.08-.06.15-.12.21h.01c-.04.07-.07.13-.1.19a.37.37 0 0 1-.05.11c-.07.11-.09.14-.13.23-.01.04-.03.07-.05.1-.67 1.09-1.71 2.14-2.56 2.91-.43.39-.83.72-1.12.97-.13.1-.25.19-.33.26l-.03.03-.11.08h-.01l-.01.02h-.01c-.1.11-.33.33-.67.41h-.01c-.09.04-.19.07-.29.08-.58.08-.95-.23-1.11-.37l-.03-.03c-.64-.45-1.27-.93-1.87-1.43-.98-.83-2.16-1.95-2.84-3.13-.14-.24-.26-.5-.36-.77-.11-.29-.2-.59-.25-.89h-.01v-.06l-.02-.14c-.29-2.05.92-4.16 2.92-4.45.15-.02.29-.03.43-.03.88 0 1.7.36 2.41.99.14.13.23.31.23.5l.02 1.29 1.3.96c.14.1.23.26.26.44.03.17-.01.35-.12.5l-.94 1.32.63 1.34c.07.17.08.35.02.51a.69.69 0 0 1-.35.38c-.16.08-.34.09-.51.03a.67.67 0 0 1-.38-.34l-.81-1.7a.702.702 0 0 1-.06-.35c.01-.12.05-.23.12-.33l.79-1.11-1.02-.76a.55.55 0 0 1-.2-.23.641.641 0 0 1-.08-.3l-.02-1.31c-.43-.32-.86-.47-1.28-.47-.08 0-.17 0-.25.02-1.07.15-1.98 1.39-1.77 2.92l.02.1v.02s.01.05.01.08c.03.14.09.36.18.59.09.26.19.46.24.55h.01c.57.98 1.6 1.98 2.55 2.79.54.45 1.09.87 1.66 1.28l.03.02c.07.06.16.12.2.15.03.03.06.05.09.07.03-.01.07-.02.11-.03l.09-.09c.05-.04.13-.11.2-.16l.02-.02.03-.03.32-.26c.36-.29.72-.6 1.07-.91.81-.74 1.72-1.67 2.29-2.58.06-.13.11-.23.19-.36.03-.06.06-.13.09-.19.02-.04.05-.09.09-.14.09-.31.14-.53.17-.78v-.2c.12-1.49-.85-2.63-1.89-2.7h-.12c-.57 0-1.19.26-1.49.68-.05.07-.11.14-.19.18a.55.55 0 0 1-.25.1c-.09.02-.18.02-.27 0a.545.545 0 0 1-.24-.12.54.54 0 0 1-.18-.19.825.825 0 0 1-.1-.26.576.576 0 0 1 .02-.26c.02-.09.06-.17.11-.24.6-.84 1.67-1.25 2.59-1.25.08 0 .15 0 .22.01 1.87.12 3.16 1.92 3.16 3.83z"])`)}},oi={init(){V.execMenuOnce(`dy-video-live-block-playComponents-refresh`,()=>this.blockRefresh())},blockRefresh(){return G.info(`【屏蔽】刷新`),q(`[data-e2e="feed-live"] xg-left-grid .xgplayer-play+.pluginContainer`,`.douyin-player-controls div:has(>svg path[d="M24.932 16.444c0-4.687-3.89-8.444-8.634-8.444a8.679 8.679 0 0 0-7.207 3.79v-1.558a.99.99 0 0 0-1.98 0v4.038c0 .547.444.99.99.99h4.038a.99.99 0 0 0 0-1.98h-1.646c1.137-1.963 3.304-3.3 5.804-3.3 3.7 0 6.655 2.918 6.655 6.464 0 3.547-2.956 6.465-6.655 6.465-2.963 0-5.459-1.88-6.326-4.453a.99.99 0 0 0-1.876.633c1.138 3.38 4.39 5.8 8.202 5.8 4.746 0 8.635-3.758 8.635-8.445z"])`)}},si={init(){V.execMenuOnce(`dy-video-live-block-tipClickOrKeyboardFEnterLiveRoom`,()=>this.tipClickOrKeyboardFEnterLiveRoom()),V.execMenuOnce(`dy-video-live-block-yellowCar`,()=>this.blockYellowCar()),V.execMenuOnce(`dy-video-live-block-highlight`,()=>this.blockHighlight()),oi.init()},tipClickOrKeyboardFEnterLiveRoom(){return G.info(`【屏蔽】点击或按F进入直播间`),q(`[data-e2e="feed-live"] .douyin-player > a`,`[data-e2e="feed-live"] [data-e2e="basicPlayer"] > a`,`.search-result-card [data-e2e="basicPlayer"] > a[href]`,`.search-result-card .douyin-player > a[href]`)},blockYellowCar(){return G.info(`【屏蔽】小黄车`),q(`[data-e2e="feed-live"] .douyin-player > div:has([data-e2e="yellowCart-container"])`,`[data-e2e="feed-live"] [data-e2e="basicPlayer"] > div:has([data-e2e="yellowCart-container"])`,`.search-result-card .douyin-player > div:has([data-e2e="yellowCart-container"])`)},blockHighlight(){return G.info(`【屏蔽】本场高光`),q(`[data-e2e="feed-live"] div:has(+a[data-e2e="live-slider"]):has(img)`,`[data-e2e="feed-live"] .highlightPlayer`)}},ci={$data:{menuSelector:`.basePlayerContainer div:not(.danmu) div[style*="top:"][style*="left:"]:not([style*="transform:"])`,menuSelector_sliderVideo:`#sliderVideo .basePlayerContainer div:not(.danmu) div[style*="top:"][style*="left:"]:not([style*="transform:"])`,menuSelector_slideMode:`#slideMode .basePlayerContainer div:not(.danmu) div[style*="top:"][style*="left:"]:not([style*="transform:"])`,menuSelector_onlyVideo:`.video-detail-container .basePlayerContainer div:not(.danmu) div[style*="top:"][style*="left:"]:not([style*="transform:"])`},$el:{hideMenuStyle:null},init(){let e=[{enable:!1,key:`dy-video-player-block-right-menu-clearScreen`,callback:()=>this.clearScreen()},{enable:!1,key:`dy-video-player-block-right-menu-comment`,callback:()=>this.comment()},{enable:!1,key:`dy-video-player-block-right-menu-like`,callback:()=>this.like()},{enable:!1,key:`dy-video-player-block-right-menu-enterAuthorHomePage`,callback:()=>this.enterAuthorHomePage()},{enable:!1,key:`dy-video-player-block-right-menu-recommendToFriends`,callback:()=>this.recommendToFriends()},{enable:!1,key:`dy-video-player-block-right-menu-share`,callback:()=>this.share()},{enable:!1,key:`dy-video-player-block-right-menu-notInterested`,callback:()=>this.notInterested()},{enable:!1,key:`dy-video-player-block-right-menu-feedback`,callback:()=>this.feedback()},{enable:!1,key:`dy-video-player-block-right-menu-report`,callback:()=>this.report()},{enable:!1,key:`dy-video-player-block-right-menu-enterDetailsPage`,callback:()=>this.enterDetailsPage()}],t=()=>{if(e.every(e=>e.enable)){if(this.$el.hideMenuStyle==null){let e=[this.$data.menuSelector,this.$data.menuSelector_sliderVideo,this.$data.menuSelector_slideMode,this.$data.menuSelector_onlyVideo];this.$el.hideMenuStyle=q(...e)}else document.contains(this.$el.hideMenuStyle)||document.head.appendChild(this.$el.hideMenuStyle)}else this.$el.hideMenuStyle!=null&&(this.$el.hideMenuStyle.remove(),this.$el.hideMenuStyle=null)};e.forEach(n=>{V.execMenuOnce(n.key,()=>(n.enable=!0,n.callback()),!1,!0),V.addValueChangeListener(n.key,(n,r,i)=>{let a=e.find(e=>e.key===n);a&&(a.enable=r),t()})}),t()},clearScreen(){return G.info(`【屏蔽】右键菜单-清屏`),q(`${this.$data.menuSelector} > *:nth-child(1):not([data-danmu-id]):not(:empty)`)},comment(){return G.info(`【屏蔽】右键菜单-评论`),q(`${this.$data.menuSelector} > *:nth-child(2):not([data-danmu-id]):not(:empty)`)},like(){return G.info(`【屏蔽】右键菜单-赞`),q(`${this.$data.menuSelector} > *:nth-child(3):not([data-danmu-id]):not(:empty)`)},enterAuthorHomePage(){return G.info(`【屏蔽】右键菜单-进入作者主页`),q(`${this.$data.menuSelector} > *:nth-child(4):not([data-danmu-id]):not(:empty)`)},recommendToFriends(){return G.info(`【屏蔽】右键菜单-推荐给朋友`),q(`${this.$data.menuSelector_slideMode} > *:nth-child(5):not([data-danmu-id]):not(:empty)`,`${this.$data.menuSelector_sliderVideo} > *:nth-child(5):not([data-danmu-id]):not(:empty)`)},share(){return G.info(`【屏蔽】右键菜单-分享`),Z.isVideo()?q(`${this.$data.menuSelector_onlyVideo} > *:nth-child(5):not([data-danmu-id]):not(:empty)`):q(`${this.$data.menuSelector} > *:nth-child(6):not([data-danmu-id]):not(:empty)`)},notInterested(){return G.info(`【屏蔽】右键菜单-不感兴趣`),q(`${this.$data.menuSelector_sliderVideo} > *:nth-child(7):not([data-danmu-id]):not(:empty)`)},feedback(){return G.info(`【屏蔽】右键菜单-意见反馈`),Z.isVideo()?q(`${this.$data.menuSelector_onlyVideo} > *:nth-last-child(2):not([data-danmu-id]):not(:empty)`):q(`${this.$data.menuSelector} > *:nth-last-child(3):not([data-danmu-id]):not(:empty)`)},report(){return G.info(`【屏蔽】右键菜单-举报`),Z.isVideo()?q(`${this.$data.menuSelector_onlyVideo} > *:nth-last-child(1):not([data-danmu-id]):not(:empty)`):q(`${this.$data.menuSelector} > *:nth-last-child(2):not([data-danmu-id]):not(:empty)`)},enterDetailsPage(){if(G.info(`【屏蔽】右键菜单-进入详情页`),!Z.isVideo())return q(`${this.$data.menuSelector} > *:nth-last-child(1):not([data-danmu-id]):not(:empty)`)}},li={$data:{menuSelector:`[data-e2e="feed-live"] div[style*="top:"][style*="left:"]:not([style*="transform:"])`},$el:{hideMenuStyle:null},init(){let e=[{enable:!1,key:`dy-video-player-block-right-menu-live-not-interested`,callback:()=>this.notInterested()},{enable:!1,key:`dy-video-player-block-right-menu-live-report`,callback:()=>this.report()},{enable:!1,key:`dy-video-player-block-right-menu-live-open-blank-room`,callback:()=>this.openBlankRoom()}],t=()=>{e.every(e=>e.enable)?this.$el.hideMenuStyle==null?this.$el.hideMenuStyle=q(`${this.$data.menuSelector}`):document.contains(this.$el.hideMenuStyle)||document.head.appendChild(this.$el.hideMenuStyle):this.$el.hideMenuStyle!=null&&(this.$el.hideMenuStyle.remove(),this.$el.hideMenuStyle=null)};e.forEach(n=>{V.execMenuOnce(n.key,()=>(n.enable=!0,n.callback())),V.addValueChangeListener(n.key,(n,r,i)=>{let a=e.find(e=>e.key===n);a&&(a.enable=r),t()})}),t()},notInterested(){return G.info(`【屏蔽】右键菜单-直播间-不感兴趣`),q(`${this.$data.menuSelector} > *:nth-child(1):not(:empty)`)},report(){return G.info(`【屏蔽】右键菜单-直播间-举报`),q(`${this.$data.menuSelector} > *:nth-child(2):not(:empty)`)},openBlankRoom(){return G.info(`【屏蔽】右键菜单-直播间-在新标签页打开直播间`),q(`${this.$data.menuSelector} > *:nth-child(3):not(:empty)`)}},ui={init(){V.execMenuOnce(`shieldPlaySwitchButton`,()=>this.shieldPlaySwitchButton()),V.execMenuOnce(`blockAIDouYin`,()=>this.blockAIDouYin()),V.execMenuOnce(`shieldAuthorAvatar`,()=>this.blockAuthorAvatar()),V.execMenuOnce(`blockUserLiveSmallWindow`,()=>this.blockUserLiveSmallWindow()),V.execMenuOnce(`dy-video-blockUserLiveFlashingAvatar`,()=>this.blockUserLiveFlashingAvatar()),V.execMenuOnce(`shieldLikeButton`,()=>this.blockLikeButton()),V.execMenuOnce(`shieldCommentButton`,()=>this.blockCommentButton()),V.execMenuOnce(`shieldCollectionButton`,()=>this.blockCollectionButton()),V.execMenuOnce(`shieldSharenButton`,()=>this.blockSharenButton()),V.execMenuOnce(`shieldListenDouYinButton`,()=>this.blockListenDouYinButton()),V.execMenuOnce(`shieldRelatedRecommendationsButton`,()=>this.blockRelatedRecommendationsButton()),V.execMenuOnce(`shieldMoreButton`,()=>this.blockMoreButton())},blockToolBar(){return G.info(`【屏蔽】右侧工具栏`),q(`.slider-video .positionBox`)},shieldPlaySwitchButton(){return G.info(`【屏蔽】切换播放↑↓`),[q(`.positionBox  .xgplayer-playswitch[data-state="normal"]`,`div.xgplayer-playswitch`,`.xgplayer-playswitch`,`[data-e2e="feed-live"]>div:has(svg path[d="M7.269 16.316a1.393 1.393 0 0 1 0-1.97l5.056-5.055a1.393 1.393 0 0 1 1.97 0l.011.011 5.045 5.045a1.393 1.393 0 1 1-1.97 1.97l-4.071-4.072-4.071 4.071a1.393 1.393 0 0 1-1.97 0z"])`),K(`
			div[data-e2e="slideList"]{
				/* 修复屏蔽后的视频宽度占据 */
				padding: 0px !important;
			}
			`)]},blockAIDouYin(){return G.info(`【屏蔽】AI抖音`),window.localStorage.setItem(`aiEntryClose`,`1`),[q(`.immersive-player-switch-on-hide-interaction-area > div:has(>svg path[d="M8.175 4.88C8.318 2.458 10.38.548 12.815.665l.12.008a4.428 4.428 0 0 1 3.08 1.586 4.354 4.354 0 0 1 1.014 2.948l-.005.108c-.016.282-.06.556-.129.82l-.113.444 1.927-.499.111-.027c2.335-.543 4.733.81 5.362 3.105l.05.182a4.351 4.351 0 0 1-.524 3.23l-.06.096a4.409 4.409 0 0 1-2.514 1.87l-.105.028h-.001a4.336 4.336 0 0 1-.827.133l-.458.03 1.075 1.67.06.096c1.221 2.003.705 4.63-1.222 5.957l-.095.063a4.44 4.44 0 0 1-3.424.605l-.11-.027a4.41 4.41 0 0 1-2.568-1.795l-.06-.09-.056-.09a4.355 4.355 0 0 1-.326-.65l-.17-.421-1.263 1.528c-1.53 1.85-4.265 2.207-6.162.774l-.09-.07a4.376 4.376 0 0 1-1.636-3.044l-.008-.112a4.361 4.361 0 0 1 .994-3.061 4.64 4.64 0 0 1 .592-.59l.352-.293-1.856-.722c-2.28-.886-3.468-3.423-2.606-5.68v-.001A4.407 4.407 0 0 1 3.68 6.245a4.448 4.448 0 0 1 3.991.37l.386.24.118-1.975zm4.57-2.218a2.413 2.413 0 0 0-2.547 2.165v.01l-.463 7.542a.046.046 0 0 1-.053.041l-.011-.003-.163-.064h-.001l-2.109-.821c.165-.28.28-.606.31-.978l.006-.09A2.422 2.422 0 0 0 6.475 8.23l-.081-.043-.104-.049a2.42 2.42 0 0 0-1.479-.153l-.102.024a2.403 2.403 0 0 0-1.652 1.446 2.396 2.396 0 0 0 1.285 3.076l.01.004 7.082 2.769a.044.044 0 0 1 .02.068l-.112.134v.001l-1.44 1.74a2.312 2.312 0 0 0-.775-.568l-.067-.03-.086-.033c-.856-.319-1.842-.147-2.517.48l-.066.064a2.38 2.38 0 0 0-.692 1.538c-.047.744.252 1.5.876 2.01a2.428 2.428 0 0 0 3.339-.265l.003-.004.003-.004 4.84-5.833a.046.046 0 0 1 .04-.016c.012 0 .022.005.03.012l.007.009.092.146.001.001 1.22 1.893c-.28.122-.547.302-.78.555l-.049.054v.001c-.64.74-.793 1.807-.337 2.682.282.545.737.927 1.257 1.13a2.418 2.418 0 0 0 2.19-.206 2.393 2.393 0 0 0 .78-3.24l-.002-.004-.003-.004-4.09-6.373-.001-.001-.005-.009a.043.043 0 0 1 .032-.055l.17-.044 2.195-.569c.032.325.133.654.328.974a2.445 2.445 0 0 0 2.462 1.146l.112-.022a2.405 2.405 0 0 0 1.358-.818l.29-.442a2.375 2.375 0 0 0 .206-1.621l-.018-.073a2.415 2.415 0 0 0-2.858-1.737l-.009.002-7.369 1.894h-.002a.043.043 0 0 1-.039-.009.043.043 0 0 1-.016-.037l.013-.204v-.002l.132-2.212c.32.07.67.077 1.034-.009.955-.225 1.708-.997 1.859-1.972a2.371 2.371 0 0 0-.296-1.56l-.055-.09a2.41 2.41 0 0 0-1.82-1.106l-.075-.005z"])`,`.immersive-player-switch-on-hide-interaction-area > div:has(>svg g[filter*="entryIcon_svg__filter"])`,`.immersive-player-switch-on-hide-interaction-area > div > div:has(>svg g[filter*="entryIcon_svg__filter"])`,`.immersive-player-switch-on-hide-interaction-area > div > div:has(>div>svg g[filter*="entryIcon_svg__filter"])`,`.xgplayer div:has(>svg path[d="M22.94 21.309l.58 1.364a45.819 45.819 0 0 0 2.125 4.34l.528.947-.108.056-1.077.543-.102.052-.054-.102-.576-1.087a44.077 44.077 0 0 1-.22-.423 7.704 7.704 0 0 0-3.902.001c-.087.169-.154.3-.219.422l-.576 1.087-.054.102-.102-.052-1.077-.543-.108-.056.059-.106.468-.841a45.902 45.902 0 0 0 2.125-4.34l.58-1.364.038-.086.091.017c.482.086.97.086 1.451 0l.093-.017.037.086zm6.011-.019a3.731 3.731 0 0 0-.173.9c-.022.342-.034.69-.034 1.035v3.067c0 .345.012.694.034 1.035l.022.227c.029.226.08.452.151.673l.05.153h-1.92l.049-.153c.095-.295.153-.597.173-.9.022-.345.033-.694.033-1.035v-3.067c0-.34-.01-.689-.033-1.034a3.753 3.753 0 0 0-.173-.9l-.05-.154h1.921l-.05.153zM17.161 5.395l.123.008a4.527 4.527 0 0 1 3.14 1.602 4.367 4.367 0 0 1 1.033 2.978l-.005.109c-.015.284-.063.56-.13.828l-.117.447 1.964-.504.113-.027c2.38-.549 4.824.818 5.465 3.136l.05.184a4.368 4.368 0 0 1-.534 3.265l-.06.097a4.495 4.495 0 0 1-1.965 1.674c-3.71 1.444-5.893-1.51-6.663-3.187l.134-.034 2.236-.575c.033.329.136.661.333.984a2.5 2.5 0 0 0 2.51 1.157l.113-.021a2.456 2.456 0 0 0 1.384-.825l.297-.448a2.37 2.37 0 0 0 .209-1.637l-.018-.075c-.334-1.268-1.63-2.035-2.914-1.753h-.01l-7.51 1.916h-.022a.056.056 0 0 1-.02-.01.048.048 0 0 1-.017-.037l.014-.205.136-2.238c.327.071.682.079 1.054-.008.973-.227 1.74-1.006 1.894-1.992a2.371 2.371 0 0 0-.303-1.578l-.055-.09a2.46 2.46 0 0 0-1.855-1.118l-.076-.006c-1.323-.076-2.469.897-2.596 2.188v.009l-.47 7.62a.047.047 0 0 1-.053.04l-.013-.002-.166-.065-2.15-.83c.169-.284.285-.612.316-.987l.007-.092a2.443 2.443 0 0 0-1.263-2.256l-.084-.043-.105-.048a2.482 2.482 0 0 0-1.508-.155l-.104.024a2.443 2.443 0 0 0-1.683 1.46c-.487 1.219.104 2.59 1.31 3.109l.008.003 7.22 2.797c.03.012.036.048.02.068l-.114.136-1.467 1.759a2.335 2.335 0 0 0-.79-.573l-.068-.03-.086-.034c-.873-.321-1.878-.147-2.566.484l-.069.065a2.407 2.407 0 0 0 .188 3.584 2.49 2.49 0 0 0 3.404-.268l.006-.006 3.485-4.165v3.166l-.5.607v-.004l-1.29 1.543c-1.559 1.868-4.346 2.229-6.28.782l-.092-.07a4.41 4.41 0 0 1-1.668-3.076l-.009-.113a4.384 4.384 0 0 1 1.619-3.688l.357-.297-1.892-.729c-2.323-.895-3.535-3.457-2.656-5.739a4.475 4.475 0 0 1 2.565-2.555 4.577 4.577 0 0 1 4.068.373l.393.244.12-1.995h-.001c.146-2.447 2.248-4.375 4.728-4.258zm4.679 17.909a45.987 45.987 0 0 1-.964 2.191 9.16 9.16 0 0 1 2.417 0 45.878 45.878 0 0 1-.963-2.191l-.245-.6-.245.6z"])`,`.immersive-player-switch-on-hide-interaction-area > div:has(> div >svg >defs+ g[clip-path*="__lottie_element_"])`)]},blockAuthorAvatar(){return G.info(`【屏蔽】作者头像`),[q(`div.dy-tip-container:has([data-e2e="video-avatar"])`,`.basePlayerContainer div[aria-describedby]:has([data-e2e="video-avatar"])`)]},blockUserLiveSmallWindow(){return G.info(`【屏蔽】直播小窗`),q(`a[href*="live.douyin.com"] + div[style*="absolute"]:has(#slider-card[data-e2e="feed-live"] a[href*="live.douyin.com"])`,`a[href*="live.douyin.com"] + div[style*="absolute"]:empty`,`body > .__pre_create_player__ .LivePlayer_PreCreatePlayer`,`.LivePlayer_Preview`,`[data-e2e="feed-active-video"] a[href*="live.douyin.com/"]+[style*="absolute"]`)},blockUserLiveFlashingAvatar(){return G.info(`【屏蔽】右侧直播时闪烁的头像`),[q(`.basePlayerContainer a[href*="live.douyin.com"] div:has(>img[src*="douyin_web/media/avatar-live"]:only-child)`),K(`
      .basePlayerContainer a[href*="live.douyin.com"] .semi-avatar-wrapper .semi-avatar-additionalBorder{
        border: transparent !important;
      }
      .basePlayerContainer a[href*="live.douyin.com"] .semi-avatar-wrapper .semi-avatar{
        animation: none !important;
        border: 1px solid rgba(255,255,255,.06) !important;
      }
    `)]},blockLikeButton(){return G.info(`【屏蔽】点赞`),[q(`div.dy-tip-container:has([data-e2e="video-player-digg"])`,`.basePlayerContainer div[aria-describedby]:has([data-e2e="video-player-digg"])`)]},blockCommentButton(){return G.info(`【屏蔽】评论`),[q(`div.dy-tip-container:has([data-e2e="feed-comment-icon"])`,`.basePlayerContainer div[aria-describedby]:has([data-e2e="feed-comment-icon"])`)]},blockCollectionButton(){return G.info(`【屏蔽】收藏`),[q(`div.dy-tip-container:has([data-e2e="video-player-collect"])`,`.basePlayerContainer div[data-e2e="video-player-collect"][data-e2e-state="video-player-no-collect"]`)]},blockSharenButton(){return G.info(`【屏蔽】分享`),[q(`div.dy-tip-container:has([data-e2e="video-player-share"])`,`.basePlayerContainer div:has(>div[data-e2e="video-player-share"])`)]},blockListenDouYinButton(){return G.info(`【屏蔽】听抖音`),[q(`.basePlayerContainer div[aria-describedby]:has(path[d="M9.68718 12.4801C8.612 14.3927 8.1197 16.7374 8.05821 19.0767C8.23942 18.9661 8.4351 18.8725 8.64383 18.7988L9.16952 18.6132C10.7699 18.0482 12.5315 18.8701 13.1042 20.4491L15.3865 26.7417C15.9591 28.3206 15.126 30.0586 13.5257 30.6236L13 30.8092C11.4155 31.3686 9.85676 30.6485 8.86663 29.2939C8.83318 29.2583 8.80192 29.22 8.7732 29.1788C7.33136 27.1149 6.42117 24.618 6.13186 21.9841C5.75876 18.5873 6.12658 14.6403 7.8929 11.4983C9.70099 8.28189 12.9317 6 17.9885 6C23.0436 6 26.2778 8.27305 28.092 11.4819C29.8643 14.6168 30.2393 18.557 29.8725 21.9536C29.5881 24.5883 28.6825 27.0875 27.2445 29.155C27.2194 29.1911 27.1924 29.2251 27.1636 29.2569C26.1749 30.6354 24.6023 31.3737 23.0035 30.8092L22.4778 30.6236C20.8774 30.0586 20.0443 28.3206 20.617 26.7417L22.8993 20.4491C23.472 18.8701 25.2335 18.0482 26.8339 18.6132L27.3596 18.7988C27.5669 18.8719 27.7613 18.9648 27.9415 19.0744C27.8783 16.7301 27.382 14.3817 26.3001 12.468C24.846 9.89593 22.2949 8.02429 17.9885 8.02428C13.684 8.02428 11.1369 9.90129 9.68718 12.4801Z"])`)]},blockRelatedRecommendationsButton(){return G.info(`【屏蔽】看相关`),[q(`div.dy-tip-container:has(path[d="M14 8a8 8 0 00-8 8v4a8 8 0 008 8h8a8 8 0 008-8v-4a8 8 0 00-8-8h-8zm8.5 10.866a1 1 0 000-1.732l-6-3.464a1 1 0 00-1.5.866v6.928a1 1 0 001.5.866l6-3.464z"])`,`div.dy-tip-container:has(path[d=" M-4,-10 C-4,-10 4,-10 4,-10 C8.418000221252441,-10 12,-6.418000221252441 12,-2 C12,-2 12,2 12,2 C12,6.418000221252441 8.418000221252441,10 4,10 C4,10 -4,10 -4,10 C-8.418000221252441,10 -12,6.418000221252441 -12,2 C-12,2 -12,-2 -12,-2 C-12,-6.418000221252441 -8.418000221252441,-10 -4,-10z M4.5,0.8659999966621399 C5.166999816894531,0.48100000619888306 5.166999816894531,-0.48100000619888306 4.5,-0.8659999966621399 C4.5,-0.8659999966621399 -1.5,-4.329999923706055 -1.5,-4.329999923706055 C-2.1670000553131104,-4.715000152587891 -3,-4.234000205993652 -3,-3.4639999866485596 C-3,-3.4639999866485596 -3,3.4639999866485596 -3,3.4639999866485596 C-3,4.234000205993652 -2.1670000553131104,4.715000152587891 -1.5,4.329999923706055 C-1.5,4.329999923706055 4.5,0.8659999966621399 4.5,0.8659999966621399z"])`,`.basePlayerContainer div[aria-describedby]:has(path[d="M14 8a8 8 0 00-8 8v4a8 8 0 008 8h8a8 8 0 008-8v-4a8 8 0 00-8-8h-8zm8.5 10.866a1 1 0 000-1.732l-6-3.464a1 1 0 00-1.5.866v6.928a1 1 0 001.5.866l6-3.464z"])`,`.basePlayerContainer div[aria-describedby]:has(path[d="M14 8a8 8 0 0 0-8 8v4a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8v-4a8 8 0 0 0-8-8h-8zm8.5 10.866a1 1 0 0 0 0-1.732l-6-3.464a1 1 0 0 0-1.5.866v6.928a1 1 0 0 0 1.5.866l6-3.464z"])`,`.basePlayerContainer div[aria-describedby]:has(path[d=" M-4,-10 C-4,-10 4,-10 4,-10 C8.418000221252441,-10 12,-6.418000221252441 12,-2 C12,-2 12,2 12,2 C12,6.418000221252441 8.418000221252441,10 4,10 C4,10 -4,10 -4,10 C-8.418000221252441,10 -12,6.418000221252441 -12,2 C-12,2 -12,-2 -12,-2 C-12,-6.418000221252441 -8.418000221252441,-10 -4,-10z M4.5,0.8659999966621399 C5.166999816894531,0.48100000619888306 5.166999816894531,-0.48100000619888306 4.5,-0.8659999966621399 C4.5,-0.8659999966621399 -1.5,-4.329999923706055 -1.5,-4.329999923706055 C-2.1670000553131104,-4.715000152587891 -3,-4.234000205993652 -3,-3.4639999866485596 C-3,-3.4639999866485596 -3,3.4639999866485596 -3,3.4639999866485596 C-3,4.234000205993652 -2.1670000553131104,4.715000152587891 -1.5,4.329999923706055 C-1.5,4.329999923706055 4.5,0.8659999966621399 4.5,0.8659999966621399z"])`),K(`
				/* 修复分享的悬浮框距离底部的高度 */
				[data-e2e="video-player-share"]+div[data-e2e="video-share-container"] > div:first-child{
					bottom: 0px !important;
				}
			`)]},blockMoreButton(){return G.info(`【屏蔽】更多`),[q(`div.dy-tip-container:has([data-e2e="video-play-more"])`,`.basePlayerContainer div[data-e2e="video-play-more"]`,`[data-e2e="feed-live"] [data-e2e="basicPlayer"] > div:has(svg path[d="M13.556 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM19.778 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM24.222 19.556a1.778 1.778 0 1 0 0-3.556 1.778 1.778 0 0 0 0 3.556z"])`,`[data-e2e="feed-live"] .douyin-player div:has(>svg path[d="M13.556 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM19.778 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM24.222 19.556a1.778 1.778 0 1 0 0-3.556 1.778 1.778 0 0 0 0 3.556z"])`),K(`
				/* 修复分享的悬浮框距离底部的高度 */
				[data-e2e="video-player-share"]+div[data-e2e="video-share-container"] > div:first-child{
					bottom: 0px !important;
				}
			`)]}},di={init(){V.execMenuOnce(`shieldRightExpandCommentButton`,()=>this.blockRightExpandCommentButton()),V.execMenuOnce(`shieldSearchFloatingBar`,()=>this.blockSearchFloatingBar(),void 0,!0),V.execMenuOnce(`shieldCloseFullScreenButton`,()=>this.blockCloseFullScreenButton(),void 0,!0),V.execMenuOnce(`dy-video-blockShopInfo`,()=>this.blockShopInfo()),V.execMenuOnce(`dy-video-blockDanmaku`,()=>this.blockDanmaku()),V.execMenuOnce(`dy-video-blockStartPlayIcon`,()=>this.blockStartPlayIcon()),V.execMenuOnce(`dy-video-watchAndRemoveFullScreenTip`,()=>this.watchAndRemoveFullScreenTip()),V.execMenuOnce(`dy-video-blockMessage`,()=>this.blockMessage()),ii.init(),ri.init(),ui.init(),ai.init(),si.init(),ci.init(),li.init()},blockRightExpandCommentButton(){return G.info(`【屏蔽】右侧的展开评论按钮`),[q(`#sliderVideo[data-e2e="feed-active-video"] > div > div > button[type="button"]`,`.playerContainer button[type=button] svg > g[filter] > path[d="M21.316 29.73a1.393 1.393 0 01-1.97 0l-5.056-5.055a1.393 1.393 0 010-1.97l.012-.011 5.044-5.045a1.393 1.393 0 011.97 1.97l-4.07 4.071 4.07 4.071a1.393 1.393 0 010 1.97z"]`),K(`
			.basePlayerContainer .positionBox{
				padding-right: 20px !important;
			}`)]},blockSearchFloatingBar(){G.info(`【屏蔽】搜索悬浮栏`);let e=[];return e.push(q(`#slideMode + div`,`.playerContainer .slider-video>div>div:has([data-e2e="searchbar-button"]):not([class*="douyin-player"])`,`.douyin-player > div:has([data-e2e="searchbar-input"])`)),Z.isSearch()||Z.isDiscover()||Z.isUser()?e.push(q(`#douyin-right-container > div > div > div > div:has( div> input[data-e2e="searchbar-input"])`)):Z.isVideo()?e.push(q(`[data-e2e="video-detail"] .video-detail-container > div > div > div:nth-child(2):has( div> input[data-e2e="searchbar-input"])`)):Z.isNote()?e.push(q(`.note-detail-container > div > div:has( > div > div input[data-e2e="searchbar-input"])`)):(Z.isJingXuan()||Z.isHot())&&e.push(q(`#douyin-right-container div:has([data-e2e="modal-video-container"]) div:has(>div>input[data-e2e="searchbar-input"])`)),e},blockCloseFullScreenButton(){G.info(`【屏蔽】网页全屏关闭按钮`);let e=[];return e.push(q(`.playerContainer .slider-video > div > div:not([class*="douyin-player"]):has(path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])`,`div:has(>svg path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])`)),(Z.isSearch()||Z.isDiscover())&&e.push(q(`#douyin-right-container  div > div:has( > svg > path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])`)),Z.isUser()&&e.push(q(`#douyin-right-container  div > div > div:has( > svg > path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])`)),Z.isVideo()&&e.push(q(`#douyin-right-container  div > div > div:has( > svg > path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])`)),e},blockShopInfo(){return G.info(`【屏蔽】购物信息`),q(`.xgplayer-shop-anchor`)},blockDanmaku(){return G.info(`【屏蔽】弹幕`),q(`.basePlayerContainer .danmu`)},blockStartPlayIcon(){return G.info(`【屏蔽】中间的播放图标`),q(`.xgplayer-start`)},watchAndRemoveFullScreenTip(){G.info(`【屏蔽】ESC或Y可退出网页全屏`);let e=new H.LockFunction(()=>{Z.isLive()||U.remove(`body>div:has(>div:only-child)[style*="z-index"]:not(.semi-portal):contains("可退出网页全屏")`)}),t=H.mutationObserver(document.body,{config:{childList:!0},immediate:!0,callback:()=>{e.run()}});return()=>{t.disconnect()}},blockMessage(){return G.info(`【屏蔽】消息`),q(`.xgplayer > div[style*="transform"]:has(>img[src^="data:image"])`,`.douyin-player>div:has(path[d="M11.348 18.245l6.883-11.841A1.6 1.6 0 0 0 16.847 4L3.13 4.007c-1.402 0-2.125 1.675-1.165 2.696L6.59 11.62a.1.1 0 0 1 .023.04l1.816 6.23c.394 1.35 2.213 1.572 2.92.355zM3.13 5.508L16.848 5.5c.03 0 .043.007.05.01a.11.11 0 0 1 .036.04.11.11 0 0 1 .016.051c0 .008 0 .022-.016.05l-6.882 11.84a.14.14 0 0 1-.026.035.048.048 0 0 1-.012.008.117.117 0 0 1-.06.007.117.117 0 0 1-.059-.021.046.046 0 0 1-.01-.011.142.142 0 0 1-.016-.04l-1.644-5.64 4.84-3.803c.184-.145.014-.433-.201-.342l-5.669 2.39-4.137-4.399a.141.141 0 0 1-.026-.034.045.045 0 0 1-.004-.014.116.116 0 0 1 .01-.06.116.116 0 0 1 .037-.05.045.045 0 0 1 .013-.005.141.141 0 0 1 .042-.005z"])`,`.xgplayer>div:has(path[d="M11.348 18.245l6.883-11.841A1.6 1.6 0 0 0 16.847 4L3.13 4.007c-1.402 0-2.125 1.675-1.165 2.696L6.59 11.62a.1.1 0 0 1 .023.04l1.816 6.23c.394 1.35 2.213 1.572 2.92.355zM3.13 5.508L16.848 5.5c.03 0 .043.007.05.01a.11.11 0 0 1 .036.04.11.11 0 0 1 .016.051c0 .008 0 .022-.016.05l-6.882 11.84a.14.14 0 0 1-.026.035.048.048 0 0 1-.012.008.117.117 0 0 1-.06.007.117.117 0 0 1-.059-.021.046.046 0 0 1-.01-.011.142.142 0 0 1-.016-.04l-1.644-5.64 4.84-3.803c.184-.145.014-.433-.201-.342l-5.669 2.39-4.137-4.399a.141.141 0 0 1-.026-.034.045.045 0 0 1-.004-.014.116.116 0 0 1 .01-.06.116.116 0 0 1 .037-.05.045.045 0 0 1 .013-.005.141.141 0 0 1 .042-.005z"])`)}},fi=`/* 竖屏且高度小于550px */\r
@media screen and (max-width: 550px) and (orientation: portrait) {\r
  /* 右侧工具栏放大 */\r
  .basePlayerContainer .positionBox {\r
    bottom: 80px !important;\r
    padding-right: 5px !important;\r
    scale: unset !important;\r
    transform: scale3d(1.12, 1.12, 1.12) !important;\r
  }\r
  /* 右侧工具栏的svg再放大 */\r
  .basePlayerContainer .positionBox svg {\r
    transform: scale3d(1.12, 1.12, 1.12);\r
  }\r
  /* 重置关注按钮的scale */\r
  .basePlayerContainer .positionBox .dy-tip-container div[data-e2e="feed-follow-icon"] svg {\r
    scale: unset !important;\r
  }\r
\r
  /* 调整顶部搜索框的宽度 */\r
  #douyin-header\r
    div[data-click="doubleClick"]\r
    > div[data-click="doubleClick"]\r
    > div:has(input[data-e2e="searchbar-input"]) {\r
    width: 150px;\r
    padding-right: 0;\r
    max-width: unset;\r
    flex: 1;\r
  }\r
  /* 搜索框获取焦点时隐藏右侧的菜单 */\r
  #douyin-header\r
    div[data-click="doubleClick"]\r
    > div[data-click="doubleClick"]:has(input[data-e2e="searchbar-input"]:focus)\r
    [id^="douyin-header-menu"] {\r
    display: none !important;\r
  }\r
  /* 搜索框获取焦点时自动放大宽度 */\r
  #douyin-header\r
    div[data-click="doubleClick"]\r
    > div[data-click="doubleClick"]\r
    > div:has(input[data-e2e="searchbar-input"]:focus) {\r
    width: 100vw;\r
    width: 100dvw;\r
  }\r
  /* 搜索页面 搜索详情的宽度、视频结果列表的宽度 */\r
  #search-content-area > div,\r
  #search-content-area > div div:has(+ #search-result-container),\r
  #search-content-area > div #search-result-container {\r
    width: 100%;\r
    width: -webkit-fill-available;\r
    width: -moz-available;\r
  }\r
  /* 搜索页面 视频右侧的工具栏缩小 */\r
  #search-content-area .basePlayerContainer .positionBox {\r
    bottom: 28px !important;\r
    transform: scale3d(0.6, 0.6, 0.6) !important;\r
  }\r
  /* 搜索页面 搜索出的用户信息换行 */\r
  #search-content-area #search-result-container ul[data-e2e="scroll-list"] li .search-result-card > div > div {\r
    flex-wrap: wrap;\r
  }\r
  /* 搜索页面 搜索结果筛选选项 综合、视频、用户、直播的超出宽度换行 */\r
  #search-content-area div:has(> div > div > span[data-key="general"]) {\r
    overflow: auto;\r
    gap: 10px;\r
  }\r
  /* 搜索页面 搜索结果筛选选项 */\r
  #search-content-area div:has(> span[data-key="general"]) {\r
    gap: 10px;\r
  }\r
  /* 搜索页面 搜索结果筛选选项弹窗修复 */\r
  #search-content-area div:has(> div > span[data-key="general"]) {\r
    position: unset !important;\r
  }\r
  /* 搜索页面 搜索结果筛选选项 */\r
  #search-content-area div:has(> span[data-key="general"]) > * {\r
    white-space: nowrap !important;\r
    width: auto !important;\r
    width: fit-content !important;\r
    margin-left: 0px !important;\r
    margin-right: 0px !important;\r
  }\r
  /* 去除设置min-width超出浏览器宽度的问题 */\r
  body {\r
    min-width: 100% !important;\r
  }\r
  /* 去除设置width导致顶部工具栏超出浏览器宽度的问题 */\r
  #douyin-right-container #douyin-header {\r
    width: 100%;\r
  }\r
  /* 去除设置 */\r
  #douyin-right-container #douyin-header > div[data-click="doubleClick"] {\r
    min-width: 100%;\r
  }\r
\r
  /* /video/xxx页面 */\r
  /* 点赞、评论、分享偏移 */\r
  div[data-e2e="video-detail"] .leftContainer .basePlayerContainer .positionBox {\r
    padding-right: 30px !important;\r
  }\r
  /* 底部工具栏右侧的按钮 */\r
  div[data-e2e="video-detail"] .leftContainer .xgplayer.xgplayer-pc .xg-right-grid {\r
    margin-right: 35px !important;\r
  }\r
  /* 评论区全屏 */\r
  div[data-e2e="video-detail"] .leftContainer > div:has(.comment-mainContent[data-e2e="comment-list"]),\r
  div[data-e2e="video-detail"] .leftContainer > div > div:has(.comment-mainContent[data-e2e="comment-list"]) {\r
    width: calc(100dvw - 20px) !important;\r
  }\r
\r
  /* 设置视频区域的高度 */\r
  #slidelist {\r
    width: 100%;\r
    height: calc(100dvh - var(--header-height)) !important;\r
  }\r
  /* 修正网页全屏下的视频高度 */\r
  #slidelist[class*="isCssFullScreen"] {\r
    height: round(nearest, 100dvh, 1px) !important;\r
  }\r
  /* 去除视频区域右侧偏移 */\r
  .is-mobile-pc div[data-e2e="slideList"] {\r
    padding-right: 0px !important;\r
  }\r
  /* 推荐视频的高度适配 */\r
  #slidelist .page-recommend-container {\r
    margin-top: 8px !important;\r
    margin-bottom: 4px !important;\r
  }\r
  /* 网页全屏下的推荐视频的高度适配 */\r
  #slidelist[class*="isCssFullScreen"] .page-recommend-container {\r
    margin: 0px !important;\r
  }\r
  /* 底部工具栏右侧的按钮不换行显示 */\r
  #slidelist .page-recommend-container xg-right-grid.xg-right-grid {\r
    flex-wrap: nowrap;\r
    white-space: nowrap;\r
    overflow: auto;\r
    align-items: start;\r
    justify-content: start;\r
    margin: 0px;\r
  }\r
}\r
\r
/* 横屏且高度小于550px */\r
@media screen and (max-height: 550px) and (orientation: landscape) {\r
  /* 右侧工具栏缩小 */\r
  .basePlayerContainer .positionBox {\r
    transform: scale(0.95) !important;\r
    bottom: 42px !important;\r
    padding-right: 10px !important;\r
  }\r
  /* 右侧工具栏的svg再缩小 */\r
  .basePlayerContainer .positionBox svg {\r
    transform: scale3d(0.95, 0.95, 0.95);\r
  }\r
  /* 修复全屏下不显示视频底部的控制栏 */\r
  .isCssFullScreen [data-e2e="slideList"] {\r
    min-height: auto !important;\r
  }\r
}\r
`,pi=`data-is-inject-mouse-hide`,mi=(e,t,n=!0)=>{let r=`data-opacity-show`,i=`data-opacity-hide`,a=[],o=V.getDynamicValue(e,V.getDefaultValue(e)),s=(e=o.value)=>{let a=n?` !important`:``;return e===0?`
            ${t.join(`,`)}{
                opacity: 0${a};
                transition: ${e===0?`none !important;`:`opacity .3s linear !important;`}

                &[${i}]{
                    opacity: 0${a};
                }
                &[${r}],
                &:hover{
                    opacity: 1${a};
                }
            }
            `:`
            ${t.join(`,`)}{
                transition: opacity .3s linear !important;

                &[${i}]{
                    opacity: 0${a};
                }
                &[${r}]{
                    opacity: 1${a};
                }
                &:hover{
                    opacity: 1${a};
                }
            }
            `},c=K(s());a.push(c);let l=V.addValueChangeListener(e,(e,t)=>{U.html(c,s(t))});a.push(()=>{V.removeValueChangeListener(l)});let u=new H.LockFunction(()=>{t.forEach(e=>{let t=J(`${e.trim()}:not([${pi}])`);if(!t||t.querySelector(`[data-is-inject-mouse-hide]`)||t.closest(`[data-is-inject-mouse-hide]`))return;t.setAttribute(pi,``);let n=0,s=()=>{clearTimeout(n),o.value===0||t.hasAttribute(i)&&t.removeAttribute(i),t.hasAttribute(r)||t.setAttribute(r,``)},c=(e=!1)=>{e?n=setTimeout(()=>{c(!e)},o.value):t.matches(`:hover`)||(o.value===0||t.hasAttribute(i)||t.setAttribute(i,``),t.hasAttribute(r)&&t.removeAttribute(r))},l=t.closest(`#sliderVideo, #slideMode, [data-e2e="video-detail"], .douyin-player, .playerContainer`),u=0,d=()=>{let e=Date.now();e-u<150||(u=e,s(),c(!0))},f=()=>{u=0,d()},p=()=>{s(),c(!0)};l?.addEventListener(`pointermove`,d,{passive:!0}),t.addEventListener(`pointerenter`,f),t.addEventListener(`pointerleave`,p);let m=new IntersectionObserver(e=>{e[0].isIntersecting&&(s(),c(!0))},{root:null,rootMargin:`50px`,threshold:.1});m.observe(t),a.push(()=>{clearTimeout(n),l?.removeEventListener(`pointermove`,d),t.removeEventListener(`pointerenter`,f),t.removeEventListener(`pointerleave`,p),m.unobserve(t),m.disconnect()})})}),d=null,f=H.mutationObserver(document.body||document.documentElement,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{d===null&&(d=window.setTimeout(()=>{d=null,u.run()},250))}});return a.push(()=>{d!==null&&window.clearTimeout(d),f?.disconnect()}),a},hi=function(e,t,n,r,i,a,o,s,c,l){let u={text:e,type:`button`,attributes:{},props:{},description:t,buttonIcon:r,buttonIsRightIcon:i,buttonIconIsLoading:a,buttonType:o,buttonText:n,callback(e){typeof s==`function`&&s(e)},afterAddToUListCallBack:c};return Reflect.set(u.attributes,ur,()=>{u.disable=!!(typeof l==`function`?l():l)}),u},gi=class{KEY=`short-cut`;#e={otherShortCutOptions:[],localOptions:[],currentWaitEnterPressInstanceHandler:null};#t={isWaitPress:!1};constructor(e){typeof e==`string`&&(this.KEY=e),this.initData()}initConfig(e,t){this.hasOption(e)||this.setOption(e,t)}initData(e){this.#e.localOptions.length=0,this.#e.localOptions=e??this.getLocalAllOptions()}isWaitKeyboardPress(){return this.#t.isWaitPress}getStorageKey(){return this.KEY}getLocalAllOptions(){return Rn(this.KEY,[])}hasOption(e){return!!this.getLocalAllOptions().find(t=>t.key===e)}hasOptionValue(e){return this.hasOption(e)?this.getOption(e)?.value!=null:!1}getOption(e,t){return this.getLocalAllOptions().find(t=>t.key===e)??t}setOption(e,t){let n=this.getLocalAllOptions(),r=n.findIndex(t=>t.key===e);r==-1?n.push({key:e,value:t}):Reflect.set(n[r],`value`,t),this.initData(n),Un(this.KEY,n)}emptyOption(e){let t=!1,n=this.getLocalAllOptions(),r=n.findIndex(t=>t.key===e);return r!==-1&&(n[r].value=null,t=!0),this.initData(n),Un(this.KEY,n),t}deleteOption(e){let t=!1,n=this.getLocalAllOptions(),r=n.findIndex(t=>t.key===e);return r!==-1&&(n.splice(r,1),t=!0),this.initData(n),Un(this.KEY,n),t}translateKeyboardValueToButtonText(e){let t=``;return e.ohterCodeList.forEach(e=>{t+=H.stringTitleToUpperCase(e,!0)+` + `}),e.keyName===` `?t+=H.stringTitleToUpperCase(`space`):t+=H.stringTitleToUpperCase(e.keyName),t}getShowText(e,t){if(this.hasOption(e)){let n=this.getOption(e);return n.value==null?t:this.translateKeyboardValueToButtonText(n.value)}return t}initGlobalKeyboardListener(e,t){if(!this.#e.localOptions.length){G.warn(`快捷键配置为空`);return}let n=(e,n)=>{U.onKeyboard(e,`keydown`,async(e,r,i,a)=>{if(this.#t.isWaitPress)return;t?.isPrevent&&U.preventEvent(a),t?.onlyStopPropagation&&U.preventEvent(a,!0);let o=JSON.stringify({keyName:e,keyValue:r,ohterCodeList:i}),s=this.#e.localOptions.filter(e=>{let t=e.value;return JSON.stringify(t)===o});if(s.length)for(let e of s){if(G.info(`调用快捷键`,e),typeof t?.beforeCallBack==`function`){let e=await t.beforeCallBack();if(typeof e==`boolean`&&!e)return;typeof e==`object`&&e&&(e.isPrevent&&U.preventEvent(a),e.onlyStopPropagation&&U.preventEvent(a,!0))}let r=n.filter(t=>t.menuKey===e.key);if(r.length)for(let t of r)await t.option.callback(e.key)}},{capture:!!t?.capture})},r=[],i=[];Array.isArray(e)||(e=[e]),e.forEach(e=>{Object.keys(e).forEach(t=>{let n=e[t];(n.target==null||typeof n.target==`string`&&n.target===``)&&(n.target=`window`),n.target===`window`?r.push({menuKey:t,option:n}):i.push({menuKey:t,option:n})})}),n(window,r),U.onReady(()=>{i.forEach(async e=>{let t=e.option,r=null;r=typeof t.target==`string`?await U.waitNode(t.target,1e4):typeof t.target==`function`?await t.target():t.target,r&&n(r,[e])})})}async enterShortcutKeys(e){return this.#t.isWaitPress=!0,new Promise(t=>{let n=U.onKeyboard(window,`keyup`,(n,r,i)=>{let a={keyName:n,keyValue:r,ohterCodeList:i},o={};try{let t=JSON.stringify(a),n=this.getLocalAllOptions();Array.isArray(this.#e.otherShortCutOptions)&&(n=n.concat(this.#e.otherShortCutOptions));let r=n.filter(n=>{if(n.key===e)return!1;let r=JSON.stringify(n.value);return n.value!=null&&t===r});if(r.length)return o={status:!1,key:e,option:a,localConflictOptions:r},o;this.setOption(e,a),o={status:!0,key:e,option:a,localConflictOptions:[]}}catch(t){G.error(t),o={status:!1,key:e,option:a,localConflictOptions:[]}}finally{typeof this.#e.currentWaitEnterPressInstanceHandler==`function`&&this.#e.currentWaitEnterPressInstanceHandler(),this.#e.currentWaitEnterPressInstanceHandler=null,t(o)}});this.#e.currentWaitEnterPressInstanceHandler=null,this.#e.currentWaitEnterPressInstanceHandler=()=>{this.#t.isWaitPress=!1,n.off(),this.#e.currentWaitEnterPressInstanceHandler=null}})}cancelEnterShortcutKeys(){typeof this.#e.currentWaitEnterPressInstanceHandler==`function`&&this.#e.currentWaitEnterPressInstanceHandler()}},_i=function(e,t,n,r,i,a=`default`,o,s){let c=typeof i==`function`?i():i;typeof r==`object`&&r&&o.initConfig(n,r);let l=()=>o.getShowText(n,c),u=hi(e,t,l,`keyboard`,!1,!1,a,async e=>{if(e instanceof PointerEvent&&e.x===0&&e.y===0)return;let t=e.target.closest(`.pops-panel-button`)?.querySelector(`span`);if(o.isWaitKeyboardPress())z.warning(`请先执行当前的录入操作`);else{if(o.hasOptionValue(n))o.emptyOption(n),z.success(`清空快捷键`);else{let e=z.loading(`请按下快捷键...`,{showClose:!0,onClose(){o.cancelEnterShortcutKeys()}}),{status:t,option:r,key:i}=await o.enterShortcutKeys(n);if(e.close(),t){if(typeof s==`function`){let e=await s(r,o);if(typeof e==`boolean`&&!e){o.deleteOption(n);return}}G.success(`录入快捷键`,r),z.success(`录入成功`)}else z.error(`快捷键 ${o.translateKeyboardValueToButtonText(r)} 已被 ${i} 占用`)}U.html(t,l())}});return u.attributes={},Reflect.set(u.attributes,ur,()=>!1),u},vi=function(e,t,n,r,i,a){let o={type:`own`,attributes:r||{},props:i||{},createLIElement:e,afterAddToUListCallBack:a};return typeof t==`object`&&t&&Object.keys(t).length>0?Reflect.set(o.attributes,pr,t):Reflect.set(o.attributes,ur,()=>!1),typeof n==`object`&&n&&Reflect.set(o.attributes,mr,n),o},yi=function(e,t,n,r,i,a,o){let s={text:e,type:`select`,description:a,attributes:{},props:{},getValue(){return this.props[B].get(t,n)},callback(e){if(e==null)return;let n=e.value;G.info(`选择：${e.text}`),typeof i==`function`&&i(e)||(this.props[B].set(t,n),typeof o==`function`&&o(e))},data:r};return Reflect.set(s.attributes,dr,t),Reflect.set(s.attributes,fr,n),Ci.initComponentsStorageApi(`select`,s,{get(e,t){return V.getValue(e,t)},set(e,t){V.setValue(e,t)}}),s},bi=function(e,t,n,r,i,a,o=`请至少选择一个选项`,s,c){let l=[];l=typeof r==`function`?r():r;let u={text:e,type:`select-multiple`,description:a,placeholder:o,attributes:{},props:{},getValue(){return this.props[B].get(t,n)},selectConfirmDialogConfig:s,callback(e){let n=this.props[B],r=[];e.forEach(e=>{r.push(e.value)}),G.info(`多选-选择：`,r),typeof i==`function`&&i(e)||(n.set(t,r),typeof c==`function`&&c(e))},data:l};return Reflect.set(u.attributes,dr,t),Reflect.set(u.attributes,fr,n),Ci.initComponentsStorageApi(`select-multiple`,u,{get(e,t){return V.getValue(e,t)},set(e,t){V.setValue(e,t)}}),u},xi=function(e,t,n,r,i,a,o,s,c,l){let u={text:e,type:`slider`,description:s,attributes:{},props:{},getValue(){return this.props[B].get(t,n)},getToolTipContent(e){return typeof o==`function`?o(e):`${e}`},callback(e,n){typeof a==`function`&&a(e,n)||(this.props[B].set(t,n),typeof l==`function`&&l(e,n))},min:r,max:i,step:c};return Reflect.set(u.attributes,dr,t),Reflect.set(u.attributes,fr,n),Ci.initComponentsStorageApi(`slider`,u,{get(e,t){return V.getValue(e,t)},set(e,t){V.setValue(e,t)}}),u},Q=function(e,t,n=!1,r,i,a,o,s,c){if(c&&typeof c.defaultValue==`object`&&c.defaultValue!=null){let n=c.key??t;c.handler.add({key:n,name:e}),c.handler.shortCut.initConfig(n,c.defaultValue)}let l={text:e,type:`switch`,description:i,disabled:o,attributes:{},props:{},getValue(){return this.props[B].get(t,n)},callback(n,i){let a=!!i;G.success(`${a?`开启`:`关闭`} ${e}`),typeof r==`function`&&r(n,a)||(this.props[B].set(t,a),typeof s==`function`&&s(n,a))},afterAddToUListCallBack:(...n)=>{if(a?.(...n),c){let r=c.handler.shortCut,i=c.key??t,[a,o]=n,s=o.target?.querySelector(`.pops-panel-item-left-main-text`);if(!s)return;let l=()=>{let t=c.handler.shortCut.getShowText(i,`暂未录入快捷键`),n=U.createElement(`div`,{className:`pops-switch-shortcut-wrapper`,innerHTML:`
              <i class="pops-bottom-icon" is-loading="false">
                <svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">
                  <path d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
                  <path d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
                  <path d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
                </svg>
              </i>
            `},{style:`margin-right: 5px;display: inline-flex;`}),r=n.querySelector(`.pops-bottom-icon`);U.on(r,`click`,function(e){c.handler.shortCut.deleteOption(i),a.toolTip.offEvent(),a.toolTip.close(),a.toolTip.destory(),n.remove()},{once:!0});let a=W.tooltip({$target:r,content:()=>t,className:`github-tooltip`,isFixed:!0,only:!0});U.empty(s),U.append(s,n,e)};if(W.rightClickMenu({$target:s,only:!0,data:[{text:()=>c.handler.shortCut.hasOption(i)?`修改快捷键`:`添加快捷键`,icon:W.config.iconSVG.keyboard,callback(e,t,n,a){if(r.isWaitKeyboardPress()){z.warning(`请先执行当前的录入操作`);return}let o=z.loading(`请按下快捷键...`,{showClose:!0,onClose(){r.cancelEnterShortcutKeys()}});r.enterShortcutKeys(i).then(({status:e,option:t,key:n})=>{o.close(),e?(G.success(`录入快捷键`,t),z.success(`录入成功`),l()):z.error(`快捷键 ${r.translateKeyboardValueToButtonText(t)} 已被 ${n} 占用`)})}}]}),!r.hasOption(i))return;l()}}};return Reflect.set(l.attributes,dr,t),Reflect.set(l.attributes,fr,n),Ci.initComponentsStorageApi(`switch`,l,{get(e,t){return V.getValue(e,t)},set(e,t){V.setValue(e,t)}}),l},Si=function(e,t,n,r,i,a=``,o,s){let c={text:e,type:`textarea`,attributes:{},props:{},description:r,placeholder:a,disabled:o,getValue(){let e=this.props[B].get(t,n);return Array.isArray(e)?e.join(`
`):e},callback(e,n){typeof i==`function`&&i(e,n)||(this.props[B].set(t,n),typeof s==`function`&&s(e,n))}};return Reflect.set(c.attributes,dr,t),Reflect.set(c.attributes,fr,n),Ci.initComponentsStorageApi(`switch`,c,{get(e,t){return V.getValue(e,t)},set(e,t){V.setValue(e,t)}}),c},Ci={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||=new Nn.Dictionary,this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t)},initComponentsStorageApi(e,t,n){let r;r=this.hasStorageApi(e)?this.getStorageApi(e):n,this.setComponentsStorageApiProperty(t,r)},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,B,t)}},wi=function(e,t,n,r,i,a=``,o=`text`,s,c){let l={text:e,type:`input`,inputType:o,attributes:{},props:{},description:r,placeholder:a,afterAddToUListCallBack:s,getValue(){return this.props[B].get(t,n)},callback(e,n){let r=e.target.validity.valid;typeof i==`function`&&i(e,n,r)||(this.props[B].set(t,n),typeof c==`function`&&c(e,n,r))}};return Reflect.set(l.attributes,dr,t),Reflect.set(l.attributes,fr,n),Ci.initComponentsStorageApi(`input`,l,{get(e,t){return V.getValue(e,t)},set(e,t){V.setValue(e,t)}}),l},Ti=class{option;constructor(e){this.option=e}getAllRule(){return Rn(this.option.STORAGE_API_KEY,[])}setAllRule(e){Un(this.option.STORAGE_API_KEY,e)}clearAllRule(){this.setAllRule([])}getRule(e){let t=this.getAllRule(),n=t.findIndex(t=>t.uuid===e);if(n!==-1)return t[n]}setRule(e){let t=this.getAllRule(),n=t.findIndex(t=>t.uuid===e.uuid),r=!1;return n!==-1&&(t[n]=e,this.setAllRule(t),r=!0),r}addRule(e){let t=this.getAllRule(),n=t.findIndex(t=>t.uuid===e.uuid),r=!1;return n!==-1||(t.push(e),this.setAllRule(t),r=!0),r}updateRule(e){let t=this.getAllRule(),n=t.findIndex(t=>t.uuid===e.uuid);n===-1?t.push(e):t[n]=e,this.setAllRule(t)}deleteRule(e){let t=this.getAllRule(),n=typeof e==`string`?e:e.uuid,r=t.findIndex(e=>e.uuid===n);return r!==-1&&(t.splice(r,1),this.setAllRule(t),!0)}importRules(e){let t=W.alert({title:{text:`请选择导入方式`,position:`center`},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},mask:{enable:!0},drag:!0,width:gr.info.width,height:gr.info.height,style:`
      .pops{
        max-height: 90dvh;
      }
      .btn-control{
          display: inline-block;
          margin: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          cursor: pointer;
      }`}),n=t.$shadowRoot.querySelector(`.btn-control[data-mode='local']`),r=t.$shadowRoot.querySelector(`.btn-control[data-mode='network']`),i=t.$shadowRoot.querySelector(`.btn-control[data-mode='clipboard']`),a=async t=>{let n=this.getAllRule(),r=[],i=[],a=!1;for(let e=0;e<t.length;e++){let a=t[e],o=n.findIndex(e=>e.uuid===a.uuid);o===-1?r.push(a):i.push({index:o,data:a})}if(i.length&&await new Promise(e=>{W.alert({title:{text:`覆盖规则`,position:`center`},content:{text:`存在相同的uuid的规则 ${i.length}条，是否进行覆盖？`,html:!0},btn:{close:{callback(t){t.close(),e(!1)}},ok:{text:`覆盖`,callback(t){t.close(),e(!0)}}},width:gr.info.width,height:gr.info.height,mask:{enable:!0},drag:!0,style:`
            .pops{
              max-height: 90dvh;
            }
            `})})){for(let e of i)n[e.index]=e.data;a=!0}r.length&&(n=n.concat(r)),this.setAllRule(n);let o=`共 ${t.length} 条规则，新增 ${r.length} 条，覆盖 ${a?i.length:0} 条`;z.success(o),e?.()},o=e=>new Promise(async t=>{let n=H.toJSON(e);Array.isArray(n)?n.length?(await a(n),t(!0)):(z.error(`导入失败，解析出的数据为空`,{consoleLogContent:!0}),t(!1)):(G.error(n),z.error(`导入失败，格式不符合（不是数组）`,{consoleLogContent:!0}),t(!1))});U.on(n,`click`,e=>{U.preventEvent(e),t.close();let n=U.createElement(`input`,{type:`file`,accept:`.json`});U.on(n,[`propertychange`,`input`],()=>{if(!n.files?.length)return;let e=n.files[0],t=new FileReader;t.onload=()=>{o(t.result)},t.readAsText(e,`UTF-8`)}),n.click()}),U.on(r,`click`,e=>{U.preventEvent(e),t.close();let n=W.prompt({title:{text:`网络导入`,position:`center`},content:{text:``,placeholder:`请填写URL`,focus:!0},btn:{close:{enable:!0,callback(e){e.close()}},ok:{text:`导入`,callback:async e=>{let t=e.text;if(H.isNull(t)){z.error(`请填入完整的url`);return}let n=z.loading(`正在获取配置...`),r=await Er.get(t,{allowInterceptConfig:!1});n.close(),r.status?await o(r.data.responseText)&&e.close():(G.error(r),z.error(`获取配置失败`,{consoleLogContent:!0}))}},cancel:{enable:!1}},mask:{enable:!0},drag:!0,width:gr.info.width,height:`auto`,style:`
        .pops{
          max-height: 90dvh;
        }
        `}),r=n.$shadowRoot.querySelector(`input`),i=n.$shadowRoot.querySelector(`.pops-prompt-btn-ok`);U.on(r,[`input`,`propertychange`],()=>{U.val(r)===``?U.attr(i,`disabled`,`true`):U.removeAttr(i,`disabled`)}),U.onKeyboard(r,`keydown`,(e,t,n)=>{e===`Enter`&&n.length===0&&U.val(r)!==``&&U.emit(i,`click`)}),U.emit(r,`input`)}),U.on(i,`click`,async e=>{U.preventEvent(e),t.close();let n=await H.getClipboardInfo();n.error==null?n.content.trim()===``?z.warning(`获取到的剪贴板内容为空`):await o(n.content):z.error(n.error.toString())})}exportRules(e=`rule.json`){let t=this.getAllRule(),n=new Blob([JSON.stringify(t,null,4)]),r=globalThis.URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=e,i.click(),setTimeout(()=>{globalThis.URL.revokeObjectURL(r)},1500)}},Ei=class{option;constructor(e){this.option=e}async showView(){let e=W.confirm({title:{text:this.option.title,position:`center`},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:!0},btn:H.assign({ok:{callback:async()=>{await i()}}},this.option.btn||{},!0),drag:!0,mask:{enable:!0},style:`
      ${W.config.cssText.panelCSS}
      
      .pops{
        max-height: 90dvh;
      }
      .rule-form-container {
          
      }
      .rule-form-container li{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 5px 20px;
        gap: 10px;
      }
      .rule-form-ulist-dynamic{
        --button-margin-top: 0px;
        --button-margin-right: 0px;
        --button-margin-bottom: 0px;
        --button-margin-left: 0px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5px 0px 5px 20px;
      }
      .rule-form-ulist-dynamic__inner{
        width: 100%;
      }
      .rule-form-ulist-dynamic__inner-container{
        display: flex;
        align-items: center;
      }
      .dynamic-forms{
        width: 100%;
      }
      .pops-panel-item-left-main-text{
        max-width: 150px;
      }
      .pops-panel-item-right-text{
        padding-left: 30px;
      }
      .pops-panel-item-right-text,
      .pops-panel-item-right-main-text{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .pops-panel-item-left-desc-text{
        line-height: normal;
        margin-top: 6px;
        font-size: 0.8em;
        color: rgb(108, 108, 108);
      }

      ${this.option?.style??``}
      `,width:typeof this.option.width==`function`?this.option.width():window.innerWidth>500?`500px`:`88vw`,height:typeof this.option.height==`function`?this.option.height():window.innerHeight>500?`500px`:`80vh`}),t=e.$shadowRoot.querySelector(`.rule-form-container`),n=e.$shadowRoot.querySelector(`.rule-form-ulist`),r=await this.option.getView(await this.option.data());U.append(n,r);let i=async()=>{(await this.option.onsubmit(t,await this.option.data())).success&&(e.close(),typeof this.option.dialogCloseCallBack==`function`&&await this.option.dialogCloseCallBack(!0))};return e}},Di=class{option;constructor(e){this.option=e}async showView(e){let t=W.confirm({title:{text:this.option.title,position:`center`},content:{text:`
        <div class="rule-view-search-container">
          <div class="pops-panel-select pops-user-select-none" data-mode="native" style="min-width: 50px;">
            <select class="select-rule-status">
            </select>
          </div>
          <div class="pops-panel-select pops-user-select-none" data-mode="native" style="min-width: 50px;">
            <select class="select-rule-value">
            </select>
          </div>
          <div class="pops-panel-input pops-user-select-none">
            <div class="pops-panel-input_inner">
                <input type="text" placeholder="">
            </div>
          </div>
        </div>
        <div class="rule-view-container"></div>
        `,html:!0},style:`
      ${W.config.cssText.panelCSS}

      .pops{
        max-height: 90dvh;
      }
      .rule-view-search-container{
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
      }
      .rule-view-search-container .pops-panel-select{
        min-width: fit-content;
        max-width: 60px;
      }
      .rule-view-search-container .pops-panel-select select{
        width: 100%;
        min-width: auto;
      }
      .rule-view-search-container .pops-panel-input{
        width: 100%;
      }


      .rule-item{
          display: flex;
          align-items: center;
          line-height: normal;
          font-size: 16px;
          padding: 4px 8px;
          gap: 8px;
      }
      .rule-name{
          flex: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
      }
      .rule-controls{
          display: flex;
          align-items: center;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          gap: 8px;
          padding: 0px;
      }
      .rule-controls-enable{
          
      }
      .rule-controls-edit{
          
      }
      .rule-controls-delete{
          
      }
      .rule-controls-edit,
      .rule-controls-delete{
          width: 16px;
          height: 16px;
          cursor: pointer;
      }
      `,btn:{merge:!0,reverse:!1,position:`space-between`,ok:{enable:this.option?.bottomControls?.add?.enable||!0,type:`primary`,text:`添加`,callback:async()=>{this.showEditView(!1,await this.option.getAddData(),t.$shadowRoot)}},close:{enable:!0,callback(){t.close()}},cancel:{enable:!1},other:{enable:this.option?.bottomControls?.clear?.enable||!0,type:`xiaomi-primary`,text:`清空所有(${(await this.option.data()).length})`,callback:()=>{let e=W.confirm({title:{text:`提示`,position:`center`},content:{text:`确定清空所有的数据？`,html:!1},btn:{ok:{enable:!0,callback:async()=>{G.success(`清空所有`),typeof this.option?.bottomControls?.clear?.callback==`function`&&this.option.bottomControls.clear.callback(),(await this.option.data()).length?z.error(`清理失败`):(z.success(`清理成功`),await this.updateDeleteAllBtnText(t.$shadowRoot),this.clearContent(t.$shadowRoot),e.close())}},cancel:{text:`取消`,enable:!0}},mask:{enable:!0},width:`300px`,height:`200px`})}}},mask:{enable:!0},width:window.innerWidth>500?`500px`:`88vw`,height:window.innerHeight>500?`500px`:`80vh`}),{$searchContainer:n,$externalSelect:r,$ruleValueSelect:i,$searchInput:a}=this.parseViewElement(t.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let n=null,o=null;Array.isArray(this.option.bottomControls?.filter?.option)&&U.append(r,this.option.bottomControls?.filter?.option.map(e=>{let t=U.createElement(`option`,{innerText:e.name});return Reflect.set(t,`data-value`,e),t})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&U.append(i,this.option.bottomControls?.filter?.inputOption.map(e=>{let t=U.createElement(`option`,{innerText:e.name});return Reflect.set(t,`data-value`,e),t})),U.on(r,`change`,async()=>{let e=r[r.selectedIndex],t=Reflect.get(e,`data-value`);typeof t?.selectedCallBack==`function`&&t.selectedCallBack(t),n=t,await c(!1)}),U.on(i,`change`,async()=>{let e=i[i.selectedIndex],t=Reflect.get(e,`data-value`);typeof t?.selectedCallBack==`function`&&t.selectedCallBack(t),o=t,await c(!1)}),U.onInput(a,H.debounce(async()=>{await c(!1)}));let s=()=>{let e=r[r.selectedIndex];n=Reflect.get(e,`data-value`);let t=i[i.selectedIndex];o=Reflect.get(t,`data-value`)},c=async r=>{this.clearContent(t.$shadowRoot),r&&s();let i=await this.option.data(),c=[],l=U.val(a);for(let t=0;t<i.length;t++){let r=i[t];if(typeof e==`function`){let t=await e(r);if(typeof t==`boolean`&&!t)continue}if(n){let e=await n?.filterCallBack?.(r);if(typeof e==`boolean`&&!e)continue}if(o){let e=!0;if(e=l===``,e||=await o?.filterCallBack?.(r,l),!e)continue}c.push(r)}await this.appendRuleItemElement(t.$shadowRoot,c)};if(typeof e==`object`&&e){let t;t=typeof e.external==`number`?e.external:Array.from(r.options).findIndex(t=>Reflect.get(t,`data-value`).value===e.external),t!==-1&&(r.selectedIndex=t);let n;n=typeof e.rule==`number`?e.rule:Array.from(i.options).findIndex(t=>Reflect.get(t,`data-value`).value===e.rule),n!==-1&&(i.selectedIndex=n)}await c(!0)}else U.hide(n,!1)}showEditView(e,t,n,r,i,a){let o=async n=>{n?typeof a==`function`&&a(await this.option.getData(t)):(e||await this.option.deleteData(t),typeof i==`function`&&i(await this.option.getData(t)))};new Ei({title:e?`编辑`:`添加`,data:()=>t,dialogCloseCallBack:o,getView:async t=>await this.option.itemControls.edit.getView(t,e),btn:{ok:{enable:!0,text:e?`修改`:`添加`},cancel:{callback:async e=>{e.close(),await o(!1)}},close:{callback:async e=>{e.close(),await o(!1)}}},onsubmit:async(t,i)=>{let a=await this.option.itemControls.edit.onsubmit(t,e,i);return a.success?e?(z.success(`修改成功`),n&&await this.updateRuleItemElement(a.data,r,n)):n&&await this.appendRuleItemElement(n,a.data):e&&G.error(`修改失败`),a},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView()}parseViewElement(e){let t=e.querySelector(`.rule-view-container`),n=e.querySelector(`.pops-confirm-btn button.pops-confirm-btn-other`),r=e.querySelector(`.rule-view-search-container`);return{$container:t,$deleteBtn:n,$searchContainer:r,$externalSelect:r.querySelector(`.pops-panel-select .select-rule-status`),$ruleValueSelect:r.querySelector(`.pops-panel-select .select-rule-value`),$searchInput:r.querySelector(`.pops-panel-input input`)}}parseRuleItemElement(e){let t=e.querySelector(`.rule-controls-enable`);return{$enable:t,$enableSwitch:t.querySelector(`.pops-panel-switch`),$enableSwitchInput:t.querySelector(`.pops-panel-switch__input`),$enableSwitchCore:t.querySelector(`.pops-panel-switch__core`),$edit:e.querySelector(`.rule-controls-edit`),$delete:e.querySelector(`.rule-controls-delete`),data:Reflect.get(e,`data-rule`)}}async createRuleItemElement(e,t){let n=await this.option.getDataItemName(e),r=U.createElement(`div`,{className:`rule-item`,innerHTML:`
			<div class="rule-name">${n}</div>
			<div class="rule-controls">
				<div class="rule-controls-enable">
					<div class="pops-panel-switch">
						<input class="pops-panel-switch__input" type="checkbox">
						<span class="pops-panel-switch__core">
							<div class="pops-panel-switch__action">
							</div>
						</span>
					</div>
				</div>
				<div class="rule-controls-edit">
					${W.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${W.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(r,`data-rule`,e);let i=`pops-panel-switch-is-checked`,{$enable:a,$enableSwitch:o,$enableSwitchCore:s,$enableSwitchInput:c,$delete:l,$edit:u}=this.parseRuleItemElement(r);return this.option.itemControls.enable.enable?(U.on(s,`click`,async()=>{let t=!1;o.classList.contains(i)?(o.classList.remove(i),t=!1):(o.classList.add(i),t=!0),c.checked=t,await this.option.itemControls.enable.callback(e,t)}),await this.option.itemControls.enable.getEnable(e)&&o.classList.add(i)):a.remove(),this.option.itemControls.edit.enable?U.on(u,`click`,n=>{U.preventEvent(n),this.showEditView(!0,e,t,r,t=>{e=null,e=t})}):u.remove(),this.option.itemControls.delete.enable?U.on(l,`click`,n=>{U.preventEvent(n);let i=W.confirm({title:{text:`提示`,position:`center`},content:{text:`确定删除该条数据？`,html:!1},btn:{ok:{enable:!0,callback:async()=>{G.success(`删除数据`),await this.option.itemControls.delete.deleteCallBack(e)?(z.success(`成功删除该数据`),r.remove(),await this.updateDeleteAllBtnText(t),i.close()):z.error(`删除该数据失败`)}},cancel:{text:`取消`,enable:!0}},mask:{enable:!0},width:`300px`,height:`200px`})}):l.remove(),r}async appendRuleItemElement(e,t){let{$container:n}=this.parseViewElement(e),r=[],i=Array.isArray(t)?t:[t];for(let t=0;t<i.length;t++){let n=i[t],a=await this.createRuleItemElement(n,e);r.push(a)}return U.append(n,r),await this.updateDeleteAllBtnText(e),r}async updateRuleContaienrElement(e){this.clearContent(e);let t=await this.option.data();await this.appendRuleItemElement(e,t),await this.updateDeleteAllBtnText(e)}async updateRuleItemElement(e,t,n){let r=await this.createRuleItemElement(e,n);t.after(r),t.remove()}clearContent(e){let{$container:t}=this.parseViewElement(e);U.html(t,``)}setDeleteBtnText(e,t,n=!1){let{$deleteBtn:r}=this.parseViewElement(e);n?U.html(r,t):U.text(r,t)}async updateDeleteAllBtnText(e){let t=await this.option.data();this.setDeleteBtnText(e,`清空所有(${t.length})`)}},Oi=class{$data={dislike_request_queue:[],handlerFunctionMap:new Map};getTemplateData(){return{isFollow:!1,isLive:!1,isAds:!1,isSeriesInfo:!1,isMixInfo:!1,isPicture:!1,isProduct:!1,awemeId:void 0,nickname:void 0,createTime:void 0,uid:void 0,desc:void 0,width:0,height:0,textExtra:[],videoTag:[],videoTagId:[],suggestWord:[],musicAlbum:void 0,musicAuthor:void 0,musicDuration:void 0,musicTitle:void 0,musicUrl:void 0,musicBackUrlList:[],authorAccountCertInfo:``,authorCustomVerify:``,authorEnterpriseVerifyReason:``,riskInfoContent:void 0,seriesInfoName:void 0,seriesInfoContentTypes:[],mixInfoName:void 0,mixInfoDesc:void 0,collectCount:0,commentCount:0,diggCount:0,shareCount:0,duration:void 0,liveStreamRoomId:void 0,liveStreamRoomTitle:void 0,liveStreamNickName:void 0,liveStreamRoomUserCount:void 0,liveStreamRoomDynamicSpliceLabel:void 0,productId:void 0,productTitle:void 0,videoBitRateList:[],pictureList:[]}}parseAwemeInfoDictData(e,t,n=!1){let r=this.getTemplateData();if(t===`network`){let t=e,i=t?.author,a=t?.statistics,o=t?.video;if(r.nickname=String(i?.nickname??``),r.uid=String(i?.uid??``),r.desc=String(t.desc??``),r.originDesc=r.desc.replace(/ #(.+) /g,``).replace(/#(.+)/g,``),r.width=typeof o?.width==`number`?o?.width:0,r.height=typeof o?.height==`number`?o?.height:0,r.musicAlbum=t?.music?.album,r.musicAuthor=t?.music?.author,r.musicDuration=t?.music?.duration??0,r.musicTitle=t?.music?.title,r.collectCount=a?.collect_count??0,r.commentCount=a?.comment_count??0,r.diggCount=a?.digg_count??0,r.shareCount=a?.share_count??0,r.duration=o?.duration,r.awemeId=t.aweme_id,r.authorCustomVerify=i?.custom_verify||``,r.authorEnterpriseVerifyReason=i?.enterprise_verify_reason||``,r.isPicture=t.aweme_type===68,r.isFollow=!!i?.follow_status,typeof t.create_time==`number`&&(r.createTime=t.create_time,r.createTime>0&&r.createTime<0xe8d4a51000&&(r.createTime*=1e3)),r.isAds=[()=>{if(t.is_ads)return n&&G.success(`广告: is_ads is true`),!0},()=>{if(typeof t?.raw_ad_data==`string`&&H.isNotNull(t.raw_ad_data))return n&&G.success(`广告: raw_ad_data is not null`),!0},()=>{if(typeof t?.web_raw_data==`string`){let e=H.toJSON(t?.web_raw_data);if(typeof e?.brand_ad==`string`){let t=H.toJSON(e.brand_ad)?.is_ad;if(t)return n&&G.success(`广告: web_raw_data.brand_ad.is_ad is `+t),!0}}}].some(e=>e()),typeof t?.cell_room==`object`&&t?.cell_room!=null){r.isLive=!0,n&&G.success(`直播间: cell_room is not null`);let e;typeof t.cell_room.rawdata==`string`&&(e=H.toJSON(t.cell_room.rawdata)),typeof e==`object`&&e&&(r.liveStreamRoomId=e?.owner?.web_rid,r.liveStreamRoomTitle=e?.title,r.liveStreamNickName=e?.owner?.nickname,r.liveStreamRoomUserCount=e?.user_count,r.liveStreamRoomDynamicSpliceLabel=e?.dynamic_label?.splice_label?.text,typeof r.liveStreamRoomId!=`string`&&(r.liveStreamRoomId=void 0),typeof r.liveStreamRoomTitle!=`string`&&(r.liveStreamRoomTitle=void 0),typeof r.liveStreamNickName!=`string`&&(r.liveStreamNickName=void 0),typeof r.liveStreamRoomUserCount!=`number`&&(r.liveStreamRoomUserCount=void 0),typeof r.liveStreamRoomDynamicSpliceLabel!=`string`&&(r.liveStreamRoomDynamicSpliceLabel=void 0))}Array.isArray(t?.text_extra)&&t.text_extra.forEach(e=>{let t=e?.hashtag_name;typeof t==`string`&&t.trim()!=``&&r.textExtra.push(t)}),Array.isArray(t.video_tag)&&t.video_tag.forEach(e=>{let t=e?.tag_name,n=e?.tag_id;if(typeof t==`string`&&t.trim()!=``&&r.videoTag.push(t),typeof n==`number`||typeof n==`string`){let e=n.toString();e.trim()!=``&&e!=`0`&&r.videoTagId.push(e)}});let s=t?.risk_infos;r.riskInfoContent=typeof s?.content==`string`&&s?.content.trim()===``||typeof s?.content!=`string`?void 0:s?.content;let c=t?.series_info;if(typeof c==`object`&&c){typeof c?.series_name==`string`&&(r.seriesInfoName=c?.series_name);let e=c?.series_content_types;Array.isArray(e)&&e.forEach(e=>{let t=e.name;r.seriesInfoContentTypes.push(t)}),r.seriesInfoName!=null&&e!=null&&(r.isSeriesInfo=!0)}let l=t?.mix_info;typeof l==`object`&&H.isNotNull(l)&&(r.mixInfoName=l?.mix_name,r.mixInfoDesc=l?.desc);let u=(e,t)=>{let n=[];if(!Array.isArray(e))return n;e.forEach(e=>{let r=``,i=[],a=e?.play_addr?.url_list;Array.isArray(a)&&a.length>0&&typeof a[0]==`string`&&H.isNotNull(a[0])&&(r=a[0]),Array.isArray(a)&&a.length>0&&typeof a[0]==`string`&&H.isNotNull(a[0])?i.push(...a.map(e=>{if(typeof e==`string`&&e!==r)return e}).filter(e=>e!=null)):i.length=0;let o={cover:t,bitRate:e.bit_rate,dataSize:e?.play_addr?.data_size??0,format:e.format,isH265:e.is_h265,fps:e.FPS,gearName:e.gear_name,qualityType:e.quality_type,width:e?.play_addr?.width,height:e?.play_addr?.height,url:r,backUrl:i};n.push(o)});for(let e=0;e<n.length;e++){let t=n[e];for(let r=0;r<n.length;r++){let i=n[r];t!==i&&t.width===i.width&&t.height===i.height&&t.fps===i.fps&&t.dataSize>i.dataSize&&(n.splice(r,1),r--,e>r&&e--)}}return n=n.map(e=>(e.url.startsWith(`http:`)&&(e.url=e.url.replace(`http:`,``)),e)),H.sortListByProperty(n,e=>e.width),n};if(r.isPicture){r.duration=void 0;let e=t?.images;Array.isArray(e)&&(r.pictureList=e.map(e=>{let t;Array.isArray(e.url_list)&&e.url_list.length?t=e.url_list[0]:Array.isArray(e.download_url_list)&&e.download_url_list.length&&(t=e.download_url_list[0]);let n=e?.video?.cover?.url_list,r=t;n!=null&&Array.isArray(n)&&typeof n[0]==`string`&&H.isNotNull(n[0])&&(r=n[0]);let i=e?.video?.bit_rate,a=u(i,r);return{width:e.width,height:e.height,url:t,videoBitRateList:a}}))}let d=t?.suggest_words?.suggest_words;Array.isArray(d)&&d.forEach(e=>{let t=e?.words;Array.isArray(t)&&t.forEach(e=>{let t=e?.word;typeof t==`string`&&t.trim()!==``&&r.suggestWord.push(t)})}),r.suggestWord=[...new Set(r.suggestWord)];let f=i?.account_cert_info;if(typeof f==`string`){let e=H.toJSON(f);typeof e.label_text==`string`&&(r.authorAccountCertInfo=e.label_text)}let p=t?.entertainment_product_info;typeof p==`object`&&p&&(typeof p.product_id==`number`?r.productId=p.product_id.toString():typeof p.product_id_str==`string`&&(r.productId=p.product_id_str),typeof p.title==`string`&&(r.productTitle=p.title),(typeof p?.buy_schema==`string`||typeof p?.buy_panel_schema==`string`)&&(r.isProduct=!0));let m=``,h=t?.video?.cover?.url_list;(typeof m!=`string`||H.isNull(m))&&Array.isArray(h)&&typeof h[0]==`string`&&H.isNotNull(h[0])&&(m=h[0]);let g=t?.video?.bit_rate;Array.isArray(g)&&(r.videoBitRateList=u(g,m));let _=t?.music?.play_url;r.musicUrl=_?.uri,Array.isArray(_?.url_list)&&_.url_list.forEach(e=>{e!==r.musicUrl&&r.musicBackUrlList.push(e)})}else if(t===`dom`){let t=e,i=t.authorInfo,a=t?.video;if(r.nickname=String(i?.nickname??``),r.uid=String(i?.uid??``),r.desc=String(t.desc??``),r.originDesc=r.desc.replace(/ #(.+) /g,``).replace(/#(.+)/g,``),r.width=typeof a?.width==`number`?a?.width:0,r.height=typeof a?.height==`number`?a?.height:0,r.musicAlbum=t?.music?.album,r.musicAuthor=t?.music?.author,r.musicDuration=t?.music?.duration??0,r.musicTitle=t?.music?.title,r.collectCount=t.stats.collectCount,r.commentCount=t.stats.commentCount,r.diggCount=t.stats.diggCount,r.shareCount=t.stats.shareCount,r.duration=a.duration,r.awemeId=t.awemeId,r.authorCustomVerify=i?.customVerify||``,r.authorEnterpriseVerifyReason=i?.enterpriseVerifyReason||``,r.isPicture=t.awemeType===68,r.isFollow=!!i?.followStatus,typeof t.createTime==`number`&&(r.createTime=t.createTime,r.createTime>0&&r.createTime<0xe8d4a51000&&(r.createTime*=1e3)),r.isAds=[()=>{if(t.isAds)return n&&G.success(`广告: isAds is true`),!0},()=>{if(typeof t?.rawAdData==`string`&&H.isNotNull(t.rawAdData))return n&&G.success(`广告: rawAdData is not null`),!0},()=>{if(t?.webRawData){if(t.webRawData?.brandAd?.is_ad)return n&&G.success(`广告: webRawData.brandAd.is_ad is 1`),!0;if(t?.webRawData?.insertInfo?.is_ad)return n&&G.success(`广告: webRawData.insertInfo.is_ad is true`),!0}}].some(e=>e()),typeof t?.cellRoom==`object`&&t?.cellRoom!=null){r.isLive=!0,n&&G.success(`直播间: cellRoom is not null`);let e=t.cellRoom?.rawdata;typeof e==`object`&&e&&(r.liveStreamRoomId=e?.owner?.web_rid,r.liveStreamRoomTitle=e?.title,r.liveStreamNickName=e?.owner?.nickname,r.liveStreamRoomUserCount=e?.user_count,r.liveStreamRoomDynamicSpliceLabel=e?.dynamic_label?.splice_label?.text,typeof r.liveStreamRoomId!=`string`&&(r.liveStreamRoomId=void 0),typeof r.liveStreamRoomTitle!=`string`&&(r.liveStreamRoomTitle=void 0),typeof r.liveStreamNickName!=`string`&&(r.liveStreamNickName=void 0),typeof r.liveStreamRoomUserCount!=`number`&&(r.liveStreamRoomUserCount=void 0),typeof r.liveStreamRoomDynamicSpliceLabel!=`string`&&(r.liveStreamRoomDynamicSpliceLabel=void 0))}Array.isArray(t.textExtra)&&t.textExtra.forEach(e=>{let t=e?.hashtagName;typeof t==`string`&&t.trim()!=``&&r.textExtra.push(t)}),Array.isArray(t.videoTag)&&t.videoTag.forEach(e=>{let t=e?.tagName,n=e?.tagId;if(typeof t==`string`&&t.trim()!=``&&r.videoTag.push(t),typeof n==`number`||typeof n==`string`){let e=n.toString();e.trim()!=``&&e!=`0`&&r.videoTagId.push(e)}});let o=t?.riskInfos;r.riskInfoContent=typeof o?.content==`string`&&o?.content.trim()===``||typeof o?.content!=`string`?void 0:o?.content;let s=t?.seriesInfo;if(typeof s==`object`&&s){typeof s?.seriesName==`string`&&(r.seriesInfoName=s?.seriesName);let e=s?.seriesContentTypes;Array.isArray(e)&&e.forEach(e=>{let t=e.name;r.seriesInfoContentTypes.push(t)}),r.seriesInfoName!=null&&e!=null&&(r.isSeriesInfo=!0)}let c=t?.mixInfo;typeof c==`object`&&H.isNotNull(c)&&(r.mixInfoName=c?.mixName,r.mixInfoDesc=c?.desc);let l=(e,t)=>{let n=[];if(!Array.isArray(e))return n;e.forEach(e=>{let r=e.playApi,i=[],a=e?.playAddr;Array.isArray(e)&&a.length>0&&typeof a[0]==`string`&&H.isNotNull(a[0])?i.push(...a.map(e=>{if(typeof e.src==`string`&&e.src!==r)return e.src}).filter(e=>e!=null)):i.length=0;let o={cover:t,bitRate:e.bitRate,dataSize:e.dataSize??0,format:e.format,isH265:e.isH265,fps:e.fps,gearName:e.gearName,qualityType:e.qualityType,width:e.width,height:e.height,url:r,backUrl:i};n.push(o)});for(let e=0;e<n.length;e++){let t=n[e];for(let r=0;r<n.length;r++){let i=n[r];t!==i&&t.width===i.width&&t.height===i.height&&t.fps===i.fps&&t.dataSize>i.dataSize&&(n.splice(r,1),r--,e>r&&e--)}}return n=n.map(e=>(e.url.startsWith(`http:`)&&(e.url=e.url.replace(`http:`,``)),e)),H.sortListByProperty(n,e=>e.width),n};if(r.isPicture){r.duration=void 0;let e=t?.images;Array.isArray(e)&&(r.pictureList=e.map(e=>{let t;Array.isArray(e.urlList)&&e.urlList.length?t=e.urlList[0]:Array.isArray(e.downloadUrlList)&&e.downloadUrlList.length&&(t=e.downloadUrlList[0]);let n=e?.video?.coverUrlList,r=t;n!=null&&Array.isArray(n)&&typeof n[0]==`string`&&H.isNotNull(n[0])&&(r=n[0]);let i=e?.video?.bitRateList,a=l(i,r);return{width:e.width,height:e.height,url:t,videoBitRateList:a}}))}let u=t?.suggestWords;Array.isArray(u)&&u.forEach(e=>{let t=e?.words;Array.isArray(t)&&t.forEach(e=>{let t=e?.word;typeof t==`string`&&t.trim()!==``&&r.suggestWord.push(t)})}),r.suggestWord=[...new Set(r.suggestWord)],typeof i?.accountCertInfo?.labelText==`string`&&(r.authorAccountCertInfo=i?.accountCertInfo?.labelText);let d=t?.entertainmentProductInfo;typeof d==`object`&&d&&(typeof d.product_id==`number`?r.productId=d.product_id.toString():typeof d.product_id_str==`string`&&(r.productId=d.product_id_str),typeof d.title==`string`&&(r.productTitle=d.title),(typeof d?.buy_schema==`string`||typeof d?.buy_panel_schema==`string`)&&(r.isProduct=!0));let f=``,p=t?.video?.coverUrlList;(typeof f!=`string`||H.isNull(f))&&Array.isArray(p)&&typeof p[0]==`string`&&H.isNotNull(p[0])&&(f=p[0]);let m=t?.video?.bitRateList;Array.isArray(m)&&(r.videoBitRateList=l(m,f));let h=t?.music?.playUrl;r.musicUrl=h?.uri,Array.isArray(h?.urlList)&&h.urlList.forEach(e=>{e!==r.musicUrl&&r.musicBackUrlList.push(e)})}else throw Error(`from参数错误`);return r}async checkFilterWithRule(e,t){if(e.videoInfoValue==null||e.ruleValue==null)return!1;if(t.isFunctionHandler&&typeof e.ruleValue==`string`){let n={ruleKey:e.ruleKey,transformAwemeInfo:e.transformAwemeInfo,awemeInfo:e.awemeInfo},r;this.$data.handlerFunctionMap.has(t.ruleValue)?r=this.$data.handlerFunctionMap.get(t.ruleValue):(r=H.createFunction(`data`,t.ruleValue,!0).bind({utils:H,DOMUtils:p,httpx:Er,Qmsg:z,pops:W,log:G,window,unsafeWindow:L}),this.$data.handlerFunctionMap.set(t.ruleValue,r));let i=await r(n);if(typeof i!=`boolean`)throw G.error(e,t),TypeError(`视频过滤器规则: 函数返回值类型必须为boolean类型`);return i}if(typeof e.videoInfoValue==`string`){if(e.videoInfoValue.match(e.ruleValue))return!0}else if(typeof e.videoInfoValue==`object`){if(Array.isArray(e.videoInfoValue)&&e.videoInfoValue.find(t=>typeof t==`string`&&e.ruleValue!=null&&!!t.match(e.ruleValue)))return!0}else if(typeof e.videoInfoValue==`number`){if(typeof e.ruleValue==`string`){let t=e.ruleValue.trim(),n=t.match(/(\d+)/);if(!n)return G.warn(`过滤器-解析比较大小的数字失败: `,e),!1;let r=Number(n[1]);if(t.startsWith(`>`)){if(t.startsWith(`>=`)){if(e.videoInfoValue>=r)return!0}else if(e.videoInfoValue>r)return!0}else if(t.startsWith(`<`)){if(t.startsWith(`<=`)){if(e.videoInfoValue<=r)return!0}else if(e.videoInfoValue<r)return!0}else if(t.startsWith(`=`)){if(e.videoInfoValue===r)return!0}else return G.warn(`视频过滤器-未经允许的比较符号: `,e),!1}}else if(typeof e.videoInfoValue==`boolean`&&typeof e.ruleValue==`string`){let t=e.ruleValue.trim();return e.videoInfoValue.toString()===t}return!1}async checkAwemeInfoIsFilter(e,t,n,r){let i=this.parseAwemeInfoDictData(t,n,!1),a=!1,o=null,s=[],c=[];outerLoop:for(let n=0;n<e.length;n++){let l=e[n],u=Array.isArray(l.data.ruleName)?l.data.ruleName:[l.data.ruleName];for(let e=0;e<u.length;e++){let n=u[e];if(!Reflect.has(i,n))continue;let d=n,f={videoInfoKey:d,videoInfoValue:i[d],ruleKey:l.data.ruleName,ruleValue:l.data.ruleValue,awemeInfo:t,transformAwemeInfo:i,rule:l};if(a=await this.checkFilterWithRule(f,l.data),a){if(Array.isArray(l.dynamicData)&&l.dynamicData.length){let e=[];for(let n=0;n<l.dynamicData.length;n++){let r=l.dynamicData[n],o=r.ruleName,s={videoInfoKey:o,videoInfoValue:i[o],ruleKey:r.ruleName,ruleValue:r.ruleValue,awemeInfo:t,transformAwemeInfo:i,rule:l};e.push(s);let c=await this.checkFilterWithRule(s,r);if(a&&=c,!a)break}a&&G.success(`视频过滤器-多组 ==> ${l.name}`,{transformAwemeInfo:i,config:f,awemeInfo:t,filterRule:l,dynamicConfigList:e})}else G.success(`视频过滤器 ==> ${l.name}`,{transformAwemeInfo:i,config:f,awemeInfo:t,filterRule:l})}if(a){if(r)s.push(l);else{o=l;break outerLoop}}else r&&c.push(l)}}return{isFilter:a,matchedFilterRule:r?s:o,notMatchedFilterRule:r?c:null,transformAwemeInfo:i,awemeInfo:t}}async sendDislikeVideo(e,t){}removeAweme(...e){if(e.length===1){let t=e[0];t!=null&&t instanceof HTMLElement&&p.remove(t)}else if(e.length===2){let t=e[0],n=e[1];if(typeof n==`number`){let e=t[n];e!=null&&e instanceof Element&&p.remove(e),t.splice(n,1)}}}},ki={$key:{ENABLE_KEY:`shieldVideo-exec-network-enable`},$data:{enable:void 0,onlyShowFilteredVideo:void 0,isFilterAwemeInfoListWithOnlyShowFilteredVideo:new Nn.Dictionary,networkAwemeInfoMap:new Nn.Dictionary,addParseButton:void 0,__videoFilterRuleStorage:null,get videoFilterRuleStorage(){return this.__videoFilterRuleStorage??=new Ti({STORAGE_API_KEY:`dy-video-filter-rule`}),this.__videoFilterRuleStorage},videoFilterRules:[]},init(){Z.isLive()?(V.deleteExecMenuOnce(this.$key.ENABLE_KEY),this.$data.enable!=null&&this.$data.enable.destory()):(this.$data.addParseButton??(this.$data.addParseButton=V.getDynamicValue(`shieldVideo-add-parseVideoInfoButton`)),this.$data.enable??(this.$data.enable=V.getDynamicValue(this.$key.ENABLE_KEY)),this.$data.onlyShowFilteredVideo??(this.$data.onlyShowFilteredVideo=V.getDynamicValue(`shieldVideo-only-show-filtered-video`)),this.execFilter(),U.onReady(()=>{V.execMenuOnce(`shieldVideo-add-parseVideoInfoButton`,()=>this.addParseButton())}))},getFilterRules(e,t=!0){if(!this.$data.enable)return[];let n=this.$data.videoFilterRuleStorage.getAllRule();if(!n.length)return[];if(n.sort((e,t)=>e.data.isFunctionHandler&&!t.data.isFunctionHandler?1:!e.data.isFunctionHandler&&t.data.isFunctionHandler?-1:0),typeof e==`string`){let r=Array.isArray(e)?e:[e];return n.filter(e=>typeof t==`boolean`&&t&&!e.enable?!1:e.data.scope.includes(`all`)||r.findIndex(t=>e.data.scope.includes(t))!==-1)}return n.filter(e=>!(typeof t==`boolean`&&t&&!e.enable))},execFilter(){V.execMenuOnce(this.$key.ENABLE_KEY,async()=>{G.info(`执行视频过滤器`);let e=new Oi,t=e=>{if(this.$data.onlyShowFilteredVideo.value&&(e.isFilter=!e.isFilter,typeof e.transformAwemeInfo.awemeId==`string`&&e.matchedFilterRule)){let t=this.$data.isFilterAwemeInfoListWithOnlyShowFilteredVideo.get(e.transformAwemeInfo.awemeId)||[];t.push(e.matchedFilterRule),this.$data.isFilterAwemeInfoListWithOnlyShowFilteredVideo.set(e.transformAwemeInfo.awemeId,t)}if(typeof e.transformAwemeInfo.awemeId==`string`){this.$data.networkAwemeInfoMap.set(e.transformAwemeInfo.awemeId,{awemeInfo:e.awemeInfo,transformAwemeInfo:e.transformAwemeInfo,index:performance.now()});let t=window.innerWidth>768?500:250;this.$data.addParseButton.value&&this.$data.networkAwemeInfoMap.length>t&&this.$data.networkAwemeInfoMap.values().sort((e,t)=>e.index-t.index).splice(0,1)}},n=(n,r)=>{r.response=async r=>{let i=this.getFilterRules(n);if(!i.length)return;let a=H.toJSON(r.responseText),o=a.aweme_list;if(Array.isArray(o)){let s={filter:0,count:o.length};for(let n=0;n<o.length;n++){let r=o[n]||{},a=await e.checkAwemeInfoIsFilter(i,r,`network`);t(a),a.isFilter&&(s.filter++,e.sendDislikeVideo(a.matchedFilterRule,r),e.removeAweme(o,n--))}s.filter&&G.info(`xhr_hook_callback_1 ${n}: 本次请求共计${s.count}个视频，成功过滤${s.filter}个`),r.responseText=JSON.stringify(a)}}},r=(n,r)=>{r.response=async r=>{let i=this.getFilterRules(n);if(!i.length)return;let a=H.toJSON(r.responseText),o=a.data;if(Array.isArray(o)){let s={filter:0,count:o.length};for(let n=0;n<o.length;n++){let r=o[n],a=r.aweme||{};typeof r?.cell_room==`object`&&r?.cell_room!=null&&(a.cell_room=r?.cell_room);let c=await e.checkAwemeInfoIsFilter(i,a,`network`);t(c),c.isFilter&&(s.filter++,e.sendDislikeVideo(c.matchedFilterRule,a),e.removeAweme(o,n--))}s.filter&&G.info(`xhr_hook_callback_2 ${n}: 本次请求共计${s.count}个视频，成功过滤${s.filter}个`),r.responseText=JSON.stringify(a)}}},i=(n,r)=>{r.response=async r=>{let i=this.getFilterRules(n);if(!i.length)return;let a=H.toJSON(r.responseText),o=a.cards;if(Array.isArray(o)){let s={filter:0,count:o.length};for(let n=0;n<o.length;n++){let r=o[n],a=H.toJSON(r?.aweme||`{}`),c=await e.checkAwemeInfoIsFilter(i,a,`network`);t(c),c.isFilter&&(s.filter++,e.sendDislikeVideo(c.matchedFilterRule,a),e.removeAweme(o,n--))}s.filter&&G.info(`xhr_hook_callback_3 ${n}: 本次请求共计${s.count}个视频，成功过滤${s.filter}个`),r.responseText=JSON.stringify(a)}}},a=(n,r)=>{r.response=async r=>{let i=this.getFilterRules(n);if(!i.length)return;let a=H.toJSON(r.responseText),o=a.data;if(Array.isArray(o)){let s={filter:0,count:o.length};for(let n=0;n<o.length;n++){let r=o[n],a=r.aweme_info||{},c=r?.aweme_mix_info;if(a==null&&typeof c&&c!=null){let r=c?.mix_items;if(Array.isArray(r)){for(let n=0;n<r.length;n++){let a=r[n],o=await e.checkAwemeInfoIsFilter(i,a,`network`);t(o),o.isFilter&&(s.filter++,e.sendDislikeVideo(o.matchedFilterRule,a),e.removeAweme(r,n--))}r.length===0&&e.removeAweme(o,n--)}}else{let r=await e.checkAwemeInfoIsFilter(i,a,`network`);t(r),r.isFilter&&(s.filter++,e.sendDislikeVideo(r.matchedFilterRule,a),e.removeAweme(o,n--))}}s.filter&&G.info(`xhr_hook_callback_4 ${n}: 本次请求共计${s.count}个视频，成功过滤${s.filter}个`),r.responseText=JSON.stringify(a)}}},o=(n,r)=>{r.response=async r=>{let i=this.getFilterRules(n);if(!i.length)return;let a=H.toJSON(r.responseText),o=a.aweme_detail;if(typeof o==`object`&&o){let n=await e.checkAwemeInfoIsFilter(i,o,`network`);t(n),n.isFilter&&e.sendDislikeVideo(n.matchedFilterRule,o),r.responseText=JSON.stringify(a)}}};Ar.ajaxHooker.hook(e=>{let t=cr.fixUrl(e.url),s=new URL(t);s.pathname.startsWith(`/aweme/v1/web/tab/feed`)?n(`xhr-tab`,e):s.pathname.startsWith(`/aweme/v1/web/aweme/post/`)?n(`xhr-userHome`,e):s.pathname.startsWith(`/aweme/v1/web/mix/aweme/`)?n(`xhr-mix`,e):s.pathname.startsWith(`/aweme/v1/web/aweme/related/`)?n(`xhr-related`,e):s.pathname.startsWith(`/aweme/v1/web/follow/feed`)?r(`xhr-follow`,e):s.pathname.startsWith(`/aweme/v1/web/familiar/feed`)?r(`xhr-familiar`,e):s.pathname.startsWith(`/aweme/v1/web/module/feed`)?i(`xhr-module`,e):s.pathname.startsWith(`/aweme/v2/web/module/feed`)?n(`xhr-module`,e):s.pathname.startsWith(`/aweme/v1/web/general/search/single/`)||s.pathname.startsWith(`/aweme/v1/web/search/item/`)?a(`xhr-search`,e):s.pathname.startsWith(`/aweme/v1/web/aweme/detail/`)&&o(`xhr-video`,e)})})},addParseButton(){let e=new Oi,t=async t=>{let n=H.getReactInstance(t)?.reactFiber,r=n?.return?.memoizedProps?.awemeInfo||n?.return?.return?.memoizedProps?.awemeInfo||n?.return?.memoizedProps?.originData;if(r==null){z.error(`未获取到awemeInfo信息`);return}if(typeof r!=`object`){z.error(`获取到的awemeInfo信息不是对象`);return}let i,a=!1;G.info(`DOM上的的awemeInfo: `,r);let o=e.parseAwemeInfoDictData(r,`dom`,!1);if(G.info(`DOM上解析出的transformAwemeInfo: `,o),typeof o.awemeId==`string`&&ki.$data.networkAwemeInfoMap.has(o.awemeId)){a=!0;let e=ki.$data.networkAwemeInfoMap.get(o.awemeId);i=e.transformAwemeInfo,G.info(`网络请求的awemeInfo: `,e.awemeInfo),G.info(`网络请求解析出的transformAwemeInfo: `,e.transformAwemeInfo)}else i=o;let s=[],c=!1;if(this.$data.onlyShowFilteredVideo.value&&this.$data.isFilterAwemeInfoListWithOnlyShowFilteredVideo.has(i.awemeId)){c=!0;let e=this.$data.isFilterAwemeInfoListWithOnlyShowFilteredVideo.get(i.awemeId);s=s.concat(e)}else{let t=this.getFilterRules(),n=await e.checkAwemeInfoIsFilter(t,r,`dom`,!0);n.matchedFilterRule.length?(c=!0,s=s.concat(n.matchedFilterRule)):(c=!1,s=s.concat(n.notMatchedFilterRule))}W.confirm({title:{text:`视频awemeInfo（${a?`NetWork`:`DOM`}）`,position:`center`},content:{text:JSON.stringify(i,null,4).trim(),html:!1},drag:!0,btn:{merge:!!s.length,position:s.length?`space-between`:`flex-end`,ok:{enable:!0,text:`添加过滤规则`,callback:()=>{this.getRuleViewInstance().showEditView(!1,this.getTemplateData())}},cancel:{enable:!0,text:`规则管理器`,callback:()=>{this.showView()}},other:{enable:!!s.length,text:`${c?``:`非`}命中的规则(${s.length})`,type:c?`xiaomi-primary`:`violet`,callback:()=>{this.getRuleViewInstance().showView(e=>!!s.find(t=>e.uuid===t.uuid))}}},mask:{enable:!0,clickEvent:{toClose:!0}},width:gr.setting.width,height:gr.setting.height,style:`
				.pops-confirm-content p{
					white-space: break-spaces;
				}
			`})},n=e=>{let t=U.createElement(e?`dy-icon`:`xg-icon`,{className:`gm-video-filter-parse-btn`,innerHTML:`
        <div class="xgplayer-icon ${e?`douyin-player-icon`:``}">
          <span role="img" class="semi-icon semi-icon-default">
            <svg
              viewBox="0 0 32 32"
              width="1em"
              height="1em"
              style="font-size: 32px"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              fill="none">
              <g>
                <path
                  stroke="null"
                  fill="currentColor"
                  d="m9.78829,8.17117l1.77477,0l0,1.73974l-1.77477,0l0,4.34935a1.77477,1.73974 0 0 1 -1.77477,1.73974a1.77477,1.73974 0 0 1 1.77477,1.73974l0,4.34935l1.77477,0l0,1.73974l-1.77477,0c-0.9495,-0.23486 -1.77477,-0.78288 -1.77477,-1.73974l0,-3.47948a1.77477,1.73974 0 0 0 -1.77477,-1.73974l-0.88739,0l0,-1.73974l0.88739,0a1.77477,1.73974 0 0 0 1.77477,-1.73974l0,-3.47948a1.77477,1.73974 0 0 1 1.77477,-1.73974m12.42342,0a1.77477,1.73974 0 0 1 1.77477,1.73974l0,3.47948a1.77477,1.73974 0 0 0 1.77477,1.73974l0.88739,0l0,1.73974l-0.88739,0a1.77477,1.73974 0 0 0 -1.77477,1.73974l0,3.47948a1.77477,1.73974 0 0 1 -1.77477,1.73974l-1.77477,0l0,-1.73974l1.77477,0l0,-4.34935a1.77477,1.73974 0 0 1 1.77477,-1.73974a1.77477,1.73974 0 0 1 -1.77477,-1.73974l0,-4.34935l-1.77477,0l0,-1.73974l1.77477,0m-6.21171,10.43844a0.88739,0.86987 0 0 1 0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,-0.86987a0.88739,0.86987 0 0 1 0.88739,-0.86987m-3.54955,0a0.88739,0.86987 0 0 1 0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,-0.86987a0.88739,0.86987 0 0 1 0.88739,-0.86987m7.0991,0a0.88739,0.86987 0 0 1 0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,-0.86987a0.88739,0.86987 0 0 1 0.88739,-0.86987z"
                  clip-rule="evenodd"
                  fill-rule="evenodd" />
              </g>
            </svg>
          </span>
        </div>
        <div class="xg-tips">解析信息</div>
				`});if(e){t.querySelector(`.xg-tips`).remove();let e=t.querySelector(`.xgplayer-icon`);t.style.display=`flex`,t.style.alignItems=`center`,e.style.height=`auto`,e.style.lineHeight=`unset`}return t},r=new H.LockFunction(()=>{if(Z.isLive())return;let e=V.getValue(`dy-video-downloader-addDownloadButton`);Y(`.basePlayerContainer xg-right-grid:not(:has(>${e?`:nth-child(2)`:`:first-child`}[class*='gm-video-filter-parse-btn']))`).forEach(r=>{let i=r.querySelector(`.gm-video-filter-parse-btn`);if(i||(i=n(!1),U.on(i,`click`,async e=>{U.preventEvent(e);let n=r.closest(`.basePlayerContainer`);n?await t(n):z.error(`获取.basePlayerContainer失败`)})),e){let e=r.querySelector(`.gm-video-download-btn`);U.after(e,i)}else U.prepend(r,i)}),Y(`.basePlayerContainer .douyin-player-controls-right:not(:has(>${e?`:nth-child(2)`:`:first-child`}[class*='gm-video-filter-parse-btn']))`).forEach(r=>{let i=r.querySelector(`.gm-video-filter-parse-btn`);if(i||(i=n(!0),U.on(i,`click`,async e=>{U.preventEvent(e);let n=r.closest(`.basePlayerContainer`);n?await t(n):z.error(`获取.basePlayerContainer失败`)})),e){let e=r.querySelector(`.gm-video-download-btn`);U.after(e,i)}else U.prepend(r,i)}),[...Array.from(Y(`[data-e2e="feed-live"] xg-right-grid:not(:has(.gm-video-filter-parse-btn))`)),...Array.from(Y(`[data-e2e="feed-live"] .douyin-player-controls-right:not(:has(.gm-video-filter-parse-btn))`))].forEach(e=>{if(!H.isVisible(e,!1))return;let r=n(!1);U.on(r,`click`,async n=>{U.preventEvent(n);let r=e.closest(`[data-e2e="feed-live"]`);r?await t(r):z.error(`未找到[data-e2e="feed-live"]`)}),U.prepend(e,r)})}),i=H.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{r.run()}});return[K(`
      xg-icon .xg-tips,
      [data-e2e="living-container"] .gm-video-filter-parse-btn{
        display: none;
      }
			.basePlayerContainer .gm-video-filter-parse-btn{
				margin-left: 4px;
			}
			.basePlayerContainer .gm-video-filter-parse-btn .semi-icon{
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.basePlayerContainer .gm-video-filter-parse-btn .semi-icon svg{
				
			}
      /* 修复搜索结果单列页面 解析按钮的高度错位 */
      .searchControl33px .xg-right-grid xg-icon.gm-video-filter-parse-btn span svg{
				transform: translateY(-6px) !important;
			}`),()=>{U.remove(`.gm-video-filter-parse-btn`),i?.disconnect()}]},getRuleViewInstance(){let e=W.fn.PanelHandlerComponents(),t=e=>({get(t,n){return e[t]??n},set(t,n){e[t]=n}}),n={title:`视频过滤器`,data:()=>this.$data.videoFilterRuleStorage.getAllRule(),getAddData:()=>this.getTemplateData(),getDataItemName:e=>e.name,updateData:e=>this.$data.videoFilterRuleStorage.setRule(e),deleteData:e=>this.$data.videoFilterRuleStorage.deleteRule(e),getData:e=>ki.$data.videoFilterRuleStorage.getAllRule().find(t=>t.uuid===e.uuid)??e,itemControls:{enable:{enable:!0,getEnable(e){return e.enable},callback:(e,t)=>{e.enable=t,n.updateData(e)}},edit:{enable:!0,getView:(n,r)=>{let i=document.createDocumentFragment();r||(n=this.getTemplateData());let a=Q(`启用`,`enable`,!0);Reflect.set(a.props,B,t(n));let{$el:o}=e.createSectionContainerItem_switch(a),s=wi(`规则名称`,`name`,``,``,void 0,`必填`);Reflect.set(s.props,B,t(n));let{$el:c}=e.createSectionContainerItem_input(s),l=bi(`作用域`,`scope`,[],[{text:`所有`,value:`all`},{text:`精选`,value:`xhr-module`},{text:`推荐`,value:`xhr-tab`},{text:`关注`,value:`xhr-follow`},{text:`朋友`,value:`xhr-familiar`},{text:`搜索`,value:`xhr-search`},{text:`用户主页`,value:`xhr-userHome`},{text:`混合信息`,value:`xhr-mix`},{text:`相关推荐`,value:`xhr-related`}].map(e=>{let t={...e,value:e.value};return t.value,t}),void 0,`选择需要在xxx上生效的作用域`);Reflect.set(l.props,B,t(n.data));let{$el:u}=e.createSectionContainerItem_select_multiple(l),d=new Oi,f=Object.keys(d.getTemplateData()),p=n=>{let r=bi(`属性名`,`ruleName`,Array.isArray(n.ruleName)?n.ruleName:[n.ruleName],f.map(e=>({text:e,value:e})),void 0,`选择需要的属性名 `);Reflect.set(r.props,B,t(n));let{$el:i}=e.createSectionContainerItem_select_multiple(r),a=(e,t)=>{t?(U.html(u,`自定义函数`),U.html(d,`返回值必须为boolean值`)):(U.html(u,c.text),U.html(d,c.description??``))},o=Q(`是否使用自定义函数处理`,`isFunctionHandler`,!1,void 0,`执行自定义函数来判断是否进行过滤`,void 0,!1,a);Reflect.set(o.props,B,t(n));let{$el:s}=e.createSectionContainerItem_switch(o),c=Si(`属性值`,`ruleValue`,``,`如果是字符串，可正则，注意转义`,void 0);Reflect.set(c.props,B,t(n));let{$el:l}=e.createSectionContainerItem_textarea(c),u=l.querySelector(`.pops-panel-item-left-main-text`),d=l.querySelector(`.pops-panel-item-left-desc-text`),p=Si(`备注`,`remarks`,``,``,void 0);Reflect.set(p.props,B,t(n));let{$el:m}=e.createSectionContainerItem_textarea(p);return n.isFunctionHandler&&a(null,o.getValue()),[i,s,l,m]},m=U.createElement(`div`,{className:`rule-form-ulist-dynamic`,innerHTML:`
							<div class="rule-form-ulist-dynamic__inner"></div>
							<div class="pops-panel-button pops-panel-button-no-icon">
								<button class="pops-panel-button_inner" type="button" data-type="default">
									<i class="pops-bottom-icon" is-loading="false"></i>
									<span class="pops-panel-button-text">添加额外属性</span>
								</button>
							</div>
							`}),h=m.querySelector(`.rule-form-ulist-dynamic__inner`),g=m.querySelector(`.pops-panel-button`),_=(e={ruleName:[],isFunctionHandler:!1,ruleValue:``,remarks:``})=>{let t=U.createElement(`div`,{className:`rule-form-ulist-dynamic__inner-container`,innerHTML:`
									<div class="dynamic-control-delete">
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="danger">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">×</span>
											</button>
										</div>
									</div>
									<ul class="dynamic-forms"></ul>
								`}),r=t.querySelector(`.dynamic-control-delete`);U.on(r,`click`,r=>{if(U.preventEvent(r),U.remove(t),Array.isArray(n.dynamicData)){let t=n.dynamicData.findIndex(t=>t==e);t!==-1&&n.dynamicData.splice(t,1)}});let i=t.querySelector(`.dynamic-forms`),a=p(e);i.append(...a),h.appendChild(t)};if(U.on(g,`click`,e=>{U.preventEvent(e),_()}),Array.isArray(n.dynamicData))for(let e=0;e<n.dynamicData.length;e++){let t=n.dynamicData[e];_(t)}return i.append(o,c,u,...p(n.data),m),i},onsubmit:async(t,r,i)=>{let a=t.querySelectorAll(`.rule-form-ulist > li`),o=this.getTemplateData();if(r&&(o.uuid=i.uuid),a.forEach(t=>{let n=Reflect.get(t,e.$data.nodeStoreConfigKey);if(!n)return;let r=Reflect.get(n,`attributes`);if(!r)return;let i=Reflect.get(t,B),a=Reflect.get(r,dr),s=Reflect.get(r,fr),c=i.get(a,s);Reflect.has(o,a)?Reflect.set(o,a,c):Reflect.has(o.data,a)?Reflect.set(o.data,a,c):G.error(`${a}不在数据中`)}),t.querySelectorAll(`.rule-form-ulist-dynamic__inner-container`).forEach(t=>{let n={};t.querySelectorAll(`.dynamic-forms > li`).forEach(t=>{let r=Reflect.get(t,e.$data.nodeStoreConfigKey);if(!r)return;let i=Reflect.get(r,`attributes`);if(!i)return;let a=Reflect.get(t,B),o=Reflect.get(i,dr),s=Reflect.get(i,fr),c=a.get(o,s);Reflect.set(n,o,c)}),o.dynamicData.push(n)}),o.name.trim()===``)return z.error(`规则名称不能为空`),{success:!1,data:o};if(o.data.scope.length===0)return z.error(`请选择作用域`),{success:!1,data:o};if(o.data.ruleName.length===0)return z.error(`请选择属性名`),{success:!1,data:o};if(o.data.ruleValue.trim()===``)return z.error((o.data.isFunctionHandler?`自定义函数`:`属性值`)+`不能为空`),{success:!1,data:o};let s=!1;return s=r?!!await n.updateData(o):this.$data.videoFilterRuleStorage.addRule(o),{success:s,data:o}},style:`
          .pops-panel-textarea textarea{
              height: 150px;
          }
					.pops-panel-item-left-desc-text{
						line-height: normal;
						margin-top: 6px;
						font-size: 0.8em;
						color: rgb(108, 108, 108);
					}
					.rule-form-ulist-dynamic{
						--button-margin-top: 0px;
						--button-margin-right: 0px;
						--button-margin-bottom: 0px;
						--button-margin-left: 0px;
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						padding: 5px 20px;
					}
					.rule-form-ulist-dynamic__inner{
						width: 100%;
					}
					.rule-form-ulist-dynamic__inner-container{
						display: flex;
						align-items: center;
					}
					.dynamic-forms{
						width: 100%;
					}
					.pops-panel-textarea textarea{
						height: 60px;
						min-height: 60px;
						width: 250px;
						max-width: 400px;
						min-width: 250px;
						resize: auto;
						transition: unset;
					}
          li[data-key="isFunctionHandler"]:has(.pops-panel-switch-is-checked) + li[data-key="ruleValue"] .pops-panel-textarea {
            flex: 1;
            justify-items: end;
          }
          li[data-key="isFunctionHandler"]:has(.pops-panel-switch-is-checked) + li[data-key="ruleValue"] textarea {
            height: 200px;
            width: calc(100% - 100px);
            max-width: unset;
          }
          `,width:()=>window.innerWidth>700?`700px`:`88vw`},delete:{enable:!0,deleteCallBack:async e=>await n.deleteData(e)}},bottomControls:{filter:{enable:!0,option:[{name:`全部`,value:``,selectedCallBack(e){V.setValue(`dy-video-ui-rule-filter-option-external-index`,e.value)},filterCallBack(){return!0}},{name:`已启用`,value:`external-enabled`,selectedCallBack(e){V.setValue(`dy-video-ui-rule-filter-option-external-index`,e.value)},filterCallBack(e){return e.enable}},{name:`未启用`,value:`external-notEnabled`,selectedCallBack(e){V.setValue(`dy-video-ui-rule-filter-option-external-index`,e.value)},filterCallBack(e){return!e.enable}}],inputOption:[{name:`规则名称`,value:`rule-name`,selectedCallBack(e){V.setValue(`dy-video-ui-rule-filter-option-rule-index`,e.value)},filterCallBack(e,t){return!!e.name.match(t)}},{name:`属性值`,value:`rule-ruleValue`,selectedCallBack(e){V.setValue(`dy-video-ui-rule-filter-option-rule-index`,e.value)},filterCallBack(e,t){return!!e.data.ruleValue.match(t)}},{name:`备注`,value:`rule-remarks`,selectedCallBack(e){V.setValue(`dy-video-ui-rule-filter-option-rule-index`,e.value)},filterCallBack(e,t){return!!e.data.remarks.match(t)}}]},clear:{enable:!0,callback:()=>{this.$data.videoFilterRuleStorage.clearAllRule()}}}};return new Di(n)},showView(){this.getRuleViewInstance().showView({external:V.getValue(`dy-video-ui-rule-filter-option-external-index`),rule:V.getValue(`dy-video-ui-rule-filter-option-rule-index`)})},getTemplateData(){return{uuid:H.generateUUID(),enable:!0,name:``,data:{scope:[],ruleName:`nickname`,isFunctionHandler:!1,ruleValue:``,remarks:``},dynamicData:[]}}},Ai={init(){ji.init(),Mi.init()}},ji={init(){V.execMenuOnce(`dy-video-mouseHoverTip-rightToolBar-enterUserHome`,()=>this.blockEnterUserHomeMouseHoverTip()),V.execMenuOnce(`dy-video-mouseHoverTip-rightToolBar-follow`,()=>this.blockFollowMouseHoverTip()),V.execMenuOnce(`dy-video-mouseHoverTip-rightToolBar-addLike`,()=>this.blockAddLikeMouseHoverTip()),V.execMenuOnce(`dy-video-mouseHoverTip-rightToolBar-comment`,()=>this.blockCommentMouseHoverTip()),V.execMenuOnce(`dy-video-mouseHoverTip-rightToolBar-collect`,()=>this.blockCollectMouseHoverTip()),V.execMenuOnce(`dy-video-mouseHoverTip-rightToolBar-share`,()=>this.blockShareMouseHoverTip()),V.execMenuOnce(`dy-video-mouseHoverTip-rightToolBar-seeCorrelation`,()=>this.blockSeeCorrelationMouseHoverTip()),V.execMenuOnce(`dy-video-mouseHoverTip-rightToolBar-more`,()=>this.blockMoreMouseHoverTip())},blockEnterUserHomeMouseHoverTip(){return G.info(`禁用进入作者主页按钮的悬浮提示`),q(` div > div:has( >a[data-e2e="video-avatar"]) + .semi-portal`)},blockFollowMouseHoverTip(){return G.info(`禁用关注按钮的悬浮提示`),q(`div[data-e2e="feed-follow-icon"]  .semi-portal`)},blockAddLikeMouseHoverTip(){return G.info(`禁用点赞按钮的悬浮提示`),q(`div[data-e2e="video-player-digg"] + .semi-portal`)},blockCommentMouseHoverTip(){return G.info(`禁用评论按钮的悬浮提示`),q(`div[data-e2e="feed-comment-icon"] + .semi-portal`)},blockCollectMouseHoverTip(){return G.info(`禁用收藏按钮的悬浮提示`),q(`div[data-e2e="video-player-collect"] + .semi-always-dark`)},blockShareMouseHoverTip(){return G.info(`禁用分享按钮的悬浮提示`),q(`div[data-e2e="video-share-container"]`)},blockSeeCorrelationMouseHoverTip(){return G.info(`禁用看相关推荐按钮的悬浮提示`),q(`div:has(+[data-e2e="video-play-more"]) .semi-portal`)},blockMoreMouseHoverTip(){return G.info(`禁用更多按钮的悬浮提示`),q(`[data-e2e="video-play-more"] > div:has([data-e2e="more-music-detail"])`)}},Mi={init(){V.execMenuOnce(`dy-video-mouseHoverTip-bottomToolBar-automaticBroadcast`,()=>this.blockAutomaticBroadcast()),V.execMenuOnce(`dy-video-mouseHoverTip-bottomToolBar-clearScreen`,()=>this.blockClearScreenMouseHoverTip()),V.execMenuOnce(`dy-video-mouseHoverTip-bottomToolBar-watchLater`,()=>this.blockWatchLaterMouseHoverTip()),V.execMenuOnce(`dy-video-mouseHoverTip-bottomToolBar-pageFullScreen`,()=>this.blockPageFullScreenMouseHoverTip()),V.execMenuOnce(`dy-video-mouseHoverTip-bottomToolBar-fullScreen`,()=>this.blockFullScreenMouseHoverTip())},blockAutomaticBroadcast(){return G.info(`禁用自动连播按钮的悬浮提示`),q(`div[data-e2e="video-player-auto-play"] + .xgTips`)},blockClearScreenMouseHoverTip(){return G.info(`禁用清屏按钮的悬浮提示`),q(`.xgplayer-immersive-switch-setting .xgTips`)},blockWatchLaterMouseHoverTip(){return G.info(`禁用稍后再看按钮的悬浮提示`),q(`.xgplayer-watch-later .xgTips`,`.xgplayer-watch-later-item + .xgTips`)},blockPageFullScreenMouseHoverTip(){return G.info(`禁用网页全屏按钮的悬浮提示`),q(`.xgplayer-page-full-screen .xgTips`)},blockFullScreenMouseHoverTip(){return G.info(`禁用全屏按钮的悬浮提示`),q(`.xgplayer-fullscreen .xg-tips`)}},Ni=[{value:`auto`,label:`自动`},{value:`bottom`,label:`下方`},{value:`right`,label:`右侧`}],Pi=e=>{let t=V.getValue(e,`auto`);return Ni.some(e=>e.value===t)?t:`auto`},Fi=e=>e===`auto`?window.matchMedia(`(orientation: portrait)`).matches?`bottom`:`right`:e,Ii=e=>{let t=document.createElement(`details`);t.className=`dy-layout-picker`;let n=document.createElement(`summary`);n.title=`切换评论、章节或聊天区域的位置`;let r=document.createElement(`div`);r.className=`dy-layout-picker-menu`;let i=Ni.map(n=>{let i=document.createElement(`button`);return i.type=`button`,i.textContent=n.label,i.addEventListener(`click`,()=>{V.setValue(e,n.value),a(),t.open=!1}),r.appendChild(i),i}),a=()=>{let t=Pi(e),r=`布局：${Ni.find(e=>e.value===t).label} ▾`;n.textContent!==r&&(n.textContent=r),i.forEach((e,n)=>{let r=String(Ni[n].value===t);e.getAttribute(`aria-pressed`)!==r&&e.setAttribute(`aria-pressed`,r)})};t.append(n,r),[`pointerdown`,`click`,`dblclick`].forEach(e=>{t.addEventListener(e,e=>e.stopPropagation())});let o=e=>{t.contains(e.target)||(t.open=!1)};return document.addEventListener(`pointerdown`,o,!0),a(),{element:t,update:a,destroy:()=>{document.removeEventListener(`pointerdown`,o,!0),t.remove()}}},Li=`.dy-layout-picker {\r
  position: absolute;\r
  z-index: 9999;\r
  top: 9px;\r
  right: 52px;\r
  color: #fff;\r
  font: 12px/1.4 sans-serif;\r
  pointer-events: auto;\r
}\r
\r
.dy-layout-picker > summary {\r
  display: block;\r
  padding: 5px 9px;\r
  border: 1px solid rgba(255, 255, 255, 0.25);\r
  border-radius: 7px;\r
  background: rgba(26, 26, 32, 0.88);\r
  cursor: pointer;\r
  user-select: none;\r
  white-space: nowrap;\r
}\r
\r
.dy-layout-picker > summary::-webkit-details-marker {\r
  display: none;\r
}\r
\r
.dy-layout-picker-menu {\r
  position: absolute;\r
  top: calc(100% + 4px);\r
  right: 0;\r
  display: flex;\r
  flex-direction: column;\r
  min-width: 90px;\r
  padding: 4px;\r
  border-radius: 8px;\r
  background: #24252e;\r
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);\r
}\r
\r
.dy-layout-picker-menu button {\r
  width: 100%;\r
  padding: 6px 10px;\r
  border: 0;\r
  border-radius: 5px;\r
  background: transparent;\r
  color: #eee;\r
  text-align: left;\r
  cursor: pointer;\r
}\r
\r
.dy-layout-picker-menu button:hover,\r
.dy-layout-picker-menu button[aria-pressed="true"] {\r
  background: rgba(255, 255, 255, 0.14);\r
}\r
`,Ri=`/* 只调整当前展开的侧栏，避免章节要点激活时把隐藏的评论面板也拉出来。 */\r
.dy-comment-layout-bottom {\r
  --dy-comment-player-height: 40%;\r
  --dy-comment-panel-height: 60%;\r
}\r
\r
.dy-comment-layout-bottom .playerContainer {\r
  width: 100% !important;\r
  height: var(--dy-comment-player-height) !important;\r
  max-height: var(--dy-comment-player-height) !important;\r
  min-height: 0 !important;\r
  transition: none !important;\r
}\r
\r
.dy-comment-layout-bottom .playerContainer :is(.basePlayerContainer, .xgplayer) {\r
  height: 100% !important;\r
  max-height: 100% !important;\r
  min-height: 0 !important;\r
}\r
\r
.dy-comment-layout-bottom .playerContainer video {\r
  width: 100% !important;\r
  height: 100% !important;\r
  max-width: 100% !important;\r
  max-height: 100% !important;\r
  object-fit: contain !important;\r
}\r
\r
.dy-comment-layout-bottom.dy-comment-panel-open :is(#videoSideCard, #videoSideBar):has(#relatedVideoCard) {\r
  position: absolute !important;\r
  width: 100% !important;\r
  height: var(--dy-comment-panel-height) !important;\r
  max-height: var(--dy-comment-panel-height) !important;\r
  min-height: 0 !important;\r
  left: 0 !important;\r
  right: 0 !important;\r
  top: auto !important;\r
  bottom: 0 !important;\r
  background-color: rgba(0, 0, 0, 0.9);\r
}\r
\r
/* 仅在新侧栏挂载期取消宽度过渡；之后仍能按原生方式关闭。 */\r
.dy-comment-layout-prewarming.dy-comment-panel-open :is(#videoSideCard, #videoSideBar):has(#relatedVideoCard) {\r
  transition: none !important;\r
}\r
\r
.dy-comment-layout-bottom.dy-chapter-layout-open #chapterVideoSideCard {\r
  position: absolute !important;\r
  width: 100% !important;\r
  height: var(--dy-comment-panel-height) !important;\r
  max-height: var(--dy-comment-panel-height) !important;\r
  min-height: 0 !important;\r
  left: 0 !important;\r
  right: 0 !important;\r
  top: auto !important;\r
  bottom: 0 !important;\r
  background-color: rgba(0, 0, 0, 0.9);\r
  z-index: 3 !important;\r
  /* 保留原生 transform 和关闭动画。 */\r
}\r
\r
.dy-comment-layout-bottom > .dy-layout-picker {\r
  top: calc(var(--dy-comment-player-height) + 9px);\r
}\r
`,zi=`#sliderVideo[data-e2e="feed-active-video"], #slideMode[data-e2e="feed-active-video"]`,Bi=`#sliderVideo, #slideMode`,Vi=`#videoSideCard, #videoSideBar`,Hi=`#chapterVideoSideCard`,Ui=`#sliderVideo, #slideMode, #videoSideCard, #videoSideBar, #relatedVideoCard, #chapterVideoSideCard, #chapterVideoCard`,Wi=`dy-comment-layout-bottom`,Gi=`dy-comment-panel-open`,Ki=`dy-chapter-layout-open`,qi=`dy-comment-layout-prewarming`,Ji=`dy-video-commentLayout`,Yi=/(?:^|\/)search(?:\/|$)/,Xi={init(){G.info(`启用视频评论区布局切换`);let e=[K(Ri),K(Li)],t=new Map,n=new Map,r=new WeakMap,i=(e,t)=>{let n=window.getComputedStyle(e);if(n.display===`none`||n.visibility===`hidden`||Number(n.opacity)<.05||e.matches(`[hidden], [aria-hidden="true"], [data-state="closed"]`))return!1;let r=e.getBoundingClientRect(),i=t.getBoundingClientRect(),a=Math.min(r.bottom,i.bottom)-Math.max(r.top,i.top),o=Math.min(r.right,i.right)-Math.max(r.left,i.left);return r.width>=100&&r.height>=100&&i.height>=150&&a>=80&&o>=80},a=e=>{if(!e.querySelector(`.playerContainer`)?.querySelector(`video`))return null;let t=e.querySelector(Hi),n=!!(t?.querySelector(`#chapterVideoCard`)&&i(t,e)),a=[...e.querySelectorAll(Vi)].some(t=>t.querySelector(`#relatedVideoCard`)&&i(t,e)),o=Date.now(),s=r.get(e);if(s&&o-s.lastSeen<450&&!(s.kind===`chapter`?n:a))return s.kind;let c=n?`chapter`:a?`comment`:null;return c?r.set(e,{kind:c,lastSeen:o}):r.delete(e),c},o=()=>Yi.test(window.location.pathname)||document.querySelector(`#search-body-container, #search-result-container`)!=null,s=()=>Z.isLive()||o(),c=()=>!s()&&Fi(Pi(Ji))===`bottom`,l=e=>{e.classList.remove(Wi,Gi,Ki),t.get(e)?.destroy(),t.delete(e),r.delete(e)},u=()=>{let e=s(),r=c(),i=new Set;if(!r){for(let e of n.keys())e.classList.remove(Wi,Gi,Ki,qi);n.clear(),h=!1}if(!e)for(let e of document.querySelectorAll(zi)){let n=a(e);if(!n)continue;e.classList.toggle(Wi,r),e.classList.toggle(Gi,r&&n===`comment`),e.classList.toggle(Ki,r&&n===`chapter`);let o=t.get(e);o?.element.isConnected||(o?.destroy(),o=Ii(Ji),e.appendChild(o.element),t.set(e,o)),o.update(),i.add(e)}for(let e of t.keys())i.has(e)||l(e)},d=null,f=null,p=null,m=null,h=!1,g=!1,_=()=>{c(),d===null&&(d=window.requestAnimationFrame(()=>{d=null,u()})),f!==null&&window.clearTimeout(f),f=window.setTimeout(()=>{f=null,u()},180),p!==null&&window.clearTimeout(p),p=window.setTimeout(()=>{p=null,u()},900)},v=e=>{if(e.nodeType!==1)return!1;let t=e;return t.matches(Ui)||t.querySelector(Ui)!=null},y=new MutationObserver(e=>{if(s())y.disconnect(),g=!0,_();else if(e.some(e=>{let t=e.target;return e.type===`attributes`?t.matches(Ui):t.matches(Ui)||t.closest(`${Vi}, ${Hi}`)?!0:[...e.addedNodes,...e.removedNodes].some(v)})){if(m!==null&&h)for(let e of document.querySelectorAll(Bi))n.has(e)||x(e,`comment`);_()}}),b=()=>{document.documentElement&&!s()&&(y.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`class`,`style`,`data-e2e`,`aria-hidden`]}),g=!1,_())},x=(e,t)=>{e.classList.add(Wi,qi),e.classList.toggle(Gi,t===`comment`),e.classList.toggle(Ki,t===`chapter`),n.set(e,t)},S=()=>{m!==null&&window.clearTimeout(m),m=window.setTimeout(()=>{m=null,h=!1;for(let e of n.keys())e.classList.remove(qi),t.has(e)||e.classList.remove(Wi,Gi,Ki);n.clear(),_()},850)},C=e=>{let t=e.target;if(!(t instanceof Element))return;let n=t.closest(Bi);if(c()&&n){let e=t.closest(`[data-e2e="chapter-container"]`)?`chapter`:t.closest(`[data-e2e="feed-comment-icon"]`)?`comment`:null;e&&a(n)!==e&&(h=!1,r.set(n,{kind:e,lastSeen:Date.now()}),x(n,e),S())}t.closest(Ui)&&_()},w=()=>{if(!c())return;let e=document.querySelector(zi);if(e&&a(e)===`comment`){h=!0;for(let t of document.querySelectorAll(Bi))t!==e&&x(t,`comment`);S()}},T=e=>{e.target instanceof HTMLElement&&e.target.closest(`input, textarea, [contenteditable]`)||[`ArrowDown`,`ArrowUp`,`PageDown`,`PageUp`].includes(e.key)&&w()},ee=e=>{e.target instanceof Element&&e.target.matches(Hi)&&_()},E=()=>{document.hidden||_()};c(),u();let D=window.setInterval(()=>{s()?g||=(y.disconnect(),!0):g&&b(),u()},3e3);document.documentElement?b():document.addEventListener(`DOMContentLoaded`,b,{once:!0}),document.addEventListener(`click`,C,!0),window.addEventListener(`wheel`,w,{capture:!0,passive:!0}),window.addEventListener(`keydown`,T,!0),document.addEventListener(`transitionend`,ee,!0),window.addEventListener(`resize`,_,{passive:!0}),window.addEventListener(`pageshow`,_,{passive:!0}),document.addEventListener(`visibilitychange`,E);let O=V.addValueChangeListener(Ji,_);return[...e,()=>{y.disconnect(),document.removeEventListener(`DOMContentLoaded`,b),document.removeEventListener(`click`,C,!0),window.removeEventListener(`wheel`,w,!0),window.removeEventListener(`keydown`,T,!0),document.removeEventListener(`transitionend`,ee,!0),window.clearInterval(D),d!==null&&window.cancelAnimationFrame(d),f!==null&&window.clearTimeout(f),p!==null&&window.clearTimeout(p),m!==null&&window.clearTimeout(m),window.removeEventListener(`resize`,_),window.removeEventListener(`pageshow`,_),document.removeEventListener(`visibilitychange`,E),V.removeValueChangeListener(O);for(let e of t.keys())l(e);for(let e of n.keys())e.classList.remove(Wi,Gi,Ki,qi);n.clear()}]}},Zi={shortCut:new gi(`video-short-cut`),$data:{rateMap:[`0.75`,`1`,`1.25`,`1.5`,`1.75`,`2`,`3`]},init(){this.shortCut.initGlobalKeyboardListener(this.shorCutMapOption(),{capture:!0,beforeCallBack(){return!Z.isLive()&&{onlyStopPropagation:!0}}})},shorCutMapOption(){return{"dy-video-rate-low":{callback(){G.info(`触发快捷键 ==> 调用倍速：小`);let e=L.sessionStorage.getItem(`player_playbackratio`)??`1`,t=Zi.$data.rateMap.findIndex(t=>t===e);if(t===0){G.warn(`触发快捷键 ==> 已是最小倍速: `+e);return}let n=Zi.$data.rateMap[t-1];G.info(`触发快捷键 ==> 设置倍速: `+n),Qi.chooseVideoRate(n)}},"dy-video-rate-up":{callback(){G.info(`触发快捷键 ==> 调用倍速：大`);let e=L.sessionStorage.getItem(`player_playbackratio`)??`1`,t=Zi.$data.rateMap.findIndex(t=>t===e);if(t===Zi.$data.rateMap.length-1){G.warn(`触发快捷键 ==> 已是最大倍速: `+e);return}let n=Zi.$data.rateMap[t+1];G.info(`触发快捷键 ==> 设置倍速: `+n),Qi.chooseVideoRate(n)}},"dy-video-shortcut-immersionMode":{callback(){let e=V.getValue(`fullScreen`);e=typeof e!=`boolean`||!e,G.info(`触发快捷键 ==> 沉浸模式：`+e),V.setValue(`fullScreen`,e)}},"dy-video-shortcut-immersionMode-bottomInfoWrap-rightToolBar":{callback(){let e=V.getValue(`fullScreen`),t=`bottomInfoWrap-rightToolBar`;e=e!==t&&t,G.info(`触发快捷键 ==> 沉浸模式：`+e),V.setValue(`fullScreen`,e)}},"dy-video-shortcut-changeVideoMuted":{callback(){G.info(`触发快捷键 ==> 切换静音状态`),Y(`video[src]`).forEach(e=>{if(Mr.isVideoEmptySrc(e))return;let t=!e.muted;G.success(`切换video标签的静音状态为 ${t}`),e.muted=t})}},"dy-video-shortcut-parseVideo":{callback(){G.info(`触发快捷键 ==> 视频解析`);let e=Nr.getInViewVideo(),t=Y(`[data-e2e="video-player-share"]`),n=Nr.getInViewNode(t);if(!e.length&&!n.length){G.error(`未找到在可视区域内的视频/图文`);return}let r=e?.[0]?.$el||n?.[0]?.$el;Qi.supportVideoDownloader(r)}},"dy-video-shortcut-playbackRate":{callback(){G.info(`触发快捷键 ==> 倍速播放`);let e=!V.getValue(`dy-video-playbackrate`),t=V.getValue(`dy-video-playbackrate-select-value`);if(e){if(H.isNull(t)){z.error(`请先选择固定倍速`);return}z.success(`开启倍速：`+t)}else z.info(`关闭倍速`);V.setValue(`dy-video-playbackrate`,e)}},"dy-video-shortcut-nextChapter":{callback(){G.info(`触发快捷键 ==> 下一章`);let e=Nr.getInViewVideo()[0]?.$el;if(!e){z.error(`未找到在可视区域内的视频`);return}let t=e.closest(`.xgplayer`);if(!t){z.error(`未找到视频容器`);return}let n=U?.selector(`[data-e2e="chapter-container"] span:contains("下一章")`,t);n?n.click():z.error(`未找到【下一章】`)}}}}},Qi={$flag:{isWaitEnterFullScreen:!1},init(){di.init(),V.onceExec(`dy-short-cut`,()=>{Zi.init()}),Ai.init(),V.onceExec(`dy-video-commentLayout`,()=>{Xi.init()}),V.execMenuOnce(`fullScreen`,e=>this.fullScreen(e.value)),V.execMenuOnce(`parseVideo`,()=>this.supportVideoDownloader()),V.execMenuOnce(`dy-video-hookCopyLinkButton`,()=>this.hookCopyLinkButton()),V.exec([`autoEnterElementFullScreen`,`search-autoEnterElementFullScreen`],()=>{this.autoEnterElementFullScreen()},e=>{let[t,n]=e,r=V.getValue(t),i=V.getValue(n);if(Z.isSearch()&&r){if(i==1)return!0;if(i==0)return!1}return r},!1),V.execMenuOnce(`dy-video-doubleClickAction`,e=>{if(e.value!==``)return this.doubleClickAction(e.value)}),V.execMenuOnce([`dy-video-bgColor-enable`,`dy-video-changeBackgroundColor`],e=>this.changeBackgroundColor(e.value[1])),V.execMenuOnce(`repairProgressBar`,()=>{let e=[];return V.onceExec(`repairProgressBar`,()=>{e.push(...this.repairVideoProgressBar())}),e}),V.execMenuOnce(`dy-video-gestureBackCloseComment`,()=>this.gestureBackCloseComment()),V.execMenuOnce(`dy-video-removeStyle-bottom`,()=>this.removeStyleBottom()),V.execMenuOnce(`dy-video-disableRightToolbarTransform`,()=>this.disableRightToolbarTransform()),Qi.chooseQuality(V.getValue(`chooseVideoDefinition`)),V.execMenuOnce(`dy-video-object-fit`,e=>this.objectFit(e.value)),V.execMenuOnce([`dy-video-playbackrate`,`dy-video-playbackrate-select-value`],e=>{let t=e.value[1];if(!H.isNull(t))return this.playbackrate(t)}),V.execMenuOnce(`dy-video-allowSelectTitleText`,()=>this.allowSelectTitleText()),V.execMenuOnce(`dy-video-playerCollectShowScroll`,()=>this.playerCollectShowScroll()),U.onReady(()=>{Qi.chooseQuality(V.getValue(`chooseVideoDefinition`)),V.execMenuOnce(`dy-video-waitToRemovePauseDialog`,()=>this.waitToRemovePauseDialog()),V.execMenuOnce(`mobileMode`,()=>this.mobileMode()),V.execMenuOnce(`dy-video-autoHideBottomControls`,e=>this.autoHideBottomControls(e.value)),V.execMenuOnce(`dy-video-rightToolBarAutoHide`,()=>this.rightToolBarAutoHide()),V.execMenuOnce(`dy-video-commentTimeJump`,()=>this.commentTimeJump()),V.execMenuOnce(`dy-video-showLikeCommentCollectShareCount`,()=>this.showCompleteLikeCommentCollectShareCount())})},fullScreen(e){G.info(`沉浸模式：`+e);let t=[];return typeof e==`boolean`&&e?(t.push(q(`xg-controls.xgplayer-controls`)),t.push(...di.blockSearchFloatingBar()),t.push(ui.blockToolBar()),t.push(ii.blockVideoInfoWrap()),t.push(ri.blockBottomVideoToolBar()),t.push(di.blockMessage()),t.push(K(`
			/* 视频全屏 */
			xg-video-container.xg-video-container{
				bottom: 0px !important;
			}
			/* 图文的图片全屏 */
			.basePlayerContainer  .focusPanel .dySwiperSlide img[src]{
        height: 100%;
        object-fit: contain;
        transform: translateY(-50%);
        top: 50%;
        position: relative;
			}
      /* 修复有时候背景为全黑的问题 */
      .isCssFullScreen .basePlayerContainer video{
        height: calc(100% - 2px) !important;
      }
      `))):e===`mouseEnterShow`?t.push(K(`
        #video-info-wrap,.basePlayerContainer .player-position-box-bottom,[data-e2e="feed-live"] .douyin-player > div:has([aria-label*="直播"]),xg-controls.xgplayer-controls,[data-e2e="feed-live"] .douyin-player-controls,.positionBox,[data-e2e="feed-live"] .douyin-player > div:has(svg path[d="M13.556 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM19.778 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM24.222 19.556a1.778 1.778 0 1 0 0-3.556 1.778 1.778 0 0 0 0 3.556z"]){
          opacity: 0 !important;
        }
        .playerContainer:not(:has(.xgplayer-inactive)):hover #video-info-wrap,.playerContainer:not(:has(.xgplayer-inactive)):hover .basePlayerContainer .player-position-box-bottom,[data-e2e="feed-live"]:hover [data-e2e="basicPlayer"] > div:has([aria-label*="直播"]),[data-e2e="feed-live"]:hover .douyin-player > div:has([aria-label*="直播"]),.playerContainer:not(:has(.xgplayer-inactive)):hover xg-controls.xgplayer-controls,[data-e2e="feed-live"]:hover .douyin-player-controls,.playerContainer:not(:has(.xgplayer-inactive)):hover .positionBox,[data-e2e="feed-live"]:hover .douyin-player > div:has(svg path[d="M13.556 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM19.778 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM24.222 19.556a1.778 1.778 0 1 0 0-3.556 1.778 1.778 0 0 0 0 3.556z"]){
          opacity: 1 !important;
        }
      `)):e===`bottomInfoWrap-rightToolBar`?(t.push(...di.blockSearchFloatingBar()),t.push(ui.blockToolBar()),t.push(...ii.blockVideoInfoWrap())):G.warn(`未知mode参数: `+e),t},autoEnterElementFullScreen(e=!1,t=!0){if(this.$flag.isWaitEnterFullScreen)G.warn(`已存在等待进入全屏...`);else if(this.$flag.isWaitEnterFullScreen=!0,e){let e=new KeyboardEvent(`keydown`,t?{bubbles:!0,cancelable:!0,key:`Y`,code:`KeyY`}:{bubbles:!0,cancelable:!0,key:`H`,code:`KeyH`});U.emit(document.body||document,e,{disableHook:!0}),this.$flag.isWaitEnterFullScreen=!1,G.success(`成功自动进入${t?`网页`:``}全屏:使用快捷键触发的方式`)}else U.onReady(()=>{ei.waitReactPropsToSet(()=>t?Z.isLive()?J(ti.liveWebsiteFullScreen()):J(ti.videoFullScreen())||J(ti.searchPageActiveVideoFullScreen()):Z.isLive()?J(ti.liveFullScreen())||J(ti.liveQuitFullScreen()):J(ti.activeVideoFullScreen()),`reactProps`,{check(e){return typeof e?.onClick==`function`},set:(e,n)=>{this.$flag.isWaitEnterFullScreen=!1,G.success(`成功自动进入${t?`网页`:``}全屏：通过点击按钮触发的方式`),n.click()}})})},doubleClickAction(e){let t=e===`website-fullscreen`;G.info(`双击video动作：`+e);let n=!1;return U.onOneOrDouble(document,[`.newVideoPlayer`,`.slider-video`],(e,r,i)=>{i.isDouble&&(U.preventEvent(e),this.autoEnterElementFullScreen(!0,t));let a=r.querySelector(`video`);a?i.isDouble?n?(G.info(`双击动作：${a.paused?`由暂停恢复到双击前的播放`:`保持暂停`}`),a.pause()):(G.info(`双击动作：${a.paused?`保持播放`:`由播放恢复到双击前的暂停`}`),a.play()):n=a.paused:z.error(`未找到video元素`)},{eventType:`click`,checkClickTime:288,capture:!0,overrideTarget:!1}).off},chooseQuality(e=0){G.info(`选择视频清晰度: `+e);let t=`MANUAL_SWITCH`,n=[{done:1,gearClarity:`20`,qualityType:72,gearName:`超清 4K`,gearType:-2,clarityReal:[`adapt_lowest_4_1`,`normal_1080_0`,`adapt_lowest_1440_1`,`low_720_0`,`normal_720_0`,`low_540_0`,`normal_540_0`,`adapt_lowest_1080_1`,`lower_540_0`,`adapt_low_540_0`,`720_2_1`,`540_2_1`,`540_3_1`]},{done:1,gearClarity:`10`,qualityType:7,gearName:`超清 2K`,gearType:-1,clarityReal:[`adapt_lowest_4_1`,`normal_1080_0`,`adapt_lowest_1440_1`,`low_720_0`,`normal_720_0`,`low_540_0`,`normal_540_0`,`adapt_lowest_1080_1`,`lower_540_0`,`adapt_low_540_0`,`720_2_1`,`540_2_1`,`540_3_1`]},{done:1,gearClarity:`5`,gearName:`高清 1080P`,gearType:1,clarityReal:[`normal_1080_0`,`normal_1080_0`,`normal_720_0`,`low_720_0`,`normal_540_0`,`low_720_0`,`low_540_0`,`low_540_0`,`lower_540_0`,`adapt_low_540_0`,`adapt_low_540_0`,`adapt_lowest_1080_1`,`720_2_1`,`720_2_1`,`720_3_1`,`540_2_1`,`720_3_1`,`540_2_1`,`720_4_1`,`720_4_1`,`540_3_1`,`540_3_1`],qualityType:1},{done:1,gearClarity:`4`,gearName:`高清 720P`,gearType:2,clarityReal:[`normal_1080_0`,`normal_1080_0`,`normal_720_0`,`low_720_0`,`normal_540_0`,`low_720_0`,`low_540_0`,`low_540_0`,`lower_540_0`,`adapt_low_540_0`,`adapt_low_540_0`,`adapt_lowest_1080_1`,`720_2_1`,`720_2_1`,`720_3_1`,`540_2_1`,`720_3_1`,`540_2_1`,`720_4_1`,`720_4_1`,`540_3_1`,`540_3_1`],qualityType:10},{done:1,gearClarity:`3`,gearName:`标清 540P`,gearType:3,clarityReal:[`normal_1080_0`,`normal_1080_0`,`normal_720_0`,`low_720_0`,`normal_540_0`,`low_720_0`,`low_540_0`,`low_540_0`,`lower_540_0`,`adapt_low_540_0`,`adapt_low_540_0`,`adapt_lowest_1080_1`,`720_2_1`,`720_2_1`,`720_3_1`,`540_2_1`,`720_3_1`,`540_2_1`,`720_4_1`,`720_4_1`,`540_3_1`,`540_3_1`],qualityType:20},{done:1,gearClarity:`2`,gearName:`极速`,gearType:4,qualityType:21},{done:1,gearClarity:`0`,gearName:`智能`,gearType:0,clarityReal:[`normal_1080_0`,`normal_1080_0`,`normal_720_0`,`low_720_0`,`normal_540_0`,`low_720_0`,`low_540_0`,`low_540_0`,`lower_540_0`,`adapt_low_540_0`,`adapt_low_540_0`,`adapt_lowest_1080_1`,`720_2_1`,`720_2_1`,`720_3_1`,`540_2_1`,`720_3_1`,`540_2_1`,`720_4_1`,`720_4_1`,`540_3_1`,`540_3_1`]},{done:-999,gearClarity:`-999`,gearName:`无`,gearType:-999}].find(t=>t.gearType===e),r=function(e){let n=L.sessionStorage.getItem(t);typeof n==`object`&&n&&n.gearName===e.gearName||L.sessionStorage.setItem(t,typeof e==`string`?e:JSON.stringify(e))};if(n){if(n.gearName===`无`)return;let e=setInterval(()=>{r(n)},200);setTimeout(()=>{clearInterval(e)},1e3),G.success(`设置当前视频的清晰度: `+n.gearName)}else G.error(`该清晰度不存在: `+e)},chooseVideoRate(e=`1`){return function(e=`1`){L.sessionStorage.setItem(`player_playbackratio`,e);let t=!1,n=[...Y(`xg-icon.xgplayer-playback-setting`),...Y(`.douyin-player-playback-setting`)];if(!n.length)z.error(`未找到倍速按钮元素`);else return n.forEach(n=>{let r=Nr.findUpward(n,`video`);r&&(r.playbackRate=Number(e));let i=H.getReactInstance(n).reactContainer?.memoizedState?.element?.props?.xgCase?.updatePlayBackRatio;typeof i==`function`&&(i(),t=!0)}),t?G.success(`调用函数设置倍速成功`):z.error(`设置倍速失败，原因：未找到更新播放倍速的函数`),t}(e)},supportVideoDownloader(e){G.info(`视频下载支持`);let t=e=>{let r=``,i=``,a=``,o=``;e.videoInfo&&(r+=`
        <div class="dy-link-info-wrapper dy-link-item">
          <div class="dy-info-name">
            <span>作者：</span>
            <span>${e.videoInfo.author}</span>
          </div>
          <div class="dy-info-desc">
            <span>文案：</span>
            <span>${e.videoInfo.desc}</span>
          </div>
        </div>
        `),e.videoDownloadInfo&&(e.videoDownloadInfo.urlInfoList.forEach(t=>{let{width:r,height:a}=t,o=`${r}x${a} @${t.fps}`,s=r.toString(),c=Math.max(r,a),l=Math.min(r,a);s=c>1920&&l>1080?c>7e3&&c<9e3?`8K`:c>3500?`4K`:c>2e3?`2K`:`${l}P`:`${l}P`;let u=e.videoDownloadInfo.fileName;u=n({quality:o,"quality-t":s},u),u=u+`.`+t.format,i+=`
          <div class="dy-link-item">
            <div class="dy-link-item-name">
              <span>清晰度信息：</span>
              <span>${o} - ${s}</span>
            </div>
            <div class="dy-link-item-size">
              <span>视频大小：</span>
              <span>${t.dataSize?H.formatByteToSize(t.dataSize):`未知大小`}</span>
            </div>
            <div class="dy-link-item-download-uri">
              <span>下载地址：</span>
              <a href="${t.url}" data-format="mp4" data-file-name="${u}" download="${u}" filename>${t.url}</a>
            </div>
            ${t.backUrl.length?`
              <div class="dy-link-item-back-uri">
                <span>备用地址：</span>
                ${t.backUrl.map((e,t)=>`
                    <a href="${e}" data-format="mp4" data-file-name="${u}" download="${u}">地址${t+1}</a>
                  `).join(`，`)}
              </div>
            `:``}
          </div>`}),H.isNotNull(i)&&(r+=`<div class="dy-link-download-wrapper">${i}</div>`)),e.musicDownloadInfo&&(e.musicDownloadInfo.urlInfoList.forEach(t=>{let r=e.musicDownloadInfo.fileName;r=n({},r),r+=`.mp3`,a+=`
          <div class="dy-link-item">
            ${H.isNotNull(t.album)?`
            <div class="dy-link-item-name">
              <span>专辑：</span><span>${t.album}</span>
            </div>`:``}
            <div class="dy-link-item-name">
              <span>音乐人：</span>
              <span>${t.author}</span>
            </div>
            <div class="dy-link-item-title">
              <span>音乐名称：</span>
              <span>${t.title}</span>
            </div>
            <div class="dy-link-item-title">
              <span>播放时长：</span>
              <span>${t.duration?Mr.parseDuration(t.duration):`未知时长`}</span>
            </div>
            <div class="dy-link-item-download-uri">
              <span>下载地址：</span>
              <a href="${t.url}" data-format="mp3" data-file-name="${r}" download="${r}">${t.url}</a>
            </div>
            ${t.backUrl.length?`
              <div class="dy-link-item-back-uri">
                <span>备用地址：</span>
                ${t.backUrl.map((e,t)=>`
                    <a href="${e}" data-format="mp3" data-file-name="${r}" download="${r}">地址${t+1}</a>
                  `).join(`，`)}
              </div>
            `:``}
          </div>
          `}),H.isNotNull(a)&&(r+=`<div class="dy-link-download-wrapper">${a}</div>`)),e.pictureDownloadInfo&&(e.pictureDownloadInfo?.urlInfoList.forEach((t,r)=>{let i=`${t.width}x${t.height}`,a=e.pictureDownloadInfo.fileName;a=n({quality:i,"quality-t":i},a),a+=`.png`,o+=`
          <div class="dy-link-item">
            <div class="dy-card-wrapper">
              <div class="dy-img-wrapper">
                <a class="dy-cover-link" href="${t.url}" data-format="png" data-file-name="${a}" download="${a}">
                  <img src="${t.url}" loading="lazy" />
                </a>
              </div>
              <div class="dy-card_stats" data-size-info>
                <span>${i}</span>
              </div>
              ${t.video?.length?`
              <div class="dy-card_stats" data-video="true" data-index="${r}">
                <span>视频</span>
              </div>  
              `:``}
            </div>
          </div>`}),H.isNotNull(o)&&(r+=`<div class="dy-link-download-wrapper">${o}</div>`));let s=W.alert({title:{text:`视频解析（${e.isFromNetWork?`NetWork`:`DOM`}）`,position:`center`},content:{text:r,html:!0},mask:{enable:!0,clickEvent:{toClose:!0}},btn:{ok:{enable:!1}},width:window.innerWidth>550?`550px`:`88vw`,height:window.innerHeight>550?`550px`:`80vh`,drag:!0,dragLimit:!0,only:!0,style:`
          .dy-link-info-wrapper,
          .dy-link-download-wrapper{
            border: 1px solid #000000;
            border-radius: 5px;
            margin: 10px;
          }
          .dy-link-item > div{
            display: flex;
          }
          .dy-link-info-wrapper > div > span{
            white-space: normal;
          }
          .dy-link-info-wrapper > div > span:first-child{
            white-space: nowrap;
          }
          .dy-link-item,
          .dy-link-download-wrapper a{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .dy-link-info-wrapper > div,
          .dy-link-download-wrapper > div{
            margin: 10px;
          }
          .dy-link-download-wrapper:has(.dy-img-wrapper){
            display: flex;
            flex-wrap: wrap;
          }
          .dy-card-wrapper{
            position: relative;
            overflow: hidden;
            width: 220px;
            height: 220px;
          }
          .dy-img-wrapper{
            width: 100%;
            height: 100%;
          }
          .dy-card_stats{
            position: absolute;
            z-index: 2;
            width: 100%;
            font-size: .8em;
            color: #fff;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: row;
            cursor: pointer;
          }
          .dy-card_stats[data-video]{
            background: linear-gradient(180deg, rgba(0, 0, 0, .85), transparent);
            top: 0px;
            padding-top: 2px;
          }
          .dy-card_stats[data-size-info]{ 
            background: linear-gradient(0deg, rgba(0, 0, 0, .85), transparent);
            bottom: 0px;
            padding-bottom: 2px;
          }
          .dy-card_stats span{

          }
          .dy-cover-link{

          }
          .dy-cover-link img{
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
          `});U.on(s.$pops,`click`,`.dy-card-wrapper:has(.dy-card_stats[data-video][data-index])`,(n,r)=>{U.preventEvent(n);let i=r.querySelector(`.dy-card_stats[data-video][data-index]`),a=Number(i.getAttribute(`data-index`));if(isNaN(a)){z.error(`未获取到index`);return}let o=e.pictureDownloadInfo.urlInfoList[a];if(o==null){z.error(`未获取到图片信息`);return}let s=structuredClone(o),c=s.video;s.video=[],t({isFromNetWork:e.isFromNetWork,videoInfo:e.videoInfo,videoDownloadInfo:{fileName:e.videoDownloadInfo?.fileName,urlInfoList:c},pictureDownloadInfo:{fileName:e.pictureDownloadInfo?.fileName,urlInfoList:[s]}})},{capture:!0,overrideTarget:!1}),U.on(s.$pops,`click`,`a`,(e,t)=>{U.preventEvent(e);let n=t.getAttribute(`href`),r=t.getAttribute(`data-file-name`),i=function(){try{return typeof In==`function`}catch(e){return G.error(e),!1}};if(V.getValue(`dy-video-popupDownloadRenameFileName`)){let e=globalThis.prompt(`请确认下载的文件名`,r);if(typeof e==`string`)G.info(`重命名下载的文件名：${r} -> ${e}`),r=e;else{G.info(`取消下载`);return}}if(!i()){G.error(`当前脚本环境不支持API 【GM_download】`),window.open(n,`_blank`);return}let a=null,o=!1,s=!1,c=z.loading(`下载中...`,{showClose:!0,onClose(){!o&&typeof a==`function`&&a()}}),l=In({url:n,name:r,headers:{Referer:window.location.href},onload(){o=!0,c.close(),z.success(`下载 ${r} 已完成`)},onprogress(e){if(typeof e==`object`&&`loaded`in e&&`total`in e&&!s){let t=(e.loaded/e.total*100).toFixed(2);c.setText(`下载中...${t}%`),e.loaded===e.total&&(s=!0)}},onerror(e){c.close(),G.error(`下载失败error👉`,e),typeof e==`object`&&e.error?z.error(`下载 ${r} 失败或已取消 原因：${e.error}`,{timeout:6e3}):z.error(`下载 ${r} 失败或已取消`)},ontimeout(){c.close(),z.error(`下载 ${r} 请求超时`)}});typeof l==`object`&&l&&`abort`in l&&(a=l.abort)},{capture:!0,overrideTarget:!1})},n=(e,t=V.getValue(`dy-video-parseVideo-downloadFileName`))=>{for(let n in e){if(!Reflect.has(e,n))continue;let r=e[n];if(r==null)continue;let i=r?.toString();t=t.replace(`{${n}}`,i)}return t=t.replaceAll(/[:?"*<>|~/\\\u{1}-\u{1f}\u{7f}\u{80}-\u{9f}\p{Cf}\p{Cn}]|^[.\u{0}\p{Zl}\p{Zp}\p{Zs}]|[.\u{0}\p{Zl}\p{Zp}\p{Zs}]$|^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?=\.|$)/giu,`_`),t},r=()=>{let e=`gm-video-download-btn`,t=t=>{let n=U.createElement(t?`dy-icon`:`xg-icon`,{className:e,innerHTML:`
          <div class="xgplayer-icon ${t?`douyin-player-icon`:``}" style="display: flex;">
            <span role="img" class="semi-icon semi-icon-default">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" style="font-size: 1.2em;">
                <path fill="currentColor" d="M28,22v6H4v-6H2v8h28V22H28z M17,19.33L17,5h-2v14.33L11.59,15.91l-1.41,1.41l6,6 l6-6l-1.41-1.41L17,19.33z"/>
              </svg>
            </span>
          </div>
          <div class="xg-tips">下载${Zi.shortCut.hasOption(`dy-video-shortcut-parseVideo`)?`<span class="shortcutKey" style="
              vertical-align: baseline;
              color: var(--color-bg-toast);
              background: #fff;
              border: 1px solid #fff;
              border-radius: 3px;
              justify-content: center;
              align-items: center;
              padding: 0 3px;
              margin: 0 5px;
              font-family: PingFang SC, DFPKingGothicGB-Medium, sans-serif;
              font-size: 13px;
              font-weight: 500;
              line-height: 21px;
              display: inline-flex;">${Zi.shortCut.getShowText(`dy-video-shortcut-parseVideo`,``)}</span>`:``}</div>
				`});if(t){n.querySelector(`.xg-tips`).remove();let e=n.querySelector(`.xgplayer-icon`);n.style.display=`flex`,n.style.alignItems=`center`,e.style.height=`auto`,e.style.lineHeight=`unset`}return n},n=new H.LockFunction(()=>{Z.isLive()||(Y(`.basePlayerContainer xg-right-grid:not(:has(>:first-child[class*="${e}"]))`).forEach(e=>{let n=e.querySelector(`.gm-video-download-btn`);n||(n=t(!0),U.on(n,`click`,async e=>{U.preventEvent(e),await i(n)})),U.prepend(e,n)}),Y(`.basePlayerContainer .douyin-player-controls-right:not(:has(>:first-child[class*="${e}"]))`).forEach(e=>{let n=e.querySelector(`.gm-video-download-btn`);n||(n=t(!0),U.on(n,`click`,async e=>{U.preventEvent(e),await i(n)})),U.prepend(e,n)}))}),r=H.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{n.run()}});return{off(){r.disconnect(),U.remove(`.${e}`)}}},i=e=>{if(e.closest(`[data-e2e="feed-live"]`)){z.error(`无法解析直播video的下载信息`);return}let r=H.getReactInstance(e?.parentElement)?.reactFiber,i=e.closest(`.basePlayerContainer`),a=H.getReactInstance(i)?.reactFiber;if(!r&&!a)G.error(e,r,i,a),z.error(`获取rectFiber属性失败`);else try{let i=H.queryProperty(r||a,e=>typeof e.memoizedProps==`object`&&e.memoizedProps!=null?typeof e.memoizedProps.awemeInfo==`object`&&e.memoizedProps.awemeInfo!=null?{isFind:!0,data:e.memoizedProps.awemeInfo}:typeof e.return==`object`&&e.return!=null?{isFind:!1,data:e.return}:{isFind:!1,data:null}:{isFind:!1,data:null});if(!i){G.error(e,r,a),z.error(`获取awemeInfo属性失败`);return}G.info(`DOM上的的awemeInfo：`,i);let o,s=!1,c=new Oi().parseAwemeInfoDictData(i,`dom`,!0);if(G.info(`DOM上解析出的transformAwemeInfo：`,c),typeof c.awemeId==`string`&&ki.$data.networkAwemeInfoMap.has(c.awemeId)){s=!0;let e=ki.$data.networkAwemeInfoMap.get(c.awemeId);o=e.transformAwemeInfo,G.info(`网络请求的awemeInfo: `,e.awemeInfo),G.info(`网络请求解析出的transformAwemeInfo: `,e.transformAwemeInfo)}else o=c;o.nickname??(o.nickname=`未知作者`),o.desc??(o.desc=`未知视频文案`);let l=[],u=[],d=[];if(l=l.concat(o.videoBitRateList.map(e=>e)),typeof o.musicUrl==`string`&&H.isNotNull(o.musicUrl)&&u.push({url:o.musicUrl,author:o.musicAuthor,album:o.musicAlbum,title:o.musicTitle,duration:o.musicDuration,backUrl:o.musicBackUrlList}),Array.isArray(o?.pictureList)&&o.pictureList.length&&(d=d.concat(o.pictureList.map(e=>({url:e.url,width:e.width,height:e.height,video:e.videoBitRateList})))),!l.length&&!d.length){z.error(`未解析出有效的资源信息`);return}let f=H.formatTime(void 0,`yyyy-MM-dd_HH:mm:ss`),p={downloadTime:f,uid:o.uid,nickname:o.nickname,desc:o.desc,awemeId:o.awemeId,originDesc:o.originDesc},m=n(p),h=n(p),g=n({album:o.musicAlbum,author:o.musicAuthor,title:o.musicTitle,duration:o.musicDuration,downloadTime:f},V.getValue(`dy-video-parseVideoMusic-downloadFileName`));t({isFromNetWork:s,videoInfo:{author:o.nickname,desc:o.desc},videoDownloadInfo:{fileName:m,urlInfoList:l},musicDownloadInfo:{fileName:g,urlInfoList:u},pictureDownloadInfo:{fileName:h,urlInfoList:d}})}catch(e){G.error(e),z.error(`解析视频失败：`+e.message)}};if(e)i(e);else{let e=U.on(document,`click`,`div[data-e2e="video-share-container"] div[data-inuser="false"] button + div`,(e,t)=>{U.preventEvent(e),i(t)},{capture:!0});return V.execMenuOnce(`dy-video-downloader-addDownloadButton`,()=>{let{off:e}=r();return[()=>{e()}]}),[e.off]}},hookCopyLinkButton(){return G.info(`修改页面的分享-复制链接`),[U.on(document,`click`,`div[data-e2e="video-share-container"] div[data-inuser="false"] button:contains("复制链接")`,(e,t)=>{U.preventEvent(e);let n=t,r=H.getReactInstance(n.parentElement)?.reactFiber;if(!r){z.error(`获取rectFiber属性失败`);return}let i=r?.return?.return?.memoizedProps?.awemeInfo;if(typeof i!=`object`||!i){z.error(`获取awemeInfo属性失败`);return}G.info(`视频awemeInfo：`,i);let a=i?.shareInfo?.shareUrl;if(typeof a!=`string`)z.error(`获取shareUrl属性失败`);else{G.info(`视频链接：`+a);try{let e=new URL(a);e.search=``,a=e.toString(),G.info(`去除search参数后的链接：`+a)}catch{}H.copy(a).then(e=>{let t=r?.return?.return?.memoizedProps?.toast;e?(t=typeof t==`function`?t:z.success,t(`已复制链接`)):(t=typeof t==`function`?t:z.error,t(`复制链接失败`))})}},{capture:!0,overrideTarget:!1}).off]},mobileMode(){G.info(`启用手机模式`);let e=[];return ja.initialScale(),e.push(q(`img#douyin-temp-sidebar`),K(fi)),V.onceExec(`repairProgressBar`,()=>{e.push(...this.repairVideoProgressBar())}),Z.isVideo()&&e.push(K(`
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
      `)),e},repairVideoProgressBar(){G.info(`修复进度条按钮`);let e=[K(`
			/* 禁止触发touch事件，因为会影响到按钮点击不到 */
      @media screen and (max-width: 600px) and (orientation: portrait),
        screen and (max-height: 600px) and (orientation: landscape) {
        xg-outer,
        xg-inners {
          pointer-events: none;
        }
      }
			`)],t=V.getDynamicValue(`mobileMode`),n=V.getDynamicValue(`repairProgressBar`);e.push(t.destory,n.destory);let r=()=>t.value||n.value,i=()=>Mr.isVerticalScreen()?window.innerWidth<=600:window.innerHeight<=600;return U.onReady(()=>{U.on(document.body,`touchstart`,`xg-progress`,(e,t)=>{if(!r()||!i())return;let n=t.querySelector(`xg-outer`);n&&(n.style.height=`6px`)},{capture:!0,overrideTarget:!1}),U.on(document.body,`touchend`,`xg-progress`,(e,t)=>{if(!r()||!i())return;let n=t.querySelector(`xg-outer`);n&&(n.style.height=``)},{capture:!0,overrideTarget:!1})}),e},changeBackgroundColor(e){return G.info(`修改视频背景颜色`),K(`
		/* 推荐的直播间背景 */
		xgmask,
		#sliderVideo > div,
		/* 用户主页的视频 */
		.basePlayerContainer .imgBackground,
		/* 搜索的图文视频 */
		.basePlayerContainer .dySwiperSlide img+div,
    /* 直播间背景色 */
    [data-e2e="feed-live"] .douyin-player-dynamic-background > div[style*="background"]{
			background: ${e}  !important;
		}
		`)},autoHideBottomControls(e){G.info(`自动隐藏视频底部的控件`);let t={info:()=>mi(`dy-video-titleInfoAutoHide-delayTime`,[`div:has(>#video-info-wrap)`,`.player-position-box-bottom`,`.douyin-player > div:has([aria-label*="直播"])`],!1),controls:()=>mi(`dy-video-videoControlsAutoHide-delayTime`,[`xg-controls.xgplayer-controls`,`.douyin-player-controls`])};if(e===`info`)return t.info();if(e===`controls`)return t.controls();if(e===`info-controls`)return[t.info(),t.controls(),K(`
        div:has(div[${pi}]:hover #video-info-wrap) xg-controls.xgplayer-controls,
        div:has(xg-controls.xgplayer-controls:hover) div:has(>#video-info-wrap)[data-opacity-hide],
        div:has(.player-position-box-bottom:hover) xg-controls.xgplayer-controls,
        div:has(xg-controls.xgplayer-controls:hover) .player-position-box-bottom{
            opacity: 1 !important;
        }
        /* 直播 */
        .douyin-player:has([${pi}]:hover [aria-label*="直播"]) .douyin-player-controls,
        div:has(.douyin-player-controls:hover) .douyin-player > div:has([aria-label*="直播"]){
          opacity: 1 !important;
        }
      `)]},rightToolBarAutoHide(){G.info(`自动隐藏右侧工具栏`);let e=mi(`dy-video-rightToolBarAutoHide-delayTime`,[`.positionBox`,`[data-e2e="feed-live"] .douyin-player > div:has(svg path[d="M13.556 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM19.778 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM24.222 19.556a1.778 1.778 0 1 0 0-3.556 1.778 1.778 0 0 0 0 3.556z"])`]);return e.push(K(`
			.positionBox{
				transition: opacity 0.5s;
			}
		  `)),e},gestureBackCloseComment(){G.info(`手势返回关闭评论区`);let e=new ni({hash:qr.videoCommentDrawer,useUrl:!0,beforeHistoryBackCallBack(e){e&&n()}}),t=`#relatedVideoCard .semi-tabs + div svg:has(path[d="M22.133 23.776a1.342 1.342 0 1 0 1.898-1.898l-4.112-4.113 4.112-4.112a1.342 1.342 0 0 0-1.898-1.898l-4.112 4.112-4.113-4.112a1.342 1.342 0 1 0-1.898 1.898l4.113 4.112-4.113 4.113a1.342 1.342 0 0 0 1.898 1.898l4.113-4.113 4.112 4.113z"])`;function n(){let e=J(t);if(e){let t=H.getReactInstance(e);if(t){let e=t.reactProps?.onClick;typeof e==`function`?e():z.error(`调用关闭评论区按钮的onClick函数失败`)}else z.error(`获取关闭评论区按钮react信息失败`)}else z.error(`未找到关闭评论区的按钮`)}let r=U.on(document,`click`,`.xgplayer div[data-e2e="feed-comment-icon"]`,()=>{G.info(`手势 => 打开评论区`),U.waitNode(t,1e4).then(t=>{t&&(G.info(`手势 => 评论区出现`),e.enterGestureBackMode())})},{capture:!0,overrideTarget:!1}),i=U.on(document,`click`,t,()=>{G.info(`手势 => 关闭评论区`),e.quitGestureBackMode()},{capture:!0,overrideTarget:!1});return[r.off,i.off]},waitToRemovePauseDialog(){G.info(`监听信息区域【长时间无操作，已暂停播放】弹窗`);let e=e=>{let t=U.text(e);if(t.includes(`长时间无操作`)&&t.includes(`暂停播放`)){z.info(`出现【长时间无操作，已暂停播放】弹窗`);let t=H.getReactInstance(e);if(typeof t.reactProps==`object`&&t.reactProps!=null){let e=H.queryProperty(t.reactProps,e=>{if(typeof e?.props?.onClose==`function`)return{isFind:!0,data:e.props.onClose};{let t=e?.props?.children??e?.children;return{isFind:!1,data:Array.isArray(t)?t[0]:t}}});typeof e==`function`&&(e(),z.success(`调用函数关闭【长时间无操作，已暂停播放】弹窗`))}}},t=V.getDynamicValue(`dy-video-waitToRemovePauseDialog`),n=new H.LockFunction(()=>{t.value&&[...Array.from(Y(`.basePlayerContainer xg-bar.xg-right-bar + div`)),...Array.from(Y(`.basePlayerContainer div:has(>div):contains("长时间无操作")`))].forEach(t=>{e(t)})}),r=H.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{n.run()}});return[()=>{r?.disconnect()},t.destory]},removeStyleBottom(){return G.info(`移除video的bottom偏移`),K(`
			div:has( > div > pace-island > #video-info-wrap ),
			xg-video-container.xg-video-container,
      .douyin-player-video-container{
				bottom: 0 !important;
			}
		`)},disableRightToolbarTransform(){return G.info(`禁用右侧工具栏的transform`),K(`
			.basePlayerContainer .positionBox{
				transform: unset !important;
			}
		`)},objectFit(e){if([`fill`,`contain`,`cover`,`none`,`scale-down`].includes(e))return G.info(`自定义video object-fit`),K(`
		.xgplayer video,
    .douyin-player video {
			object-fit: ${e};
		}
		`)},playbackrate(e){G.info(`自定义播放倍速：${e}`);let t=new H.LockFunction(()=>{Z.isLive()||this.chooseVideoRate(e)}),n=H.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{t.run()}});return[()=>{n?.disconnect()},()=>{this.chooseVideoRate(`1`)}]},allowSelectTitleText(){G.info(`解除视频文案复制限制`);let e=U.on(document,[`pointerdown`,`pointerup`],`.video-info-detail[data-e2e="video-info"] .title[data-e2e="video-desc"]`,e=>{U.preventEvent(e,!0)},{capture:!0,overrideTarget:!1});return[K(`
      .video-info-detail[data-e2e="video-info"] .title[data-e2e="video-desc"]{
        user-select: all !important;
        pointer-events: auto !important;
      }
      `),()=>{e.off()}]},playerCollectShowScroll(){return G.info(`收藏夹显示滚动条`),K(`
      [data-e2e="video-player-collect"] + div div:has(>.semi-radioGroup),
      [data-e2e="video-player-collect"] + div div:has(>div>.semi-checkbox){
        scrollbar-width: thin !important;
      }
    `)},commentTimeJump(){G.info(`评论区时间可跳转`);let e=e=>{let t=e.split(`:`);if(t.length!==2&&t.length!==3)return;let n=parseInt(t[t.length-1]),r=parseInt(t[t.length-2]);return(t.length===3?parseInt(t[0]):0)*60*60+r*60+n},t=[/(\d{1,2}:[0-5][0-9]:[0-5][0-9])/g,/([0-5]{0,1}[0-9]:[0-5][0-9])/g],n=n=>{if(n.hasAttribute(`data-dy-time-processed`))return;n.setAttribute(`data-dy-time-processed`,`true`);let r=document.createTreeWalker(n,NodeFilter.SHOW_TEXT,{acceptNode:e=>{let n=e.textContent||``,r=t.some(e=>e.test(n))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;return r===NodeFilter.FILTER_ACCEPT&&e.parentElement?.closest(`[data-click-from='title']`)?NodeFilter.FILTER_REJECT:r}}),i=[],a;for(;a=r.nextNode();)i.push(a);i.forEach(n=>{let r=n.textContent||``,i=!1,a=r;if(t.forEach(t=>{a=a.replace(t,t=>{let n=e(t);return typeof n==`number`&&!isNaN(n)?(i=!0,`<span class="dy-comment-time" data-time="${n}" data-type="gm-script">${t}</span>`):t})}),i&&a!==r){let e=U.createElement(`span`,{innerHTML:a}),t=n.parentNode;t&&t.replaceChild(e,n)}})},r=U.on(document,`click`,`.dy-comment-time`,(e,t)=>{U.preventEvent(e);let n=t.getAttribute(`data-time`)||`0`,r=parseInt(n);if(!isNaN(r)&&r>=0){let e=null;if(Z.isVideo()){let n=t.closest(`[data-e2e="video-detail"]`);if(!n){z.error(`未找到视频容器`);return}e=n.querySelector(`[data-e2e="player-container"] video`)}else{let n=t.closest(`.sliderVideo`)||t.closest(`[data-e2e="feed-active-video"]`);if(!n){z.error(`未找到视频容器`);return}e=n.querySelector(`video`)}if(!e){z.error(`未找到视频元素`);return}e.currentTime=r;let i=Mr.parseDuration(r);r>e.duration?G.error(`该跳转时间超出视频最大播放时长: ${n} => ${i}`):G.info(`跳转时间至: ${n} => ${i}`)}},{capture:!0,overrideTarget:!1}),i=new H.LockFunction(()=>{Z.isLive()||Y(`[data-e2e="comment-item"]:not([data-dy-time-processed])`).forEach(e=>{n(e)})}),a=H.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{i.run()}});return[K(`
        .dy-comment-time{
          cursor: pointer;
          color: #48a4ff !important;
          text-decoration: none;
          margin-right: .2em;
        }
      `),()=>{r.off(),a.disconnect(),Y(`[data-e2e="comment-item"] .dy-comment-time`).forEach(e=>{U.html(e,U.text(e))})}]},showCompleteLikeCommentCollectShareCount(){G.info(`显示点赞、评论、收藏、分享的具体数量`);let e=new H.LockFunction(()=>{[...Y(`.basePlayerContainer:not([data-show-full-count])`)].forEach(e=>{if(e.setAttribute(`data-show-full-count`,`true`),!e)return;let t=H.getReactInstance(e)?.reactFiber;if(!t){G.error(`获取rectFiber属性失败`,{$basePlayerContainer:e,basePlayerContainerReactFiber:t});return}let n=H.queryProperty(t,e=>typeof e.memoizedProps==`object`&&e.memoizedProps!=null?typeof e.memoizedProps.awemeInfo==`object`&&e.memoizedProps.awemeInfo!=null?{isFind:!0,data:e.memoizedProps.awemeInfo}:typeof e.return==`object`&&e.return!=null?{isFind:!1,data:e.return}:{isFind:!1,data:null}:{isFind:!1,data:null});if(!n){G.error(`获取awemeInfo属性失败`,{$basePlayerContainer:e,basePlayerContainerReactFiber:t});return}let r,i=new Oi().parseAwemeInfoDictData(n,`dom`,!0);r=typeof i.awemeId==`string`&&ki.$data.networkAwemeInfoMap.has(i.awemeId)?ki.$data.networkAwemeInfoMap.get(i.awemeId).transformAwemeInfo:i,r.nickname??(r.nickname=`未知作者`),r.desc??(r.desc=`未知视频文案`);let a,o,s,c;Z.isVideo()?(a=J(`[data-e2e="detail-video-info"] div:has(>[data-e2e="video-share-icon-container"]) > div:nth-child(1) > span:not(:has(>*))`),o=J(`[data-e2e="detail-video-info"] div:has(>[data-e2e="video-share-icon-container"]) > div:nth-child(2) > span:not(:has(>*))`),s=J(`[data-e2e="detail-video-info"] div:has(>[data-e2e="video-share-icon-container"]) > div:nth-child(3) > span:not(:has(>*))`),c=J(`[data-e2e="detail-video-info"] div:has(>[data-e2e="video-share-icon-container"]) > div:nth-child(4) > span:not(:has(>*))`)):(a=e.querySelector(`[data-e2e="video-player-digg"] > div:last-child:not(:has(>*))`),o=e.querySelector(`[data-e2e="feed-comment-icon"] > div:last-child:not(:has(>*))`),s=e.querySelector(`[data-e2e="video-player-collect"] > div:last-child:not(:has(>*))`),c=e.querySelector(`[data-e2e="video-player-share"] > div:last-child:not(:has(>*))`)),a&&U.text(a,r.diggCount),o&&U.text(o,r.commentCount),s&&U.text(s,r.collectCount),c&&U.text(c,r.shareCount)})}),t=H.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{e.run()}});return()=>{t.disconnect()}}},$i={init(){V.execMenuOnce(`live-shieldChatRoom`,()=>this.shieldChatRoom()),V.execMenuOnce(`live-shielChatRoomVipSeats`,()=>this.shielChatRoomVipSeats()),V.execMenuOnce(`live-shieldDoubleScreen`,()=>this.shieldDoubleScreen()),V.execMenuOnce(`dy-live-shieldUserLevelIcon`,()=>this.shieldUserLevelIcon()),V.execMenuOnce(`dy-live-shieldUserVIPIcon`,()=>this.shieldUserVIPIcon()),V.execMenuOnce(`dy-live-shieldUserFansIcon`,()=>this.shieldUserFansIcon()),V.execMenuOnce(`dy-live-shieldMessage`,()=>this.shieldMessage()),V.execMenuOnce(`dy-live-blockBottomArea`,()=>this.blockBottomArea())},shieldChatRoom(){return G.info(`【屏蔽】评论区（聊天室）`),[q(`#chatroom`,`#RightBackgroundLayout`),K(`
            div[data-e2e="living-container"],
            div[data-e2e="living-container"] > div{
                margin-bottom: 0px !important;
            }`)]},shieldDoubleScreen(){return G.info(`【屏蔽】副屏`),[q(`#double_screen`)]},shielChatRoomVipSeats(){return G.info(`【屏蔽】评论区的贵宾席`),[q(`#chatroom > div > div:has(#audiencePanelScrollId)`,`#chatroom > div > div:has([data-e2e="live-room-audience"])`,`#chatroom > pace-island > div > div:has([data-e2e="live-room-audience"])`)]},shieldUserLevelIcon(){return G.info(`【屏蔽】用户等级图标`),[q(`#chatroom .webcast-chatroom___item *:has(>img[src*="level"])`),q(`#chatroom .webcast-chatroom___item *:has(>img[src*="aweme_grade_buff"])`),q(`#chatroom .webcast-chatroom___item *:has(>img[src*="league"])`)]},shieldUserVIPIcon(){return G.info(`【屏蔽】VIP图标`),[q(`#chatroom .webcast-chatroom___item *:has(>img[src*="subscribe"])`)]},shieldUserFansIcon(){return G.info(`【屏蔽】粉丝牌`),[q(`#chatroom .webcast-chatroom___item span:has(>div[style*="fansclub"])`,`#chatroom .webcast-chatroom___item *:has(>img[src*="fansclub"])`)]},shieldMessage(){return G.info(`【屏蔽】信息播报`),[q(`#chatroom .webcast-chatroom___bottom-message`,`#chatroom > div > div> pace-island:has([style*="new_grade_enter"])`,`#chatroom > div > div> div:has([style*="new_grade_enter"])`,`#chatroom > div > div> div:has([style*="/enter"])`)]},blockBottomArea(){return G.info(`【屏蔽】底部遮挡区域`),K(`
      .webcast-chatroom___list{
        clip-path: none !important;
      }
    `)}},ea={init(){V.execMenuOnce(`dy-live-blockVideoRightMenu-downloadClient`,()=>this.blockDownloadClient())},blockDownloadClient(){return G.info(`【屏蔽】右键菜单-下载客户端`),[q(`.__menu_container_className:has(>a[href*="douyin-pc-web"])`)]}},ta={init(){V.execMenuOnce(`live-shieldGiftColumn`,()=>this.shieldGiftColumn()),V.execMenuOnce(`live-shieldTopToolBarInfo`,()=>this.shieldTopToolBarInfo()),V.execMenuOnce(`live-shieldGiftEffects`,()=>this.shieldGiftEffects()),V.execMenuOnce(`live-shieldLucky`,()=>this.shieldLucky()),V.execMenuOnce(`live-shielYellowCar`,()=>this.shieldYellowCar()),V.execMenuOnce(`live-shieldDanmuku`,()=>this.shieldDanmu()),V.execMenuOnce(`live-block-exhibition-banner-dylive-tooltip`,()=>this.block_exhibition_banner_dylive_tooltip()),$i.init(),ea.init()},shieldGiftColumn(){G.info(`【屏蔽】底部的礼物栏`);let e=[q(`div[data-e2e="living-container"] [id^="living_room_player_container"] > :last-child:has(.gitBarOptimizeEnabled )`,`div[data-e2e="living-container"] >div> div:has(>pace-island >.gitBarOptimizeEnabled)`,`div[data-e2e="living-container"] xg-controls > div:has(div[data-e2e="gifts-container"]):not(:has(video))`,`#BottomLayout:not([data-multi-camera])`,`.douyin-player .douyin-player-controls >div:nth-child(2):has(> .gitBarOptimizeEnabled )`,`[data-e2e="living-container"] >div div:has(>pace-island>.gitBarOptimizeEnabled)`),K(`
      /* 去除全屏状态下的礼物栏后，上面的工具栏bottom也去除 */
      div[data-e2e="living-container"] xg-controls xg-inner-controls:has(+div div[data-e2e="gifts-container"]){
          bottom: 0 !important;
      }`)];return U.waitNode(`#BottomLayout:contains('多机位')`,1e4).then(t=>{t&&(U.attr(t,`data-multi-camera`,`true`),e.push(q(`#BottomLayout[data-multi-camera] .gitBarOptimizeEnabled`)))}),e},shieldTopToolBarInfo(){return G.info(`【屏蔽】顶栏信息`),[q(`div[data-e2e="living-container"] div[id*="living_room_player_container"] > pace-island[id^="island_"]`,`div[data-e2e="living-container"] div[id*="living_room_player_container"] >div>div>pace-island[id^="island_"]:has(.__isFullPlayer)`,`div[data-e2e="living-container"] xg-bar.xg-top-bar`,`#HeaderLayout`,`.douyin-player .douyin-player-top-bar`),K(`
				/* 去除屏蔽顶部后直播的video偏移 */
				#PlayerLayout [id^="living_player_containerdouyin-player"]{
					padding-top: 0 !important;
				}
			`)]},shieldGiftEffects(){return G.info(`【屏蔽】礼物特效`),[q(`#GiftTrayLayout`,`#GiftEffectLayout`,`#GiftMenuLayout`,`div[id^="gift_effect_bg_"]`)]},shieldLucky(){return G.info(`【屏蔽】福袋`),[q(`.basicPlayer[data-e2e="basicPlayer"] > pace-island[id^="island_"]:has(.ShortTouchContainer):has(>div > div:not([class*="video_layout_container"]) > div)`,`#ShortTouchLayout x-view`,`#ShortTouchLayout .ShortTouchContainer`)]},shieldYellowCar(){return G.info(`【屏蔽】小黄车`),[q(`div[id^="living_room_player_container"] .basicPlayer  > div:has(div[data-e2e="yellowCart-container"])`,`#EcmoCardLayout`)]},shieldDanmu(){return G.info(`屏蔽弹幕`),[q(`xg-danmu.xgplayer-danmu`,`#DanmakuLayout`)]},block_exhibition_banner_dylive_tooltip(){return G.info(`【屏蔽】点亮展馆帮主播集星`),[q(`[data-e2e="exhibition-banner"] .dylive-tooltip`)]}},na=`/* 直播聊天区仅调整现有容器的布局，不移动视频/聊天节点。 */\r
@media screen {\r
  #ContainerBackgroundLayout.dy-live-layout-bottom {\r
    --dy-live-top-height: 55%;\r
    flex-direction: column !important;\r
  }\r
\r
  #ContainerBackgroundLayout.dy-live-layout-bottom > #LeftBackgroundLayout {\r
    width: 100% !important;\r
    min-width: 0 !important;\r
    height: var(--dy-live-top-height) !important;\r
    min-height: 0 !important;\r
    flex: 0 0 var(--dy-live-top-height) !important;\r
  }\r
\r
  #ContainerBackgroundLayout.dy-live-layout-bottom #PlayerLayout {\r
    min-height: 0 !important;\r
    flex: 1 1 auto !important;\r
  }\r
\r
  #ContainerBackgroundLayout.dy-live-layout-bottom > #RightBackgroundLayout {\r
    width: 100% !important;\r
    min-width: 0 !important;\r
    height: calc(100% - var(--dy-live-top-height)) !important;\r
    min-height: 0 !important;\r
    flex: 1 1 0 !important;\r
  }\r
\r
  #ContainerBackgroundLayout.dy-live-layout-bottom #chatroom {\r
    width: 100% !important;\r
    min-width: 0 !important;\r
    height: 100% !important;\r
    min-height: 0 !important;\r
    flex: 1 1 auto !important;\r
  }\r
\r
  #ContainerBackgroundLayout.dy-live-layout-active.dy-live-chat-collapsed > #LeftBackgroundLayout {\r
    width: 100% !important;\r
    height: 100% !important;\r
    flex: 1 1 100% !important;\r
  }\r
\r
  #ContainerBackgroundLayout.dy-live-layout-active.dy-live-chat-collapsed > #RightBackgroundLayout {\r
    display: none !important;\r
  }\r
\r
  #ContainerBackgroundLayout > .dy-live-chat-controls {\r
    display: flex;\r
    align-items: flex-start;\r
    gap: 6px;\r
    position: absolute !important;\r
    z-index: 9999;\r
    top: 8px;\r
    right: 12px;\r
  }\r
\r
  .dy-live-chat-controls > .dy-layout-picker {\r
    position: relative;\r
    top: auto;\r
    right: auto;\r
  }\r
\r
  .dy-live-chat-controls > .dy-live-chat-toggle {\r
    display: block;\r
    padding: 5px 10px;\r
    border: 1px solid rgba(255, 255, 255, 0.24);\r
    border-radius: 8px;\r
    background: rgba(24, 25, 32, 0.86);\r
    color: #fff;\r
    font-size: 13px;\r
    cursor: pointer;\r
    white-space: nowrap;\r
  }\r
\r
  #ContainerBackgroundLayout.dy-live-layout-bottom > .dy-live-chat-controls-bottom {\r
    top: calc(var(--dy-live-top-height) + 8px);\r
  }\r
}\r
`,ra=`dy-live-layout-bottom`,ia=`dy-live-layout-active`,aa=`dy-live-chat-collapsed`,oa=`dy-live-chatLayout`,sa={init(){G.info(`启用直播聊天区布局切换`);let e=[K(na),K(Li)],t=null,n=null,r=null,i=null,a=!1,o=()=>{if(!t||!r)return;t.classList.toggle(aa,a),n?.classList.toggle(`dy-live-chat-controls-bottom`,t.classList.contains(ra)&&!a);let e=a?`展开聊天`:`收起聊天 ×`,i=String(!a),o=a?`展开直播聊天区`:`隐藏直播聊天区`;r.textContent!==e&&(r.textContent=e),r.getAttribute(`aria-expanded`)!==i&&r.setAttribute(`aria-expanded`,i),r.title!==o&&(r.title=o)},s=()=>{a=!a,o()},c=()=>{t?.classList.remove(ra,ia,aa),r?.removeEventListener(`click`,s),i?.destroy(),n?.remove(),t=null,n=null,r=null,i=null,a=!1},l=()=>{let e=document.querySelector(`#ContainerBackgroundLayout`),a=e?.querySelector(`:scope > #LeftBackgroundLayout`)!=null&&e?.querySelector(`:scope > #RightBackgroundLayout #chatroom`)!=null;Z.isLive()&&a?(t===e&&n?.isConnected&&r?.isConnected&&i?.element.isConnected||(c(),t=e,n=document.createElement(`div`),n.className=`dy-live-chat-controls`,n.style.setProperty(`position`,`absolute`,`important`),r=document.createElement(`button`),r.type=`button`,r.className=`dy-live-chat-toggle`,r.setAttribute(`aria-controls`,`chatroom`),r.addEventListener(`click`,s),i=Ii(oa),n.append(i.element,r),t.appendChild(n),o()),t.classList.add(ia),t.classList.toggle(ra,Fi(Pi(oa))===`bottom`),o(),i.update()):t&&c()};l();let u=window.setInterval(l,1500);window.addEventListener(`resize`,l,{passive:!0});let d=V.addValueChangeListener(oa,l);return[...e,()=>{window.clearInterval(u),window.removeEventListener(`resize`,l),V.removeValueChangeListener(d),c()}]}},ca={init(){V.execMenu(`dy-live-danmaku-block-gift`,()=>this.blockGift()),V.execMenu(`dy-live-danmaku-block-lucky-bag`,()=>this.blockLuckyBag())},blockGift(){G.info(`【屏蔽】送礼信息`),ei.waitReactPropsToSet(`[data-e2e="danmaku-setting-icon"]`,`reactProps`,{check(e,t){return typeof e?.onMouseEnter==`function`&&typeof e?.onMouseLeave==`function`},set(e,t){G.info(`【屏蔽】送礼信息-弹出弹幕设置面板`);let n=e.onMouseEnter,r=e.onMouseLeave;n(),U.waitNode(()=>U.selector(`xpath://div[@data-e2e="danmaku-setting-icon"]/following::span[contains(text(),"送礼信息")]`),2e3).then(e=>{try{if(!e){G.error(`【屏蔽】送礼信息-未找到送礼信息按钮`);return}let t=U.next(e);if(!t){G.error(`【屏蔽】送礼信息-未找到送礼信息的Checkbox按钮`);return}let n=H.getReactInstance(t),r=n?.reactFiber?.child?.child?.memoizedProps?.onClick,i=n?.reactFiber?.child?.memoizedProps?.checked;typeof i==`boolean`&&i&&typeof r==`function`&&(G.success(`点击关闭 送礼信息`),r())}catch(e){G.error(e)}finally{r()}})}})},blockLuckyBag(){G.info(`【屏蔽】福袋口令`),ei.waitReactPropsToSet(`[data-e2e="danmaku-setting-icon"]`,`reactProps`,{check(e,t){return typeof e?.onMouseEnter==`function`&&typeof e?.onMouseLeave==`function`},set(e,t){G.info(`【屏蔽】福袋口令-弹出弹幕设置面板`);let n=e.onMouseEnter,r=e.onMouseLeave;n(),U.waitNode(()=>U.selector(`xpath://div[@data-e2e="danmaku-setting-icon"]/following::span[contains(text(),"福袋口令")]`),2e3).then(e=>{try{if(!e){G.error(`【屏蔽】福袋口令-未找到福袋口令按钮`);return}let t=U.next(e);if(!t){G.error(`【屏蔽】福袋口令-未找到福袋口令的Checkbox按钮`);return}let n=H.getReactInstance(t),r=n?.reactFiber?.child?.child?.memoizedProps?.onClick,i=n?.reactFiber?.child?.memoizedProps?.checked;typeof i==`boolean`&&i&&typeof r==`function`&&(G.success(`福袋口令：点击关闭`),r())}catch(e){G.error(e)}finally{r()}})}})}},la={shortCut:new gi(`live-short-cut`),$data:{blockChatRoom:!1},init(){this.shortCut.initGlobalKeyboardListener(this.getShortCutOptions(),{capture:!0,beforeCallBack(){return Z.isLive()?{onlyStopPropagation:!0}:!1}})},getShortCutOptions(){return{"live-shieldTopToolBarInfo":{callback(e){G.info(`快捷键 ==> 【屏蔽】顶栏信息`);let t=V.getValue(e);V.setValue(e,!t)}},"dy-live-block-chatroom":{callback(){G.info(`快捷键 ==> 【屏蔽】聊天室`);let e=`live-shieldChatRoom`,t=V.getValue(e);V.setValue(e,!t)}},"dy-live-shieldGiftEffects":{callback:()=>{G.info(`快捷键 ==> 【屏蔽】礼物特效`);let e=`live-shieldGiftEffects`,t=V.getValue(e);V.setValue(e,!t)}},"dy-live-shortcut-shieldGiftColumn":{callback(){G.info(`触发快捷键  ==> 【屏蔽】底部的礼物栏`);let e=`live-shieldGiftColumn`,t=V.getValue(e);V.setValue(e,!t)}},"dy-live-shortcut-changeVideoMuted":{callback(){G.info(`触发快捷键 ==> 切换静音状态`),Y(`video`).forEach(e=>{let t=!e.muted;e.muted=t,G.success(`成功切换video标签的静音状态为 ${t}`)})}},"dy-live-shortcut-switchPlayState":{callback(){G.info(`触发快捷键 ==> 播放/暂停`);let e=Nr.getInViewVideo();if(!e.length){z.error(`未找到直播的video标签`);return}let t=e[0];t.$el.paused?(t.$el.play(),G.info(`当前为暂停，切换至播放`)):(t.$el.pause(),G.info(`当前为播放，切换至暂停`))}},"dy-live-shortcut-shielYellowCar":{callback(){G.info(`触发快捷键 ==> 【屏蔽】小黄车`);let e=`live-shielYellowCar`,t=V.getValue(e);V.setValue(e,!t)}}}}},ua={init(){V.execMenuOnce(`dy-live-player-block`,()=>this.block()),V.execMenuOnce(`dy-live-player-block-play`,()=>this.blockPlay()),V.execMenuOnce(`dy-live-player-block-refresh`,()=>this.blockRefresh()),V.execMenuOnce(`dy-live-player-block-playclarity`,()=>this.blockPlayclarity()),V.execMenuOnce(`dy-live-player-block-threeScreen`,()=>this.blockThreeScreen()),V.execMenuOnce(`dy-live-player-block-rotate`,()=>this.blockScreenRotate()),V.execMenuOnce(`dy-live-player-block-danmukuSwitch`,()=>this.blockDanmakuSwitch()),V.execMenuOnce(`dy-live-player-block-giftSetting`,()=>this.blockGiftSetting()),V.execMenuOnce(`dy-live-player-block-volume`,()=>this.blockVolume()),V.execMenuOnce(`dy-live-player-block-miniMode`,()=>this.blockMiniMode()),V.execMenuOnce(`dy-live-player-block-pageFullScreen`,()=>this.blockPageFullScreen()),V.execMenuOnce(`dy-live-player-block-fullScreen`,()=>this.blockFullScreen())},block(){return G.info(`【屏蔽】播放器组件`),q(`[data-e2e="living-container"] .douyin-player-controls`)},blockPlay(){return G.info(`【屏蔽】播放`),q(`[data-e2e="living-container"] .douyin-player-play`)},blockRefresh(){return G.info(`【屏蔽】刷新`),q(`[data-e2e="living-container"] .douyin-player-play+slot:has(svg)`)},blockPlayclarity(){return G.info(`【屏蔽】清晰度`),q(`[data-e2e="living-container"] .QualitySwitchNewPlugin`)},blockThreeScreen(){return G.info(`【屏蔽】三屏画面`),q(`[data-e2e="living-container"] div:has(>[data-e2e="triple_screen_icon"])`)},blockScreenRotate(){return G.info(`【屏蔽】屏幕旋转`),q(`[data-e2e="living-container"] .douyin-player-rotate`)},blockDanmakuSwitch(){return G.info(`【屏蔽】弹幕开关`),q(`[data-e2e="living-container"] div:has(>[data-e2e="danmaku-setting-icon"])`)},blockGiftSetting(){return G.info(`【屏蔽】礼物设置`),q(`[data-e2e="living-container"] div:has(>[data-e2e="gift-setting"])`)},blockVolume(){return G.info(`【屏蔽】音量`),q(`[data-e2e="living-container"] .douyin-player-volume`)},blockMiniMode(){return G.info(`【屏蔽】小窗模式`),q(`[data-e2e="living-container"] .douyin-player-controls slot > div:has(svg path[d="M22.5 10H10v11h6.25a1 1 0 1 1 0 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v4.5a1 1 0 1 1-2 0V10zm-9.465 6.622c0 .485.393.878.877.878h3.511a.878.878 0 0 0 .878-.878v-3.51a.878.878 0 0 0-1.756 0v1.348l-2.695-2.696a.878.878 0 1 0-1.241 1.241l2.74 2.74h-1.437a.878.878 0 0 0-.877.877zm6.074 1.878a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4z"])`)},blockPageFullScreen(){return G.info(`【屏蔽】网页全屏`),q(`[data-e2e="living-container"] .douyin-player-controls slot > div:has(svg path[d="M9.75 8.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2H9.75zM15 11.25h-3.75a1 1 0 0 0-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 0 1-1 1z"])`,`[data-e2e="living-container"] .douyin-player-controls slot > div:has(svg path[d="M7.75 10.5a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9.75a2 2 0 0 1-2-2v-11zM14 15.75h-3.75v-2H13V11h2v3.75a1 1 0 0 1-1 1zm7.75.5H18a1 1 0 0 0-1 1V21h2v-2.75h2.75v-2z"])`)},blockFullScreen(){return G.info(`【屏蔽】进入全屏`),q(`[data-e2e="living-container"] .douyin-player-fullscreen`)}},da={$data:{playerInstance:null},$el:{$player:null},init(){ua.init()},registerMenu(){Tr.add({key:`live-parsePlayerInstance`,text:`⚙ PlayerInstance`,autoReload:!1,showText(e){return e},callback:()=>{let e=J(`[id^="living_player_container"] .douyin-player`);if(!e){z.error(`获取playerInstance元素失败`);return}this.$el.$player=e;let t=this.parseElementPlayerIns(this.$el.$player);t==null?z.error(`获取playerInstance失败`):(this.$data.playerInstance=t,this.showParseDialog())}})},parseElementPlayerIns(e){let t=H.getReactInstance(e);return t?.reactFiber?.return?.memoizedProps?.playerInstance||Reflect.get(t,`_player`)?.proxy},showParseDialog(){G.info(`playerInstance：`,this.$data.playerInstance);let e=this.$data.playerInstance?.src,t=this.$data.playerInstance?.baseConfig?.abr?.urls??{};W.alert({title:{text:`解析信息`,position:`center`},content:{text:`
        <div class="live-dy-parse-container">
            <div class="live-dy-parse-item">
                <div class="live-dy-parse-item-name">播放器版本：</div>
                <div class="live-dy-parse-item-value">${this.$data.playerInstance?.version}</div>
            </div>
            <div class="live-dy-parse-item">
                <div class="live-dy-parse-item-name">BitRate：</div>
                <div class="live-dy-parse-item-value">${this.$data.playerInstance?.baseConfig?.abr?.bitrate}</div>
            </div>
            <div class="live-dy-parse-item">
                <div class="live-dy-parse-item-name">当前播放的源：</div>
                <a class="live-dy-parse-item-value" href="${e}" target="_blank">${e}</a>
            </div>
            ${Object.keys(t).sort((e,t)=>Number(e)-Number(t)).map(e=>{let n=t[e],r=String(e);return e===this.$data.playerInstance?.baseConfig?.abr?.bitrate?.toString()&&(r=`原画`),`
                <div class="live-dy-parse-item">
                    <div class="live-dy-parse-item-name">${r}：</div>
                    <a class="live-dy-parse-item-value" href="${n}" target="_blank">${n}</a>
                </div>
                `}).filter(e=>e!=null).join(`
`)}
        </div>
        `,html:!0},mask:{clickEvent:{toClose:!0}},btn:{ok:{enable:!1}},width:window.innerWidth>550?`550px`:`88wv`,height:window.innerHeight>550?`550px`:`70vh`,style:`
      .live-dy-parse-container{
          display: flex;
          flex-direction: column;
          gap: 10px;
      }
      .live-dy-parse-item{
          display: flex;
          flex-wrap: wrap;
          border: 1px solid #919191;
          border-left: 0px;
          border-right: 0px;
          width: 100%;
          background: #0af9ee;
          padding: 5px 5px;
      }
      `})},reloadVideo(){let e=new KeyboardEvent(`keydown`,{bubbles:!0,cancelable:!0,key:`R`,code:`KeyR`});U.emit(document.body||document,e,{disableHook:!0})}},fa={auto:{label:`自动`,sign:0},origin:{label:`原画`,sign:5},uhd:{label:`蓝光`,sign:4},hd:{label:`超清`,sign:3},sd:{label:`高清`,sign:2},ld:{label:`标清`,sign:1}},pa={init(){ta.init(),la.init(),ca.init(),da.init(),V.onceExec(`dy-live-layout-controller`,()=>{sa.init()}),V.onceExec(`live-parsePlayerInstance`,()=>da.registerMenu()),V.execMenu(`live-pauseVideo`,()=>{this.disableVideoAutoPlay()}),V.exec([`live-bgColor-enable`,`live-changeBackgroundColor`],()=>this.changeBackgroundColor()),V.execMenuOnce(`live-prevent-wheel-switchLiveRoom`,e=>{G.info(`禁用鼠标滚轮切换直播间`);let t=V.getDynamicValue(e.key[0]);return[U.on(document,[`wheel`,`mousewheel`],e=>{t.value&&Z.isLive()&&U.preventEvent(e,!0)},{capture:!0,overrideTarget:!1}).off,t.destory]}),V.execMenu(`dy-live-quickGift`,()=>this.disableQuickGift()),V.execMenuOnce([`dy-live-doubleClickAction`,`dy-live-oneClickAction`],e=>{let t=e.value[0],n=e.value[1];if(t!=``||n!=``)return this.oneClickOrDoubleClickAction(t,n)}),U.onReady(()=>{V.execMenuOnce(`live-danmu-shield-rule-enable`,async()=>Rr.hookLiveMessageDecoder()),V.execMenuOnce(`live-waitToRemovePauseDialog`,()=>this.waitToRemovePauseDialog()),V.execMenu(`live-chooseQuality`,e=>{e.value!==`auto`&&this.chooseQuality(e.value)}),V.execMenu(`live-autoEnterElementFullScreen`,()=>{this.autoEnterElementFullScreen()}),V.execMenu(`dy-live-autoCloseChatRoom`,()=>{this.autoCloseChatRoom()}),V.execMenu(`dy-live-quickGift`,()=>this.disableQuickGift()),V.execMenuOnce(`dy-live-showLiveRoomAudienceCount`,()=>this.showRoomUserCount())})},autoEnterElementFullScreen(){ei.waitReactPropsToSet(`xg-icon.xgplayer-fullscreen + xg-icon  div:has(>svg)`,`reactFiber`,{check(e){return typeof e?.memoizedProps?.onClick==`function`},set(e,t){let n=t.closest(`xg-icon`);n&&U.text(n).includes(`退出网页全屏`)?G.warn(`抖音已自动进入网页全屏，不执行脚本的操作`):(e.memoizedProps.onClick(),G.success(`成功自动进入网页全屏`))}})},chooseQuality(e=`origin`){let t=fa[e].label;window.localStorage.setItem(`webcast_local_quality`,e),Or.update({name:`webcast_local_quality`,value:e,domain:`.douyin.com`}),Or.update({name:`live_local_quality`,value:e,domain:`.douyin.com`}),ei.waitReactPropsToSet(`xg-inner-controls xg-right-grid >div:has([data-e2e="quality-selector"])`,`reactProps`,{check(e){return typeof e?.children?.props?.children?.props?.qualityHandler==`object`&&typeof e?.children?.props?.children?.props?.qualityHandler?.getCurrentQualityList==`function`},set(t){let n=t.children.props.children.props.qualityHandler,r=n.getCurrentQualityList();r.includes(e)||(z.warning(`当前直播没有【`+e+`】画质，自动选择最高画质`),r.sort((e,t)=>fa[e]?fa[t]?fa[e].sign-fa[t].sign:(G.error(`画质【`+t+`】不存在`),0):(G.error(`画质【`+e+`】不存在`),0)),e=r[r.length-1]),n.setCurrentQuality(e),G.success(`成功设置画质为【`+e+`】`)}}),ei.waitReactPropsToSet(`#PlayerLayout .douyin-player-controls .QualitySwitchNewPlugin > div`,`reactFiber`,{check(e){return typeof e?.return?.memoizedProps?.qualityHandler?.setCurrentQuality==`function`&&Array.isArray(e?.return?.memoizedProps?.qualityList)},set(t){let n=t.return.memoizedProps.qualityHandler,r=t?.return?.memoizedProps?.qualityList;r.includes(e)||(z.warning(`当前直播没有【`+e+`】画质，自动选择最高画质`),r.sort((e,t)=>fa[e]?fa[t]?fa[e].sign-fa[t].sign:(G.error(`画质【`+t+`】不存在`),0):(G.error(`画质【`+e+`】不存在`),0)),e=r[r.length-1]),n.setCurrentQuality(e),G.success(`成功设置画质为【`+e+`】`)}});let n=(t.includes(`自动`),`#PlayerLayout .douyin-player-controls .QualitySwitchNewPlugin > div [data-e2e="quality-selector"] > div:contains("${t}")`);ei.waitReactPropsToSet(n,`reactProps`,{check(e){return typeof e?.onClick==`function`},set(e,t){G.success(`调用onClick切换至画质【${U.text(t)}】`),e.onClick()}})},unlockImageQuality(){G.info(`解锁画质选择`),U.on(document,`click`,`div[data-e2e="quality-selector"] > div`,function(e,t){U.preventEvent(e);try{let e=H.getReactInstance(t),n=t.closest(`.QualitySwitchNewPlugin`),r=t.closest(`.QualitySwitchNewPlugin > div`)||t.closest(`div[data-index]`),i=H.getReactInstance(r),a={getCurrentQuality(){return e?.reactFiber?.key},getCurrentQualityList(){return i?.reactFiber?.return?.memoizedProps?.qualityList||i?.reactProps?.children?.ref?.current},setCurrentQuality(e){let t=i?.reactFiber?.return?.memoizedProps?.qualityHandler?.setCurrentQuality||i?.reactFiber?.child?.memoizedProps?.qualityHandler?.setCurrentQuality||i?.reactFiber?.return?.memoizedProps?.qualityHandler?.setCurrentQuality||i?.reactProps?.children?.ref?.current?.setCurrentQuality;if(typeof t==`function`)t(e);else throw Error(`not find function：setCurrentQuality `)}};if(n){let e=H.getReactInstance(n)?.reactFiber?.child?.ref?.current;typeof e==`object`&&e&&typeof e?.getCurrentQuality==`function`&&typeof e?.getCurrentQualityList==`function`&&typeof e?.setCurrentQuality==`function`&&(a=e)}let o=a.getCurrentQuality();G.info(`当前选择的画质: `+o),G.info(`所有的画质: `,a.getCurrentQualityList()),a.setCurrentQuality(o)}catch(e){G.error(e),z.error(`切换画质失败`)}},{capture:!0,overrideTarget:!1})},waitToRemovePauseDialog(){G.info(`监听【长时间无操作，已暂停播放】弹窗`);let e=(e,t)=>{let n=U.text(e);if(n.includes(`长时间无操作`)&&n.includes(`暂停播放`)){z.info(`检测${t}：出现【长时间无操作，已暂停播放】弹窗`);let n=null,r=H.getReactInstance(e);typeof r.reactContainer==`object`&&r.reactContainer&&(n=H.queryProperty(r.reactContainer,e=>typeof e.onClose==`function`?{isFind:!0,data:e.onClose}:typeof e?.memoizedProps?.onClose==`function`?{isFind:!0,data:e?.memoizedProps?.onClose}:{isFind:!1,data:e.child})||r?.reactContainer?.memoizedState?.element?.props?.children?.props?.onClose),typeof n!=`function`&&typeof r.reactFiber==`object`&&r.reactFiber&&[`3`].includes(t.toString())&&(n=H.queryProperty(r.reactFiber,e=>typeof e.onClose==`function`?{isFind:!0,data:e.onClose}:typeof e?.memoizedProps?.onClose==`function`?{isFind:!0,data:e?.memoizedProps?.onClose}:{isFind:!1,data:e.return})),typeof n==`function`&&(z.success(`检测${t}：调用函数关闭弹窗`),n())}},t=V.getDynamicValue(`live-waitToRemovePauseDialog`),n=new H.LockFunction(()=>{t.value&&(Y(`body > div[elementtiming='element-timing']`).forEach(t=>{e(t,`1`)}),Y(`body > div:not([id="root"]):not(:empty)`).forEach(t=>{e(t,`2`)}),Y(`#TipsLayout > div`).forEach(t=>{e(t,`3`)}))}),r=H.mutationObserver(document.body||document.documentElement,{config:{subtree:!0,childList:!0},immediate:!0,callback(){n.run()}});return[()=>{r?.disconnect()},t.destory]},async disableVideoAutoPlay(){G.info(`禁止自动播放视频`);let e=await U.waitAnyNode([`.basicPlayer[data-e2e="basicPlayer"] video`,`#PlayerLayout .douyin-player video`],1e4);if(!e)return;e.autoplay=!1,e.pause(),U.off(e,`play`,void 0,{capture:!0},e=>e.callback.toString().includes(`disable autoplay listener remove tag`)),U.off(e,`pause`,void 0,{capture:!0},e=>e.callback.toString().includes(`disable autoplay listener remove tag`)),U.off(e.parentElement,`click`,void 0,{},e=>e.callback.toString().includes(`disable autoplay listener remove tag`)),U.off(window,`keydown`,void 0,{capture:!0},e=>e.callback.toString().includes(`disable autoplay listener remove tag`));let t=()=>{clearTimeout(a),n.off(),r.off(),i.off(),G.info(`已移除监听自动播放`);let t=()=>{U.off(e,`play`,void 0,{capture:!0},e=>e.callback.toString().includes(`disable autoplay listener remove tag`)),U.on(e,`play`,()=>{G.info(`播放-视频重载`),da.reloadVideo()},{once:!0,capture:!0})};U.on(e,`pause`,()=>{t()},{capture:!0}),t()},n=U.on(e,`play`,t=>{U.preventEvent(t),e.autoplay=!1,e.pause(),G.success(`成功禁止自动播放视频(直播)`)},{capture:!0}),r=U.on(e.parentElement,`click`,n=>{U.preventEvent(n),t(),e.paused?e.play():e.pause()},{capture:!0,once:!0,overrideTarget:!1}),i=U.on(window,`keydown`,n=>{n.code!==`Space`||n.ctrlKey||n.altKey||n.shiftKey||n.metaKey||(U.preventEvent(n),t(),e.paused?e.play():e.pause())},{capture:!0,once:!0}),a=setTimeout(t,3e3);return[()=>{t()}]},changeBackgroundColor(){return G.info(`修改视频背景颜色`),K(`
		div[id^="living_room_player_container"] div[data-anchor-id="living-background"] div:has(>.xgplayer-dynamic-bg),
		#LeftBackgroundLayout {
			background: ${V.getValue(`live-changeBackgroundColor`)} !important;
		}
		div[id^="living_room_player_container"] div[data-anchor-id="living-background"] .xgplayer-dynamic-bg,
		#LeftBackgroundLayout .douyin-player-dynamic-background{
			visibility: hidden;
		}
		`)},autoCloseChatRoom(){ei.waitReactPropsToSet(`#chatroom .chatroom_close`,`reactFiber`,{check(e){return typeof e?.memoizedProps?.onClick==`function`},set(e,t){G.info(`自动关闭聊天室-点击关闭聊天室按钮`),t.click()}})},disableQuickGift(){G.info(`禁用快捷键送礼 - localStorage处理`),window.localStorage.setItem(`disable_shortcut_key_v2`,`false`)},async oneClickOrDoubleClickAction(e,t){let n=e===`website-fullscreen`;G.info(`双击video动作：`+e);let r=U.onOneOrDouble(document,`[id^="living_player_container"] .douyin-player`,(e,r,i)=>{let a=e.target;if(!(a instanceof Element&&(a.closest(`.douyin-player-controls`)||a.closest(`#ShortTouchLayout`)||a.closest(`#short_touch_land_lottery_land_userMain`)||!r.contains(a)))){if(i.isDouble)U.preventEvent(e),Qi.autoEnterElementFullScreen(!0,n);else if(t==`switch-video-play-state`){let e=r.querySelector(`video`);if(!e){z.error(`未找到video元素`);return}e.paused?da.reloadVideo():(e.pause(),G.info(`暂停视频`))}}},{capture:!0,eventType:`click`,checkClickTime:300,overrideTarget:!1});return[()=>{r.off()}]},async showRoomUserCount(){G.info(`显示直播间具体人数`);let e=await U.waitNode(`[data-e2e="live-room-audience"]`,1e4);if(!e){G.error(`未找到观众人数元素`);return}if(!e.closest(`[data-e2e="living-container"]`)){G.error(`未找到直播间容器`);return}let t=H.getReactInstance(e)?.reactFiber;if(!t){G.error(`未找到react实例`);return}let n=new H.LockFunction(async()=>{let n=H.queryProperty(t,e=>{let t=e?.memoizedProps?.value?.store?.roomStore?.roomInfo?.room?.room_view_stats?.display_value;return typeof t==`number`?{isFind:!0,data:t}:{isFind:!1,data:e?.return}});typeof n==`number`&&(U.text(e,n),G.info(`更新人数：${n}`),await H.sleep(500))}),r=H.mutationObserver(document.body,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{n.run()}});return[()=>{r.disconnect()}]}},ma=`/* 右侧视频信息里的 下载客户端，桌面快捷访问 */\r
[data-e2e="note-detail"] div:has(> [data-e2e="user-info"]) > div:has(a[download*="douyin-downloader"]) {\r
  display: none !important;\r
}\r
`,ha={init(){K(ma)}},ga={init(){V.execMenuOnce(`dy-recommend-pauseVideo`,()=>this.pauseVideo()),V.execMenuOnce(`dy-recommend-disableVideoSatisfaction`,()=>{this.disableVideoSatisfaction()}),U.onReady(()=>{V.execMenuOnce(`dy-recommend-automaticContinuousPlayback`,e=>{let t=e.value===`Sequence+Collection`;return this.automaticContinuousPlayback(t)})})},async pauseVideo(){G.info(`禁止自动播放`);let e=await U.waitAnyNode([`.page-recommend-container [data-e2e="feed-active-video"] video`],1e4);if(!e)return;e.autoplay=!1,e.pause(),U.off(e,`play`,void 0,{capture:!0},e=>e.callback.toString().includes(`disable autoplay listener remove tag`)),U.off(e.parentElement,`click`,void 0,{},e=>e.callback.toString().includes(`disable autoplay listener remove tag`)),U.off(window,`keydown`,void 0,{capture:!0},e=>e.callback.toString().includes(`disable autoplay listener remove tag`));let t=()=>{clearTimeout(a),n.off(),r.off(),i?.off(),G.info(`已移除监听自动播放`)},n=U.on(e,`play`,t=>{U.preventEvent(t),e.autoplay=!1,e.pause(),G.success(`成功禁止自动播放视频`)},{capture:!0}),r=U.on(e.parentElement,`click`,n=>{U.preventEvent(n),t(),e.paused?e.play():e.pause()},{capture:!0,once:!0}),i=U.on(window,`keydown`,n=>{n.code!==`Space`||n.ctrlKey||n.altKey||n.shiftKey||n.metaKey||(U.preventEvent(n),t(),e.paused?e.play():e.pause())},{capture:!0,once:!0}),a=setTimeout(t,3e3);return[()=>{t()}]},automaticContinuousPlayback(e){G.info(`自动连播`);let t=`data-automaticContinuousPlayback`,n=(e=!1,n=!1)=>{let r=`.page-recommend-container:not(:has([data-e2e="feed-live"])) [data-e2e="feed-active-video"] video${e?`:not([${t}])`:``}`;return n?Y(r):J(r)},r=V.getDynamicValue(`dy-keyboard-hook-pageUpAndDown`),i=()=>{let e=J(`.xgplayer-playswitch-next`);if(e)e.click();else{if(r.value){z.error(`自动连播切换失败，请勿禁用↑↓翻页快捷键`);return}let e=new KeyboardEvent(`keydown`,{bubbles:!0,cancelable:!0,key:`ArrowDown`,code:`ArrowDown`,keyCode:40,which:40});U.emit(document.body||document,e,{disableHook:!0})}},a=()=>{let e=Y(`#related-card-list-container .related-list-item-in-small-card`),t=e.findIndex(e=>!!e.querySelector(`.video-playing-item`)),n=J(`.slider-video span:has(svg path[d="M16.7071 3.29289C16.3166 2.90237 15.6834 2.90237 15.2929 3.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L15.2929 20.7071C15.6834 21.0976 16.3166 21.0976 16.7071 20.7071C17.0976 20.3166 17.0976 19.6834 16.7071 19.2929L9.41421 12L16.7071 4.70711C17.0976 4.31658 17.0976 3.68342 16.7071 3.29289Z"])`);return{listLength:e.length,currentIndex:t,maxIndex:e.length-1,isEnded:t===e.length-1,$exit:n,$relatedList:e,$currentRelated:e[t]}},o=new H.LockFunction(()=>{if(!Z.isRecommend())return;let r=n();if(!r||r.hasAttribute(t))return;r.setAttribute(t,`true`);let o=r.src;U.on(r,`ended`,async t=>{G.success(`视频播放完毕，准备切换至下一个视频`),U.preventEvent(t),o=r.src;let s=r.closest(`.page-recommend-container`);if(e&&s){let e=J(`xpath:.//div[contains(@class,'under-title-tag')]/descendant::span[contains(text(),"合集")]`,s);if(e){let t=H.getReactInstance(e)?.reactFiber?.return?.key;t!==`series`&&t!==`mix`&&!e.textContent.trim().startsWith(`合集：`)||e.parentElement?.parentElement?.textContent.trim().includes(`已是最新集`)||(G.success(`点击 合集`),e.click(),await U.waitNode(`#slideMode`,3e3),G.success(`合集容器加载完成`),await H.sleep(1500))}}cr.interval(async e=>{let t=!!r.closest(`#slideMode`);if(e){let{$exit:e}=a();return t?(G.success(`当前视频为合集中的最后一个视频，退出合集并播放下一个视频`),e?(e.click(),G.info(`点击退出合集按钮`),await H.sleep(1500)):G.error(`退出合集失败，未找到退出合集按钮`)):G.error(`切换视频超时，切换失败`),!0}let s=n(),c=s?.src;if(t){if(c&&r===s&&o!==c)return G.success(`合集-切换视频成功`),!0}else if(r!==s)return G.success(`切换视频成功`),!0;i()},500,5e3)},{capture:!0})}),s=H.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{o.run()}});return[()=>{s?.disconnect();let e=n(void 0,!0);U.off(e,`ended`)},r.destory]},disableVideoSatisfaction(){G.info(`禁用视频满意评价`),L.localStorage.setItem(`questionV1`,String(Date.now()+31536e6))}},_a=`/* 去除顶部的padding距离 */\r
#douyin-right-container {\r
  padding-top: 0;\r
}\r
/* 放大放大顶部的综合、视频、用户等header的宽度 */\r
#search-content-area > div > div:nth-child(1) > div:nth-child(1) {\r
  width: 100vw;\r
}\r
/* 放大顶部的综合、视频、用户等header */\r
#search-content-area > div > div:nth-child(1) > div:nth-child(1) > div {\r
  transform: scale(0.8);\r
}\r
/* 视频宽度 */\r
ul[data-e2e="scroll-list"] {\r
  padding: 0px 10px;\r
}\r
#sliderVideo {\r
  width: -webkit-fill-available;\r
}\r
/* 距离是顶部导航栏的高度 */\r
#search-content-area {\r
  margin-top: var(--header-height, 56px);\r
}\r
/* 从其它页面进入搜索页面，例如路径是/root/search，会出现返回按钮 */\r
#douyin-header header {\r
  flex-direction: row-reverse !important;\r
}\r
#douyin-header header > div:nth-child(2) {\r
  position: unset !important;\r
}\r
/* 调整视频列表的宽度 */\r
@media screen and (max-width: 550px) {\r
  #sliderVideo {\r
    width: 100%;\r
  }\r
  /* 调整顶部搜索框的宽度 */\r
  #component-header\r
    div[data-click="doubleClick"]\r
    > div[data-click="doubleClick"]\r
    > div:has(input[data-e2e="searchbar-input"]) {\r
    width: -webkit-fill-available;\r
    width: -moz-available;\r
    padding-right: 0;\r
  }\r
}\r
`,va={init(){V.execMenuOnce(`douyin-search-shieldReleatedSearches`,()=>this.shieldReleatedSearches()),V.execMenuOnce(`douyin-search-blockAIAsk`,()=>this.blockAIAsk()),V.execMenuOnce(`douyin-search-blockAskAI`,()=>this.blockAskAI()),V.execMenuOnce(`dy-search-blockUserLiveFlashingAvatar`,()=>this.blockUserLiveFlashingAvatar()),V.execMenuOnce(`dy-search-blockKeywordsOptions`,()=>this.blockKeywordsOptions()),V.execMenuOnce(`dy-search-blockSideBar`,()=>this.blockSideBar()),V.execMenuOnce(`dy-search-blockAIAssistant`,()=>this.blockAIAssistant()),V.execMenuOnce(`dy-search-blockColumn`,()=>this.blockColumn()),V.execMenuOnce(`dy-search-blockSingleColumn`,()=>this.blockSingleColumn()),V.execMenuOnce(`dy-search-blockFilter`,()=>this.blockFilter()),this.resizeSearchFilterBar()},resizeSearchFilterBar(){U.onReady(()=>{let e=J(`div:has(+#search-result-container)`),t=J(`#search-result-container`);if(!e||!t)return;let n=U.width(t);U.css(e,`width`,n+`px`)})},shieldReleatedSearches(){G.info(`【屏蔽】相关搜索`);let e=new H.LockFunction(()=>{Z.isSearch()&&Y(`[id^="waterfall_item"]:has(.search-result-card p)`).forEach(e=>{let t=e.querySelector(`p`);U.text(t).includes(`相关搜索`)&&U.remove(e)})}),t=H.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{e.run()}});return[q(`#search-content-area > div > div:nth-child(2)`),K(`
			/* 把搜索结果宽度自适应 */
			#search-result-container{
        width: auto !important;
			}`),()=>{t.disconnect()}]},blockAIAsk(){return G.info(`【屏蔽】AI问一问`),q(`#search-content-area > div > div:nth-child(2) > div > div:first-child`)},blockAskAI(){return G.info(`【屏蔽】问问AI`),q(`#search-toolbar-container>div:last-child:not(:first-child):not(:empty):has(svg)`)},blockAIAssistant(){return G.info(`【屏蔽】AI为你生成回答`),q(`#search-result-container .search-result-card:first-child:has([data-card-name*="search_ai"])`)},blockUserLiveFlashingAvatar(){return G.info(`【屏蔽】用户直播时闪烁的头像`),K(`
      .search-result-card a[href*="live.douyin.com"][data-e2e="web_search"] div{
        animation: none !important;
        --fallback-avatar-image: none !important;
        --label-image: none !important;
        --live-color: transparent !important;
      }
    `)},blockKeywordsOptions(){return G.info(`【屏蔽】关键词选项`),q(`#search-toolbar-container > div:nth-child(2):not(:empty)`)},blockSideBar(){return G.info(`【屏蔽】侧边栏`),q(`#douyin-sidebar`)},blockColumn(){return G.info(`【屏蔽】多列`),q(`#search-toolbar-container *:has(>svg rect[x="11"][y="11.5"][rx="1"])`)},blockSingleColumn(){return G.info(`【屏蔽】单列`),q(`#search-toolbar-container *:has(>svg path[d="M4.963 7.628h10.36a.923.923 0 0 1 .922.923v7.025a.923.923 0 0 1-.923.924H4.964a.923.923 0 0 1-.923-.924V8.551a.923.923 0 0 1 .922-.923zm.923 1.384a.462.462 0 0 0-.461.462v5.18a.461.461 0 0 0 .461.46H14.4a.461.461 0 0 0 .462-.46v-5.18a.461.461 0 0 0-.462-.462H5.886z"])`)},blockFilter(){return G.info(`【屏蔽】筛选`),q(`#search-toolbar-container *:has(>span svg path[d="M9.898 8.28a.75.75 0 0 1-1.06 0l-2.83-2.828L3.18 8.28a.75.75 0 0 1-1.06-1.06l3.358-3.36a.75.75 0 0 1 1.061 0l3.359 3.36a.75.75 0 0 1 0 1.06z"])`)}},ya={beforeURL:void 0,currentURL:globalThis.location.href},ba={init(){va.init(),V.execMenu(`dy-search-setSearchResultType`,e=>{H.isNull(e.value)||ya.beforeURL!=null&&Z.isSearch(ya.beforeURL)||this.setSearchResultType(e.value)}),V.execMenuOnce(`dy-search-allowContextMenu`,()=>this.allowContextMenu()),V.execMenuOnce(`mobileMode`,e=>this.mobileMode(e)),V.execMenuOnce(`dy-search-disableClickToEnterFullScreen`,()=>this.disableClickToEnterFullScreen()),V.execMenuOnce(`dy-search-setSearchResultFilterWithVideoStyle`,e=>this.setSearchResultFilterWithVideoStyle(e.value))},setSearchResultType(e){G.info(`设置搜索结果类型: ${e}`);let t={general:`#search-toolbar-container span[data-key="general"]`,video:`#search-toolbar-container span[data-key="video"]`,user:`#search-toolbar-container span[data-key="user"]`,live:`#search-toolbar-container span[data-key="live"]`};if(!(e in t))throw Error(`搜索结果类型错误：${e}`);U.waitNode(t[e],1e4).then(e=>{e&&e.click()})},mobileMode(e){G.info(`搜索-手机模式`);let t=[];return t.push(K(_a)),t.push(K(`
			@media screen and (max-width: 550px){
				div#search-body-container {
					display: flex;
				}
				div#search-body-container #component-Navigation {
					flex: 0;
				}
				div#search-body-container #douyin-right-container {
					flex: 1 auto;
				}
				div#search-body-container #douyin-right-container #search-content-area > div {
					width: 100% !important;
				}
				div#search-body-container #douyin-right-container #search-content-area > div > div > div {
					width: 100% !important;
					margin-left: 0px;
					margin-right: 0px;
					padding-left: 0px;
					padding-right: 0px;
				}
				/* 上面的搜索结果筛选 */
				#search-content-area > div >div> div:first-child > div:first-child > div:last-child{
					overflow: auto;
					text-wrap: nowrap;
					height: auto;
				}
				/* 视频右侧的TA的作品↓ */
				#searchSideCard{
					width: unset !important;
				}
				#searchSideCard > div{
					padding: 0px !important;
				}
				#searchSideCard > div:has(>div+svg),
				#searchSideCard ul[data-e2e="scroll-list"]{
					padding: 0px 10px !important;
				}
				#searchSideCard ul[data-e2e="scroll-list"] .video-playing-item > div{
					width: auto;
				}
				/* 视频右侧的TA的作品↑ */
				/* 悬浮的筛选 */
				#douyin-right-container #douyin-header{
        			background-color: var(--color-bg-b0);
				}
				xg-right-grid{
					margin: auto !important;
				}
			}
		`)),U.waitNode(`#relatedVideoCard`).then(t=>{G.info(`评论区展开的className：`+t.className),e.addStoreValue(K(`
					html[data-vertical-screen]
						#sliderVideo[data-e2e="feed-active-video"]
						#videoSideBar:has(#relatedVideoCard[class="${t.className}"]) {
							width: 100vw !important;
					}`))}),t},disableClickToEnterFullScreen(){G.info(`搜索-禁止点击视频区域进入全屏`);let e=U.on(document,`click`,`.focusPanel`,(e,t)=>{if(!Z.isSearch())return;U.preventEvent(e);let n=(t.parentElement?.parentElement).querySelector(`video`);n?n.paused?(n.play(),G.info(`.focusPanel：播放视频`)):(n.pause(),G.info(`.focusPanel：暂停视频`)):z.error(`.focusPanel未找到 video标签`,{isHTML:!1})},{capture:!0,overrideTarget:!1}),t=U.on(document,`click`,`#sliderVideo video`,(e,t)=>{if(!Z.isSearch())return;U.preventEvent(e);let n=t;n.paused?(n.play(),G.info(`#sliderVideo video：播放视频`)):(n.pause(),G.info(`#sliderVideo video：暂停视频`))},{capture:!0,overrideTarget:!1});return[e.off,t.off]},setSearchResultFilterWithVideoStyle(e=`one`){if(G.info(`设置搜索结果-按视频过滤的显示样式：${e}`),e===`one`)return Or.update({name:`SEARCH_RESULT_LIST_TYPE`,value:`%22single%22`}),K(`
			@media screen and (max-width: 800px){
				.search-horizontal-new-layout ul[data-e2e="scroll-list"] li{
					width: calc(100% - 21px);
				}
			}
			`);if(e===`double`)return Or.update({name:`SEARCH_RESULT_LIST_TYPE`,value:`%22multi%22`}),K(`	
			@media screen and (max-width: 800px){
				.search-horizontal-new-layout ul[data-e2e="scroll-list"] li{
					width: calc(50% - 21px);
				}
			}
			`)},allowContextMenu(){G.info(`阻止屏蔽搜索框的右键菜单`);let e=U.on(document,`contextmenu`,[`input[data-e2e="searchbar-input"]`],e=>{U.preventEvent(e,!0)},{capture:!0,overrideTarget:!1});return[()=>{e.off()}]}},xa=`/* 资料右边的 下载桌面客户端，桌面快捷访问 */\r
div[data-e2e="user-detail"] div:has(> div > a[href*="douyin-pc"]) {\r
  display: none !important;\r
}\r
`,Sa={init(){V.execMenuOnce(`dy-user-block-name`,()=>this.blockName()),V.execMenuOnce(`dy-user-block-follow`,()=>this.blockFollow()),V.execMenuOnce(`dy-user-block-fans`,()=>this.blockFans()),V.execMenuOnce(`dy-user-block-likes`,()=>this.blockLikes()),V.execMenuOnce(`dy-user-block-id`,()=>this.blockId()),V.execMenuOnce(`dy-user-block-ip`,()=>this.blockIp()),V.execMenuOnce(`dy-user-block-age`,()=>this.blockAge()),V.execMenuOnce(`dy-user-block-intro`,()=>this.blockIntro()),V.execMenuOnce(`dy-user-block-shareHomeButton`,()=>this.shareHomeButton()),V.execMenuOnce(`dy-user-block-moreButton`,()=>this.moreButton()),V.execMenuOnce(`dy-user-block-followButton`,()=>this.followButton()),V.execMenuOnce(`dy-user-block-messageButton`,()=>this.messageButton())},blockName(){return G.info(`【屏蔽】用户名`),q(`[data-e2e="user-detail"] [data-e2e="user-info"] > div:first-child`)},blockFollow(){return G.info(`【屏蔽】关注`),q(`[data-e2e="user-detail"] [data-e2e="user-info"] [data-e2e="user-info-follow"]`)},blockFans(){return G.info(`【屏蔽】粉丝`),q(`[data-e2e="user-detail"] [data-e2e="user-info"] [data-e2e="user-info-fans"]`)},blockLikes(){return G.info(`【屏蔽】获赞`),q(`[data-e2e="user-detail"] [data-e2e="user-info"] [data-e2e="user-info-like"]`)},blockId(){return G.info(`【屏蔽】抖音号`),q(`[data-e2e="user-detail"] [data-e2e="user-info"]  > p > span:nth-child(1)`)},blockIp(){return G.info(`【屏蔽】IP属地`),q(`[data-e2e="user-detail"] [data-e2e="user-info"] > p > span:nth-child(2)`)},blockAge(){return G.info(`【屏蔽】年龄`),q(`[data-e2e="user-detail"] [data-e2e="user-info"] > p > span:nth-child(3)`)},blockIntro(){return G.info(`【屏蔽】介绍`),q(`[data-e2e="user-detail"] [data-e2e="user-info"] `)},shareHomeButton(){return G.info(`【屏蔽】分享主页`),q(`[data-e2e="user-detail"] #frame-user-info-share-button`)},moreButton(){return G.info(`【屏蔽】更多`),q(`[data-e2e="user-detail"] #tooltip`)},followButton(){return G.info(`【屏蔽】关注`),q(`[data-e2e="user-detail"] [data-e2e="user-info-follow-btn"]`)},messageButton(){return G.info(`【屏蔽】私信`),q(`[data-e2e="user-detail"] *:has(+[data-e2e="user-info-follow-btn"])`,`[data-e2e="user-detail"] [data-e2e="user-info-follow-btn"]+*`)}},Ca={init(){V.execMoreMenuOnce([[`dy-user-works-block-works`,()=>this.blockWorks()],[`dy-user-works-block-recommend`,()=>this.blockRecommend()],[`dy-user-works-block-likes`,()=>this.blockLikes()]],()=>q(`#user-tabbar`))},blockWorks(){return G.info(`【屏蔽】作品`),q(`#user-tabbar #semiTabpost`)},blockRecommend(){return G.info(`【屏蔽】推荐`),q(`#user-tabbar #semiTabrecommend`)},blockLikes(){return G.info(`【屏蔽】喜欢`),q(`#user-tabbar #semiTablike`)}},wa={init(){Sa.init(),Ca.init()}},Ta={init(){K(xa),wa.init(),U.onReady(()=>{V.execMenu(`dy-user-addShowUserUID`,()=>this.addShowUserUID())})},addShowUserUID(){let e=`gm-user-uid`;ei.waitReactPropsToSet(`[data-e2e="user-detail"] [data-e2e="user-info"]`,`reactFiber`,{msg:`显示UID`,check(e){return typeof e?.return?.memoizedProps?.userInfo?.uid==`string`},set(t,n){let r=t?.return?.memoizedProps?.userInfo?.uid;U.remove(n.querySelectorAll(`.${e}`));let i=U.createElement(`p`,{className:e,innerHTML:`
							<span>UID：${r}</span>
						`},{style:`color: var(--color-text-t3);margin-right: 20px;font-size: 12px;line-height: 20px;cursor: pointer;`});U.on(i,`click`,e=>{U.preventEvent(e),H.copy(r),z.success(`复制成功`)}),n.appendChild(i)}})}},Ea=`/* 单个视频页面右侧的 下载客户端，桌面快捷访问 */\r
div[data-e2e="video-detail"] div > :has(> div:last-child > a[href*="douyin-pc-web"]) {\r
  display: none !important;\r
}\r
`,Da={init(){K(Ea)}},Oa={getVideoUrl(e){return`https://www.douyin.com/video/`+e},getCollectionUrl(e){return`https://www.douyin.com/collection/`+e},getNoteUrl(e){return`https://www.douyin.com/note/`+e},getHashTagUrl(e){return`https://www.douyin.com/hashtag/`+e},getUserHomeUrl(e){return`https://www.douyin.com/user/`+e},getMusicUrl(e){return`https://www.douyin.com/music/`+e},getSearchUrl(e){return`https://www.douyin.com/search/`+encodeURIComponent(e)}},ka={shortCut:new gi(`general-short-cut`),$data:{},init(){this.shortCut.initGlobalKeyboardListener(this.shorCutMapOption(),{capture:!0,beforeCallBack(){return{onlyStopPropagation:!0}}})},shorCutMapOption(){return{"shortcut-shieldLeftNavigator":{callback(){G.info(`触发快捷键 ==> 【屏蔽】左侧导航栏`);let e=`shieldLeftNavigator`,t=V.getValue(e);V.setValue(e,!t)}}}}},Aa={init(){},async autoKeepTheSparkAlive(){if(!cr.isTopWindow())return;let e=`dy-chat-autoKeepTheSparkAlive-latestRunTimeStamp`,t=V.getValue(e);if(t&&H.formatTime(t,`yyyy-MM-dd`)===H.formatTime(Date.now(),`yyyy-MM-dd`)){G.info(`自动续火花：今天已经运行过了。执行时间：`+H.formatTime(t));return}if(!Z.isChat()){window.open(`https://www.douyin.com/chat`,`_blank`);return}let n=V.getValue(`dy-chat-autoKeepTheSparkAlive-userList`,``).split(`
`).map(e=>{if(e=e.trim(),e!==``&&!isNaN(parseInt(e)))return e}).filter(e=>e!=null);if(n.length!==0){await U.onReady();let t=e=>{let t=`
            <div style="text-align: center;">「续火花」</div>
            ${e.trim().startsWith(`<`)||e.trim().endsWith(`>`)?e:`
                <p style="text-align: left;">${e}</p>
            `}
        `;return G.info(t),t},r=z.loading(t(`正在获取消息列表中，请稍后...`),{onClose(){V.setValue(e,Date.now())}});await U.waitNode(`.conversationConversationListwrapper [data-e2e="conversation-item"]`,6e4),G.info(`自动续火花`);let i=[];if(Y(`[data-e2e="conversation-item"]`).forEach(e=>{let t=H.getReactInstance(e).reactFiber;if(!t)return;let n=t?.return?.memoizedProps?.conversation;if(!n)return;let r=n?.toParticipantUserId,a=n?.toParticipantSecUserId,o=n?.myLastVisibleMessage?.createdAt||n?.myLastMessage?.createdAt;i.push({$el:e,itemInfo:n,userInfo:{uid:r,userId:a,latestChatTime:o,latestChatTimeStr:H.formatTime(o)}})}),!i.length){r.close(),z.error(`获取消息列表失败`);return}let a=V.getValue(`dy-chat-autoKeepTheSparkAlive-sendText`,`续火花`),o=0,s=0,c=0;for(let e of n){o++;let l=i.find(t=>t.userInfo.uid.toString()===e.toString());if(!l){c++,r.setHTML(t(`
          <div style="text-align: left;">
            <p>进度：${o}/${n.length}</p>
            <p>成功：${s} 失败：${c}</p>
            <p>用户id：${e}</p>
            <p>日志：未找到该用户，3s后执行下一个</p>
          </div>
        `)),G.error(`消息列表中未找到用户id为${e}的用户`),await H.sleep(3e3);continue}if(H.formatTime(l.userInfo.latestChatTime,`yyyy-MM-dd`)===H.formatTime(new Date,`yyyy-MM-dd`)){s++,r.setHTML(t(`
          <div style="text-align: left;">
            <p>进度：${o}/${n.length}</p>
            <p>成功：${s} 失败：${c}</p>
            <p>用户id：${e}</p>
            <p>日志：该用户今日已发送消息，3s后执行下一个</p>
          </div>
        `)),await H.sleep(3e3);continue}if(r.setHTML(t(`
          <div style="text-align: left;">
            <p>进度：${o}/${n.length}</p>
            <p>成功：${s} 失败：${c}</p>
            <p>用户id：${l.userInfo.uid}</p>
            <p>最后聊天时间：${l.userInfo.latestChatTimeStr}</p>
            <p>日志：正在等待进入聊天窗口，请稍后...</p>
          </div>
        `)),Mr.simulateClick(l.$el),!J(`.componentsRightPanelwrapper`)){z.error(`获取聊天窗口失败`),r.close();return}await H.sleep(3e3),r.setHTML(t(`
          <div style="text-align: left;">
            <p>进度：${o}/${n.length}</p>
            <p>成功：${s} 失败：${c}</p>
            <p>用户id：${l.userInfo.uid}</p>
            <p>最后聊天时间：${l.userInfo.latestChatTimeStr}</p>
            <p>日志：发送消息中，请稍后...</p>
          </div>
        `));let u=J(`.editor-kit-container`);if(!u){z.error(`获取editor元素失败`),r.close();return}let d=H.getReactInstance(u).reactFiber?.return?.memoizedProps?.editor;if(!d){z.error(`获取editor实例失败`),r.close();return}if(typeof d?.setHTML!=`function`){z.error(`获取editor实例的setHTML函数失败`),r.close();return}d?.setHTML(a);let f=J(`.messageMsgInputpublishBtn`);if(!f){z.error(`获取发送按钮失败`),r.close();return}await H.sleep(1e3),Mr.simulateClick(f),s++,r.setHTML(t(`
          <div style="text-align: left;">
            <p>进度：${o}/${n.length}</p>
            <p>成功：${s} 失败：${c}</p>
            <p>用户id：${l.userInfo.uid}</p>
            <p>最后聊天时间：${l.userInfo.latestChatTimeStr}</p>
            <p>日志：已发送消息，3s后执行下一个</p>
          </div>
        `)),await H.sleep(3e3)}z.info(`续火花执行完毕`),r.setHTML(t(`
          <div style="text-align: left;">
            <p>进度：${o}/${n.length}</p>
            <p>成功：${s} 失败：${c}</p>
            <p>日志：已全部执行完毕，5s后自动关闭该消息提示</p>
          </div>
        `)),await H.sleep(5e3),r.close()}}},ja={init(){Z.isIndex()||Z.isLive()?(V.onceExec(`dy-global-block-css`,()=>this.removeAds()),Jr(),ki.init(),Ar.init(),Yr.init(),Wr.init(),ka.init(),V.execMenuOnce(`watchLoginDialogToClose`,()=>Pr.watchLoginDialogToClose()),V.execMenuOnce(`disguiseLogin`,()=>Pr.disguiseLogin()),V.execMenuOnce(`dy-initialScale`,()=>this.initialScale()),V.execMenu(`dy-apple-removeMetaAppleItunesApp`,()=>{this.removeMetaAppleItunesApp()}),V.execMenuOnce(`dy-common-listenRouterChange`,()=>this.listenRouterChange(),void 0,!1),V.execMenuOnce(`dy-search-click-to-new-tab`,()=>this.navSearchClickToNewTab()),V.execMenuOnce(`dy-chat-autoKeepTheSparkAlive`,()=>Aa.autoKeepTheSparkAlive()),Z.isLive()?(G.info(`Router: 直播`),pa.init()):Z.isIndex()?(Qi.init(),Z.isRecommend()?(G.info(`Router: 推荐`),ga.init()):Z.isSearch()?(G.info(`Router: 搜索`),ba.init()):Z.isUser()?(G.info(`Router: 用户页面`),Ta.init()):Z.isVideo()?(G.info(`Router: 单个视频页面`),Da.init()):Z.isChannel()?(G.info(`Router: Channel页面`),Gr.init()):Z.isNote()?(G.info(`Router:  笔记页面`),ha.init()):Z.isFollow()?(G.info(`Router: 关注页面`),Zr.init()):Z.isHot()?(G.info(`Router: 热点榜`),$r.init()):Z.isChat()?(G.info(`Router: 聊天页面`),Aa.init()):G.warn(`子router: `+window.location.href)):window.location.hostname.startsWith(`lf-zt.douyin.com`)||G.error(`未适配router: `+window.location.href),Rr.init()):G.error(`当前仅主站和直播页面支持${cr.isTopWindow()?``:`（iframe）`}`)},removeAds(){return Or.update({name:`JXEntranceNegative`,value:`1`},()=>{G.info(`添加Cookie清除左侧导航栏的下面的 抖音精选`)}),U.waitNode(()=>U.selector(`#douyin-navigation [data-e2e="douyin-navigation"] > div > div > div:regexp("下载抖音精选|条条都是宝藏视频")`),1e4).then(e=>{e&&U.remove(e)}),[K(Kr)]},async initialScale(){G.info(`设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>`),await U.onReady();let e=U.createElement(`meta`,{},{name:`viewport`,content:`width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover`});return U.remove(`meta[name='viewport']`),await U.waitNode(`head`),document.head.appendChild(e),e},async removeMetaAppleItunesApp(){let e=await U.waitNodeList(`meta[name="apple-itunes-app"]`,1e4);e&&U.remove(e)},listenRouterChange(){G.info(`监听Router重载`);let e=window.location.href;return[U.on(window,`wb_url_change`,()=>{let t=e,n=window.location.href;e=n,ya.beforeURL=t,ya.currentURL=n,G.success(`Router Change Before: `+t),G.success(`Router Change Now: `+n),V.emitUrlChangeWithExecMenuOnceEvent({url:n,beforeUrl:t}),this.init()}).off]},navSearchClickToNewTab(){G.info(`新标签页打开搜索结果`);let e=U.on(document,`click`,[`[data-click="doubleClick"]:has(input[data-e2e="searchbar-input"]) button[data-e2e="searchbar-button"]`,`a[href*="douyin.com/search/"]`],(e,t)=>{U.preventEvent(e);let n;if(t instanceof HTMLAnchorElement)n=t.href;else{let e=t.closest(`[data-click="doubleClick"]`);if(!e){z.error(`未找到搜索框元素`);return}let r=e.querySelector(`input`),i=r.value;if(i==null||i===``){let e=U.prev(r);if(e)i=U.text(e);else{let e=r.placeholder.trim();if(e!=null&&e!==``&&e!==`搜索你感兴趣的内容`)i=e;else{G.error(`搜索内容为空，不进行搜索`);return}}}G.info(`当前的搜索内容：`+i),n=Oa.getSearchUrl(i)}return G.info(`新标签页打开搜索：${n}`),window.open(n,`_blank`),!1},{capture:!0,overrideTarget:!1}),t=U.on(document,`click`,`[data-e2e="searchbar-button"] + div [data-text][data-index]`,(e,t)=>{let n=e.composedPath()[0],r=n.closest(`.icon[data-text]`);if(r&&t.contains(r))return;let i=n.closest(`svg`);if(i&&t.contains(i))return;U.preventEvent(e);let a=t.getAttribute(`data-text`);if(!a){G.error(`未找到搜索建议内容`,t),z.error(`未找到搜索建议内容`);return}console.log(n);let o=Oa.getSearchUrl(a);return window.open(o,`_blank`),!1},{capture:!0,isComposedPath:!0,overrideTarget:!1});return[e.off,t.off]}},Ma={isMDouYin(){return window.location.hostname===`m.douyin.com`||window.location.hostname===`www.iesdouyin.com`},isShareUser(){return this.isMDouYin()&&window.location.pathname.startsWith(`/share/user/`)},isShareVideo(){return this.isMDouYin()&&(window.location.pathname.startsWith(`/share/video/`)||window.location.pathname.startsWith(`/shipin/`))},isShareNote(){return this.isMDouYin()&&window.location.pathname.startsWith(`/share/note/`)},isShareMusic(){return this.isMDouYin()&&window.location.pathname.startsWith(`/share/music/`)},isShareChallenge(){return this.isMDouYin()&&window.location.pathname.startsWith(`/share/challenge/`)}},Na=`/* 顶部 打开看看 登录 */\r
.adapt-login-header,\r
/* 上面屏蔽后的空白区域 */\r
.user-card .nav-bar-placeholder,\r
/* 视频区域底部的【打开抖音App看更多内容】 */\r
.select-list .img-button {\r
  display: none !important;\r
}\r
`,Pa={init(){K(Na),V.execMenuOnce(`m-dy-share-user-coverPlayletList`,()=>this.coverPlayletList()),V.execMenuOnce(`m-dy-share-user-coverPostListContainer`,()=>this.coverPostListContainer())},coverPlayletList(){return[U.on(document,`click`,`.user-playlet-list .playlet-item`,(e,t)=>{U.preventEvent(e);let n=H.getReactInstance(t)?.reactFiber;if(n?.key==null){z.error(`获取视频合集key失败`);return}let r=n?.index;if(r==null){z.error(`获取视频合集index失败`);return}let i=n?.return?.return?.pendingProps?.playletList;if(i==null){z.error(`获取视频合集playletList失败`);return}let a=i[r],o=Oa.getCollectionUrl(a.mix_id);window.open(o,`_blank`)},{capture:!0}).off]},coverPostListContainer(){return[U.on(document,`click`,`.post-list-container .user-post-cover`,(e,t)=>{U.preventEvent(e);let n=H.getReactInstance(t)?.reactFiber;if(n?.return?.memoizedProps?.productionUrl){let e=n?.return?.memoizedProps?.productionUrl;window.open(e,`_blank`)}else z.error(`获取视频链接失败`)},{capture:!0}).off]}},Fa=`/* 顶部 打开看看 登录 */\r
.adapt-login-header,\r
/* 视频描述信息区域中的 打开抖音看精彩视频 */\r
.footer .img-button,\r
/* 登录页面 */\r
.login-page ,\r
/* 底部左下角 打开抖音看精彩视频 */\r
.footer .bottom-btn-con-new,\r
/* 合集 打开抖音看精彩视频 */\r
.container .end-page-info-button {\r
  display: none !important;\r
}\r
`,Ia=`.video-container {\r
  height: 100% !important;\r
  margin-top: 0 !important;\r
}\r
.footer {\r
  bottom: 50px !important;\r
}\r
.mix-info {\r
  bottom: 0px !important;\r
}\r
`,La={init(){K(Fa),K(Ia),V.execMenuOnce(`m-dy-share-video-coverGlobalClick`,()=>this.coverGlobalClick())},coverGlobalClick(){return[p.on(document,`click`,[`.right-con`,`.footer`,`.mix-info`],e=>p.preventEvent(e),{capture:!0}).off]}},Ra=`/* 顶部 打开看看 登录 */\r
.container .adapt-login-header,\r
/* 底部中间的 App内打开 */\r
.container .float-button-con {\r
  display: none !important;\r
}\r
\r
.gallery-container {\r
  margin-top: 10px !important;\r
}\r
`,za={init(){K(Ra),V.execMenuOnce(`m-dy-share-note-blockRecommend`,()=>this.blockRecommend()),V.execMenuOnce(`m-dy-share-note-blockComment`,()=>this.blockComment()),V.execMenuOnce(`m-dy-share-note-blockFooterToobar`,()=>this.blockFooterToobar()),V.execMenuOnce(`m-dy-share-note-coverUser`,()=>this.coverUser()),V.execMenuOnce(`m-dy-share-note-coverHashTag`,()=>this.coverHashTag()),V.execMenuOnce(`m-dy-share-note-coverMusic`,()=>this.coverMusic()),V.execMenuOnce(`m-dy-share-note-coverRecommend`,()=>this.coverRecommend()),V.execMenuOnce(`m-dy-share-note-coverExcitingGraphicsAndText`,()=>this.coverExcitingGraphicsAndText())},blockRecommend(){return G.info(`【屏蔽】相关推荐`),q(`.recommend-con`)},blockComment(){return G.info(`【屏蔽】评论`),q(`.comment-con`)},blockFooterToobar(){return G.info(`【屏蔽】底部工具栏`),q(`.footer-con`)},coverRecommend(){return G.info(`覆盖相关推荐的点击事件`),[U.on(document,`click`,`#masonry .card`,(e,t)=>{U.preventEvent(e);let n=H.getReactInstance(t).reactFiber;if(!n){G.error(`获取reactFiber失败`),z.error(`获取reactFiber失败`);return}let r=n?.return?.memoizedProps.awemeId,i=Oa.getNoteUrl(r);window.open(i,`_blank`)},{capture:!0,overrideTarget:!1}).off]},coverUser(){return G.info(`覆盖用户点击事件`),[U.on(document,`click`,`.message-con__top`,(e,t)=>{U.preventEvent(e);let n=H.getReactInstance(t).reactFiber;if(!n){G.error(`获取reactFiber失败`),z.error(`获取reactFiber失败`);return}let r=n?.return?.return?.memoizedProps?.video?.authorInfo?.sec_uid,i=Oa.getUserHomeUrl(r);window.open(i,`_blank`)},{capture:!0}).off]},coverHashTag(){return G.info(`覆盖话题点击事件`),[U.on(document,`click`,`.message-con__content__body .message-con__content__body-text`,(e,t)=>{U.preventEvent(e);let n=H.getReactInstance(t).reactFiber;if(!n){z.error(`获取reactFiber失败`);return}let r=n.index,i=(n?.return?.return?.return?.return?.memoizedProps?.video?.splitStrArr)[r].hashtagId,a=Oa.getHashTagUrl(i);window.open(a,`_blank`)},{capture:!0}).off]},coverMusic(){return G.info(`覆盖音乐点击事件`),[U.on(document,`click`,`.message-con__footer`,(e,t)=>{U.preventEvent(e);let n=H.getReactInstance(t).reactFiber;if(!n){G.error(`获取reactFiber失败`),z.error(`获取reactFiber失败`);return}let r=n?.return?.return?.memoizedProps?.video?.musicId,i=Oa.getMusicUrl(r);window.open(i,`_blank`)},{capture:!0}).off]},coverExcitingGraphicsAndText(){G.info(`覆盖精彩图文点击事件`);let e=U.on(document,`click`,`.container .related-list-con .related-note-item`,(e,t)=>{U.preventEvent(e);let n=H.getReactInstance(t).reactFiber;if(!n){G.error(`获取reactFiber失败`),z.error(`获取reactFiber失败`);return}let r=(n?.return?.memoizedProps?.itemData).awemeId,i=Oa.getNoteUrl(r);window.open(i,`_blank`)},{capture:!0}),t=U.on(document,`click`,`.related-title-con`,e=>U.preventEvent(e),{capture:!0});return[e.off,t.off]}},Ba=`/* 顶部 打开看看 登录 */\r
.page-reflow-challenge .header,\r
/* 底部的 打开抖音App看更多内容 */\r
.page-reflow-challenge .bottom-btn__con {\r
  display: none !important;\r
}\r
\r
.page-reflow-challenge {\r
  padding-top: 0 !important;\r
}\r
`,Va={init(){K(Ba),V.onceExec(`m-dy-share-challenge-coverTopJump`,()=>this.coverTopJump()),V.execMenuOnce(`m-dy-share-challenge-coverVideoCard`,()=>this.coverVideoCard())},coverTopJump(){G.info(`阻止上面区域点击跳转至下载页面`),U.on(document,`click`,`.challenge-body`,e=>{U.preventEvent(e)},{capture:!0,overrideTarget:!1})},coverVideoCard(){return G.info(`覆盖视频卡片点击事件`),[U.on(document,`click`,`#pagelet-worklist li.item`,(e,t)=>{U.preventEvent(e);let n=H.getReactInstance(t).reactFiber;if(!n){G.error(`获取reactFiber失败`),z.error(`获取reactFiber失败`);return}let r=(n?.return?.return?.return?.memoizedProps.listData)[n.index],i=Oa.getVideoUrl(r.aweme_id);window.open(i,`_blank`)},{capture:!0,overrideTarget:!1}).off]}},Ha=`/* 顶部 打开App，发现更多内容 */\r
.page-reflow-music .header,\r
/* ↑屏蔽后的 顶部空白区域 */\r
.page-reflow-music .banner-placeholder ,\r
/* 底部 打开抖音App看更多内容 */\r
.page-reflow-music .bottom-btn__con {\r
  display: none !important;\r
}\r
`,Ua={init(){K(Ha),V.execMenuOnce(`m-dy-share-music-coverVideoCard`,()=>this.coverVideoCard())},coverVideoCard(){return G.info(`覆盖视频卡片点击事件`),[U.on(document,`click`,`#pagelet-worklist li.item`,(e,t)=>{U.preventEvent(e);let n=H.getReactInstance(t).reactFiber;if(!n){G.error(`获取reactFiber失败`),z.error(`获取reactFiber失败`);return}let r=(n?.return?.return?.return?.memoizedProps.listData)[n.index],i=Oa.getVideoUrl(r.aweme_id);window.open(i,`_blank`)},{capture:!0,overrideTarget:!1}).off]}},Wa={init(){Ma.isShareUser()?(G.info(`M-Router: 分享用户`),Pa.init()):Ma.isShareVideo()?(G.info(`M-Router: 分享视频`),La.init()):Ma.isShareNote()?(G.info(`M-Router: 分享笔记`),za.init()):Ma.isShareChallenge()?(G.info(`M-Router: 分享话题`),Va.init()):Ma.isShareMusic()?(G.info(`M-Router: 分享音乐`),Ua.init()):G.error(`未知M-router: `+window.location.hostname)}},Ga=e=>{let t=(t,n)=>{if(e&&typeof e.translateCallback==`function`)return e.translateCallback(t,n);if(typeof n==`object`&&n)for(let e in n)t=t.replaceAll(`{{${e}}}`,n[e]);return t},n=(n=`${Sr}_data-${H.formatTime(Date.now(),`yyyy_MM_dd_HH_mm_ss`)}.json`,r)=>{let i=(e,t)=>{typeof t!=`string`&&(t=cr.toStr(t));let n=new Blob([t]),r=globalThis.URL.createObjectURL(n);U.createElement(`a`,{href:r,download:e}).click(),H.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(r)},500)},a=W.alert({title:{text:t(`请选择导出方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${t(`导出至文件`)}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${t(`导出至剪贴板`)}</div>
            `,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:gr.info.width,height:gr.info.height,style:`
          .pops{
            max-height: 90dvh;
          }
          .btn-control{
            display: inline-block;
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`}),o=a.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-file']`),s=a.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-clipboard']`);U.on(o,`click`,async t=>{U.preventEvent(t);try{typeof e?.exportFileName==`function`?n=await e.exportFileName():typeof e?.exportFileName==`string`&&(n=e.exportFileName),i(n,r),a.close()}catch(e){z.error(e.toString(),{consoleLogContent:!0})}}),U.on(s,`click`,async()=>{await H.copy(r)?(z.success(t(`复制成功`)),a.close()):z.error(t(`复制失败`))})},r=W.confirm({title:{text:t(e?.titleText??`配置`),position:`center`},content:{text:`<textarea name="config-value" id="config" readonly></textarea>`,html:!0},btn:{ok:{enable:e?.isEnableImport??!1,type:`primary`,text:t(`导入`),callback(){e?.importCallback?.()}},cancel:{enable:e?.isEnableExport??!0,text:t(`导出`),callback(){n(void 0,e?.getConfigData())}}},width:hr.width<450?`90vw`:`450px`,height:`auto`,style:`
    .pops{
        max-height: 90dvh;
    }
    .pops-content textarea {
        --textarea-bd-color: #dcdfe6;
        display: inline-block;
        resize: vertical;
        padding: 5px 15px;
        margin: 0;
        line-height: normal;
        box-sizing: border-box;
        color: #606266;
        border: 0;
        border-radius: 0;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: none;
        width: 100%;
        height: 100%;
        appearance: none;
        resize: none;
    }
    .pops-content textarea{
        height: 500px;
    }
    .pops-content textarea:focus {
        --textarea-bd-color: #3677f0;
    }
    .pops-content textarea:hover {
        --textarea-bd-color: #c0c4cc;
    }
    `}).$shadowRoot.querySelector(`textarea`),i=e?.getConfigShowData?e.getConfigShowData():e?.getConfigData();return r.value=cr.toStr(i),{$textarea:r}},$={text:e=>`
		<p>注：开启是启用该功能、关闭是不启用|不执行该功能</p>
    <a href="javascript:;" class="keyboard-oneClickOpen">一键全部开启</a>
    <br>
    <a href="javascript:;" class="keyboard-oneClickClose">一键全部关闭</a>
    ${H.isNull(e)?``:`
      <br>
      <p>${e}</p>
    `}
    `,afterEnterDeepMenuCallBack:(e,t)=>{let n=t.$sectionBodyContainer.querySelector(`.keyboard-oneClickOpen`),r=t.$sectionBodyContainer.querySelector(`.keyboard-oneClickClose`),i=e=>{t.$sectionBodyContainer?.querySelectorAll(`.pops-panel-switch`).forEach(t=>{let n=t.querySelector(`.pops-panel-switch__input`),r=t.querySelector(`.pops-panel-switch__core`);e?n.checked||r.click():n.checked&&r.click()})};U.on(n,`click`,e=>{U.preventEvent(e),i(!0)}),U.on(r,`click`,e=>{U.preventEvent(e),i(!1)})}};function Ka(){let e=/Firefox/.test(window.navigator.userAgent),t=U.createElement(`canvas`),n=t.getContext(`webgl`)||t.getContext(`experimental-webgl`),r=e?null:n.getExtension(`WEBGL_debug_renderer_info`);return n.getParameter(r?.UNMASKED_RENDERER_WEBGL??n?.RENDERER)+`&nbsp;&nbsp;hardwareConcurrency=`+navigator.hardwareConcurrency}var qa={id:`panel-general-config`,title:`通用`,views:[{text:``,type:`container`,views:[{text:`Toast配置`,type:`deepMenu`,views:[{text:``,type:`container`,views:[yi(`Toast位置`,`qmsg-config-position`,`bottom`,[{value:`topleft`,text:`左上角`},{value:`top`,text:`顶部`},{value:`topright`,text:`右上角`},{value:`left`,text:`左边`},{value:`center`,text:`中间`},{value:`right`,text:`右边`},{value:`bottomleft`,text:`左下角`},{value:`bottom`,text:`底部`},{value:`bottomright`,text:`右下角`}],e=>{G.info(`设置当前Qmsg弹出位置`+e.text)},`Toast显示在页面九宫格的位置`),yi(`最多显示的数量`,`qmsg-config-maxnums`,3,[{value:1,text:`1`},{value:2,text:`2`},{value:3,text:`3`},{value:4,text:`4`},{value:5,text:`5`}],void 0,`限制Toast显示的数量`),Q(`逆序弹出`,`qmsg-config-showreverse`,!1,void 0,`修改Toast弹出的顺序`)]}]}]},{type:`container`,text:``,views:[vi(e=>{let t=U.createElement(`div`,{className:`pops-panel-item-left-text`,innerHTML:`
							<p class="pops-panel-item-left-main-text">WebGL</p>
							<p class="pops-panel-item-left-desc-text"></p>
							`}),n=t.querySelector(`.pops-panel-item-left-desc-text`),r=``;try{r=Ka()}catch(e){G.error(e),r=e.toString()}return U.html(n,r),U.append(e,t),e},void 0,{text:`WebGL`}),hi(`abTestConfig`,`测试配置`,`查看`,void 0,!1,!1,`primary`,()=>{let e=z.loading(`获取中...`),t=Object.keys(window.localStorage),n,r=t.find(e=>e.startsWith(`__tea_sdk_ab_version_`));typeof r==`string`&&(n=JSON.stringify(H.toJSON(window.localStorage.getItem(r)),null,2)),e.close(),typeof n==`string`?Ga({getConfigData(){return n},titleText:`abTestConfig`}):z.error(`未获取到abTestConfig数据`)}),{text:`功能`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`伪装登录`,`disguiseLogin`,!1,void 0,`该功能残缺，在部分区域内会失效或者导致功能异常`),Q(`initial-scale=1`,`dy-initialScale`,!1,void 0,`可配合手机模式放大页面`),Q(`移除<meta> apple-itunes-app`,`dy-apple-removeMetaAppleItunesApp`,!0,void 0,`Safari使用，移除顶部横幅【Open in the 抖音 app】`),Q(`监听Router改变`,`dy-common-listenRouterChange`,!0,void 0,`当地址栏改变时，功能重载，建议开启`),Q(`移除某些Cookie`,`dy-cookie-remove__ac__`,!1,void 0,`阻止触发验证弹窗（maybe）`),Q(`新标签页打开搜索结果`,`dy-search-click-to-new-tab`,!1,void 0,`点击搜索框的<code>搜索</code>按钮时，点击视频区域的<code>#话题</code>时，新标签页打开`)]},{text:`Url重定向`,type:`container`,views:[Q(`重定向/home`,`douyin-redirect-url-home-to-root`,!1,void 0,`/home => /`)]}]},{type:`deepMenu`,text:`自定义功能快捷键`,views:[{type:`container`,text:``,views:[_i(`【屏蔽】左侧导航栏`,void 0,`shortcut-shieldLeftNavigator`,void 0,`点击录入快捷键`,void 0,ka.shortCut)]}]},{type:`deepMenu`,text:`禁用快捷键`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:``,views:[Q(`启用`,`hookKeyboard`,!0,void 0,`开启后全局的<code>禁用快捷键</code>才会生效`)]},{type:`container`,text:$.text(),views:[Q(`赞|取消赞`,`dy-keyboard-hook-likeOrDislike`,!1,void 0,`Z/双击空格`),Q(`评论`,`dy-keyboard-hook-comment`,!1,void 0,`X`),Q(`开启/关闭弹幕`,`dy-keyboard-hook-danmaku-enable`,!1,void 0,`B`),Q(`收藏/取消收藏`,`dy-keyboard-hook-collect-enable`,!1,void 0,`C`),Q(`复制分享口令`,`dy-keyboard-hook-copyShareLink`,!1,void 0,`V`),Q(`清屏`,`dy-keyboard-hook-clearScreen`,!1,void 0,`J`),Q(`自动连播`,`dy-keyboard-hook-automaticBroadcast`,!1,void 0,`K`),Q(`视频信息`,`dy-keyboard-hook-videoInfo`,!1,void 0,`I`),Q(`不感兴趣`,`dy-keyboard-hook-notInterested`,!1,void 0,`R`),Q(`进入作者主页`,`dy-keyboard-hook-enterAuthorHomePage`,!1,void 0,`F`),Q(`关注/取消关注`,`dy-keyboard-hook-follow`,!1,void 0,`G`),Q(`抖音搜索`,`dy-keyboard-hook-search`,!1,void 0,`Shift+F`),Q(`一键关闭当前页`,`dy-keyboard-hook-closeTheCurrentPageWithOneClick`,!1,void 0,`Shift+Q`),Q(`上下翻页`,`dy-keyboard-hook-pageUpAndDown`,!1,void 0,`↑↓`),Q(`快进快退`,`dy-keyboard-hook-fastForwardAndFastBack`,!1,void 0,`← →`),Q(`暂停`,`dy-keyboard-hook-pause`,!1,void 0,`空格`),Q(`网页内全屏`,`dy-keyboard-hook-fullScreenInsideThePage`,!1,void 0,`Y`),Q(`全屏`,`dy-keyboard-hook-fullScreen`,!1,void 0,`H`),Q(`稍后再看`,`dy-keyboard-hook-watchItOutLater`,!1,void 0,`L`),Q(`音量调整`,`dy-keyboard-hook-volumeAdjustment`,!1,void 0,`Shift + / Shift -`),Q(`呼出快捷键列表`,`dy-keyboard-hook-listOfCallShortcutKeys`,!1,void 0,`?`),Q(`关闭快捷键列表`,`dy-keyboard-hook-closeTheShortcutKeyList`,!1,void 0,`ESC`),Q(`相关推荐`,`dy-keyboard-hook-relevantRecommendation`,!1,void 0,`N`),Q(`听抖音`,`dy-keyboard-hook-listenToDouyin`,!1,void 0,`T`),Q(`小窗播放`,`dy-keyboard-hook-smallWindowPlay`,!1,void 0,`U`),Q(`推荐视频`,`dy-keyboard-hook-recommendVideo`,!1,void 0,`P`)]}]}]},{text:``,type:`container`,views:[{text:`布局屏蔽-全局`,type:`deepMenu`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:$.text(),views:[Q(`【屏蔽】登录弹窗`,`watchLoginDialogToClose`,!1,void 0,`自动等待元素出现并关闭登录弹窗`),Q(`【屏蔽】左侧导航栏关注右边的小红点`,`shieldLeftNavigator-tab-follow-red-dot`),Q(`【屏蔽】是否续播手机在看的直播？`,`block-continue-watching-phone-watching-live`)]}]},{text:`布局屏蔽-左侧导航栏`,type:`deepMenu`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:$.text(),views:[Q(`【屏蔽】左侧导航栏`,`shieldLeftNavigator`)]},{type:`container`,text:``,views:[Q(`【屏蔽】精选`,`shieldLeftNavigator-tab-home`),Q(`【屏蔽】推荐`,`shieldLeftNavigator-tab-recommend`),Q(`【屏蔽】AI搜索/抖音`,`shieldLeftNavigator-tab-ai-search`)]},{type:`container`,text:``,views:[Q(`【屏蔽】关注`,`shieldLeftNavigator-tab-follow`),Q(`【屏蔽】朋友`,`shieldLeftNavigator-tab-friend`),Q(`【屏蔽】我的`,`shieldLeftNavigator-tab-user_self`)]},{type:`container`,text:``,views:[Q(`【屏蔽】activity`,`shieldLeftNavigator-tab-activity`,!1,void 0,`在<code>直播</code>上面出现的按钮`),Q(`【屏蔽】直播`,`shieldLeftNavigator-tab-live`),Q(`【屏蔽】放映厅`,`shieldLeftNavigator-tab-vs`),Q(`【屏蔽】短剧`,`shieldLeftNavigator-tab-series`),Q(`【屏蔽】小游戏`,`shieldLeftNavigator-tab-microgame`)]},{type:`container`,text:``,views:[Q(`【屏蔽】设置`,`shieldLeftNavigator-panel-menu-setting`),Q(`【屏蔽】关于`,`shieldLeftNavigator-panel-menu-about`),Q(`【屏蔽】问题/反馈`,`shieldLeftNavigator-panel-menu-q_a`),Q(`【屏蔽】用户体验调研`,`shieldLeftNavigator-panel-menu-survey`)]}]},{text:`布局屏蔽-顶部导航栏`,type:`deepMenu`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{text:$.text(),type:`container`,views:[Q(`【屏蔽】顶部右侧的菜单栏`,`shield-topNav-rightMenu`)]},{type:`container`,text:``,views:[Q(`【屏蔽】AI搜索`,`shield-topNav-ai-search`),Q(`【屏蔽】客户端提示`,`shieldClientTip`,!0),Q(`【屏蔽】充钻石`,`shieldFillingBricksAndStones`,!0),Q(`【屏蔽】客户端`,`shieldClient`,!0),Q(`【屏蔽】快捷访问`,`shieldQuickAccess`),Q(`【屏蔽】通知`,`shieldNotifitation`),Q(`【屏蔽】消息`,`shieldPrivateMessage`),Q(`【屏蔽】投稿`,`shieldSubmission`),Q(`【屏蔽】壁纸`,`shieldWallpaper`),Q(`【屏蔽】更多`,`shield-topNav-rightMenu-more`),Q(`【屏蔽】登录头像`,`shield-topNav-rightMenu-loginAvatar`)]}]},{text:`布局屏蔽-搜索`,type:`deepMenu`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{text:$.text(),type:`container`,views:[Q(`【屏蔽】搜索框`,`shieldSearch`),Q(`【屏蔽】搜索按钮`,`blockSearchButton`),Q(`【屏蔽】搜索建议`,`blockSearchSuggestion`),Q(`【屏蔽】搜索框的提示`,`shieldSearchPlaceholder`),Q(`【屏蔽】猜你想搜`,`shieldSearchGuessYouWantToSearch`),Q(`【屏蔽】抖音热点`,`shieldSearchTiktokHotspot`)]}]},{text:`布局屏蔽-鼠标悬浮提示`,type:`deepMenu`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:$.text()+`<br>视频区域-右侧工具栏`,views:[Q(`进入作者主页`,`dy-video-mouseHoverTip-rightToolBar-enterUserHome`,!1),Q(`关注`,`dy-video-mouseHoverTip-rightToolBar-follow`),Q(`点赞`,`dy-video-mouseHoverTip-rightToolBar-addLike`),Q(`评论`,`dy-video-mouseHoverTip-rightToolBar-comment`),Q(`收藏`,`dy-video-mouseHoverTip-rightToolBar-collect`),Q(`分享`,`dy-video-mouseHoverTip-rightToolBar-share`),Q(`看相关`,`dy-video-mouseHoverTip-rightToolBar-seeCorrelation`),Q(`更多`,`dy-video-mouseHoverTip-rightToolBar-more`)]},{type:`container`,text:`视频区域-底部工具栏`,views:[Q(`自动连播`,`dy-video-mouseHoverTip-bottomToolBar-automaticBroadcast`),Q(`清屏`,`dy-video-mouseHoverTip-bottomToolBar-clearScreen`),Q(`稍后再看`,`dy-video-mouseHoverTip-bottomToolBar-watchLater`),Q(`网页全屏`,`dy-video-mouseHoverTip-bottomToolBar-pageFullScreen`),Q(`全屏`,`dy-video-mouseHoverTip-bottomToolBar-fullScreen`)]}]}]}]},Ja={id:`panel-config-video`,title:`视频`,views:[{text:``,type:`container`,views:[{text:`功能`,type:`deepMenu`,views:[{text:`功能`,type:`container`,views:[yi(`清晰度`,`chooseVideoDefinition`,-2,[{text:`超清 4K`,value:-2},{text:`超清 2K`,value:-1},{text:`高清 1080P`,value:1},{text:`高清 720P`,value:2},{text:`标清 540P`,value:3},{text:`极速`,value:4},{text:`智能`,value:0},{text:`无`,value:-999}],void 0,`自行选择清晰度`),Q(`解锁更高画质`,`dy-hook-higher-quality`,!0,void 0,`(仅非登录时生效)开启后将强制显示超清2k、超清4k的画质选项`),yi(`沉浸模式`,`fullScreen`,!1,[{text:`无`,value:!1},{text:`隐藏底部信息区域和右侧工具栏`,value:`bottomInfoWrap-rightToolBar`},{text:`全部`,value:!0},{text:`鼠标进入显示`,value:`mouseEnterShow`}],void 0,`隐藏右侧工具栏、底部信息栏等`),Q(`手机模式`,`mobileMode`,!1,void 0,`放大文字和图标`),yi(`评论与章节布局`,`dy-video-commentLayout`,`auto`,[{text:`自动（竖屏下方，横屏右侧）`,value:`auto`},{text:`下方`,value:`bottom`},{text:`右侧`,value:`right`}],void 0,`评论、章节要点等视频侧栏共用该布局；搜索结果内嵌视频保持右侧。与手机模式无关`),Q(`修复进度条`,`repairProgressBar`,!1,void 0,`修复移动端不能点击拖拽和定位进度的问题（仅移动端使用）`),Q(`手势返回关闭评论区`,`dy-video-gestureBackCloseComment`,!1,void 0,`浏览器手势返回时关闭评论区`),Q(`监听并关闭【长时间无操作，已暂停播放】弹窗`,`dy-video-waitToRemovePauseDialog`,!0,void 0,`自动监听并检测弹窗`),Q(`修改复制链接内容`,`dy-video-hookCopyLinkButton`,!0,void 0,`分享->复制链接，复制的内容仅为链接，不包含其它`),Q(`自动进入网页全屏`,`autoEnterElementFullScreen`,!1,void 0,`网页加载完毕后自动点击网页全屏按钮进入全屏`),yi(`双击video动作`,`dy-video-doubleClickAction`,``,[{text:`点赞`,value:``},{text:`网页全屏`,value:`website-fullscreen`},{text:`全屏`,value:`fullscreen`}]),Q(`移除video的bottom偏移`,`dy-video-removeStyle-bottom`),Q(`禁用右侧工具栏的transform`,`dy-video-disableRightToolbarTransform`),yi(`object-fit`,`dy-video-object-fit`,``,[{text:`默认`,value:``},{text:`fill（拉伸填满容器）`,value:`fill`},{text:`contain（等比缩放至容器内（可能有留白）`,value:`contain`},{text:`cover（等比填充并裁剪超出部分）`,value:`cover`},{text:`none（原始尺寸）`,value:`none`},{text:`scale-down（根据容器大小选择填充或拉伸）`,value:`scale-down`}],void 0,`对video的object-fit属性进行覆盖`),Q(`解除视频文案复制限制`,`dy-video-allowSelectTitleText`),Q(`收藏夹显示滚动条`,`dy-video-playerCollectShowScroll`),Q(`评论区时间可跳转`,`dy-video-commentTimeJump`),Q(`显示点赞、评论、收藏、分享的具体数量`,`dy-video-showLikeCommentCollectShareCount`)]},{type:`container`,text:``,views:[{type:`deepMenu`,text:`解析下载`,views:[{type:`container`,text:``,views:[Q(`视频解析`,`parseVideo`,!0,void 0,`点击视频右侧工具栏的分享按钮-下载（无视<code>该视频不支持下载</code>的提示）`),Q(`添加下载按钮`,`dy-video-downloader-addDownloadButton`,!0,void 0,`在视频底部组件的最右边添加下载按钮`),Q(`弹出下载重命名文件名弹窗`,`dy-video-popupDownloadRenameFileName`,!1,void 0,`当点击下载时，如果启用该功能，则弹出下载重命名文件名弹窗，可自定义文件名`),wi(`自定义视频/图片下载文件名`,`dy-video-parseVideo-downloadFileName`,`{uid}-{nickname}-{desc}-{quality}-{downloadTime}`,`
                    <div class="dy-download-option-group">
                      <div>
                        <code>{uid}</code>
                        <p>：作者id</p>
                      </div>
                      <div>
                        <code>{nickname}</code>
                        <p>：作者名</p>
                      </div>
                      <div>
                        <code>{awemeId}</code>
                        <p>：视频id</p>
                      </div>
                      <div>
                        <code>{desc}</code>
                        <p>：视频描述</p>
                      </div>
                      <div>
                        <code>{originDesc}</code>
                        <p>：视频描述(不包含 #话题)</p>
                      </div>
                      <div>
                        <code>{quality}</code>
                        <p>：视频清晰度，例如：3840x2160 @60</p>
                      </div>
                      <div>
                        <code>{quality-t}</code>
                        <p>：视频清晰度，例如：4K、2K</p>
                      </div>
                      <div>
                        <code>{downloadTime}</code>
                        <p>：下载时间，格式为：YYYY-MM-DD_HH_mm_ss</p>
                      </div>
                    </div>
                    <style>
                      .dy-download-option-group{
                        display: flex;
                        flex-direction: column;
                        font-size: .8em;
                      }
                      .dy-download-option-group > div{
                        display: flex;
                      }
                      .dy-download-option-group > div > code{
                        height: fit-content;
                      }
                      .dy-download-option-group > div > p{

                      }
                    </style>
                  `),wi(`自定义音乐下载文件名`,`dy-video-parseVideoMusic-downloadFileName`,`{author}-{title}-{duration}-{downloadTime}`,`
                    <div class="dy-download-option-group">
                      <div>
                        <code>{album}</code>
                        <p>：专辑名</p>
                      </div>
                      <div>
                        <code>{author}</code>
                        <p>：音乐人</p>
                      </div>
                      <div>
                        <code>{title}</code>
                        <p>：音乐名称</p>
                      </div>
                      <div>
                        <code>{duration}</code>
                        <p>：播放时长</p>
                      </div>
                      <div>
                        <code>{downloadTime}</code>
                        <p>：下载时间，格式为：YYYY-MM-DD_HH_mm_ss</p>
                      </div>
                    </div>
                  `)]}]},{type:`deepMenu`,text:`自动隐藏控件`,views:[{type:`container`,text:`视频的底部`,views:[yi(`自动隐藏的控件`,`dy-video-autoHideBottomControls`,``,[{text:`无`,value:``},{text:`视频信息`,value:`info`},{text:`视频控件`,value:`controls`},{text:`视频信息 + 视频控件`,value:`info-controls`}],void 0,`鼠标移入时自动显示，鼠标移除时自动隐藏`),xi(`延迟自动隐藏的时间`,`dy-video-autoHideBottomControls-delayTime`,3e3,0,8e3,void 0,e=>`${e}ms`,`设置首次延迟自动隐藏视频信息的时间，单位（ms）`,100)]},{type:`container`,text:`右侧工具栏`,views:[Q(`自动隐藏右侧工具栏`,`dy-video-rightToolBarAutoHide`,!1,void 0,`鼠标移入时自动显示，鼠标移除时自动隐藏`),xi(`延迟自动隐藏的时间`,`dy-video-rightToolBarAutoHide-delayTime`,3e3,0,8e3,void 0,e=>`${e}ms`,`设置首次延迟自动隐藏视频标题的时间，单位（ms）`,100)]}]},{text:`视频区域背景色`,type:`deepMenu`,views:[{type:`container`,text:``,views:[Q(`启用`,`dy-video-bgColor-enable`,!1,void 0,`自定义视频背景色`),vi(e=>{let t=U.createElement(`div`,{className:`pops-panel-item-left-text`,innerHTML:`
											<p class="pops-panel-item-left-main-text">视频背景颜色</p>
											<p class="pops-panel-item-left-desc-text">自定义视频背景颜色，包括评论区</p>
											`}),n=U.createElement(`div`,{className:`pops-panel-item-right`,innerHTML:`
											<input type="color" class="pops-color-choose" />
											`}),r=n.querySelector(`.pops-color-choose`);r.value=V.getValue(`dy-video-changeBackgroundColor`);let i=U.createElement(`style`);return U.append(document.head,i),U.on(r,[`input`,`propertychange`],()=>{G.info(`选择颜色：`+r.value),i.innerHTML=`
												#sliderVideo > div{
													background: ${r.value};
												}
												`,V.setValue(`dy-video-changeBackgroundColor`,r.value)}),e.appendChild(t),e.appendChild(n),e},{"dy-video-changeBackgroundColor":`#000000`},{text:`视频背景颜色`,desc:`自定义视频背景颜色，包括评论区`})]}]},{type:`deepMenu`,text:`倍速播放`,views:[{type:`container`,text:``,views:[Q(`启用`,`dy-video-playbackrate`,!1,void 0,`快捷键请到<code>功能</code>中设置`),yi(`固定倍速`,`dy-video-playbackrate-select-value`,``,[`无`,.25,.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3,3.25,3.5,3.75,4,5,6,7,8,9,10,11,12,13,14,15,16].map(e=>e==`无`?{text:e,value:``}:{text:String(e),value:Number(String(e))}),void 0,`选择视频播放的固定速度，该值与快捷键调整的倍速冲突`)]}]}]}]},{text:`自定义功能快捷键`,type:`deepMenu`,views:[{text:``,type:`container`,views:[_i(`倍速 -> 小`,`视频倍速变小`,`dy-video-rate-low`,void 0,`点击录入快捷键`,void 0,Zi.shortCut),_i(`倍速 -> 大`,`视频倍速变大`,`dy-video-rate-up`,void 0,`点击录入快捷键`,void 0,Zi.shortCut),_i(`沉浸模式（全部）`,`可隐藏右侧工具栏、底部信息栏、左上角搜索悬浮栏等`,`dy-video-shortcut-immersionMode`,void 0,`点击录入快捷键`,void 0,Zi.shortCut),_i(`沉浸模式（隐藏底部信息区域和右侧工具栏）`,``,`dy-video-shortcut-immersionMode-bottomInfoWrap-rightToolBar`,void 0,`点击录入快捷键`,void 0,Zi.shortCut),_i(`切换静音状态`,`切换video标签的muted属性`,`dy-video-shortcut-changeVideoMuted`,void 0,`点击录入快捷键`,void 0,Zi.shortCut),_i(`视频解析`,`解析视频链接`,`dy-video-shortcut-parseVideo`,void 0,`点击录入快捷键`,void 0,Zi.shortCut),_i(`倍速播放`,`开启/关闭倍速播放功能`,`dy-video-shortcut-playbackRate`,void 0,`点击录入快捷键`,void 0,Zi.shortCut),_i(`下一章`,`如果视频存在【下一章】按钮，则可通过快捷键快捷触发`,`dy-video-shortcut-nextChapter`,void 0,`点击录入快捷键`,void 0,Zi.shortCut)]}]},{type:`deepMenu`,text:`禁用快捷键`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:$.text(),views:[Q(`上翻页`,`dy-keyboard-hook-arrowUp-w`,!1,void 0,`W`),Q(`下翻页`,`dy-keyboard-hook-arrowDown-s`,!1,void 0,`S`),Q(`快退`,`dy-keyboard-hook-videoRewind`,!1,void 0,`A`),Q(`快进`,`dy-keyboard-hook-videoFastForward`,!1,void 0,`D`)]}]},{text:`过滤器`,type:`deepMenu`,views:[{text:`<a href="https://scriptcat.org/zh-CN/script-show-page/2534#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>`,type:`container`,views:[Q(`启用`,`shieldVideo-exec-network-enable`,!0,void 0,`开启后以下功能才会生效`),Q(`仅显示被过滤的视频`,`shieldVideo-only-show-filtered-video`,!1,void 0,`只会显示过滤规则命中的视频`),Q(`添加 {...} 按钮`,`shieldVideo-add-parseVideoInfoButton`,!0,void 0,`在视频的底部的工具栏中显示 {...} 按钮，用于查看视频信息以便于进行添加过滤规则`),hi(`视频过滤规则`,`可过滤视频`,`自定义`,void 0,!1,!1,`primary`,()=>{ki.showView()})]},{type:`container`,text:``,views:[hi(`规则导入`,`导入自定义的规则`,`导入`,void 0,!1,!1,`primary`,()=>{ki.$data.videoFilterRuleStorage.importRules()}),hi(`规则导出`,`导出自定义的规则`,`导出`,void 0,!1,!1,`primary`,()=>{ki.$data.videoFilterRuleStorage.exportRules(kr+`-视频过滤规则.json`)})]}]}]},{text:``,type:`container`,views:[{text:`布局屏蔽-播放器-右侧工具栏`,type:`deepMenu`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{text:$.text(),type:`container`,views:[Q(`【屏蔽】切换播放<code>↑</code><code>↓</code>`,`shieldPlaySwitchButton`,!1,void 0,`在右侧作者头像上方或者是在右侧区域`),Q(`【屏蔽】AI抖音`,`blockAIDouYin`),Q(`【屏蔽】作者头像`,`shieldAuthorAvatar`),Q(`【屏蔽】直播小窗`,`blockUserLiveSmallWindow`,!1,void 0,`当用户直播时出现在头像左边的小窗口`),Q(`【屏蔽】右侧直播时闪烁的头像`,`dy-video-blockUserLiveFlashingAvatar`,!1),Q(`【屏蔽】点赞`,`shieldLikeButton`),Q(`【屏蔽】评论`,`shieldCommentButton`),Q(`【屏蔽】收藏`,`shieldCollectionButton`),Q(`【屏蔽】分享`,`shieldSharenButton`),Q(`【屏蔽】听抖音`,`shieldListenDouYinButton`),Q(`【屏蔽】看相关`,`shieldRelatedRecommendationsButton`),Q(`【屏蔽】更多`,`shieldMoreButton`,!1,void 0,`<code>...</code>按钮`)]}]},{type:`deepMenu`,text:`布局屏蔽-播放器-底部-视频信息`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:$.text(),views:[Q(`【屏蔽】视频信息`,`dy-video-bottom-shieldVideoInfoWrap`,!1),Q(`【屏蔽】<code>点击推荐</code>或<code>共xx人推荐</code>`,`dy-video-blockClickRecommend`,!1),Q(`【屏蔽】视频标题上面的标签`,`dy-video-blockTitleTopTag`,!1,void 0,`例如：<code>每周精选</code>、<code>抖音精选</code>、<code>游戏评分</code>、<code>购物</code>`),Q(`【屏蔽】视频标题下面的标签`,`dy-video-bottom-shieldVideoUnderTitleTag`,!1,void 0,`例如：<code>相关搜索</code>、<code>AI搜索</code>、<code>合集</code>、<code>汽水音乐</code>...等`),Q(`【屏蔽】视频标签`,`dy-video-blockVideoTag`,!1,void 0,`黄色的标签，例如：<code>#女团</code>`),Q(`【屏蔽】及时接收作品更新提醒`,`dy-video-blockClickUpdateReminder`,!1),Q(`【屏蔽】作者声明`,`dy-video-blockAuthorDeclaration`,!1,void 0,`例如：<code>作者声明：虚构演绎，仅供娱乐</code>`),Q(`【屏蔽】识别画面`,`dy-video-blockAIIdentifyTheScreen`,!1)]}]},{type:`deepMenu`,text:`布局屏蔽-播放器-底部-播放器组件`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:$.text(),views:[Q(`【屏蔽】播放器组件`,`shieldBottomVideoToolBar`,!1,void 0,`整个播放器组件`),Q(`【屏蔽】播放`,`shieldBottomVideoToolBar-play`,!1,void 0,`播放|暂停按钮`),Q(`【屏蔽】刷新`,`shieldBottomVideoToolBar-refresh`,!1,void 0,`在直播画面时会存在该控件`),Q(`【屏蔽】播放时长`,`shieldBottomVideoToolBar-time`),Q(`【屏蔽】章节要点`,`shieldBottomVideoToolbar-blockChapterContainer`,!1),Q(`【屏蔽】弹幕容器`,`shieldBottomVideoToolbarDanmuContainer`),Q(`【屏蔽】AI笔记`,`shieldBottomVideoToolbar-aiNotes`),Q(`【屏蔽】连播`,`shieldBottomVideoToolbar-autoPlay`),Q(`【屏蔽】清屏`,`shieldBottomVideoToolbar-clearScreen`),Q(`【屏蔽】清晰度`,`shieldBottomVideoToolbar-playclarity`),Q(`【屏蔽】倍速`,`shieldBottomVideoToolbar-playback`),Q(`【屏蔽】稍后再看`,`shieldBottomVideoToolbar-watchLater`),Q(`【屏蔽】小窗模式`,`shieldBottomVideoToolbar-miniMode`),Q(`【屏蔽】音量`,`shieldBottomVideoToolbar-volume`),Q(`【屏蔽】网页全屏`,`shieldBottomVideoToolbar-pageFullScreen`),Q(`【屏蔽】进入全屏`,`shieldBottomVideoToolbar-fullScreen`)]}]},{type:`deepMenu`,text:`布局屏蔽-播放器-右键菜单`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:$.text(),views:[Q(`【屏蔽】清屏`,`dy-video-player-block-right-menu-clearScreen`),Q(`【屏蔽】评论`,`dy-video-player-block-right-menu-comment`),Q(`【屏蔽】赞`,`dy-video-player-block-right-menu-like`),Q(`【屏蔽】进入作者主页`,`dy-video-player-block-right-menu-enterAuthorHomePage`),Q(`【屏蔽】推荐给朋友`,`dy-video-player-block-right-menu-recommendToFriends`),Q(`【屏蔽】分享`,`dy-video-player-block-right-menu-share`),Q(`【屏蔽】不感兴趣`,`dy-video-player-block-right-menu-notInterested`),Q(`【屏蔽】意见反馈`,`dy-video-player-block-right-menu-feedback`),Q(`【屏蔽】举报`,`dy-video-player-block-right-menu-report`),Q(`【屏蔽】进入详情页`,`dy-video-player-block-right-menu-enterDetailsPage`)]},{type:`container`,text:`直播视频`,views:[Q(`【屏蔽】不感兴趣`,`dy-video-player-block-right-menu-live-not-interested`),Q(`【屏蔽】举报`,`dy-video-player-block-right-menu-live-report`),Q(`【屏蔽】在新标签页打开直播间`,`dy-video-player-block-right-menu-live-open-blank-room`)]}]},{type:`deepMenu`,text:`布局屏蔽-播放器-其它`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:$.text(),views:[Q(`【屏蔽】右侧的展开评论按钮`,`shieldRightExpandCommentButton`),Q(`【屏蔽】搜索悬浮栏`,`shieldSearchFloatingBar`,!1,void 0,`一般出现在左上角`),Q(`【屏蔽】网页全屏关闭按钮`,`shieldCloseFullScreenButton`,!1,void 0,`一般开启网页全屏后出现在左上角`),Q(`【屏蔽】购物信息`,`dy-video-blockShopInfo`,!0,void 0,`该元素出现在视频底部的用户名、标题信息的上面`),Q(`【屏蔽】弹幕`,`dy-video-blockDanmaku`),Q(`【屏蔽】中间的播放图标`,`dy-video-blockStartPlayIcon`,!1,void 0,`该图标暂停视频时显示在视频中间`),Q(`【屏蔽】ESC或Y可退出网页全屏`,`dy-video-watchAndRemoveFullScreenTip`,!1),Q(`【屏蔽】消息`,`dy-video-blockMessage`,!1,void 0,`一般出现在视频的右上角`)]}]},{text:`布局屏蔽-评论区`,type:`deepMenu`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:$.text(`顶部的TAB`),views:[Q(`【屏蔽】详情`,`dy-video-comment-blockDetails`),Q(`【屏蔽】TA的作品`,`dy-video-comment-blockTAWork`),Q(`【屏蔽】评论`,`dy-video-comment-blockComment`),Q(`【屏蔽】合集`,`dy-video-comment-blockCollection`),Q(`【屏蔽】问AI`,`dy-video-comment-blockAskAI`),Q(`【屏蔽】相关推荐`,`dy-video-comment-blockRelatedRecommend`),Q(`【屏蔽】热点`,`dy-video-comment-blockHotSpot`)]},{type:`container`,text:`评论下方的工具栏`,views:[Q(`【屏蔽】回复`,`dy-video-comment-blockReply`),Q(`【屏蔽】分享`,`dy-video-comment-blockShare`),Q(`【屏蔽】点赞`,`dy-video-comment-blockLike`),Q(`【屏蔽】不喜欢`,`dy-video-comment-blockDislike`)]},{type:`container`,text:`其它`,views:[Q(`【屏蔽】底部的评论工具栏`,`dy-video-shieldUserCommentToolBar`),Q(`【屏蔽】大家都在搜`,`dy-video-shieldUserCommentEveryOneAllSearch`,!1,void 0,`在评论区的顶部出现`)]}]},{type:`deepMenu`,text:`布局屏蔽-直播`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:$.text(),views:[Q(`【屏蔽】点击或按<code>F</code>进入直播间`,`dy-video-live-block-tipClickOrKeyboardFEnterLiveRoom`),Q(`【屏蔽】小黄车`,`dy-video-live-block-yellowCar`),Q(`【屏蔽】本场高光`,`dy-video-live-block-highlight`)]},{type:`container`,text:`播放器组件`,views:[Q(`【屏蔽】刷新`,`dy-video-live-block-playComponents-refresh`)]}]}]}]},Ya={id:`panel-config-search`,title:`搜索`,views:[{text:``,type:`container`,views:[{text:`功能`,type:`deepMenu`,views:[{text:``,type:`container`,views:[yi(`搜索结果类型`,`dy-search-setSearchResultType`,``,[{text:`无`,value:``},{text:`综合`,value:`general`},{text:`视频`,value:`video`},{text:`用户`,value:`user`},{text:`直播`,value:`live`}]),Q(`阻止屏蔽搜索框的右键菜单`,`dy-search-allowContextMenu`,!1),Q(`禁止点击视频区域进入全屏`,`dy-search-disableClickToEnterFullScreen`,!1,void 0,`禁止点击视频区域时会触发自动进入全屏功能`),yi(`自动进入网页全屏`,`search-autoEnterElementFullScreen`,0,()=>[{text:`跟随主设置（${br.get(`autoEnterElementFullScreen`)?`是`:`否`}）`,value:-1},{text:`是`,value:1},{text:`否`,value:0}],void 0,[`视频`,`功能`,`自动进入网页全屏`].map(e=>`<code>${e}</code>`).join(`-`)),yi(`搜索结果-视频-显示样式`,`dy-search-setSearchResultFilterWithVideoStyle`,``,[{text:`无`,value:``},{text:`单列`,value:`one`},{text:`双列`,value:`double`}],void 0,`当屏幕宽度<=<code>800px</code>时，该功能才会生效`)]}]}]},{text:``,type:`container`,views:[{text:`布局屏蔽`,type:`deepMenu`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{text:$.text(),type:`container`,views:[Q(`【屏蔽】相关搜索`,`douyin-search-shieldReleatedSearches`,!1,void 0,`屏蔽右边的相关搜索`),Q(`【屏蔽】AI问一问`,`douyin-search-blockAIAsk`,!1,void 0,`相关搜索上面的问一问`),Q(`【屏蔽】问问AI`,`douyin-search-blockAskAI`,!1,void 0,`为你找到以下结果，问问AI智能总结内容`),Q(`【屏蔽】AI为你生成回答`,`dy-search-blockAIAssistant`),Q(`【屏蔽】用户直播时闪烁的头像`,`dy-search-blockUserLiveFlashingAvatar`),Q(`【屏蔽】关键词选项`,`dy-search-blockKeywordsOptions`),Q(`【屏蔽】侧边栏`,`dy-search-blockSideBar`)]},{type:`container`,text:``,views:[Q(`【屏蔽】多列`,`dy-search-blockColumn`),Q(`【屏蔽】单列`,`dy-search-blockSingleColumn`),Q(`【屏蔽】筛选`,`dy-search-blockFilter`)]}]},{text:`布局屏蔽-左侧导航栏`,type:`deepMenu`,views:[{text:``,type:`container`,views:[yi(`【屏蔽】左侧导航栏`,`search-shieldLeftNavigator`,-1,()=>[{text:`跟随主设置（${br.get(`shieldLeftNavigator`)?`是`:`否`}）`,value:-1},{text:`是`,value:1},{text:`否`,value:0}],void 0,[`通用`,`布局屏蔽-左侧导航栏`,`【屏蔽】左侧导航栏`].map(e=>`<code>${e}</code>`).join(`-`))]}]}]}]},Xa={id:`panel-config-live`,title:`直播`,views:[{text:``,type:`container`,views:[{text:`功能`,type:`deepMenu`,views:[{text:`功能`,type:`container`,views:[yi(`清晰度`,`live-chooseQuality`,`origin`,Object.keys(fa).map(e=>({value:e,text:fa[e].label})),void 0,`自行选择清晰度`),Q(`自动进入网页全屏`,`live-autoEnterElementFullScreen`,!1,void 0,`网页加载完毕后自动点击网页全屏按钮进入全屏`),Q(`监听并关闭【长时间无操作，已暂停播放】弹窗`,`live-waitToRemovePauseDialog`,!0,void 0,`自动监听并检测弹窗`),Q(`禁止自动播放`,`live-pauseVideo`,!1),yi(`直播聊天区布局`,`dy-live-chatLayout`,`auto`,[{text:`自动（竖屏下方，横屏右侧）`,value:`auto`},{text:`下方`,value:`bottom`},{text:`右侧`,value:`right`}],void 0,`直播页面可直接切换布局，并可收起/展开聊天区`),Q(`自动关闭聊天室`,`dy-live-autoCloseChatRoom`,!1,void 0,`自动点击关闭聊天室按钮`),Q(`禁用鼠标滚轮切换直播间`,`live-prevent-wheel-switchLiveRoom`),yi(`双击video动作`,`dy-live-doubleClickAction`,``,[{text:`点赞（默认）`,value:``},{text:`网页全屏`,value:`website-fullscreen`},{text:`全屏`,value:`fullscreen`}]),yi(`单击video动作`,`dy-live-oneClickAction`,``,[{text:`无（默认）`,value:``},{text:`切换播放状态`,value:`switch-video-play-state`}]),Q(`显示直播间在线观众具体人数`,`dy-live-showLiveRoomAudienceCount`,!1)]},{text:`视频区域背景色`,type:`container`,views:[Q(`启用`,`live-bgColor-enable`,!1,void 0,`自定义视频背景色`),vi(e=>{let t=U.createElement(`div`,{className:`pops-panel-item-left-text`,innerHTML:`
											<p class="pops-panel-item-left-main-text">视频背景颜色</p>
											<p class="pops-panel-item-left-desc-text">自定义视频背景颜色</p>
											`}),n=U.createElement(`div`,{className:`pops-panel-item-right`,innerHTML:`
											<input type="color" class="pops-color-choose" />
											`}),r=n.querySelector(`.pops-color-choose`);return r.value=V.getValue(`live-changeBackgroundColor`),U.on(r,[`input`,`propertychange`],()=>{G.info(`选择颜色：`+r.value),V.setValue(`live-changeBackgroundColor`,r.value)}),e.appendChild(t),e.appendChild(n),e},{"live-changeBackgroundColor":`#000000`},{text:`视频背景颜色`,desc:`自定义视频背景颜色`})]}]},{text:`自定义功能快捷键`,type:`deepMenu`,views:[{text:``,type:`container`,views:[_i(`【屏蔽】顶栏信息`,``,`live-shieldTopToolBarInfo`,void 0,`点击录入快捷键`,void 0,la.shortCut),_i(`【屏蔽】小黄车`,``,`dy-live-shortcut-shielYellowCar`,void 0,`点击录入快捷键`,void 0,la.shortCut),_i(`【屏蔽】聊天室`,``,`dy-live-block-chatroom`,void 0,`点击录入快捷键`,void 0,la.shortCut),_i(`【屏蔽】礼物特效`,``,`dy-live-shieldGiftEffects`,void 0,`点击录入快捷键`,void 0,la.shortCut),_i(`【屏蔽】底部的礼物栏`,``,`dy-live-shortcut-shieldGiftColumn`,void 0,`点击录入快捷键`,void 0,la.shortCut),_i(`切换静音状态`,`切换video标签的muted属性`,`dy-live-shortcut-changeVideoMuted`,void 0,`点击录入快捷键`,void 0,la.shortCut),_i(`切换播放状态`,`可快捷进行<code>播放</code>/<code>暂停</code>`,`dy-live-shortcut-switchPlayState`,void 0,`点击录入快捷键`,void 0,la.shortCut)]}]},{type:`deepMenu`,text:`禁用快捷键`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:$.text(),views:[Q(`三屏画面`,`dy-live-threeScreen`,!1,void 0,`S`),Q(`刷新`,`dy-live-refresh`,!1,void 0,`R`),Q(`屏幕旋转`,`dy-live-screenRotation`,!1,void 0,`D`),Q(`开启小窗模式`,`dy-live-enableSmallWindowMode`,!1,void 0,`U`),Q(`切换直播间`,`dy-live-switchLiveRoom`,!1,void 0,`↑↓`),Q(`快捷键送礼`,`dy-live-quickGift`,!1,void 0,`E`)]}]},{type:`deepMenu`,text:`聊天室消息过滤器`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:``,views:[Q(`启用`,`live-danmu-shield-rule-enable`),Q(`【屏蔽】送礼信息`,`live-danmu-shield-gift`),Q(`【屏蔽】福袋口令`,`live-danmu-shield-lucky-bag`),Q(`【屏蔽】emoji|图片|表情包`,`live-message-shield-method-emoji-chat`),Q(`【屏蔽】信息播报`,`live-message-shield-room-message`,!1,void 0,`如：xxx 为主播加了 xx分、恭喜xxx等`)]},{type:`container`,text:``,views:[vi(e=>{let t=U.createElement(`div`,{className:`pops-panel-textarea`,innerHTML:`<textarea placeholder="请输入屏蔽规则，每行一个
例如：屏蔽包含'主播'的消息
主播" style="height:350px;"></textarea>`},{style:`width: 100%;`}),n=t.querySelector(`textarea`);return n.value=Fr.get(),U.on(n,[`input`,`propertychange`],H.debounce(function(){Fr.set(n.value),Fr.initRule()},1e3)),e.appendChild(t),e})]}]}]},{text:``,type:`container`,views:[{text:`布局屏蔽-视频区域内`,type:`deepMenu`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{text:$.text(),type:`container`,views:[Q(`【屏蔽】顶栏信息`,`live-shieldTopToolBarInfo`,!1,void 0,`包括直播作者、右侧的礼物展馆`),Q(`【屏蔽】底部的礼物栏`,`live-shieldGiftColumn`),Q(`【屏蔽】礼物特效`,`live-shieldGiftEffects`),Q(`【屏蔽】福袋`,`live-shieldLucky`),Q(`【屏蔽】小黄车`,`live-shielYellowCar`),Q(`【屏蔽】点亮展馆帮主播集星`,`live-block-exhibition-banner-dylive-tooltip`,!1,void 0,`礼物展馆下面的悬浮提示`)]},{type:`container`,text:`弹幕`,views:[Q(`【屏蔽】弹幕`,`live-shieldDanmuku`),Q(`【屏蔽】送礼信息`,`dy-live-danmaku-block-gift`),Q(`【屏蔽】福袋口令`,`dy-live-danmaku-block-lucky-bag`)]},{type:`container`,text:`右键菜单`,views:[Q(`【屏蔽】下载客户端`,`dy-live-blockVideoRightMenu-downloadClient`,!0,void 0,`屏蔽右键菜单项`)]}]},{type:`deepMenu`,text:`布局屏蔽-播放器-底部-播放器组件`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:$.text(),views:[Q(`【屏蔽】播放器组件`,`dy-live-player-block`,!1,void 0,`整个播放器组件`)]},{type:`container`,text:``,views:[Q(`【屏蔽】播放`,`dy-live-player-block-play`,!1,void 0,`播放|暂停按钮`),Q(`【屏蔽】刷新`,`dy-live-player-block-refresh`)]},{type:`container`,text:``,views:[Q(`【屏蔽】清晰度`,`dy-live-player-block-playclarity`),Q(`【屏蔽】三屏画面`,`dy-live-player-block-threeScreen`),Q(`【屏蔽】屏幕旋转`,`dy-live-player-block-rotate`),Q(`【屏蔽】弹幕开关`,`dy-live-player-block-danmukuSwitch`),Q(`【屏蔽】礼物设置`,`dy-live-player-block-giftSetting`),Q(`【屏蔽】音量`,`dy-live-player-block-volume`),Q(`【屏蔽】小窗模式`,`dy-live-player-block-miniMode`),Q(`【屏蔽】网页全屏`,`dy-live-player-block-pageFullScreen`),Q(`【屏蔽】进入全屏`,`dy-live-player-block-fullScreen`)]}]},{text:`布局屏蔽-聊天室`,type:`deepMenu`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{text:$.text(),type:`container`,views:[Q(`【屏蔽】聊天室`,`live-shieldChatRoom`),Q(`【屏蔽】副屏`,`live-shieldDoubleScreen`,!1,void 0,`直播副屏，显示在贵宾席的上面`),Q(`【屏蔽】贵宾席`,`live-shielChatRoomVipSeats`),Q(`【屏蔽】用户等级图标`,`dy-live-shieldUserLevelIcon`),Q(`【屏蔽】VIP图标`,`dy-live-shieldUserVIPIcon`),Q(`【屏蔽】粉丝牌`,`dy-live-shieldUserFansIcon`),Q(`【屏蔽】信息播报`,`dy-live-shieldMessage`,!1,void 0,`顶部左右滚动播报（xxx进入/加入了直播间），底部滚动播报（xxx来了，xxx给主播点赞）`),Q(`【屏蔽】底部遮挡区域`,`dy-live-blockBottomArea`,!0,void 0,`该元素会遮挡部分聊天信息，导致显示不全`)]}]}]}]},Za={id:`panel-config-user`,title:`用户`,views:[{type:`container`,text:``,views:[{type:`deepMenu`,text:`功能`,views:[{text:`功能`,type:`container`,views:[Q(`显示UID`,`dy-user-addShowUserUID`,!0,void 0,`在用户信息区域下方显示当前用户的uid`)]}]}]},{type:`container`,text:``,views:[{type:`deepMenu`,text:`布局屏蔽-用户信息`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:$.text(),views:[Q(`【屏蔽】用户名`,`dy-user-block-name`),Q(`【屏蔽】关注`,`dy-user-block-follow`),Q(`【屏蔽】粉丝`,`dy-user-block-fans`),Q(`【屏蔽】获赞`,`dy-user-block-likes`),Q(`【屏蔽】抖音号`,`dy-user-block-id`),Q(`【屏蔽】IP属地`,`dy-user-block-ip`),Q(`【屏蔽】年龄`,`dy-user-block-age`),Q(`【屏蔽】介绍`,`dy-user-block-intro`)]},{type:`container`,text:``,views:[Q(`【屏蔽】分享主页`,`dy-user-block-shareHomeButton`),Q(`【屏蔽】...`,`dy-user-block-moreButton`),Q(`【屏蔽】关注`,`dy-user-block-followButton`),Q(`【屏蔽】私信`,`dy-user-block-messageButton`)]}]},{type:`deepMenu`,text:`布局屏蔽-作品`,afterEnterDeepMenuCallBack:$.afterEnterDeepMenuCallBack,views:[{type:`container`,text:$.text(),views:[Q(`【屏蔽】作品`,`dy-user-works-block-works`),Q(`【屏蔽】推荐`,`dy-user-works-block-recommend`),Q(`【屏蔽】喜欢`,`dy-user-works-block-likes`)]}]}]}]},Qa={id:`m-panel-config-share-user`,title:`主页`,headerTitle:`/share/user<br />主页`,views:[{text:``,type:`container`,views:[{text:`覆盖点击事件`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`视频合集`,`m-dy-share-user-coverPlayletList`,!0,void 0,`正确跳转视频合集页面`),Q(`视频列表`,`m-dy-share-user-coverPostListContainer`,!0,void 0,`正确跳转视频页面`)]}]}]}]},$a={id:`m-panel-config-share-note`,title:`笔记`,headerTitle:`/share/note<br />笔记`,views:[{text:``,type:`container`,views:[{text:`覆盖点击事件`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`精彩图文`,`m-dy-share-note-coverExcitingGraphicsAndText`,!0,void 0,`正确跳转笔记页面`),Q(`用户`,`m-dy-share-note-coverUser`,!0,void 0,`正确跳转用户主页`),Q(`话题`,`m-dy-share-note-coverHashTag`,!0,void 0,`正确跳转相关话题`),Q(`音乐`,`m-dy-share-note-coverMusic`,!0,void 0,`正确跳转相关音乐`),Q(`相关推荐`,`m-dy-share-note-coverRecommend`,!0,void 0,`正确跳转笔记页面`)]}]},{text:`屏蔽元素`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`【屏蔽】评论`,`m-dy-share-note-blockComment`,!1),Q(`【屏蔽】相关推荐`,`m-dy-share-note-blockRecommend`,!1),Q(`【屏蔽】底部工具栏`,`m-dy-share-note-blockFooterToobar`,!1)]}]}]}]},eo={id:`m-panel-config-share-challenge`,title:`话题`,headerTitle:`/share/challenge<br />话题`,views:[{text:``,type:`container`,views:[{text:`覆盖点击事件`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`顶部区域`,`m-dy-share-challenge-coverTopJump`,!0,void 0,`阻止跳转至下载页面`),Q(`视频卡片`,`m-dy-share-challenge-coverVideoCard`,!0,void 0,`正确跳转视频页面`)]}]}]}]},to={id:`m-panel-config-share-video`,title:`视频`,headerTitle:`/share/video<br />视频`,views:[{text:``,type:`container`,views:[{text:`覆盖点击事件`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`全局点击`,`m-dy-share-video-coverGlobalClick`,!0,void 0,`阻止跳转至下载页`)]}]}]}]},no={id:`m-panel-config-share-music`,title:`音乐`,headerTitle:`/share/music<br />音乐`,views:[{text:``,type:`container`,views:[{text:`覆盖点击事件`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`视频卡片`,`m-dy-share-music-coverVideoCard`,!0,void 0,`正确跳转视频页面`)]}]}]}]},ro={id:`panel-config-recommend`,title:`推荐`,views:[{text:`功能`,type:`container`,views:[Q(`禁止自动播放`,`dy-recommend-pauseVideo`,!1),yi(`自动连播`,`dy-recommend-automaticContinuousPlayback`,!1,[{text:`无`,value:!1},{text:`顺序`,value:!0},{text:`顺序+合集`,value:`Sequence+Collection`}],void 0,`注意：请勿和推荐页面自带的<code>连播</code>功能同时使用`),Q(`禁用视频满意评价`,`dy-recommend-disableVideoSatisfaction`)]}]},io={id:`panel-config-follow`,title:`关注`,views:[{text:`布局屏蔽-关注列表`,type:`container`,views:[Q(`【屏蔽】用户直播时闪烁的头像`,`dy-follow-blockUserLiveFlashingAvatar`)]}]},ao={id:`panel-config-hot`,title:`热点榜`,views:[{text:`布局屏蔽`,type:`container`,views:[Q(`【屏蔽】右侧抖音热榜`,`dy-hot-blockRightHotList`)]}]},oo={id:`panel-config-chat`,title:`聊天`,views:[{type:`container`,text:`续火花`,views:[Q(`启用`,`dy-chat-autoKeepTheSparkAlive`,!1),hi(`最后执行时间`,`自动执行续火花的时间，可点击按钮进行时间重置`,()=>{let e=V.getValue(`dy-chat-autoKeepTheSparkAlive-latestRunTimeStamp`);return e?H.formatTime(e):`无`},void 0,!1,!1,`primary`,()=>{confirm(`是否要重置最后执行时间？`)&&(V.deleteValue(`dy-chat-autoKeepTheSparkAlive-latestRunTimeStamp`),z.success(`重置成功`))}),wi(``,`dy-chat-autoKeepTheSparkAlive-sendText`,`续火花`,`用于发送消息的内容`,void 0,`请输入发送消息的内容`),Si(`用户列表`,`dy-chat-autoKeepTheSparkAlive-userList`,``,`用户uid，每行一个（注意：不是抖音号）`)],afterAddToUListCallBack(e,t){let n=document.createElement(`style`);n.textContent=`
            [data-key="dy-chat-autoKeepTheSparkAlive-userList"] .pops-panel-textarea textarea{
                height: 150px;
            }
          `,t.target?.appendChild(n)}}]};_r.addContentConfig([qa,Ja,ro,Ya,Xa,io,Za,oo,ao]),_r.addContentConfig([Qa,$a,eo,to,no]),vr.addMenuOption({key:`show_pops_m_panel_setting`,text:`⚙ 移动端设置`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{V.showPanel(_r.getConfig(1),`${V.$data.scriptName}-移动端设置`)}}),V.init(),Ma.isMDouYin()?Wa.init():ja.init()})();
