import Input from "@mui/material/Input"
import Link from 'next/link'
import { Experimental_CssVarsProvider, experimentalStyled as styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography"
// import {value1} from './properties_components/Andhra Pradesh/PropertyCards_1/PropertyCards'
// import {value2} from './properties_components/Andhra Pradesh/PropertyCards_2/PropertyCards'
import React, {useState,useEffect} from 'react'
import dynamic from 'next/dynamic'

export let Title=""
export let Address=""
export let City=""
export let value_check=""

const StyledHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
}));

function func1(){

    const title = document.getElementById('inputTitle4') as HTMLInputElement;
    const address = document.getElementById('inputAddress') as HTMLInputElement;
    const city = document.getElementById('inputCity') as HTMLInputElement;
    const file = document.getElementById('#myfile') as HTMLFormElement

    if(title!=null){
      Title=title.value;
    }

    if(address!=null){
      Address=address.value;
    }

    if(city!=null){
      City=city.value;
    }
}

export function form(){

  return (
    
    <form className="row g-3" style={{width:"100%", height:"100%", marginLeft:"0.5vw", marginTop:"2vh"}}>
      {/* <div className="col-12" style={{marginTop:"4%"}}>
      <StyledHeading variant="h4">Please Enter your details</StyledHeading>
      </div> */}
      
      <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <Input type="email" className="form-control" id="inputEmail4"/>
      </div>

      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Password</label>
        <Input type="password" className="form-control" id="inputPassword4"/>
      </div>

      <div className="col-12" style={{marginTop:"4%"}}>
          <label htmlFor="inputEmail4" className="form-label">Title</label>
          <Input type="email" className="form-control" id="inputTitle4"/>
      </div>

      <div className="col-12" style={{marginTop:"4%"}}>
        <label htmlFor="inputAddress" className="form-label">Address</label>
        <Input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
      </div>

      <div className="col-md-5" style={{marginTop:"4%"}}>
        <label htmlFor="inputCity" className="form-label">City</label>
        <Input type="text" className="form-control" id="inputCity"/>
      </div>

      <div className="col-md-5" style={{marginTop:"4%"}}>
        <label htmlFor="inputZip" className="form-label">Zip</label>
          <Input type="text" className="form-control" id="inputZip"/>
      </div>

      <div className="col-12" style={{display:"flex", flexDirection:"row",marginTop:"6%"}}>
        <div className="form-check">
        <Input className="form-check-input" type="checkbox" id="gridCheck"/>
        <label className="form-check-label" htmlFor="gridCheck">
            Check
        </label>
      </div>

      <label style={{marginLeft:"45%", marginRight:"2%", marginTop:"1%"}} className="form-check-label" htmlFor="myfile">Image:</label>
      <input style={{marginTop:"1%"}} type="file" id="myfile" name="myfile"></input>
      
    </div>

    <div style={{display:"flex", justifyContent:"space-around", width:"50%",marginLeft:"35%", marginTop:"6%"}}>
  <div className="col-12">
    <Link href="/properties" className="btn btn-primary" style={{width:"75px"}} onClick={()=>func1()}>Submit</Link>
  </div>

  <div className="col-12" style={{marginLeft:"25%"}}>
    <button type="reset" className="btn btn-primary" style={{width:"75px"}}>Reset</button>
  </div>
  </div>
</form>
  );
}

export default dynamic (()=>Promise.resolve(form), {ssr:false})
