import React from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      content {
        raw
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const BlogPost = props => {

  return (
    <Layout>
      <SEO title={props.data.contentfulPost.title} />
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulPost.title}</h1>
        <Img 
          className="featured"
          fluid={props.data.contentfulPost.image.fluid} 
          alt={props.data.contentfulPost.slug}
          />
        {renderRichText(props.data.contentfulPost.content)}
      </div>
    </Layout>
  )
}

export default BlogPost
