import React from 'react';
import './Shopping.css';
import Shopping from './shopping.jpeg'
import Tongs from './tongs.jpeg'

export default function shopping() {
  return (
    <div className='shopcontainer'>
    <div className='shophead'><h1>SHOPPING</h1></div>
    <div className='imgcont1'>
    <div>
        <img src={Shopping}></img>
        <p className='linkp'><a className='linkpa' href='https://www.epicurious.com/shopping/80-new-cookbooks-coming-fall-2022'>80 New CookBooks Coming Fall 2022</a></p>
        <hr></hr>
        <p className='author'>BY JACQUELINE RAPOSO</p>
    </div>
    <div>
        <img src={Tongs}></img>
        <p className='linkp'><a className='linkpa' href='https://www.epicurious.com/shopping/i-tried-clever-tongs-and-they-sure-areclever'>We Tried the "As Seen on TV" Clever Tongs</a></p>
        <hr></hr>
        <p className='author'>BY EMILY FARRIS</p>
    </div>
    </div>
    
    
    
    
    </div>
  )
}
