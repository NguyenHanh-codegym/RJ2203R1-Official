import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';

import Calculate from './component/Increase.Decrease';
const container = document.getElementById("root");
const root=createRoot(container);
 root.render(<Calculate/>)