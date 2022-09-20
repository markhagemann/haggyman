import Link from 'next/link';
import Image from 'next/future/image';
import React from 'react';
import Details from '../../../components/post/Details';

interface PreviewProps {
  title: string;
  postImageUrl: string;
  readingTime: string;
  date: string;
  slug: string;
  externalLink: string;
}

const Preview: React.FC<PreviewProps> = (props: PreviewProps) => {
  const href = `/portfolio/${props.slug}`;
  return (
    <div className="my-8">
      <Link href={href}>
        <h3 className="cursor-pointer text-2xl font-light text-grey-light hover:text-blue-lighter">
          {props.title}
        </h3>
      </Link>
      <Details
        date={props.date}
        readingTime={props.readingTime}
        externalLink={props.externalLink}
      />
      {props.postImageUrl && (
        <Link href={href}  passHref>
          <Image
            className="cursor-pointer opacity-90 transition duration-0 hover:opacity-100 hover:duration-150"
            width="608"
            height="288"
            src={props.postImageUrl}
            alt="Image of the website that was worked on"
          />
        </Link>
      )}
    </div>
  );
};

export default Preview;
