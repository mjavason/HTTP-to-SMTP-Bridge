import dotenv from 'dotenv';

dotenv.config({
  path: './.env',
});

export enum AppStageEnum {
  LOCAL = 'local',
  STAGING = 'staging',
  PROD = 'prod',
}

export const PORT = process.env.PORT || 5000;
export const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
export const APP_STAGE = process.env.APP_STAGE || AppStageEnum.LOCAL;

export const SMTP_HOST = process.env.SMTP_HOST || 'smtp.example.com';
export const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
export const SMTP_ADDRESS = process.env.SMTP_ADDRESS || 'user@example.com';
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD || 'password';
export const APP_PASSWORD = process.env.APP_PASSWORD || 'app_password';

export const LOKI_HOST = process.env.LOKI_HOST || 'http://localhost:3100';
export const LOKI_USERNAME = process.env.LOKI_USERNAME || 'admin';
export const LOKI_BASIC_AUTH = process.env.LOKI_BASIC_AUTH || 'password';
