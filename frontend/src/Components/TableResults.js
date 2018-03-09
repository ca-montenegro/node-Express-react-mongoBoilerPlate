import React, {Component} from "react";
import {Grid, Row, Col} from 'react-flexbox-grid';

class TableResults extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        Player 1
                    </Col>
                    <Col>
                        Player 2
                    </Col>
                    <Col>
                        Winner
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TableResults;