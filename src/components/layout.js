import React, { createContext } from "react"
import { rhythm } from "../utils/typography"
import SideMenu from "./SideMenu"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
import Navbar from "./MobileNav/MobileNav"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import "../styles/global.css"
import "styled-components/macro"

export const DisplaySizeContext = createContext({ isMobileOrTablet: false })
export const DisplaySizeProvider = DisplaySizeContext.Provider
export const DisplaySizeConsumer = DisplaySizeContext.Consumer

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
`

const VerticalDivider = styled.div`
  border-left: 1px var(--textLink) solid;
  height: 90vh;
  margin-top: 5vh;
  top: 0;
  opacity: 0.15;
  position: fixed;
  margin-left: 320px;
`

const DestopLayoutWrapper = styled.div`
  max-width: ${rhythm(50)};
  padding: ${rhythm(1.5)} ${rhythm(1 / 2)};
  margin-left: auto;
  margin-right: auto;
`

const Layout = ({ location, title, children, postCount, isSearch }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1024px)" })

  return (
    <ThemeToggler>
      {({ toggleTheme }) => (
        <>
          {isMobileOrTablet ? (
            <>
              <Navbar location={location} />
              <main
                css={`
                  position: relative;
                  padding-top: 70px;
                  padding-left: 20px;
                  padding-right: 20px;
                `}
              >
                <DisplaySizeProvider
                  value={{ isMobileOrTablet: isMobileOrTablet }}
                >
                  {children}
                </DisplaySizeProvider>
              </main>
            </>
          ) : (
            <DestopLayoutWrapper>
              <SideMenu
                postCount={postCount}
                toggleTheme={toggleTheme}
                location={location}
                rootPath={rootPath}
                title={title}
                isSearch={isSearch}
              ></SideMenu>

              <HorizontalWrapper
                css={`
                  max-width: ${rhythm(50)};
                `}
              >
                <VerticalDivider />
                <main
                  css={`
                    margin-left: 350px;
                  `}
                >
                  <DisplaySizeProvider
                    value={{ isMobileOrTablet: isMobileOrTablet }}
                  >
                    {children}
                  </DisplaySizeProvider>
                </main>
              </HorizontalWrapper>
            </DestopLayoutWrapper>
          )}
        </>
      )}
    </ThemeToggler>
  )
}

export default Layout
