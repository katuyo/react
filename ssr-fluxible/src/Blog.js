'use strict';

/**
 * @author palmtale
 * @since 2017/6/4.
 */


import React from 'react';

import DemoStore from "./Blog.store.js";
import DemoAction from "./Blog.action.js";

import { connectToStores } from 'fluxible-addons-react';

@connectToStores([DemoStore], (context) => ({
    DemoStore: context.getStore(DemoStore).getState()
}))
class Blog extends React.Component {

    static contextTypes = {
        getStore: React.PropTypes.func,
        executeAction: React.PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    reload = () =>
        this.context.executeAction(DemoAction.loadData, {});

    /**
     * @return {object}
     */
    render = () => {
        console.info(this.props.DemoStore);
        const data = this.props.DemoStore.data || [];
        const itemContent = data.map(item => (<p>{item.content}</p>));
        return (
            <div>
                {itemContent}
                <div className="align-center">
                    <a className="button" onClick={this.reload.bind(this)}>重新加载</a>
                </div>
            </div>
        );
    }
}

Blog.loadAction = [DemoAction.loadData];

export default Blog;