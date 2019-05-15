/* eslint-disable react/no-unused-state */
import React, { Component } from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
//
import Routes from 'react-static-routes'

import Nav from './components/Nav'

import './sanitize.css'
import './app.css'

export const PostContext = React.createContext({
  sortBy: 'newest',
  changeSortBy: () => {}
})

const AppContainer = styled.div`
  overflow: hidden;
`

class App extends Component {
  constructor(props) {
    super(props)

    this.changeSortBy = e => {
      this.setState({ sortBy: e.target.value })
    }

    this.state = {
      sortBy: 'newest',
      changeSortBy: this.changeSortBy
    }
  }
  
  render() {
    return (
      <Router>
        <PostContext.Provider value={this.state}>
          <AppContainer>
            <Nav />
            <div>
              <Routes />
            </div>
          </AppContainer>
        </PostContext.Provider>
      </Router>
    )
  }
}

export default hot(module)(App)
