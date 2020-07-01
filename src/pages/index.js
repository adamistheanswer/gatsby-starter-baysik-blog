import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
import "styled-components/macro"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import { Helmet } from "react-helmet"

const PostOverviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const MobileWrapper = styled.div`
  min-height: 100px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const DesktopWrapper = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const BlogIndex = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1024px)" })

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Home" />
      <Helmet>
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
      </Helmet>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title
        return (
          <article key={node.fields.slug}>
            <Link to={node.fields.slug}>
              <PostOverviewWrapper>
                <div
                  css={`
                    margin-right: 30px;
                  `}
                >
                  <Image
                    fixed={node.frontmatter.cover.childImageSharp.fixed}
                    css={`
                      border-radius: 50%;
                      z-index: -9999;
                    `}
                  />
                </div>
                <div>
                  {isMobileOrTablet ? (
                    <MobileWrapper>
                      <header>
                        <h4
                          css={`
                            margin-bottom: 10px;
                            margin-top: 0px;
                          `}
                        >
                          <Link to={node.fields.slug}>{title}</Link>
                        </h4>
                      </header>
                      <section>
                        <h4
                          css={`
                            margin-top: 0px;
                            margin-bottom: 0px;
                          `}
                        >
                          {node.frontmatter.description || node.excerpt}
                        </h4>
                      </section>
                    </MobileWrapper>
                  ) : (
                    <DesktopWrapper>
                      <header>
                        <h2
                          css={`
                            margin-top: 0px;
                          `}
                        >
                          <Link to={node.fields.slug}>{title}</Link>
                        </h2>
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
                    </DesktopWrapper>
                  )}
                </div>
              </PostOverviewWrapper>
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
        description
        siteUrl
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
