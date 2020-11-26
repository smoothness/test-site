/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import { DribbbleLogo } from "phosphor-react"

import BetSlip from './betslip'

const StyledSidebarB = styled.div`
  h3 {
    align-items: center;
    background-color: #000;
    border-radius: 4px;
    color: #FFF;
    display: flex;
    font-size: 1rem;
    font-weight: normal;
    margin: 0 0 1px 0;
    min-height: 2rem;
    justify-content: center;
  }

  .upper {
    text-transform: uppercase;
  }

  .heading {
    align-items: center;
    background-color: #000;
    color: #FFF;
    font-size: 0.875rem;
    display: flex;
    padding: 5px;
    text-transform: uppercase;

    .icon {
      position: relative;
      top: 2px;
    }

    .title {
      font-size: 0.875rem;
      color: #FFF;
      margin-left: 3px;
    }
  }

  .match {
    border: 1px solid #ddd;
    display: flex;
    min-height: 2.5rem;

    &:hover {
      &__teams {
        span {
          color: #23527c;
        }
      }
    }

    &__score {
      background-color: #ff613b;
      color: #FFF;
      display: flex;
      flex-direction: column;
      min-width: 2.75rem;

      span {
        align-items: center;
        display: flex;
        flex: 1 1 auto;
        font-size: 0.875rem;
        justify-content: center;
      }
    }

    &__teams {
      display: flex;
      flex-direction: column;
      margin-left: 5px;

      span {
        align-items: center;
        color: #337ab7;
        display: flex;
        flex: 1 1 auto;
        font-size: 0.75rem;
      }
    }

    &__time {
      display: flex;
      flex-direction: column;
      margin-left: auto;
      padding-right: 1.5rem;

      span {
        align-items: center;
        color: #337ab7;
        display: flex;
        flex: 1 1 auto;
        font-size: 0.625rem;
        justify-content: center;
      }
    }

    .starts-in {
      font-size: 0.5625rem;
    }
  }
`

function SidebarB() {
  return (
    <StyledSidebarB>
      <BetSlip />
      <h3 className="upper">Now in Play</h3>
      <div className="upcoming-now">
        <p className="heading">
          <span className="icon">
            <DribbbleLogo size={22} color="#cecece" />
          </span>
          <span className="title">Soccer</span>
        </p>
        <div className="match-group">
          <a href="#" className="match">
            <div className="match__score">
              <span>1</span>
              <span>0</span>
            </div>
            <div className="match__teams">
              <span>Real Estelí</span>
              <span>Herediano</span>
            </div>
            <div className="match__time">
              <span>2nd Half</span>
              <span>88'</span>
            </div>
          </a>
          <a href="#" className="match">
            <div className="match__score">
              <span>1</span>
              <span>0</span>
            </div>
            <div className="match__teams">
              <span>Real Estelí</span>
              <span>Herediano</span>
            </div>
            <div className="match__time">
              <span>2nd Half</span>
              <span>88'</span>
            </div>
          </a>
          <a href="#" className="match">
            <div className="match__score">
              <span>1</span>
              <span>0</span>
            </div>
            <div className="match__teams">
              <span>Real Estelí</span>
              <span>Herediano</span>
            </div>
            <div className="match__time">
              <span>2nd Half</span>
              <span>88'</span>
            </div>
          </a>
        </div>
      </div>
      <h3>Upcoming Live</h3>
      <p className="heading">
          <span className="icon">
            <DribbbleLogo size={22} color="#cecece" />
          </span>
          <span className="title">Soccer</span>
        </p>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Los Angeles FC</span>
            <span>Seattle Sounders</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Avispa Fukuoka</span>
            <span>Tokyo Verdy</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Gamba Osaka</span>
            <span>Kawasaki Frontable</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Shimizy S-Pulse</span>
            <span>Yokohama FC</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Real Estelí</span>
            <span>Herediano</span>
          </div>
        </a>
        <p className="heading">
          <span className="icon">
            <DribbbleLogo size={22} color="#cecece" />
          </span>
          <span className="title">Basketball</span>
        </p>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Barangay Ginebra San Miguel</span>
            <span>Meralco Bolts</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Barangay Ginebra San Miguel</span>
            <span>Meralco Bolts</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Barangay Ginebra San Miguel</span>
            <span>Meralco Bolts</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Barangay Ginebra San Miguel</span>
            <span>Meralco Bolts</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Barangay Ginebra San Miguel</span>
            <span>Meralco Bolts</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Barangay Ginebra San Miguel</span>
            <span>Meralco Bolts</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>TNT KaTropa</span>
            <span>Phoenix Pulse Fuel Masters</span>
          </div>
        </a>
        <p className="heading">
          <span className="icon">
            <DribbbleLogo size={22} color="#cecece" />
          </span>
          <span className="title">Baseball</span>
        </p>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Yomiuri Giants</span>
            <span>Fukuoka Softbank Hawks</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Yomiuri Giants</span>
            <span>Fukuoka Softbank Hawks</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Yomiuri Giants</span>
            <span>Fukuoka Softbank Hawks</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Yomiuri Giants</span>
            <span>Fukuoka Softbank Hawks</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Yomiuri Giants</span>
            <span>Fukuoka Softbank Hawks</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Yomiuri Giants</span>
            <span>Fukuoka Softbank Hawks</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Yomiuri Giants</span>
            <span>Fukuoka Softbank Hawks</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Yomiuri Giants</span>
            <span>Fukuoka Softbank Hawks</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Yomiuri Giants</span>
            <span>Fukuoka Softbank Hawks</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Yomiuri Giants</span>
            <span>Fukuoka Softbank Hawks</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Yomiuri Giants</span>
            <span>Fukuoka Softbank Hawks</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Yomiuri Giants</span>
            <span>Fukuoka Softbank Hawks</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Yomiuri Giants</span>
            <span>Fukuoka Softbank Hawks</span>
          </div>
        </a>
        <a href="#" className="match">
          <div className="match__score">
            <span className="starts-in">Starts in</span>
            <span className="starts-in-time">06:16</span>
          </div>
          <div className="match__teams">
            <span>Yomiuri Giants</span>
            <span>Fukuoka Softbank Hawks</span>
          </div>
        </a>
    </StyledSidebarB>
  )
}

export default SidebarB