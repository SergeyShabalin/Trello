import React from 'react';
import Button from "../../../../../../components/basic/button/Button";
import {MdOutlineModeEditOutline} from "react-icons/md";

import classes from './style/ContentEdit.module.css'

export default function ContentEdit({setIsEdit}) {

    function openCloseTextArea(){
        setIsEdit(true)

    }

    return (
        <div className={classes.content_edit} >
            <Button
                onClick={openCloseTextArea}
                variant={'just_icon'}
                icon={<MdOutlineModeEditOutline/>}
            >
            </Button>
        </div>
    );
};

