import React, { useState } from "react"
import chunk from "lodash/chunk"
import { graphql } from "gatsby"
import PostItem from "../components/PostItem"
import Layout from "../components/layout"
import "styled-components/macro"
import Helmet from "react-helmet"
import SEO from "../components/Seo"
import useEvent from "../hooks/useEvent"

const Index = ({ location, data }) => {
  const [postsToShow, setPostsToShow] = useState(10)
  const [ticking, setTicking] = useState(false)

  const posts = data.allMdx.edges

  const update = () => {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (distanceToBottom < 100) {
      setPostsToShow(postsToShow + 10)
    }
    setTicking(false)
  }

  const handleScroll = () => {
    if (!ticking || posts.length > postsToShow) {
      setTicking(true)
      requestAnimationFrame(() => update())
    }
  }

  useEvent(`scroll`, handleScroll)

  return (
    <Layout postCount={posts.length} location={location}>
      <SEO title="Home" />
      <Helmet>
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
      </Helmet>
      {/* posts */}
      {chunk(posts.slice(0, postsToShow), 3).map((chunk, i) => (
        <div key={`chunk-${i}`}>
          {chunk.map(post => {
            const { slug } = post.node.fields
            const {
              title,
              cover,
              description,
              tags,
              excerpt,
            } = post.node.frontmatter
            const blogImgSrc = cover.childImageSharp.fixed

            return (
              <PostItem
                key={title + description}
                slug={slug}
                tags={tags}
                description={description}
                title={title}
                excerpt={excerpt}
                imageSrc={blogImgSrc}
              />
            )
          })}
        </div>
      ))}
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(posts)/.*.(mdx|md)$/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            description
            tags
            cover {
              childImageSharp {
                fixed(width: 75, height: 75) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
