import React, { useContext, useRef, useEffect } from 'react'
import { Link } from '@reach/router'
import Porthole from './Porthole'
import { AppContext } from '../App'

const Nav = () => {
  const selectRef = useRef()
  const { lang, setLang } = useContext(AppContext)

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault()

    setLang(e)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [lang])

  return (
    <nav className="container">
      <div className="nav">
        <Link to="/" className="nav__hero">
          <Porthole />
        </Link>
        <ul className="nav__list">
          <li className="nav__item">
            <select
              ref={selectRef}
              className="nav__select"
              name="language"
              value={lang}
              onChange={onChange}
            >
              <option value="da">🇩🇰 Dansk</option>
              <option value="en">🇬🇧 English</option>
            </select>
          </li>
          <li className="nav__item">
            <Link to="/posts" className="nav__link">
              {lang === 'en' ? 'Posts' : 'Indlæg'}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              {lang === 'en' ? 'About' : 'Om'}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
