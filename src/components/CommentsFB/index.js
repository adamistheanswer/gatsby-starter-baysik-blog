import React from "react"
import { FacebookProvider, Comments } from "react-facebook"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const CommentsWrapper = styled.div`
  justify-content: center;
  background: white;
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
        <FacebookProvider appId={data.site.siteMetadata.facebookToken}>
          <Comments width="100%" href={windowGlobal.location.href} />
        </FacebookProvider>
      </CommentsWrapper>
    )
  } else {
    return <></>
  }
}

export default CommentsFB
