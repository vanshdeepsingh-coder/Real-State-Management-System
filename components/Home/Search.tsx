import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultLists";

export function Search() {
    const [results, setResults] = useState([]);
    const [str,setStr]=useState("");
  
    return (
      <div className="App">
        <div className="search-bar-container">
          <SearchBar setResults={setResults} str={str} setStr={setStr}/>
          {results && results.length > 0 && <SearchResultsList results={results} setStr={setStr} />}
        </div>
      </div>
    );
  }
  
  export default Search;