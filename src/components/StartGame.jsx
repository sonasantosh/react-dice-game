import styled from "styled-components";
import { Button } from "./styled/Button";
export const StartGame = ({ toggle }) => {
  return (
    <Wrapper>
      <figure>
        <img src="images/dices.png" alt="Dice" />
      </figure>
      <div className="description">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  figure {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      width: 100%;
      display: block;
    }
  }
  .description {
    h1 {
      font-size: 76px;
      font-weight: 700;
      line-height: 144px;
      text-align: left;
      white-space: nowrap;
      text-transform: uppercase;
    }
  }
`;

