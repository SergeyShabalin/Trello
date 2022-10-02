import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ListWrapper from "./listWrapper/ListWrapper";
import Button from "../../../components/basic/button/Button";
import {AiOutlineClose, AiOutlinePlus} from "react-icons/ai";
import {axiosColumns} from "../../../store/asyncAction/Columns";
import {addNewColumns} from "../../../store/reducers/column-reducer";
import {Api} from "../../../Api";
import classes from './styles/Board.module.css'
import Input from "../../../components/basic/input/Input";
import ListCreator from "./listWrapper/listCreator/ListCreator";


export default function Board() {

    const dispatch = useDispatch()
    const columns = useSelector(state => state.columns.columns)
    const [isAdd, setIsAdd] = useState(true)

    function columnCreator(){
        setIsAdd(!isAdd)
    }

    function addColumn(header) {

        Api.post(`/columns/new`, header).catch((error) => {
            console.warn(error, 'server error');
        })
        dispatch(addNewColumns(header))
    }

    useEffect(() => {
        dispatch(axiosColumns())
    }, [columns])

    return (
        <div className={classes.board}>
            <div className={classes.board_header}>Наименование доски</div>
            <div className={classes.wrapper_list}>
                <div className={classes.columns}>
                    {columns.map(item => (
                        <ListWrapper key={item.id} header={item.header}/>
                    ))}
                </div>

                 <div className={classes.add_list}>
                    {isAdd ?   <Button
                        onClick={columnCreator}
                        variant='contained'
                        label='Добавить еще одну колонку'
                        startIcon={<AiOutlinePlus/>}>
                    </Button>
                        : <ListCreator
                            columnCreator={columnCreator}
                            addColumn={addColumn}/>
                    }
                </div>

            </div>

        </div>
    );
};



