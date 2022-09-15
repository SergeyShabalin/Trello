import React, {useState} from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import classes from './styles/Select.module.css'
import Button from "../button/Button";

export default function Select({children, values}) {

    const [isView, setIsView] = useState(false)
    const [selectValue, setSelectValue] = useState('')


    function changeListItem(item) {
        setIsView(false)
        setSelectValue(item)
    }

    const items = values.map(item => (
        <li key={Math.random()}
            value={item}
            className={classes.dropdown_list_item}
            onClick={() => changeListItem(item)}>{item}</li>
    ))

    return (
        <div className={classes.select_group}>
            <div className={classes.dropdown}>
                <Button
                    variant={'outlined'}
                    color={'select'}
                    endIcon={<MdKeyboardArrowDown/>}
                    onClick={() => setIsView(!isView)}>
                    {selectValue ? selectValue : 'For select please chose the option'}

                </Button>
                {isView &&
                    <ul className={classes.dropdown_list}>
                        {items}
                    </ul>
                }
            </div>
        </div>
    );
};

