import React, { useState, useEffect } from "react";
import axios from 'axios';
import PhotoCard from './components/photoCard.js'

import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log('first render')
    axios.get('https://api.nasa.gov/planetary/apod?api_key=XjJNBMkapfgtSHUbb2QEROa2lsViHxF8TBssdLUg')
    .then(res => {
      console.log(res.data);
      setData(res.data)
    })
    .catch( (error) => {
      console.log(error)
    })
}, [])
  console.log('bottom')
  return (
    <div className="App">
      <h1>Hello From Bobby's NASA Photo App!</h1>
      <PhotoCard title={data.title}
                 url={data.url}
                 explanation={data.explanation}/>
    </div>
  );
}

export default App;
