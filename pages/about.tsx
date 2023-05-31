import Layout from "@/components/Layout/Layout";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import {useEffect,useState} from "react"
import image from "./image/image1.jpg"
import keyframes from "react"



export default function About() {

  // const withTM = require("next-transpile-modules")([
  //   "gsap",
  //   "hover-effect",
  // ]);

  // module.exports = withTM();
  // useEffect(()=> {
  //   new hoverEffect({
  //     parent: container.current,
     
  //   })
  //  }
  // ,[container])

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  const check=() =>{
    if(typeof window==='undefined') return true;
    return false;
  }

  const display = () =>{
    if(check()) return false;

    if(screenSize.dynamicWidth >= 566){
      return (
        <Box sx={{marginLeft:"0.5vw", width:"99vw",marginBottom:"5px", display:"flex", flexDirection:"row", flexWrap:"wrap",alignItems:"center",justifyConent:"flex-start"}}>
        <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:"rgb(137,118,205)", width:"20%",height:"7vh"}}>About us</Typography>
        <Button sx={{flexGrow:"2",width:"20%",height:"7vh"}}>Origination</Button>
        <Button sx={{flexGrow:"2",width:"20%",height:"7vh"}}>Foundation </Button>
        <Button sx={{flexGrow:"2",width:"20%",height:"7vh"}}>Working </Button>
        <Button sx={{flexGrow:"2",width:"20%",height:"7vh"}}>Branches </Button>
        <Button sx={{flexGrow:"2",width:"20%",height:"7vh"}}>Partners </Button>
        <Button sx={{flexGrow:"3",width:"20%",height:"7vh"}}>Future Planning </Button>
        <Button sx={{flexGrow:"3",width:"20%",height:"7vh"}}>Others </Button>
        </Box>
      );
    }
    else if(screenSize.dynamicWidth >=480){
      return (
        <Box sx={{marginLeft:"2vw", width:"95vw",marginBottom:"5px", display:"flex", flexDirection:"row", flexWrap:"wrap",alignItems:"center",justifyConent:"flex-start"}}>
        <Typography sx={{display:"flex",fontSize:"75%",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:"rgb(137,118,205)", width:"20%",height:"7vh"}}>About us</Typography>
        <Button sx={{fontSize:"75%",flexGrow:"2",width:"20%",height:"7vh"}}>Origination</Button>
        <Button sx={{fontSize:"75%",flexGrow:"2",width:"20%",height:"7vh"}}>Foundation </Button>
        <Button sx={{fontSize:"75%",flexGrow:"2",width:"20%",height:"7vh"}}>Working </Button>
        <Button sx={{fontSize:"75%",flexGrow:"2",width:"20%",height:"7vh"}}>Branches </Button>
        <Button sx={{fontSize:"75%",flexGrow:"2",width:"20%",height:"7vh"}}>Partners </Button>
        <Button sx={{fontSize:"75%",flexGrow:"3",width:"20%",height:"7vh"}}>Future Planning </Button>
        <Button sx={{fontSize:"75%",flexGrow:"3",width:"20%",height:"7vh"}}>Others </Button>
        </Box>
      );
    }
    else{
      return(
        <Box sx={{marginLeft:"2vw", width:"95vw",marginBottom:"5px", display:"flex", flexDirection:"row", flexWrap:"wrap",alignItems:"center",justifyConent:"flex-start"}}>
        <Typography sx={{display:"flex",fontSize:"60%",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:"rgb(137,118,205)", width:"20%",height:"7vh"}}>About us</Typography>
        <Button sx={{fontSize:"60%",flexGrow:"2",width:"20%",height:"7vh"}}>Origination</Button>
        <Button sx={{fontSize:"60%",flexGrow:"2",width:"20%",height:"7vh"}}>Foundation </Button>
        <Button sx={{fontSize:"60%",flexGrow:"2",width:"20%",height:"7vh"}}>Working </Button>
        <Button sx={{fontSize:"60%",flexGrow:"2",width:"20%",height:"7vh"}}>Branches </Button>
        <Button sx={{fontSize:"60%",flexGrow:"2",width:"20%",height:"7vh"}}>Partners </Button>
        <Button sx={{fontSize:"60%",flexGrow:"3",width:"20%",height:"7vh"}}>Future Planning </Button>
        <Button sx={{fontSize:"60%",flexGrow:"3",width:"20%",height:"7vh"}}>Others </Button>
        </Box>
      );
    }
  }

  return (
    <Layout pageTitle="About">
     {display()}
     <Typography sx={{backgroundImage:`url(${image})`,backgroundSize:"100% 100%",width:"100vw", height:"195vh",border:"", marginLeft:"",marginTop:"2vw", textAlign:"center"}}>
      <h2>What do you want to Know ?</h2>
      <Typography sx={{backgroundImage:`url(${image.src})`,display:"inline-block",width:"71.5vw",height:"44vh",marginLeft:"1vw",float:"left"}}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea inventore eius quam sint ducimus voluptates minima sit amet iure eum dicta beatae harum illo, rem consequuntur debitis temporibus. Inventore unde laudantium error ad repudiandae quo omnis iure obcaecati deserunt, tempora qui molestiae nihil, dolores quaerat debitis saepe eveniet cupiditate quas eligendi. 
      </p>
      </Typography>
      <Typography sx={{display:"inline-block",width:"25vw",height:"44vh",marginRight:"1.3vw",float:"right", border:"1px solid black"}}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea inventore eius quam sint ducimus voluptates minima sit amet iure eum dicta beatae harum illo, rem consequuntur debitis temporibus. Inventore unde laudantium error ad repudiandae quo omnis iure obcaecati deserunt, tempora qui molestiae nihil, dolores quaerat debitis saepe eveniet cupiditate quas eligendi. 
      </p>
      </Typography>
      <Typography sx={{display:"inline-block",width:"71.5vw", height:"44vh",float:"right",marginTop:"1vw",marginRight:"1.3vw",border:"1px solid black"}}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque autem dolor adipisci aperiam animi, dolore, repudiandae ut similique illo dolorem id voluptates iusto magni at perferendis alias ad ipsam. Alias, veritatis minus?</p>
      </Typography>
      <Typography sx={{display:"inline-block",width:"25vw", height:"44vh",float:"left",marginTop:"1vw",marginLeft:"1vw",border:"1px solid black"}}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque autem dolor adipisci aperiam animi, dolore, repudiandae ut similique illo dolorem id voluptates iusto magni at perferendis alias ad ipsam. Alias, veritatis minus?</p>
      </Typography>
      <Typography sx={{display:"inline-block",width:"71.5vw",height:"44vh",marginLeft:"1vw",marginTop:"1vw",float:"left", border:"1px solid black"}}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea inventore eius quam sint ducimus voluptates minima sit amet iure eum dicta beatae harum illo, rem consequuntur debitis temporibus. Inventore unde laudantium error ad repudiandae quo omnis iure obcaecati deserunt, tempora qui molestiae nihil, dolores quaerat debitis saepe eveniet cupiditate quas eligendi. 
      </p>
      </Typography>
      <Typography sx={{display:"inline-block",width:"25vw",height:"44vh",marginRight:"1.3vw",marginTop:"1vw",float:"right", border:"1px solid black"}}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea inventore eius quam sint ducimus voluptates minima sit amet iure eum dicta beatae harum illo, rem consequuntur debitis temporibus. Inventore unde laudantium error ad repudiandae quo omnis iure obcaecati deserunt, tempora qui molestiae nihil, dolores quaerat debitis saepe eveniet cupiditate quas eligendi. 
      </p>
      </Typography>
      <Typography sx={{display:"inline-block",width:"71.5vw", height:"44vh",float:"right",marginTop:"1vw",marginRight:"1.3vw",border:"1px solid black"}}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque autem dolor adipisci aperiam animi, dolore, repudiandae ut similique illo dolorem id voluptates iusto magni at perferendis alias ad ipsam. Alias, veritatis minus?</p>
      </Typography>
      <Typography sx={{display:"inline-block",width:"25vw", height:"44vh",float:"left",marginTop:"1vw",marginLeft:"1vw",border:"1px solid black"}}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque autem dolor adipisci aperiam animi, dolore, repudiandae ut similique illo dolorem id voluptates iusto magni at perferendis alias ad ipsam. Alias, veritatis minus?</p>
      </Typography>
     </Typography>
    </Layout>
  );
}
