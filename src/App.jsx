import { useState } from 'react'
import './App.css'

function App() {
  const tmi = require('tmi.js');

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

  return (
    <>
    </>
  )
}

export default App
