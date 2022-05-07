import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import Hello from './components/Hello';
import Login from './components/useState';
import Course from './components/useEffect';

const container = document.getElementById('root');
const root =createRoot(container)
root.render(<Login/>)