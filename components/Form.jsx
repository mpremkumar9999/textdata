import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleTextChange = (event) => {
    const text = event.target.value;
    this.setState({ text });
  };

  countLetters = () => {
    return this.state.text.replace(/[^a-zA-Z]/g, '').length;
  };

  countWords = () => {
    return this.state.text.trim() === '' ? 0 : this.state.text.trim().split(/\s+/).length;
  };

  countCharacters = () => {
    return this.state.text.length;
  };

  convertToLowerCase = () => {
    this.setState({ text: this.state.text.toLowerCase() });
  };

  convertToUpperCase = () => {
    this.setState({ text: this.state.text.toUpperCase() });
  };

  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px', // Add padding below the navbar
      }}>
        <div style={{
          width: '70%',
          maxWidth: '800px',
          padding: '30px',
          boxSizing: 'border-box',
          margin: '0 5%',
        }}>
          <form>
            <div className="mb-3">
              <label htmlFor="inputText" className="form-label">
                <strong style={{ fontWeight: 'bold' }}>Enter Text</strong>
              </label>
              <textarea
                className="form-control"
                id="inputText"
                style={{
                  width: '100%',
                  height: '400px',
                  padding: '15px',
                  resize: 'none',
                  boxSizing: 'border-box',
                }}
                placeholder="Enter your text here"
                value={this.state.text}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="mb-3">
              <button type="button" className="btn btn-success me-2" onClick={this.convertToLowerCase}>Lowercase</button>
              <button type="button" className="btn btn-success me-2" onClick={this.convertToUpperCase}>Uppercase</button>
            </div>
            <div className="mb-3">
              <p>Letters: {this.countLetters()}</p>
              <p>Words: {this.countWords()}</p>
              <p>Characters: {this.countCharacters()}</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}