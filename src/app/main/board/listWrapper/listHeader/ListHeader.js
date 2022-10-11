import React, {useState} from 'react';
import OutsideClick from "../../../../../components/basic/outsideClick/OutsideClick";
import Button from "../../../../../components/basic/button/Button";
import {GoKebabHorizontal} from "react-icons/go";
import ListContextMenu from "../listContextMenu/ListContextMenu";
import ListHeaderEdit from "./listHeaderEdit/ListHeaderEdit";
import classes from './styles/ListHeader.module.css'

export default function ListHeader({header}) {

    return (
        <div className={classes.header}>
        <div className={classes.title_wrapper}>
            <OutsideClick
                type='replace'
                external={
                    <div className={classes.title}>{header}</div>}>
                <ListHeaderEdit  header={header}/>
            </OutsideClick>
        </div>
            <div className={classes.context_wrapper}>
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
        </div>
    );
};

