import React, { Component } from 'react';
import Statistics from '../Feedback/Statistics';
import FeedbackOptions from './FeedbackOptions';
import SectionTitle from './SectionTitle';
import Notification from './Notification';

class Feedback extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = this.props.initialState;

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + bad + neutral;
    const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100,
    );
    return (
      <>
        <SectionTitle title="Please leave feadback" />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={[
            this.goodIncrement,
            this.badIncrement,
            this.neutralIncrement,
          ]}
        />

        {countTotalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={countPositiveFeedbackPercentage}
            totalFeedback={countTotalFeedback}
          />
        )}
      </>
    );
  }
}

export default Feedback;
