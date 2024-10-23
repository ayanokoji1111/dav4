import React, { useState } from 'react';
import './ThemeToggle.css'; 

function ThemeToggle({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <button className="theme-button" onClick={toggleTheme}>
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </button>
      {children}
    </div>
  );
}

export default ThemeToggle;
