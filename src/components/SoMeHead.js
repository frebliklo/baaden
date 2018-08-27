import React from 'react'
import { Head } from 'react-static'

import { baseUrl } from '../constants'

const SoMeHead = ({ title, excerpt, image, url }) => (
  <Head>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={excerpt} />
    <meta property="og:image" content={`${baseUrl}${image}`} />
    <meta property="og:url" content={`${baseUrl}${url}`} />
  </Head>
)

export default SoMeHead
