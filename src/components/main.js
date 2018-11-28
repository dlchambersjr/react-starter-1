import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World',
    };
  }

  render() {
    return (
      <h3>{this.state.text}</h3>
    )
  }

}

export default Main;