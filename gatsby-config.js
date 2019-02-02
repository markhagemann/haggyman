'use strict';

module.exports = {
  siteMetadata: {
    title: `Haggyman`,
    description: `Portfolio and blog by Mark Hagemann.`,
    author: `@markhagemann`,
  },
  plugins: [
    'gatsby-plugin-offline',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{
              userAgent: '*',
              disallow: ['/']
            }]
          },
          production: {
            policy: [{
              userAgent: '*',
              allow: '/'
            }]
          }
        }
      }
    }
  ],
}
