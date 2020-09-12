import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const Button: React.SFC<ButtonProps> = (props: ButtonProps) => {
  let buttonClass =
    'bg-transparent text-grey-light font-semibold hover:text-white my-5 py-3 px-5 border border-blue-dark hover:border-blue-light';
  if (props.fullWidth) {
    buttonClass += ' w-full';
  }
        const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      e.preventDefault();
      return props.onClick();
    }
  };

  return (
    <button type={props.type ? props.type : 'button'} onClick={handleClick} className={buttonClass}>
      {props.text}
    </button>
  );
};

export default Button;
