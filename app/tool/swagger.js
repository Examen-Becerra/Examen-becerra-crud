import swaggerAutogen from 'swagger-autogen';
import { config } from 'dotenv';
config();

let port = process.env.PORT

const doc = {
  info: {
    title: 'My API PAGO',
    description: 'Description'
  },
  host: 'localhost:3008'
};

const outputFile = './swagger-output.json';
const routes = ['../routes/routes_pago', '../routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);