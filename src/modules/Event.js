import styled from 'styled-components'
import { useLocation } from "react-router-dom"
import { Star } from "phosphor-react"

import banner from '../assets/images/banner.jpg'

const StyledEvent = styled.div`
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


function Event() {
  let location = useLocation();

  return (
    <StyledEvent>
      <div className="hero">
        <img src={banner} alt="Sportsbook Test" className="img-responsive" />
      </div>
      <h1>
        <Star size={22} color="#FFF" />
        <span>Event</span>
      </h1>
      <p>{location.state.title}</p>
    </StyledEvent>
  )
}

export default Event