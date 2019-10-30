import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import RootProvider from './app.root';

function domElementGetter() {
  return document.getElementById("microservice-app-react")
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: RootProvider,
  domElementGetter,
})

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];