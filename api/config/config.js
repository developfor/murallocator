import Joi from 'joi';

require('dotenv').config();

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'test'])
    .default('development'),
  PORT: Joi.number()
    .default(3001),
  MONGO_HOST: Joi.string()
    .default('mongodb://localhost:27017/murallocator')
    .description('Mongo DB host url'),
  MONGO_PORT: Joi.number()
    .default(27017),
  MONGOOSE_DEBUG: Joi.boolean()
    .when('NODE_ENV', {
      is: Joi.string().equal('development'),
      then: Joi.boolean().default(true),
      otherwise: Joi.boolean().default(false),
    }),
}).unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}


const DB_CONFIG = {
  development: {
    HOST: 'mongodb://localhost:27017/murallocator-dev',
    port: 27017,
  },
  test: {
    HOST: 'mongodb://localhost:27017/murallocator-test',
    port: 27017,
  },
  production: {
    HOST: envVarsSchema.MONGO_HOST,
    port: envVarsSchema.MONGO_PORT,
  },
};

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  mongo: {
    host: DB_CONFIG[envVars.NODE_ENV].HOST,
    port: DB_CONFIG[envVars.NODE_ENV].PORT,
  },
};

export default config;
