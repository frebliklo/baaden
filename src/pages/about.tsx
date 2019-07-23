import React, { useContext } from 'react'
import { Link } from '@reach/router'
import PageHead from '../components/PageHead'
import Footer from '../components/Footer'
import { useRouteData } from 'react-static'
import { AppContext } from '../App'

const About = () => {
  const { lang } = useContext(AppContext)
  const { posts } = useRouteData()

  const trans = {
    title: {
      da: 'Hvad foregår der?!?',
      en: "What's going on?!?"
    },
    builtABoat: {
      da:
        'Jeg har bygger en lille motorbåd. Det betyder laser-skæring, 3D-printing, voldsomme mængder epoxy, blod, sved og tårer, men forhåbentlig også en masse morskab hen på sensommeren.',
      en:
        "I've built a small motorboat. That means laser-cuttin, 3D-printing, insane amounts of epoxy, blood, sweat and tears, but hopefully also a lot of fun."
    },
    interest: {
      da:
        'Hvis det har fanget din interesse, eller hvis du drømmer om at gøre det samme, kan du se med her, hvor jeg har dokumenteret min process.',
      en:
        "If this has peaked your interest or you dream about doind the same the follow along here, where I've documented my process."
    },
    plans: {
      da: `Planerne stammer fra firmaet Rapid Whale, og du kan se mere på`,
      en: `The plans are from the company Rapid Whale and you can find more at`
    },
    website: {
      da: `Rapid Whale's hjemmeside`,
      en: `Rapid Whale's website`
    },
    cta: {
      da: 'Lad mig se',
      en: 'Check it  out'
    }
  }

  return (
    <>
      <main className="about">
        <PageHead title="Om" />
        <div className="about__content">
          <div className="about__boat">
            <img
              src="https://ucarecdn.com/94553188-8408-4abd-ad98-a3a7849a7a0d/-/format/auto/-/preview/600x640/"
              alt="Image of the boat"
            />
          </div>
          <div className="about__text">
            <h1>{lang === 'en' ? trans.title.en : trans.title.da}</h1>
            <p>{lang === 'en' ? trans.builtABoat.en : trans.builtABoat.da}</p>
            <p>{lang === 'en' ? trans.interest.en : trans.interest.da}</p>
            <p>
              {lang === 'en' ? trans.plans.en : trans.plans.da}{' '}
              <a href="http://rapidwhale.com/mini-boat.php">
                {lang === 'en' ? trans.website.en : trans.website.da}
              </a>
            </p>
            <p>- Julie</p>
            <Link to="/" className="button u-align-start u-mt-sm">
              {lang === 'en' ? trans.cta.en : trans.cta.da}
            </Link>
          </div>
        </div>
      </main>
      <Footer posts={posts} />
    </>
  )
}

export default About
