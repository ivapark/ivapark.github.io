import React from "react";
import ReactDOM from "react-dom/client"; // React 18+
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Ensure your index.html has <div id="root"></div>
const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Root element not found. Check if <div id='root'></div> exists in index.html.");
}

// Create the root for rendering
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>

);
