/**
 * @author palmtale
 * @since 2017/6/5.
 */


import React from 'react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addToCart} from '../actions';
import {getVisibleProducts} from '../reducers/products';
import ProductItem from '../components/ProductItem';
import ProductsList from '../components/ProductList';

const ProductsContainer = ({products, addToCart}) => (
    <ProductsList title="Products">
        {products.map(product =>
            <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product.id)}/>
        )}
    </ProductsList>
);

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    })).isRequired,
    addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
});

export default withRouter(connect(
    mapStateToProps,
    {addToCart}
)(ProductsContainer));
