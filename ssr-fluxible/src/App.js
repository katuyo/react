import React from 'react';
import './App.css';
import {provideContext} from 'fluxible-addons-react';

if (!Object.assign) {
    Object.assign = React.__spread;
}

const {RouteHandler} = Router;


@provideContext
class App extends React.Component {

    static contextTypes = {
        getStore: React.PropTypes.func,
        executeAction: React.PropTypes.func
    };

    constructor(props, context) {
        super(props, context);
    }

    /**
     * @return {object}
     */
    render = () => (
        <div className="main-container">
            <RouteHandler {...this.props}/>
        </div>
    );
}

export default App;