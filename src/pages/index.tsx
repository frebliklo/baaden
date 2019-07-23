import React from 'react'
import PageHead from '../components/PageHead'
import Footer from '../components/Footer'
import { useRouteData } from 'react-static'
import BoatIllustration from '../components/BoatIllustration'

export default () => {
  const { posts } = useRouteData()

  return (
    <>
      <div className="home">
        <PageHead title="Bølgemis" />
        <main className="home__content">
          <h1 className="home__title">Båden</h1>
          <h2 className="home__subtitle">
            Jeg <span>bygger</span> har bygget en mini-motorbåd
          </h2>
          <BoatIllustration />
        </main>
      </div>
      <Footer posts={posts} />
    </>
  )
}
