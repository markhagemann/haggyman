import React, { useEffect, useRef } from 'react';

interface ModalProps {
  children?: React.ReactNode;
  isActive: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = props => {
  const { children } = props;
  const node = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (node.current && node.current.contains(e.target as Node)) {
      return;
    }
    props.onClose();
  };

  useEffect(() => {
    if (props.isActive) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [props.isActive]);

  if (!props.isActive) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        ref={node}
        className="relative rounded-lg shadow-lg max-w-2xl w-full mx-4"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
