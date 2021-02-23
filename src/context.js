import React, { useContext, createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import {
  SET_LOADING,
  SET_STORIES,
  HANDLE_SEARCH,
  HANDLE_REMOVE,
  HANDLE_PAGE,
} from './actions';

const AppContext = createContext();

const initialState = {
  loading: false,
  query: 'React',
  hits: [],
  page: 0,
  nbPages: 0,
};

const rootURL = 'http://hn.algolia.com/api/v1/search?';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const queryParam = `&query=${state.query}`;
  const pageParam = `&page=${state.page}`;

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    dispatch({ type: SET_STORIES, payload: data });
  };

  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
    dispatch({ type: HANDLE_SEARCH, payload: searchTerm });
  };

  const handleRemove = (id) => {
    dispatch({ type: HANDLE_REMOVE, payload: id });
  };

  const handlePage = (btn) => {
    dispatch({ type: HANDLE_PAGE, payload: btn });
  };

  useEffect(() => {
    fetchStories(`${rootURL}${queryParam}${pageParam}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, handleSearch, handleRemove, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
