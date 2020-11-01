import React from "react";
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
