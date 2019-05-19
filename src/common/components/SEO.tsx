import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: [];
  keywords?: string[];
  title: string;
}

const SEO: React.SFC<SEOProps> = (props: SEOProps) => {
  const lang = !!props.lang ? props.lang : 'en';
  const meta = !!props.meta ? props.meta : [];
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = props.description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={props.title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: `og:title`,
                content: props.title
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: props.title
              },
              {
                name: `twitter:description`,
                content: metaDescription
              }
            ]
              .concat(
                props.keywords && props.keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: props.keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
