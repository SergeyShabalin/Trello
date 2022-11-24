import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "./Columns";
import { addColumn, getAllColumns } from "../../../store/columns/asyncActions";
import ListCreator from "./ColumnCreator";
import classes from "./Board.module.css";
import BoardEditor from "./BoardEditor";


export default function Board({ currentBoard }) {

  const dispatch = useDispatch();
  const columnsStore = useSelector(state => state.columns.columns);
  const [isCreator, setIsCreator] = useState(true);
  const [isEditor, setIsEditor] = useState(false);

  useEffect(() => {
    if (currentBoard._id) {
      dispatch(getAllColumns(currentBoard._id));
      setIsCreator(true);
    }
  }, [currentBoard]);

  function columnCreator() {
    setIsCreator(!isCreator);
  }
//TODO сделать хук
  function openEditor() {
    setIsEditor(true);
  }

  function closeEditor() {
    setIsEditor(false);
  }


  function addList(header, boardId) {
    dispatch(addColumn(header, boardId));
    columnCreator();
  }

  const columnsList = columnsStore.map((column, index) => {
    return (
      <div key={column._id}>
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

  return (
    <div className={classes.board}>
      {!isEditor
        ? <div className={classes.board_header} onClick={openEditor}>{currentBoard.title}</div>
        : <BoardEditor
          boardId={currentBoard._id}
          title={currentBoard.title}
          closeEditor={closeEditor} />}
      <div className={classes.wrapper_list}>
        <div className={classes.columns}>
          {columnsList}
        </div>
        <div className={classes.add_list}>
          <ListCreator addList={addList} boardId={currentBoard._id} />
        </div>

      </div>
    </div>
  );
};
