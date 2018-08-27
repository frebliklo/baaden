import styled from 'styled-components'
import { Link } from 'react-static'

import { theme } from '../constants'

const Button = styled(Link)`
  &,&:link,&:visited {
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    padding: .8rem 1.6rem;
    border-radius: 8px;
    
    position: relative;
    overflow: hidden;
    z-index: 500;

    outline: none;
    text-decoration: none;

    align-self: ${props => props.align};

    cursor: pointer;

    color: ${props => props.outline ? 'currentColor' : theme.colors.fg};
    border: ${props => props.outline ? '1px solid currentColor' : '1px solid #EEE'};
    background: ${props => props.outline ? 'none' : theme.colors.white};
    box-shadow: ${props => props.outline ? 'none' : theme.shadows.default};
    transition: color 150ms ease-in, background 150ms ease-in, box-shadow 150ms ease-in;
  }

  &:hover,&:focus {
    color: ${theme.colors.blueDark};
    background: ${theme.colors.white};
    box-shadow: ${props => props.outline ? 'none' : theme.shadows.hover};
    transition: color 200ms ease-out, background 200ms ease-out, box-shadow 200ms ease-out;
  }
`

export default Button
