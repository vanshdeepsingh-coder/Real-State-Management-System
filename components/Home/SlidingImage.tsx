import React from "react"
import image1 from "./image/image1.jpg"
import image2 from "./image/image2.jpg"
import image3 from "./image/image3.jpg"
import image4 from "./image/image4.jpg"
import image5 from "./image/image5.jpg"
import image6 from "./image/image6.jpg"

import Typography from "@mui/material/Typography"
import Image from "next/image"
import Paper from "@mui/material/Paper"

import Box from "@mui/material/Box"

const colors = [image1, image2, image3, image4, image5, image6];
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
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
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

      <Typography sx={{display:"inline-block", height:"20px", width:"20px", borderRadius:"50%", cursor:"pointer", margin:"15px 7px 0px", backgroundColor:"#c4c4c4"}}>
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </Typography>
    </Typography>
  );
}

export default SlidingImage;