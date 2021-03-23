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

    this.intervalId = [];
  }

  tick() {
    this.setState({date});
  }

  componentDidMount() {
    const intervalId = setInterval(this.tick(), 1000);
    this.intervalId.push(intervalId);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
      </div>
    )
  }
}

export default Clock;