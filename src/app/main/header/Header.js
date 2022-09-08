import React from "react";
import {CgMenuGridO} from "react-icons/cg";
import {MdKeyboardArrowDown} from "react-icons/md";
import {RiArrowDownSLine} from "react-icons/ri";
import classes from './styles/Header.module.css'
import Button from "../../../components/basic/button/Button";

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
                variant={'text'}
                label={'Недавние'}
                endIcon={<MdKeyboardArrowDown/>}>
            </Button>

            <Button
                label={'В избранном'}
                endIcon={<MdKeyboardArrowDown/>}
            >
            </Button>

            <Button
                label={'Шаблоны'}
                endIcon={<MdKeyboardArrowDown/>}>
            </Button>


            <Button
                // variant={'text'}
                label={'Создать'}
            />

            <Button
                variant={'contained'}
                label={'contained'}
                endIcon={<MdKeyboardArrowDown/>}>
            </Button>

            <Button
                variant={'outlined'}
                label={'outlined'}
                endIcon={<MdKeyboardArrowDown/>}>
            </Button>
            <Button
                variant={'disabled'}
                disabled={true}
                label={'disabled'}
                endIcon={<MdKeyboardArrowDown/>}>
            </Button>
        </div>
    )
}