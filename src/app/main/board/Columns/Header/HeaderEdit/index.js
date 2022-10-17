import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import classes from './ListHeaderEdit.module.css'
import Input from "../../../../../../components/basic/Input";
import {updateColumn} from "../../../../../../store/columns/asyncActions";

function ListHeaderEdit({header}) {

    const dispatch = useDispatch()
    const [newHeader, setNewHeader] = useState({}); //TODO ???????????
    const columnId = useSelector(state => state.columns.idColumn)

    function saveChanged(e) {
        if (e.keyCode === 13) {
            dispatch(updateColumn(columnId, newHeader))
        }
    }

    function getNewValue({target}) {
        setNewHeader({header: target.value})
    }

    const rowsInput = Math.ceil(1+ header.length/30)

    return (
        <div className={classes.edit_wrapper}>
            <Input
                rows={rowsInput}
                cols={35}
                autoFocus
                onKeyDown={saveChanged}
                onChange={getNewValue}
                variant='transparent'
                container='custom'
                placeholder='placeholder'
                value={header}
            />
        </div>

    );
};

export default ListHeaderEdit;