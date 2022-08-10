import React from 'react';

const useClickOutside = (ref, callback) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      //хак на закрытие тега, пока не знаю как сделать лучше
      if (!['rect', 'svg'].includes(event.target.tagName)) {
        //console.log('outside');
        //callback();
      }
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useClickOutside;
