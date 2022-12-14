import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { addColumn, getAllColumns } from "../../../store/columns/asyncActions";
import Column from "./Columns";
import ListCreator from "./ColumnCreator";
import BoardEditor from "./BoardEditor";
import Loader from "../../../components/basic/Loader";
import useOpenCloseContext from "../../../hooks/UseOpenCloseContext";
import classes from "./Board.module.css";

export default function Board({ currentBoard }) {

  const dispatch = useDispatch();
  const columnsStore = useSelector(state => state.columns.columns);
  const navigate = useNavigate();
  const [isCreator, setIsCreator] = useState(true);
  const isColumnsLoader = useSelector(state => state.columns.isColumnsLoading);
  const { contextOpen, contextClose, isContext } = useOpenCloseContext();
  const { cardId } = useParams();


  useEffect(() => {
      if (currentBoard._id) {
        dispatch(getAllColumns(currentBoard._id));
        navigate(`/board/${currentBoard._id}`);
        setIsCreator(true);
      }
      if (cardId) navigate(`/board/${currentBoard._id}/card/${cardId}`);
  }, [currentBoard]);

  function columnCreator() {
    setIsCreator(!isCreator);
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
          boardId={currentBoard._id}
          cardList={column.cards}
          sortArr={column.sortArr}
          draggable
        />
      </div>
    );
  });

  return (
    <div>
      {isColumnsLoader && <Loader/>}
      {!isContext
        ? <div className={classes.board_header} onClick={contextOpen}>{currentBoard.title}</div>
        : <BoardEditor
          boardId={currentBoard._id}
          title={currentBoard.title}
          closeEditor={contextClose}
        />
      }
        <div className={classes.wrapper_list}>
          <div className={classes.columns}>{columnsList}
          </div>
          <div className={classes.add_list}>
            <ListCreator addList={addList} boardId={currentBoard._id} />
          </div>
        </div>
    </div>
  );
};
