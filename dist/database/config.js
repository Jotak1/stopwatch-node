"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const sequelize_1 = require("sequelize");
//conexion sequelize a postgres con usuario y contraseña
const sequelize = new sequelize_1.Sequelize('postgres://stopwatch:stopwatch@localhost:5432/stopwatch');
const dbConnection = () => {
    sequelize.authenticate()
        .then(() => console.log('DB connection successful'))
        .catch(err => console.log('DB connection error: ' + err));
};
exports.dbConnection = dbConnection;
exports.default = sequelize;
//# sourceMappingURL=config.js.map