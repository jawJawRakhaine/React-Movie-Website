import React from "react";
import { useAppContext } from "./useContext";

const Search = () => {
  const { query, setQuery, isError } = useAppContext();
  return (
    <>
      <section className="search-section">
        <h1>Search your favourite movie</h1>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Movie name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <h4>{isError.show && isError.msg}</h4>
        </div>
      </section>
      ;
    </>
  );
};

export default Search;
