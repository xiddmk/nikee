import React from 'react'
import '../index.css'

const Card = (props) => {
    return (
        <div className='backg rounded-3xl h-2/3 w-1/4 p-3 pb- flex items-start justify-between flex-col relative'>


            <div>
                <img className='h-7' src={props.logo} />
            </div>

            <img className='shoes absolute h-40  top-10 left-0 ' src={props.shoe} />


            <div className='flex flex-col gap-2 items-center min-w-full justify-center pb-10'>

                <p className='font-light text-xs'><b>
                    {props.comp}
                </b></p>
                <h1 className='font-bold text-2xl font-Oswald extralight' >
                    <b>
                        {props.name}
                    </b>
                </h1>

                <p className='font-light text-xs pt-8 text-center w-60'>
                {props.abot}
                </p><br></br>

                <button className='rounded-3xl w-3/4 bg-pink-500 text-white p-2'>
                {props.price} - ADD TO CART
                </button>



            </div>


        </div>
    )
}

export default Card
