"use strict";
exports.__esModule = true;
var Gtk = require('node-gir').Gtk;
var ListBox = /** @class */ (function () {
    function ListBox() {
        this._listBox = new Gtk.ListBox();
    }
    ListBox.prototype.setProps = function (props) {
    };
    ListBox.prototype.get = function () {
        return this._listBox;
    };
    ListBox.prototype.destroy = function () {
        this._listBox.destroy();
    };
    ListBox.prototype.appendChild = function (child) {
        this._listBox.insert(child.get(), 0);
        this._listBox.showAll();
    };
    ListBox.prototype.removeChild = function (child) {
        this._listBox.remove(child.get());
        child.destroy();
        this._listBox.showAll();
    };
    return ListBox;
}());
exports.ListBox = ListBox;
