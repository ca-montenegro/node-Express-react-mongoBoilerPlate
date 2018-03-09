import React, {Component} from "react";

class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h2> The player has {this.props.likes} likes in {this.props.cantidad} public pictures</h2>
            </div>
        );
    }
}

export default Results;