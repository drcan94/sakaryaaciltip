import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import reportWebVitals from './reportWebVitals';
import MantineRoot from "./MantineRoot";

const el = document.getElementById('root')!;
const root = createRoot(el);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <MantineRoot/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your redux, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
