import ColumnsAPI from "../../api/ColumnsAPI";
import { columnsAC } from "../columns/actions";
import BoardApi from "../../api/BoardApi";
import { BoardAC } from "../board/actions";

export const getAllColumns = (countBoard) => async (dispatch, getState) => {
  try {
     const resp = await ColumnsAPI.getAllColumnsAPI(countBoard);
    console.log('data',resp.data);
    dispatch(columnsAC.viewAllColumns(resp.data));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const addColumn = (header, boardId) => async (dispatch,getState) => {

  try {
    const resp = await ColumnsAPI.addNewColumnAPI(header, boardId);

    const { boards } = getState().board;
    const { columns } = getState().columns;

    // const newBoard =  boards.map(i=> {
    //     if(i._id === resp.data._id) return resp.data
    //     else return i
    //   })
    // console.log('newBoard', newBoard);
    // dispatch(BoardAC.viewBoard(newBoard));
    //TODO 2 диспатча не прокатит
    dispatch(columnsAC.addNewColumn(resp.data));

    // //TODO сделать обновление на фронте
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const deleteColumn = (columnId) => async (dispatch, getState) => {
  const { columns } = getState().columns;
  try {
    await ColumnsAPI.deleteColumnAPI(columnId);
    const columnsAfterDelete = (columns.filter(item => item._id !== columnId));
    dispatch(columnsAC.columnDelete(columnsAfterDelete));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const updateColumn = (columnId, header) => async (dispatch, getState) => {
  const { columns } = getState().columns;
  try {
    await ColumnsAPI.updateColumnAPI(columnId, header);
    const columnsForUpdate = columns.map((item) => {
      if (item._id === columnId) {
        return { ...item, header: header };
      } else return item;
    });
    dispatch(columnsAC.columnUpdate(columnsForUpdate));
  } catch (error) {
    console.warn(error, "server error");
  }
};





