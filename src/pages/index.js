import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" description="" />
    <h1>Hey y'all, I'm Nate.<span role="img" aria-label="waving hello">👋</span></h1>
    <p>VP of Development at The Digital Ring, a full-service digital marketing agency in Madison, Wisconsin <span role="img" aria-label="cheese, mmmmm">🧀</span>.</p>
    <p>I'm always learning, always trying new stuff, always breaking things and learning again.</p> <p>Married with two awesome daughters and loving it.</p>
    <br/>
    <hr/>
    <br/>
    <div className="box-wrapper-first">
      <div className="box box-posts">
        <h2>Latest Posts <span role="img" aria-label="writing hand">✍️</span></h2>
          {data.wpgraphql.blogs.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={`/${node.slug}`}>
                <div dangerouslySetInnerHTML={{ __html: node.title }} />
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))}
        <br/>
        <Link to={`/blog`}>See all Blog Posts...</Link>
      </div>
      <div className="box box-talks">
        <h2>Talks<span role="img" aria-label="talks">🗣️</span></h2>
          {data.wpgraphql.talks.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={`/${node.slug}`}>
                <div dangerouslySetInnerHTML={{ __html: node.title }} />
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))}
        <br/>
        <Link to={`/talks`}>See all Talks...</Link>
      </div>
    </div>

    <br/>
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
        blogs: posts(first: 6, after: null, where: {categoryName: "blog"}) {
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
        talks: posts(first: 100, after: null, where: {categoryName: "talks"}) {
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
    }
  }
`