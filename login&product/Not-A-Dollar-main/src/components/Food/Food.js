import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';

const ProductList = ({ products }) => {
    return (
        <div>
            <h3>Products</h3>
            <ul className="food-list">
              {products.filter(product => product.type === 'Food').map(filteredType => (
                  <li key={filteredType.id} className="essential-list__item">
                    <Product {...filteredType} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
