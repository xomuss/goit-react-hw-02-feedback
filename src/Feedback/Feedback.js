import React, { Component } from 'react'


class Feedback extends Component {


    state = this.props.initialState

    goodIncrement = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1
        }))
    }
    neutralIncrement = () => {
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1
        }))
    }
    badIncrement = () => {
        this.setState((prevState) => ({
            bad: prevState.bad + 1
        }))
    }

    countTotalFeedback = () => {

    }

    render() {
        const { good, neutral, bad } = this.state
        return (
            <>
                <h1>Please leave feadback</h1>
                <div>
                    <button type="button" onClick={this.goodIncrement}>Good</button>
                    <button type="button" onClick={this.neutralIncrement}>Neutral</button>
                    <button type="button" onClick={this.badIncrement}>Bad</button>
                </div>
                <h2>Statistics</h2>
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                </ul>
            </>
        )
    }

}

export default Feedback;