import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
    <div className="App">
      <header>
        <h1>Your Name</h1>
        <p>Introduction about yourself goes here.</p>
      </header>

      {/* Second Section */}
      <section>
        <div>
          <h2>Projects</h2>
          <p>Description of your projects.</p>
        </div>
        <div>
          <h2>Skills</h2>
          <p>List of your skills.</p>
        </div>
        <div>
          <h2>Experience</h2>
          <p>Details about your work experience.</p>
        </div>
      </section>

      {/* Third Section (Contact Form) */}
      <section>
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>

          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;