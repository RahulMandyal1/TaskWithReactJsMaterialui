import { UPDATE_CARD, DELETE_CARD, COPY_CARD } from "./cardTypes";
export const updateCard = (data) => {
  console.log(data);
  return {
    type: UPDATE_CARD,
    payload: data,
  };
};

// delete action
export const deleteCard = (data) => {
  return {
    type: DELETE_CARD,
    payload: data,
  };
};

//copy action
export const copyCard = (data) => {
  return {
    type: COPY_CARD,
    payload: data,
  };
};
