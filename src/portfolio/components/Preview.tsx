import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Details from '../../common/components/post/Details';

interface PreviewProps {
  title: string;
  // TODO: Find proper type for this
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postImageFluid: any;
  readingTime: string;
  date: string;
  slug: string;
  externalLink: string;
}

const Preview: React.FC<PreviewProps> = (props: PreviewProps) => {
  return (
    <div className=" mt-6 mb-8">
      <Link
        to={`/portfolio/${props.slug}`}
        className="text-grey-light hover:text-blue-lighter"
      >
        <h3 className="text-2xl font-light"> {props.title} </h3>
      </Link>
      <Details
        date={props.date}
        readingTime={props.readingTime}
        externalLink={props.externalLink}
      />
      {props.postImageFluid && (
        <Link
          to={`/portfolio/${props.slug}`}
          className="text-grey-light hover:text-blue-lighter"
        >
          <Img fluid={props.postImageFluid} />
        </Link>
      )}
    </div>
  );
};

export default Preview;
