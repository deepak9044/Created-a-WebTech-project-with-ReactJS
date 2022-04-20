import React, {useState} from 'react';
import '../App.css';
import {ProductConsumer} from "../Context";

const SideFilter = () => {
    const [gen, setgen] = useState('');
    const [shirt, setShirt] = useState(false);
    const [sleepshirt, setSleepShirt] = useState(false);
    const [filterShow, setFilterShow] = useState(true);
    
    return (
        <React.Fragment>
          <div className="filterbtn"><button className="btn btn-sm btn-info btn-block" onClick={()=>{setFilterShow(!filterShow)}}><i className="fa fa-filter"></i>Filter</button></div>
            <div className="col-3 col-md-3 col-lg-3 mt-4 filterContainer" style={!filterShow?{display:'none'}:{display:'inline-block'}}>
                <h6 className="ml-1 pb-2">FILTERS</h6>
            <div className="card filter-card" style={{width: '18rem'}}>
                <div className="card-body pl-4">
                    
                <ProductConsumer>
                {value => (
                        
                    <form>
            
                        <div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" checked={gen==='Men'} value="Men" onChange={(e)=>{ setgen(e.target.value); value.filterByGen(e.target.value)}} name="gen" id="men" />
                        <label className="form-check-label gen" htmlFor="men">
                            Men
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" checked={gen==='Women'} value="Women" onChange={(e)=>{ setgen(e.target.value); value.filterByGen(e.target.value)}} name="gen" id="women" />
                        <label className="form-check-label gen" htmlFor="women">
                           Women
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" checked={gen==='Boys'} value="Boys" onChange={(e)=>{ setgen(e.target.value); value.filterByGen(e.target.value)}} name="gen" id="boys" />
                        <label className="form-check-label gen" htmlFor="boys">
                           Boys
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" checked={gen==='Girls'} value="Girls" onChange={(e)=>{ setgen(e.target.value); value.filterByGen(e.target.value)}} name="gen" id="girls" />
                        <label className="form-check-label gen" htmlFor="girls">
                           Girls
                        </label>
                    </div>
                    </div>
                    
                    {/* categories */}
                    <div className="divider"><hr/></div>
                    <div className="filter-card-brand">CATEGORIES</div>
                    <div className="form-check pt-2">
                        <input className="form-check-input" checked={shirt} type="checkbox" onChange={(e)=>{setShirt(!shirt); value.filterByCat(e.target.value);}} value="shirt" id="shirts" />
                        <label className="form-check-label cat" htmlFor="shirts">
                            Shirts <span className="text-muted">(8982)</span>
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" checked={sleepshirt} type="checkbox" onChange={(e)=>{setSleepShirt(!sleepshirt); value.filterByCat(e.target.value);}} value="sleep shirt" id="sleep-shirt" />
                        <label className="form-check-label cat" htmlFor="sleep-shirt">
                            Sleep Shirts <span className="text-muted">(675)</span>
                        </label>
                        </div>
                       

                    {/* discount range */}
                    <div className="divider"><hr/></div>
                    <div className="filter-card-brand">DISCOUNT RANGE</div>
                    <div className="form-check pt-2">
                        <input className="form-check-input" type="radio" name="drange" id="ten" />
                        <label className="form-check-label drange" htmlFor="ten">
                            10% and above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="drange" id="twenty" />
                        <label className="form-check-label drange" htmlFor="twenty">
                        20% and above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="drange" id="thirty" />
                        <label className="form-check-label drange" htmlFor="thirty">
                        30% and above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="drange" id="fourty" />
                        <label className="form-check-label drange" htmlFor="fourty">
                        40% and above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="drange" id="fiftey" />
                        <label className="form-check-label drange" htmlFor="fiftey">
                        50% and above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="drange" id="sixtey" />
                        <label className="form-check-label drange" htmlFor="sixtey">
                        60% and above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="drange" id="seventy" />
                        <label className="form-check-label drange" htmlFor="seventy">
                        70% and above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="drange" id="eighty" />
                        <label className="form-check-label drange" htmlFor="eighty">
                        80% and above
                        </label>
                    </div>
            
                        
                </form>
                )}
                </ProductConsumer>

                </div>
            </div>
            </div>
        </React.Fragment>
    )
}
export default SideFilter;