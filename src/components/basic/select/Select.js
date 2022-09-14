import React, {useState} from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import classes from './styles/Select.module.css'
import Button from "../button/Button";


export default function Select({children, values}) {

    const [isView, setIsView] = useState(false)

    function changeListItem() {
        setIsView(false)
    }

    const items = values.map(item => (
        <li value={item}
            className={classes.dropdown_list_item}
            onClick={changeListItem}>{item}</li>
    ))

    return (

        <div className={classes.select_group}>
            <div className={classes.dropdown}>
                <Button
                    variant={'outlined'}
                    color={'select'}
                    endIcon={<MdKeyboardArrowDown/>}
                    onClick={() => setIsView(!isView)}>
                    For select please choose an option
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

