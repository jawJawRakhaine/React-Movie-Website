/*Three steps to create a context:
1. Create a context
2. Create a provider
3. Create a consumer
*/
import React, { useContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=af4db996`;
// Create a context
const AppContext = React.createContext();

// Create a provider
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", message: "" });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setIsLoading(false);
      } else {
        setIsError({ show: true, message: data.Error });
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies(`${API_URL}&s=${query}`);
  }, [query]);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        isError,
        movies,
        setMovies,
        setIsLoading,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// global custom hook
const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

// Create a consumer
export { AppContext, AppProvider, useAppContext };
