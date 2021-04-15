type StepPageProps = {
  value: number;
};

function StepPage(props: StepPageProps) {
  return (
    <div className="App">
      <h1>{props.value}</h1>
      <p><a className="link" href="/10-steps-to-better-chess">Go Home</a>
</p>
    </div>
  );
}

export default StepPage;
