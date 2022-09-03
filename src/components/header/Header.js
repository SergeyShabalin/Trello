import React from "react";
import {CgMenuGridO} from "react-icons/cg";
import {MdKeyboardArrowDown} from "react-icons/md";
import {RiArrowDownSLine} from "react-icons/ri";
import classes from './styles/Header.module.css'
import Button from "../basic/button/Button";

export default function Header() {
    return (
        <div className={classes.header}>
           <CgMenuGridO className={classes.icon}/>
            <Button
                name={'Рабочие пространства'}
                icon={<MdKeyboardArrowDown/>}
                type={'complete_right'}
            />
            <Button
                name={'Недавние'}
                icon={<RiArrowDownSLine/>}
                type={'complete_right'}
            />
            <Button
                name={'В избранном'}
                icon={<RiArrowDownSLine/>}
                type={'complete_right'}
            />
            <Button
                name={'Шаблоны'}
                icon={<RiArrowDownSLine/>}
                type={'complete_right'}
            />
            <Button
                name={'Создать'}
                type={'only_text'}
            />
        </div>
    )
}