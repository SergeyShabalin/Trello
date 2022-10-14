import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Column from "./listWrapper/Column";
import Button from "../../../components/basic/button/Button";
import {AiOutlinePlus} from "react-icons/ai";
import {addColumn, getAllColumns} from "../../../store/asyncAction/Columns";
import {getIdColumn} from "../../../store/reducers/column-reducer";
import ListCreator from "./listWrapper/listCreator/ListCreator";

import classes from './styles/Board.module.css'
import OutsideClick from "../../../components/basic/outsideClick/OutsideClick";
import {getALLCard, getAllCards, getCard} from "../../../store/asyncAction/Cards";
import {Api} from "../../../Api";
import {viewAllCards} from "../../../store/reducers/card-reducer";
import ListCard from "./listWrapper/listCard/ListCard";

export default function Board() {

    const dispatch = useDispatch()
    const columnsStore = useSelector(state => state.columns.columns)
    const cardStore = useSelector(state => state.cards.cards)
    const [isCreator, setIsCreator] = useState(true)



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

    function sendColumnId(item) {
        dispatch(getIdColumn(item._id))
    }


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
                onClick={() => sendColumnId(column)}
                key={column._id}
                header={column.header}
                cards={cc}
            >
                <div>{cc}</div>
            </Column>
            </div>

        )
    })


    return (
        <div className={classes.board}>
            <div className={classes.board_header}>Наименование доски</div>
            <div className={classes.wrapper_list}>
                <div className={classes.columns}>
                    {columnsList}
                </div>
                <div className={classes.add_list}>
                    <OutsideClick
                        external={
                            <Button
                                variant='contained'
                                label='Добавить еще одну колонку'
                                startIcon={<AiOutlinePlus/>}>
                            </Button>
                        }
                        type='replace'>
                        <div>
                            <ListCreator
                                addList={addList}/>
                        </div>
                    </OutsideClick>
                </div>

            </div>
        </div>
    );
};



