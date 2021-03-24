import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    }
  }

  render() {
    debugger
    return (
      <div>
        <ul>
          <h1>{this.props.obj}</h1>
        </ul>
      </div>
    )
  }
}

export default Tab;

   