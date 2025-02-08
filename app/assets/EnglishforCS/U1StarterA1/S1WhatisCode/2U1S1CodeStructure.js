// './assets/EnglishforCS/U1StarterA1/S1WhatisCode/2U1S1CodeStructure'

"use client";

import React from "react";

const CodeStructure = () => {
  return (
    <div className="container">
      <h1>Is Coding Simple?</h1>

      <p>
        <span
          className="hover-term"
          title="The process of writing instructions in a programming language."
        >
          Coding
        </span>{" "}
        can be very simple. When we create a{" "}
        <span
          className="hover-term"
          title="A system that uses electrical signals to perform logical operations."
        >
          logical circuit
        </span>
        , we tell the circuit what to do with an{" "}
        <span
          className="hover-term"
          title="A flow of electric charge that powers electronic devices."
        >
          electrical current
        </span>
        .
      </p>

      <p>
        Your computer contains many logical circuits called{" "}
        <span
          className="hover-term"
          title="Small electronic components that process data and perform tasks."
        >
          chips
        </span>
        . Each chip follows instructions with respect to its configuration.
      </p>

      <p>
        We don't need to physically configure code; we just write it in a{" "}
        <span
          className="hover-term"
          title="An application where code is written, edited, and saved."
        >
          text editor
        </span>
        . Then, we execute the code, and it{" "}
        <span
          className="hover-term"
          title="Carries out the instructions in the code to perform a task."
        >
          runs
        </span>{" "}
        the program.
      </p>

      <p>
        Sometimes, our code or algorithm can be repeated. We can also do basic arithmetic operations with it.
      </p>

      <p>We add repeatable portions of code with control structures.</p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>What do you think a control structure is?</li>
          <li>What are some algorithms you repeat every day?</li>
          <li>What do you know about chips?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>Write pseudocode with a complex algorithm for your daily routine.</p>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }
        .hover-term {
          color: #007BFF;
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
        .questions, .task {
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

export default CodeStructure;
