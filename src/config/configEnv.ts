import convict from 'convict';
import { appEnvironments } from './constants';

const tempConfig = convict({
  port: {
    env: 'PORT',
    format: Number,
    default: 3000,
  },
  nodeEnv: {
    env: 'NODE_ENV',
    format: Object.values(appEnvironments),
    default: appEnvironments.DEV,
  },
})
  .validate({ allowed: 'strict' });

export const configEnv = tempConfig.getProperties();
