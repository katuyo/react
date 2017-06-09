'use strict';

/**
 * @author palmtale
 * @since 2017/6/4.
 */
import fs from 'fs';
import path from 'path';
import http from 'http';

import Koa from 'koa';
import send from 'koa-send';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';
import {Provider} from 'react-redux';

import {getAllProducts} from './actions';
import reducers from './reducers';
import routes from './context/routes';
import configureStore from './context/store';

const app = new Koa();

const htmlContent = fs.readFileSync(path.join(__dirname, '../build/index.html'), 'utf-8');
const renderFullPage = (html) =>
    ( htmlContent.replace('<div id="root">', '<div id="root">' + html) );
// Static
app.use(async (ctx, next) => {
    try {
        await send(ctx, ctx.path, {root: path.join(__dirname, '../build')});
    } catch (e) {
        await next();
    }
});

app.use(async ctx => {
    const store = configureStore(reducers);
    store.dispatch(getAllProducts());
    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={ctx.req.url} context={ctx}>
                {routes}
            </StaticRouter>
        </Provider>
    );
    ctx.res.end(renderFullPage(html, store.getState()));
});

const server = http.createServer(app.callback());

server.listen(5000);

server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            process.exit(1);
            break;
        case 'EADDRINUSE':
            process.exit(1);
            break;
        default:
            throw error;
    }
});

server.on('listening', () => {
    console.info('Listening on port: %d', 5000);
});