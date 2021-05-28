import { useState } from 'react';
import Header from './components/header/Header';
import Words from './components/words/Words';
import Score from './components/score/Score';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="container">
      <Header />
      <Words setScore={setScore} score={score} />
    </div>
  );
}

export default App;
