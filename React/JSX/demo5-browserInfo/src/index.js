import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

// const MyName = React.createElement("h3",{style : {textAlign:"center"}},"MyName")

const browser = (
  <div>
    <h1>
    Browser's details: { navigator.userAgent }
    </h1>
  </div>
)

const container = document.getElementById('root');
const root = createRoot(container);
root.render(browser);