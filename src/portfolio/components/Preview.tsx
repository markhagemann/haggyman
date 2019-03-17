import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Details from '../../common/components/post/Details';

interface PreviewProps {
  title: string;
  postImageFluid: any;
  readingTime: string;
  date: string;
  slug: string;
  externalLink: string;
}

const Preview: React.SFC<PreviewProps> = (props: PreviewProps) => {
  return (
    <div className=" mt-6 mb-8">
      <Link to={`/portfolio/${props.slug}`} className="text-grey-light hover:text-blue-lighter">
        <h2 className="font-light mb-2"> {props.title} </h2>
      </Link>
      <Details date={props.date} readingTime={props.readingTime} externalLink={props.externalLink} />
      {props.postImageFluid && (
        <Link to={`/portfolio/${props.slug}`} className="text-grey-light hover:text-blue-lighter">
          <Img fluid={props.postImageFluid} />
        </Link>
      )}
    </div>
  );
};

export default Preview;
