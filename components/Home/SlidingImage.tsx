import React from "react"
import property1 from "./image/property1.jpg"
import property2 from "./image/property2.jpg"
import property3 from "./image/property3.jpg"
import property4 from "./image/property4.jpg"
import property5 from "./image/property5.jpg"
import property6 from "./image/property6.jpg"

import Typography from "@mui/material/Typography"
import Image from "next/image"
import dynamic from 'next/dynamic'

const colors = [property1, property2, property3, property4, property5, property6];
const delay = 2500;

const check = ()=>{
  if(typeof window==='undefined'){
    return false;
  }

  if(window.innerWidth > 1000) return true;
  else return false;
}

const getImage =(image,index)=>{
  if(check()){
    return <Image alt="this is an image" style={{width:"100vw", height:"100vh"}} src={image} key={index}/>
  }
  else{
    return <Image alt="this is an image" style={{width:"100vw", height:"35vh"}} src={image} key={index}/>
  }
}

function SlidingImage() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef=React.useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
     setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay

    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Typography sx={{margin: "0 auto", overflow: "hidden", maxWidth: "300vw"}}>
      <Typography sx={{whiteSpace: "nowrap", transition:"ease 1000ms", transform: `translate3d(${-index * 100}%, 0, 0)`}}>
        {colors.map((image, index) => (
          getImage(image,index)
        ))}
      </Typography>
    </Typography>
  );
}

export default dynamic (()=>Promise.resolve(SlidingImage), {ssr:false})