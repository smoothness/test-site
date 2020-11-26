import styled from 'styled-components'

import Line from './line'

const StyledLineGroup = styled.div`
  .LineGroup__container {

  }

  .LineGroup__header {
    display: flex;

    div {
      color: #333;
      font-size: 0.875rem;
      flex: 1 1 8.75%;
      text-align: center;
      padding: 6px 0;

      &:first-child {
        flex: 1 1 60%;
      }

      &:last-child {
        flex: 1 1 5%;
      }
    }
  }
`;


function LineGroup() {
  return (
    <StyledLineGroup>
      <div className="LineGroup__container">
        <div className="LineGroup__header">
          <div>Date: 11/26/2020</div>
          <div>Home</div>
          <div>Away</div>
          <div>OVER</div>
          <div>UNDER</div>
          <div></div>
        </div>
        <div className="LineGroup__data">
          <Line />
          <Line />
          <Line />
          <Line />
          <Line />
        </div>
      </div>
    </StyledLineGroup>
  )
}

export default LineGroup