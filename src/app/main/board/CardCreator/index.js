import React, {useState, useRef} from 'react';
import {useDispatch} from "react-redux";
import {AiOutlinePlus} from "react-icons/ai";
import {GrClose} from "react-icons/gr";
import Button from "../../../../components/basic/Button";
import Input from "../../../../components/basic/Input";
import useOnClickOutside from '../../../../hooks/UseOnClickOutside'
import {addNewCard} from "../../../../store/cards/asyncActions";
import classes from './CardCreator.module.css'

export default function CardCreator({columnId, isCreator, menuCreate, menuClose}) {

    const [cardHeader, setCardHeader] = useState('')
    const ref = useRef();
    const dispatch = useDispatch()
    useOnClickOutside(ref, menuClose);


    function addCard(){
        dispatch(addNewCard(columnId,cardHeader))
       menuClose()
    }

    function saveChanged(e) {
        if (e.keyCode === 13) {
            addCard()
        }
    }

    function getNewValue({target}) {
        setCardHeader(target.value)
    }

    return (
        <div className={classes.card_creator}>
            {isCreator ?
                <div className={classes.control_creator} ref={ref}>
                   <div className={classes.control_input}>
                       <Input
                           rows={3}
                           cols={35}
                           autoFocus
                           onKeyDown={saveChanged}
                           onChange={getNewValue}
                           variant='transparent'
                           container='custom'
                           placeholder='Введите название карточки'
                       />
                   </div>
                    <div className={classes.btns}>
                        <Button
                            onClick={addCard}
                            className={classes.add_btn}
                            variant='contained'
                            color='submit'
                            label='Добавить карточку'>
                        </Button>
                        <Button
                            onClick={menuClose}
                            className={classes.close_btn}
                            variant='just_icon'
                            icon={<GrClose/>}>
                        </Button>
                    </div>
                </div>

                : <div>
                    <Button onClick={menuCreate}
                            variant={'text'}
                            label={'Добавить карточку'}
                            startIcon={<AiOutlinePlus/>} />
                </div>
            }
        </div>
    );
};

