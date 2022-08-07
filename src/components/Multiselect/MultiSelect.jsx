import React, { useRef, useReducer } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';
import Checkbox from '../Checkbox';
import Tag from '../Tag';
import { ArrowDown } from '../../icons';
import { ACTIONS, reducer } from './reducer';
import useClickOutside from '../../hooks/useClickOutside';

export const MultiSelect = ({ options, defaultValue = [] }) => {
  const initialState = {
    isExpanded: false,
    value: [...defaultValue],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleExpanded = () => dispatch({ type: ACTIONS.toggleExpanded });
  const hideOptions = () => dispatch({ type: ACTIONS.hideOptions });

  const handleClickOnTag = (isChecked, option) => dispatch({ type: ACTIONS.setValue, payload: { isChecked, option } });

  const ref = useRef();
  console.log('State: ', state);

  useClickOutside(ref, () => {
    hideOptions();
  });

  return (
    <div ref={ref} className={classnames(styles.multiselect)}>
      <div
        className={classnames(styles.multiselect__header, state.isExpanded && styles.multiselect__header_expanded)}
        onClick={toggleExpanded}
      >
        <div>Выбрать тег</div>
        <ArrowDown />
      </div>
      {state.isExpanded && (
        <div className={classnames(styles.options)}>
          <div className={classnames(styles.options__content)}>
            {options.map((option) => (
              <div key={option} className={classnames(styles.options__row)}>
                <Tag accent={option} />
                <Checkbox
                  isChecked={state.value.includes(option)}
                  onClick={(event) => handleClickOnTag(event.target.checked, option)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

MultiSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultValue: PropTypes.arrayOf(PropTypes.string),
};

export default MultiSelect;
