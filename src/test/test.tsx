import * as React from 'react';
import { render, Box, Button, ListBox, ListItem, Window } from "../";

class App extends React.Component<{}, { n: number }> {
    constructor(props) {
        super(props);
        this.state = { n: 0 };
    }
    items() {
        var items = [];
        for (var i = 0; i < this.state.n; i++) {
            items.push(<ListItem key={i}><Button>{i.toString()}</Button></ListItem>);
        }
        return items;
    }
    render() {
        return (
            <Box>
                <Button>test =></Button>
                <Button>test</Button>
                <Button>test</Button>
                <Button>test</Button>
            </Box>
        );
    }
    componentDidMount() {
        // setInterval(() => {
        //     this.setState({ on: !this.state.on });
        // }, 500);
    }
}
render(<App />);