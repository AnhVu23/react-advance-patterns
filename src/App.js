import React from "react";
import VoteButton from "./components/voteButton";
import Button from "./components/button";
import Result from "./components/result";
import { VoteProvider } from "./context/VoteContext";
// Style
import "./App.css";

function App() {
  const [openResult, setOpenResult] = React.useState(false);
  const presidentCandidates = ["Biden", "Trump"];
  return (
    <div className="App">
      <header className="App-header">
        <p>U.S president vote election 2020:</p>

        <VoteProvider>
          <div className="vote-buttons">
            {presidentCandidates.map((candidate, i) => {
              return <VoteButton key={candidate} text={candidate} />;
            })}
          </div>
          <Button
            text="See the result"
            onClick={() => setOpenResult(!openResult)}
          />
          {openResult ? <Result /> : null}
        </VoteProvider>
      </header>
    </div>
  );
}

export default App;
