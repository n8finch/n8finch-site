import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Blog Archive " description="A list of all the blogs I've written... this goes back pretty far..." />
    <h1>Blog Archive</h1>
    <p>A list of all the blogs I've written... this goes back pretty far...</p>
    <h2>Posts</h2>
      {data.wpgraphql.posts.edges.map(({ node }) => (
        <div className="blog-archive-container" key={node.slug}>
          {null !== node.featuredImage && (
            <div className="blog-archive-image-container">
            <Link to={`/${node.slug}`}>
              <Img
                fixed={node.featuredImage.node.imageFile.childImageSharp.fixed}
                alt={node.title}
              />
            </Link>
            </div>
          )}
          <div>
            <Link to={`/${node.slug}`}>
              <h3 dangerouslySetInnerHTML={{ __html: node.title }} />
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        </div>
      ))}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query GET_BLOG_POSTS {
    wpgraphql {
        posts(first: 1000, after: null, where: {categoryName: "blog"}) {
            edges {
                node {
                    databaseId
                    slug
                    title
                    date
                    excerpt
                    content(format: RENDERED)
                    featuredImage {
                      node {
                        altText
                        title(format: RENDERED)
                        mediaItemUrl
                        slug
                        sourceUrl
                        mediaItemId
                        modified
                        imageFile {
                          childImageSharp {
                            fixed(width: 250) {
                              ...GatsbyImageSharpFixed_tracedSVG
                            }
                          }
                        }
                      }
                    }
                }
            }
        }
    }
  }
`