"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stopwatch_1 = require("../controllers/stopwatch");
const router = (0, express_1.Router)();
router.post('/', stopwatch_1.postLaps);
router.get('/:name', stopwatch_1.getLapsByName);
exports.default = router;
//# sourceMappingURL=stopwatch.js.map