/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'

const StyledSettings = styled.div`
  align-items: center;
  background-color: #000;
  margin-bottom: 3px;

  ul {
    display: flex;
    justify-content: space-evenly;
    min-height: 1.875rem;
  }

  li {
    align-items: center;
    color: #FFF;
    display: flex;
    flex: 1 1 0px;
    font-size: 0.7rem;
    justify-content: center;
    min-height: 1.875rem;
    position: relative;

    span:first-child,
    span:first-child {
      margin-right: 3px;
    }

    &.dropdown__trigger {
      cursor: pointer;

      &:after {
        border-top: 5px solid white;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        content: "";
        dislay: block;
        position: absolute;
        right: 1rem;
        top: 0.85rem;
      }

      &.active ul {
        display: flex;
      }
    }
  }

  ul ul {
    background-color: #FFF;
    border: 1px solid #c5c5c5;
    display: none;
    flex-direction: column;
    left: 0;
    position: absolute;
    top: 1.875rem;
    width: 100%;

    li {
      border: 1px solid transparent;
      color: #000;
      cursor: pointer;
      font-size: 0.875rem;
      justify-content: flex-start;
      padding: 3px 1em;

      &:hover {
        background-color: #007fff;
        border-color: #003eff;
        color: #FFF;
      }
    }
  }
`;

function Settings() {
  const doc = document.querySelector('body')

  doc.addEventListener('click', e => {
    e.stopPropagation();
    handleDropdownState(e)
  }, false);

  function handleDropdownState(e) {
    const clickedItem = e.target.closest('.dropdown__trigger')
    const allDropdowns = document.querySelectorAll('.dropdown__trigger')

    allDropdowns.forEach(el => {
      el.classList.remove('active')
    })

    if (clickedItem) {
      clickedItem.classList.add('active')
    }
  }

  return (
    <StyledSettings>
      <ul>
        <li><span>Pin: </span><span>4FKU11</span></li>
        <li><span>Running Balance: </span><span>63,748.88</span></li>
        <li><span>Last Week Carryover: </span><span>63,748.88</span></li>
        <li><span>Available: </span><span>63,748.88</span></li>
        <li><a href="#">Pending: </a><span>258.35</span></li>
        <li><span>Free play: </span><span>86.50</span></li>
        <li><span>Non Posted Casino: </span><span>0</span></li>
        <li
          className="dropdown__trigger"
          onClick={handleDropdownState}
        >
          <span>English</span>
          <ul className="dropdown__menu">
            <li>English</li>
            <li>Français</li>
            <li>Hindi</li>
            <li>Mandarin</li>
            <li>Portuguese</li>
            <li>Spanish</li>
          </ul>
        </li>
        <li
          className="dropdown__trigger"
          onClick={handleDropdownState}
        >
          <span>American Price</span>
          <ul className="dropdown__menu">
            <li>American Price</li>
            <li>Decimal Price</li>
          </ul>
        </li>
      </ul>
    </StyledSettings>
  )
}

export default Settings