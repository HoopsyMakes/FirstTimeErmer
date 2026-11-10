import { useState } from 'react'
import './App.css'
import Erm from "./assets/Erm.gif"

import tmi from "tmi.js"
function App() {
  const [opacity, setOpacity] = useState(1)
  const client = new tmi.Client({
    channels: ['anny']
  });

  client.connect();

  client.on('message', (channel, tags, message, self) => {
    // "Alca: Hello, World!"
    if (message.toLocaleLowerCase().includes("erm")) {
      console.log("Erm")
    } if (!tags['first-msg']) {
      return
    }
    console.log("First time chat")
    if (message.toLocaleLowerCase().includes("erm")) {
      console.log("ERMER SPOTTED")
    }
  });

  return <img src={Erm} alt="Erm" style={{ opacity: { opacity } }} />

}

export default App
