import ApiError from "./apiError";
export { catchAsync } from "./catchError";
export { logger } from "./logger";
export { morganErrorHandler, morganSuccessHandler } from "./morgan";
export { ApiError };
export const APP_PORT = process.env.PORT || 1011;
export const IS_PRODUCTION = process.env.APP_ENV !== "development";
export const DB_URI = process.env.DB_URI;
export const IS_TEST = process.env.APP_ENV === "test";
export const DB = {
  HOST: process.env.HOST,
  NAME: process.env.NAME,
  PASSWORD: process.env.PASSWORD,
  USER: process.env.USER,
  PORT: process.env.PORT,
};

export const APP_NAME = process.env.APP_NAME;
export const APP_PREFIX_PATH = process.env.APP_PREFIX_PATH;
