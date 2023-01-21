import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [x, setX] = useState<Array<number>>([]);
  const [o, setO] = useState<Array<number>>([]);
  const [nextPlayerMove, setNextPlayerMove] = useState(false);
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const arrayEquals = (a: Array<number>, b: Array<number>) => {
    return Array.isArray(a.sort()) &&
      Array.isArray(b.sort()) &&
      a.every((val, index) => val === b[index]);
  };

  useEffect(() => { // x player win cheker
    if (winningCombinations.map((e) => arrayEquals(e, x)).includes(true)) {
      alert("player x win");
    };
  }, [x]);

  useEffect(() => { // o player win cheker
    if (winningCombinations.map((e) => arrayEquals(e, o)).includes(true)) {
      alert("player o win");
    };
  }, [o]);

  console.log(arrayEquals([2, 1, 0], [0, 1, 2]))

  const clickToSquare = (id: number) => {
    if (nextPlayerMove) {
      x && setX([...x, id]);
      setNextPlayerMove(false);
    }
    else {
      o && setO([...o, id]);
      setNextPlayerMove(true);
    };
  };

  return (
    <div className="grid">
      <button onClick={() => clickToSquare(0)} className="square">
        {x && x.includes(0) ? "✕" : null}{o && o.includes(0) ? "◯" : null}
      </button>
      <button onClick={() => clickToSquare(1)} className="square">
        {x && x.includes(1) ? "✕" : null}{o && o.includes(1) ? "◯" : null}
      </button>
      <button onClick={() => clickToSquare(2)} className="square">
        {x && x.includes(2) ? "✕" : null}{o && o.includes(2) ? "◯" : null}
      </button>
      <button onClick={() => clickToSquare(3)} className="square">
        {x && x.includes(3) ? "✕" : null}{o && o.includes(3) ? "◯" : null}
      </button>
      <button onClick={() => clickToSquare(4)} className="square">
        {x && x.includes(4) ? "✕" : null}{o && o.includes(4) ? "◯" : null}
      </button>
      <button onClick={() => clickToSquare(5)} className="square">
        {x && x.includes(5) ? "✕" : null}{o && o.includes(5) ? "◯" : null}
      </button>
      <button onClick={() => clickToSquare(6)} className="square">
        {x && x.includes(6) ? "✕" : null}{o && o.includes(6) ? "◯" : null}
      </button>
      <button onClick={() => clickToSquare(7)} className="square">
        {x && x.includes(7) ? "✕" : null}{o && o.includes(7) ? "◯" : null}
      </button>
      <button onClick={() => clickToSquare(8)} className="square">
        {x && x.includes(8) ? "✕" : null}{o && o.includes(8) ? "◯" : null}
      </button>
      <button onClick={() => setX([])}>reset ✕</button>
      <button onClick={() => setO([])}>reset ◯</button>
    </div>

  );
};

export default App;
