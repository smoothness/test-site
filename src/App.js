import styled from 'styled-components'

import './App.css';
import Branding from './components/branding'
import MainNav from './components/main-nav'
import Settings from './components/settings'
import SidebarA from './components/sidebar-a'
import SidebarB from './components/sidebar-b'
import Sports from './modules/sports'

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 20.375rem;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header"
    "sidebar__a main sidebar__b"
    "footer footer footer";

  .header {
    grid-area: header;
  }

  .main {
    grid-area: main;
    padding: 3px 10px 0;
  }

  .sidebar__a {
    grid-area: sidebar__a;
  }

  .sidebar__b {
    grid-area: sidebar__b;
  }

  .footer {
    grid-area: footer;
    padding: 7rem 0 1rem;

    p {
      text-align: center;
    }
    small {
      font-size: 0.875rem;
      color: #333;
    }
  }

  @media (max-width: 75rem) {
    grid-template-columns: 2.5rem 1fr;
    grid-template-areas:
      "header header"
      "sidebar__a main"
      "footer footer";

    .sidebar__a {
      padding-left: 5px;
      width: 2.5rem;
    }

    .sidebar__b {
      display: none;
    }
  }

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "sidebar__a"
      "footer";

    .sidebar__a {
      padding: 5px;
      width: calc(100% - 10px);
    }

    .sidebar__b,
    main {
      display: none;
    }

    .footer {
      display: none;
    }
  }
`;

function App() {
  return (
    <div className="App">
      <StyledLayout>
        <header className="header">
          <Branding />
          <MainNav />
          <Settings />
        </header>
        <aside className="sidebar__a">
          <SidebarA />
        </aside>
        <main className="main" role="main">
          <Sports />
        </main>
        <aside className="sidebar__b">
          <SidebarB />
        </aside>
        <footer className="footer">
          <p>
            <small>Copyright © 2020 All rights reserved for NewPregamesiteCom</small>
          </p>
        </footer>
      </StyledLayout>
    </div>
  );
}

export default App;
