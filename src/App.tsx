import "./App.css";

function App() {
  const TOTAL_GRID_LENGTH = 10;

  const grid = [];
  for (let boxLength = 0; boxLength < TOTAL_GRID_LENGTH; boxLength++) {
    const id = boxLength + 1;
    grid.push(
      <div className="box" id={`${id}`} tabIndex={id}>
        {id}
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>10 Steps to Better Chess ♟️</h1>
        <p>A beginner's guide to chess.</p>
      </header>
      <main className="box-grid">{grid.map((box) => box)}</main>
    </div>
  );
}

export default App;
