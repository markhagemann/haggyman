import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isActive: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = props => {
  const { children } = props;
  const node = useRef<HTMLDivElement>(null);
  // TODO: Figure out proper type of event
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    if (node && node.current && node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    return props.onClose();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  let modalClass = 'modal';
  if (props.isActive) {
    modalClass = 'modal is-active is-clipped';
  }

  return (
    <div className={modalClass}>
      <div className="modal-background" />
      <div ref={node} className="modal-content">
        {children}
      </div>
      <button
        onClick={() => props.onClose()}
        className="modal-close"
        aria-label="close"
      />
    </div>
  );
};

export default Modal;
