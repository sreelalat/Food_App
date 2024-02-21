import { useEffect } from 'react'
import './App.css'
import Home from './containers/home/home'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantData } from './api/dishDetails'
import loaderIcon from './assets/gif/loader.gif'


function App() {

  const dispatch = useDispatch()

  const loading = useSelector((state:any)=> state.main.loading)

  useEffect(()=>{
    dispatch(getRestaurantData() as any)
  },[])

  return (
    <>
    {
      loading ?
      <div className=' w-screen h-screen bg-[#004d76] grid place-content-center'>
        <img className=' w-[500px]' src={loaderIcon} alt="loading..." />
      </div>
      :
      <Home/>

    }
    </>
  )
}

export default App
