import "./App.css";
import Button from "./components/button";
import { VoteProvider } from "./context/VoteContext";

function App() {
  
  const presidentCandidates = ["Biden", "Trump"];
  return (

    <VoteProvider>
    <div className="App">
      <header className="App-header">
        <p>U.S president vote election 2020:</p>
          {presidentCandidates.map((candidate, i) => {
            return (
              <Button text={candidate} />
            );
          })}
      </header>
    </div>
    </VoteProvider>
  );
}

export default App;
