import styled from "styled-components";

export const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value)=>{
    setSelectedNumber(value);
    setError("");
  }
  return (
    <NumberSelectorContainer>
      <p>Select any Number</p>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            key={i + 1}
            onClick={()=>numberSelectorHandler(value)}
            $isSelected={value == selectedNumber}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className="error">{error}</p>
    </NumberSelectorContainer>
  );
};

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .flex {
    display: flex;
    gap: 0.5rem;
  }
  p {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    &.error {
      color: red;
      font-size: 0.75rem;
      margin-top: 0.5rem;
    }
  }
`;

const Box = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  line-height: 1;
  border-radius: 5px;
  background-color: ${(props) => (props.$isSelected ? "#000" : "#fff")};
  color: ${(props) => (props.$isSelected ? "#fff" : "#000")};
  cursor: pointer;
`;
