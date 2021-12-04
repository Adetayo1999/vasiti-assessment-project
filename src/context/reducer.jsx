export const initialState = {
  usersStory: [],
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

const reducer = (currentState, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        usersStory: [...currentState.usersStory, action.data],
      };

    default:
      return currentState;
  }
};

export default reducer;
