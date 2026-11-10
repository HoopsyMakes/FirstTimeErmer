import { useState } from 'react'
import './App.css'
import Erm from "./assets/Erm.gif"
import ermSound from "./assets/MyErm.mp3"
import { useRef } from "react";


import { useAudioPlayer } from "react-use-audio-player";


import tmi from "tmi.js"
function App() {
  const [opacity, setOpacity] = useState(1)
  const client = new tmi.Client({
    channels: ['hoopsymakes']
  });
  const audio = useRef(null);

  const play = async () => {
    const element = audio.current;
    if (!element) return;

    try {
      element.currentTime = 0;
      await element.play();
      console.log("Audio playback started");
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  client.connect();

  client.on('message', (channel, tags, message, self) => {
    if (message.toLocaleLowerCase().includes("erm")) {
      play()
      console.log("ERMER SPOTTED")
    } if (!tags['first-msg']) {
      return
    }
    console.log("First time chat")
    if (message.toLocaleLowerCase().includes("erm")) {
      console.log("ERMER SPOTTED")
    }
  });

  return (
    <>
      <audio ref={audio} src={ermSound} preload="auto" />
      <img src={Erm} alt="Erm" style={{ opacity: 0.5 }} onClick={() => { play(); console.log("erm") }} />
    </>
  );
  // return 
}

export default App
