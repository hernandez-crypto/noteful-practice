/* eslint-disable quotes */
module.exports = {
  PORT: process.env.PORT || 8000,
  DATABASE_URL:
    process.env.DATABASE_URL || 'postgresql://dunder_mifflin@localhost/noteful',
  TEST_DATABASE_URL:
    process.env.TEST_DATABASE_URL ||
    'postgresql://dunder_mifflin@localhost/noteful-test',
};
