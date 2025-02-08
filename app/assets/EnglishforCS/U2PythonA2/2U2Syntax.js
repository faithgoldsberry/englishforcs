// ./assets/EnglishforCS/U2PythonA2/2U2Syntax

"use client";

import React from "react";

const LearningPythonSyntax = () => {
  return (
    <div className="container">
      <h1>Learning Python Syntax</h1>
      <p>
        When we learn languages, we talk about{" "}
        <span
          className="hover-term"
          title="The rules that define the structure of a language, including how words and symbols can be combined."
        >
          syntax
        </span>
        . That's a way to structure your words. Similarly, code has syntax.
      </p>
      <p>
        In particular, Python has a very simple syntax, and a lot of people like it because of that.
      </p>
      <p>
        Python lets us{" "}
        <span
          className="hover-term"
          title="To create a variable by assigning it a name and a value."
        >
          declare variables
        </span>{" "}
        by writing their names and an equal sign with its{" "}
        <span
          className="hover-term"
          title="The data stored in a variable."
        >
          value
        </span>
        . Later, you can refer to that variable by its name, and you can also change its value. Python supports the typical{" "}
        <span
          className="hover-term"
          title="The kinds of data that can be stored and manipulated in a program, such as numbers, decimals, and strings."
        >
          data types
        </span>
        . The most simple data types are numbers, decimals, and text characters called strings.
      </p>
      <p>
        We can use numbers to do arithmetic. A lot of people use Python to calculate numbers. There is actually a very interesting{" "}
        <span
          className="hover-term"
          title="A problem or task that tests your skills and knowledge, often designed for practice or competition."
        >
          challenge
        </span>{" "}
        online called Euler Project where you can use Python (for example) to calculate complex mathematical problems.
      </p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>What is syntax?</li>
          <li>What are the simple data types?</li>
          <li>How can I use Python?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>
          Write a{" "}
          <span
            className="hover-term"
            title="A section of code that performs a specific task and can be executed within a programming language."
          >
            code block
          </span>{" "}
          with Python to calculate using the 4 basic operations: addition, subtraction, multiplication, and division.
        </p>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }
        h1,
        h2 {
          color: #333;
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

export default LearningPythonSyntax;
