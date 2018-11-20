import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/App'
import styled from 'styled-components'
import GlobalStyle from  './global-styles'
import './css/style.css'

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

if (typeof(module.hot) !== 'undefined') {
  module.hot.accept() // Needed for Hot Module Replacement
}

ReactDOM.render(
  <AppWrapper>
    <App />
    <GlobalStyle />
  </AppWrapper>,
  document.getElementById('app')
)

