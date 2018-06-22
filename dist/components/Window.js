"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Component_1 = require("./Component");
var Gtk = require('node-gir').Gtk;
var Window = /** @class */ (function (_super) {
    __extends(Window, _super);
    function Window() {
        var _this = _super.call(this) || this;
        _this._element = new Gtk.Window({
            type: Gtk.WindowType.TOPLEVEL,
            title: 'Node.JS Gtk Window'
        });
        return _this;
    }
    Window.prototype.setProps = function (props) {
        // let label = new Gtk.Label();
        // label.setText(props.children);
        // console.log(props.children);
        // this._listItem.add(props.children);
    };
    return Window;
}(Component_1.Component));
exports.Window = Window;
