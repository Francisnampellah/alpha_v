import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

export const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new DailyRotateFile({
      filename: 'access-%DATE%.log',
      dirname: '/var/log/shambabora',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '500m',
      maxFiles: '14d'
    })
  ]
});

// // Example usage
// logger.info('This is an info message');
// logger.error('This is an error message');