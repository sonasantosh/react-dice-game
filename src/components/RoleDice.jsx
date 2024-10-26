import styled from "styled-components";

export const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <button onClick={roleDice}>
        <img src={`./images/dice_${currentDice}.svg`} alt="Dice" />
      </button>
      <p>Click on Dice to Roll.</p>
    </DiceContainer>
  );
};

const DiceContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  button {
    background-color: transparent;
    display: inline-flex;
    margin: 0;
    border-radius: 25px;
    max-width: 200px;
    img {
      display: block;
      cursor: pointer;
      max-width: 100%;
      width: 100%;
      height: auto;
      transform: scale(1.05);
    }
  }
  p {
    font-size: 1.5rem;
    line-height: 1.25;
  }
`;
