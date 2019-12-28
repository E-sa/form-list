import { ADD_ARTICLE } from "../constants/action-types";
import { ADD_ARTICLE1 } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}


export function addArticle1(payload) {
  return { type: ADD_ARTICLE1, payload };
}