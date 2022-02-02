import { React, useEffect, useState } from "react";
import classes from "../Styles/components.module.scss";
import styledComponents from "styled-components";

const Slide = styledComponents.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:50vh; 
    transition: 0.2s ease-in;  
    font-size:60px;
 `;

// const changeColor = () => {
//   return `rgb(${[1, 2, 3].map((x) => (Math.random() * 256) | 0)})`;
// };
const items = [
  {
    id: Math.floor(Math.random()),
    title: "Silde 1",
    color: "red"
  },
  {
    id: Math.floor(Math.random()),
    title: "Silde 2",
    color: "green"
  },
  {
    id: Math.floor(Math.random()),
    title: "Silde 3",
    color: "yellow"
  },
  {
    id: Math.floor(Math.random()),
    title: "Silde 4",
    color: "pink"
  }
];
const Carousel = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCurrent((current + 1) % items.length);
    }, 3000);
    return () => {};
  }, [current]);

  return (
    <div className={classes.Carousel}>
      {items.map((item, key) => (
        <Slide
          className="slide"
          key={key}
          style={{
            backgroundColor: item.color,
            transform: `translateX(-${current * 100}%)`
          }}
        >
          {`translateX(-${current * 100}%)`}
        </Slide>
      ))}
    </div>
  );
};

export default Carousel;
