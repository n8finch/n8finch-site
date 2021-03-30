import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

import NewsletterSignup from '../components/newsletter'


const SecondPage = ({data}) => (
  <Layout>    
    <SEO 
      title={data.wpgraphql.post.title}
      description={data.wpgraphql.post.excerpt}
      image={data.wpgraphql.post.featuredImage && `https://n8finch.com${data.wpgraphql.post.featuredImage.node.imageFile.childImageSharp.fluid.src}` }
    /> 
    {data.wpgraphql.post.featuredImage && (
      <img src={data.wpgraphql.post.featuredImage.mediaItemUrl} alt={data.wpgraphql.post.title} />
    )}

    <h1 dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.title }} />

    <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.content }} />

    <NewsletterSignup/>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

export const query = graphql`
  query($databaseId: ID!) {
    wpgraphql {
      post(id: $databaseId, idType: DATABASE_ID) {
        title
        date
        content(format: RENDERED)
        categories {
          edges {
            node {
              name
            }
          }
        }
        excerpt(format: RENDERED)
        featuredImage {
          node {
            altText
            title(format: RENDERED)
            mediaItemUrl
            slug
            imageFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`