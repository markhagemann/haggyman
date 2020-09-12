'use strict';

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.haggyman.com`,
    title: `Haggyman`,
    description: `Portfolio and blog by Mark Hagemann.`,
    author: `Mark Hagemann`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: false,
          failOnError: true,
        },
      },
    },
    'gatsby-plugin-extract-schema',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Exo:300,400,600`, 'Titillium Web:400,600'],
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/haggy-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 610,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-reading-time',
          {
            resolve: `gatsby-remark-responsive-image`,
            options: {
              maxWidth: 610,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
  ],
};
