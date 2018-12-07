import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'

import Button from './Button'

import { theme } from '../constants'

import { getCardSrcSet, getCardSrc } from '../utils/imageSrc'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
  position: relative;
  overflow: hidden;
  box-shadow: ${theme.shadows.default};
  border-radius: .8rem;
  background: linear-gradient(to bottom, #FFF 0%, #FFF 30%, rgba(255,255,255,.05) 100%);
  transition: box-shadow 200ms ease-in;
  text-decoration: none;
  padding: 1.2rem 1.6rem;
  color: ${theme.colors.fg};

  &:hover,&:focus {
    box-shadow: ${theme.shadows.hover};
    transition: box-shadow 220ms ease-out;
  }
`

const Title = styled.h3`
  position: relative;
  font-size: 2.4rem;
  line-height: 1.25;
  font-weight: 600;
  margin-bottom: .8rem;
  padding-bottom: .4rem;
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
  <CardWrapper>
    <div>
      <Title>{title}</Title>
      <Date><Moment format="DD. MMM, YYYY">{date}</Moment></Date>
      <Excerpt>{excerpt}</Excerpt>
    </div>
    <Image
      srcSet={getCardSrcSet(image)}
      src={getCardSrc(image)}
    />
    <Button to={url} align="flex-end">Se mere</Button>
  </CardWrapper>
)

export default Card
