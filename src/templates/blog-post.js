import React from "react"
import { Link, graphql } from "gatsby"
import "styled-components/macro"
import Bio from "../components/Bio"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import { rhythm, scale } from "../utils/typography"
import CommentsFB from "../components/CommentsFB"
import { MDXRenderer } from "gatsby-plugin-mdx"

const intervals = [
  { label: "year", seconds: 31536000 },
  { label: "month", seconds: 2592000 },
  { label: "day", seconds: 86400 },
  { label: "hour", seconds: 3600 },
  { label: "minute", seconds: 60 },
  { label: "second", seconds: 0 },
]

function parseISOString(s) {
  var b = s.split(/\D+/)
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]))
}

function timeSince(date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
  const interval = intervals.find(i => i.seconds < seconds)
  const count = Math.floor(seconds / interval.seconds)
  return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`
}

const BlogPostTemplate = props => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  return (
    <Layout location={props.location} title={siteTitle}>
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
          @media only screen and (max-width: 1024px) {
            max-width: 100vw;
          }
        `}
      >
        <header>
          <h1
            style={{
              marginTop: rhythm(0.5),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>

          <p
            style={{
              ...scale(-1 / 5),
              paddingTop: 10,
            }}
          >
            Posted {timeSince(parseISOString(post.frontmatter.date))} -{" "}
            {post.fields.readingTime.text}
          </p>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>

        <footer>
          <>
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <CommentsFB />
            <Bio />
          </>
        </footer>
      </article>

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
            {(() => {
              if (previous) {
                if (previous.hasOwnProperty("fields")) {
                  if (previous.fields.slug !== `/about/`) {
                    return (
                      <Link to={previous.fields.slug} rel="previous">
                        ← {previous.frontmatter.title}
                      </Link>
                    )
                  }
                }
              }
            })()}
          </li>
          <li>
            {(() => {
              if (next) {
                if (next.hasOwnProperty("fields")) {
                  if (next.fields.slug !== `/about/`) {
                    return (
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    )
                  }
                }
              }
            })()}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        title
        description
        date
      }
    }
  }
`
