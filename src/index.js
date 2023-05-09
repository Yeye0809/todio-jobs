import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoJobs from './TodoJobs';
import TodoProvider from './context/TodoProvider';


import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <TodoProvider>
      <TodoJobs />
    </TodoProvider>
    
  </React.StrictMode>
);


