import React, { useRef, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';
import Checkbox from '../Checkbox';
import Tag, { TagClosed } from '../Tag';
import { ArrowDown } from '../../icons';
import { ACTIONS, reducer } from './reducer';
import useClickOutside from '../../hooks/useClickOutside';

export const MultiSelect = ({ defaultValue = [], tagsCount = 5, onlyRead = false }) => {
  const options = ['yellow', 'red', 'green', 'blue', 'violet', 'green2', 'dark-blue'];
  const initialState = {
    isExpanded: false,
    value: [...defaultValue],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleExpanded = () => dispatch({ type: ACTIONS.toggleExpanded });
  const hideOptions = () => dispatch({ type: ACTIONS.hideOptions });

  const handleClickOnTag = (isChecked, option) => dispatch({ type: ACTIONS.setValue, payload: { isChecked, option } });
  const handleDeleteTag = (option) => dispatch({ type: ACTIONS.deleteValue, payload: { option } });

  const ref = useRef();

  useClickOutside(ref, () => {
    hideOptions();
  });

  const tagOptions = useMemo(() => {
    if (!state.isExpanded) return null;
    return (
      <div className={classnames(styles.options)}>
        <div className={classnames(styles.options__content)}>
          {options.map((option) => {
            const defaultChecked = state.value.includes(option);
            return (
              <label key={`${option}_${defaultChecked}`} className={classnames(styles.options__row)}>
                <Tag accent={option} />
                <Checkbox
                  option={option}
                  defaultChecked={defaultChecked}
                  onClick={(event) => handleClickOnTag(event.target.checked, option)}
                />
              </label>
            );
          })}
        </div>
      </div>
    );
  }, [state]);

  return (
    <div ref={ref} className={classnames(styles.multiselect)}>
      {state.value.length > 0 && (
        <div className={classnames(styles.multiselect__tags, styles[`multiselect__tags_${tagsCount}`])}>
          {state.value.map((tag) =>
            onlyRead ? (
              <Tag accent={tag} key={tag} />
            ) : (
              <TagClosed
                accent={tag}
                key={tag}
                onClick={() => {
                  handleDeleteTag(tag);
                }}
              />
            ),
          )}
        </div>
      )}
      {!onlyRead && (
        <div
          className={classnames(styles.multiselect__header, state.isExpanded && styles.multiselect__header_expanded)}
          onClick={toggleExpanded}
        >
          <div>Выбрать тег</div>
          <ArrowDown />
        </div>
      )}
      {tagOptions}
    </div>
  );
};

MultiSelect.propTypes = {
  defaultValue: PropTypes.arrayOf(PropTypes.string),
  tagsCount: PropTypes.number,
  onlyRead: PropTypes.bool,
};

export default MultiSelect;
