import React, {Component} from "react";
import {Grid, Row, Col} from 'react-flexbox-grid';

class TableResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            records: []
        }
        ;
    }

    componentDidMount() {
        fetch("/getFights")
            .then((res) => {
                if (res.status !== 200) {
                    console.log("Error getting data");
                }
                return res.json();
            })
            .then((json) => {
                this.setState({records: json});

            });
    }


    renderEntry(pUser1, pUser2, pLikes1, pLikes2, pWinner) {
        return <Entry key={pUser1 + pUser2} user1={pUser1} user2={pUser2}
                      likes1={pLikes1} likes2={pLikes2} winner={pWinner}/>;
    }

    render() {
        return (
            <div>

                <Row>

                        <Col sm={4} md={4} lg={4}>
                            <h3>Player 1</h3>
                        </Col>
                        <Col sm={1} md={1} lg={1}>
                            <h3>Likes</h3>
                        </Col>
                        <Col sm={4} md={4} lg={4}>
                            <h3>Player 2</h3>
                        </Col>
                        <Col sm={1} md={1} lg={1}>
                            <h3>Likes</h3>
                        </Col>
                        <Col sm={2} md={2} lg={2}>
                            <h3>Big Winner</h3>
                        </Col>

                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        {this.state.records.map((data) => this.renderEntry(
                            data.us1,
                            data.us2,
                            data.likes1,
                            data.likes2,
                            data.winnerFight))}
                    </Col>
                </Row>
            </div>
        );
    }
}

class Entry extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm={4} md={4} lg={4}>

                        <h5>{this.props.user1}</h5>
                    </Col>
                    <Col sm={1} md={1} lg={1}>

                        <h5>{this.props.likes1}</h5>
                    </Col>
                    <Col sm={4} md={4} lg={4}>

                        <h5>{this.props.user2}</h5>
                    </Col>
                    <Col sm={1} md={1} lg={1}>

                        <h5>{this.props.likes2}</h5>
                    </Col>
                    <Col sm={2} md={2} lg={2}>
                        <h5>{this.props.winner}</h5>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TableResults;