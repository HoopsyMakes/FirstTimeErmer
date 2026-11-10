import { useState } from 'react'
import './App.css'
import Erm from "./assets/Erm.gif"
import ermSound from "./assets/MyErm.mp3"
import useSound from 'use-sound';

import tmi from "tmi.js"
function App() {
  // const [opacity, setOpacity] = useState(1)
  const client = new tmi.Client({
    channels: ['hoopsymakes']
  });
  const [play] = useSound(ermSound);


  client.connect();

  client.on('message', (channel, tags, message, self) => {
    // "Alca: Hello, World!"
    play
    console.log("ERMER SPOTTED")
    if (message.toLocaleLowerCase().includes("erm")) {
    } if (!tags['first-msg']) {
      return
    }
    console.log("First time chat")
    if (message.toLocaleLowerCase().includes("erm")) {
      console.log("ERMER SPOTTED")
    }
  });

  return <img src={Erm} alt="Erm" style={{ opacity: 0.5 }} />
}

export default App
