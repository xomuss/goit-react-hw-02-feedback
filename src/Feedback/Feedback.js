import React, { Component } from 'react'
import Statistics from '../Feedback/Statistics'

class Feedback extends Component {
    static defaultProps = {

    }

    static propTypes = {

    }

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

    render() {
        const { good, neutral, bad } = this.state
        const countTotalFeedback = good + bad + neutral
        const countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100)
        return (
            <>
                <h1>Please leave feadback</h1>
                <div>
                    <button type="button" onClick={this.goodIncrement}>Good</button>
                    <button type="button" onClick={this.neutralIncrement}>Neutral</button>
                    <button type="button" onClick={this.badIncrement}>Bad</button>
                </div>
                <h2>Statistics</h2>

                <Statistics good={good} neutral={neutral} bad={bad} />

                <div>
                    <p>TotalFeedback: {countTotalFeedback}</p>
                    {countPositiveFeedbackPercentage > 0 ? <p>Positive feedback: {countPositiveFeedbackPercentage}%</p> : <p>Positive feedback: 0%</p>}
                </div>
            </>
        )
    }

}

export default Feedback;