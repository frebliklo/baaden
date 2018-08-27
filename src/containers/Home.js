import React from 'react'
import { withSiteData } from 'react-static'
import styled from 'styled-components'

import Button from '../components/Button'
import Container from '../components/Container'
import IndexHero from '../components/IndexHero'
import SiteHead from '../components/SiteHead'
import WaveContainer from '../components/WaveContainer'

import { sizes } from '../constants'

const PostsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 200;
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

const Home = () => (
  <div>
    <SiteHead title="Båden" />
    <main>
      <IndexHero />
      <WaveContainer>
        <Container mt="6.4rem">
          <PostsContainer>
            <PostsHeadline>Seneste indlæg</PostsHeadline>
            <div>Her skal der være en masse posts...</div>
            <Button align="stretch" to="/posts" outline>Se alle indlæg</Button>
          </PostsContainer>
        </Container>
      </WaveContainer>
    </main>
  </div>
)

export default withSiteData(Home)
