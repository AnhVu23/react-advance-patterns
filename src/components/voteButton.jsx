import React from "react";
// Components
import Button from './button'
import { useVote } from "../context/VoteContext";
const VoteButton = ({ text, onClick }) => {
  const {onVoteClick} = useVote()
  return (
      <Button onClick={() => onVoteClick(text)}
              text={text}
      />
  );
};

export default VoteButton;
