# github-actions-weather-bot

使用 `Github Actions` 实现定时发送穿衣建议邮件。

## 实现过程

1. 从中国天气网爬取穿衣建议和温度信息。

2. 通过 `Node.js` 的 `fs` 模块把获取到的信息写入到 `index.html` 文件中。（ 这里的 `index.html` 文件不必写到仓库中，在 `Github Actions` 执行的时候会在服务器环境中创建 ）

3. 通过 `Github Actions` 发送 `index.html` 到指定邮箱。

详细介绍可以查看[这里](https://juejin.cn/post/6950551485356703751)。
