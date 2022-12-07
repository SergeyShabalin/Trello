import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { RiTrelloFill } from "react-icons/ri";

import Button from "../../../components/basic/Button";
import Creator from "./Creator";
import Share from "./Share";
import classes from "./Header.module.css";


export default function Header({ currentBoard, visibility }) {

  return (
    <div className={classes.header}>
      <div className={classes.menu}>
        <Button
          variant="just_icon"
          variety={true}
          color="changed"
          icon={<CgMenuGridO />}
        />
      </div>
      <Creator currentBoard={currentBoard} />
      {!visibility && <Share/>}
      <div className={classes.logo}>
       <span className={classes.icon}>
         <RiTrelloFill />
       </span>
        <span>TASK MANAGER</span>
      </div>
    </div>
  );
}