import React from 'react'
import { ServerStyleSheet } from 'styled-components'

import { theme } from './src/constants'

const fs = require('fs')
const klaw = require('klaw')
const path = require('path')
const matter = require('gray-matter')

function getPosts () {
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if posts directory exists //
    if (fs.existsSync('./src/posts')) {
      klaw('./src/posts')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Create slug for URL //
            dataObj.data.slug = dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // posts = items for below routes //
          resolve(items)
        })
    } else {
      // If src/posts directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}

export default {
  // preact: true,
  // plugins: ['react-static-plugin-styled-components'],
  getSiteData: () => ({
    title: 'Båden',
  }),
  getRoutes: async () => {
    const posts = await getPosts()
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          posts
        }),
      },
      {
        path: '/about',
        component: 'src/containers/About',
        getData: () => ({
          posts
        }),
      },
      {
        path: '/posts',
        component: 'src/containers/Posts.js',
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/${post.data.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
            posts
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: ({ Html, Head, Body, children, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={theme.colors.blueDark} />
        <link rel="apple-touch-icon" sizes="180x180" href={require('./src/assets/favicon/apple-touch-icon.png')} />
        <link rel="touch-icon" sizes="180x180" href={require('./src/assets/favicon/touch-icon.png')} />
        <link rel="icon" type="image/png" sizes="32x32" href={require('./src/assets/favicon/favicon-32x32.png')} />
        <link rel="icon" type="image/png" sizes="16x16" href={require('./src/assets/favicon/favicon-16x16.png')} />
        <link rel="mask-icon" href={require('./src/assets/favicon/safari-pinned-tab.svg')} color={theme.colors.blueDark} />
        <link rel="shortcut icon" href={require('./src/assets/favicon/favicon-16x16.png')} />
        <link href="https://fonts.googleapis.com/css?family=Catamaran:400,500,700,800,900" rel="stylesheet" />
        {renderMeta.styleTags}
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  siteRoot: 'https://baaden.koeln',
}
