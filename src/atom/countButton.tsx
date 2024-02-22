import React, { useEffect, useState } from 'react'
import { MinusIcon, PlusIcon } from '../assets/svg/svgFiles'
import { useDispatch, useSelector } from 'react-redux';
import { setCartData } from '../store/slices/mainSlice';

const CountButton = (props:any) => {
    const {item} = props;
    const dispatch = useDispatch()
    const cartData = useSelector((state: any) => state.main.cartData)
    const [count, setCount] = useState(0);
    useEffect(()=>{
        if(cartData.length > 0) {
            const dishIndex = cartData.findIndex((dish: any)=>dish.id === item);
            if(dishIndex !== -1)
                setCount(cartData[dishIndex]?.count)
            // else{
            //     setCount(0)
            // }
            
        } else {
            setCount(0)
        }
    },[cartData])

    const handleCount = (add: boolean) => {
        dispatch(setCartData({'id':item , 'addition': add}))
    }
  return (
    <div className='flex items-center gap-[17px] bg-[#1da34a] w-fit px-4 rounded-[10px]'>
        <span onClick={()=>handleCount(false)}><MinusIcon/></span>
        <span>{count}</span>
        <span onClick={()=>handleCount(true)}><PlusIcon/></span>
    </div>
  )
}

export default CountButton