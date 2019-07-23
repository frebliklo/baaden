import React, { useContext } from 'react'
import { Location } from '@reach/router'

import Card from './Card'
import WaveContainer from './WaveContainer'

import { Post } from '../../types'
import { AppContext } from '../App'

interface Props {
  posts: Post[]
}

function sortPosts(posts: Post[]) {
  return posts.sort((a, b) => {
    if (a.data.date > b.data.date) {
      return -1
    } else if (a.data.date < b.data.date) {
      return 1
    }
    return 0
  })
}

const Footer = ({ posts }: Props) => {
  const { lang } = useContext(AppContext)

  function renderPosts(posts: Post[], count: number) {
    const localizedPosts = posts.filter(post => post.data.language === lang)
    const sortedPosts = sortPosts(localizedPosts)
    const previewPosts = sortedPosts.slice(0, count)

    return previewPosts.map(post => (
      <Card key={post.data.slug} lang={lang} post={post} />
    ))
  }

  return (
    <Location>
      {({ location }) => {
        let numToPreview: number

        if (location.pathname !== '/') {
          numToPreview = 2
        } else {
          numToPreview = 4
        }

        return (
          <WaveContainer>
            <div className="container u-mt-lg">
              <div className="footer__content">
                <h2 className="footer__title">
                  {lang === 'en' ? 'Latest posts' : 'Seneste indlæg'}
                </h2>
                <div className="footer__grid">
                  {renderPosts(posts, numToPreview)}
                </div>
              </div>
            </div>
          </WaveContainer>
        )
      }}
    </Location>
  )
}

export default Footer
