import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptios.css"


const NavOptios = ({miPhones,redmiPhones,tv,fitnessAndLifeStyle,laptop,home,accessories,audio}) => {

    const[miPhonesToggle,setmiPhonesToggle]=useState(false);
    const[redmiPhonesToggle,setredmiPhonesToggle]=useState(false);
    const[tvToggle,settvToggle]=useState(false);
    const[fitnessAndLifeStyleToggle,setfitnessAndLifeStyleToggle]=useState(false);
    const[homeToggle,sethomeToggle]=useState(false);
    const[accessoriesToggle,setaccessoriesToggle]=useState(false);
    const[laptopToggle,setlaptopToggle]=useState(false);
    const[audioToggle,setaudioToggle]=useState(false);

    useEffect(() => {
        
        if(window.location.pathname ==="/miphones"){
            return setmiPhonesToggle(true)
        }
        if(window.location.pathname ==="/redmiphones"){
            return setredmiPhonesToggle(true)
        }
        if(window.location.pathname ==="/tv"){
            return settvToggle(true)
        }
        if(window.location.pathname ==="/fitnessandlifestyle"){
            return setfitnessAndLifeStyleToggle(true)
        }
        if(window.location.pathname ==="/home"){
            return sethomeToggle(true)
        }
        
        if(window.location.pathname ==="/accessories"){
            return setaccessoriesToggle(true)
        }
        if(window.location.pathname ==="/laptop"){
            return setlaptopToggle(true)
        }
       
      
    })
        
return (
    <div className="navOptions">
   
    {
        miPhonesToggle? miPhones.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) :null
    }

    {
        redmiPhonesToggle? redmiPhones.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) :null
    }


    {
        tvToggle? tv.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) :null
    }


    {
        fitnessAndLifeStyleToggle? fitnessAndLifeStyle.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) :null
    }

    {
        homeToggle? home.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) :null
    }
    {
        accessoriesToggle? accessories.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) :null
    }
    
    {
        laptopToggle? laptop.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) :null
    }
    </div>
  )
}

export default NavOptios
