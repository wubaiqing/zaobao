/**
 * 新增 Markdown 转 HTML 依赖，基于 vuepree-plugin-rss 基础之上做了些改造
 *
 * @see https://github.com/youngtailors/vuepress-plugin-rss/blob/master/index.js
 */
const RSS = require('rss')
const path = require('path')
const fs = require('fs-extra')
const showdown  = require('showdown')
const converter = new showdown.Converter()

module.exports = (pluginOptions, ctx) => {
  return {
    name: 'vuepress-plugin-rss',

    generated () {
      const { pages, sourceDir } = ctx
      const { filter = () => true, count = 60 } = pluginOptions
      const siteData = require(path.resolve(sourceDir, '.vuepress/config.js'))

      const feed = new RSS({
        title: siteData.title,
        description: siteData.description,
        feed_url: `${pluginOptions.site_url}/rss.xml`,
        site_url: `${pluginOptions.site_url}`,
        copyright: `${pluginOptions.copyright ? pluginOptions.copyright : ''}`,
        language: 'zh-CN',
      })

      pages
        .filter(page => filter(page.frontmatter))
        .map(page => ({...page, date: new Date(page.lastUpdated)}))
        .sort((a, b) => b.date - a.date)
        .map(page => ({
          title: page.title,
          description: converter.makeHtml(page._content),
          url: `${pluginOptions.site_url}${page.path}`,
          date: page.date,
        }))
        .slice(0, count)
        .forEach(page => feed.item(page))

      fs.writeFile(
        path.resolve(ctx.outDir, 'rss.xml'),
        feed.xml()
      );
    }
  }
}
