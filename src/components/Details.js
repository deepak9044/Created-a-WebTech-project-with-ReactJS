import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import DetailImage from './DetailImage';
import '../App.css';
import {ProductConsumer} from '../Context';

const Details = () => {
	const data = {
		title : 'Shirts For Men & Women',
		itemTitle: '',
		countItem : ''
	}
	const reviews = {
		fontSize:'14px',
		border:'1px solid lightgray',
		borderRadius:'3px',
		background:'white'
	}
	return (
		<React.Fragment>
			<ProductConsumer>
				{value => {
					// console.log(value.detailProduct);
					const {id, title, img, groupImg, price, flat, discount, info, tag, category, inBag, inWishlist} = value.detailProduct;
					
					return(

			<div className="container-fluid">
			<Breadcrumbs data={data} />
			<div className="col-md-12 row" style={{overflow:'hidden'}}>
				<div className="col-md-7 row">
					{groupImg.map((img,index) => {
					return (
						<div className="col-md-6 p-1" key={index}><DetailImage id={id}  image={img} /></div>
					)})}
				</div>
				<div className="col-md-5 pl-5">
					<h4>{title}</h4>
					<p style={{fontSize:'18px',color:'gray'}}>{info}</p>
					<button className="p-2" style={reviews}><i className="fa fa-tag"></i> 768 Reviews</button>
					<hr/>
					<span className="card-bottom-text" style={{ fontSize:'20px'}}>
                        <span className="cost">Rs. {price} </span> 
                        <del>Rs. {flat}</del> 
                        <span className="off"> ( {discount} OFF )</span>
						<p className="text-success" style={{fontSize:'15px'}}>Inclusive of all taxes</p>
                    </span>
					<h6>SELECT SIZE <span className="text-danger ml-4">SIZE CHART</span></h6>
					<div className="circle-buttons">
						<button className="ml-0">38</button>
						<button>40</button>
						<button>42</button>
						<button>44</button>
						<button>46</button>
					</div>
					<div className="row d-flex">
						<button className="add-to-bag-btn" disabled={inBag} onClick={ () => value.addToBag(id) }><i className="fa fa-shopping-bag"></i> ADD TO BAG</button>
						<button className="wishlist-btn" disabled={inBag || inWishlist} onClick={()=>value.addToWishList(id)}><i className="fa fa-heart-o"></i> WISHLIST</button>
					</div>
				</div>
			</div>
			</div>
				)
			}}
		
		</ProductConsumer>
		
		</React.Fragment>
		
	);
}

export default Details;