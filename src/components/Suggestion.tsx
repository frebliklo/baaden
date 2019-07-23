import React, { useContext, FunctionComponent } from 'react'
import { AppContext } from '../App'
import { Link } from '@reach/router'
import { Post as PostType } from '../../types'
import { theme } from '../constants'

interface Props {
  post: PostType
  direction?: 'next' | 'previous'
}

const Suggestion: FunctionComponent<Props> = ({ post, direction }) => {
  const { lang } = useContext(AppContext)
  const warpperClass =
    direction === 'next' ? 'suggestion suggestion__next' : 'suggestion'

  function getLabel() {
    if (lang === 'en') {
      return direction === 'next' ? 'Next post' : 'Previous post'
    } else {
      return direction === 'next' ? 'Næste indlæg' : 'Forrige indlæg'
    }
  }

  return (
    <Link to={`/posts/${post.data.slug}`} className={warpperClass}>
      {direction === 'next' && (
        <svg
          className="suggestion__arrow suggestion__arrow--next"
          width={48}
          height={48}
          viewBox="0 0 24 24"
        >
          <g
            fill={theme.colors.blueLight}
            stroke={theme.colors.blueLight}
            strokeLinecap="square"
            strokeWidth="2"
          >
            <polyline
              fill="none"
              points="14,16 10,12 14,8 "
              stroke={theme.colors.blueLight}
              transform="translate(0, 0)"
            />
          </g>
        </svg>
      )}
      <div>
        <span className="suggestion__label">{getLabel()}</span>
        <h4 className="suggestion__title">{post.data.title}</h4>
      </div>
      {direction !== 'next' && (
        <svg
          className="suggestion__arrow"
          width={48}
          height={48}
          viewBox="0 0 24 24"
        >
          <g
            fill={theme.colors.blueLight}
            stroke={theme.colors.blueLight}
            strokeLinecap="square"
            strokeWidth="2"
          >
            <polyline
              fill="none"
              stroke={theme.colors.blueLight}
              strokeMiterlimit="10"
              points="10,8 14,12 10,16 "
              transform="translate(0, 0)"
            />
          </g>
        </svg>
      )}
    </Link>
  )
}

export default Suggestion
