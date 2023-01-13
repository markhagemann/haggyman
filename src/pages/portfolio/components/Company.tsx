import React from 'react';

interface CompanyProps {
  company: string;
  role?: string;
  years?: string;
  noPosts?: boolean;
}

const Company: React.FC<CompanyProps> = (props: CompanyProps) => {
  return (
    <div>
      <hr className="border-blue-transparent border-gradient-r-blue-dark my-8" />
      <h2 className="mb-2 text-3xl font-medium"> {props.company} </h2>
      {props.role && (
        <h2 className="text-grey-standard font-light text-xl mb-1">
          {' '}
          {props.role}{' '}
        </h2>
      )}
      {props.years && <p className="text-grey-dark"> {props.years}</p>}
      {!props.noPosts && (
        <hr className="border-blue-transparent border-gradient-r-blue-dark my-8" />
      )}
    </div>
  );
};

export default Company;
