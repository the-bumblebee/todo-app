import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToDo from './ToDoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDo />
  </React.StrictMode>
);