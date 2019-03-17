import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface DetailsProps {
  date: string;
  readingTime: string;
  externalLink?: string;
}

const Details: React.SFC<DetailsProps> = (props: DetailsProps) => {
  return (
    <div className="mb-5 font-exo flex">
      <span className="text-blue-dark">
        {props.date} &raquo; {props.readingTime} &raquo;
      </span>
      {props.externalLink && (
        <a className="border-0 ml-5px text-blue-dark" href={props.externalLink}>
          <span>
            <FaExternalLinkAlt />
          </span>
        </a>
      )}
    </div>
  );
};

export default Details;
