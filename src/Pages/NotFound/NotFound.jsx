import { Link } from "react-router-dom";

import './notfound.css';
import Footer from '../../Shared/Footer/Footer'

const NotFound = () => {
  return (
    <>
      <div className="notfound_container">
        <h1>404: Not Found</h1>
        <Link to="/" className="btn">Go Home</Link>
      </div>
      <Footer />
    </>

  );
}

export default NotFound;