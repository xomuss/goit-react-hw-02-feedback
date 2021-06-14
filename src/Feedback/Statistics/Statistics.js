import React from 'react';

const Statistics = ({
  good,
  neutral,
  bad,
  positivePercentage,
  totalFeedback,
}) => (
  <>
    <h2>Statistics</h2>
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
    </ul>
    <div>
      <p>TotalFeedback: {totalFeedback}</p>

      {positivePercentage > 0 ? (
        <p>Positive feedback: {positivePercentage}%</p>
      ) : (
        <p>Positive feedback: 0%</p>
      )}
    </div>
  </>
);

export default Statistics;
