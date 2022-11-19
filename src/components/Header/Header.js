import React from 'react';

const Header = ({ handleToggleDarkMode, children }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode(previousDarkMode => !previousDarkMode)
        }
        className="toggle"
      >
        {children}
      </button>
    </div>
  );
};

export default Header;
