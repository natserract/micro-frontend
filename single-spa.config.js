import { registerApplication, start } from 'single-spa'

registerApplication(
  // Name of our single-spa application
  'user',
  // loadingFunction
  () => import('./src/user/user.app.js'),
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/user')
);

registerApplication(
    // Name of our single-spa application
    'admin',
    // loadingFunction
    () => import('./src/admin/admin.app.js'),
    // activityFunction
    (location) => location.pathname === "" || 
      location.pathname === "/" || 
      location.pathname.startsWith('/admin')
  );

start();