import React from 'react';
import OutsideClick from "../../../../../components/basic/outsideClick/OutsideClick";
import classes from './styles/ListHeader.module.css'
import Button from "../../../../../components/basic/button/Button";
import {GoKebabHorizontal} from "react-icons/go";

export default function ListHeader({header}) {

    return (
        <div className={classes.header}>
            <div className={classes.title}>{header}</div>
            <OutsideClick>
                <Button
                    variant={'just_icon'}
                    icon={<GoKebabHorizontal/>}>
                </Button>
            </OutsideClick>
        </div>
    );
};

