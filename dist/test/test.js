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
var React = require("react");
var __1 = require("../");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { n: 0 };
        return _this;
    }
    App.prototype.items = function () {
        var items = [];
        for (var i = 0; i < this.state.n; i++) {
            items.push(React.createElement(__1.ListItem, { key: i },
                React.createElement(__1.Button, null, i.toString())));
        }
        return items;
    };
    App.prototype.render = function () {
        return (React.createElement(__1.Box, null,
            React.createElement(__1.Button, null, "test =>"),
            React.createElement(__1.Button, null, "test"),
            React.createElement(__1.Button, null, "test"),
            React.createElement(__1.Button, null, "test")));
    };
    App.prototype.componentDidMount = function () {
        // setInterval(() => {
        //     this.setState({ on: !this.state.on });
        // }, 500);
    };
    return App;
}(React.Component));
__1.render(React.createElement(App, null));
