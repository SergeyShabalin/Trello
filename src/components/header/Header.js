import React from "react";
import {CgMenuGridR} from "react-icons/cg";
import {RiArrowDropDownLine} from "react-icons/ri";
import classes from './styles/Header.module.css'
import Button from "../basic/button/Button";

export default function Header() {
    return (
        <div className={classes.header}>
            <CgMenuGridR/>
            <Button
                name={'Рабочие пространства'}
                icon={<RiArrowDropDownLine/>}
                // type={comlete_right, complete_left, only_icon, only_text}
            />
        </div>
    )
}