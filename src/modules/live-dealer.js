import styled from 'styled-components'
import { Star } from "phosphor-react"

import banner from '../assets/images/banner.jpg'

const StyledLiveDealer = styled.div`
  .hero {
    margin-bottom: 3px;
  }

  h1 {
    margin-bottom: 3px;
  }

  h1 span {
    margin-left: 4px;
  }
`;


function LiveDealer() {
  return (
    <StyledLiveDealer>
      <div className="hero">
        <img src={banner} alt="Sportsbook Test" className="img-responsive" />
      </div>
      <h1>
        <Star size={22} color="#FFF" />
        <span>Live Dealer</span>
      </h1>
    </StyledLiveDealer>
  )
}

export default LiveDealer