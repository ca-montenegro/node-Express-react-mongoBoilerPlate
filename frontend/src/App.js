import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./Components/Search.js";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user1: "",
            jsonUs1: [],
            userCount1: 0,
            user2: "",
            jsonUs2: [],
            userCount2: 0,
            cantPlay: 2
        };
    }

    countLikes(user) {
        const length = this.state.jsonUs1.length;
        console.log("size: " + length);
        var i = 0;
        var count = 0;
        console.log(this.state.jsonUs1[0]);

        while (i < length) {
            count += this.state.jsonUs1[i].likes.count;
            i++;
        }
        return count;
    }

    onSearch1(user) {
        const self = this;
        let datos = [];
        this.setState({user1: user});
        console.log(user)
        fetch("https://www.instagram.com/" + user + "/?__a=1")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.error) {
                    window.alert("No se encontró al usuario especificado");
                }
                this.setState({jsonUs1: data.user.media.nodes});
                this.countLikes(user);
            })
            .catch(error => {
                console.log("There has been a problem with your fetch operation: " + error.message);
            });
    }

    onSearch2(user) {
        const self = this;
        let datos = [];
        this.setState({user2: user});
        console.log(user)
        fetch("https://www.instagram.com/" + user + "/?__a=1")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.error) {
                    window.alert("No se encontró al usuario especificado");
                }
                this.setState({jsonUs2: data.user.media.nodes});
                //jsonUs1.toArray().
                console.log(data.user.media.nodes[0].likes.count);
            })
            .catch(error => {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
    }

    componentDidMount() {

        console.log(this.props.user1);
        this.setState({user1: this.props.user1, user2: this.props.user2});

    }

    handleSelection(event) {
        this.setState = ({cantPlay: event.target.value});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <br/>
                    <br/>
                    <h2 className="App-title">Likes fight in Instagram</h2>
                </header>

                <Search onSearch1={this.onSearch1.bind(this)} onSearch2={this.onSearch2.bind(this)}/>
            </div>
        );
    }
}

export default App;
