import {
  FETCH_COMPOSITIONS_BEGIN,
  FETCH_COMPOSITIONS_SUCCESS,
  FETCH_COMPOSITIONS_FAILURE,
  ADD_ITEM,
  SHOW_MODAL,
  HIDE_MODAL,
} from "../actions/compositionActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
  modalOpen: false,
};

const compositionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPOSITIONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_COMPOSITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.compositions,
      };

    case FETCH_COMPOSITIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [...state["items"], action.payload.item],
      };

    case SHOW_MODAL:
      return {
        ...state,
        modalOpen: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};

export default compositionReducer;
