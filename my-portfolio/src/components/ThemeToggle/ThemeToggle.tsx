import React from 'react';
import useTheme from '../../hooks/useTheme';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setTheme(e.target.value as 'light' | 'dark' | 'system');
  };

  return (
    <div className="theme-toggle">
      <label htmlFor="theme-select" className="sr-only">
        Choose theme
      </label>
      <select 
        id="theme-select"
        value={theme}
        onChange={handleChange}
        className="theme-select"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
};

export default ThemeToggle;