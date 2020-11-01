import React from "react";
const VoteContext = React.createContext();

const ACTION_VOTE = "VOTE";
function voteReducer(state, action) {
    console.log(state)
  switch (action.type) {
    case ACTION_VOTE:
      return {
          ...state,
          [action.payload.key]: state[action.payload.key] + 1,
        }
    default:
      return state;
  }
}

function useVote() {
  const context = React.useContext(VoteContext);
  if (!context) {
    throw new Error("Use vote must be used within a Vote Provider");
  }

  const [state, dispatch] = context;

  const onVoteClick = (candidate) => {
    dispatch({
      type: ACTION_VOTE,
      payload: {
        key: candidate,
      },
    });
  };
  return {
    context,
    votes: state,
    onVoteClick,
  };
}

function VoteProvider(props) {
  const [state, dispatch] = React.useReducer(voteReducer, {
    Biden: 0,
    Trump: 0,
  });
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <VoteContext.Provider value={value} {...props} />;
}

export { useVote, VoteProvider };
