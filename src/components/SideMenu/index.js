import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SiteLogo from "../SiteLogo"
import DarkModeToggle from "../DarkModeToggle"
import SocialIcons from "../SocialIcons"
const TopWrapper = styled.div``

const BottomWrapper = styled.div`
  padding-bottom: 35px;
  min-width: 300px;
  max-width: 300px;
  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  bottom: 0;
  align-items: center;
  text-align: center;
`
const SideMenuWrapper = styled.div`
  padding-top: 25px;
  min-width: 300px;
  max-width: 300px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`

const SideLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const StyledLink = styled.a`
  padding-top: 10px;
`

const SideMenu = props => {
  return (
    <>
      <SideMenuWrapper>
        <TopWrapper>
          <SiteLogo />
          {props.location.pathname === props.rootPath ||
          props.location.pathname === "/about/" ? (
            <>
              <h4
                style={{
                  paddingTop: 20,
                  fontFamily: `Montserrat, sans-serif`,
                  marginTop: 0,
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/`}
                >
                  {props.title}
                </Link>
              </h4>
              <p style={{ paddingTop: "10px" }}>Welcome to Baysik Blog</p>
              <DarkModeToggle />
              <SideLinks>
                {props.location.pathname === "/about/" ? (
                  <a href="/">Home</a>
                ) : (
                  <a href="/about">About</a>
                )}

                <StyledLink href="https://adamrobinson.dev">
                  external link
                </StyledLink>
              </SideLinks>
            </>
          ) : (
            <>
              <h4
                style={{
                  paddingTop: 20,
                  fontFamily: `Montserrat, sans-serif`,
                  marginTop: 0,
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/`}
                >
                  {props.title}
                </Link>
              </h4>
              <p style={{ paddingTop: "10px" }}>Welcome to Baysik Blog</p>
              <DarkModeToggle />
              <SideLinks>
                {props.location.pathname !== "/" && <a href="/">Home</a>}

                {props.location.pathname !== "/about/" && (
                  <StyledLink href="/about">About</StyledLink>
                )}

                <StyledLink href="https://adamrobinson.dev">
                  external link
                </StyledLink>
              </SideLinks>
            </>
          )}
        </TopWrapper>
      </SideMenuWrapper>
      <BottomWrapper>
        <SocialIcons />
      </BottomWrapper>
    </>
  )
}

export default SideMenu
