import configureStore from './app/store/configureStore';
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config';
import {BrowserRouter} from 'react-router-dom';

import routes from './app/routes/routes';

const preloadedState = window.PROPS;
const store = configureStore(preloadedState);
render(
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>

    </Provider>, document
);