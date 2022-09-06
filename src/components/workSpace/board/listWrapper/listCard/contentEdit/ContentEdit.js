import React from 'react';
import Button from "../../../../../basic/button/Button";
import {GrEdit} from "react-icons/gr";

import classes from './style/ContentEdit.module.css'

export default function ContentEdit({setIsEdit}) {

    function openCloseTextArea(){
        setIsEdit(true)
    }

    return (
        <div className={classes.content_edit} >
            <Button
                onClick={openCloseTextArea}
                name={'content_edit'}
                variant={'only_icon'}
                icon={<GrEdit/>}
            >
            </Button>
        </div>
    );
};

