import React from 'react'
import { Head } from 'react-static'

import { theme } from '../constants'

const SiteHead = ({ title }) => (
  <Head>
    <meta name="theme-color" content={theme.colors.blueDark} />
    <link rel="apple-touch-icon" sizes="180x180" href={require('../assets/favicon/apple-touch-icon.png')} />
    <link rel="touch-icon" sizes="180x180" href={require('../assets/favicon/touch-icon.png')} />
    <link rel="icon" type="image/png" sizes="32x32" href={require('../assets/favicon/favicon-32x32.png')} />
    <link rel="icon" type="image/png" sizes="16x16" href={require('../assets/favicon/favicon-16x16.png')} />
    <link rel="mask-icon" href={require('../assets/favicon/safari-pinned-tab.svg')} color={theme.colors.blueDark} />
    <link rel="shortcut icon" href={require('../assets/favicon/favicon-16x16.png')} />
    <title>Båden | {title}</title>
    <link href="https://fonts.googleapis.com/css?family=Catamaran:400,500,700,800,900" rel="stylesheet" />
  </Head>
)

export default SiteHead
