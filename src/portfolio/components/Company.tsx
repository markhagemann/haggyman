import React from 'react';

interface CompanyProps {
  company: string;
  role?: string;
  years?: string;
  noPosts?: boolean;
}

const containerClass: (props: LayoutProps) => string = props => {
  const showSidebarOnMobile = !!props.showSidebarOnMobile ? true : false;
  return classNames({
    'container mx-auto max-w-650 px-5 my-8 md:mt-16 md:text-left md:pt-24 md:mx-0 md:px-8 md:ml-300': true,
    'mt-32': !showSidebarOnMobile
  });
};

const Company: React.SFC<CompanyProps> = (props: CompanyProps) => {
  return (
    <div>
      <hr className="border-b border-gradient-r-blue-custom my-8" />
      <h1 className="mb-2"> {props.company} </h1>
      {props.role && <h2 className="text-grey font-light text-xl mb-1"> {props.role} </h2>}
      {props.years && <p className="text-grey-dark font-exo"> {props.years}</p>}
      {!props.noPosts && <hr className="border-b border-gradient-r-blue-custom my-8" />}
    </div>
  );
};

export default Company;
