import React from 'react'

export default function Cart({ img, name, price }) {

    return (


        <div className="rounded-2xl overflow-hidden border-2 bg-white md:w-[600px] md:h-[100px] w-[400px] h-[70px] grid grid-cols-9 ">

            <img className="col-span-5 h-full md:w-[100px] w-[70px]" src={img} alt="" />

            <div className="col-span-3 h-full grid text-center justify-items-center ">

                <div></div>{name}: {price}$

            </div>

            <div className='col-span-1 grid grid-cols-2 gap-1 mr-2'>
                <img className=" md:h-8 h-6 self-center mx-auto cursor-not-allowed" src={require('../images/add.png')} alt="" />
                <img className=" md:h-8 h-6 self-center mx-auto cursor-not-allowed" src={require('../images/sub.png')} alt="" />
            </div>

        </div>


    )
}

