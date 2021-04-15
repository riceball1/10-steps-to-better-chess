type StepPageProps = {
  value: number;
};

function StepPage(props: StepPageProps) {
  return (
    <div className="App">
      <h1>{props.value}</h1>
    </div>
  );
}

export default StepPage;
