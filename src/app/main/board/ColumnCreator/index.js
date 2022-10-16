import React, {useState, useEffect, useRef} from 'react';
import Input from "../../../../components/basic/Input";
import Button from "../../../../components/basic/Button";

import classes from './ListCreator.module.css'


function ListCreator({addList}) {

    const [header, setHeader] = useState({header: ''})

    function getColumnHeader(e){
        setHeader({header: e.target.value})
    }

    function addColumn(e){
        if(e.keyCode === 13) addList(header)
    }

    function submit(e){
        e.preventDefault() //TODO удалить!!!!
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