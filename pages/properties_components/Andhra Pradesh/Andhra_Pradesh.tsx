import Layout from "@/components/Layout/Layout";
import Typography from "@mui/material/Typography"
import { experimentalStyled as styled } from "@mui/material/styles";
import {Modal,ModalHeader} from "reactstrap"
import {useState,useEffect} from 'react'
import { FaSearch } from "react-icons/fa";
import Input from '@mui/material/Input'
import Link from '@mui/material/Link'  
import Form from '../../form'

import PropertyCards_1 from "./PropertyCards_1/PropertyCards";
import ProgressBar_1 from "./PropertyCards_1/ProgressBar"
import Heading_1 from "./PropertyCards_1/Heading"

import PropertyCards_2 from "./PropertyCards_2/PropertyCards";
import ProgressBar_2 from "./PropertyCards_2/ProgressBar"
import Heading_2 from "./PropertyCards_2/Heading"

import PropertyCards_3 from "./PropertyCards_3/PropertyCards";
import ProgressBar_3 from "./PropertyCards_3/ProgressBar"
import Heading_3 from "./PropertyCards_3/Heading"

import PropertyCards_4 from "./PropertyCards_4/PropertyCards";
import ProgressBar_4 from "./PropertyCards_4/ProgressBar"
import Heading_4 from "./PropertyCards_4/Heading"

export function Andhra_Pradesh(){
    const [modal,setModal]=useState(false);
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value);
    };

    return (
        <Layout pageTitle="Properties">
      <Modal size='lg' style={{marginTop:"13.5vh"}}isOpen={modal} toggle={()=>setModal(!modal)}>
        <ModalHeader>
          <Form/>
        </ModalHeader>
      </Modal>

<Heading_1/>
      
     <Typography style={{display:"flex", flexDirection:"row", flexWrap:"wrap",justifyContent:"space-around",alignItems:"center", backgroundSize:"100% 100%"}}>
       <PropertyCards_1/>
       <div style={{display:"flex", flexDirection:"column", width:"50rem"}}>
         <ProgressBar_1/>
       </div>
     </Typography>
     
     <Heading_2/>
          
     <Typography style={{display:"flex", flexDirection:"row", flexWrap:"wrap",justifyContent:"space-around",alignItems:"center", backgroundSize:"100% 100%"}}>
       <PropertyCards_2/>
       <div style={{display:"flex", flexDirection:"column", width:"50rem"}}>
         <ProgressBar_2/>
       </div>
     </Typography>
     
     <Heading_3/>
          
     <Typography style={{display:"flex", flexDirection:"row", flexWrap:"wrap",justifyContent:"space-around",alignItems:"center", backgroundSize:"100% 100%"}}>
       <PropertyCards_3/>
       <div style={{display:"flex", flexDirection:"column", width:"50rem"}}>
         <ProgressBar_3/>
       </div>
     </Typography>
     
     <Heading_4/>
          
     <Typography style={{display:"flex", flexDirection:"row", flexWrap:"wrap",justifyContent:"space-around",alignItems:"center", backgroundSize:"100% 100%"}}>
       <PropertyCards_4/>
       <div style={{display:"flex", flexDirection:"column", width:"50rem"}}>
         <ProgressBar_4/>
       </div>
     </Typography>
  
</Layout>
    );
}

export default Andhra_Pradesh