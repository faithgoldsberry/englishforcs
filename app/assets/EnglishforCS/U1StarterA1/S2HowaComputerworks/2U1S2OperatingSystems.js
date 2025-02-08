// ./assets/EnglishforCS/U1StarterA1/S2HowaComputerworks/2U1S2OperatingSystems

"use client";

import React from "react";

const OperatingSystemsActivity = () => {
  return (
    <div className="container">
      <h1>Can You Name Some Operating Systems?</h1>
      <p>
        Most people use Windows. I use Mac, and my operating system is called Unix. Unix is similar to Linux (Ubuntu).
      </p>
      <p>
        What does your{" "}
        <span
          className="hover-term"
          title="A system software that manages hardware resources and provides services for computer programs."
        >
          operating system
        </span>{" "}
        do for you?
      </p>
      <p>
        I use my computer to save files, write code, use the Internet, and read information.
      </p>
      <p>
        What operating system do you prefer? Operating systems use a{" "}
        <span
          className="hover-term"
          title="A type of user interface that allows interaction with the system through graphical elements such as windows, icons, buttons, and menus."
        >
          graphical interface
        </span>{" "}
        to show you your programs and files.
      </p>
      <p>
        The terminal does not have a graphical interface. It is a text-based environment.
      </p>
      <p>
        When you run scripts, you tell your computer to act like you do when you use your graphical interface.
      </p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>What is a graphical interface?</li>
          <li>What is an operating system?</li>
          <li>How do you use your computer every day?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>Write a few sentences about your favorite uses for your operating system.</p>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }
        .hover-term {
          color: #007bff;
          text-decoration: underline;
          cursor: pointer;
          position: relative;
        }
        .hover-term:hover::after {
          content: attr(title);
          position: absolute;
          background: #f0f0f0;
          color: #333;
          border: 1px solid #ccc;
          padding: 5px;
          border-radius: 5px;
          top: 25px;
          left: 0;
          white-space: nowrap;
          z-index: 10;
        }
        .questions,
        .task {
          margin-top: 20px;
          padding: 10px;
          border: 1px solid #ddd;
          background: #f9f9f9;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default OperatingSystemsActivity;
