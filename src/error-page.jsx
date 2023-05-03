import { useRouteError } from "react-router-dom";
import img from './assets/HTML-404-Error-Page.gif'
 function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
     <img src={img} alt="" />
    </div>
  );
}

export default ErrorPage