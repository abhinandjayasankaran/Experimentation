import "./App.css";
import { Howl } from "howler";
import { useRef, useState } from "react";

let audio = new Audio(null);

function App() {
  const [srcVal, changeSrcVal] = useState(null);

  const [toggle, updateToggle] = useState(0);

  const val = useRef(null);

  console.log(audio.src);

  const notify = new Howl({
    src: ["/Assets/navigation_backward-selection.wav"],
    html5: true,
    onplay: function () {
      console.log("Finished!");
    },
  });

  const playNotify = () => {
    setTimeout(() => {
      notify.play();
    }, 100);
  };

  const setMusic = (val) => {
    audio.src = val;
    console.log(audio.src);
  };

  const playMusic = () => {
    if (val.current.value.length === 0) {
      playNotify();
    }
    if (toggle === 0) {
      //audio.src = val.current.value;
      console.log(audio.src);
      audio.play();
      return;
    }

    audio.play();
    updateToggle(0);
  };

  const pauseMusic = () => {
    if (val.current.value.length === 0) {
      playNotify();
    }
    updateToggle(1);
    audio.pause();
  };

  let vals = [
    {
      key: 0,
      value: "",
      label: "",
    },
  ];

  for (let i = 1; i < 18; i++) {
    vals.push({
      key: i,
      value: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${i}.mp3`,
      label: `Song ${i}`,
    });
  }

  const inputChange = (val) => {
    const newVal = vals.filter((item) => {
      return item.label === val;
    });

    console.log(newVal[0].value);
    setMusic(newVal[0].value);
    changeSrcVal(newVal[0].value);
  };

  return (
    <div>
      <div id="main-element">
        <h1 style={{ marginTop: "0px", marginBottom: "50px" }}>
          Choose a song
        </h1>
        <input
          style={{
            padding: "5px",
            minWidth: "200px",
            marginBottom: "50px",
            textAlign: "center",
          }}
          type="text"
          list="songs"
          ref={val}
          onChange={() => {
            inputChange(val.current.value);
          }}
        />

        <datalist id="songs">
          {vals.map((item) => {
            return <option key={item.key}>{item.label}</option>;
          })}
        </datalist>

        <div>
          <button
            onClick={playMusic}
            style={{ padding: "5px", minWidth: "100px", marginBottom: "50px" }}
          >
            Play Choice
          </button>
          <button
            onClick={pauseMusic}
            style={{ marginLeft: "10px", padding: "5px", minWidth: "100px" }}
          >
            Pause Choice
          </button>
        </div>

        <audio src={srcVal} controls />
      </div>
    </div>
  );
}

export default App;
