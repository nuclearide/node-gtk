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
var ListBoxItem = /** @class */ (function (_super) {
    __extends(ListBoxItem, _super);
    function ListBoxItem() {
        var _this = _super.call(this) || this;
        _this._element = new Gtk.ListBoxRow();
        return _this;
    }
    ListBoxItem.prototype.setProps = function (props) {
        console.log(props);
        if (typeof props.children == "string") {
            var label = new Gtk.Label();
            label.setText(props.children);
            this._element.add(label);
        }
    };
    return ListBoxItem;
}(Component_1.Component));
exports.ListBoxItem = ListBoxItem;
