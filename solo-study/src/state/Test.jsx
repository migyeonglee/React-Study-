import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    // state 정의
    this.state = {
      count: 1,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    //state 변경
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    return (
      <>
        <span>카운트 : {this.state.count}</span>
        <button onClick={this.increaseCount}>카운트 증가</button>
      </>
    );
  }
}

export default Test;
