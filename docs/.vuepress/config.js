const readFileList = require("../../scripts/build.js");

module.exports = {
  title: "每日时报",
  description:
    "每日时报，会以前端技术体系为主要分享课题。内容会以：文章、工具、新闻、视频几大板块作为主要分类。",
  head: [
    [
      "link",
      { rel: "alternate", type: "application/rss+xml", href: "/rss.xml", title: "每日时报" },
    ],
  ],
  ga: "UA-131469836-1",
  plugins: [
    ["@vuepress/google-analytics"],
    [
      "vuepress-plugin-rss-support",
      {
        site_url: "https://wubaiqing.github.io/zaobao",
        filter: page => /^\/201.+/.test(page.path),
        copyright: "2019每日时报",
        count: 60,
      },
    ],
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github",
        owner: "wubaiqing",
        repo: "zaobao",
        clientId: "20ee116870a4be78bb37",
        clientSecret: "13c39d03e4bdc6f13023cc6f318ca132c7522b9f",
      },
    ],
  ],
  base: "/zaobao/",
  themeConfig: {
    repo: "wubaiqing/zaobao",
    lastUpdated: "Last Updated",
    docsDir: "docs",
    algolia: {
      apiKey: "d9708b4d74ba98295f2a87341fae3f0c",
      indexName: "zaobao",
    },
    nav: [{ text: "留言", link: "/other/talk" }],
    sidebar: [
      ["/", "1. 介绍"],
      {
        title: "2019年08月",
        collapsable: false,
        children: readFileList("2019", "08"),
      },
      {
        title: "2019年07月",
        collapsable: false,
        children: readFileList("2019", "07"),
      },
      {
        title: "2019年06月",
        collapsable: false,
        children: readFileList("2019", "06"),
      },
      {
        title: "2019年05月",
        collapsable: true,
        children: readFileList("2019", "05"),
      },
      {
        title: "2019年04月",
        collapsable: true,
        children: readFileList("2019", "04"),
      },
      {
        title: "2019年03月",
        collapsable: true,
        children: readFileList("2019", "03"),
      },
      {
        title: "2019年02月",
        collapsable: true,
        children: readFileList("2019", "02"),
      },
      {
        title: "2019年01月",
        collapsable: true,
        children: readFileList("2019", "01"),
      },
      {
        title: "2018年12月",
        collapsable: true,
        children: readFileList("2018", "12"),
      },
      {
        title: "2018年11月",
        collapsable: true,
        children: readFileList("2018", "11"),
      },
      {
        title: "2018年10月",
        collapsable: true,
        children: readFileList("2018", "10"),
      },
      {
        title: "2018年09月",
        collapsable: true,
        children: readFileList("2018", "09"),
      },
      {
        title: "2018年08月",
        collapsable: true,
        children: readFileList("2018", "08"),
      },
    ],
  },
};
