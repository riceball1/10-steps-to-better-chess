/**
 * Not Found Page
 */


type Props = {
    onPageChange: (value : string | React.MouseEventHandler<HTMLParagraphElement>) => void;
}

function NotFoundPage(props : Props) {
  return (
    <div className="App">
      <h1>Oh Noes! No Page Found</h1>
      <p className="link" onClick={() => props.onPageChange('/')}>Go Home</p>
    </div>
  );
}

export default NotFoundPage;
