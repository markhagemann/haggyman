import React from 'react';

interface HeadingProps {
  heading: string;
}

const Heading: React.SFC<HeadingProps> = (props: HeadingProps) => {
  return <h1 className="mb-5"> {props.heading} </h1>;
};

export default Heading;
