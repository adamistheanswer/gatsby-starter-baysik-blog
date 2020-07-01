import React from "react"
import { FacebookProvider, Comments } from "react-facebook"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const CommentsWrapper = styled.div`
  justify-content: center;
  width: 100%;
`

const CommentsFB = () => {
  const data = useStaticQuery(graphql`
    query FBQuery {
      site {
        siteMetadata {
          facebookToken
        }
      }
    }
  `)

  const windowGlobal = typeof window !== "undefined" && window
  if (windowGlobal) {
    return (
      <CommentsWrapper>
        <ThemeToggler>
          {({ theme }) => (
            <FacebookProvider appId={data.site.siteMetadata.facebookToken}>
              <Comments
                width="100%"
                colorScheme={theme}
                href={windowGlobal.location.href}
              />
            </FacebookProvider>
          )}
        </ThemeToggler>
      </CommentsWrapper>
    )
  } else {
    return <></>
  }
}

export default CommentsFB
