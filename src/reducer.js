import {
  SET_STORIES,
  SET_LOADING,
  HANDLE_SEARCH,
  HANDLE_REMOVE,
} from './actions';

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
    case HANDLE_REMOVE:
      const newHits = state.hits.filter(
        (story) => story.objectID !== action.payload
      );
      return { ...state, hits: newHits };

    default:
      throw new Error(`no matching "${action.type}" action type`);
  }
};

export default reducer;
