import BoardApi from "../../api/BoardApi";
import { BoardAC } from "../board/actions";


export const getAllBoard = (boardId) => async (dispatch) => {
  try {
    const resp = await BoardApi.getAllBoardAPI(boardId);
    dispatch(BoardAC.viewAllBoards(resp.data));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const getCurrentBoard = (boardId) => async (dispatch) => {
  try {
    const resp = await BoardApi.getBoardAPI(boardId);
    dispatch(BoardAC.viewBoard(resp.data));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const addNewBoard = (title) => async (dispatch) => {
  try {
    const resp = await BoardApi.addNewBoardAPI(title);
     const boards = resp.data
    console.log(boards);
      dispatch(BoardAC.addNewBoard(boards));
  } catch (error) {
    console.warn(error, "server error");
  }
};