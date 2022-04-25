import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert3 from './components/Class component/Alert';
import Table from './components/Class component/studentList';
import Welcome from './components/Welcom';
import Alert from './components/Class component/Alert';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<Table/>);