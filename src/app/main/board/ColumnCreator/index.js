import React, {useState, useEffect, useRef} from 'react';
import Input from "../../../../components/basic/Input";
import Button from "../../../../components/basic/Button";

import classes from './ListCreator.module.css'
import {AiOutlinePlus} from "react-icons/ai";
import useOnClickOutside from "../../../../hooks/UseOnClickOutside";


function ListCreator({addList}) {

    const [header, setHeader] = useState({header: ''})
    const [isModalOpen, setModalOpen] = useState(false);

    const ref = useRef();

    useOnClickOutside(ref, () => setModalOpen(false));

    function getColumnHeader(e){
        setHeader({header: e.target.value}) //TODO поправить
    }

    function addColumn(e){
        if(e.keyCode === 13) {
            addList(header)
        setModalOpen(false)
        }
    }

    function addListColumn(){
        addList(header)
        setModalOpen(false)
    }

    return (
        <div>
            {isModalOpen ?
            <div onKeyDown={addColumn} ref={ref}>
                <div className={classes.add_list_wrapper}>
                    <Input autoFocus
                           rows={3}
                           cols={35}
                           variant='transparent'
                           placeholder='Ввести заголовок списка'
                           onChange={getColumnHeader}
                    >
                    </Input>
                    <div className={classes.list_add_controls}>
                        <Button
                            onClick={addListColumn}
                            label='Добавить список'>
                        </Button>
                    </div>
                </div>
            </div>
                :
                <Button
                    onClick={() => setModalOpen(true)}
                    variant='contained'
                    label='Добавить колонку'
                    startIcon={<AiOutlinePlus/>}>
                </Button> }
        </div>
    );
};

export default ListCreator;