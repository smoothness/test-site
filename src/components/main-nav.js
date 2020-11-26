/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'

import newBadge from '../assets/images/new.png'

const StyledMainNav = styled.nav`
  margin-bottom: 1.5rem;

  ul {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 60%;
  }

  li {
    border-bottom: 3px solid transparent;
    padding: 0.25rem 0.5rem;
    position: relative;

    &:hover,
    &.active {
      border-bottom-color: red;
    }

    .new {
      left: -20px;
      position: absolute;
      top: -5px;
      width: 2.5rem;
    }
  }

  a {
    font-size: 0.875rem;
    text-transform: uppercase;
  }

  @media (max-width: 48rem) {
    display: none;
  }
`;

function MainNav() {
  return (
    <StyledMainNav>
      <ul>
        <li className="active">
          <a href="#">Sports</a>
        </li>
        <li>
          <a href="#">Live</a>
        </li>
        <li>
          <a href="#">Props Builder</a>
        </li>
        <li>
          <a href="#">Horses</a>
        </li>
        <li>
          <a href="#">Virtual</a>
        </li>
        <li>
          <a href="#">Casino</a>
        </li>
        <li className="live-dealer">
          <img className="new" src={newBadge} alt="new" />
          <a href="#">Live Dealer</a>
        </li>
      </ul>
    </StyledMainNav>
  )
}

export default MainNav