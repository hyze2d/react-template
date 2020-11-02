import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useClickOutside = (ref, handleClickOutside: () => void) => {
  /**
   * Handle passed click outside
   */
  const handleClick = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      handleClickOutside();
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClick);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClick);
    };
  });
};

export { useClickOutside };
