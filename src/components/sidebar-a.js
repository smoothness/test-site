import styled from 'styled-components'

import SidebarAItem from './sidebar-a-item'
import { favoriteLeagues } from '../data'
import { baseballLeagues } from '../data'
import { basketballLeagues } from '../data'
import { hockeyLeagues } from '../data'
import { footballLeagues } from '../data'
import { golfLeagues } from '../data'
import { soccerLeagues } from '../data'

const StyledSidebarA = styled.div``;

function SidebarA() {
  return (
    <StyledSidebarA>
      <SidebarAItem sport="My Account" leagues={null} />
      <SidebarAItem sport="Upcoming Events" leagues={null} />
      <SidebarAItem sport="Featured" classes={'featured'} leagues={favoriteLeagues} />
      <SidebarAItem sport="Favorites" leagues={favoriteLeagues} />
      <SidebarAItem sport="Baseball" leagues={baseballLeagues} />
      <SidebarAItem sport="Basketball" leagues={basketballLeagues} />
      <SidebarAItem sport="Hockey" leagues={hockeyLeagues} />
      <SidebarAItem sport="Football" leagues={footballLeagues} />
      <SidebarAItem sport="Golf" leagues={golfLeagues} />
      <SidebarAItem sport="Soccer" leagues={soccerLeagues} />
    </StyledSidebarA>
  )
}

export default SidebarA