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
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super.call(this) || this;
        _this._element = new Gtk.Button();
        // this._element.getStyleContext().addClass('flat');
        _this._element.connect('clicked', function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this._onClick && _this._onClick.apply(_this, args);
        });
        return _this;
    }
    Button.prototype.setProps = function (props) {
        this._element.setLabel(props.children);
        this._onClick = props.onClick;
    };
    return Button;
}(Component_1.Component));
exports.Button = Button;
