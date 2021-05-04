require("dotenv").config();
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// Create Custom collection fields
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
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

  /**
   * * 1. Collection: Tips
   */
  // Step-1: Fetch Tips
  const tipsResult = await graphql(`
    query AllTips {
      allMdx(
        filter: {
          fields: { collection: { eq: "tips" } }
          frontmatter: { status: { eq: "PUBLISHED" } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              createdAt
            }
          }
        }
      }
    }
  `);

  // Step-2: Handle Errors while fetching tips
  if (tipsResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Step-3: Flatten to simpler tips object
  const tips = tipsResult.data.allMdx.edges;

  // Step-4: Create pages dynamically for each tip node
  tips.forEach((tip, index) => {
    createPage({
      path: `/tips/${tip.node.frontmatter.slug}`,
      component: path.resolve("./src/templates/tip.js"),
      context: {
        id: tip.node.id,
        // For pagination
        prev: index === 0 ? null : tips[index - 1].node,
        next: index === tips.length - 1 ? null : tips[index + 1].node,
      },
    });
  });

  /**
   * * 2. Collection: Posts
   */
  // Step-1: Fetch Posts
  const postsResult = await graphql(`
    query AllPosts {
      allMdx(
        filter: {
          fields: { collection: { eq: "posts" } }
          frontmatter: { status: { eq: "PUBLISHED" } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              createdAt
            }
          }
        }
      }
    }
  `);

  // Step-2: Handle Errors while fetching posts
  if (postsResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Step-3: Flatten to simpler posts object
  const posts = postsResult.data.allMdx.edges;

  // Step-4: Create pages dynamically for each post node
  posts.forEach((post, index) => {
    createPage({
      path: `/posts/${post.node.frontmatter.slug}`,
      component: path.resolve("./src/templates/post.js"),
      context: {
        id: post.node.id,
        // For pagination
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    });
  });

  /**
   * * 3. Collection: Projects
   */
  // Step-1: Fetch Projects
  const projectsResult = await graphql(`
    query AllProjects {
      allMdx(
        filter: {
          fields: { collection: { eq: "projects" } }
          frontmatter: { status: { eq: "PUBLISHED" } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              createdAt
            }
          }
        }
      }
    }
  `);

  // Step-2: Handle Errors while fetching projects
  if (projectsResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Step-3: Flatten to simpler projects object
  const projects = projectsResult.data.allMdx.edges;

  // Step-4: Create pages dynamically for each project node
  projects.forEach((project, index) => {
    createPage({
      path: `/projects/${project.node.frontmatter.slug}`,
      component: path.resolve("./src/templates/project.js"),
      context: {
        id: project.node.id,
        // For pagination
        prev: index === 0 ? null : projects[index - 1].node,
        next: index === projects.length - 1 ? null : projects[index + 1].node,
      },
    });
  });
};
