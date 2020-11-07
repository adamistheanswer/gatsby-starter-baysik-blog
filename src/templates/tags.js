import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "styled-components/macro"
import PostItem from "../components/PostItem"
import numberToEnglish from "../utils/numberToEnglish"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${numberToEnglish(totalCount)
    .charAt(0)
    .toUpperCase() + numberToEnglish(totalCount).slice(1)} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout location={location}>
      <h2
        css={`
          margin-top: 10px;
          margin-bottom: 25px;
        `}
      >
        {tagHeader} - <Link to="/tags">All tags</Link>
      </h2>
      {edges.map(({ node }) => {
        const { slug } = node.fields
        const { title, cover, description, tags } = node.frontmatter
        const blogImgSrc = cover.childImageSharp.fixed

        return (
          <PostItem
            slug={slug}
            tags={tags}
            description={description}
            title={title}
            excerpt={node.excerpt}
            imageSrc={blogImgSrc}
          />
        )
      })}
    </Layout>
  )
}

export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
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
