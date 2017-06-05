/**
 * @author palmtale
 * @since 2017/6/5.
 */


import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const ProductItem = ({product, onAddToCartClicked}) => (
    <div style={{marginBottom: 20}}>
        <Product
            name={product.name}
            price={product.price}/>
        <button
            onClick={onAddToCartClicked}
            disabled={product.inventory > 0 ? '' : 'disabled'}>
            {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
    </div>
);

ProductItem.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
};

export default ProductItem;
