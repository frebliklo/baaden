import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 96rem;
  margin: 0 auto;
  padding: 0 1.6rem;
  margin-top: ${props => props.mt}
`

export default Container
