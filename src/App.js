import { useState } from 'react';
import Index from './components/index';
import './App.css';

function App() {
  const [ isLoggedIn, setLoggedIn ] = useState(false);
  return (
    <>
      <Index isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </>
  );
}

export default App;
