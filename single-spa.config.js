import { registerApplication, start, declare, triggerAppChange } from 'single-spa'

registerApplication(
  // Name of our single-spa application
  'react',
  // loadingFunction
  () => import('./src/@app.micro-react/index.react.js'),
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/react')
);

registerApplication(
    // Name of our single-spa application
    'vue',
    // loadingFunction
    () => import('./src/@app.micro-vue/index.vue.js'),
    // activityFunction
    (location) => location.pathname === "" || 
      location.pathname === "/" || 
      location.pathname.startsWith('/vue')
  );

start();
triggerAppChange()