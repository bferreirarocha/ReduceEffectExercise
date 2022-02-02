import React from "react";

const Button = ({ title, submit, className, icon }) => {
  const clickHandler = () => {
    submit();
  };
  console.log(className);
  return (
    <>
      <button onClick={clickHandler} className={className}>
        {icon} {title}
      </button>
    </>
  );
};

export default Button;
