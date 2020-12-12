import dotenv from "dotenv";
dotenv.config();

export const getEnironmentKey = (name: string): string => {
  const env = process.env[name];

  if (env) {
    return env;
  }

  const error = new Error(`${name} is not defined at .env file`);
  console.error(error);

  throw error;
};

const parseConfigUsers = (config: string): string[] => config.split(";");

export const allowedUsers: string[] = parseConfigUsers(
  getEnironmentKey("ALLOWED_USERS")
);

export const blockedUsers: string[] = parseConfigUsers(
  getEnironmentKey("BLOCKED_USERS")
);

export const URL = getEnironmentKey("URL");
export const PORT = getEnironmentKey("PORT");
export const FULL_URL = `${URL}:${PORT}`;

export const SESSION_COOKIE = getEnironmentKey("SESSION_COOKIE");
export const SESSION_MAX_AGE = getEnironmentKey("SESSION_MAX_AGE");
export const SESSION_SECRET = getEnironmentKey("SESSION_SECRET");

export const TARGET = getEnironmentKey("TARGET");
