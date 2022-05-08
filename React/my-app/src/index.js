import React from 'react';
import './index.css';
import ReactDOM, { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/ReactForm/Login';



const container = document.getElementById('root');

const root = createRoot(container);
root.render(<LoginForm/>);