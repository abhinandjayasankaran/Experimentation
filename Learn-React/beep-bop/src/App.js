import "./App.css";
import { Howl } from "howler";
import { useEffect, useRef } from "react";

function App() {
  //let audio = new Audio("/Assets/navigation_backward-selection.wav");
  const sound = new Howl({
    src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    html5: true,
    onplay: function () {
      console.log("Finished!");
    },
    duration: 1000,
  });

  const play = () => {
    sound.play();
  };

  const pause = () => {
    sound.pause();
  };

  const stop = () => {
    sound.stop();
  };

  const notify = new Howl({
    src: ["/Assets/navigation_backward-selection.wav"],
    html5: true,
    onplay: function () {
      console.log("Finished!");
    },
  });

  const playNotify = () => {
    setTimeout(() => {
    notify.play();}, 3000);
  };

  const aud = useRef(null);

   return (
    <div>
      <button onClick={play} style={{ left: "50%", top: "50%" }}>
        Play Sound
      </button>
      <button onClick={pause} style={{ left: "50%", top: "50%" }}>
        Pause Sound
      </button>
      <button onClick={stop} style={{ left: "50%", top: "50%" }}>
        Stop
      </button>
      <button onClick={playNotify} className="cent">
        Notify
      </button>
      <audio
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        controls
        className="centerButton"

      />
    </div>
  );
}

export default App;
