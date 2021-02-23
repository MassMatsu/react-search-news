import { SET_STORIES, SET_LOADING, HANDLE_SEARCH } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_STORIES:
      const { hits, page, nbPages } = action.payload;
      return {
        ...state,
        loading: false,
        hits: hits,
        page: page,
        nbPages: nbPages,
      };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload };
    default:
      throw new Error(`no matching "${action.type}" action type`);
  }
};

export default reducer;
