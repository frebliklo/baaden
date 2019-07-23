import React from 'react'
import { Head } from 'react-static'

interface Props {
  title: string
}

const PageHead = (props: Props) => (
  <Head>
    <title>{props.title} | Båden</title>
  </Head>
)

export default PageHead
