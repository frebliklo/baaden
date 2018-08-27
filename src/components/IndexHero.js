import React from 'react'
import styled from 'styled-components'

import BoatSVG from './BoatSVG'

import { theme, sizes } from '../constants'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.fg};
  text-align: center;
  max-width: 96rem;
  margin: 1.6rem auto 1.6rem auto;
  padding: 0 1.6rem;
  overflow: hidden;

  @media (min-width: ${sizes.tabLand}) { margin: 5.6rem auto 9.6rem auto; }
`

const Title = styled.h1`
  font-size: 8.8rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  background: ${theme.gradients.text};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: ${sizes.tabPort}) { font-size: 9.6rem; }
`

const SubTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 400;
`

const IndexHero = () => (
  <Header>
    <Title>Båden</Title>
    <SubTitle>Jeg bygger en mini-motorbåd</SubTitle>
    <BoatSVG />
  </Header>
)

export default IndexHero
