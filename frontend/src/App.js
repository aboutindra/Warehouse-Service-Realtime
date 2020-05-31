import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import io from 'socket.io-client';
import './App.css';

function App() {

  let [data, setData] = useState([]);
  let [txt, setTxt] = useState();

  var api = "http://localhost:3030"
  const socket = io(api);

  let getData = async () => {
    socket.emit('getAll', txt);
    socket.on('sendAll', (msg) => {
        console.log(msg)
    })
  }

  return (
    <div className="App">
      <input onChange={(e)=>{setTxt(e.target.value)}}/>
      <button onClick={getData}>Fetch!</button>
    </div>
  );
}

export default App;
