import React from "react";
import { useVote } from "../context/VoteContext";
const Result = () => {
  const { votes } = useVote();
  console.log(votes);
  return (
    <>
      {Object.keys(votes).map((key, i) => {
        return (
          <p key={key}>
            {key} has {votes[key]} votes
          </p>
        );
      })}
    </>
  );
};

export default Result;
