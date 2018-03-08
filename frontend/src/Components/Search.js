import React, {Component} from "react";

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user1: "",
      user2: ""
    };

  }

  onclick() {
    console.log(this.state.user1, this.state.user2);
    this.props.onSearch1(this.state.user1);
    this.props.onSearch2(this.state.user2);
  }

  updateInputValue1(evt) {
    this.setState({
      user1: evt.target.value
    });
  }

  updateInputValue2(evt) {
    this.setState({
      user2: evt.target.value
    });
  }

  //this.addAccessory = this.addAccessory.bind(this);


  render() {

    return (
      <div className="SearchBox">
        <div className="container">
          <p>Input User 1</p>
          <input type="text"
            ref={(input) => this.input = input}
            value={this.state.user1} onChange={this.updateInputValue1.bind(this)}/>
        </div>
        <div className="container">
          <p>Input User 2</p>
          <input type="text"
            ref={(input) => this.input = input}
            value={this.state.user2} onChange={this.updateInputValue2.bind(this)}/>
        </div>
        <button onClick={this.onclick.bind(this)}>
                    Fight!!
        </button>
      </div>
    );
  }
}

export default Search;