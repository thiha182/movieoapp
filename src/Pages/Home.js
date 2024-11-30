import React, { useEffect, useState } from 'react'
import BannerHome from '../Components/BannerHome'
import { useSelector } from 'react-redux';
import Card from '../Components/Card';
import HorizontalCard from '../Components/HorizontalCard';
import axios from 'axios';
import useFetch from '../Hooks/UseFetch';

const Home = () => {
  const trendingData = useSelector((state) => state.movieoData.bannerData);

  const {data : nowPlayingData} = useFetch('/movie/now_playing');
  const {data : topRatedData} = useFetch('/movie/top_rated');
  const {data : popularTvShowData} = useFetch('/tv/popular');
  const {data : onTheAirShowData} = useFetch('/tv/on_the_air');

  return (
    <div>
      <BannerHome/>
      <HorizontalCard data={trendingData} heading={"Trending"} trending={true}/>
      <HorizontalCard data={nowPlayingData} heading={"NowPlaying"} media_type={"movie"}/>
      <HorizontalCard data={topRatedData} heading={"Top Rates Movies"} media_type={"movie"}/>
      <HorizontalCard data={popularTvShowData} heading={"Popular Tv Show"} media_type={"tv"}/>
      <HorizontalCard data={onTheAirShowData} heading={"On The Air"} media_type={"tv"}/>

      
    </div>
  )
}

export default Home