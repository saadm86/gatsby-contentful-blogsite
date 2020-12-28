import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulPost {
          nodes {
            id
            title
            author
            subtitle
            slug
            image{
              fluid{
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    `
  )
  
  return (
    <Layout>
      <SEO title="Blog" />
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulPost.nodes.map(node => {
          return (
            <li className="post" key={node.id}>
              <h2>
                <Link to={`/blog/${node.slug}/`}>{node.title}</Link>
              </h2>
              
                <Img
                  className="featured"
                  fluid={node.image.fluid}
                  alt={node.slug}
                />
              
              <p className="excerpt">
                {node.subtitle}
              </p>
              <div className="button">
                <Link to={`/blog/${node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog
