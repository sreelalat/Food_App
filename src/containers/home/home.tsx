import React from 'react'
import Header from '../../component/header/header'
import Categories from '../../component/categories/categories'
import Dishes from '../../component/categories/dishes'

const Home = () => {
  return (
    <div className=' bg-[#030711] w-screen h-screen lg:px-[10%]'>
        <Header/>
        <Categories/>
        <Dishes/>
    </div>
  )
}

export default Home