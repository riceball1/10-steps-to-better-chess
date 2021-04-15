type StepPageProps = {
  value: number;
  onPageChange: (
    value: string | number | React.MouseEventHandler<HTMLParagraphElement>
  ) => void;
};

function StepPage(props: StepPageProps) {
  return (
    <div className="App">
      <h1>{props.value}</h1>
      <p className="link" onClick={() => props.onPageChange('')}>
        Go Home
      </p>
    </div>
  );
}

export default StepPage;
