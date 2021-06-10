import React from 'react';
import './App.css';
import UplaodForm from './FileUpload';
import Home from './Home';
import Navigator from './NavigationBar';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Webcam from 'react-webcam';
import WebCam from './WebCam';
import Video from './video';
import Video2 from './Video2';




function App() {
  return (
    <div className="App">
      <Router>
      <Navigator />
      <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/imgProcessing' component={UplaodForm}></Route>
      <Route path='/wc' component={WebCam}></Route>
      <Route path='/vd' component={Video}></Route>
      <Route path='/vd2' component={Video2}></Route>



      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
