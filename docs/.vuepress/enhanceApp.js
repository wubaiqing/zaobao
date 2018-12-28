export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  try {
    global
  } catch (e) {
    return
  }

  const path = require('path')
  const fs = require('fs-extra')
  const RSS = require('rss')

  const feed = new RSS({
    title: siteData.title,
    description: siteData.description,
    feed_url: 'https://wubaiqing.github.io/zaobao/rss.xml',
    site_url: 'https://wubaiqing.github.io/zaobao/',
    copyright: '2018 每日时报',
    language: 'zn-CN',
  })

  const d = new Date()
  d.setTime(0)
  const dateType = typeof d

  siteData.pages.filter(page => {
    return /^\/2018\/.+/.test(page.path)
  }).map(page => {
    if (!page.frontmatter.date) {
      page.frontmatter['date'] = d
      return page
    }
    if (typeof page.frontmatter.date !== dateType) {
      page.frontmatter.date = new Date(page.frontmatter.date)
    }
    return page
  }).sort((a, b) => {
    const aTime = a.frontmatter.date.getTime()
    const bTime = b.frontmatter.date.getTime()
    if (aTime < bTime) return 1
    if (aTime > bTime) return -1

    const aTitle = a.frontmatter.title
    const bTitle = b.frontmatter.title
    if (aTitle && !bTitle) return -1
    if (!aTitle && bTitle) return 1
    if (aTitle < bTitle) return -1
    if (aTitle > bTitle) return 1

    const aPath = a.path
    const bPath = b.path
    if (aPath < bPath) return -1
    if (aPath > bPath) return 1
    return 0
  }).map(page => {
    return {
      title: page.title,
      description: page.frontmatter.description,
      url: `https://wubaiqing.github.io/zaobao${page.path}`,
      date: page.frontmatter.date,
    }
  }).forEach(page => {
    feed.item(page)
  })

  fs.writeFileSync(
    path.resolve('./docs/.vuepress/dist', 'rss.xml'),
    feed.xml()
  )
}
