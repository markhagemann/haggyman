import { Link } from 'gatsby';
import React from 'react';

interface PreviewProps {
  title: string;
  excerpt: string;
  readingTime: string;
  date: string;
  slug: string;
}

const Preview: React.SFC<PreviewProps> = (props: PreviewProps) => {
  return (
    <div className="my-8">
      <Link to={`/blog/${props.slug}`} className="text-grey-light hover:text-blue-lighter">
        <h2 className="mb-2"> {props.title} </h2>
      </Link>
      <div className="mb-3 font-exo">
        <span className="text-blue-dark">
          {props.date} - {props.readingTime}
        </span>
      </div>
      <p className="mb-3">{props.excerpt}</p>
      <Link to={`/blog/${props.slug}`}>(Read: more) =></Link>
    </div>
  );
};

export default Preview;
