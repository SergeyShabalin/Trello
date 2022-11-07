import {COLUMNS_TYPES} from "./constants";
import { CARD_TYPES } from "../cards/constants";

export const columnsAC = {
    viewAllColumns: (payload) => ({type: COLUMNS_TYPES.VIEW_ALL_COLUMNS, payload}),
    addNewColumn: (payload) => ({type: COLUMNS_TYPES.ADD_NEW_COLUMN, payload}),
    columnDelete: (payload) => ({type: COLUMNS_TYPES.VIEW_ALL_COLUMNS, payload}),
    columnUpdate: (payload) => ({type: COLUMNS_TYPES.VIEW_ALL_COLUMNS, payload}),
    cardsAdd: (payload) => ({type: COLUMNS_TYPES.VIEW_ALL_COLUMNS, payload}),
    cardDelete: (payload) => ({type: COLUMNS_TYPES.VIEW_ALL_COLUMNS, payload}),
    cardUpdate: (payload) => ({type: COLUMNS_TYPES.VIEW_ALL_COLUMNS, payload}),
    dragCards: (payload) => ({type: COLUMNS_TYPES.VIEW_ALL_COLUMNS, payload}),
};