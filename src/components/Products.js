import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../Context";

const Products = (props) => {
    const style = {background:'white',fontSize:'12px',border:'1px solid lightgray'};
    const cardstyle = {width: '14rem', border:"none", cursor:'pointer'};
    const wishdiv = { 
        position:'absolute', 
        bottom:'10px',
        background:'white', 
        width:'100%',
        right:'0px', 
        paddingTop:'15px',
        marginBottom:'8px',
    };
    const viewSimilarStyle = {
        cursor:'pointer', 
        fontSize:'13px',
        display:'inline-block',
        border:'1px solid pink',
        borderRadius:'10px',
        paddingLeft:'50px',
        marginRight:'15px'
    };
    const [wish, setWish] = useState(false);
    const [ViewSimilar, setViewSimilar] = useState(false);
    const handleProductHover = () => {
        setWish(true);
    }
    const handleProductOut = () => {
        setWish(false);
    }
    const {id, title, img, groupImg, price, flat, discount, info, tag, category, inBag, inWishlist} = props.product;
    return (
        <React.Fragment>
            <ProductConsumer>
			{(value) => (
        <div className="card product-card" onClick={()=> value.handleDetail(id)} style={cardstyle} onMouseOver={handleProductHover} onMouseOut={handleProductOut}>
            <Link to='/details'> 
                <img src={img} className="card-img-top" alt={img} style={{height:'16rem'}} />
            </Link>
                <div className="card-body p-0 m-2">
                     <div id="titdiv" style={{display: wish?'none':'block'}}>
                        <h6 className="card-title">{title}</h6>
                        <p className="card-text">{info}</p>
                    </div> 
                    <div id="wishdiv" style={wish?wishdiv:{display:'none'}}>
                    <div className="pull-right pb-2" onMouseOver={()=>{setViewSimilar(true)}} onMouseOut={()=>{setViewSimilar(false)}}>
                        <span className="text-danger pr-5 text-center" style={ViewSimilar?viewSimilarStyle:{display:'none'}}>
                            VIEW SIMILAR
                        </span>
                        <i className="fa fa-clone text-danger"></i>
                    </div>
                        <div className="card-title">
                            <button  className='text-center w-100 p-1' disabled={(inWishlist || inBag)} onClick={()=>value.addToWishList(id)} style={(inWishlist || inBag)?{...style, color:'white', background:'gray'} :style }>
						    {(inWishlist || inBag) ? 'WISHLISTED':'WISHLIST'} </button>
                        </div>
                        <p className="card-text py-2 ml-2" style={{fontSize:'15px'}}>Sizes : <span>38, 40, 42, 44, 46</span></p>
                    </div>

                    <p className="card-bottom-text pt-4" style={wish?{position:'relative',top:'30px'}:{}}>
                        <span className="cost">Rs. {price} </span> 
                        <del>Rs. {flat}</del> 
                        <span className="off"> ( {discount} OFF )</span>
                    </p>
                </div>
            </div>
            )}
            </ProductConsumer>
        </React.Fragment>
    );
}
export default Products;