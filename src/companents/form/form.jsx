import React from "react";
import "./form.scss"

export const Form = ({ pushDate, defaultName,  defaultAge, changeItem}) => {
  try {
    const [input, setInput] = React.useState({
      name: defaultName,
      age: defaultAge,
    });

    const submit = (e) => {
      e.preventDefault();
      if (!(defaultAge && defaultName)){
        if (input.name != "" || input.age != "") {
          pushDate((p) => [...p, { ...input, id: Date.now() }]);
          setInput({ name: "", age: "" });
        } else {
          alert("false");
        }
      }else{
        changeItem(input)
      }

    };
    const change = (e) => {
      setInput((obj) => ({ ...obj, [e.target.name]: e.target.value }));
    };
    return (
      <>
        <form className="form" onSubmit={submit}>
          <input
            onChange={change}
            className="input1"
            value={input.name}
            name="name"
            type="text"
            placeholder="Name"
          />
          <input
            onChange={change}
            className="input2"
            value={input.age}
            name="age"
            type="text"
            placeholder="Age"
          />
          <button className="btnSubmit" type="submit">
            Submit
          </button>
        </form>
        <div className="error d-block d-nane"></div>
      </>
    );
  } catch (e) {
    console.log(e);
  }
};
