
import '../style/home.css';
import React, { forwardRef } from 'react';
const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="home-container">

      <div className="home-container-flex">
        <div className="home-left">

          <div className="big-home-text" >Web and Mobile Developer</div>

          <div className="small-home-text" >Hi, i'm Daniel Endresen. I am passionate about utilizing the latest tech,
            and building software. I specialize in front-end and mobile development. I am currently based in Haugesund, Norway.

          </div>
          <div className="tech-stack-container" style={{ marginTop: "200px" }}>

            <div className="tech-stack-text"> Web Tech stack </div>

            <div className="tech-stack-text-spacer"> | </div>
            <div className="tech-stack-picture-container">
              <img src='react.png' alt='none'/>
              <img src='js.jpg' alt='none'/>
              <img src='html.png' alt='none'/>
              <img src='css.png' alt='none'/>

            </div>
          </div>
          
          <div className="tech-stack-container" >

            <div className="tech-stack-text"> Mobile Tech stack</div>

            <div className="tech-stack-text-spacer"> | </div>

            <div className="tech-stack-picture-container">
             
            <img src='flutter.png' alt='none'/>

            </div>
          </div>

        </div>
        <div className="home-text-picture-space"></div>
        <div className="home-right">

          <div className="home-profilepic-container">
            <img src="/profilepic.jpg" alt="no-img" />

          </div>

        </div>


      </div>

    </div>

  );
})

export default Home;
