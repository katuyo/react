'use strict';

/**
 * @author palmtale
 * @since 2017/6/4.
 */


import BaseStore from 'fluxible/addons/BaseStore';
const CHANGE_EVENT = 'change';
class BlogStore extends BaseStore {

    dispatcher = null;

    data = null;

    constructor(dispatcher) {
        super(dispatcher);
        this.dispatcher = dispatcher;
    }

    loadData = (data) => {
        this.data = data;
        this.emitChange();
    };

    getState = () => ({data: this.data});

    // For sending state to the client
    dehydrate = () => this.getState();
    // For rehydrating server state
    rehydrate = state => (this.data = state.data);
}

BlogStore.storeName = 'BlogStore';

BlogStore.handlers = {
    "LOAD_DATA": "loadData",
};

export default BlogStore;