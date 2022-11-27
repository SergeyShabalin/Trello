import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { RiTrelloFill } from "react-icons/ri";
import Button from "../../../components/basic/Button";;
import Workspaces from "./Workspaces";
import Creator from "./Creator";
import classes from "./Header.module.css";

export default function Header() {

  return (
    <div className={classes.header}>
      <div className={classes.menu}>
        <Button
          variant="just_icon"
          variety={true}
          color="changed"
          icon={<CgMenuGridO />}/>
      </div>

      <Workspaces/>
      <Creator/>

      <div className={classes.logo}>
       <span className={classes.icon}><RiTrelloFill/></span>
        <span>TASK MANAGER</span>
      </div>
      {/*<Button*/}
      {/*  variant="text"*/}
      {/*  label="Недавние"*/}
      {/*  endIcon={<MdKeyboardArrowDown />}/>*/}

      {/*<Button*/}
      {/*  label="В избранном"*/}
      {/*  endIcon={<MdKeyboardArrowDown />}/>*/}

      {/*<Button*/}
      {/*  label="Шаблоны"*/}
      {/*  endIcon={<MdKeyboardArrowDown />}/>*/}
    </div>
  );
}