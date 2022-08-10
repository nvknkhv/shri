import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';
import { Close, Dots } from '../../icons';
import { useGlobalModal } from '../globalModal';

export const MenuButton = ({ actions }) => {
  const { setModal, resetModal } = useGlobalModal();
  const ref = useRef();
  const [target, setTarget] = useState();

  useEffect(() => {
    if (ref.current) {
      const coords = event.target.getBoundingClientRect();
      ref.current.style.top = coords.top - 40 + 'px';
      ref.current.style.left = coords.left - 50 + 'px';
    }
  }, [target]);

  return (
    <div
      className={classnames(styles.menu)}
      onClick={(event) => {
        setTarget(event.target);
        setModal(
          <div ref={ref} className={classnames(styles.popup)}>
            <div
              className={classnames(styles.popup__close)}
              onClick={() => {
                setTarget(null);
                resetModal();
              }}
            >
              <Close />
            </div>
            <div className={classnames(styles.popup__options)}>
              {actions.map(({ name, callback }) => (
                <span
                  key={name}
                  onClick={() => {
                    setTarget(null);
                    callback();
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>,
        );
      }}
    >
      <Dots />
    </div>
  );
};

MenuButton.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, callback: PropTypes.func })).isRequired,
};

export default MenuButton;
