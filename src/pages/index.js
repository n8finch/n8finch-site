import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" description="" />
    <p>Hey y'all, I'm Nate.👋</p>
    <p>VP of Development at The Digital Ring, a full-service digital marketing agency in Madison, Wisconsin 🧀.</p>
    <p>I'm always learning, always trying new stuff, always breaking things and learning again.</p> <p>Married with two awesome daughters and loving it.</p>
    <br/>
    <hr/>
    <br/>
    <h2>Latest Posts ✍️</h2>
      {data.wpgraphql.posts.edges.map(({ node }) => (
        <div key={node.slug}>
          <Link to={`/${node.slug}`}>
            <div dangerouslySetInnerHTML={{ __html: node.title }} />
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
      <br/>
      <Link to={`/blog`}>See all Blog Posts...</Link>
      <br/>
      <hr/>
      <br/>

    <h2>Categories</h2>
      {data.wpgraphql.categories.edges.map(({ node }) => (
        <div key={node.slug}>
          <Link to={`/category/${node.slug}`}>
            <div dangerouslySetInnerHTML={{ __html: node.name }} />
          </Link>
        </div>
      ))}
    
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query GET_POSTS {
    wpgraphql {
        posts(first: 7, after: null) {
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
        pages(first: 1000, after: null) {
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
        categories(first: 1000) {
          edges {
            node {
              databaseId
              name
              slug
            }
          }
        }
        tags(first: 1000) {
          edges {
            node {
              databaseId
              name
              slug
            }
          }
        }
    }
  }
`