import React,{useState} from 'react';
import {MdOutlineModeEditOutline} from "react-icons/md";
import Button from "../../../../../../components/basic/button/Button";
import Modal from "../../../../../../components/basic/modal/Modal";
import classes from './style/ContentEdit.module.css'

export default function ContentEdit({children, open, onClose}) {

    const [isEdit, setIsEdit]=useState(false)

    return (
        <div className={classes.content_edit} >

            <Button
                onClick={()=>setIsEdit(true)}
                variant={'just_icon'}
                icon={<MdOutlineModeEditOutline/>}
            >
            </Button>
            <Modal
            open={isEdit}
            onClose={() => setIsEdit(false)}><p>Окно быстрого редактирования</p>
        </Modal>
        </div>
    );
};

