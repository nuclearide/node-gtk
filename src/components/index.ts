const Button = "GTKBUTTON";
const Box = "GTKBOX";
const ListBox = "GTKLISTBOX";
const ListItem = "GTKLISTITEM";
const Window = "GTKWINDOW";

interface GTKComponentProps {
    children?: string | JSX.Element | JSX.Element[];
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            GTKBUTTON: { onClick?: () => any, test?: any } & GTKComponentProps;
            GTKBOX: {} & GTKComponentProps;
            GTKLISTBOX: {} & GTKComponentProps;
            GTKLISTITEM: { key?: number } & GTKComponentProps;
            GTKWINDOW: GTKComponentProps;
        }
    }
}

export {
    Button,
    Box,
    ListBox,
    ListItem,
    Window
};