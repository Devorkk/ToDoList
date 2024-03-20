"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Llista = void 0;
var cli_ts_1 = require("./cli.ts");
var Llista = /** @class */ (function () {
    function Llista() {
        this.items = [];
    }
    Llista.prototype.add = function (name, isChecked, id) {
        if (isChecked === void 0) { isChecked = false; }
        if (id === void 0) { id = this.items.length + 1; }
        var newItem = { name: name, isChecked: isChecked, id: id };
        this.items.push(newItem);
    };
    Llista.prototype.check = function (itemId, isChecked) {
        this.items[itemId - 1].isChecked = isChecked;
    };
    Llista.prototype.uncheck = function (itemId) {
        this.items[itemId - 1].isChecked = false;
    };
    Llista.prototype.remove = function (itemId) {
        this.items = this.items.filter(function (item) { return item.id !== itemId; });
    };
    Llista.prototype.getAll = function () {
        return __spreadArray([], this.items, true);
    };
    return Llista;
}());
exports.Llista = Llista;
(0, cli_ts_1.promptAction)();
