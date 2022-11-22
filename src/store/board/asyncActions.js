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
    const boards = resp.data.map(i => i);
    dispatch(BoardAC.viewBoard(boards));
  } catch (error) {
    console.warn(error, "server error");
  }
};