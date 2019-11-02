
import * as React from 'react'
import { Provider } from 'react-redux';
import store from '../redux/index.store';
import { createGlobalStyle } from 'styled-components'
import HomeContent from './component/content/index.content'

const AppProvider = () => (
  <Provider store={store}>
    <GlobalStyle />
    <HomeContent/>
  </Provider>
);

const GlobalStyle = createGlobalStyle`
  body{
    box-sizing: border-box;
    background-color: #0e2439;
    font-family: "Source Sans Pro","Helvetica Neue",Helvetica,sans-serif;
    font-size: 14px;
  }
`

export default AppProvider