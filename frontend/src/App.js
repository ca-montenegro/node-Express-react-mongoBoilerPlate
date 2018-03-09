import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./Components/Search.js";
import TableResults from "./Components/TableResults.js";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <br/>
                    <br/>
                    <h2 className="App-title">Likes fight in Instagram</h2>
                </header>
                <Search/>
                <br/>
                <br/>
                <h3>Records Table</h3>
                <TableResults/>
            </div>
        );
    }
}

export default App;
