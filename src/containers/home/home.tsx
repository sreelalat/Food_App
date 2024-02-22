import React from 'react'
import Header from '../../component/header/header'
import Categories from '../../component/categories/categories'
import { useSelector } from 'react-redux'

const Home = () => {
    const restaurantData = useSelector((state: any)=> state.main.restaurantData)
  return (
    <div className=' bg-[#030711] w-screen h-screen lg:px-[10%]'>
        <Header/>
        <Categories/>
    </div>
  )
}

export default Home