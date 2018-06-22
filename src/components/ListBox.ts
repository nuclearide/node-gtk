var { Gtk } = require('node-gir');

export class ListBox {
    _listBox: any;
    constructor() {
        this._listBox = new Gtk.ListBox();
    }
    setProps(props) {

    }
    get() {
        return this._listBox;
    }
    destroy() {
        this._listBox.destroy();
    }
    appendChild(child) {
        this._listBox.insert(child.get(), 0);
        this._listBox.showAll();
    }
    removeChild(child) {
        this._listBox.remove(child.get());
        child.destroy();
        this._listBox.showAll();
    }
}