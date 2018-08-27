import React, { Component } from 'react'
import styled from 'styled-components'

import Button from './Button'
import Card from './Card'
import Container from './Container'
import WaveContainer from './WaveContainer'

import { sizes } from '../constants'

const PostsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 200;
  padding: 0 1.6rem;
`

const PostsHeadline = styled.h2`
  margin-bottom: 2.4rem;
  font-size: 2.4rem;
  color: currentColor;

  @media (min-width: ${sizes.tabLand}) {
    text-align: center;
    font-size: 3.2rem;
  }
`

const PostsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 43rem));
  grid-gap: 3.2rem;
  justify-content: center;
  margin-bottom: 3.2rem;
`

class Footer extends Component {
  sortPosts = posts => posts.sort((a,b) => {
      if(a.data.date > b.data.date) {
        return -1
      } else if(a.data.date < b.data.date) {
        return 1
      } 
      return 0
    })

  renderPosts = (posts,count = 2) => {
    const sortedPosts = this.sortPosts(posts)
    const previewPosts = sortedPosts.slice(0,count)

    return previewPosts.map(post => (
        <Card
          key={post.data.title}
          date={post.data.date}
          excerpt={post.excerpt}
          image={post.data.thumbnail}
          title={post.data.title}
          url={`/posts/${post.data.slug}`}
        />
      )
    )
  }

  render() {
    const { count, posts } = this.props

    console.log(posts)

    return (
      <footer>
        <WaveContainer>
          <Container mt="6.4rem">
            <PostsContainer>
              <PostsHeadline>Seneste indlæg</PostsHeadline>
              <PostsGrid>
                {this.renderPosts(posts,count)}
              </PostsGrid>
              <Button align="stretch" to="/posts" outline>Se alle indlæg</Button>
            </PostsContainer>
          </Container>
        </WaveContainer>
      </footer>
    )
  }
}

export default Footer
