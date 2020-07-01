import React from "react"
import { rhythm } from "../utils/typography"
import SideMenu from "./SideMenu"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
import MobileNav from "./MobileNav/MobileNav"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import "../styles/global.css"
import "styled-components/macro"

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

const MobilePadding = styled.div`
  padding-right: 20px;
  padding-left: 20px;
`

const Layout = props => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1024px)" })

  return (
    <ThemeToggler>
      {({ toggleTheme }) => (
        <MobilePadding>
          {isMobileOrTablet ? (
            <>
              <MobileNav location={location} />
              <main
                css={`
                  position: relative;
                  padding-top: 80px;
                `}
              >
                {children}
              </main>
            </>
          ) : (
            <div
              css={`
                max-width: ${rhythm(50)};
                padding: ${rhythm(1.5)} ${rhythm(1 / 2)};
                margin-left: auto;
                margin-right: auto;
              `}
            >
              <SideMenu
                toggleTheme={toggleTheme}
                location={location}
                rootPath={rootPath}
                title={title}
                isSearch={props.isSearch}
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
                  {children}
                </main>
              </HorizontalWrapper>
            </div>
          )}
        </MobilePadding>
      )}
    </ThemeToggler>
  )
}

export default Layout
