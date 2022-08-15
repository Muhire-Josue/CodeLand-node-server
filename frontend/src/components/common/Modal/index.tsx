import React, { useEffect, useRef } from 'react';

import './styles.scss';

type Props = {
  show: boolean;
  toggleShow: (state: boolean) => void;
  children?: JSX.Element;
};

const Modal: React.FC<Props> = ({ show, toggleShow, children }): React.ReactElement => {
  const modalRef = useRef(null);
  useEffect(() => {
    window.onclick = (event) => {
      if (event.target === modalRef.current) {
        toggleShow(false);
      }
    };
  }, []);

  return (
    <div ref={modalRef} className="modal" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-content">
        <span
          className="close"
          role="button"
          tabIndex={0}
          onKeyDown={() => toggleShow(false)}
          onClick={() => toggleShow(false)}
        >
          &times;
        </span>
        <br />
        {children}
      </div>
    </div>
  );
};

export default Modal;
