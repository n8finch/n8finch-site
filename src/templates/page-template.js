import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

import NewsletterSignup from "../components/newsletter"

const PageTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wpgraphql.page.title}
      description={data.wpgraphql.page.excerpt}
      image={
        data.wpgraphql.page.featuredImage &&
        `https://n8finch.com${data.wpgraphql.page.featuredImage.node.imageFile.childImageSharp.fluid.src}`
      }
    />
    {data.wpgraphql.page.featuredImage && (
      <img
        src={data.wpgraphql.page.featuredImage.mediaItemUrl}
        alt={data.wpgraphql.page.title}
      />
    )}

    <h1 dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.title }} />

    <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.content }} />

    <NewsletterSignup />

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query($databaseId: ID!) {
    wpgraphql {
      page(id: $databaseId, idType: DATABASE_ID) {
        title
        date
        content(format: RENDERED)
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
