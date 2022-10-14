import React, {useState, useEffect, useRef} from 'react';
import Input from "../../../../../components/basic/input/Input";
import Button from "../../../../../components/basic/button/Button";

import classes from './styles/ListCreator.module.css'


function ListCreator({addList}) {

    const [header, setHeader] = useState({header: ''})

    function getColumnHeader(e){
        setHeader({header: e.target.value})
    }

    function addColumn(e){
        if(e.keyCode === 13){
            addList(header)
        }
    }

    function submit(e){
        e.preventDefault()
    }

    return (
        <form onSubmit={submit}
              onKeyDown={addColumn} >
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

                </div>
            </div>
        </form>
    );
};

export default ListCreator;