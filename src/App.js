import './App.css';
import {database as data} from './database';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       30 Days of Chess ♟️
      </header>
      <main className="days">
        {data.map((content, index) => {
          return (<div className="day">
            <h2>{`Day ${index + 1}: ${content.title}`}</h2>
            <p>
              {content.description}
            </p>
          </div>)
        })}
      </main>
    </div>
  );
}

export default App;
