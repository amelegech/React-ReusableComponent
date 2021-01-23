import React from "react";

const Input = (props) => {
  const [inputType] = React.useState(props.type);
  const [placeholder] = React.useState(props.placeholder);
  const [inputVal, setInputVal] = React.useState("");
  
  const inputValueHandler = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div>
      <h4>Please Inter your Information?</h4>
      <form>
        <input
          type={inputType}
          value={inputVal}
          onChange={inputValueHandler}
          placeholder={placeholder}
        />
      {inputVal}
      </form>
    </div>
  );
};

export default Input;
