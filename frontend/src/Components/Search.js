import React, {Component} from "react";
import {Grid, Row, Col} from 'react-flexbox-grid';
import ImagePrev from './ImagePrev.js';
import Results from "./Results.js";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user1: "",
            user2: "",
            userImg1: "",
            userImg2: "",
            userName1: "",
            userName2: "",
            ready1:0,
            ready2:0,
            jsonUs1: [],
            jsonUs2: [],
            cantImg1: 0,
            cantImg2: 0,
            count1: 0,
            count2: 0,
            winner: ""
        };
        this.baseState = this.state;

    }

    onclick() {
        const length1 = this.state.jsonUs1.length;
        const length2 = this.state.jsonUs2.length;
        console.log("size: " + length1);
        console.log("size: " + length2);
        var i = 0;
        var likes1 = 0;

        while (i < length1) {
            likes1 += this.state.jsonUs1[i].likes.count;
            i++;
        }

        var j = 0;
        var likes2 = 0;
        while (j < length2) {
            likes2 += this.state.jsonUs2[j].likes.count;
            j++;
        }
        const win = likes1>likes2?this.state.userName1 : this.state.userName2;
        this.setState({
            cantImg1: i + 1,
            cantImg2: j + 1,
            count1: likes1,
            count2: likes2,
            winner:win,
            ready1 : 0,
            ready2:0
        })

    }

    onKeyPress(evt){
        if(evt.key == "Enter")
            this.handleClick(evt);
    }

    resetVals() {
        this.setState(this.baseState);
    }

    updateInputValue1(evt) {
        this.setState({
            user1: evt.target.value
        });

    }

    updateInputValue2(evt) {
        this.setState({
            user2: evt.target.value
        })
    }

    verifyUser(){
        if(this.state.user1==this.state.user2)
            alert("The user input is the same, please use other");
    }

    handleClick(evt) {
        this.verifyUser();
        var userSearch = "";
        console.log("event: " + evt.target.value);
        if (evt.target.value === this.state.user1) {
            userSearch = this.state.user1;
        }
        else if (evt.target.value === this.state.user2) {
            userSearch = this.state.user2;
        }
        console.log(userSearch);
        fetch("https://instagram.com/" + userSearch + "/?__a=1")
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    window.alert("No se encontró al usuario especificado");
                }

                if (userSearch === this.state.user1) {

                    this.setState({
                        jsonUs1: data.user.media.nodes,
                        userImg1: data.user.profile_pic_url_hd,
                        userName1: data.user.full_name,
                        ready1:1
                    });
                    if(data.user.is_private) {
                        alert("The account "+this.state.user1+" is private, please use other");
                        this.setState({ready1:0});
                    }
                }
                else if (userSearch === this.state.user2) {

                    userSearch = this.state.user2;
                    this.setState({
                        jsonUs2: data.user.media.nodes,
                        userImg2: data.user.profile_pic_url_hd,
                        userName2: data.user.full_name,
                        ready2:1
                    });
                    if(data.user.is_private) {
                        alert("The account "+this.state.user2+" is private, please use other");
                        this.setState({ready2:0});
                    }
                }

            })
            .catch(error => {
                console.log("There has been a problem with your fetch operation: " + error.message);
            });
    }


    saveInDb() {


    }



    render() {

        return (
            <div className="container">
                <Row>
                    <Col sm={6} md={6} lg={6}>
                        <p>Input User 1</p>
                        <input type="text"
                               ref={(input) => this.input = input}
                               value={this.state.user1} onChange={this.updateInputValue1.bind(this)}
                               onKeyPress={this.onKeyPress.bind(this)}/>
                        <button className="button" type="submit" value={this.state.user1} disabled={!this.state.user1}
                                onClick={this.handleClick.bind(this)}>Submit User 1
                        </button>
                        {this.state.userImg1 !== "" &&
                        <ImagePrev userName={this.state.userName1} userImg={this.state.userImg1} ready = {this.state.ready1}/>}
                        {this.state.count1 !== 0 &&
                        <Results cantidad={this.state.cantImg1} likes={this.state.count1}/>
                        }
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                        <p>Input User 2</p>
                        <input type="text"
                               ref={(input) => this.input = input}
                               value={this.state.user2} onChange={this.updateInputValue2.bind(this)}
                               onKeyPress={this.onKeyPress.bind(this)}/>
                        <button className="button" type="submit" value={this.state.user2} disabled={!this.state.user2}
                                onClick={this.handleClick.bind(this)}>Submit User 2
                        </button>
                        {this.state.userImg2 !== "" &&
                        <ImagePrev userName={this.state.userName2} userImg={this.state.userImg2} ready = {this.state.ready2}  />}

                        {this.state.count2 !== 0 &&
                        <Results cantidad={this.state.cantImg2} likes={this.state.count2}/>}
                    </Col>
                </Row>
                {this.state.winner!=="" &&
                <h2>The winner is {this.state.winner}</h2>}
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Row center="xs md lg">
                            <Col sm={3} md={3} lg={3}>
                                {this.state.userName1 && this.state.userName2 &&
                                <button onClick={this.onclick.bind(this)}>
                                    Fight!!
                                </button>}
                            </Col>
                            <Col sm={3} md={3} lg={3}>
                                {this.state.userName1 && this.state.userName2 &&
                                <button onClick={this.resetVals.bind(this)}>
                                    Reset!!
                                </button>}
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </div>
        );
    }
}

export default Search;