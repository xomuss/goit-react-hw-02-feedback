import React from 'react'

const Feedback = ({ initialFeedbac }) => (
    <>
        <div>
            <button type="button" onClick={this.hendleIncrement}>Good</button>
            <button type="button">Neutral</button>
            <button type="button">Bad</button>
        </div>
        <h2>Statistics</h2>
        <ul>
            <li>Good: {initialFeedbac.good}</li>
            <li>Neutral: {initialFeedbac.neutral}</li>
            <li>Bad: {initialFeedbac.bad}</li>
        </ul>
    </>
)

export default Feedback;