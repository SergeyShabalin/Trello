import React, {useState} from 'react';
import classes from './styles/ListHeaderEdit.module.css'
import Input from "../../../../../../components/basic/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {updateColumn} from "../../../../../../store/asyncAction/Columns";

function ListHeaderEdit({header}) {

    const dispatch = useDispatch()
    const [newHeader, setNewHeader] = useState({});
    const columnId = useSelector(state => state.columns.idColumn)

    function saveChanged(e) {
        if(e.keyCode === 13){
            dispatch(updateColumn(columnId, newHeader))
        }
    }

    function getNewValue({target}) {
        setNewHeader({header: target.value})
    }

    return (
        <div className={classes.edit_wrapper}>
            <Input autoFocus
                   onKeyDown={saveChanged}
                   onChange={getNewValue}
                   variant='transparent'
                   container='custom'
                   placeholder='placeholder'
                   value={header}></Input>
        </div>

    );
};

export default ListHeaderEdit;