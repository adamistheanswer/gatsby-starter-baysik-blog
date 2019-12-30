import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
import "styled-components/macro"
import Layout from "../components/layout"
import SEO from "../components/Seo"

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const BlogIndex = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1000px)" })

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Home" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title
        return (
          <article key={node.fields.slug}>
            <Link to={node.fields.slug}>
              <PostWrapper>
                <div
                  css={`
                    padding-top: 20px;
                    margin-right: 30px;
                  `}
                >
                  <Image
                    fixed={node.frontmatter.cover.childImageSharp.fixed}
                    css={`
                      border-radius: 50%;
                      z-index: -10;
                    `}
                  />
                </div>
                <div>
                  <header>
                    {isMobileOrTablet ? (
                      <h4>
                        <Link to={node.fields.slug}>{title}</Link>
                      </h4>
                    ) : (
                      <h2>
                        <Link to={node.fields.slug}>{title}</Link>
                      </h2>
                    )}
                  </header>
                  <section>
                    <h4
                      css={`
                        margin-top: 0px;
                      `}
                    >
                      {node.frontmatter.description || node.excerpt}
                    </h4>
                  </section>
                </div>
              </PostWrapper>
            </Link>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(posts)/.*.md$/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
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
