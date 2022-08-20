import './App.css';
import Board from "./Component/Board";

function App() {
  return (
    <div className="App">
        <h1 style={{fontFamily:'Fredoka One', color:'blue'}} >Color Minesweeper</h1>
        <Board/>
        <div style={{height:'300px'}}></div>
    </div>
  );
}

export default App;
