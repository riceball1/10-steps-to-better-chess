type StepPageProps = {
  value: number;
  onPageChange: (
    value: string | number | React.MouseEventHandler<HTMLParagraphElement>
  ) => void;
};

function StepPage(props: StepPageProps) {

    const handlePageChange = () => props.onPageChange('');

  return (
    <div className="App">
      <h1>{props.value}</h1>
      <button className="button" onClick={handlePageChange} onKeyDown={handlePageChange}>
        Go Home
      </button>
    </div>
  );
}

export default StepPage;
