'use strict';

module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DB_URL || 'ec2-50-19-95-77.compute-1.amazonaws.com',
};
