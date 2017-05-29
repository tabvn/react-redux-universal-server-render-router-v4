import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server'
import React from 'react';

import {renderRoutes} from 'react-router-config'

import express from 'express';
const router = express.Router();
import routes from './routes';


router.get('*', function (req, res) {


    var initialState = {
        user: {id: "abc", user: {email: "toan@tabvn.com"}},
        page: {
            title: 'Loopback React Application',
            description: "Meta description for seo"
        }
    };

    const store = configureStore(initialState);
    const context = {};

    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Provider>
    );

    res.send(html);


});

module.exports = router;
