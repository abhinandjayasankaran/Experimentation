import { useEffect, useRef, useState } from "react";
import "./DisplayQR.css";

const downloadSound = new Audio("/Assets/Sounds/navigation_selection-complete-celebration.wav");


function DisplayQR(props) {

  const imageRef = useRef();

  const [downloadState, setDownloadState] = useState(false);

  //console.log(imageRef.current.src);

  const [imageSrc, setImageSrc] = useState(
    "https://t3.ftcdn.net/jpg/02/23/88/58/360_F_223885881_Zotk7yyvWJDvq6iWq2A9XU60iVJEnrzC.jpg"
  );

  useEffect(() => {
    console.log(imageSrc);
    setImageSrc(props.dataURL);
    setDownloadState(true);
  }, [props.dataURL]);

  useEffect(() => {
    setImageSrc(
      "https://t3.ftcdn.net/jpg/02/23/88/58/360_F_223885881_Zotk7yyvWJDvq6iWq2A9XU60iVJEnrzC.jpg"
    );
    setDownloadState(false);
  }, []);

  const downloadQR = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = imageRef.current;

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "QR.png";
    a.click();
    downloadSound.play();
  };

  const downloadButton = <button onClick={downloadQR}>Download</button>;

  return (
    <div className="display">
      <h1>QR Code</h1>
      <div className="content">
        <img ref={imageRef} style={{ maxWidth: "250px" }} src={imageSrc}></img>
      </div>
      <div className="download">{downloadState ? downloadButton : null}</div>
    </div>
  );
}

export default DisplayQR;
