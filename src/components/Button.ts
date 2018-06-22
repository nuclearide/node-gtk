import { Component } from "./Component";
var { Gtk } = require('node-gir');

export class Button extends Component {
    _onClick: (...args) => any;
    constructor() {
        super();
        this._element = new Gtk.Button();
        // this._element.getStyleContext().addClass('flat');
        this._element.connect('clicked', (...args) => this._onClick && this._onClick(...args));
    }
    setProps(props) {
        this._element.setLabel(props.children);
        this._onClick = props.onClick;
    }
}