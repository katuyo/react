/**
 * @author palmtale
 * @since 2017/6/5.
 */


import _products from './products.json';

const TIMEOUT = 5000;

export default {
    getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
};
