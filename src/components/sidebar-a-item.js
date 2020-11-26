/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import { User, Fire, Check, Star, DribbbleLogo, Clock } from "phosphor-react"

const StyledSidebarAItem = styled.div`
  margin-bottom: 3px;

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

  li {
    align-items: center;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    display: flex;
    cursor: pointer;
    padding: 3px 7px;

    &:hover {
      background-color: #ddd;
    }
  }

  span {
    color: #222;
    font-size: 0.6875rem;
    text-transform: uppercase;
  }

  .star {
    position: relative;
    top: 3px;
    margin-left: auto;
  }

  .check {
    margin-right: 5px;
  }

  &.featured {
    border-bottom: 4px solid #ff613b;

    .heading {
      background-color: #ff613b;
      color: #FFF;
    }

    li {
      border-right: 4px solid #ff613b;
      border-left: 4px solid #ff613b;
    }
  }
`

function SidebarAItem({ sport, leagues, classes }) {
  return (
    <StyledSidebarAItem className={classes}>
      <p className="heading">
        <span className="icon">
          {sport === 'My Account' && <User size={20} color="#FFF" />}
          {sport === 'Upcoming Events' && <Clock size={20} color="#FFF" />}
          {sport === 'Favorites' && <Star size={20} color="#FFF" />}
          {sport === 'Featured' && <Fire size={20} color="#FFF" />}
          {sport !== 'My Account'
            && sport !== 'Upcoming Events'
            && sport !== 'Favorites'
            && sport !== 'Featured'
            && <DribbbleLogo size={22} color="#cecece" />}
        </span>
        <span className="title">{ sport }</span>
      </p>
      { leagues && (
        <ul className="options">
          {
            leagues.map((league, i) => {
              return (
                <li key={i}>
                  <span className="check">
                    {sport === 'Featured' && <DribbbleLogo size={20} color="#222" />}
                    {sport !== 'Featured' && <Check size={18} color="#ff613b" />}
                  </span>
                  <span>{ league }</span>
                  <span className="star">
                    <Star size={20} color="#cecece" />
                  </span>
                </li>
              )
            })
          }
        </ul>)
      }
    </StyledSidebarAItem>
  )
}

export default SidebarAItem