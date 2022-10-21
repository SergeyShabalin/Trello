import React, {useState, useRef} from 'react';
import {useDispatch} from "react-redux";
import {BiEdit} from "react-icons/bi";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import Button from "../../../../../components/basic/Button";
import Input from "../../../../../components/basic/Input";
import Modal from "../../../../../components/basic/Modal";
import CardContextMenu from "../ContextMenu";
import {updateCard} from "../../../../../store/cards/asyncActions";
import classes from './ContentEdit.module.css'


export default function ContentEdit({header, cardId}) {

    const [isEdit, setIsEdit] = useState(false)
    const [isModal, setIsModal] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const ref = useRef();
    const dispatch = useDispatch();
    useOnClickOutside(ref, () => setIsEdit(false));


    function openCloseEditFrom() {
        setIsEdit(!isEdit)
    }

    function openCloseModal() {
        setIsModal(!isModal)
    }

    function saveChanged(e){
        if (e.keyCode === 13) {
            dispatch(updateCard(cardId, newTitle))
            setIsEdit(false)
        }
    }

    function getNewValue({target}){
        setNewTitle(target.value)
    }


    return (
        <> {
            isEdit ? <div className={classes.editor} ref={ref}>
                    <Input
                        rows={3}
                        cols={35}
                        autoFocus
                        onKeyDown={saveChanged}
                        onChange={getNewValue}
                        variant='transparent'
                        container='custom'
                        placeholder='Введите заголовок карточки'
                        value={header}
                    />

                <div className={classes.button}>
                    <Button
                    variant='contained'
                    label='Сохранить'
                    color='blue'
                />
                </div>

                    <CardContextMenu
                        cardId={cardId}/>

                </div>
                : <div className={classes.header}>

                <div className={classes.title} onClick={openCloseModal}>
                    {header}
                </div>
                    <div className={classes.content_edit}>
                        <Button
                            opacity={true}
                            onClick={openCloseEditFrom}
                            variant={'just_icon'}
                            icon={<BiEdit/>}/>

                        <Modal
                            open={isModal}
                            onClose={openCloseModal}><p>Окно быстрого редактирования</p>
                        </Modal>
                    </div>
            </div>
        }
        </>
    );
};

