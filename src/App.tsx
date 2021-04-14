/**
 * App - main file to start page
 */
import Box from '../src/components/Box/Box';
import "./App.css";

function App() {
  const boxes = new Array(10).fill(null);
  console.log('boxes', boxes)
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>10 Steps to Better Chess ♟️</h1>
        <p>A beginner's guide to chess.</p>
      </header>
      <main>
        {boxes.map((_, index) => <Box stepValue={index + 1} key={index} />)}
      </main>
    </div>
  );
}

export default App;
