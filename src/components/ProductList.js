import React from 'react';
import Products from './Products';
import ActionMenu from './ActionMenu';
import {ProductConsumer} from "../Context";

const ProductList = () => {
    return (
        <React.Fragment>
            <ActionMenu />
            <div className="row mb-3 mr-3 pb-3 pr-3 pt-4" style={{borderTop:'1px solid lightgray',zIndex:'-1000'}}>
            <ProductConsumer>
					{value => {
                        return value.products.map(product =>
                        {
                            return (
                                <div className="col-md-3 col-6 col-sm-6" key ={product.id}>
                                    <Products  product = {product} />
                                 </div>
                            );
                        });
					}}
			</ProductConsumer>
            </div>
        </React.Fragment>
    );
}
export default ProductList;