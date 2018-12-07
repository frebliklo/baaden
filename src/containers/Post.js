import React, { Component } from 'react'
import { withRouteData, Link } from 'react-static'
import styled from 'styled-components'
import Moment from 'react-moment'
import Markdown from 'react-markdown'

import Container from '../components/Container'
import Footer from '../components/Footer'
import SiteHead from '../components/SiteHead'
import SoMeHead from '../components/SoMeHead'
import SuggestionCard from '../components/SuggestionCard'
import WaveContainer from '../components/WaveContainer'

import { theme, sizes } from '../constants'

import { getImgSrc } from '../utils/imageSrc'
import Button from '../components/Button';

const Article = styled.article`
  margin: 1.6rem 0 4.8rem 0;
  min-height: 60vh;
`

const BackLink = styled(Link)`
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: .8rem;
  padding: .4rem;
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

const MoreSection = styled(Container)`
  margin-bottom: 6.4rem;
  text-align: center;
`

const RowContainer = styled(Container)`
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.4rem;
  padding: 0;
  text-align: left;
`

const Content = styled(Markdown)`
  margin-top: 2.4rem;

  @media (min-width: ${sizes.tabLand}) { margin-top: 6.4rem; }

  & img {
    max-width: 100%;
    object-fit: contain;
    box-shadow: ${theme.shadows.image};
    border-radius: 2px;
    margin: auto;
    z-index: 900;
  }

  & ul {
    margin-bottom: 1.6rem;
    padding: 0 2.4rem;

    & li {
      margin-bottom: .4rem;
    }

  }
`

const PostImage = ({ alt, src }) => <img alt={alt} src={getImgSrc(src)} srcSet={getImgSrc(src)} />

const renderers = {
  image: PostImage
}

class Post extends Component {
  state = {
    nextPost: undefined,
    prevPost: undefined
  }

  componentWillReceiveProps() {
    const { post: currentPost, posts } = this.props
    const currentPostIndex = posts.findIndex(post => post.data.title === currentPost.data.title)
    const postsLength = posts.length - 1
    const nextPost = posts[currentPostIndex + 1] < postsLength ? null : posts[currentPostIndex + 1]
    this.setState(() => ({
      nextPost,
      prevPost: posts[currentPostIndex - 1]
    }))
    // console.log(this.props.posts.length)
    // console.log(this.props.posts[currentPostIndex])
    // console.log(this.props.posts)
  }

  render() {
    const { post } = this.props
    const { nextPost, prevPost } = this.state

    return (
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
            <BackLink to="/posts">&larr; Alle indlæg</BackLink>
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
        <MoreSection>
          <RowContainer>
            {nextPost && <SuggestionCard post={nextPost} direction="next" />}
            {prevPost && <SuggestionCard post={prevPost} />}
          </RowContainer>
          <BackLink to="/posts">&larr; Alle indlæg</BackLink>
        </MoreSection>
        <footer>
          <WaveContainer />
        </footer>
      </div>
    )
  }
}

export default withRouteData(Post)
