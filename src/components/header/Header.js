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
                name={'work_area'}
                label={'Рабочие пространства'}
                endIcon={<MdKeyboardArrowDown/>}>
            </Button>

            <Button
                disabled={true}
                variant={'text'}
                label={'Недавние'}
                endIcon={<MdKeyboardArrowDown/>}>
            </Button>

            <Button
                variant={'text'}
                label={'В избранном'}
                endIcon={<MdKeyboardArrowDown/>}>
            </Button>

            <Button
                variant={'contained'}
                label={'Шаблоны'}
                endIcon={<MdKeyboardArrowDown/>}>
            </Button>


            <Button
                variant={'outlined'}
                label={'Создать'}
            />
        </div>
    )
}