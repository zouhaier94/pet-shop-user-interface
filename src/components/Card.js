import React from 'react'

export default function Card({ img, name, price, el, handleAdd }) {

    return (
        <div className="card ">
            <img className="card--img" src={img} alt="" />
            <div className="text-center grid grid-rows-2 justify-items-center mb-1">
                <div className="font-bold ">{name}</div>
                <div>{price}$</div>
                <button onClick={() => handleAdd(el)} className="cart--badge" >Buy Now</button>
            </div>
        </div>

    )
}

