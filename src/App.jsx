import React from "react";
import { Form } from "./companents/form"
import { Card } from "./companents/card";
import "./main.scss";

function App() {
  const [user, setToodo] = React.useState([]);
  // const [bool, setBool] = React.useState(false);

  return (
    <>
      <div className="main">
        <div className="container">
          <h1 className="title">Todo List</h1>
          <Form pushDate={setToodo} />
          <div className="box">
            {user.map((item) => (
              <Card key={item.id} setToodo={setToodo} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
