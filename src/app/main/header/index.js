import React from "react";
import {CgMenuGridO} from "react-icons/cg";
import {MdKeyboardArrowDown} from "react-icons/md";
import {RiArrowDownSLine} from "react-icons/ri";
import classes from './Header.module.css'
import Button from "../../../components/basic/Button";

export default function Header() {

    return (
        <div className={classes.header}>

            <div className={classes.menu}>
                <Button
                    variant='just_icon'
                    variety='sized'
                    color='changed'
                    icon={<CgMenuGridO/>}>
                </Button>
            </div>


            <Button
                variant='text'
                name='work_area'
                label='Рабочие пространства'
                endIcon={<MdKeyboardArrowDown/>}>
            </Button>

            <Button
                variant='text'
                label='Недавние'
                endIcon={<MdKeyboardArrowDown/>}>
            </Button>

            <Button
                label='В избранном'
                endIcon={<MdKeyboardArrowDown/>}
            >
            </Button>

            <Button
                label='Шаблоны'
                endIcon={<MdKeyboardArrowDown/>}>
            </Button>

            <Button
                label='Создать'
            />


        </div>
    )
}