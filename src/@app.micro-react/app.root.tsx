
import * as React from 'react'
import { Provider } from 'react-redux';
import store from '../redux/index.store';
import RootApp from './pages/home/index.home';
import { createGlobalStyle } from 'styled-components'

const AppProvider = () => (
    <Provider store={store}>
        <RootApp />
        <GlobalStyle/>
    </Provider>
);

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    background-color: #0e2439;
  }
`

export default AppProvider