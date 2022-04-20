import React, {Component} from "react";
import {storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();


class ProductProvider extends Component{

	state ={
		allProducts : [],
		products : [],
		detailProduct : detailProduct, 
		wishlist : [],
		bag : [],
		modalOpen:false,
		bagModalOpen:false,
		search : '',
		filtergen : false,
		genVal:'',
		filtercatshirt:false,
		filtercatsleepshirt:false
	}

	componentDidMount()
	{
		this.setProducts();
	}

	setProducts=()=>{
		let tempProduct =[];
		storeProducts.forEach(item => {
			const singleItems = { ...item };
			tempProduct = [...tempProduct, singleItems];
		});
		this.setState(()=>{
			return {products:tempProduct, allProducts:tempProduct};
		});
	};

	getItem = (id) => {

		const product = this.state.products.find(item => item.id === id);
		return product;
	};

	

	handleDetail = (id) =>
	{
		const product = this.getItem(id);
		this.setState(() => {

			return {detailProduct : product};
		});
	};

	modalOpens = (val) => {
		if(val=='Bag'){
			this.setState(()=>{
				return {bagModalOpen:true};
			});
		}else{
			this.setState(()=>{
				return {modalOpen:true};
			});
		}
	}

	modalClose = (val) => {
		if(val=='Bag'){
			this.setState(()=>{
				return {bagModalOpen:false};
			});
		}else{
			this.setState(()=>{
				return {modalOpen:false};
			});
		}
	}

	addToWishList = (id) =>
	{
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		product.inWishlist = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		var filtered = tempProducts.filter(function(value){ 
			return value!=product;
		});
		this.setState(()=>{
			return {products:[...this.state.products, product],wishlist:[...this.state.wishlist, product]};
		});
	};
	
	addToBag = (id) =>
	{
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		product.inWishlist = false;
		product.inBag = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		this.removeFromWishList(id);
		this.setState(()=>{
			return {bag:[ ...this.state.bag, product]};
		});
	};

    removeFromWishList = (id) => {
		let tempWishlist = [...this.state.wishlist];
		var indexs = tempWishlist.indexOf(this.getItem(id));
		if(indexs==-1){
			return null;
		}
		const tproduct = tempWishlist[indexs];
		tproduct.inWishlist = false;
		tproduct.count = 0;
		const tprice = tproduct.price;
		tproduct.total = tprice;
		var filtered = tempWishlist.filter(function(value){ 
			return value!=tproduct;
		});
		this.setState(()=>{
			return { wishlist:[...filtered]};
		});
	}

	removeFromBag = (id) => {
		let tempWishlist = [...this.state.bag];
		var indexs = tempWishlist.indexOf(this.getItem(id));
		const tproduct = tempWishlist[indexs];
		tproduct.inWishlist = false;
		tproduct.inBag = false;
		tproduct.count = 0;
		const tprice = tproduct.price;
		tproduct.total = tprice;
		var filtered = tempWishlist.filter(function(value){ 
			return value!=tproduct;
		});
		this.setState(()=>{
			return { bag:[...filtered]};
		});
	}

	handleSearch = (searchval) => {
		let tempProducts = [...this.state.allProducts];
		this.setState((state)=>{
			return {search:searchval};
		});
		var filtered = tempProducts.filter((value)=> { 
			return value.title.toLowerCase().includes(this.state.search.toLowerCase());
		});
		console.log(this.state.search);
		if(this.state.search.length==1){
			this.setState((state)=>{
				return {products:[...tempProducts]};
			});
		}else{
			this.setState((state)=>{
				return {products:[...filtered]};
			});
		}
	}

	filterByGen = (gen) => {
		this.setState((state)=>{
			return {filtergen:true,genVal:gen};
		});
		this.applyFilter(gen);
	}

	filterByCat = (cat) => {
		this.setState((state)=>{
			if(cat=='shirt'){
				return {filtercatshirt:!this.state.filtercatshirt};
			}else{
				return {filtercatsleepshirt:!this.state.filtercatsleepshirt};
			}
		});
		this.applyFilter(this.state.genVal);
	}



	applyFilter = (gen) => {
		let tempProducts = [...this.state.allProducts];
		var filtered = tempProducts.filter((value)=>{
			if(this.state.filtergen && this.state.filtercatshirt && this.state.filtercatsleepshirt){
				return ((value.tag.toLowerCase()==gen.toLowerCase()) && (value.category.toLowerCase()=='shirt')
				&& (value.category.toLowerCase()=='sleep shirt'));
			}else if(this.state.filtergen && this.state.filtercatshirt && !this.state.filtercatsleepshirt){
				return ((value.tag.toLowerCase()==gen.toLowerCase()) && (value.category.toLowerCase()=='shirt'));
			}else if(this.state.filtergen && !this.state.filtercatshirt && this.state.filtercatsleepshirt){
				return ((value.tag.toLowerCase()==gen.toLowerCase()) && (value.category.toLowerCase()=='sleep shirt'));
			}else if(this.state.filtergen && !this.state.filtercatshirt && !this.state.filtercatsleepshirt){
				return (value.tag.toLowerCase()==gen.toLowerCase());
			}else if(!this.state.filtergen && this.state.filtercatshirt && this.state.filtercatsleepshirt){
				return ((value.category.toLowerCase()=='shirt')
				&& (value.category.toLowerCase()=='sleep shirt'));
			}else if(!this.state.filtergen && this.state.filtercatshirt && !this.state.filtercatsleepshirt){
				return value.category.toLowerCase()=='shirt';
			}else if(!this.state.filtergen && !this.state.filtercatshirt && this.state.filtercatsleepshirt){
				return value.category.toLowerCase()=='sleep shirt';
			}
		});
		if(!this.state.filtergen && !this.state.filtercatshirt && !this.state.filtercatsleepshirt){
			filtered = [...this.state.allProducts];
		}
		this.setState((state)=>{
			return {products:[...filtered]};
		});
	}

	// sorting
	applySort =  (sorts, base) => {
		this.setState((state) => {
			if(base=='price'){
				if(sorts=='asc'){
					return this.state.products.sort((a, b) => (a.price - b.price));
				}else{
					return this.state.products.sort((a, b) => (b.price - a.price));
				}
			}else if(base == 'discount'){
				if(sorts=='asc'){
					return this.state.products.sort((a, b) => (a.discount - b.discount));
				}else{
					return this.state.products.sort((a, b) => (parseInt(b.discount.substr(0, b.discount.length)) - parseInt(a.discount.substr(0, a.discount.length))));
				}
			}
				
		});
	}
	render()
	{
		return(
			<ProductContext.Provider value={{
				...this.state, 
				handleDetail:this.handleDetail,
				addToWishList:this.addToWishList,
				modalOpens:this.modalOpens,
				modalClose:this.modalClose,
				removeFromWishList:this.removeFromWishList,
				addToBag : this.addToBag,
				removeFromBag :this.removeFromBag,
				handleSearch:this.handleSearch,
				filterByGen:this.filterByGen,
				filterByCat : this.filterByCat,
				applySort:this.applySort
			}}>
				{this.props.children}
			</ProductContext.Provider>
			);
	}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};