import React, { Component } from 'react';
import './ThemeToggle.css'; // Import CSS file

export default class ThemeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }), () => {
      // Apply theme class to body after state update
      if (this.state.isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  };

  render() {
    return (
      <div
        className="form-check form-switch"
        style={{
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'center',
          width: '150px',
          justifyContent: 'flex-end',
          marginRight: '10px',
          transform: 'scale(1.3)',
        }}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="darkModeSwitch"
          checked={this.state.isDarkMode}
          onChange={this.toggleTheme}
        />
        <label
          className="form-check-label"
          htmlFor="darkModeSwitch"
          style={{ marginLeft: '5px' }}
        >
          Dark Mode
        </label>
      </div>
    );
  }
}