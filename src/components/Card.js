import React from "react";
import { deleteCard, copyCard } from "../redux/cardAction";
function Card(props) {
  let { data, dispatch, handleUpdate } = props;
  return (
    <div className="card">
      <h4> Card Name : {data.name}</h4>
      <h5>Project Budget : {data.budget}</h5>
      <button id ={data.id} onClick={handleUpdate}>edit</button>
      <button onClick={() => dispatch(deleteCard({ id: data.id }))}>
        delete
      </button>
      <button onClick={() => dispatch(copyCard({ id: data.id }))}>copy</button>
    </div>
  );
}

export default Card;
