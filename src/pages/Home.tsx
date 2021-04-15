import Box from "../components/Box/Box";

function Home() {
  const boxes = new Array(10).fill(null);

  const handleBoxClick = (stepValue: number) => {
    console.log(stepValue)
    const url = `${window.location.pathname}/${stepValue}`;
    window.location.href = url;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>10 Steps to Better Chess ♟️</h1>
        <p>A beginner's guide to chess.</p>
      </header>
      <main>
        {boxes.map((_, index) => {
          const stepValue = index + 1;
          return (
            <Box
              stepValue={stepValue}
              key={index}
              onHandleBoxClick={() => handleBoxClick(stepValue)}
            />
          );
        })}
      </main>
    </div>
  );
}

export default Home;
