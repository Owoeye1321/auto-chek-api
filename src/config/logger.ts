import winston from "winston";
import { IS_PRODUCTION } from "@/config";

const enumerateErrorFormat = winston.format((info: any) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

export const logger = winston.createLogger({
  level: IS_PRODUCTION ? "info" : "debug",
  format: winston.format.combine(
    enumerateErrorFormat(),
    winston.format.colorize(),
    winston.format.splat(),
    winston.format.printf(({ level, message }) => `${level}: ${message}`)
  ),
  transports: [
    new winston.transports.Console({
      stderrLevels: ["error"],
    }),
  ],
});

