import React from 'react';
import classes from './styles/ListHeaderEdit.module.css'
import Input from "../../../../../../components/basic/input/Input";
import Button from "../../../../../../components/basic/button/Button";
import {MdOutlineFileDownloadDone} from "react-icons/md";

function ListHeaderEdit({header, toggleEdit}) {
    return (
        <div className={classes.edit_wrapper}>
            <Input autoFocus
                   variant='transparent'
                   container='custom'
                   iconRight={
                       <Button
                           onClick={toggleEdit}
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