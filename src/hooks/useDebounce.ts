import { useRef } from 'react';

export function useDebounce<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  const calledRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedFunction = (...args: Parameters<T>) => {
    if (calledRef.current) {
      // Already called during current debounce window
      return;
    }

    calledRef.current = true;

    timerRef.current = setTimeout(() => {
      callback(...args);
      calledRef.current = false;
      timerRef.current = null;
    }, delay);
  };

  return debouncedFunction;
}