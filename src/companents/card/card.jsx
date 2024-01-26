import React from "react";
import { Form } from "../form";
import "./card.scss"

export const Card = ({name, age, id, setToodo }) => {
  const [editShow, setEditShow] = React.useState(false)
  const deleteCard = () => {
    setToodo((p) => p.filter((item) => item.id !== id));
  };
  const editeCard = () => {
    setEditShow(!editShow);
  }
  const changeItem = (data) => {
    setToodo((p) => p.map((item)=> item.id ===id ? {...data, id} : item))
    setEditShow(false);
  }


  return (
    <div id={id} className="cards">
      {editShow ? (
        <Form  defaultName = {name} defaultAge = {age} changeItem={changeItem}/>
      ) : (
        <>
          <h3 className="h3"> {name} </h3>
          <h3 className="text"> {age} </h3>
          <div className="card-btns">
            <button onClick={editeCard} className="edite">
              {" "}
              <i class="fa-solid fa-pen-to-square"></i>{" "}
            </button>
            <button onClick={deleteCard} className="delete">
              {" "}
              <i class="fa-solid fa-trash-can"></i>{" "}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
