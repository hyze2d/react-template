import { useCallback, useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useClickOutside = (
  onClick: () => void,
  element: HTMLElement | HTMLElement[],
  deps = []
) => {
  const onMouseDown = useCallback(
    (event: MouseEvent) => {
      const elements = Array.isArray(element)
        ? element
        : element
        ? [element]
        : [];

      if (!elements.length) return;

      if (elements.some(one => one?.contains(event.target as Node))) return;

      onClick();
    },
    [element, ...deps]
  );

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, [element, ...deps]);
};

export { useClickOutside };
