// path: ./config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "primary.database--9dq4vh6zrxzp.addon.code.run"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "_c05c7eca8974"),
      user: env("DATABASE_USERNAME", "_a7a01b096b61db14"),
      password: env("DATABASE_PASSWORD", "_43662da0dc34f5ac94ab747d01517b"),
    },
    debug: false,
  },
});
