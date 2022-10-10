import React, {useState} from 'react';
import OutsideClick from "../../../../../components/basic/outsideClick/OutsideClick";
import classes from './styles/ListHeader.module.css'
import Button from "../../../../../components/basic/button/Button";
import {GoKebabHorizontal} from "react-icons/go";
import ListContextMenu from "../listContextMenu/ListContextMenu";


export default function ListHeader({header}) {

    return (
        <div className={classes.header}>
            <div className={classes.title}>{header}</div>
            <OutsideClick
                external={
                    <Button
                        variant={'just_icon'}
                        icon={<GoKebabHorizontal/>}>
                    </Button>
                }>
                <ListContextMenu/>
            </OutsideClick>
        </div>
    );
};

