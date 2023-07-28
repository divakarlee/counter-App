import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  handleReset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h2>Counter App</h2>
        <strong>
        <p style={{fontSize:"20px"}}>Count: {count}</p>
        </strong>
        <button onClick={this.handleIncrement} style={{margin:"20px",background:"green",borderRadius:"6px",width:"120px" ,height:"80px"}} >Increment</button>
        <button onClick={this.handleDecrement} style={{margin:"20px",background:"orange",borderRadius:"6px",width:"120px" ,height:"80px"}}  disabled={count === 0}>Decrement</button>
        <button onClick={this.handleReset} style={{margin:"20px",background:"red",borderRadius:"6px",width:"120px" ,height:"80px"}}  disabled={count === 0}>Reset</button>
      </div>
    );
  }
}

export default Counter;
