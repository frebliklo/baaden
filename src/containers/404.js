import React from 'react'
import styled from 'styled-components'

import SiteHead from '../components/SiteHead'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 32rem;
  min-height: 32vh;
  margin-top: 8rem;
`

const SubTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 2.4rem;
`

const NotFound = () => (
  <Container>
    <SiteHead title="404 ikke fundet" />
    <h1>404</h1>
    <SubTitle>Side ikke fundet :(</SubTitle>
    <p>Du fandt da lige en side, som ikke findes. Flot klaret!</p>
  </Container>
)

export default NotFound
