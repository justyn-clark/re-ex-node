import React from 'react'
import styled from 'styled-components'


const StyledDiv = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 5em;
  text-align: center;
  color: white;
`;

const H2 = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;


const App = () => {
  return (
    <StyledDiv>
      <H1>Express + React + Webpack + Jest</H1>
      <H2>Bare-bones Express and Webpack boilerplate with ES6 + babel transpilation, ESLint linting, Hot Module Reloading, and Jest test framework enabled.</H2>
    </StyledDiv>
  )
}

export default App
