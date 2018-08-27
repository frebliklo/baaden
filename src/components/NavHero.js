import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

import { theme, sizes } from '../constants'

const Porthole = styled(Link)`

  & .porthole {
    width: 2.4rem;
    height: 2.4rem;
    overflow: visible !important;

    &__sky {
      fill: ${theme.colors.blueLight};
      opacity: .2;
      transition: opacity 160ms ease-in;

      @media (min-width: ${sizes.tabLand}) { opacity: 0; }
    }

    &__ocean {
      fill: ${theme.colors.blueDark};
      opacity: 1;
      transition: opacity 160ms ease-in;

      @media (min-width: ${sizes.tabLand}) { opacity: .2; }
    }

    &__inner-shadow {
      fill: ${theme.colors.black};
      opacity: .05;
      transition: opacity 160ms ease-in;

      @media (min-width: ${sizes.tabLand}) { opacity: 0; }
    }

    &__outer-ring {
      fill: ${theme.colors.maroon};
      transition: fill 160ms ease-in;

      @media (min-width: ${sizes.tabLand}) { fill: ${theme.colors.maroonOpague}; }
    }

  }

  &:hover {
    
    & .porthole {
      &__sky {
        opacity: .5;
        transition: opacity 220ms ease-out;
      }
      
      &__ocean {
        opacity: 1;
        transition: opacity 220ms ease-out;
      }
      
      &__inner-shadow {
        opacity: .1;
        transition: opacity 220ms ease-out;
      }
      
      &__outer-ring {
        fill: ${theme.colors.maroon};
        transition: fill 220ms ease-out;
      }
    }

  }
`

const NavHero = () => (
  <Porthole to="/">
    <svg className="porthole" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path className="porthole__sky" d="M3.302 16C3.302 8.987 8.987 3.302 16 3.302c7.013 0 12.698 5.685 12.698 12.698 0 7.013-5.685 12.698-12.698 12.698-7.013 0-12.698-5.685-12.698-12.698z" fill="#33708D"/>
      <path className="porthole__ocean" d="M28.545 17.916C27.594 23.989 22.34 28.635 16 28.635c-5.975 0-10.984-4.127-12.338-9.683a16.069 16.069 0 0 1 5.671-1.047c4.797.012 5.778 2.296 9.969 1.841 3.058-.331 3.834-1.69 7.682-1.841.551-.022 1.074-.015 1.561.011z" fill="#122D41"/>
      <path className="porthole__inner-shadow" d="M25.316 7.371a12.6457 12.6457 0 0 0-8.11-2.927c-7.013 0-12.698 5.686-12.698 12.699a12.6469 12.6469 0 0 0 3.383 8.629A12.6706 12.6706 0 0 1 3.302 16C3.302 8.987 8.987 3.302 16 3.302a12.6618 12.6618 0 0 1 9.316 4.069z" opacity=".15"/>
      <path className="porthole__outer-ring" d="M16 .127C7.234.127.127 7.234.127 16c0 8.766 7.107 15.873 15.873 15.873 8.766 0 15.873-7.107 15.873-15.873C31.873 7.234 24.766.127 16 .127zm0 28.571C8.987 28.698 3.302 23.013 3.302 16 3.302 8.987 8.987 3.302 16 3.302c7.013 0 12.698 5.685 12.698 12.698 0 7.013-5.685 12.698-12.698 12.698z" fill="#7A5037" strokeWidth=".25" stroke="#262222" strokeMiterlimit="10"/>
      <path className="porthole__glass-refelction" d="M26.222 17.561a10.0462 10.0462 0 0 1-.875 2.96c-.22.471-.475.926-.762 1.36-.071.109-.142.219-.221.323l-.229.317c-.163.203-.322.41-.498.603l-.13.146a2.539 2.539 0 0 1-.132.143l-.273.281c-.19.178-.376.359-.577.526-.395.337-.813.645-1.252.923-.873.556-1.827.974-2.829 1.238.914-.442 1.785-.967 2.604-1.566.403-.299.79-.618 1.16-.957.371-.336.722-.694 1.05-1.071.171-.183.324-.381.484-.572.16-.19.306-.395.447-.602.142-.207.281-.414.419-.624l.196-.321c.064-.107.127-.217.191-.326.493-.888.903-1.819 1.227-2.781z" fill="#FFF" opacity=".2"/>
    </svg>
  </Porthole>
)

export default NavHero
