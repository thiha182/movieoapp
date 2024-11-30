
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MobileNavigation from './Components/MobileNavigation';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setBannerData,setImageURL } from './store/MovieoSlice';


function App() {
  const dispatch = useDispatch()

  const fetchTrendingData = async() => {
    try{
      const response = await axios.get('/trending/all/week')
      dispatch(setBannerData(response.data.results))
      
    }catch(error) {
      console.log("error", error)
    }
  }

  const fetchConfiguration = async() => {
    try {
      const response = await axios.get("/configuration")
      dispatch(setImageURL( response.data.images.secure_base_url+"original"))
    } catch (error) {
      
    }
  } 

  useEffect (() =>{
    fetchTrendingData()
    fetchConfiguration()
  }, [])
  return (
    <main className='pb-14 lg:pb-0'>
      <Header/>
      <div className='min-h-[90vh]'>
      <Outlet/>
      </div>
      <Footer/>
      <MobileNavigation/>
    </main>
  );
}

export default App;
