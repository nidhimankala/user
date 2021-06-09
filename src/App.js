import React from 'react';
import './App.css';
import UplaodForm from './FileUpload';
import Home from './Home';
import Navigator from './NavigationBar';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Webcam from 'react-webcam';
import WebCam from './WebCam';


function App() {
  return (
    <div className="App">
      <Router>
      <Navigator />
      <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/imgProcessing' component={UplaodForm}></Route>
      <Route path='/wc' component={WebCam}></Route>

      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
