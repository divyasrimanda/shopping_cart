
import React from 'react';
import TitleHeader from './Components/Header/TitleHeader';
import HeaderMain from './Components/Header/HeaderMain';
import './App.css';
import HomeComponent from './Components/Home/Home';
function App() {
  return (
    <div>
      <TitleHeader />
      <HeaderMain />
      <HomeComponent bigTitle="Your Premium"  smallTitle="Sound, Unplugged!" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." findBtnText="" />
      </div>
 );
}

export default App;
