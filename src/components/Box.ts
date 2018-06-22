import { Component } from "./Component";

var { Gtk } = require('node-gir');

export class Box extends Component {
    constructor() {
        super();
        this._element = new Gtk.VBox();
    }
    setProps() {

    }
}