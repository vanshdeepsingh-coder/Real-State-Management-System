import Typography from "@mui/material/Typography"
import SearchBar from './SearchBar'
import dynamic from 'next/dynamic'

export const SearchResult = ({ result,setStr}) => {
    return (
      <Typography
        className="search-result" sx={{padding: "10px 20px", ":hover":{backgroundColor: "#efefef",cursor:"pointer"}}}
        onClick={()=>{setStr(result)}}
      >
        {result}
      </Typography>
    );
  };

  export default dynamic (()=>Promise.resolve(SearchResult), {ssr:false})