import React from 'react'
import { Link } from '@reach/router'

import PageHead from '../components/PageHead'

const NotFound = () => {
  return (
    <div className="not-found">
      <PageHead title="404 ikke fundet" />
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Side ikke fundet :(</h2>
      <p className="not-found__body">
        Du fandt da lige en side, som ikke findes. Flot klaret!
      </p>
      <Link to="/" className="button u-align-center u-mt-sm">
        &larr; Tilbage
      </Link>
    </div>
  )
}

export default NotFound
