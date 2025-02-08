// ./assets/EnglishforCS/U1StarterA1/S1WhatisCode/1U1S1Intro

// Add this directive at the very top
"use client";

import React from "react";

const IntroActivity = () => {
  return (
    <div className="container">
      <h1>What Do You Know About Programming?</h1>
      <p>
        <span className="hover-term" title="The action of writing instructions for a computer to perform tasks.">
          Programming
        </span>{" "}
        is an action. We give instructions to a{" "}
        <span className="hover-term" title="An electronic device that processes information and executes tasks based on instructions.">
          computer
        </span>
        , or{" "}
        <span className="hover-term" title="A piece of software designed to perform specific tasks.">
          program
        </span>
        , to tell it what to do when we{" "}
        <span className="hover-term" title="To run or start a program or a set of instructions.">
          execute
        </span>{" "}
        it.
      </p>
      <p>
        Some examples of program{" "}
        <span className="hover-term" title="The tools or platforms where programming and code execution take place.">
          environments
        </span>{" "}
        are Excel, Visual Studio Code, and CodePen.
      </p>
      <p>
        When we write{" "}
        <span className="hover-term" title="A set of instructions written in a programming language to perform tasks.">
          code
        </span>
        , we give the program specific instructions to do something.
      </p>
      <p>Sometimes, when we go to interviews, we write pseudocode.</p>
      <p>
        Pseudocode can describe{" "}
        <span className="hover-term" title="A step-by-step process or set of instructions to solve a problem.">
          algorithms
        </span>
        . Algorithms are also instructions.
      </p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>What is programming?</li>
          <li>What is code?</li>
          <li>What is pseudocode?</li>
          <li>What is an algorithm?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>Write instructions or an algorithm of your daily routine.</p>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          line-height: 1.6;
          padding: 20px;
        }
        h1, h2 {
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

export default IntroActivity;
