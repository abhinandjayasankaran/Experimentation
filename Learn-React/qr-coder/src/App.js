import "./App.css";
import React from "react";
import QRForm from "./components/QRForm";
import DisplayQR from "./components/DisplayQR";
import QRCode from "qrcode";

const underProcess = new Audio("/Assets/Sounds/ui_loading.wav");
const displaySound = new Audio("/Assets/Sounds/hero_decorative-celebration-01.wav");
const refreshSound = new Audio("/Assets/Sounds/navigation_transition-right.wav");

function App() {
  const [data, setData] = React.useState(null);

  const createQR = (text) => {
    var opts = {
      errorCorrectionLevel: "high",
      type: "image/jpeg",
      quality: 1,
      margin: 8,
      color: {
        dark: "#000000ff",
        light: "#FFFFFF",
      },
    };

    setTimeout(() => {
      underProcess.play();
      setTimeout(() => {
        QRCode.toDataURL(text, opts, function (err, url) {
          if (err) throw err;
          setData(url);
          console.log(url);
          displaySound.play();
        });
      }, 2000);
    }, 500);
  };

  return (
    <div>
      <h1
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        QR CODE CREATOR
      </h1>
      <QRForm create={createQR} />
      <DisplayQR dataURL={data} />
    </div>
  );
}

export default App;
