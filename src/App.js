import logo from './logo.svg';
import './App.css';

function App() {

  let matrixObject = []

  for (let i = 0; i < 8; i++) {
    matrixObject.push([])
    for (let k = 0; k < 8; k++) {
      matrixObject[i].push(k)
    }
  }

  // console.log(matrixObject)


  let qwe = matrixObject.forEach((e) => {
    return (
      <div>asd</div>
    )
  })

  // console.log(matrixObject[0])

  return (
    <div className="App">
      <header className="App-header">
        {matrixObject.map(e =>
          <div>{e}</div>
        
        )}
      </header>
    </div>
  );
}

export default App;
