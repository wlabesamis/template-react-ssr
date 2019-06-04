import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { StaticRouter, matchPath } from 'react-router-dom';

import Routes from '../shared/routes';


import createDocument from './document';
import App from '../shared/App';

/**
 * Provides the server side rendered app. In development environment, this method is called by
 * `react-hot-server-middleware`.
 *
 * This method renders the ejs template `public/views/index.ejs`.
 *
 * @param clientStats Parameter passed by hot server middleware
 */
export default ({ clientStats }) => async (req, res) => {
    const currentRoute =
        Routes.find(route => matchPath(req.url, route)) || {};
    let promise = Promise.resolve();

    if (currentRoute.loadData) {
        promise = currentRoute.loadData();
    }

    promise.then(data => {
        // Let's add the data to the context
        const context = { data };

        const appString = renderToString(
            <StaticRouter location={req.url} context={context} >
                <App />
            </StaticRouter>
        );
        const helmet = Helmet.renderStatic();
        const chunkNames = flushChunkNames();
        const { js, styles } = flushChunks(clientStats, { chunkNames });
        const document = createDocument({
            appString,
            js,
            styles,
            helmet,
            data
        });

        if (context.status === 404) {
            res.status(404);
        }

        res.set('Content-Type', 'text/html');0
        res.send(document);
    });
};
