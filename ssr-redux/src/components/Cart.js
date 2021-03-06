/**
 * @author palmtale
 * @since 2017/6/5.
 */


import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Product from './Product';

const Cart = ({products, total, onCheckoutClicked}) => {
    const hasProducts = products.length > 0;
    const nodes = hasProducts ? (
        products.map(product =>
            <Product
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                key={product.id}
            />
        )
    ) : (
        <em>Please add some products to cart.</em>
    );

    return (
        <div>
            <Link to="/products" >Check Products</Link>
            <h3>Your Cart</h3>
            <div>{nodes}</div>
            <p>Total: &#36;{total}</p>
            <button onClick={onCheckoutClicked}
                    disabled={hasProducts ? '' : 'disabled'}>
                Checkout
            </button>
        </div>
    );
};

Cart.propTypes = {
    products: PropTypes.array,
    total: PropTypes.string,
    onCheckoutClicked: PropTypes.func
};

export default Cart;