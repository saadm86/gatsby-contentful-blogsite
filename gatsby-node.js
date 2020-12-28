const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `)
  response.data.allContentfulPost.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
