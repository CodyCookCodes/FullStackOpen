import { useState } from 'react'

const Header = ({text}) => <div><h1>{text}</h1></div>


const Button = (props) => (
  <button onClick={props.handleClick} >
    {props.text}
  </button>
)

// a proper place to define a component
const Statistics = ({ good, neutral, bad, total }) => {
  const averageScore = (good - bad) / total || 0;
  const positivePercentage = (good / total) * 100 || 0;

  return (
    <table>
      <tbody>
        <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>Average Score</td>
          <td>{averageScore}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{positivePercentage}%</td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleFeedback = (feedbackType) => {
    if (feedbackType === "good") setGood(good + 1);
    else if (feedbackType === "neutral") setNeutral(neutral + 1);
    else if (feedbackType === "bad") setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <Header text="Give Feedback"/>
      <Button handleClick={() => handleFeedback("good")} text="Good" />
      <Button handleClick={() => handleFeedback("neutral")} text="Neutral" />
      <Button handleClick={() => handleFeedback("bad")} text="Bad" />
      <Header text="Statistics" />{total > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      ) : (
        <div>No feedback given</div>
      )}
    </div>
  )
}

export default App