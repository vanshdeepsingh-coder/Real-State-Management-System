import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Input from '@mui/material/Input'
import Link from 'next/link'
import dynamic from 'next/dynamic'

export let value=""

export const SearchBar = ({setResults,str,setStr}) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:3001/user")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setStr("")
    setInput(value);
    value=value.toLowerCase()
    fetchData(value);
  };

  return (
    <div style={{display:"flex", flexDirection:'row'}}>
    <div className="input-wrapper" style={{
      width: "90%",
      height: "3rem",
      border: "none",
      borderRadius: "10px",
      padding: "0 15px",
      boxShadow: "0px 0px 8px #ddd",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
    }}>
    <FaSearch id="search-icon" style={{color:"royalblue"}}/>
    <Input
      placeholder="Type to search..."
      value={str===""?input:str}
      onChange={(e) =>{handleChange(e.target.value)}}
      sx={{
        backgroundColor: "transparent",
        border: "none",
        height: "100%",
        fontSize:"1.25rem",
        width: "100%",
        marginLeft: "15px",
        ":focus":{outline: "none"}
      }}
    />
  </div>
  <Link href="/properties" className="btn btn-primary" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"3rem", width:"5rem",borderRadius:"10px", backgroundColor:"rgb(95,0,189)"}}  onClick={(e)=>{str===""?value=input:value=str}}>Search</Link>
  </div>
  
  );
};

export default dynamic (()=>Promise.resolve(SearchBar), {ssr:false})