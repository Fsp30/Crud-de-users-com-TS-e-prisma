"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = require("./connections");
const routes_1 = __importDefault(require("./routes/routes"));
connections_1.app.use(routes_1.default);
connections_1.app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
