import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {listProducts} from '../actions/productActions';
import CategoryComponent from '../components/CategoryComponent';
import SortComponent from '../components/SortComponent';

function HomeScreen (props) {
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listProducts());
        return () => {
            //
        };
    }, [])

    return loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :

            <div className="homepage">
                <CategoryComponent />
                <ul className="products">
                    {products.map(product =>
                        <div key={product._id}>
                            <li>
                                <div className="product">
                                    <Link to={'/product/' + product._id}>
                                        <img className="product-image" src={product.image} alt="product"></img>
                                    </Link>
                                    <div className="product-brand">{product.brand}</div>
                                    <div className="product-name">
                                        <Link to={'/product/' + product._id}>{product.name}</Link>
                                    </div>
                                    <div className="product-price">${product.price}</div>
                                    <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
                                </div>
                            </li>
                        </div>)
                    }
                </ul>
                <SortComponent />
            </div> 

}

export default HomeScreen;
