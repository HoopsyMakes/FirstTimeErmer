import './App.css'
import ermSound from "./assets/MyErm.mp3"
import { useRef } from "react";


import tmi from "tmi.js"
function App() {
  const client = new tmi.Client({
    channels: ['anny']
  });
  const audio = useRef(null);

  const play = async () => {
    const element = audio.current;
    if (!element) return;

    try {
      element.currentTime = 0;
      await element.play();
      console.log("Audio playback started");
      setShown(false);
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  client.connect();

  client.on('message', (channel, tags, message, self) => {
    if (message.toLocaleLowerCase().includes("erm")) {
    } if (!tags['first-msg']) {
      return
    }
    if (!message.toLocaleLowerCase().includes("erm")) {
      return
    }
    console.log("ERMER SPOTTED")
    play()
  });

  return (
    <>
      <audio ref={audio} src={ermSound} preload="auto" />
      <p style={{ opacity: 0, width: 128, height: 128 }} onClick={play} />
    </>
  );
}

export default App
