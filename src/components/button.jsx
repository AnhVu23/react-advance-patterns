import React from "react";
import { useVote} from "../context/VoteContext";
const Button = ({ text}) => {
  const [votes, setVotes] = useVote()
  console.log(typeof setVotes)
  const onVoteClick = (candidate) => {
    setVotes({ ...votes, [candidate]: votes[candidate] + 1 })
  }
  return (
      <button onClick={onVoteClick}>
        <span>{text}</span>
      </button>
  );
};

export default Button;
