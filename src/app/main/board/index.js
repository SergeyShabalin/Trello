import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "./Columns";
import { addColumn, getAllColumns } from "../../../store/columns/asyncActions";
import ListCreator from "./ColumnCreator";
import classes from "./Board.module.css";
import { getBoard } from "../../../store/board/asyncActions";
import { BiEdit } from "react-icons/bi";
import Button from "../../../components/basic/Button";


export default function Board({ boardStore, countBoard }) {

  const dispatch = useDispatch();
  const columnsStore = useSelector(state => state.columns.columns);
  const [isCreator, setIsCreator] = useState(true);

  useEffect(() => {
    dispatch(getAllColumns(countBoard));
    setIsCreator(true);
  }, []);

  function columnCreator() {
    setIsCreator(!isCreator);
  }

  function addList(header, boardId) {
    dispatch(addColumn(header, boardId));
    columnCreator();
  }

  //TODO вывести только те колонки, id которых есть в конкретной доске
  // console.log('boardStore', boardStore);

  // const newColumn = boardStore[countBoard].columns.map(item => {
  //     return columnsStore.find(i => {
  //       if (item === i._id) return i;
  //     });
  //   }
  // );

  //TODO сейчас загружаются сразу все доски. Нужно подгружать отдельную доску при открытии
//TODO так же поправить удаление колонок и их добавление

//   let columnsList;
//   if (columnsStore.length !== 0) {
   const columnsList =  columnsStore.map((column, index) => {
      return (
        <div key={column._id} >
          <Column
            columnIndex={index}
            column={column}
            cardList={column.cards}
            sortArr={column.sortArr}
            draggable
          />
        </div>
      );
    });
  // }

  return (
    <div className={classes.board}>
      <span className={classes.board_header}>{boardStore[countBoard].title}</span>
      <div className={classes.wrapper_list}>
        <div className={classes.columns}>
          {columnsList}
        </div>
        <div className={classes.add_list}>
          <ListCreator addList={addList} boardId={boardStore[countBoard]._id} />
        </div>

      </div>
    </div>
  );
};
