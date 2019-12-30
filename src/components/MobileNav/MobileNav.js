import React from "react"
import styled from "styled-components"

import SiteLogo from "../SiteLogo"
import BurgerMenu from "./BurgerMenu"
import CollapseMenu from "./CollapseMenu"
import DarkModeToggle from "../DarkModeToggle"

const Image = styled.div`
  margin: auto 0;
  padding-top: 10px;
`

const NavBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--bg);
  z-index: 9999;
`

const FlexContainer = styled.div`
  max-width: 120rem;
  z-index: 9999;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 75px;
  border-bottom: 1px solid var(--logo);
`
const Toggles = styled.div`
  display: flex;
  justify-content: space-between;
`
const DarkModeAlignmentWrapper = styled.div`
  padding: 25px 40px 0px 25px;
`

const BurgerWrapper = styled.div`
  margin: auto 0;
  @media (min-width: 1000px) {
    display: none;
  }
`

const Navbar = props => {
  return (
    <>
      <NavBar>
        <FlexContainer>
          <Image>
            <SiteLogo />
          </Image>

          <Toggles>
            <DarkModeAlignmentWrapper>
              <DarkModeToggle />
            </DarkModeAlignmentWrapper>
            <BurgerWrapper>
              <BurgerMenu
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
              />
            </BurgerWrapper>
          </Toggles>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  )
}

export default Navbar
