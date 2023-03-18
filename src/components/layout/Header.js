import { Fragment } from "react";
import mealsImage from "../assets/meals.jpg";
import classes from "../css/header.module.css";
import HeaderCart from "./HeaderCart";

const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>REACT MEALS</h1>
        <HeaderCart onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="table of meals" />
      </div>
    </Fragment>
  );
};

export default Header;
