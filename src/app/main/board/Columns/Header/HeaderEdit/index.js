import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import classes from './ListHeaderEdit.module.css'
import Input from "../../../../../../components/basic/Input";
import {updateColumn} from "../../../../../../store/asyncAction/Columns";

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

    return (
        <div className={classes.edit_wrapper}>
            <Input
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