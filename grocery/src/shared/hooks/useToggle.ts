import {useState} from 'react';

export const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggleButton = () => setValue(!value);

  return {value, toggleButton};
};
