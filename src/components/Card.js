import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'
import Moment from 'react-moment'

import Button from './Button'

import { theme } from '../constants'

const Wrapper = styled(Link)`
  position: relative;
  overflow: hidden;
  box-shadow: ${theme.shadows.default};
  border-radius: .8rem;
  padding: 1.2rem 1.6rem;
  background: linear-gradient(to bottom, #FFF 0%, #FFF 30%, rgba(255,255,255,.05) 100%);
  transition: box-shadow 200ms ease-in;
  text-decoration: none;

  &:hover {
    box-shadow: ${theme.shadows.hover};
    transition: box-shadow 220ms ease-out;
  }
`

const Title = styled.h3`
  position: relative;
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: .8rem;
  z-index: 100;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 92%;
    height: .2rem;
    background: ${theme.colors.blueLight};
  }
`

const Date = styled.h5`
  font-size: 1.4rem;
  font-style: italic;
  margin-bottom: .8rem;
  z-index: 100;
`

const Excerpt = styled.p`
  font-size: 1.6rem;
  padding-bottom: 8rem;
  z-index: 100;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -5;
`

const Card = ({ date, excerpt, image, title, url }) => (
  <Wrapper to={url}>
    <Title>{title}</Title>
    <Date><Moment format="DD. MMM, YYYY">{date}</Moment></Date>
    <Excerpt>{excerpt}</Excerpt>
    <Image src={image} />
    <Button to={url} style={{ float: 'right' }}>Se mere</Button>
  </Wrapper>
)

export default Card
