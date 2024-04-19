import React from 'react'
import products from '../data'
import CardCarousal from './CardCarousal'
import cardimg from '../assets/cardssection.png'

const Slider=()=>{
    //things to be added here ,one API call 
    return(
        <div className='my-[40px] relative'>
            <div className='flex mt-[65px] flex-col justify-center items-center mx-auto relative mb-[58px]'>
                <h1 className='text-darkestpurple text-7xl font-bold font-fre pt-2 px-4'>Explore our vast Plethora of courses!</h1>
                <p className='text-dpurple text-xl opacity-95 font-mullish'>Choose from 100+ online video courses with new additions published every month</p>
            </div>
            <div className='w-7/12 mx-auto'>
                <CardCarousal data={products}/>
            </div>
            <div>
                <img src={cardimg} alt="girl" className='w-[900px] z-[-10] h-[800px] absolute bottom-[-165px] right-[-150px]'/>
            </div>
        </div>
    )
}
export default Slider;