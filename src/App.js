import React, { useState } from "react";

function App() {
  const [isMouseOVer, setMouseOver] = useState("");

  const [fullName, setfullName] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setfullName((prevValue) => {
      console.log("perv");
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  function handleClick(event) {
    setfullName(fullName);
    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName}
        {fullName.lName}
        <p>{fullName.email}</p>
      </h1>
      <form onSubmit={handleClick}>
        <input name="fName" onChange={handleChange} placeholder="First Name" />
        <input name="lName" onChange={handleChange} placeholder="Last Name" />
        <input name="email" onChange={handleChange} placeholder="Email" />
        <button
          style={{ backgroundColor: isMouseOVer ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default App;
