'use strict';

module.exports = {
  siteMetadata: {
    title: `Haggyman`,
    description: `Portfolio and blog by Mark Hagemann.`,
    author: `@markhagemann`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Exo:300,400,600`]
      }
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/global.css']
      }
    },
    `gatsby-plugin-react-helmet`,
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
        icon: `static/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [
              {
                userAgent: '*',
                disallow: ['/']
              }
            ]
          },
          production: {
            policy: [
              {
                userAgent: '*',
                allow: '/'
              }
            ]
          }
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`
  ]
};
