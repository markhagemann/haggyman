import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface DetailsProps {
  date: string;
  readingTime: string;
  externalLink?: string;
}

const Details: React.FC<DetailsProps> = (props: DetailsProps) => {
  return (
    <div className="mb-5 flex space-x-2 text-lg text-blue-dark items-center">
      <span>
        {props.date} &raquo; {props.readingTime} &raquo;
      </span>
      {props.externalLink && (
        <a
          className="border-0 text-blue-dark hover:text-blue-standard"
          href={props.externalLink}
          target="_blank"
        >
          <FaExternalLinkAlt />
        </a>
      )}
    </div>
  );
};

export default Details;
