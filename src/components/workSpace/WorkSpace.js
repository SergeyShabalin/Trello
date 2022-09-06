import React from "react";
import Board from "./board/Board";
import Menu from "./menu/Menu";

import classes from './styles/WorkSpace.module.css'

export default function WorkSpace(){

    return(
        <div className={classes.work_space}>


                <Menu/>
                <Board/>

        </div>
    )
}