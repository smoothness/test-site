import styled from 'styled-components'
import { Star } from "phosphor-react"

import banner from '../assets/images/banner.jpg'

const StyledVirtual = styled.div`
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


function Virtual() {
  return (
    <StyledVirtual>
      <div className="hero">
        <img src={banner} alt="Sportsbook Test" className="img-responsive" />
      </div>
      <h1>
        <Star size={22} color="#FFF" />
        <span>Virtual</span>
      </h1>
    </StyledVirtual>
  )
}

export default Virtual