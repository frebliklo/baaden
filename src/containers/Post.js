import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import Moment from 'react-moment'
import Markdown from 'react-markdown'

import Container from '../components/Container'
import Footer from '../components/Footer'
import PostImg from '../components/PostImg'
import SiteHead from '../components/SiteHead'
import SoMeHead from '../components/SoMeHead'

import { theme, sizes } from '../constants'

const Article = styled.article`
  margin: 1.6rem 0 6.4rem 0;
  min-height: 60vh;
`

const Title = styled.h1`
  font-size: 4.8rem;
  line-height: 1.167;
  text-align: center;
  margin: 1.6rem 0;

  @media (min-width: ${sizes.tabPort}) { margin-bottom: 1.6rem 0 .8rem 0; }
`

const SubTitle = styled.h3`
  font-size: 1.6rem;
  color: ${theme.colors.fg};
  text-align: center;
`

const Timestamp = styled.span`
  font-size: inherit;
  font-style: italic;
  color: currentColor;
  margin-right: .4rem;
`

const Author = styled.a`
  &,&:link,&:visited {
    font-size: inherit;
    text-decoration: none;
    color: currentColor;
    margin-left: .4rem;
  }

  &:hover,&:focus {
    color: ${theme.colors.black};
  }
`

const Content = styled(Markdown)`
  margin-top: 2.4rem;

  @media (min-width: ${sizes.tabLand}) { margin-top: 6.4rem; }

  & img {
    width: 100%;
    object-fit: fill;
    box-shadow: ${theme.shadows.image};
    border-radius: 2px;
    margin-bottom: .8rem;
  }

  & ul {
    margin-bottom: 1.6rem;
    padding: 0 2.4rem;

    & li {
      margin-bottom: .4rem;
    }

  }
`

const renderers = {
  image: PostImg
}

const Post = ({ post, posts }) => (
  <div>
    <Article>
      <SiteHead title={post.data.title} />
      <SoMeHead
        title={post.data.title}
        excerpt={post.excerpt}
        image={post.data.thumbnail}
        url={`/posts/${post.data.slug}`}
      />
      <Container>
        <Title>{post.data.title}</Title>
        <SubTitle>
          <Timestamp><Moment format="DD. MMM, YYYY">{post.data.date}</Moment></Timestamp>
          |
          <Author href="https://www.instagram.com/vhvh/">Julie Valentin-Hjorth</Author>
        </SubTitle>
        <Content
          source={post.content}
          escapeHtml={false}
          renderers={renderers}
        />
      </Container>
    </Article>
    <Footer posts={posts} count={2} />
  </div>
)

export default withRouteData(Post)
