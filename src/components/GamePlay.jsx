import { useState } from "react";
import styled from "styled-components";
import { Button, OutlineButton } from "./styled/Button";
import { NumberSelector } from "./NumberSelector";
import { TotalScore } from "./TotalScore";
import { RoleDice } from "./RoleDice";
import { Rules } from "./Rules";

export const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRule, setShowRule] = useState(false);
  const GenerateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = GenerateRandomNumber(7, 1);
    setCurrentDice(() => randomNumber);
    if (selectedNumber === randomNumber) {
      setError("Selected Number has been matched.");
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="buttonWrapper">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRule(!showRule)}>
          {showRule ? "Hide Rules" : "Show Rules"}
        </Button>
      </div>
      {showRule && <Rules />}
    </MainContainer>
  );
};

const MainContainer = styled.main`
  .top_section {
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .buttonWrapper {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    Button {
      margin-right: auto;
    }
  }
`;
