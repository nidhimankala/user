import logo from './logo.svg';
import './App.css';

import React,{Component} from 'react';
import axios from 'axios';
import VideoPreview from  '@think42labs/video-preview';


 
class Video2 extends Component {
  
   constructor(props) {
     super(props)
   
     this.state = {
        selectedFile:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
     }
   }
   
    
    // On file select (from the pop up)
    onFileChange = event => {
    
      // Update the state
      console.log(event.target.files[0]);
      this.setState({ selectedFile: event.target.files[0] });
    
    };
    
    // On file upload (click the upload button)
    onFileUpload = () => {
    
      // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    
      // Details of the uploaded file
      console.log(this.state.selectedFile);
    
      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData);
    };
    
    // File content to be displayed after
    // file upload is complete
    
    render() {
        const { selectedFile} = this.state

    
      return (
        <div className="App"> 
            
            <div>
                
                <input type="file" id="input" onChange={this.onFileChange} />
                <VideoPreview 
                    src={this.state.selectedFile}
                    size={150000}
                    preview={true}
                    width={520}
                    height={340}
                    controls={true}
                    autoPlay={true}
                />
                <div className="label">
                <label className="image-upload" htmlFor="input">
						Choose your Video
				</label>
                </div>
                <button id="input1" onClick={this.onFileUpload}/>
                <div className="label">
                <label className="image-upload" htmlFor="input1">
                    Upload your Video
				</label>
                </div>
                
            </div>
        </div>
      );
    }
  }
 
  export default Video2;