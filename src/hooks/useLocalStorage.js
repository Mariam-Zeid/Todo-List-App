import { useEffect, useState } from "react";

export const useLocalStorage = ({ key, defaultValue }) => {
  const [value, setValue] = useState(() =>
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
