import React from "react";

function App() {
  const [fullName, setFullName] = React.useState({ first: "", last: "" });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    //param is a fxn w/ param prevValue
    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          first: newValue,
          last: prevValue.last
        };
      } else if (inputName === "lName") {
        return {
          first: prevValue.first,
          last: newValue
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.first} {fullName.last}{" "}
      </h1>
      <form>
        <input name="fName" onChange={handleChange} placeholder="First Name" />
        <input name="lName" onChange={handleChange} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
