import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
//
import Routes from 'react-static-routes'

import Nav from './components/Nav'

import './sanitize.css'
import './app.css'

const AppContainer = styled.div`
  overflow: hidden;
`

const App = () => (
  <Router>
    <AppContainer>
      <Nav />
      <div>
        <Routes />
      </div>
    </AppContainer>
  </Router>
)

export default hot(module)(App)
