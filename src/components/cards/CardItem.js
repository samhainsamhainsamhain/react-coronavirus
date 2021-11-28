import React from "react";
import CountUp from "react-countup";
import Card from "../ui/Card";
import cx from "classnames";
import classes from "./CardItem.module.css";

export default function CardItem(props, label) {

  const check = () => {
    console.log(label.value);
  };

//   const giveClassname = () => {
//       let str = classes.(props.label);
//       return str
//   }
  let classNames = cx(classes.container_item, { [classes.label]: props.label });

  return (
    <div className={classNames}>
      <h4 className={classes.container_item_title}>Total {props.label}</h4>
      <CountUp
        className={classes.container_item_value}
        start={0}
        end={props.data}
        duration={2.75}
        separator=","
      />
      <button onClick={check}>check classname</button>
      <span />
    </div>
  );
}
