import React from 'react'
import './Navbar.css';
import image from './images/logo.png'
import profile from './images/profile.png'
function Navbar() {
  return (
    <div className='fullnav'>

    <div className='nav'>
    <div className='navs'>
<img src={image} className='image'alt="#"/>
<a href="#Interaction">Interaction</a>
   <a href="#Tasks">Tasks</a>
  <a href="#Calender">Calender</a>
  <a href="#Members">Members</a>
  <a href="#Reports">Reports</a>
  </div>
  
  <div className='half'>
  <div class name="fullsearch">
 <div class="search-container">
  <form >
    <input type="text" placeholder ="search">
</input>
</form>
    </div>
    </div>
    <img src={profile} className='image1'alt="#"/>
</div>

</div>
</div>
  
  )
}

export default Navbar