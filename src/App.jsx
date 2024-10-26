import { useState } from 'react';
import './App.css';
import { StartGame } from "./components/StartGame";
import { GamePlay } from './components/GamePlay';
import styled from 'styled-components';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)
  const toggleGamePlay = ()=>{
    setIsGameStarted((prev)=> !prev)
  }

  return (
    <Container>
    {
      isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />
    }
    </Container>
  )
}

export default App

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 0 0.75rem;
`;