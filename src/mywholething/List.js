import React from "react";
import { connect } from "react-redux";
import './styles/list.scss'


const mapStateToProps = state => {
  return { articles: state.articles };

};

const ConnectedList = ({ articles }) => (
  <ul className={'first-ul'} id={'one'}>
    {articles.map(el => (
      <li className="first" key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);
export default List;