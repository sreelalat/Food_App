import React from 'react';
import {CartIcon, NonVegIcon, VegIcon} from '../../assets/svg/svgFiles'
import { useSelector } from 'react-redux';

const Header = () => {
    const restaurantData = useSelector((state: any)=> state.main.restaurantData);
    const cartData = useSelector((state: any) => state.main.cartData)

  return (
    <div className='flex justify-between items-center px-5 py-6'>
        <div className=' text-xl font-bold'>{restaurantData[0]?.restaurant_name}</div>
        <div className='flex gap-4 items-center'>
            <span className=' text-base'>My orders</span>
            <div className=' relative'>
                <span className=' w-4 h-4 text-xs grid place-content-center absolute right-0 top-0 rounded-full bg-[#b91c1c]'>{cartData?.length}</span>
                <CartIcon/>
                {/* <NonVegIcon/>
                <VegIcon /> */}
            </div>
        </div>
    </div>
  )
}

export default Header