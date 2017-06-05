/**
 * @author palmtale
 * @since 2017/6/5.
 */


import React from 'react';

import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductsList = ({title, children}) => (
    <div>
        <Link to="/cart">My Cart</Link>
        <h3>{title}</h3>
        <div>{children}</div>
    </div>
);

ProductsList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
};

export default ProductsList;
