import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./Components/Search.js";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user1: "",
            jsonUs1:[],
            user2: "",
            jsonUs2:[],
        };
    }

    countLikes(){
        console.log("count:"+this.state.jsonUs1.find((element)=>{
            return element="likes".toArray();
        }));
    }
    onSearch1(user){
        const self = this;
        let datos = [];
        this.setState({user1:user});
        console.log(user)
        fetch("https://www.instagram.com/" +user+"/?__a=1")
            .then((res)=>res.json())
            .then((data)=> {
                console.log(data)
                if(data.error){
                    window.alert("No se encontró al usuario especificado");
                }
                this.setState({jsonUs1:data.user.media.nodes});
                //jsonUs1.toArray().
                this.countLikes();
            })
            .catch(error  => {
                console.log("There has been a problem with your fetch operation: "+ error.message);
            });
    }
    onSearch2(user){
        const self = this;
        let datos = [];
        this.setState({user2:user});
        console.log(user)
        fetch("https://www.instagram.com/" + user+"/?__a=1")
            .then((res)=>res.json())
            .then((data)=> {
                console.log(data)
                if(data.error){
                    window.alert("No se encontró al usuario especificado");
                }
                this.setState({jsonUs2:data.user.media.nodes});
                //jsonUs1.toArray().
                console.log(data.user.media.nodes[0].likes.count);
            } )
            .catch(error  => {
                console.log('There has been a problem with your fetch operation: '+ error.message);
            });
    }

    componentDidMount() {

        console.log(this.props.user1);
        this.setState({user1:this.props.user1, user2: this.props.user2});

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Search onSearch1={this.onSearch1.bind(this)} onSearch2={this.onSearch2.bind(this)} />
            </div>
        );
    }
}

export default App;
