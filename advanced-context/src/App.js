import {CountProvider, CountDisplay} from './countContext'

function App() {
  return (
    <CountProvider>
      <CountDisplay />
    </CountProvider>
  );
}

export default App;
