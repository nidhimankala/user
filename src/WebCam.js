import React from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 700,
    height: 700,
    facingMode: "user"
  };
  
  const WebCam = () => {
    const webcamRef = React.useRef(null);
  
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
      },
      [webcamRef]
    );
  
    return (
      <>
        <div className="container">

        <Webcam
          audio={false}
          height={500}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
        />
        <button className="image-upload" onClick={capture}>Capture photo</button>
        </div>
      </>
    );
  };

  export default WebCam;
