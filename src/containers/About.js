import React from 'react'
import styled from 'styled-components'

import Button from '../components/Button'
import SiteHead from '../components/SiteHead'

import boatImg from '../assets/about/boat.png'

import { sizes } from '../constants'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Boat = styled.div`
  object-fit: contain;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 460px;
  padding: 1.6rem;

  @media (min-width: ${sizes.tabLand}) { margin-left: 1.6rem; }

  & h1 {
    font-size: 2.4rem;

    @media (min-width: ${sizes.tabPort}) { font-size: 3.2rem; }
  }
`

const About = () => (
  <Page>
    <SiteHead title="Om" />
    <Content>
      <Boat>
        <img src={boatImg} alt="Flot billed af båden" />
      </Boat>
      <Text>
        <h1>Hvad foregår der?!?</h1>
        <p>Jeg bygger en lille motorbåd. Det betyder laser-skæring, 3D-printing, voldsomme mængder epoxy, blod, sved og tårer, men forhåbentlig også en masse morskab hen på sensommeren.</p>
        <p>Hvis det har fanget din interesse, eller hvis du drømmer om at gøre det samme, kan du se med her, hvor jeg dokumenterer min process.</p>
        <p>Planerne stammer fra firmaet Rapid Whale, og du kan se mere på <a href="http://rapidwhale.com/mini-boat.php" target="_blank">Rapid Whale's hjemmeside</a></p>
        <p>- Julie</p>
        <Button align="flex-start" to="/">Lad mig se</Button>
      </Text>
    </Content>
  </Page>
)

export default About
