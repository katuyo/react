/**
 * @author palmtale
 * @since 2017/6/5.
 */


import React from 'react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {checkout} from '../actions';
import {getCartProducts, getTotal} from '../reducers';
import Cart from '../components/Cart';

const CartContainer = ({products, total, checkout}) => (
    <Cart
        products={products}
        total={total}
        onCheckoutClicked={() => checkout(products)}/>
);

CartContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.string,
    checkout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state)
});

export default withRouter(connect(
    mapStateToProps,
    {checkout}
)(CartContainer));
