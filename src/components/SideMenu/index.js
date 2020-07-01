import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
import { navigate } from "gatsby"
import SiteLogo from "../SiteLogo"
import DarkModeToggle from "../DarkModeToggle"
import SocialIcons from "../SocialIcons"
import TextField from "../TextField"

const SideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 25px;
  min-width: 300px;
  max-width: 300px;
  position: fixed;
  height: 100%;
  padding-bottom: 100px;
`
const TopWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  justify-items: center;
`

const BottomWrapper = styled.div`
  padding-top: 35px;
  min-width: 300px;
  max-width: 300px;
  display: flex;
  flex-direction: column-reverse;
  bottom: 0;
  align-items: center;
`

const SideLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: -15px;
`

const StyledLink = styled.a`
  padding-top: 10px;
`

const SideMenu = props => {
  const isTallEnough = useMediaQuery({ query: "(min-height: 600px)" })
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    setSearchQuery(
      new URLSearchParams(props.location.search).get("keywords") || ""
    )
  }, [props.location.search, searchQuery])

  return (
    <>
      <SideMenuWrapper>
        <TopWrapper>
          <SiteLogo />
          {isTallEnough && (
            <p
              css={`
                margin-bottom: 0px;
              `}
            >
              Would you would like to know more <StyledLink href="/about">about</StyledLink> this amazing blog?
            </p>
          )}
          <DarkModeToggle />
          <SideLinks>
            {props.location.pathname === props.rootPath ? (
              <>
                {props.location.pathname === "/about/" && (
                  <StyledLink href="/">Home</StyledLink>
                )}
              </>
            ) : (
              <>
                {props.location.pathname !== "/" && (
                  <StyledLink href="/">Home</StyledLink>
                )}
              </>
            )}
            {!isTallEnough && <StyledLink href="/about">About</StyledLink>}
            <StyledLink href="https://adamrobinson.dev">
              Adam Robinson
            </StyledLink>
            <StyledLink href="https://attackingpixels.com">
              Attacking Pixels
            </StyledLink>
            <div
              css={`
                margin: 0px 60px 0px 60px;
              `}
            >
              <TextField
                autoFocus={props.isSearch} // eslint-disable-line
                search={true}
                type="search"
                id="search-input"
                name="keywords"
                aria-controls="search-results-count"
                handleChange={value =>
                  navigate(`/search?keywords=${encodeURIComponent(value)}`)
                }
                value={searchQuery}
              />
            </div>
          </SideLinks>
        </TopWrapper>
        <BottomWrapper>
          <SocialIcons />
        </BottomWrapper>
      </SideMenuWrapper>
    </>
  )
}

export default SideMenu
