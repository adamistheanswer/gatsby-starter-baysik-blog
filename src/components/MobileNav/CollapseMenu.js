import React from "react"
import styled from "styled-components"
import SocialIcons from "../SocialIcons"

const CollapseWrapper = styled.div`
  background: var(--bg);
  position: fixed;
  top: 3rem;
  left: 0;
  right: 0;
  border-bottom: 1px solid var(--logo);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const NavLinks = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  padding-top: 40px;
  text-align: center;
  margin-left: -2px;
`
const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -15px;
  margin-bottom: 15px;
  margin-top: 2px;
`
const StyledLink = styled.a`
  font-weight: bold;
  line-height: 2;
  color: var(--headerCol);
  text-wirght: bold;
  cursor: pointer;
  &:hover {
    color: var(--textLink);
  }
`

const CollapseMenu = props => {
  return (
    <CollapseWrapper>
      <NavLinks>
        <StyledLink href="/" onClick={props.handleNavbar}>
          Home
        </StyledLink>
        <StyledLink href="/about" onClick={props.handleNavbar}>
          About
        </StyledLink>
        <StyledLink
          href="https://adamrobinson.dev"
          onClick={props.handleNavbar}
        >
          Adam Robinson
        </StyledLink>
        <StyledLink
          href="https://attackingpixels.com"
          onClick={props.handleNavbar}
        >
          Attacking Pixels
        </StyledLink>

        <StyledLink href="/search" onClick={props.handleNavbar}>
          Search
        </StyledLink>
      </NavLinks>
      <SocialWrapper>
        <SocialIcons />
      </SocialWrapper>
    </CollapseWrapper>
  )
}

export default CollapseMenu
