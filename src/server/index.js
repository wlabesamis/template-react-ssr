import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { StaticRouter } from 'react-router-dom';

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
    const context = {};

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
    });

    if (context.status === 404) {
        res.status(404);
    }

    res.set('Content-Type', 'text/html').end(document);
};
