import styled from "styled-components";

export const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h2>{score}</h2>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

const ScoreContainer = styled.div`
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f0f0f0;
  padding: 15px;
  h2 {
    font-size: 100px;
    line-height: 1;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
