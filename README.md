# 每日时报
[![CircleCI](https://circleci.com/gh/wubaiqing/zaobao.svg?style=svg)](https://circleci.com/gh/wubaiqing/zaobao) [![Coverage Status](https://coveralls.io/repos/github/wubaiqing/zaobao/badge.svg)](https://coveralls.io/github/wubaiqing/zaobao) [![MIT](https://img.shields.io/github/license/wubaiqing/zaobao)](https://github.com/wubaiqing/zaobao/blob/master/LICENSE) [![lerna](https://img.shields.io/badge/maintained%20with-vuepress-cc00ff.svg)](https://vuepress.vuejs.org)


### 项目背景
不知道大家有没有跟我一样的情况，总是需要了解一些前沿的技术；其目的可能是为了让技术精进，也有可能是害怕技术落后而掉队；总之需要从各类网站了解一些前沿信息。

以我举例，我经常在（[Hacker News](https://news.ycombinator.com/)、[Medium](https://medium.com/)、[Dev.to](https://dev.to/)、[Twitter](https://twitter.com/)、[阮一峰](http://www.ruanyifeng.com/blog/)、[GitHub 关注](https://github.com/)、[微博](https://weibo.com/)、[V2EX](https://www.v2ex.com/)、[Ruby China](https://ruby-china.org/)、[GitHub Trending](https://github.com/trending)、[掘金](https://juejin.im/)、[OS China](https://www.oschina.net/)、[DEVURLS](https://devurls.com/)、[Hashnode](https://hashnode.com/)、[React Status](https://react.statuscode.com/)）等地去学习。通过整理后，把每天值得分享的内容，发布到公司的 QQ 群里，让大家和我同时受益。

学习加整理这个过程是非常耗时的。所以我希望有一个像阮一峰老师的[每周分享](http://www.ruanyifeng.com/blog/2018/12/weekly-issue-36.html)，或者蚂蚁金服[陈成](https://github.com/sorrycc/)一样的微信群，来快速的学习有价值的东西。

可能是这个信息源我还没有找到，所以我打算自己来做，于是才有了这个开源项目。  

这个项目会以前端技术体系为主要分享课题。  
内容会以：文章、工具、新闻、视频等几大板块作为主要分类。  
如果我的分享对你有所帮助，还请大家给个 ⭐️ 让更多的人知道[它](https://github.com/wubaiqing/zaobao)。  

> 访问地址 : <https://wubaiqing.github.io/zaobao/other/latest.html>

> RSS : <https://wubaiqing.github.io/zaobao/rss.xml>

> GitHub : <https://github.com/wubaiqing/zaobao>

### 阅读效果
![](https://raw.githubusercontent.com/wubaiqing/zaobao/master/screenshot.png)

### 资源分享，参与奉献
项目安装方式极其简单，如果有更好的资源非常欢迎给大家分享出来，你可以选择提交 Issue 或提交 PR。
如何提交 PR，参考 [GitHub Help](https://help.github.com/articles/working-with-forks/) 即可。

### 安装

下载源码, 请执行下列命令：  
```bash
# 克隆代码
$ git clone https://github.com/wubaiqing/zaobao.git
$ cd zaobao
```

代码下载完成后, 需要安装依赖：
```bash
# 安装依赖
$ yarn 

# 检查是否符合文档规范
$ yarn lint:md

# 开始阅读
$ yarn docs:dev 
```

在浏览器中打开 <http://localhost:8080/zaobao/>

### 更新

在 `zaobao` 文件夹中运行下面的命令就会从 GitHub 仓库拉取最新版本。

```bash
# 拉取代码
$ git pull
```
