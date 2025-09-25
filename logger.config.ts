import pino from 'pino';
import { APP_STAGE, AppStageEnum, LOKI_BASIC_AUTH, LOKI_HOST, LOKI_USERNAME } from './constants';

const localTransport = {
  target: 'pino-pretty',
  options: {
    colorize: true,
    translateTime: 'SYS:standard',
    ignore: 'pid,hostname',
    labels: {
      environment: APP_STAGE,
    },
  },
  level: 'debug',
};

const onlineTransport = {
  target: 'pino-loki',
  options: {
    batching: true,
    interval: 5,
    host: LOKI_HOST,
    labels: {
      job: 'http-to-smtp-bridge',
      environment: APP_STAGE,
    },
    basicAuth: {
      username: LOKI_USERNAME,
      password: LOKI_BASIC_AUTH,
    },
  },
};

const transports: pino.TransportTargetOptions[] = [];
if (APP_STAGE === AppStageEnum.LOCAL) {
  transports.push(localTransport);
} else {
  transports.push(onlineTransport);
}

const logger = pino({
  redact: {
    paths: ['*.password', '*.Password', '*.PASSWORD', 'password'],
    censor: '[Redacted]',
    remove: true,
  },
  transport: {
    targets: transports,
  },
});

export default logger;
