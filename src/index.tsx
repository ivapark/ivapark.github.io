import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root'); // This should match the 'root' id in index.html
if (!rootElement) {
  throw new Error("Root element not found. Check if <div id='root'></div> exists in index.html.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
