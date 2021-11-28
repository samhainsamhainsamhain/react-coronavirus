import React from "react";
import CardItem from "./CardItem";
import classes from "./Cards.module.css";

export default function MainCards(props) {
  return (
    <div className={classes.container}>
      <CardItem label={"Cases"} data={props.globalData.cases} />
      <CardItem label={"Deaths"} data={props.globalData.deaths} />
      <CardItem label={"Recoveries"} data={props.globalData.recovered} />
    </div>
  );
}
