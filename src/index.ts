var { Gtk } = require('node-gir');
var Gdk = require('node-gir').load('Gdk', '3.0');

var Reconciler = require('react-reconciler');
import * as React from 'react';
import { ListBoxItem } from './components/ListBoxItem';
import { ListBox } from './components/ListBox';
import { Button } from './components/Button';
import { Box } from './components/Box';
import { Window } from './components/Window';

var emptyObject = require('fbjs/lib/emptyObject');
const Components = {
    GTKBOX: Box,
    GTKBUTTON: Button,
    GTKLISTBOX: ListBox,
    GTKLISTITEM: ListBoxItem
};

const rootHostContext = {};
const childHostContext = {};

const hostConfig = {
    now: Date.now,
    getRootHostContext: () => {
        return rootHostContext;
    },
    prepareForCommit: () => { },
    resetAfterCommit: () => { },
    getChildHostContext: () => {
        return childHostContext;
    },
    shouldSetTextContent: (type, props) => {
        return typeof props.children === 'string' || typeof props.children === 'number';
    },
    createInstance: (type, newProps, rootContainerInstance, _currentHostContext, workInProgress) => {
        let component = new Components[type]();
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
    createTextInstance: text => {
        let label = new Gtk.Label(text);
        // console.log("========================", label.getText(), "================");
        return label;
    },
    appendInitialChild: (parent, child) => {
        // console.log("appendInitialChild", parent, child);
        parent.appendChild(child);
    },
    appendChild(parent, child) {
        // console.log("appendChild", parent, child);
        parent.appendChild(child);
    },
    finalizeInitialChildren: (domElement, type, props) => { },
    supportsMutation: true,
    appendChildToContainer: (parent, child) => {
        parent.appendChild(child);
        // console.log("appendChildToContainer", parent, child);
        // parent.appendChild(child);
    },
    prepareUpdate(domElement, oldProps, newProps) {
        return true;
    },
    commitUpdate(child, updatePayload, type, oldProps, newProps) {
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
    commitTextUpdate(textInstance, oldText, newText) {
        textInstance.text = newText;
    },
    removeChild(parentInstance, child) {
        // console.log(child, "================");
        parentInstance.removeChild(child);
    },
    removeChildFromContainer(parent, child) {
        parent.removeChild(child);
    }
};

var MyRenderer = new Reconciler(hostConfig);

let node = MyRenderer.createContainer(new Window());

var provider = new Gtk.CssProvider();
provider.loadFromPath('test.css');
Gtk.StyleContext.addProviderForScreen(Gdk.Screen.getDefault(), provider, 600);

export function render(element) {
    // console.log(node);
    MyRenderer.updateContainer(element, node, null);
    Gtk.main();
}

export * from './components';