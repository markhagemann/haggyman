import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface DetailsProps {
  date: string;
  readingTime: string;
  externalLink?: string;
}

const Details: React.SFC<DetailsProps> = (props: DetailsProps) => {
  return (
    <div className="mb-5 font-exo flex space-x-1 text-blue-dark items-center">
      <span className="pt-1">
      {props.date} &raquo; {props.readingTime} &raquo;
      </span>
      {props.externalLink && (
        <a className="border-0 text-blue-dark hover:text-blue-standard" href={props.externalLink}>
            <FaExternalLinkAlt />
        </a>
      )}
    </div>
  );
};

export default Details;
