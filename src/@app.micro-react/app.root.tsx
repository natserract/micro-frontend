
import * as React from 'react'
import { Provider } from 'react-redux';
import store from '../redux/index.store';
import { createGlobalStyle } from 'styled-components'
import Test from './component/test.component'

const AppProvider = () => (
  <Provider store={store}>
    <GlobalStyle />
    <div style={{ marginTop: 100 }}>
      <Test />
    </div>
  </Provider>
);

const GlobalStyle = createGlobalStyle`
  body{
    box-sizing: border-box;
    font-family: "Source Sans Pro","Helvetica Neue",Helvetica,sans-serif;
    font-size: 14px;
  }
`

export default AppProvider