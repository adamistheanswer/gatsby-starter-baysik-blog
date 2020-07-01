import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import "styled-components/macro"
import { rhythm } from "../../utils/typography"

const BioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 30px;
`
const BioInnerWrapper = styled.div`
  display: flex;
`

const BioTextWrapper = styled.div`
  padding-top: 10px;
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          bio
        }
      }
    }
  `)

  const { author, bio } = data.site.siteMetadata
  return (
    <BioWrapper>
      <BioInnerWrapper
        css={`
          margin-bottom: ${rhythm(1)};
        `}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          css={`
            margin-top: 5px;
            margin-right: ${rhythm(1 / 2)};
            margin-bottom: 0px;
            min-height: 60px;
            max-height: 60px;
            min-width: 60px;
            max-width: 60px;
            border-radius: 50%;
          `}
        />
        <BioTextWrapper>
          <p>
            {author}
            <br /> {bio}
          </p>
        </BioTextWrapper>
      </BioInnerWrapper>
    </BioWrapper>
  )
}

export default Bio
