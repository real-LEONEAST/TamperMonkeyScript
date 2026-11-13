# 抖音优化个人版自动更新

这个 `release` 分支用于发布已经确认可用的抖音优化脚本，不用修改 fork 的 `master`，也不会把个人发布配置带进提交给上游的功能分支。

## 安装

等 [Publish personal Douyin userscript](../actions/workflows/douyin-personal-release.yml) 工作流首次成功后，打开以下地址安装一次：

https://raw.githubusercontent.com/real-LEONEAST/TamperMonkeyScript/release/scripts-vite/%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96/dist/%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96.user.js

脚本头部中的 `@updateURL` 指向同目录的 `.meta.js`，`@downloadURL` 指向完整 `.user.js`。工作流每次构建都生成比之前更高的 `@version`，供 Tampermonkey 检查更新。

## 发布下一版

1. 在 `feat/douyin-adaptive-comment-live-layout` 分支开发、测试功能。
2. 确认可用后，将需要发布的提交合入 fork 的 `release` 分支。
3. `release` 分支的源码变化将自动触发 GitHub Actions，构建并提交 `dist` 内的脚本和元数据。
4. 等待工作流成功，然后在 Tampermonkey 中检查更新，或等待其定期检查。

不要直接修改 `dist` 中的版本号或脚本：它们由工作流自动生成。若首次运行没有启动，请到 fork 的 **Actions** 页面启用工作流；若推送生成文件失败，检查 **Settings → Actions → General → Workflow permissions** 是否允许工作流写入仓库内容。
