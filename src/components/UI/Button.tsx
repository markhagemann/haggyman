import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  centerOnPortrait?: boolean;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  let buttonClass =
    'bg-transparent text-sky-500 font-medium my-5 py-3 px-5 border border-sky-900 hover:border-blue-dark hover:text-blue-standard';

  if (props.centerOnPortrait) {
    buttonClass += ' mx-auto md:mx-0';
  }

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
    <button
      type={props.type ? props.type : 'button'}
      onClick={handleClick}
      className={buttonClass}
    >
      {props.text}
    </button>
  );
};

export default Button;
