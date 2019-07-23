import React, { useContext } from 'react'
import { useRouteData } from 'react-static'

import PageHead from '../components/PageHead'

import { Post } from 'types'
import { AppContext } from '../App'
import Card from '../components/Card'
import WaveContainer from '../components/WaveContainer'

export default () => {
  const { lang, sortBy, changeSortBy } = useContext(AppContext)
  const { posts }: { posts: Post[] } = useRouteData()

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [posts])

  function sortPosts(posts: Post[], sortBy: string) {
    if (sortBy === 'newest') {
      return posts.sort((a, b) => {
        if (a.data.date > b.data.date) {
          return -1
        } else if (a.data.date < b.data.date) {
          return 1
        }
        return 0
      })
    } else if (sortBy === 'oldest') {
      return posts.sort((a, b) => {
        if (a.data.date < b.data.date) {
          return -1
        } else if (a.data.date > b.data.date) {
          return 1
        }
        return 0
      })
    }
    return posts
  }

  function renderPosts(posts: Post[], sortBy: string) {
    const localizedPosts = posts.filter(post => post.data.language === lang)

    const postsToRender = sortPosts(localizedPosts, sortBy)

    return postsToRender.map(post => (
      <Card key={post.data.slug} post={post} lang={lang} />
    ))
  }

  return (
    <>
      <div>
        <PageHead title="Indlæg" />
        <div className="posts">
          <div className="container">
            <header className="posts__header">
              <h1>{lang === 'en' ? 'Posts' : 'Indlæg'}</h1>
              <select onChange={changeSortBy} value={sortBy}>
                <option value="newest">
                  {lang === 'en' ? 'Newest' : 'Nyeste først'}
                </option>
                <option value="oldest">
                  {lang === 'en' ? 'Oldest' : 'Ældste først'}
                </option>
              </select>
            </header>
            <main className="posts__grid">{renderPosts(posts, sortBy)}</main>
          </div>
        </div>
      </div>
      <WaveContainer />
    </>
  )
}
