import styled from 'styled-components'

const StyledBetSlip = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 0 3px 0;

  h3 {
    align-items: center;
    background-color: #000;
    border-radius: 4px;
    color: #FFF;
    display: flex;
    font-size: 1rem;
    font-weight: normal;
    margin: 0;
    min-height: 2rem;
    justify-content: center;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.75rem;

    button {
      border: 3px solid #bbb;
      border-radius: 4px;
      color: #808080;
      cursor: pointer;
      font-size: 0.75rem;
      flex: 0 0 32%;
      margin-bottom: 3px;
      min-height: 1.375rem;

      &.active,
      &:hover {
        background-color: #ff613b;
        border-color: #ff613b;
        color: #FFF;
      }
    }
  }

  .bottom {
    padding: 0 0.75rem 0.75rem;

    div {
      border-top: 1px solid #DDD;
      padding: 6px 0 0;
    }

    input {
      background-color: transparent;
      border: 1px solid #CCC;
      border-radius: 4px;
      height: 1.25rem;
      width: 98%;
      margin-bottom: 0.625rem;
    }

    button {
      width: 100%;
    }
  }
`;

function BetSlip() {
  return (
    <StyledBetSlip className="Branding">
      <h3>Betslip</h3>
      <div className="buttons">
        <button className="active">Straight Bet</button>
        <button>Parlay</button>
        <button>RndRobin</button>
        <button>Teaser</button>
        <button>ifBet</button>
        <button>Reverse</button>
      </div>
      <div className="bottom">
        <div>
          <input />
          <button className="btn btn--default">Your Betslip is Empty</button>
        </div>
      </div>
    </StyledBetSlip>
  )
}

export default BetSlip