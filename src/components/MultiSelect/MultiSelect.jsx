import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';
import Checkbox from '../Checkbox';
import Tag, { TagClosed } from '../Tag';
import { ArrowDown } from '../../icons';
import useClickOutside from '../../hooks/useClickOutside';

export const MultiSelect = ({ defaultValue = [], tagsCount = 5, onlyRead = false }) => {
  const options = ['yellow', 'red', 'green', 'blue', 'violet', 'green2', 'dark-blue'];
  const [value, setValue] = useState(defaultValue);
  const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  //const [state, dispatch] = useReducer(reducer, initialState);

  const toggleExpanded = () => setExpanded(!isExpanded);
  const hideOptions = () => setExpanded(false);

  const handleClickOnTag = (isChecked, option) => {
    if (isChecked) setValue(value.concat(option));
    else setValue(value.filter((item) => item !== option));
  };
  const handleDeleteTag = (option) => setValue(value.filter((item) => item !== option));

  const ref = useRef();

  useClickOutside(ref, () => {
    hideOptions();
  });

  return (
    <div ref={ref} className={classnames(styles.multiselect)}>
      {value.length > 0 && (
        <div className={classnames(styles.multiselect__tags, styles[`multiselect__tags_${tagsCount}`])}>
          {value.map((tag) =>
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
          className={classnames(styles.multiselect__header, isExpanded && styles.multiselect__header_expanded)}
          onClick={toggleExpanded}
        >
          <div>Выбрать тег</div>
          <ArrowDown />
        </div>
      )}
      {isExpanded && (
        <div className={classnames(styles.options)}>
          <div className={classnames(styles.options__content)}>
            {options.map((option) => {
              const defaultChecked = value.includes(option);
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
      )}
    </div>
  );
};

MultiSelect.propTypes = {
  defaultValue: PropTypes.arrayOf(PropTypes.string),
  tagsCount: PropTypes.number,
  onlyRead: PropTypes.bool,
};

export default MultiSelect;
