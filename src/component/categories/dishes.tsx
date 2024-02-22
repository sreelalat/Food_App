import React from 'react'
import { NonVegIcon, VegIcon } from '../../assets/svg/svgFiles'
import CountButton from '../../atom/countButton'

const Dishes = (props: any) => {
    const {dish} = props;
  return (
    <div className=' border-b border-b-[#2d2f32] mt-5 mx-4 grid-cols-2	grid justify-between pb-4'>
        <div>
            <div className='flex gap-2.5 items-center mb-2'>
                { dish.dish_Type === 2 ? <VegIcon/> : <NonVegIcon/> }
                <span className=' font-medium'>{dish.dish_name}</span>
            </div>
            <div className='flex gap-1 text-xs ml-0.5'>
                <span className=' font-medium'>{dish.dish_currency}</span>
                <span>{dish.dish_price}</span>
            </div>
            <div className=' mt-2.5 text-xs text-[#646e7d] pb-3 ml-0.5'>
                {
                    dish.dish_description
                }
            </div>
            <CountButton item={dish.dish_id}/>
            {
                dish?.addonCat?.length !== 0  &&
                <div className=' text-[#dd2626] text-sm mt-2.5 ml-0.5'>Customization available</div>
            }
        </div>
        <div className='flex gap-4 justify-end'>
            <span className='text-xs mt-6'>15 Calories</span>
            <img className=' w-[100px] h-[100px] rounded-xl object-cover' src={dish.dish_image} alt={dish.dish_name} />
        </div>
    </div>
  )
}

export default Dishes