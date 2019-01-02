const readFileList = require('../../scripts/build.js');
const rssSupport = require('vuepress-plugin-rss-support');

module.exports = {
  title: "每日时报",
  description: "每日时报，会以前端技术体系为主要分享课题。内容会以：文章、工具、新闻、视频几大板块作为主要分类。",
  head: [
    ['link', { rel: 'alternate', type: 'application/rss+xml', href: '/rss.xml', title: '每日时报' }]
  ],
  ga: 'UA-131469836-1',
  plugins: [
    ['@vuepress/google-analytics'],
    [rssSupport, {
      site_url: 'https://wubaiqing.github.io/zaobao',
      copyright: '2019 每日时报',
      count: 60
    }],
  ],
  base: '/zaobao/',
  themeConfig: {
    repo: "wubaiqing/zaobao",
    lastUpdated: 'Last Updated',
    docsDir: 'docs',
    algolia: {
      apiKey: 'd9708b4d74ba98295f2a87341fae3f0c',
      indexName: 'zaobao'
    },
    sidebar: [
      ["/", "1. 介绍"],
      {
        title: "2019 年 01 月",
        collapsable: false,
        children: readFileList('2019', '01')
      }, {
        title: "2018 年 12 月",
        collapsable: false,
        children: readFileList('2018', '12')
      }, {
        title: "2018 年 11 月",
        collapsable: true,
        children: readFileList('2018', '11')
      }, {
        title: "2018 年 10 月",
        collapsable: true,
        children: readFileList('2018', '10')
      }, {
        title: "2018 年 09 月",
        collapsable: true,
        children: readFileList('2018', '09')
      }, {
        title: "2018 年 08 月",
        collapsable: true,
        children: readFileList('2018', '08')
      }
    ],
  }
};
