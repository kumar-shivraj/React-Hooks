import React, { Component } from "react";

export class ClassCounterTwo extends Component {
  initialCount = 0;
  constructor(props) {
    super(props);

    this.state = {
      count: this.initialCount,
    };
  }

  //   this will not increment count by 5 instead it will increment it by one
  //   incementFive = () => {
  //     for (let i = 0; i < 5; i++) {
  //       this.setState({
  //         count: this.state.count + 1,
  //       });
  //     }
  //   };

  //   this will increment count by 5
  incementFive = () => {
    for (let i = 0; i < 5; i++) {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    }
  };

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={() => this.setState({ count: this.initialCount })}>
          Reset
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
        <button onClick={this.incementFive}>Increment 5</button>
      </div>
    );
  }
}

export default ClassCounterTwo;
