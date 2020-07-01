import React, { useState } from "react"
import styled from "styled-components"

import SiteLogo from "../SiteLogo"
import BurgerMenu from "./BurgerMenu"
import CollapseMenu from "./CollapseMenu"
import DarkModeToggle from "../DarkModeToggle"

const Image = styled.div`
  margin: auto 0;
  padding-top: 10px;
`

const NavBarWrapper = styled.div`
  z-index: 999;
  position: relative;
`

const NavBar = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  background: var(--bg);
  z-index: 9999;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  ${({ active }) =>
    active &&
    `
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  `}
`

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 75px;
  border-bottom: 1px solid var(--logo);
  ${({ active }) =>
    active &&
    `
    border-bottom: 1px solid rgb(208,208,208);
  `}
`
const Toggles = styled.div`
  display: flex;
  justify-content: space-between;
`
const DarkModeAlignmentWrapper = styled.div`
  padding: 25px 0px 0px 0px;
`

const BurgerWrapper = styled.div`
  margin: auto 0;
  @media (min-width: 1024px) {
    display: none;
  }
`

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const handleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }

  return (
    <NavBarWrapper>
      <NavBar active={isNavbarOpen}>
        <FlexContainer active={isNavbarOpen}>
          <DarkModeAlignmentWrapper>
            <DarkModeToggle />
          </DarkModeAlignmentWrapper>
          <Image>
            <SiteLogo />
          </Image>
          <Toggles>
            <BurgerWrapper>
              <BurgerMenu
                navbarState={isNavbarOpen}
                handleNavbar={handleNavbar}
              />
            </BurgerWrapper>
          </Toggles>
        </FlexContainer>
      </NavBar>
      {isNavbarOpen && <CollapseMenu />}
    </NavBarWrapper>
  )
}

export default Navbar
