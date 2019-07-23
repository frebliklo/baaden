import React, { useState } from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import './sanitize.css'
import './styles/main.scss'

import Nav from './components/Nav'
import { AppContextInterface } from '../types'

export const AppContext = React.createContext({
  sortBy: 'newest',
  changeSortBy: (_e: React.ChangeEvent<HTMLSelectElement>) => {},
  lang: 'da',
  setLang: (_e: React.ChangeEvent<HTMLSelectElement>) => {}
})

function App() {
  const [sortBy, setSortBy] = useState('newest')
  const [lang, setLang] = useState('da')

  function updateSort(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(e.target.value)
  }

  function updateLang(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault()

    setLang(e.target.value)
  }

  const contextValue: AppContextInterface = {
    sortBy,
    changeSortBy: updateSort,
    lang,
    setLang: updateLang
  }

  return (
    <Root>
      <AppContext.Provider value={contextValue}>
        <Nav />
        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </AppContext.Provider>
    </Root>
  )
}

export default App
