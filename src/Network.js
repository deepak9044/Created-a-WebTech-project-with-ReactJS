import React from 'react';
import Breadcrumbs from './components/Breadcrumbs';
import SideFilter from './components/SideFilter';
import ProductList from './components/ProductList';


const Network = () => {
    const data = {
        title : 'Shirts For Men & Women',
        itemTitle: 'Shirts For Men & Women -',
        countItem : '8786 items'
    }
    return (
        <React.Fragment>
            <Breadcrumbs data = {data} />
			<div className="row">
				<div className="col-md-3 col-6 col-sm-6">
					<SideFilter/>
				</div>
				<div className="col-md-9">
					<ProductList />
				</div>
			</div>
        </React.Fragment>
    );
}

export default Network;



