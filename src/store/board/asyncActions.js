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
