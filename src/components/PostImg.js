import React from 'react'

import { getImgSrc, getImgSrcSet } from '../utils/imageSrc'

const PostImg = ({ alt, src }) => {
  console.log(src)
  return (
    <img
      alt={alt}
      src={getImgSrc(src)}
      srcSet={getImgSrcSet(src)}
    />
  )
}

export default PostImg
