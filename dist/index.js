"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
var Gtk = require('node-gir').Gtk;
var Gdk = require('node-gir').load('Gdk', '3.0');
var Reconciler = require('react-reconciler');
var ListBoxItem_1 = require("./components/ListBoxItem");
var ListBox_1 = require("./components/ListBox");
var Button_1 = require("./components/Button");
var Box_1 = require("./components/Box");
var Window_1 = require("./components/Window");
var emptyObject = require('fbjs/lib/emptyObject');
var Components = {
    GTKBOX: Box_1.Box,
    GTKBUTTON: Button_1.Button,
    GTKLISTBOX: ListBox_1.ListBox,
    GTKLISTITEM: ListBoxItem_1.ListBoxItem
};
var rootHostContext = {};
var childHostContext = {};
var hostConfig = {
    now: Date.now,
    getRootHostContext: function () {
        return rootHostContext;
    },
    prepareForCommit: function () { },
    resetAfterCommit: function () { },
    getChildHostContext: function () {
        return childHostContext;
    },
    shouldSetTextContent: function (type, props) {
        return typeof props.children === 'string' || typeof props.children === 'number';
    },
    createInstance: function (type, newProps, rootContainerInstance, _currentHostContext, workInProgress) {
        var component = new Components[type]();
        component.setProps(newProps);
        return component;
        // const domElement = document.createElement(type);
        // Object.keys(newProps).forEach(propName => {
        //     const propValue = newProps[propName];
        //     if (propName === 'children') {
        //         if (typeof propValue === 'string' || typeof propValue === 'number') {
        //             domElement.textContent = propValue;
        //         }
        //     } else if (propName === 'onClick') {
        //         domElement.addEventListener('click', propValue);
        //     } else if (propName === 'className') {
        //         domElement.setAttribute('class', propValue);
        //     } else {
        //         const propValue = newProps[propName];
        //         domElement.setAttribute(propName, propValue);
        //     }
        // });
        // return domElement;
    },
    createTextInstance: function (text) {
        var label = new Gtk.Label(text);
        // console.log("========================", label.getText(), "================");
        return label;
    },
    appendInitialChild: function (parent, child) {
        // console.log("appendInitialChild", parent, child);
        parent.appendChild(child);
    },
    appendChild: function (parent, child) {
        // console.log("appendChild", parent, child);
        parent.appendChild(child);
    },
    finalizeInitialChildren: function (domElement, type, props) { },
    supportsMutation: true,
    appendChildToContainer: function (parent, child) {
        parent.appendChild(child);
        // console.log("appendChildToContainer", parent, child);
        // parent.appendChild(child);
    },
    prepareUpdate: function (domElement, oldProps, newProps) {
        return true;
    },
    commitUpdate: function (child, updatePayload, type, oldProps, newProps) {
        // console.log("commitUpdate", child, updatePayload, type, oldProps, newProps);
        child.setProps(newProps);
        // Object.keys(newProps).forEach(propName => {
        //     const propValue = newProps[propName];
        //     if (propName === 'children') {
        //         if (typeof propValue === 'string' || typeof propValue === 'number') {
        //             domElement.textContent = propValue;
        //         }
        //     } else {
        //         const propValue = newProps[propName];
        //         domElement.setAttribute(propName, propValue);
        //     }
        // });
    },
    commitTextUpdate: function (textInstance, oldText, newText) {
        textInstance.text = newText;
    },
    removeChild: function (parentInstance, child) {
        // console.log(child, "================");
        parentInstance.removeChild(child);
    },
    removeChildFromContainer: function (parent, child) {
        parent.removeChild(child);
    }
};
var MyRenderer = new Reconciler(hostConfig);
var node = MyRenderer.createContainer(new Window_1.Window());
var provider = new Gtk.CssProvider();
provider.loadFromPath('test.css');
Gtk.StyleContext.addProviderForScreen(Gdk.Screen.getDefault(), provider, 600);
function render(element) {
    // console.log(node);
    MyRenderer.updateContainer(element, node, null);
    Gtk.main();
}
exports.render = render;
__export(require("./components"));
