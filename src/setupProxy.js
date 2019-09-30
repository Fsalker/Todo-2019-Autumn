const proxy = require('http-proxy-middleware');

const backendHost = 'http://host.docker.internal' && 'http://localhost';
const backendPortMain = process.env.BACKEND_PORT_MAIN || 666;
const backendPortColorOfTheDay = process.env.BACKEND_PORT_COLOR_OF_THE_DAY || 1338;

const backendAddressMain = `${backendHost}:${backendPortMain}`;
const backendAddressColorOfTheDay = `${backendHost}:${backendPortColorOfTheDay}`;
// const backendAddressColorOfTheDay = 'http://localhost:1338';


module.exports = (app) => {
  app.use([
    '/colors',
    '/userToColor',
  ], proxy({
    target: `${backendAddressColorOfTheDay}/`,
    changeOrigin: true,
  }));

  app.use([
    '/auth/register',
    '/auth/login',
    '/users',
    '/projects',
    '/userToProject',
  ], proxy({
    target: `${backendAddressMain}/`,
    changeOrigin: true,
  }));
};
