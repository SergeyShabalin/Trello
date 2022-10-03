import React, {useState} from 'react';
import Input from "../../../../../components/basic/input/Input";
import Button from "../../../../../components/basic/button/Button";
import {AiOutlineClose} from "react-icons/ai";

import classes from './styles/ListCreator.module.css'

function ListCreator({columnCreator,addList}) {

    const [header, setHeader] = useState({header: ''})

    function getColumnHeader(e){
        setHeader({header: e.target.value})
    }

    function submit(e){
        e.preventDefault()
        console.log(e)
    }

    return (
        <form onSubmit={submit}>
            <div className={classes.add_list_wrapper}>
                <Input autoFocus
                    placeholder='Ввести заголовок списка'
                    onChange={getColumnHeader}
                >
                </Input>
                <div className={classes.list_add_controls}>
                    <Button
                        onClick={()=>addList(header)}
                        label='Добавить список'>
                    </Button>
                    <Button
                        onClick={columnCreator}
                        variant='just_icon'
                        icon={<AiOutlineClose/>}>
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default ListCreator;