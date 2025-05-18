import { useState } from "react";

export const useLocalStorage = ({ key, defaultValue }) => {
  const [value, setValue] = useState(() =>
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : defaultValue
  );
  return [value, setValue];
};
