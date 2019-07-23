import React from 'react'
import { Link } from '@reach/router'
import Moment from 'react-moment'

import { getCardSrc, getCardSrcSet } from '../utils/imgSrc'

import { Post } from '../../types'

interface Props {
  lang?: string
  post: Post
}

const Card = ({ post, lang, ...rest }: Props) => {
  return (
    <div {...rest} className="card">
      <div>
        <h3 className="card__title">{post.data.title}</h3>
        <h5 className="card__date">
          <Moment format="DD. MMM, YYYY">{post.data.date}</Moment>
        </h5>
        <p className="card__excerpt">{post.excerpt}</p>
      </div>
      <img
        src={getCardSrc(post.data.thumbnail)}
        srcSet={getCardSrcSet(post.data.thumbnail)}
        className="card__img"
      />
      <Link to={`/posts/${post.data.slug}`} className="button u-align-end">
        {lang && lang === 'en' ? 'Read more' : 'Se mere'}
      </Link>
    </div>
  )
}

export default Card
