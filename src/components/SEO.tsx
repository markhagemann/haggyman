import Head from 'next/head';
import config from '../config';

interface SearchEngineOptimisationProps {
  description: string;
  title: string;
  keywords?: string[];
}

const SEO: React.FC<SearchEngineOptimisationProps> = props => {
  const { description, title, keywords } = props;
  const siteTitle = config.title;

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords ? keywords.join(`, `) : ''} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
};

export default SEO;
