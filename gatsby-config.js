module.exports = {
  siteMetadata: {
    title: `Omar`,
    description: `Omar is Full Stack Developer passionate about building great user-experiences that empower people.`,
    author: `@omarmosid`,
    ogImage: `https://pbs.twimg.com/profile_images/1109845851873013761/UBOJdFOZ_400x400.jpg`,
  },
  plugins: [
    // SEO
    `gatsby-plugin-react-helmet`,

    // Content
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tips`,
        path: `${__dirname}/content/tips`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },

    // Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,

    // Mdx
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" />
          </svg>`,
              maintainCase: true,
              isIconAfterHeader: true,
              className: `hash-anchor`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true
            }
          },
          `gatsby-remark-embedder`,
          `gatsby-remark-copy-linked-files`,
          // {
          //   resolve: `gatsby-remark-vscode`,
          //   options: {
          //     marker: "•",
          //     default: "Default Light+",
          //     dark: "Default Dark+",
          //   },
          // },
          // `gatsby-remark-shiki`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              wrapperResult: `margin-left: 0px`,
              tracedSVG: true,
            },
          },
        ],
      },
    },

    // Styles
    `gatsby-plugin-sass`,
    {
      resolve: `@chakra-ui/gatsby-plugin`,
      options: {
        isResettingCSS: true,
      },
    },

    // PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Omars Website`,
        short_name: `omars-website`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
