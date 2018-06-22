import { Component } from "./Component";

var { Gtk } = require('node-gir');

export class ListBoxItem extends Component {
    constructor() {
        super();
        this._element = new Gtk.ListBoxRow();
    }
    setProps(props) {
        console.log(props);
        if (typeof props.children == "string") {
            let label = new Gtk.Label();
            label.setText(props.children);
            this._element.add(label);
        }
    }
}