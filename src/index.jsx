import './index.css';
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { NavigationProvider } from './context/navigation';
import { SaveProvider } from './context/savecontext';

const el = document.getElementById('root');
const root= ReactDom.createRoot(el);

root.render(
    <NavigationProvider>
        <SaveProvider>
            <App/>
        </SaveProvider> 
    </NavigationProvider>
)