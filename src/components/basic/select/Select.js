import React, {useState} from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import classes from './styles/Select.module.css'
import Button from "../button/Button";

export default function Select({
                                   values = [],
                                   defaultValue = 'test select',
                                   name,
                                   onChange,
                                   currentValue,
                                   ...props
                               }) {

    const [isView, setIsView] = useState(false)
    const [selectValue, setSelectValue] = useState('')

    function viewDropdownList() {
        setIsView(!isView)
    }

    function changeListItem(item) {
        setIsView(false)
        setSelectValue(item.value)
    }

    const items = values.map(item => (
        <li key={item.id}
            value={item}
            className={classes.dropdown_list_item}
            onClick={() => changeListItem(item)}
        >
            {item.value}
        </li>
    ))

    return (
        <div className={classes.select_group}>
            <div className={classes.dropdown}>
                <Button
                    variant='contained'
                    color='select'
                    endIcon={<MdKeyboardArrowDown/>}
                    onClick={viewDropdownList}
                >
                    <div className={classes.label}>
                        {selectValue ? selectValue : defaultValue}
                    </div>
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

