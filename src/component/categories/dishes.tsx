import React from 'react'
import { NonVegIcon, VegIcon } from '../../assets/svg/svgFiles'

const Dishes = () => {
  return (
    <div className=' border-b border-b-[#2d2f32] mt-5 mx-4 flex justify-between pb-4'>
        <div>
            <div className='flex gap-2.5 items-center mb-2'>
                { true ? <VegIcon/> : <NonVegIcon/> }
                <span className=' font-medium'>Dish Name</span>
            </div>
            <div className='flex gap-1 text-xs ml-0.5'>
                <span className=' font-medium'>SAR</span>
                <span>7.95</span>
            </div>
            <div className=' mt-2.5 text-xs text-[#646e7d] pb-3 ml-0.5'>
                Discription dkbadajdk
                sadjasdj
            </div>
            <button>test</button>
            <div className=' text-[#dd2626] text-sm mt-2.5 ml-0.5'>Customization available</div>
        </div>
        <div>
            <span>15 Calories</span>
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default Dishes