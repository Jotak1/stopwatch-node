"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLapsByName = exports.postLaps = void 0;
const stopwatch_1 = __importDefault(require("../models/stopwatch"));
const postLaps = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, laps } = req.body;
    console.log(name, laps);
    try {
        const stopwatch = yield stopwatch_1.default.create({
            name,
            laps,
        });
        res.status(200).json({
            code: 200,
            data: stopwatch,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "Error al guardar los datos",
            data: {},
        });
    }
});
exports.postLaps = postLaps;
const getLapsByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    try {
        const stopwatch = yield stopwatch_1.default.findAll({
            where: {
                name,
            },
        });
        res.status(200).json({
            code: 200,
            data: stopwatch,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "Error al obtener los datos",
            data: {},
        });
    }
});
exports.getLapsByName = getLapsByName;
//# sourceMappingURL=stopwatch.js.map