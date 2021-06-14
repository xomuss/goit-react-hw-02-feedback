import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <button type="button" onClick={onLeaveFeedback[0]}>
      {options[0]}
    </button>
    <button type="button" onClick={onLeaveFeedback[1]}>
      Neutral
    </button>
    <button type="button" onClick={onLeaveFeedback[2]}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
