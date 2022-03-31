import React, { useState, useEffect } from 'react';
import info from '../JSON/info.json';
import '../App.css';
import Header from './Header';
import SummaryPage from './SummaryPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const localStorageCount = JSON.parse(localStorage.getItem("count")|| [0,0,0,0])
const ListingPage = () => {
    const [count, setCount] = useState(localStorageCount);
    const [summaryPageFlag, setSummaryPageFlag] = useState(false);
    function handleChange(id, sign) {
        if (id == 1 && sign == 'minus') {
            let newArr = [...count]; 
            newArr[id - 1] = count[id - 1] - 1;
            setCount(newArr);
        }
        if (id == 1 && sign == 'plus') {
            let newArr = [...count]; 
            newArr[id - 1] = count[id - 1] + 1;
            setCount(newArr);
        }
        if (id == 2 && sign == 'plus') {
            let newArr = [...count]; 
            newArr[id - 1] = count[id - 1] + 1;
            setCount(newArr);
        }
        if (id == 2 && sign == 'minus') {
            let newArr = [...count]; 
            newArr[id - 1] = count[id - 1] - 1;
            setCount(newArr);
        }
        if (id == 3 && sign == 'minus') {
            let newArr = [...count];
            newArr[id - 1] = count[id - 1] - 1;
            setCount(newArr);
        }
        if (id == 3 && sign == 'plus') {
            let newArr = [...count];
            newArr[id - 1] = count[id - 1] + 1;
            setCount(newArr);
        }
        if (id == 4 && sign == 'minus') {
            let newArr = [...count]; 
            newArr[id - 1] = count[id - 1] - 1;
            setCount(newArr);
        }
        if (id == 4 && sign == 'plus') {
            let newArr = [...count]; 
            newArr[id - 1] = count[id - 1] + 1;
            setCount(newArr);
        }

    }

    useEffect(() => {
        localStorage.setItem("count",JSON.stringify(count));
    }, [count]);

    return (
        <div>
            <div > <Header
                count={count}
                summaryPageFlag={()=> setSummaryPageFlag(true)}
            />
                <hr/></div>
                {
                    summaryPageFlag === false ? <div style={{textAlign:'center', fontWeight:'bolder'}}>
                    <b style={{color:'blue', textAlign:'center'}}>MOST POPULAR</b>
                    </div> : null
                }
           
            <br />
            <div className='landing'>
                
                {
                    summaryPageFlag === false ?
                        <div>
                            {info.map((i) => (
                                <div className="column" key={i.id}>
                                    {console.log(i.id)}
                                    <img src={i.img_url} alt="Snow" style={{ width: '300px' }} />
                                    <p>
                                        <span style={{ textTransform: 'uppercase', marginRight: '20px' }}>
                                            <b>{i.name}</b>
                                        </span>
                                        {
                                        i.original_price == undefined ? null :      
                                        <span className='originalPrice'>
                                            ${i.original_price}
                                        </span>
                                        }
                                        <span className='finalPrice'>
                                            ${i.final_price}
                                        </span>
                                    </p>
                                    <p className='description'>
                                        {i.description}
                                    </p>
                                    <p>
                                        <span style={{ display: 'inline' }}><button className='button' onClick={() => handleChange(i.id, 'minus')}>-</button><input min='0' className="input" value={count[i.id - 1]} /><button className='button' onClick={() => handleChange(i.id, 'plus')}>+</button></span>
                                    </p>
                                    {i.id == 4 ? <button className='addToCart' onClick={() => setSummaryPageFlag(true)}>Add to Cart</button> : null}
                                </div>
                            ))}
                        </div> :
                        <div>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<SummaryPage 
                                    info={info}
                                    count={count}
                                    handleChange={handleChange}
                                    summaryPageFlag={()=> setSummaryPageFlag(false)}
                                    />}>
                                    </Route>
                                </Routes>
                            </BrowserRouter>
                        </div>
                
                }
            </div>
        </div>
    );
}

export default ListingPage;
