import './App.css';
import Cell from './components/Cell'

function App() {
  const matrixObject = []

  for (let i = 0; i < 8; i++) {
    matrixObject.push([])
    for (let k = 1; k < 9; k++) {
      matrixObject[i].push(k)
    }
  }
 
  return (
    <div className="App">
      <header className="App-header">
        {matrixObject.map((el, i) =>
          el.map(e =>
            <Cell
              key={e}
              widthLineNumber={e}
              heightLineNumber={i + 1}
            />
          )
        )
        }

      </header >
    </div >
  );
}

export default App;
