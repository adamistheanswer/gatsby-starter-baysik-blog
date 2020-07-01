import React from "react"
import styled from "styled-components"

const Burgermenu = props => {
  return (
    <Wrapper onClick={props.handleNavbar}>
      <div className={props.navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  )
}

export default Burgermenu

const Wrapper = styled.div`
  position: relative;
  padding-top: 0.3rem;
  cursor: pointer;
  display: block;

  & span {
    background: var(--logo);
    display: block;
    position: relative;
    width: 7px;
    height: 7px;
    margin-left: 17px;
    margin-bottom: 0.3rem;
    border-radius: 50%;
  }
`
