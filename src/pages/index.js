import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsletterSignup from '../components/newsletter'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" description="I love solving problems, learning new things, and helping people. By day, I'm a Senior WordPress Engineer at Strattic, helping to bring static, secure, speedy, and scalable WordPress to the masses.." />
    <h1>Hey y'all, I'm Nate.<span role="img" aria-label="waving hello">👋</span></h1>
    <div className="introduction box-wrapper-first">
      <div className="box">
        <p>I love <strong>solving problems</strong>, <strong>learning new things</strong>, and <Link to="/the-trifecta-of-goodness"><strong>helping people</strong>.</Link></p>
        <p>By day, I'm a <strong>Senior WordPress Engineer</strong> at <a href="https://strattic.com" target="_blank" rel="noopener noreferrer"><strong>Strattic</strong></a>, helping to bring static, secure, speedy, and scalable WordPress to the masses.</p>
        <p>I share what I know and learn <Link to="/blog"><strong>on this site</strong></Link> as well as <Link to="talks"><strong>speaking</strong></Link> at user groups, panels, and conferences.</p>
        <p>Wanna chat about something, <Link to="/contact"><strong>reach out</strong></Link> and I'lllllll be therrrrre...🎶</p>
      </div>
      <div className="box">
        <img src={data.wpgraphql.natepic.sourceUrl} alt="That's me, Nate"/>
      </div>
    </div>  
    <br/>
    <hr/>
    <br/>
    <div className="box-wrapper-first">
      <div className="box box-posts">
        <h2>Latest Posts <span role="img" aria-label="writing hand">✍️</span></h2>
          {data.wpgraphql.blogs.edges.map(({ node }) => (
            <>
              <Link className="blog-link" key={node.slug} to={`/${node.slug}`}>
                    {/* <img className="blog-image" src={node.featuredImage.sourceUrl} alt={node.title}/> */}
                    <Img className="blog-image" fixed={node.featuredImage.imageFile.childImageSharp.fixed} alt={node.title}/>
                    <div dangerouslySetInnerHTML={{ __html: node.title }} />
              </Link>
                  {/* <div dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
            </>
          ))}
        <br/>
        <Link to={`/blog`}>See all Blog Posts...</Link>
      </div>
      <div className="box box-talks">
        <h2>Talks<span role="img" aria-label="talks">🗣️</span></h2>
            <ul>

          {data.wpgraphql.talks.edges.map(({ node }) => (
            <li key={node.slug}>
              <Link to={`/${node.slug}`} dangerouslySetInnerHTML={{ __html: node.title }}></Link>
              {/* <div dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
            </li>
          ))}
            </ul>
        <br/>
        <Link to={`/talks`}>See all Talks...</Link>
      </div>
    </div>

    <br/>

    <NewsletterSignup/>
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
      natepic: mediaItem(id: "2030", idType: DATABASE_ID) {
        sourceUrl(size: MEDIUM)
      }
      blogs: posts(first: 6, after: null, where: {categoryName: "blog"}) {
        edges {
          node {
            databaseId
            slug
            title
            date
            excerpt
            content(format: RENDERED)
            featuredImage {
              altText
              title(format: RENDERED)
              mediaItemUrl
              slug
              sourceUrl
              mediaItemId
              modified
              imageFile {
                childImageSharp {
                  fixed(width: 50) {
                    ...GatsbyImageSharpFixed_tracedSVG
                  }
                }
              }
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