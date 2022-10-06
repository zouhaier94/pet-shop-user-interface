import React from 'react'
import Cart from "./Cart"

export default function Shop({ data }) {
    /* 
        const cards = data.map(el => {
    
            return (
                <Cart
                    key={el}
                    name={el[0]}
                    price={el[1]}
                    img={el[2]}
                />
    
            )
    
        }) */

    const cart_data = JSON.parse(localStorage.getItem("cart"))

    const cart_list = cart_data.map(el => {

        return (
            <Cart
                key={el}
                name={el[0]}
                price={el[1]}
                img={el[2]}
            />

        )

    })

    console.log(data)

    return (
        <div className="flex-grow w-full text-center items-center p-5 mx-auto shadow-md mt-20 ">
            <p className='mb-5'>This Section is still under work!!!</p>
            <div className=" grid grid-cols-1 gap-3 justify-items-center ">
                {cart_list}
            </div>
        </div>
    )
}
