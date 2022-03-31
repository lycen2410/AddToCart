import React from 'react';
import blue from '../Images/blue_logo.svg';
import cart from '../Images/cart.jpg'


const Header = (props) => {
    let sum=0
    return (
        <div style={{paddingBottom:'100px'}}>
        <span>
        <img src={blue} className="App-logo" alt="logo" />
        <b className='text'>HAPPY</b>
        <img src={cart} className="cart-logo" alt="logo" onClick={props.summaryPageFlag}></img>
        <span className="cart-text" >
        {props.count.forEach(element => {
            sum+=element;
        })
        }{sum}
        </span>
       
        </span> 
        </div>
    );
};

export default Header;