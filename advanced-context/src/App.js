import {CountProvider, CountDisplay, Counter} from './countContext'
function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  );
}

export default App;
