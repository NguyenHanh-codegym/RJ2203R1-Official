import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

// const MyName = React.createElement("h3",{style : {textAlign:"center"}},"MyName")

const MyNameJsx =(
  
  <div style={
    {textAlign: "center"}} >
Nguyễn Thị Hạnh
  </div>
)


const container = document.getElementById('root');
const root = createRoot(container);
root.render(MyNameJsx);