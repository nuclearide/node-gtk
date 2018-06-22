export abstract class Component {
    public _element;
    public setProps(props: { [name: string]: any }) {

    }
    public appendChild(child: Component) {
        this._element.add(child.get());
        this._element.showAll();
    }
    public removeChild(child: Component) {
        this._element.remove(child.get());
        child.destroy();
    }
    public destroy() {
        this._element.destroy();
    }
    public get() {
        return this._element;
    }
}