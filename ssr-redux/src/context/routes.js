/**
 * @author palmtale
 * @since 2017/6/5.
 */


import React from 'react';
import { Route } from 'react-router';
import CartContainer from './CartContainer';
import ProductsContainer from './ProductsContainer';

const Container = (props) => {
    return (
        <div>{props.children}</div>
    );
};

const routes = (
    <Container >
        <Route path="/products" component={ProductsContainer} />
        <Route path="/cart" component={CartContainer} />
    </Container>
);

export default routes;
