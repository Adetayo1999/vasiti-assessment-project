import { createContext, useContext, useReducer } from "react";

const StoryContext = createContext();

const StoryProvider = ({ initialState, reducer, children }) => (
  <StoryContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StoryContext.Provider>
);

export const StoryConsumer = () => useContext(StoryContext);

export default StoryProvider;
