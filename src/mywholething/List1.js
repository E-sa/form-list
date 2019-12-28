import React from "react";
import { connect } from "react-redux";
import './styles/list.scss'



const mapStateToProps1 = state => {
  return { articles1: state.articles1 };

};

const ConnectedList1 = ({ articles1 }) => (
  <ul className={'sec-ul'} id={'two'}>
    {articles1.map(el => (
      <li className="second" key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const List1 = connect(mapStateToProps1)(ConnectedList1);
export default List1;