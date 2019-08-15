import React, { useState, useEffect } from "react";
import axios from 'axios';

import ImageComponent from './components/ImageComponent';
import Title from './components/Title';
import Explanation from './components/Explanation';
import Header from './components/Header';
import Button from './components/Button';

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
        <Header />
        <Title title={data.title} />
        <ImageComponent url={data.url} />
        <Explanation explanation={data.explanation} />
    </div>
  );
}

export default App;
