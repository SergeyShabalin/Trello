import React, {useState} from 'react';
import classes from './styles/ListHeaderEdit.module.css'
import Input from "../../../../../../components/basic/input/Input";
import Button from "../../../../../../components/basic/button/Button";
import {MdOutlineFileDownloadDone} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {updateColumn} from "../../../../../../store/asyncAction/Columns";

function ListHeaderEdit({header}) {

    const dispatch = useDispatch()
    const [newHeader, setNewHeader] = useState({});
    const columnId = useSelector(state => state.columns.idColumn)

    function saveChanged(){
        dispatch(updateColumn(columnId, newHeader))

    }
    function getNewValue({target}){
        setNewHeader({header:target.value})
    }

    return (

        <div className={classes.edit_wrapper}>
            <Input autoFocus
                    onChange={getNewValue}
                   variant='transparent'
                   container='custom'
                   iconRight={
                       <Button
                           onClick={saveChanged}
                           variant='just_icon'
                           variety='sized'
                           icon={<MdOutlineFileDownloadDone/>}>
                       </Button>
                   }
                placeholder='placeholder'
                value={header}></Input>
        </div>

    );
};

export default ListHeaderEdit;