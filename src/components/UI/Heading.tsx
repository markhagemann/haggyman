import React from 'react';

interface HeadingProps {
  heading: string;
  centerOnMobile?: boolean;
  underline?: boolean;
}

const Heading: React.FC<HeadingProps> = (props: HeadingProps) => {
  let headingClass = 'text-blue-light mb-5 text-4xl font-medium';
  if (props.centerOnMobile) {
    headingClass += ' text-center md:text-left';
  }
  if (props.underline) {
    headingClass += ' pb-2 border-b-2 border-blue-light';
  }
  return <h1 className={headingClass}> {props.heading} </h1>;
};

export default Heading;
