import { useState } from 'react';
import './App.css';

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? (good / total) * 100 : 0;
  const averagePercentage = total > 0 ? (good - bad) / total : 0;

  if (total >= 1) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <tr>
              <td><StatisticLine text="good" value={good} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="neutral" value={neutral} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="bad" value={bad} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="total" value={total} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="average" value={`${averagePercentage.toFixed(2)} %`} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="positive" value={`${positivePercentage.toFixed(2)} %`} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }else{
    return(
      <div>
        <h1>Statistics</h1>
        <p>No feedback give</p>
      </div>
    )
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => setGood(good + 1);

  const neutralClick = () => setNeutral(neutral + 1);
 
  const badClick = () => setBad(bad + 1);


  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={goodClick}>Good</button>
      <button onClick={neutralClick}>Neutral</button>
      <button onClick={badClick}>Bad</button>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  );
};

export default App;
