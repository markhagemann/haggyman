import React from 'react';
import Details from './Details';

interface PostProps {
  title: string;
  date: string;
  readingTime: string;
  html: string;
  externalLink?: string;
}

const Post: React.SFC<PostProps> = (props: PostProps) => {
  return (
    <div className="font-titillium">
      <h1 className="mb-2"> {props.title} </h1>
      <Details readingTime={props.readingTime} date={props.date} externalLink={props.externalLink} />
      <div className="md-post mt-8" dangerouslySetInnerHTML={{ __html: props.html }} />
    </div>
  );
};

export default Post;
