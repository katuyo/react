/**
 * @author palmtale
 * @since 2017/06/05
 */

import './index.css';

import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import reducers from './reducers';
import {getAllProducts} from './actions';
import routes from './context/routes';
import configureStore from './context/store';
import registerServiceWorker from './registerServiceWorker';


const store = configureStore(reducers);
store.dispatch(getAllProducts());
const Root = () => (
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            {routes}
        </Router>
    </Provider>
);

render(<Root />, document.getElementById('root'));
registerServiceWorker();