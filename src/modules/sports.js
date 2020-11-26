import styled from 'styled-components'
import { Star, XCircle } from "phosphor-react"

import banner from '../assets/images/banner.jpg'
import LineGroup from '../components/line-group'

const StyledSports = styled.div`
  .hero {
    margin-bottom: 3px;
  }

  h1 {
    margin-bottom: 3px;
  }

  h1 span,
  h3 span {
    margin-left: 4px;
  }
`;


function Sports() {
  return (
    <StyledSports>
      <div className="hero">
        <img src={banner} alt="Sportsbook Test" className="img-responsive" />
      </div>
      <h1>
        <Star size={22} color="#FFF" />
        <span>Fetured Events</span>
      </h1>
      <div className="sports__line-group">
        <h3>
          <XCircle size={22} />
          <span>Football - NFL</span>
        </h3>
        <LineGroup />
      </div>
      <div className="sports__line-group">
        <h3>
          <XCircle size={22} />
          <span>Football - College</span>
        </h3>
        <LineGroup />
      </div>
      <div className="sports__line-group">
        <h3>
          <XCircle size={22} />
          <span>SOCCER - INTERNATIONAL - COPA LIBERTADORES</span>
        </h3>
        <LineGroup />
      </div>
      <div className="sports__line-group">
        <h3>
          <XCircle size={22} />
          <span>SOCCER - INTERNATIONAL - COPA SUDAMERICANA</span>
        </h3>
        <LineGroup />
      </div>
      <div className="sports__line-group">
        <h3>
          <XCircle size={22} />
          <span>SOCCER - INTERNATIONAL - UEFA CHAMPIONS LEAGUE</span>
        </h3>
        <LineGroup />
      </div>
    </StyledSports>
  )
}

export default Sports