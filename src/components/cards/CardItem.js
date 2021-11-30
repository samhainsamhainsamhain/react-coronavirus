import React, {useEffect} from "react";
import CountUp from "react-countup";
import classes from "./CardItem.module.css";
import Cases from '../../img/cases.svg';
import Deaths from '../../img/deaths.svg';
import Recoveries from '../../img/recoveries.svg';

export default function CardItem(props) {

  const imagePicker = () => {
    if (props.label === "Cases") {return Cases}
    if (props.label === "Deaths") {return Deaths}
    if (props.label === "Recoveries") {return Recoveries}
  }

  const check = () => {
    console.log(imagePicker())
  };
  
  // const giveClassname = () => {
  //     let testname = props.label
  //     let str = classes.testname;
  //     return str
  // }

  // let classNames = cx(classes.container_item, { [classes.label]: props.label });

  return (
    <div className={`${classes.container_item} ${classes[props.label]}`}>
      <h4 className={classes.container_item_title}>Total {props.label}</h4>
      <CountUp
        className={classes.container_item_value}
        start={0}
        end={props.data}
        duration={2.75+Math.random(3)}
        separator=","
      />
      <img src={`${imagePicker()}`} alt="img"/>
      {/* <button onClick={check}>check classname</button> */}
      <span className={classes.border_label}> </span>
    </div>
  );
}
