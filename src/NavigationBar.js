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
              <Link to="/"><li>User Dashboard</li></Link>
              <Link to="/wc"><li>Face Recognition</li></Link>



                
            </ul>

        </nav>
    </div>
  );
}

export default Navigator;
