// ./assets/EnglishforCS/U1StarterA1/S2HowaComputerworks/1U1S2Intro

"use client";

import React from "react";

const ComputerWorkActivity = () => {
  return (
    <div className="container">
      <h1>
        How Does a Computer{" "}
        <span
          className="hover-term"
          title="To operate or function as intended; in this context, it refers to the ability of a computer to execute instructions and perform tasks efficiently."
        >
          Work
        </span>
        ?
      </h1>
      <p>
        A computer is{" "}
        <span
          className="hover-term"
          title="A type of material, typically metal, that conducts electricity and is used in the construction of electronic devices."
        >
          metal
        </span>{" "}
        configured to guide electricity to chips. A chip is a logical circuit. Each computer has many chips.
      </p>
      <p>
        Computers use{" "}
        <span
          className="hover-term"
          title="The software that manages hardware and software resources on a computer."
        >
          operating systems
        </span>{" "}
        to run programs. Programs run your code to execute specific actions.
      </p>
      <p>
        Some simple actions include things you do on your computer: create a{" "}
        <span
          className="hover-term"
          title="A collection of data stored electronically, often in a digital format."
        >
          file
        </span>
        ,{" "}
        <span
          className="hover-term"
          title="To store data or information on a computer or other device."
        >
          save
        </span>{" "}
        a file, edit a file, and{" "}
        <span
          className="hover-term"
          title="To remove data or information from a computer or other device."
        >
          delete
        </span>{" "}
        a file.
      </p>
      <p>
        Usually, simple actions are executed by special code called a{" "}
        <span
          className="hover-term"
          title="A program that automates tasks by executing commands through a command line interface."
        >
          script
        </span>
        . Scripts are usually made in a{" "}
        <span
          className="hover-term"
          title="A text-based interface that allows you to interact with the operating system, run scripts, and perform actions through typed commands."
        >
          Terminal
        </span>
        .
      </p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>What is a script?</li>
          <li>What do you do on your computer?</li>
          <li>What is a terminal?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>
          Write a few sentences about what you do on your computer. Try to describe how you execute different tasks, like creating or saving files.
        </p>
      </div>

      <style jsx>
        {`
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
        `}
      </style>
    </div>
  );
};

export default ComputerWorkActivity;
