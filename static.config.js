import React from 'react'
import fs from 'fs'
import klaw from 'klaw'
import path from 'path'
import matter from 'gray-matter'

function getPosts() {
  const items = []
  const getFiles = () =>
    new Promise(resolve => {
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
              dataObj.data.slug = dataObj.data.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')
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
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({
    title: 'Båden'
  }),
  getRoutes: async () => {
    const posts = await getPosts()
    return [
      {
        path: '/',
        getData: () => ({
          posts
        })
      },
      {
        path: '/about',
        getData: () => ({
          posts
        })
      },
      {
        path: '/posts',
        getData: () => ({
          posts
        }),
        children: posts.map((post /* : Post */) => ({
          path: `/${post.data.slug}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
            posts
          })
        }))
      },
      {
        path: '404',
        template: 'src/containers/NotFound.tsx',
        getData: () => ({
          posts
        })
      }
    ]
  },
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#122D41" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="src/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="touch-icon"
          sizes="180x180"
          href="src/assets/favicon/touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="src/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="src/assets/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="src/assets/favicon/safari-pinned-tab.svg"
          color="#122D41"
        />
        <link rel="shortcut icon" href="src/assets/favicon/favicon-16x16.png" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  siteRoot: 'https://baaden.koeln',
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages')
      }
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    'react-static-plugin-sass'
  ]
}
