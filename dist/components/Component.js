"use strict";
exports.__esModule = true;
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.setProps = function (props) {
    };
    Component.prototype.appendChild = function (child) {
        this._element.add(child.get());
        this._element.showAll();
    };
    Component.prototype.removeChild = function (child) {
        this._element.remove(child.get());
        child.destroy();
    };
    Component.prototype.destroy = function () {
        this._element.destroy();
    };
    Component.prototype.get = function () {
        return this._element;
    };
    return Component;
}());
exports.Component = Component;
