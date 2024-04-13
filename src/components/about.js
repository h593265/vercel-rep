
import '../style/about.css';

import '../style/font.css';

import React, { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <><div ref={ref} className="about-container">


      <div className="about-container-flex">

        <div className="about-profilepic-container">

          <img src="about-photo.jpg" alt="no-img" />

        </div>

        <div className="about-text-picture-space"></div>

        <div className="about-left">

          <div className="h1-about-text">ABOUT ME</div>

          <div className="h2-about-text">A capable  Developer based in Haugesund, Norway.

            <div className="p-about-text">I am a driven developer who`s always looking for a new challenge. I am capable in Javascript, HTML
              React, and CSS for front-end, but i also know Node JS, Express JS and Postgre SQL for the back-end. In addition to web i am able to use Dart, and the Flutter framework to build mobile apps. I belive i have
              the skills and patience to build beautiful and responsive websites and applications. And i have no problems with having to adapt to
              necessary demands and wishes.


            </div>
          </div>




        </div>




      </div>

    </div>
    
    <div className="skills-container">

    <div className="skills-container-h1">These</div>
<div className="skills-container-h2">Are my skills</div>

<div className="skills-boxes-container">
  <div className= "skills-box">
  <div className= "skills-box-h1">Frontend Development </div>
  <div  className='skills-box-card-container'>
  
  <div className='skills-box-card'>

    <div className='skills-box-card-language'>React</div>
    <div className='skills-box-card-level'>Experienced</div>

  </div>
  <div className='skills-box-card'>

    <div className='skills-box-card-language'>Javascript</div>
    <div className='skills-box-card-level'>Intermediate</div>

  </div>

  <div className='skills-box-card'>

<div className='skills-box-card-language'>CSS</div>
<div className='skills-box-card-level'>Intermediate</div>

</div>

<div className='skills-box-card'>

<div className='skills-box-card-language'>HTML</div>
<div className='skills-box-card-level'>Experienced</div>

</div>


  
    </div>
    </div>
    <div className= "skills-box">
  <div className= "skills-box-h1">Backend Development </div>
  <div  className='skills-box-card-container'>
  
  <div className='skills-box-card'>

    <div className='skills-box-card-language'>Node JS</div>
    <div className='skills-box-card-level'>Intermediate</div>

  </div>
  <div className='skills-box-card'>

    <div className='skills-box-card-language'>Express JS</div>
    <div className='skills-box-card-level'>Intermediate</div>

  </div>

  <div className='skills-box-card'>

<div className='skills-box-card-language'>Git</div>
<div className='skills-box-card-level'>Intermediate</div>

</div>

<div className='skills-box-card'>

<div className='skills-box-card-language'>PostgreSQL</div>
<div className='skills-box-card-level'>Experienced</div>

</div>


  
    </div>
    </div>
  </div>
      </div></>
  );
})

export default About;
