export const FETCH_COMPOSITIONS_BEGIN = "FETCH_COMPOSITIONS_BEGIN";
export const FETCH_COMPOSITIONS_SUCCESS = "FETCH_COMPOSITIONS_SUCCESS";
export const FETCH_COMPOSITIONS_FAILURE = "FETCH_COMPOSITIONS_FAILURE";
export const ADD_ITEM = "ADD_ITEM";
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const fetchCompositionsBegin = () => ({
  type: FETCH_COMPOSITIONS_BEGIN,
});

export const fetchCompositionsSuccess = (compositions) => ({
  type: FETCH_COMPOSITIONS_SUCCESS,
  payload: { compositions },
});

export const fetchCompositionsFailure = (error) => ({
  type: FETCH_COMPOSITIONS_FAILURE,
  payload: { error },
});

export function fetchCompositions() {
  return (dispatch) => {
    dispatch(fetchCompositionsBegin());
    return fetch("./data.json")
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.compositions);
        dispatch(fetchCompositionsSuccess(json.compositions));
        return json.compositions;
      })
      .catch((error) => dispatch(fetchCompositionsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const addComposition = (itemContent) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  console.log(itemContent);

  return {
    type: ADD_ITEM,
    payload: {
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const showModal = () => {
  return {
    type: SHOW_MODAL,
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};
