import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Router } from 'express';
import { configEnv } from './config/configEnv';
import { routers } from './routers/api/v1';
import { errorMiddleware } from './middleware/error.middleware';
import { notFoundMiddleware } from './middleware/notFound.middleware';

export default class App {
  private readonly app: Application = express();

  private readonly port: number = configEnv.port;

  private readonly appRouters: Router[] = routers;

  constructor() {
    this.initializeMiddleware();
    this.initializeRouters();
    this.initializeNotFoundHandling();
    this.initializeErrorHandling();
  }

  private initializeMiddleware() {
    this.app
      .use(cors())
      .use(express.json())
      .use(express.urlencoded({ extended: true }))
      .use(cookieParser())
      .use(express.static('static'));
  }

  private initializeRouters() {
    this.appRouters.forEach((router) => {
      this.app.use('/api/v1', router);
    });
  }

  private initializeNotFoundHandling() {
    this.app.use(notFoundMiddleware);
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  listen() {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(
        `App listening on the port ${this.port}`,
      );
    });
  }
}
