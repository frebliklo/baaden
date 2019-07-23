import React, { useContext } from 'react'
import PageHead from '../components/PageHead'
import Footer from '../components/Footer'
import { useRouteData } from 'react-static'
import BoatIllustration from '../components/BoatIllustration'
import { AppContext } from '../App'

export default () => {
  const { lang } = useContext(AppContext)
  const { posts } = useRouteData()

  const translation = {
    first: {
      da: 'Jeg',
      en: 'I'
    },
    building: {
      da: 'bygger',
      en: 'am building'
    },
    boat: {
      da: 'har bygget en mini-motorbåd',
      en: 'built a mini motor boat'
    }
  }

  return (
    <>
      <div className="home">
        <PageHead title="Bølgemis" />
        <main className="home__content">
          <h1 className="home__title">
            {lang === 'en' ? 'The Boat' : 'Båden'}
          </h1>
          <h2 className="home__subtitle">
            {lang === 'en' ? translation.first.en : translation.first.da}{' '}
            <span>
              {lang === 'en'
                ? translation.building.en
                : translation.building.da}
            </span>{' '}
            {lang === 'en' ? translation.boat.en : translation.boat.da}
            {/* Jeg <span>bygger</span> har bygget en mini-motorbåd */}
          </h2>
          <BoatIllustration />
        </main>
      </div>
      <Footer posts={posts} />
    </>
  )
}
