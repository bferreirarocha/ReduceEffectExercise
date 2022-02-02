import React, { useState } from "react";
import classes from "../Styles/components.module.scss";
import { StateValue } from "../Services/Context";

const Menu = () => {
  const { MenuState } = StateValue();

  if (typeof MenuState !== "undefined") {
    return (
      <div className={classes.Menu}>
        {MenuState.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </div>
    );
  } else {
    return <>{MenuState.length}</>;
  }
};

const MenuItem = ({ item }) => {
  const { MenuDispatch } = StateValue();
  const [value, setvalue] = useState(item.qnt);
  const increment = (e) => {
    setvalue(value + 1);
  };
  const decrement = (e) => {
    setvalue(value === 0 ? 0 : value - 1);
  };
  const submit = () => {
    MenuDispatch({
      type: "EDIT",
      id: item.id,
      qnt: value
    });
  };
  return (
    <div className={classes.MenuItem}>
      <span>{item.title}</span>
      <input type="number" min={0} value={value} />

      <div className={classes["actions"]}>
        <button
          id="increment"
          className={classes["increment"]}
          onClick={() => {
            increment(value + 1);
          }}
        >
          +
        </button>
        <button
          id="decrement"
          className={classes["increment"]}
          onClick={() => {
            decrement(value - 1);
          }}
        >
          -
        </button>
      </div>
      <button className="Button " onClick={submit}>
        Add
      </button>
    </div>
  );
};

export default Menu;
