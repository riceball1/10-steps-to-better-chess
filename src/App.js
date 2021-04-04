import './App.css';

function App() {
  const GRID_ROW_LENGTH = 5;
  const GRID_COL_LENGTH = 6;
 
  const grid = [];
  for (let row = 0; row < GRID_ROW_LENGTH; row++) {
    const currentRow = [];
    for (let col = 0; col < GRID_COL_LENGTH; col++) {
      const id = row + (col * GRID_ROW_LENGTH) + 1; 
      if(id <=75) {
        currentRow.push(<div className="box" id={id} tabindex={id}>{id}</div>);
      } else {
        currentRow.push(<div className="box" id={id} tabindex="0"></div>)
      }
    }
    grid.push(currentRow);
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>30 Days of Chess ♟️</h1>
       <p>A beginner's guide to basic knowledge of chess in 30 days.</p>
      </header>
      <main className="box-grid">
      {grid.map((row, rowId) => {
          return (
            <div className="column" key={rowId}>
              {row.map((node, nodeId) => {
                return node;
              })}
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
