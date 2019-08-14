import React from "react";
import axios from 'axios';
import PhotoCard from './components/photoCard.js'

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello from App!</h1>
      <PhotoCard title='Props title'
                 url='The url for the site'
                 explaination='Some Explaination of the photo'/>
    </div>
  );
}

export default App;
