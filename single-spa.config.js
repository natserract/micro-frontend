import { registerApplication, start } from 'single-spa'


registerApplication(
  'vue', 
  () => import('./src/@app.micro-vue/index.vue.js'),
  (location) => location.pathname === "/" || location.pathname === "/vue" 
);

registerApplication(
  // Name of our single-spa application
  'react',
  // loadingFunction
  () => import('./src/@app.micro-react/index.react.js'),
  // activityFunction
  (location) =>
    location.pathname === "/" ||
    location.pathname.startsWith('/react')
);


start();