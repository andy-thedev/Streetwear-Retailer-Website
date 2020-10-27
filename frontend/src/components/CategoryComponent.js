import React from 'react';
import { Link } from 'react-router-dom';

function CategoryComponent(props) {

    return (<div className="categories">
        <ul className="categories-sections">
            <li className="categories-options">
                <div className="categories-title">ALL CATEGORIES</div>
            </li>
            <li className="categories-options">
                <Link to="/category/accessories">ACCESSORIES</Link>
            </li>
            <li className="categories-options">
                <Link to="/category/bags">BAGS</Link>
            </li>
            <li className="categories-options">
                <Link to="/category/clothing">CLOTHING</Link>
            </li>
            <li className="categories-options">
                <Link to="/category/shoes">SHOES</Link>
            </li>
        </ul>
        <ul className="categories-sections">
            <li className="categories-options">
                <div className="categories-title">TOPS</div>
            </li>
            <li className="categories-options">
                <Link to="/category/T-Shirt">T-SHIRTS</Link>
            </li>
            <li className="categories-options">
                <Link to="/category/Shirt">SHIRTS</Link>
            </li>
            <li className="categories-options">
                <Link to="/category/Sweater">SWEATERS</Link>
            </li>
            <li className="categories-options">
                <Link to="/category/Hoodie">HOODIES</Link>
            </li>
            <li className="categories-options">
                <Link to="/category/Vest">VESTS</Link>
            </li>
            <li className="categories-options">
                <Link to="/category/Polo">POLOS</Link>
            </li>
        </ul>
        <ul className="categories-sections">
            <li className="categories-options">
                <div className="categories-title">BOTTOMS</div>
            </li>
            <li className="categories-options">
                <a href="index.html">PANTS</a>
            </li>
            <li className="categories-options">
                <a href="index.html">SHORTS</a>
            </li>
        </ul>
        <ul className="categories-sections">
            <li className="categories-options">
                <div className="categories-title">OUTERWEAR</div>
            </li>
            <li className="categories-options">
                <a href="index.html">BOMBERS</a>
            </li>
            <li className="categories-options">
                <a href="index.html">DENIM JACKETS</a>
            </li>
            <li className="categories-options">
                <a href="index.html">LEATHER JACKETS</a>
            </li>
            <li className="categories-options">
                <a href="index.html">COATS</a>
            </li>
        </ul>
        <ul className="categories-sections">
            <li className="categories-options">
                <div className="categories-title">SHOES</div>
            </li>
            <li className="categories-options">
                <a href="index.html">SNEAKERS</a>
            </li>
            <li className="categories-options">
                <a href="index.html">BOOTS</a>
            </li>
            <li className="categories-options">
                <a href="index.html">SANDALS</a>
            </li>
        </ul>
        <ul className="categories-sections">
            <li className="categories-options">
                <div className="categories-title">ALL DESIGNERS</div>
            </li>
            <li className="categories-options">
                <a href="index.html">ACNE STUDIOS</a>
            </li>
            <li className="categories-options">
                <a href="index.html">ADIDAS ORIGINALS</a>
            </li>
            <li className="categories-options">
                <a href="index.html">BALENCIAGA</a>
            </li>
            <li className="categories-options">
                <a href="index.html">GUCCI</a>
            </li>
            <li className="categories-options">
                <a href="index.html">PALM ANGELS</a>
            </li>
            <li className="categories-options">
                <a href="index.html">ACNE STUDIOS</a>
            </li>
            <li className="categories-options">
                <a href="index.html">ADIDAS ORIGINALS</a>
            </li>
            <li className="categories-options">
                <a href="index.html">BALENCIAGA</a>
            </li>
        </ul>
    </div>
    )
}

export default CategoryComponent;