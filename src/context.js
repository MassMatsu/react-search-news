import React, { useContext, createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import { SET_LOADING, SET_STORIES } from './actions';

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

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    dispatch({ type: SET_STORIES, payload: data });
  };

  useEffect(() => {
    fetchStories(`${rootURL}${queryParam}`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
