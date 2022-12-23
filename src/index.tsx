import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import MantineRoot from "./MantineRoot";
import reportWebVitals from './reportWebVitals';

const el = document.getElementById('root')!;
const root = createRoot(el);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <MantineRoot/>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
