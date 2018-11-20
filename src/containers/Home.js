import React from 'react'
import { withRouteData } from 'react-static'

import Footer from '../components/Footer'
import IndexHero from '../components/IndexHero'
import SiteHead from '../components/SiteHead'

const Home = ({ posts }) => (
  <div>
    <SiteHead title="Båden" />
    <main>
      <IndexHero />
    </main>
    <Footer posts={posts} count={4} />
  </div>
)

export default withRouteData(Home)
