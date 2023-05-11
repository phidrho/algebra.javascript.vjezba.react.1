import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/App';
// import AppContext from './components/AppContext';
// import AppHOC from './components/AppHOC';
import AppRouter from './components/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    // <AppContext />
    // <AppHOC />
    <AppRouter />
);
