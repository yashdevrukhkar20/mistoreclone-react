import './App.css';
import PreNavbar from './component/PreNavbar';
import Navbar from './component/Navbar.js';
import { BrowserRouter as Router } from "react-router-dom"
import Slider from "./component/Slider.js"
import data from "./data/data.json"
import Headings from "./component/Headings.js"
import StarProduct from "./component/StarProduct.js"
import Footer from "./component/Footer.js"
import NavOptios from "./component/NavOptios"
 
function App() {
  return (

  <Router>

  
  <PreNavbar/>
  <Navbar />
  <NavOptios miPhone={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop}
  fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} 
  accessories={data.accessories} />
  <Slider start={data.banner.start}/>
  <Headings text="STAR PRODUCTS"/>
  <StarProduct starProduct={data.starProduct}/>
  <Footer/>

  </Router>

  );
}
export default App;
