const initialState = {
  message: '',
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_MESSAGE':
      return {
        ...state,
        loaded: true,
      };
    case 'COMPLETED_FETCH':
      return { message: action.payload.message };
    default:
      return state;
  }
};

export const fetchmessage = () => async (dispatch) => {
  dispatch({ type: 'FETCHING_MESSAGE' });
  await fetch('/api/v1/messages')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'COMPLETED_FETCH', payload: data });
    })
    .catch(() => dispatch({ type: 'FETCHING_MESSAGE' }));
};

export default messageReducer;