import { SearchResult } from "./SearchResult";
import dynamic from 'next/dynamic'

export const SearchResultsList = ({ results, setStr}) => {
  return (
    <div className="results-list" style={{
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 8px #ddd",
        borderRadius: "10px",
        marginTop: "1rem",
        maxHeight: "300px",
        overflowY: "auto"
    }}>
      {results.map((result, id) => {
        return <SearchResult result={result.name} setStr={setStr} key={id} />;
      })}
    </div>
  );
};

export default dynamic (()=>Promise.resolve(SearchResultsList), {ssr:false})