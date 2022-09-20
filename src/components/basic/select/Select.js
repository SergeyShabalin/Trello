import React, {useState, useRef, useEffect} from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import classes from './styles/Select.module.css'
import Button from "../button/Button";

export default function Select({
                                   values = [],
                                   name = 'test select',
                                   onChange,
                                   variant = 'contained'
                               }) {

    const [isView, setIsView] = useState(false)
    const [optionId, setOptionId] = useState(1)
    const inputEl = useRef(null)

    useEffect(() => {
        onChange(inputEl.current)
    }, [optionId]);

    function viewDropdownList() {
        setIsView(!isView)
    }

    function getSelectItem(item) {
        setIsView(false)
        setOptionId(item.id)
    }

    const items = values.map(item => (
        <li key={item.id}
            value={item}
            className={classes.dropdown_list_item}
            onClick={() => getSelectItem(item)}
        >
            {item.value}
        </li>
    ))

    return (
        <div className={classes.select_group}>
            <div className={classes.dropdown}>
                <Button
                    variant={variant}
                    color='select'
                    endIcon={<MdKeyboardArrowDown/>}
                    onClick={viewDropdownList}
                >
                    <div className={classes.label}>
                        {name}
                    </div>
                </Button>

                {isView &&
                    <ul className={classes.dropdown_list}>
                        {items}
                    </ul>
                }
            </div>
            <input name={name} ref={inputEl} value={optionId} hidden/>
        </div>
    );
};

