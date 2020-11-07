import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import "styled-components/macro"
import { rhythm } from "../../utils/typography"
import { SocialIcon } from "react-social-icons"

const BioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`

const IconsWrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 20px;
`

const BioInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0px;
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
      <BioInnerWrapper>
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
      <IconsWrapper>
        <SocialIcon
          url="http://linkedin.com/in/adamgrobinson"
          style={{ height: 32, width: 32 }}
          bgColor={"var(--logo)"}
        />
        <SocialIcon
          style={{ height: 32, width: 32 }}
          url="http://facebook.com/adamistheanswer"
          bgColor={"var(--logo)"}
        />
        <SocialIcon
          style={{ height: 32, width: 32 }}
          url="http://instagram.com/adamistheanswer"
          bgColor={"var(--logo)"}
        />
        <SocialIcon
          style={{ height: 32, width: 32 }}
          url="http://github.com/adamistheanswer"
          bgColor={"var(--logo)"}
        />
      </IconsWrapper>
    </BioWrapper>
  )
}

export default Bio
