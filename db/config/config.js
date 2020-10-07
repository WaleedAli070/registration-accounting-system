module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "storage": "db/efficiency_ra_db.db",
    "host": "127.0.0.1",
    "dialect": "sqlite",
    "logging": console.log
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "sqlite"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "sqlite"
  }
}
