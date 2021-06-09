import React, { Component } from 'react'
import Feedback from './Feedback'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  hendleIncrement = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1
    }))
  }

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <Feedback initialFeedbac={this.state} />
      </>
    )
  }
}



export default App;
