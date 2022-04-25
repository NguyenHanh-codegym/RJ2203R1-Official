import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

// const MyName = React.createElement("h3",{style : {textAlign:"center"}},"MyName")

let datetime = () => {
  root.render(
    <div>
      <h1>Hello world</h1>
      <h2>It's {`${new Date().toLocaleString()}`}</h2>
    </div>
  );
}

setInterval(datetime, 1000);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(datetime);