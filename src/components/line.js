import styled from 'styled-components'

import adv from '../assets/images/advprops-logo.svg';

const StyledLine = styled.div`
  display: flex;
  min-height: 2.5rem;
  border-bottom: 1px solid #ddd;

  .Line__time {
    align-items: center;
    flex: 1 1 5%;
    display: flex;
    justify-content: center;

    span {
      color: #333;
      font-size: 0.875rem;
    }
  }

  .Line__teams {
    display: flex;
    flex: 1 1 55%;
    padding: 0 0.5rem;

    &-list {
      display: flex;
      flex-direction: column;

      span {
        align-items: center;
        display: flex;
        font-size: 0.75rem;
        color: #333;
        flex: 1 1 auto;
      }
    }

    &-adv {
      margin-left: auto;
      background-image: url(${adv});
      background-size: contain;
      background-repeat: no-repeat;
      width: 2rem;
      position: relative;
      top: 11px;
    }
  }

  .Line__odds-container {
    align-items: center;
    display: flex;
    flex: 1 1 8.75%;
  }

  .Line__odds {
    background: #ddd;
    border-color: #ddd;
    border-radius: 5px;
    display: flex;
    flex: 1 1 25%;
    justify-content: space-around;
    margin-right: 5px;

    span {
      min-height: 1.875rem;
      align-items: center;
      border-radius: 3px;
      display: flex;
      font-size: 0.75rem;
    }

    &-1 {

    }

    &-2 {

    }
  }
}

  .Line__more {
    align-items: center;
    flex: 1 1 5%;
    display: flex;

    span {
      color: #ff613b;
      font-size: 0.875rem;
    }

    span + span {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`;


function Line() {
  return (
    <StyledLine>
      <div className="Line__time">
        <span>12:30p</span>
      </div>
      <div className="Line__teams">
        <div className="Line__teams-list">
          <span>Houston Texans</span>
          <span>Detroit Lions</span>
        </div>
        <div className="Line__teams-adv"></div>
      </div>
      <div className="Line__odds-container">
        <div className="Line__odds">
          <span className="Line_odds-1">+3</span>
          <span className="Line_odds-2">+103</span>
        </div>
      </div>
      <div className="Line__odds-container">
        <div className="Line__odds">
          <span className="Line_odds-1">+3</span>
          <span className="Line_odds-2">+103</span>
        </div>
      </div>
      <div className="Line__odds-container">
        <div className="Line__odds">
          <span className="Line_odds-1">+3</span>
          <span className="Line_odds-2">+103</span>
        </div>
      </div>
      <div className="Line__odds-container">
        <div className="Line__odds">
          <span className="Line_odds-1">+3</span>
          <span className="Line_odds-2">+103</span>
        </div>
      </div>
      <div className="Line__more">
        <span>22</span>
        <span>+</span>
      </div>
    </StyledLine>
  )
}

export default Line