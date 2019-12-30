import React from "react"
import { Link, graphql } from "gatsby"
import "styled-components/macro"
import Bio from "../components/Bio"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import { rhythm, scale } from "../utils/typography"
import CommentsFB from "../components/CommentsFB"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          css={`
            max-width: 100vw;
            @media only screen and (max-width: 1250px) {
              max-width: 65vw;
            }
            @media only screen and (max-width: 1150px) {
              max-width: 60vw;
            }
            @media only screen and (max-width: 1000px) {
              max-width: 100vw;
            }
          `}
        >
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            ></p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />

          <footer>
            {post.frontmatter.contentType === null && (
              <>
                <hr
                  style={{
                    marginBottom: rhythm(1),
                  }}
                />
                <CommentsFB />
                <Bio />
              </>
            )}
          </footer>
        </article>
        {post.frontmatter.contentType === null && (
          <nav>
            <ul
              style={{
                marginLeft: 0,
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        )}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        contentType
      }
    }
  }
`
