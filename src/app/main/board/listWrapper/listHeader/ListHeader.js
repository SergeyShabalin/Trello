import React from 'react';
import {GoKebabHorizontal} from "react-icons/go";
import Button from "../../../../../components/basic/button/Button";
import classes from './styles/ListHeader.module.css'

export default function ListHeader({header}) {
    return (
        <div className={classes.header}>
            <div className={classes.title}>{header}</div>
            <Button
                variant={'just_icon'}
                icon={<GoKebabHorizontal/>}>

            </Button>

        </div>
    );
};

