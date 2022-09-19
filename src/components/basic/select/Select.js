import React, {useState, useRef} from 'react';
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
    const [selectName, setSelectName] = useState('last name')
    const [selectId, setSelectId] = useState(1)
    const inputEl = useRef(null)

    function viewDropdownList() {
        setIsView(!isView)
    }

    function getSelectItem(item){
        setIsView(false)
        setSelectName(item.value)
        setSelectId(item.id)

       onChange(inputEl.current)
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
                        variant='contained'
                        color='select'
                        endIcon={<MdKeyboardArrowDown/>}
                        onClick={viewDropdownList}
                    >
                        <div className={classes.label}>
                            {selectName ? selectName : defaultValue}
                        </div>
                    </Button>

                    {isView &&
                        <ul className={classes.dropdown_list}>
                            {items}
                        </ul>
                    }
                </div>
                <input name={selectName} ref={inputEl} value={selectId}  />
            </div>
    );
};

