"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("postgres://postgres:1234@localhost:5432/stopwatch");
const User = sequelize.define("users", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    laps: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 15],
        },
    },
}, {
    timestamps: false,
});
exports.default = User;
//# sourceMappingURL=stopwatch.js.map