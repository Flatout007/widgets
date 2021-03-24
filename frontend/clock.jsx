import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    let date = new Date();

    this.state = {
      date: date
      // hours: date.getHours(),
      // minutes: date.getMinutes(),
      // seconds: date.getSeconds()
    }

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({date: new Date()});
  }

  // React is calling these mount and unmount methods
  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000); // setInterval() returns an id.
                                                    // then stores into an instance variable.
  }

  componentWillUnmount() { // Purpose is to stop ticking after navigating away from the clock.
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div id="clock-box">
        <h1>Clock</h1>
        <div id="clock">
          <ul>
            <h1>Time:</h1>
            <h1>{this.state.date.getHours()} : {this.state.date.getMinutes()} : {this.state.date.getSeconds()} PDT</h1>
          </ul>

          <ul>
            <h1>Date:</h1>
            <h1>{this.state.date.toLocaleDateString("en-US", {weekday: "short", year: "numeric", month: "short", day: "numeric"})}</h1>
          </ul>
        </div>
      </div>
    )
  }
}

export default Clock;