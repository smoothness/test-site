import styled from 'styled-components'

import logo from '../assets/images/logo.png'

const StyledBranding = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  img {
    width: 9.375rem;
  }

  @media (max-width: 75rem) {
    padding: 1rem;
  }

  @media (max-width: 48rem) {
    display: none;
  }
`;

function Branding() {
  return (
    <StyledBranding className="Branding">
      <img className="Branding__logo" src={logo} alt="Logo" />
      <button className="Branding__login btn btn--alert">Logout</button>
    </StyledBranding>
  )
}

export default Branding