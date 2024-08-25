// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import Data from './data.json';

// Initial State
const initialState = {
    cspm: Data.cspm,
    cwpp: Data.cwpp,
    image: Data.image,
    ticket: Data.ticket
};

// Action Types
const ADD_CSPM = 'ADD_CSPM';
const ADD_CWPP = 'ADD_CWPP';
const ADD_IMAGE = 'ADD_IMAGE';
const ADD_TICKET = 'ADD_TICKET';
const UPDATE_ITEM_NAME_CSPM = 'UPDATE_ITEM_NAME_CSPM';
const UPDATE_ITEM_NAME_CWPP = 'UPDATE_ITEM_NAME_CWPP';
const UPDATE_ITEM_NAME_IMAGE = 'UPDATE_ITEM_NAME_IMAGE';
const UPDATE_ITEM_NAME_TICKET = 'UPDATE_ITEM_NAME_TICKET';
// Action Creators
export const addCspm = (id, newName) => ({
  type: ADD_CSPM,
  payload: { id , newName},
});

export const addCwpp = (id, newName) => ({
  type: ADD_CWPP,
  payload: { id , newName},
});
export const addImage = (id, newName) => ({
  type: ADD_IMAGE,
  payload: { id , newName},
});
export const addTicket = (id, newName) => ({
  type: ADD_TICKET,
  payload: { id , newName},
});
export const updateItemNameCspm = (id, newName) => ({
  type: UPDATE_ITEM_NAME_CSPM,
  payload: { id , newName} ,
});
export const updateItemNameCwpp = (id, newName) => ({
  type: UPDATE_ITEM_NAME_CWPP,
  payload: { id , newName} ,
});
export const updateItemNameImage = (id, newName) => ({
  type: UPDATE_ITEM_NAME_IMAGE,
  payload: { id , newName} ,
});
export const updateItemNameTicket = (id, newName) => ({
  type: UPDATE_ITEM_NAME_TICKET,
  payload: { id , newName} ,
});
// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CSPM:
      return {
        ...state,
        cspm: state.cspm.map(item =>
          item.id === action.payload.id
            ? { ...item, name:action.payload.newName}
            : item),
      };
    case ADD_CWPP:
      return {
        ...state,
        cwpp: state.cwpp.map(item =>
          item.id === action.payload.id
            ? { ...item, name: action.payload.newName}
            : item),
      };
      case ADD_IMAGE:
      return {
        ...state,
        image: state.image.map(item =>
          item.id === action.payload.id
            ? { ...item, name: action.payload.newName}
            : item),
      };
      case ADD_TICKET:
        return {
          ...state,
          ticket: state.ticket.map(item =>
            item.id === action.payload.id
              ? { ...item, name: action.payload.newName}
              : item),
        };
      case UPDATE_ITEM_NAME_CSPM:
      return {
        ...state,
        cspm: state.cspm.map(item =>
          item.id === action.payload.id
            ? { ...item, name:action.payload.newName}
            : item
        ),
      };
      case UPDATE_ITEM_NAME_CWPP:
      return {
        ...state,
        cwpp: state.cwpp.map(item =>
          item.id === action.payload.id
            ? { ...item, name:action.payload.newName}
            : item
        ),
      };
      case UPDATE_ITEM_NAME_IMAGE:
      return {
        ...state,
        image: state.image.map(item =>
          item.id === action.payload.id
            ? { ...item, name:action.payload.newName}
            : item
        ),
      };
      case UPDATE_ITEM_NAME_TICKET:
      return {
        ...state,
        ticket: state.ticket.map(item =>
          item.id === action.payload.id
            ? { ...item, name:action.payload.newName}
            : item
        ),
      };
    default:
      return state;
  }
};

// Create and Export Store
const store = configureStore({reducer:reducer});

export default store;
