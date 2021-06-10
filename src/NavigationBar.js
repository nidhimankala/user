import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Navigator() {
  return (
    <div className="Navigator">
        <nav>
            <h2>Surveillance system</h2>
            <ul className="nvlink">
              <Link to="/imgprocessing"><li>Home</li></Link>
              <Link to="/"><li>Image</li></Link>
              <Link to="/wc"><li>Webcam</li></Link>
              <Link to="/vd2"><li>Video2</li></Link>





                
            </ul>

        </nav>
    </div>
  );
}

export default Navigator;
