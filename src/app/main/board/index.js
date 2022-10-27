import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "./Columns";
import { addColumn, getAllColumns } from "../../../store/columns/asyncActions";
import ListCreator from "./ColumnCreator";
import ListCard from "./Cards";
import classes from "./Board.module.css";
import Checkbox from "../../../components/basic/Сheckbox";


export default function Board() {

  const dispatch = useDispatch();
  const columnsStore = useSelector(state => state.columns.columns);
  const [isCreator, setIsCreator] = useState(true);

  useEffect(() => {
    dispatch(getAllColumns());
    setIsCreator(true);
  }, []);


  function columnCreator() {
    setIsCreator(!isCreator);
  }

  function addList(header) {
    dispatch(addColumn(header));
    columnCreator();
  }

  const columnsList = columnsStore && columnsStore.map((column, index) => {
    return (
      <div key={column._id}>
        <Column
          columnIndex={index}
          column={column}
          cardList={column.cards}
        />
      </div>
    );
  });

  return (
    <div className={classes.board}>
      <span className={classes.board_header}>Наименование доски</span>
      <div className={classes.wrapper_list}>
        <div className={classes.columns}>
          {columnsList}
        </div>
        <div className={classes.add_list}>
          <ListCreator addList={addList} />
        </div>
      </div>
    </div>
  );
};
