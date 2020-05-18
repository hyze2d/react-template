/**
 * Build enviroment
 */
const enviroment = {
  stage: process.env.stage,
  development: process.env.NODE_ENV != 'production'
};

export { enviroment };
