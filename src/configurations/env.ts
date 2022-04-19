import dotenv from 'dotenv';
import { existsSync } from 'fs';

const exists = existsSync('/data/.env');

dotenv.config({ path: exists ? '/data/.env' : undefined });

export const get = (key: string) => process.env[key];
