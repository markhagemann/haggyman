import Link from 'next/link';
import React from 'react';

interface PreviewProps {
  title: string;
  excerpt: string;
  readingTime: string;
  date: string;
  slug: string;
}

const Preview: React.FC<PreviewProps> = (props: PreviewProps) => {
  const href = `/blog/${props.slug}`;
  return (
    <div className="my-8">
      <Link href={href} legacyBehavior>
        <h2 className="cursor-pointer text-2xl text-grey-light hover:text-blue-lighter mb-2">
          {props.title}
        </h2>
      </Link>
      <div className="mb-3">
        <span className="text-blue-dark">
          {props.date} &raquo; {props.readingTime}
        </span>
      </div>
      <p className="mb-3">{props.excerpt}</p>
      <Link href={href}>(read: More) &#61;&gt; </Link>
    </div>
  );
};

export default Preview;
