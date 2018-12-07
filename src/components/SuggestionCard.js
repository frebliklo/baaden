import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'
import { theme, sizes } from '../constants'

const CardWrapper = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.direction === 'next' ? 'flex-start' : 'space-between'};
  align-items: center;
  max-width: 40rem;
  min-width: 26rem;
  box-shadow: ${theme.shadows.default};
  border-radius: .8rem;
  background: ${theme.colors.white};
  transition: box-shadow 200ms ease-in;
  text-decoration: none;
  margin-bottom: 1.6rem;
  margin-left: 0;
  padding: ${props => props.direction === 'next' ? '1.2rem .8rem' : '1.2rem .8rem 1.2rem 1.6rem'};
  color: ${theme.colors.fg};
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${sizes.tabLand}) { 
    margin-left: ${props => props.direction === 'next' ? 0 : '2.4rem'};  
  }

  &:hover,&:focus {
    box-shadow: ${theme.shadows.hover};
    transition: box-shadow 220ms ease-out;
  }
`

const Arrow = styled.svg`
  min-width: 4.8rem;
  min-height: 4.8rem;
  margin-right: ${props => props.next ? '.4rem' : 0};
`

const Label = styled.h4`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${theme.colors.blueDark};
`

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  max-width: 22rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${sizes.tabLand}) {
    max-width: 30rem;
  }
`

const SuggestionCard = ({ post, direction }) => (
  <CardWrapper to={`/posts/${post.data.slug}`} direction={direction}>
    {direction === 'next' && (
      <Arrow width={48} height={48} viewBox="0 0 24 24" next>
        <g fill={theme.colors.blueLight} stroke={theme.colors.blueLight} strokeLinecap="square" strokeWidth="2">
          <polyline fill="none" points="14,16 10,12 14,8 " stroke={theme.colors.blueLight} transform="translate(0, 0)"/>
        </g>
      </Arrow>
    )}
    <div>
      <Label>{direction === 'next' ? 'Næste indlæg' : 'Forrige indlæg'}</Label>
      <Title>{post.data.title}</Title>
    </div>
    {direction !== 'next' && (
      <Arrow width={48} height={48} viewBox="0 0 24 24">
        <g fill={theme.colors.blueLight} stroke={theme.colors.blueLight} strokeLinecap="square" strokeWidth="2">
          <polyline fill="none" stroke={theme.colors.blueLight} strokeMiterlimit="10" points="10,8 14,12 10,16 " transform="translate(0, 0)" />
        </g>
      </Arrow>
    )}
  </CardWrapper>
)

export default SuggestionCard
