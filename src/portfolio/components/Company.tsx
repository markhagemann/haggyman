import React from 'react';

interface CompanyProps {
  company: string;
  role?: string;
  years?: string;
  noPosts?: boolean;
}

const Company: React.SFC<CompanyProps> = (props: CompanyProps) => {
  return (
    <div>
      <hr className="border-b border-gradient-r-blue-custom my-8" />
      <h2 className="mb-2 text-3xl font-bold leading-9"> {props.company} </h2>
      {props.role && <h2 className="text-grey-standard font-light text-xl mb-1 leading-6"> {props.role} </h2>}
      {props.years && <p className="text-grey-dark font-exo"> {props.years}</p>}
      {!props.noPosts && <hr className="border-b border-gradient-r-blue-custom my-8" />}
    </div>
  );
};

export default Company;
