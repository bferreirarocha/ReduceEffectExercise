import React from "react";
import Carousel from "../Components/Carousel";
import classes from "../Styles/layout.module.scss";

const Main = () => {
  return (
    <div className={classes.Main}>
      <section className="section1">
        <Carousel />
      </section>
      <section className="section2"></section>
      <section className="section3"></section>
      <section className="section4"></section>
    </div>
  );
};

export default Main;
