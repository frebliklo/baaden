import React, { useContext, useEffect } from 'react'
import Markdown from 'react-markdown'
import Moment from 'react-moment'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Post as PostType } from '../../types'
import Footer from '../components/Footer'
import PageHead from '../components/PageHead'
import { AppContext } from '../App'
import { getImgSrc } from '../utils/imgSrc'
import Suggestion from '../components/Suggestion'

const PostImage = ({ alt, src }: { alt: string; src: string }) => (
  <img alt={alt} src={getImgSrc(src)} srcSet={getImgSrc(src)} />
)

const renderers = {
  image: PostImage
}

const Post = () => {
  const { lang } = useContext(AppContext)
  const { post, posts }: { post: PostType; posts: PostType[] } = useRouteData()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [post])

  const localizedPosts = posts.filter(post => post.data.language === lang)
  const currentPostIndex = localizedPosts.findIndex(
    localized => localized.data.title === post.data.title
  )
  // const postsLength = localizedPosts.length - 1
  const nextPost = localizedPosts[currentPostIndex + 1]
  const prevPost = localizedPosts[currentPostIndex - 1]

  return (
    <>
      <PageHead title={post.data.title} />
      <div>
        <div className="post">
          <div className="container">
            <Link to="/posts" className="post__back">
              &larr;{' '}
              {lang === 'en' ? 'Back to all posts' : 'Tilbage til alle indlæg'}
            </Link>
            <h1 className="post__title u-mt-md">{post.data.title}</h1>
            <p className="post__subtitle">
              <span className="post__subtitle--timestamp">
                <Moment format="DD. MMM, YYYY">{post.data.date}</Moment>
              </span>
              <span>{' | '}</span>
              <a
                className="post__subtitle--author"
                href="https://www.instagram.com/vhvh/"
              >
                Julie Valentin-Hjorth
              </a>
            </p>
            <main className="post__content">
              <Markdown
                source={post.content}
                escapeHtml={false}
                renderers={renderers}
              />
            </main>
            <div className="post__more">
              <div className="post__more--row">
                {nextPost && <Suggestion post={nextPost} direction="next" />}
                {prevPost && <Suggestion post={prevPost} />}
              </div>
              <Link to="/posts" className="post__back">
                &larr;{' '}
                {lang === 'en'
                  ? 'Back to all posts'
                  : 'Tilbage til alle indlæg'}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer posts={posts} />
    </>
  )
}

export default Post
