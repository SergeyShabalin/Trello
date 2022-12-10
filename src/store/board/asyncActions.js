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
    dispatch(BoardAC.isLoading(true));
    const resp = await BoardApi.getBoardAPI(boardId);
    dispatch(BoardAC.viewBoard(resp.data));
    dispatch(BoardAC.isErrorServer(false));
  } catch (error) {
    console.log("error");
    console.warn(error, "server error");
    dispatch(BoardAC.isErrorServer(true));
  } finally {
    dispatch(BoardAC.isLoading(false));
  }
};

export const addNewBoard = (title) => async (dispatch, getState) => {
  const { allBoards } = getState().board;
  try {
    const resp = await BoardApi.addNewBoardAPI(title);
    const board = resp.data;
    const newAllBoards = [...allBoards, board];
    dispatch(BoardAC.addNewBoard(board));
    dispatch(BoardAC.viewAllBoards(newAllBoards));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const addNewBoardSample = (title) => async (dispatch, getState) => {
  const { allBoards } = getState().board;
  try {
    const resp = await BoardApi.addNewBoardSampleAPI(title);
    const board = resp.data;
    const newAllBoards = [...allBoards, board];
    dispatch(getCurrentBoard(resp.data._id));
    dispatch(BoardAC.viewAllBoards(newAllBoards));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const updateBoard = (boardId, title) => async (dispatch) => {
  try {
    await BoardApi.updateBoardAPI(boardId, title);
    dispatch(BoardAC.updateBoard(title));
  } catch (error) {
    console.warn(error, "server error");
  }
};
