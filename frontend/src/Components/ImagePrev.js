import React, {Component} from "react";

class ImagePrev extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userImg: this.props.userImg,
            userName: this.props.userName
        }
    }

    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <img src={this.props.userImg} alt={this.props.userName}
                     style={{"borderRadius": "50%", "horizontal-align": "center"}}/>
                <h1>{this.props.userName}</h1>
                {this.props.ready===1 && <h3>Ready</h3>}
            </div>
        );
    }
}

export default ImagePrev;
