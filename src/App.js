import { useState } from 'react';
import Header from './components/header/Header';
import Words from './components/words/Words';
import Timer from './components/timer/Timer';

function App() {
  let [score, setScore] = useState(0);
  let [timeLeft, setTimeLeft] = useState(120);
  let [gameStarted, setGameStart] = useState(false);

  return (
    <div className="container">
      <Header />
      <Words setScore={setScore} score={score} timeLeft={timeLeft} setTimeLeft={setTimeLeft} gameStarted={gameStarted} setGameStart={setGameStart} />
      { gameStarted ? <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} /> : null }
    </div>
  );
}

export default App;
