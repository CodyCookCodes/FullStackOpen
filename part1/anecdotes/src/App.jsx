import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0)

  const handleRandomClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    console.log(selected)
    console.log(anecdotes.length)
  }
  const handleVote = () => {
    // Create a copy of the votes array and increment the vote for the selected anecdote
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  }

  const HighestRated = () => {
    const maxIndex = votes.indexOf(Math.max(...votes));
    return (
      <div>
        {anecdotes[maxIndex]}
        <p>
          It has {votes[maxIndex]} votes.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>
      This anecdote has {votes[selected]} {votes[selected] === 1 ? 'vote' : 'votes'}
      </p>
      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={handleRandomClick} text="next anecdote" />
      <br />
      <br />
      <h1>Anecdote with the most votes</h1>
      <HighestRated />
    </div>
  )
}

export default App