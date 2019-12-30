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
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding-top: 40px;
  text-align: center;
  margin-left: -2px;

  & a {
    line-height: 2;
    color: var(--headerCol);

    text-wirght: bold;
    cursor: pointer;

    &:hover {
      color: var(--textLink);
    }
  }
`
const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -15px;
  margin-bottom: 15px;
`
const StyledLink = styled.li`
  font-weight: bold;
`

const CollapseMenu = props => {
  if (props.navbarState === true) {
    return (
      <CollapseWrapper>
        <NavLinks>
          <StyledLink>
            <a href="/" onClick={props.handleNavbar}>
              Home
            </a>
          </StyledLink>
          <StyledLink>
            <a href="/about" onClick={props.handleNavbar}>
              About
            </a>
          </StyledLink>
          <StyledLink>
            <a href="https://adamrobinson.dev" onClick={props.handleNavbar}>
              external link
            </a>
          </StyledLink>
        </NavLinks>
        <SocialWrapper>
          <br />
          <SocialIcons />
        </SocialWrapper>
      </CollapseWrapper>
    )
  }
  return null
}

export default CollapseMenu
