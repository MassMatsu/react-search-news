import {
  SET_STORIES,
  SET_LOADING,
  HANDLE_SEARCH,
  HANDLE_REMOVE,
  HANDLE_PAGE,
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
      return { ...state, query: action.payload, page: 0 };
    case HANDLE_REMOVE:
      const newHits = state.hits.filter(
        (story) => story.objectID !== action.payload
      );
      return { ...state, hits: newHits };
    case HANDLE_PAGE:
      let newPage;
      if (action.payload === 'prev') {
        newPage = state.page - 1;
        if (newPage < 0) {
          newPage = state.nbPages - 1;
        }
      }
      if (action.payload === 'next') {
        newPage = state.page + 1;
        if (newPage > state.nbPages - 1) {
          newPage = 0;
        }
      }
      return { ...state, page: newPage };

    default:
      throw new Error(`no matching "${action.type}" action type`);
  }
};

export default reducer;
