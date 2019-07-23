export const getCardSrcSet = (image: string) => {
  const imageBaseUrl = `${image}-/format/auto/-/preview/`
  const baseWidth = 448
  const baseHeight = 264
  return `${imageBaseUrl}${baseWidth}x${baseHeight}/, ${imageBaseUrl}${baseWidth *
    1.5}x${baseHeight * 1.5}/ 1.5x, ${imageBaseUrl}${baseWidth *
    2}x${baseHeight * 2}/ 2x`
}

export const getCardSrc = (image: string) => {
  const imageBaseUrl = `${image}-/format/auto/-/preview/`
  const baseWidth = 448
  const baseHeight = 264
  return `${imageBaseUrl}${baseWidth * 2}x${baseHeight * 2}/`
}

export const getImgSrcSet = (image: string) => {
  const imageBaseUrl = `${image}-/format/auto/-/scale_crop/`
  const baseWidth = 930
  const baseHeight = 700
  return `${imageBaseUrl}${baseWidth}x${baseHeight}/center/, ${imageBaseUrl}${baseWidth *
    1.5}x${baseHeight * 1.5}/center/ 1.5x, ${imageBaseUrl}${baseWidth *
    2}x${baseHeight * 2}/center/ 2x, ${imageBaseUrl}${baseWidth *
    3}x${baseHeight * 3}/center/ 3x`
}

export const getImgSrc = (image: string) => {
  const imageBaseUrl = `${image}-/format/auto/-/scale_crop/`
  const baseWidth = 930
  const baseHeight = 700
  return `${imageBaseUrl}${baseWidth * 2}x${baseHeight * 2}/center/`
}
