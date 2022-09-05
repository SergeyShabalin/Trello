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
                variant={'text'}
                label={'Рабочие пространства'}>
                <MdKeyboardArrowDown/>
            </Button>

            <Button variant={'text'}
                    label={'Недавние'}>
                <RiArrowDownSLine/>
            </Button>

            <Button
                variant={'text'}
                label={'В избранном'}
            >
                <RiArrowDownSLine/>
            </Button>

            <Button
                variant={'contained'}
            >
                <div>Шаблоны</div>
                <RiArrowDownSLine/>
            </Button>


            <Button
                variant={'outlined'}
                label={'Создать'}
            />
        </div>
    )
}