import React from 'react';
import '../App.css';

const Breadcrumbs = (props) => {
  
  return (
    <React.Fragment>
      <nav aria-label="breadcrumb" className="bg-white">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#" className="active">{props.data.title}</a></li>
        </ol>
        <p className="ml-3 text-dark font-weight-bold" style={{lineHeight:'0px'}}>
          {props.data.itemTitle} <span className="total-items" style={{color:'gray', fontWeight:'normal'}}>{props.data.countItem}</span>
        </p>
      </nav>
    </React.Fragment>
  );
};

export default Breadcrumbs;