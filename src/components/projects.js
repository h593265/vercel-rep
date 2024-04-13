
import '../style/projects.css';
import React, { forwardRef } from 'react';
const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="projects-container">
         <div  className="projects-container-inner">
      <div className="projects-container-h1">Projects</div>
      <div className="projects-container-h2">Scroll Through and let me know if you're interested !</div>
      <div className="projects-container-flex">
        
        <img className = "projects-photo" src = 'about-photo.jpg' alt='no img'/>
        <div className="projects-text-container">

            <div className="projects-title">Kitchen Ecommerce</div>
            <div className="projects-description">A hotel service website made to allow potential clients to reserve rooms at a hotel. 
                The website provides a ui that is user friendly and elegant.</div>

                <div className="projects-languages-container-flex">
               
            <div className="projects-languages">React</div>
            <div className="projects-languages">CSS</div>
            </div>
            <div  className="projects-button-container" >
            <div><a className="projects-link" href=''>Demo</a></div>
            <img className="projects-button-img"src='redirect.png' alt='no img'/>

            </div>
           

            </div>
            
            </div>
        </div>


        
     
      <div className="projects-container-flex">
        
      <img className = "projects-photo" src = 'about-photo.jpg' alt='no img'/>
        <div className="projects-text-container">

            <div className="projects-title">Hotel service</div>
            <div className="projects-description">A hotel service website made to allow potential clients to reserve rooms at a hotel. 
                The website provides a ui that is user friendly and elegant.</div>

                <div className="projects-languages-container-flex">
               
            <div className="projects-languages">React</div>
            <div className="projects-languages">CSS</div>
            </div>
            <div  className="projects-button-container" >
            <div><a className="projects-link" href=''>Demo</a></div>
            <img className="projects-button-img"src='redirect.png' alt='no img'/>

            </div>
           


            
            </div>
        </div>


        <div className="projects-container-flex">
        
        <img className = "projects-photo" src = 'about-photo.jpg' alt='no img'/>
          <div className="projects-text-container">
  
              <div className="projects-title">Hotel service</div>
              <div className="projects-description">A hotel service website made to allow potential clients to reserve rooms at a hotel. 
                  The website provides a ui that is user friendly and elegant.</div>
  
                  <div className="projects-languages-container-flex">
                 
              <div className="projects-languages">React</div>
              <div className="projects-languages">CSS</div>
              </div>
              <div  className="projects-button-container" >
              <div><a className="projects-link" href=''>Demo</a></div>
              <img className="projects-button-img"src='redirect.png' alt='no img'/>
  
              </div>
             
  
  
              
              </div>
          </div>
    </div>

  );
})

export default Projects;
