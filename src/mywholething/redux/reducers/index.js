import { ADD_ARTICLE } from "../constants/action-types";
import { ADD_ARTICLE1 } from "../constants/action-types";

const initialState = {
  articles: [],
  articles1:[]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === ADD_ARTICLE1) {
    return Object.assign({}, state, {
      articles1: state.articles1.concat(action.payload)
    });
  }

  return state;
}
export default rootReducer;