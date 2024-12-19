import React from 'react';
import Hero from "./Hero";
import Food from "./food";
import Menu from '../components/Menupage';

const food = () => {
  return (
    <div id='/food'>
      <Food/>
      <Hero/>
      <Menu/>

    </div>
  )
}

export default food