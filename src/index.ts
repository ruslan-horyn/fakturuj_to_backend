import 'reflect-metadata';
import dotenv from 'dotenv';
import App from './app';

dotenv.config();

const app = new App();

function startApp() {
  app.listen();
}

startApp();
