import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react';


function SummaryPage(props) {
    return (
        <div>
            <p onClick={props.summaryPageFlag}> Back to Home</p>
             <p><b>ORDER SUMMARY</b></p>
            <div className="row">
                <div className='p2LeftTable column'>
                    <div style={{ borderBottomStyle: '1px sold gray' }}>
                        <table class="css-serial">
                            <tbody>
                                <tr>
                                    <th >Sno</th>
                                    <th>Item</th>
                                    <th>Qty</th>
                                </tr>
                                {props.info.map((index) => (
                                    <>
                                        {props.count[index.id - 1] !== 0 ?
                                            <tr className='serial' key={index.id}>
                                                <td></td>
                                                <td>{index.name}</td>
                                                <td><span style={{ display: 'inline' }}><button className='button' onClick={() => props.handleChange(index.id, 'minus')}>-</button><input min='0' className="input" value={props.count[index.id - 1]} /><button className='button' onClick={() => props.handleChange(index.id, 'plus')}>+</button></span></td>
                                            </tr>
                                            : null
                                        }
                                    </>

                                ))}
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <div onClick={props.summaryPageFlag} style={{ borderTop: '1px sold grey', color: 'blue' }}>Add more Items </div>
                </div>

                <div className='p2RightTable column'>
                    <b>Price Details</b>
                    <hr />
                    <table>
                        {props.info.map((index) => (
                            <>
                                {props.count[index.id - 1] !== 0 ?
                                    <tr key={index.id}>
                                        <td>{props.count[index.id - 1]} x ${index.final_price}</td>
                                        <td>{props.count[index.id - 1] * props.info[index.id - 1].final_price}</td>
                                    </tr>
                                    : null
                                }
                            </>))}
                    </table>
                    <hr />
                    <br /><br />
                    <table>
                        <tr style={{ paddingTop: '10px' }}>
                            <td>Total Savings</td>
                            <td>{
                                props.count[0] !== 0 ? 18 : 0
                            }</td>
                        </tr>
                        <tr>
                            <td>Delivery Fee</td>
                            <td>$5</td>
                        </tr>
                        <tr>
                            <td>Taxes And Charges</td>
                            <td>$2</td>
                        </tr>
                    </table>
                    <hr />
                    <table>
                        <tr>
                            <th>To PAY</th>
                            <th>{(props.count[0] * props.info[0].final_price) + (props.count[1] * props.info[1].final_price) + (props.count[2] * props.info[2].final_price) + (props.count[3] * props.info[3].final_price)}</th>
                        </tr>
                    </table>
                    <div style={{textAlign:'center'}} ><button className='placeOrder' >Place An ORDER</button></div>
                </div>

            </div>
        </div>
    );
}

export default SummaryPage;