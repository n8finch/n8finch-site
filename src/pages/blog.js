import React from "react"
import { graphql } from "gatsby"
import BlogList from "../components/blog-list";

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Blog Archive " description="A list of all the blogs I've written... this goes back pretty far..." />
    <h1>Blog Archive</h1>
    <p>A list of all the blogs I've written... this goes back pretty far...</p>
    <h2>Posts</h2>
    <BlogList>{data.wpgraphql.posts.edges}</BlogList>
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
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            content(format: RENDERED)
            featuredImage {
              node {
                altText
                title(format: RENDERED)
                databaseId
                slug
                sourceUrl
                databaseId
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