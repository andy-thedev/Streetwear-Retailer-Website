import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import CategoryComponent from '../components/CategoryComponent';
import SortComponent from '../components/SortComponent';

function SortScreen(props) {
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
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
                {
                    (props.match.params.sortType === "pricelowtohigh") ?    
                        products.sort(({ price: prevPrice }, { price: currPrice }) => prevPrice - currPrice).map(
                            (product => 
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
                                </div>
                            )
                        )

                    : (props.match.params.sortType === "pricehightolow") ?
                        products.sort(({ price: prevPrice }, { price: currPrice }) => currPrice - prevPrice).map(
                            (product => 
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
                                </div>
                            )
                        )

                        : (props.match.params.sortType === "latestarrivals") ?
                        products.sort(({ _id: prevId }, { _id: currId }) => {
                            if (prevId > currId) return -1;
                            if (prevId < currId) return 1;
                        }).map(
                            (product => 
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
                                </div>
                            )
                        )
                    : null
                }
                </ul>
                <SortComponent />
            </div>
}

export default SortScreen;