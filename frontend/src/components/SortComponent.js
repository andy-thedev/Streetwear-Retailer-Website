import React from 'react';

function SortComponent(props) {

    return (<div className="sort">
            <ul className="sort-sections">
                <li className="categories-options">
                    <div className="categories-title">SORT</div>
                </li>
                <li className="categories-options">
                    <a href="index.html">Latest arrivals</a>
                </li>
                <li className="categories-options">
                    <a href="index.html">Price: Low to high</a>
                </li>
                <li className="categories-options">
                    <a href="index.html">Price: High to low</a>
                </li>
            </ul>
            </div>
    )
}

export default SortComponent;