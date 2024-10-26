import styled from "styled-components"

export const Rules = () => {
  return (
    <RuleWrapper className="ruleWrapper">
        <h2>How to play dice game ?</h2>
        <ul>
            <li>Select any number.</li>
            <li>Click on the dice image</li>
            <li>After click on dice if selected number is equal to dice number you will get same point as dice</li>
            <li>If you get wrong guess then 2 point will be deducted</li>
        </ul>
    </RuleWrapper>
  )
}

const RuleWrapper = styled.div`
    &.ruleWrapper{
        max-width: 800px;
        padding: 1rem;
        background-color: #f0f0f0;
        display: block;
        margin: 1rem auto;
        border-radius: 0.5rem;
        h2{
            font: 1.5rem;
            line-height: 1.2;
            font-weight: 500;
            margin-bottom: 0.5rem;
        }
        ul{
            list-style-type: disc;
            padding: 0 0 0 1.25rem;
            margin: 0;
            li{
                font-size: 0.85rem;
                line-height: 1.4;
                font-weight: 400;
            }
        }
    }
`;