import { Component } from "./Component";

var { Gtk } = require('node-gir');

export class Window extends Component {
    constructor() {
        super();
        this._element = new Gtk.Window({
            type: Gtk.WindowType.TOPLEVEL,
            title: 'Node.JS Gtk Window'
        });
    }
    setProps(props) {
        // let label = new Gtk.Label();
        // label.setText(props.children);
        // console.log(props.children);
        // this._listItem.add(props.children);
    }
}