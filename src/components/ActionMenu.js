import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../App.css';
import {ProductConsumer} from '../Context';

const ActionMenu = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [bundle, setBundle] = useState(false);
    const [coorigin, setCoorigin] = useState(false);
    const [size, setSize] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const handleBundle = () => {
        setBundle(!bundle); 
        setCoorigin(false);
        setSize(false);
    }
    const handleOrigin = () => {
        setBundle(false); 
        setCoorigin(!coorigin);
        setSize(false);
    }
    const handleSize = () => {
        setBundle(false); 
        setCoorigin(false);
        setSize(!size);
    }
    return (
        <React.Fragment>
            <div className="row pt-2 pb-3 align-items-center" >
                <div className="col-6 col-md-6 col-lg-6 align-items-center">
                    <ul className="nav action-filter">
                        <li><button type="button" onClick={handleBundle}>Bundles <i className={!bundle?"fa fa-angle-down":'fa fa-angle-up'}></i></button></li>
                        <li><button type="button" onClick={handleOrigin}>Country Of Origin <i className={!coorigin?"fa fa-angle-down":'fa fa-angle-up'}></i></button></li>
                        <li><button type="button" onClick={handleSize}>Size <i className={!size?"fa fa-angle-down":'fa fa-angle-up'}></i></button></li>
                    </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3 col-lg-3 ml-auto " >
                    <ProductConsumer>
                        {(value) => 
                     
                <form>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{outline:'none'}}>
                        <DropdownToggle caret className="bg-white text-dark" style={{fontSize:'14px'}}>
                        Sort by : <span className="font-weight-bold">Recommended</span>
                        </DropdownToggle>
                        <DropdownMenu style={{fontSize:'14px',padding:'5px', zIndex:'1000'}}>
                            <DropdownItem onClick={()=>{value.applySort('desc', 'discount')}}>Better Discount</DropdownItem>
                            <DropdownItem onClick={()=>{value.applySort('desc', 'price')}}>Price: High To Low</DropdownItem>
                            <DropdownItem onClick={()=>{value.applySort('asc', 'price')}}>Price: Low To High</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </form>
                   }
                    </ProductConsumer>
                </div>
            </div>

            {/* bundles content */}
            <div className="row pl-1" id="bundles" style={!bundle?{display:'none'}:{display:'inline-block'}}>
                <div className="col-md-12 d-flex">
                    <div className="form-check pt-2 mr-3 mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="bundleid" />
                        <label className="form-check-label" htmlFor="bundleid">
                            Bundles
                        </label>
                    </div>
                    <div className="form-check pt-2">
                        <input className="form-check-input" type="checkbox" value="" id="single" />
                        <label className="form-check-label" htmlFor="single">
                            Single Styles
                        </label>
                    </div>
                </div>
            </div>
            
            {/* origin content */}
            <div className="row pl-1" id="origin" style={!coorigin?{display:'none'}:{display:'inline-block'}}>
                <div className="col-md-12 d-flex">
                    <div className="form-check pt-2 mr-3 mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="originid" />
                        <label className="form-check-label" htmlFor="originid">
                            All Countries
                        </label>
                    </div>
                    <div className="form-check pt-2">
                        <input className="form-check-input" type="checkbox" value="" id="india" />
                        <label className="form-check-label" htmlFor="india">
                            India
                        </label>
                    </div>
                </div>
            </div>

            {/* size content */}
            <div className="row pl-1" id="size" style={!size?{display:'none'}:{display:'inline-block'}}>
                <div className="col-md-12 d-flex">
                    <div className="form-check pt-2 mr-3 mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="33id" />
                        <label className="form-check-label" htmlFor="33id">
                            33
                        </label>
                    </div>
                    <div className="form-check mr-3 mb-2 pt-2">
                        <input className="form-check-input" type="checkbox" value="" id="id39" />
                        <label className="form-check-label" htmlFor="id39">
                           39
                        </label>
                    </div>
                    <div className="form-check mr-3 mb-2 pt-2">
                        <input className="form-check-input" type="checkbox" value="" id="xl" />
                        <label className="form-check-label" htmlFor="xl">
                           XL
                        </label>
                    </div>
                    <div className="form-check mr-3 mb-2 pt-2">
                        <input className="form-check-input" type="checkbox" value="" id="l" />
                        <label className="form-check-label" htmlFor="l">
                           L
                        </label>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ActionMenu;




