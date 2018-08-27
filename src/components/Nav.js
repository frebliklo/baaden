import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'

import Container from './Container'
import NavHero from './NavHero'

import { theme } from '../constants'

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.4rem 0;
`

const NavList = styled.ul`
  display: flex;
`

const NavItem = styled.li`
  padding: 0 .4rem;
  overflow: hidden;

  &:not(:first-child) {
    margin-left: 1.6rem;
  }

  & .nav__link {
    position: relative;

    &,&:link,&:visited {
      text-decoration: none;
      color: ${theme.colors.grey};
      transition: color 150ms ease-in;
    }

    &::after {
      content: '';
      position: absolute;
      left: -2px;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: ${theme.colors.grey};
      transform: translateX(-120%);
      transition: transform 150ms ease-in, background 150ms ease-in;
    }

    &:hover {
      color: ${theme.colors.fg};
      transition: color 200ms ease-out;
  
      &::after {
        background: ${theme.colors.fg};
        transform: translateX(-40%);
        transition: transform 200ms ease-out, background 200ms ease-out;
      }
    }

    &:active,&:focus {
      color: ${theme.colors.black};
      transition: color 175ms ease-in-out;
  
      &::after {
        transform: translateX(-10%);
        transition: transform 175ms ease-in-out;
      }
    }
  
    &--active {

      &,&:link,&:visited {
        color: ${theme.colors.black};
      }

      &::after {
        background: ${theme.colors.fg};
        transform: translateX(0%);
      }
    }
  }
`

const Nav = () => (
  <Container>
    <NavContainer>
      <NavHero />
      <NavList>
        <NavItem>
          <Link to="/posts" className="nav__link" activeClassName="nav__link--active">Indlæg</Link>
        </NavItem>
        <NavItem>
          <Link to="/about" className="nav__link" activeClassName="nav__link--active">Om</Link>
        </NavItem>
      </NavList>
    </NavContainer>
  </Container>
)

export default Nav
