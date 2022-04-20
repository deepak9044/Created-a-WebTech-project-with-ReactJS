import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import {ProductConsumer} from '../Context';
import Modal from './Modal';
import BagModal from './BagModal';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const style = {
    width:"100%",
    boxShadow:"10px 0 5px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor:'white',
    paddingTop:'15px',
    overflow:'hidden'
  }
  const navlink = {
    color:'black',
    fontSize:'15px',
    fontWeight:'bold',
    paddingLeft:'10px',
    marginLeft:'10px',
    overflow:'hidden'
  }
  const [searchval, setSearch] = useState('');
  
  return (
    <div>
      <Modal/>
      <BagModal />
      <ProductConsumer>
        { (value) => (
      <Navbar expand="md" light className="d-flex align-items-center" style={style}>
        <NavbarBrand href="/"><img src="../images/logo.png" className="img-fluid" style={{maxWidth:'100px',paddingBottom:'13px'}} /></NavbarBrand>
        <NavbarToggler onClick={toggle} style={{color:'black'}} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#" style={navlink}>MEN</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={navlink}>WOMEN</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={navlink}>KIDS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={navlink}>HOME &amp; LIVING</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={navlink}>OFFERS</NavLink>
            </NavItem>
            <NavItem>
            <div className="form-group mb-2 ml-2 input-icons" >
                <i className="fa fa-search icon"></i>
                <input type="text" className="form-control mt-1 input-field" 
                style={{backgroundColor:'rgba(0,0,0,0.05)',width:'350px',fontSize:'14px'}} 
                placeholder="Search for products, brands and more."  
                onChange={ (e)=>{
                   value.handleSearch(e.target.value); }}  />
            </div>
            </NavItem>
            
          </Nav>
          <NavbarText>
            
                

                    <div className="d-flex mr-3" style={{fontSize:'14px', color:'black'}}>
                   
                        <div className="text-center mr-4" >
                          <i className="fa fa-user text-center"></i> <p >Profile</p>
                        </div>
                        <div className="text-center mr-4" style={{cursor:'pointer'}} onClick={()=>{value.modalOpens("Wishlist")}}>
                          <i className="fa fa-heart-o text-center"></i><span className="badge badge-danger">{value.wishlist.length}</span>
                          <p style={{fontSize:'14px'}}>
                            Wishlist</p>
                        </div>
                        <div className="text-center" style={{cursor:'pointer'}} onClick={()=>{value.modalOpens("Bag")}}>
                          <i className="fa fa-shopping-bag text-center"></i>
                          <span className="badge badge-danger">{value.bag.length}</span>
                          <p style={{fontSize:'14px'}}>Bag</p>
                        </div>
                    </div>
               
          </NavbarText>
        </Collapse>
      </Navbar>
         )
        }
      </ProductConsumer>
    </div>
  );
}

export default Header;