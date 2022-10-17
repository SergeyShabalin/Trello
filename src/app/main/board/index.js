import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Column from "./Columns";
import {addColumn, deleteColumn, getAllColumns} from "../../../store/columns/asyncActions";
import {columnsAC} from "../../../store/columns/actions";
import ListCreator from "./ColumnCreator";
import {getALLCard} from "../../../store/cards/asyncActions";
import ListCard from "./Cards";
import classes from './Board.module.css'


export default function Board() {

    const dispatch = useDispatch()
    const columnsStore = useSelector(state => state.columns.columns)
    const cardStore = useSelector(state => state.cards.cards)
    const [isCreator, setIsCreator] = useState(true)


    const removeItem = (columnId) => {
        dispatch(deleteColumn(columnId))
    }

    useEffect(() => {
        dispatch(getAllColumns())
        setIsCreator(true)
        dispatch(getALLCard())
    }, [])


    function columnCreator() {
        setIsCreator(!isCreator)
    }

    function addList(header) {
        dispatch(addColumn(header))
        columnCreator()
    }


//TODO поправить
    let c
    const columnsList = columnsStore.map(column => {

        c = column.cards.map(idCard => {
            let cardHeader = cardStore.find(cardStore => cardStore._id === idCard)
            if (cardHeader) return (cardHeader.header)
        })

        let cc = c.map(i => (
                <ListCard>{i}</ListCard>
            )
        )
        return (
            <div>
                <Column
                    key={column._id}
                    column={column}
                    cards={cc}
                >
                    <button onClick={()=>removeItem(column._id)}>delete</button>
                    <div>{column.cards.map(item => <ListCard key={item._id}>{item.header}</ListCard>)}</div>
                </Column>
            </div>
        )
    })


    return (
        <div className={classes.board}>
            <span className={classes.board_header}>Наименование доски</span>
                       <div className={classes.wrapper_list}>
                <div className={classes.columns}>
                    {columnsList}
                </div>
                <div className={classes.add_list}>
                    <ListCreator addList={addList}/>
                </div>

            </div>
        </div>
    );
};
