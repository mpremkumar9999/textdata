// About.jsx
import React from 'react';
import './About.css'; // Import CSS file

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Text Utility</h1>
        <p>
          Welcome to Text Utility, a simple and efficient tool designed to help you manipulate and analyze text. Whether you need to convert text to uppercase or lowercase, count characters and words, or simply format your text, Text Utility has you covered.
        </p>
        <p>
          Our mission is to provide a user-friendly and accessible platform for anyone who works with text. We believe that simple tools can make a significant difference in productivity.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li><strong>Uppercase/Lowercase Conversion:</strong> Easily switch between uppercase and lowercase text.</li>
          <li><strong>Character Count:</strong> Get an accurate count of characters in your text.</li>
          <li><strong>Word Count:</strong> Quickly determine the number of words in your text.</li>
          <li><strong>Real-Time Updates:</strong> See your changes reflected instantly as you type.</li>
          <li><strong>Dark Mode:</strong> Enjoy a comfortable reading experience with our dark mode feature.</li>
        </ul>
        <h2>Our Commitment</h2>
        <p>
          We are committed to continuously improving Text Utility based on user feedback. If you have any suggestions or encounter any issues, please don't hesitate to <a href="/contact">contact us</a>.
        </p>
        <p>
          Thank you for using Text Utility!
        </p>
      </div>
    </div>
  );
}

export default About;