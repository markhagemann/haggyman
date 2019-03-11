import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

interface PreviewProps {
  title: string;
  postImageFluid: any;
  readingTime: string;
  date: string;
  slug: string;
}

const Preview: React.SFC<PreviewProps> = (props: PreviewProps) => {
  return (
    <div className="my-12">
      <Link to={`/portfolio/${props.slug}`} className="text-grey-light hover:text-blue-lighter">
        <h2 className="mb-1"> {props.title} </h2>
      </Link>
      <div className="mb-3">
        <span className="text-blue-dark">
          {props.date} - {props.readingTime}
        </span>
      </div>
      {props.postImageFluid && (
        <Link to={`/portfolio/${props.slug}`} className="text-grey-light hover:text-blue-lighter">
          <Img fluid={props.postImageFluid} />
        </Link>
      )}
    </div>
  );
};

export default Preview;
