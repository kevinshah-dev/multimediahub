//Contains the header seen at the top of the main url (https://multimediahub.netlify.app/)

//Clicking on the header (Multimedia Hub) scrolls to the top of the page
import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">  
      Multimedia Hub 
    </span>
  );
};

export default Header;
