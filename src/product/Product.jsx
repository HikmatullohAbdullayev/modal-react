import React from 'react';
import ProductHeader from './product-header/Product_header';
import ProductMain from './product-main/Product_main';

function Product(props) {
    return (
        <div className='w-[775px]'>
            <ProductHeader/>
            <ProductMain/>

        </div>
    );
}

export default Product;