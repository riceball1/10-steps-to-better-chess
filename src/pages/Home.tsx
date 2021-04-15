import Box from "../components/Box/Box";

type Props = {
  onPageChange: (
    value: string | number | React.MouseEventHandler<HTMLParagraphElement>
  ) => void;
};

function Home(props: Props) {
  const boxes = new Array(10).fill(null);

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
              onPageChange={props.onPageChange}
            />
          );
        })}
      </main>
    </div>
  );
}

export default Home;
