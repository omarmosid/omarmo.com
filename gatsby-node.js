require("dotenv").config();
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    // if my posts have a slug in the frontmatter, it means I've specified what I want it to be. Otherwise I want to create one automatically

    // This is where we add our own custom fields to each node
    const generatedSlug = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug
        ? `/${node.frontmatter.slug}/`
        : generatedSlug,
    });

    // Add it to a collection
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const tipsResult = await graphql(`
    query AllTips {
      allMdx(filter: { fields: { collection: { eq: "tips" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              createDate
            }
          }
        }
      }
    }
  `);

  if (tipsResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const tips = tipsResult.data.allMdx.edges;

  tips.forEach(tip => {
    createPage({
      path: `/tips/${tip.node.frontmatter.slug}`,
      component: path.resolve("./src/templates/tip.js"),
      context: { id: tip.node.id },
    });
  });
};
