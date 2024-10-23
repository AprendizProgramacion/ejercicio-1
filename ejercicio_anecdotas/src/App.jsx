import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0)); // Inicializa los puntos

  const clickVote = () => {
    const copy = [...points]; // Copia el estado actual de los puntos
    copy[selected] += 1; // Incrementa el punto para la anécdota seleccionada
    setPoints(copy); // Actualiza el estado
  }
  
  const clickbutton = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random)
  }

  const mostmaxVote = () => {
    return points.indexOf(Math.max(...points))
  }

  const maxvote = mostmaxVote();

  const mostrarvote = points.some(point => point > 0); // Verifica si hay votos


  return (
    <div>
      {anecdotes[selected]}
      <br/>
      <p>Has {points[selected]} votes</p>
      <button onClick={clickVote}>Vote</button>
      <button onClick={clickbutton}>Nex Anecdote</button>
      <br/>
      <br />
      {mostrarvote && ( 
        <>
          <h2>Anecdote with most votes</h2>
          <p>{anecdotes[maxvote]}</p>
          <p>Has {points[maxvote]} votes</p>
        </>
      )}
    </div>
  )
}

export default App