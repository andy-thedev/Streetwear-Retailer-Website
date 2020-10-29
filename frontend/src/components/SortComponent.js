import React from 'react';
import { Link } from 'react-router-dom';

function SortComponent(props) {

    return (<div className="sort">
            <ul className="sort-sections">
                <li className="categories-options">
                    <div className="categories-title">SORT</div>
                </li>
                <li className="categories-options">
                    <Link to="/sort/latestarrivals">Latest arrivals</Link>
                </li>
                <li className="categories-options">
                    <Link to="/sort/pricelowtohigh">Price: Low to high</Link>
                </li>
                <li className="categories-options">
                    <Link to="/sort/pricehightolow">Price: High to low</Link>
                </li>
            </ul>
            </div>
    )
}

export default SortComponent;