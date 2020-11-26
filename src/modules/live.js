import styled from 'styled-components'
import { Star } from "phosphor-react"

import banner from '../assets/images/banner.jpg'

const StyledLive = styled.div`
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


function Live() {
  return (
    <StyledLive>
      <div className="hero">
        <img src={banner} alt="Sportsbook Test" className="img-responsive" />
      </div>
      <h1>
        <Star size={22} color="#FFF" />
        <span>Live</span>
      </h1>
    </StyledLive>
  )
}

export default Live