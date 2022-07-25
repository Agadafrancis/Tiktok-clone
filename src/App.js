import React from 'react';
import './App.css';
import Video from "./Video";

function App() {
  return (
    //BEM naming convention
    <div className="app">
     <h1>Louis Technology is building a full stack MERN Tiktok clone</h1>

      <div className="app__videos">
        <Video />
        <Video />
      </div>
      
     
      {/**app container */}
      {}

    </div>
  );
}

export default App;
