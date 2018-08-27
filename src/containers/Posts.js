import React, { Component } from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'

import Container from '../components/Container'
import SiteHead from '../components/SiteHead'
import Card from '../components/Card';

const Page = styled.div`
  margin: 3.2rem 0 6.4rem 0;
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 44.8rem));
  grid-gap: 3.2rem;
  justify-content: center;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`

class Posts extends Component {
  state = {
    sortBy: 'newest'
  }

  onSelectChange = e => {
    this.setState({ sortBy: e.target.value })
  }

  sortPosts = (posts,sortBy) => {
    if(sortBy === 'newest') {
      return posts.sort((a,b) => {
        if(a.data.date > b.data.date) {
          return -1
        } else if(a.data.date < b.data.date) {
          return 1
        } 
        return 0
      })
    } else if(sortBy === 'oldest') {
      return posts.sort((a,b) => {
        if(a.data.date < b.data.date) {
          return -1
        } else if(a.data.date > b.data.date) {
          return 1
        } 
        return 0
      })
    }
    return posts
  }

  renderPosts = () => {
    const filter = this.state.sortBy
    const posts = this.props.posts

    const sortedPosts = this.sortPosts(posts,filter)

    return sortedPosts.map(post => (
      <Card
        key={post.data.title}
        date={post.data.date}
        excerpt={post.excerpt}
        image={post.data.thumbnail}
        title={post.data.title}
        url={`/posts/${post.data.slug}`}
      />
    ))
  }

  render() {
    console.log(this.props.posts)

    return (
      <div>
        <SiteHead title="Indlæg" />
        <Page>
          <Container>
            <TitleContainer>
              <h1>Indlæg</h1>
              <select onChange={this.onSelectChange}>
                <option value="newest">Nyeste først</option>
                <option value="oldest">Ældste først</option>
              </select>
            </TitleContainer>
            <Grid>
              {this.renderPosts()}
            </Grid>
          </Container>
        </Page>
      </div>
    )
  }
}

export default withRouteData(Posts)
