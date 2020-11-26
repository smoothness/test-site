import styled from 'styled-components'
import { Star } from "phosphor-react"

import banner from '../assets/images/banner.jpg'

const StyledCasino = styled.div`
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


function Casino() {
  return (
    <StyledCasino>
      <div className="hero">
        <img src={banner} alt="Sportsbook Test" className="img-responsive" />
      </div>
      <h1>
        <Star size={22} color="#FFF" />
        <span>Casino</span>
      </h1>
    </StyledCasino>
  )
}

export default Casino