'use strict';

/**
 * @author palmtale
 * @since 2017/6/4.
 */


import BlogService from './Blog.service';

export default class {

    /**
     * @param  {string} text
     */
    static loadData = (actionContext, payload, done) =>
        BlogService.loadData(payload,  (data) => {
            actionContext.dispatch('LOAD_DATA', data);
            done && done();
        });
};
