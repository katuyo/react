'use strict';

/**
 * @author palmtale
 * @since 2017/6/4.
 */


import Request from 'superagent';

export default class {

    static loadData = (payload, done) => {
        const req = Request
            .get("http://127.0.0.1:4011/api/data");
        if (payload.req) {
            req.set("Cookie", payload.req.headers.cookie || "");
        }
        req.query(payload.form)
            .end((err, res) => {
                const result = res.body;
                done && done(result, done);
            });
    }
};