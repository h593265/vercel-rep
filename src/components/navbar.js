
import '../style/navbar.css';


function Navbar({func}) {

  function scrollTo(ref,e){
    func(ref,e);
   
  }
  return (
    <div className="navbar-container">
     <div className="navbar-left">Daniel.dev</div>

     <div className="navbar-right">
        <div onClick={(e) => scrollTo('home',e)}> Home</div>
        <div onClick={(e) => scrollTo('about',e)}> About</div>
        <div onClick={(e) => {scrollTo("projects",e)}}> Projects</div>
        <div onClick={(e) => {scrollTo("contact",e)}}> Contact</div>
     </div>
    </div>
  );
}

export default Navbar;
