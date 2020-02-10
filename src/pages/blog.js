import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Blog Archive " description="A list of all the blogs I've written... this goes back pretty far..." />
    <h1>Blog Archive</h1>
    <p>A list of all the blogs I've written... this goes back pretty far...</p>
    <h2>Posts</h2>
      {data.wpgraphql.posts.edges.map(({ node }) => (
        <div key={node.slug}>
          <Link to={`/${node.slug}`}>
            <div dangerouslySetInnerHTML={{ __html: node.title }} />
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
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
                    content(format: RENDERED)
                    featuredImage {
                        altText
                        link
                        mediaItemUrl
                        uri
                    }
                }
            }
        }
    }
  }
`