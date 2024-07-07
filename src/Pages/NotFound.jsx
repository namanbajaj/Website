import { Link } from "react-router-dom";

import './css/Pages.css';

const NotFound = () => {
  return (
    <div className="notfound_container">
      <h1>404: Not Found</h1>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}

export default NotFound;