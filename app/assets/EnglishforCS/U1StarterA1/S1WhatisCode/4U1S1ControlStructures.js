// ./assets/EnglishforCS/U1StarterA1/S1WhatisCode/4U1S1ControlStructures

"use client";

import React from "react";

const ControlStructuresActivity = () => {
  return (
    <div className="container">
      <h1>Do You Remember Control Structures?</h1>
      <p>Think about your algorithms. Can we make them more efficient?</p>
      <p>
        When I make salad, I repeat some things. I cut tomatoes. I cut lettuce. I also cut carrots.
      </p>
      <p>
        <span
          className="hover-term"
          title="Ways to organize and manage the flow of a program, such as loops or conditions."
        >
          Control structures
        </span>{" "}
        allow us to repeat some things. We call this a{" "}
        <span
          className="hover-term"
          title="A programming construct that repeats a block of code based on a condition or number of repetitions."
        >
          loop
        </span>.
      </p>
      <p>
        Loops help us make our code more efficient. I can write a loop knowing when to stop repeating an action. For example:
      </p>
      <ul>
        <li>Start cutting, and stop when the vegetables are all cut.</li>
        <li>Start cutting, and cut the three vegetables.</li>
      </ul>
      <p>
        I can stop my loop with a condition: the vegetables are all cut. <br />
        Or, I can stop my loop with a number of repetitions: three vegetables.
      </p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>Can you compare code to a simple calculator?</li>
          <li>How can I use simple arithmetic in my code?</li>
          <li>What are the names of the loops we describe in the text?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>Write pseudocode for an algorithm with repeatable instructions.</p>
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

export default ControlStructuresActivity;
