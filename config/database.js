module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "mysql2"),
    connection: {
      host: env("ydweb-db.mysql.database.azure.com"),
      port: env.int("3306"),
      database: env("yd-cms"),
      user: env("ydweb_master"),
      password: env("Dw3t3CF77vrm-XsKeCbicjYT6TRch@t*YTpN3fNjFHUnbYx*MR9N"),
      ssl: env.bool('DATABASE_SSL', true) && {
        key: env('DATABASE_SSL_KEY', undefined),
        cert: env('DATABASE_SSL_CERT', undefined),
        ca: env('DATABASE_SSL_CA', undefined),
        capath: env('DATABASE_SSL_CAPATH', undefined),
        cipher: env('DATABASE_SSL_CIPHER', undefined),
        rejectUnauthorized: env('DATABASE_SSL_REJECT_UNAUTHORIZED', false)
      }
    },
  },
});
