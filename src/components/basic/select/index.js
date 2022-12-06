import React, {useState, useRef, useEffect} from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import PropTypes from 'prop-types';

import Button from "../Button";
import classes from './Select.module.css'

export default function Select({
                                   values = [],
                                   name = 'test select',
                                   onChange,
                                   variant = 'contained'
                               }) {

    const [isView, setIsView] = useState(false)
    const [selectValue, setSelectValue] = useState('')
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
        setSelectValue(item.value)
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
                        {selectValue ? selectValue :name}
                    </div>
                </Button>

                {isView &&
                    <ul className={classes.dropdown_list}>
                        {items}
                    </ul>
                }
            </div>
            <input name={name} ref={inputEl} value={optionId} onChange={onChange} hidden/>
        </div>
    );
};

Select.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    variant: PropTypes.string,
    values: PropTypes.array
}