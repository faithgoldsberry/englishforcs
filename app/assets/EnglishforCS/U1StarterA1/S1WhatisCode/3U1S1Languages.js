// ./assets/EnglishforCS/U1StarterA1/S1WhatisCode/3U1S1Languages

"use client";

import React from "react";

const LanguageActivity = () => {
  return (
    <div className="container">
      <h1>What is a Language?</h1>

      <p>We speak a language. We communicate by speaking or writing.</p>

      <p>
        Computers and programs communicate with{" "}
          code. The code appears in a{" "}
        <span
          className="hover-term"
          title="A system of communication used to write and understand code."
        >
          language
        </span>
        .
      </p>

      <p>
        There are many programming languages: Python, JavaScript, Java, just to name a few.
      </p>

      <p>
        Each language has a structure and characteristics. It also has its uses and communities.
      </p>

      <p>Depending on what code you want to write, you choose a language.</p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>What languages do you know?</li>
          <li>What language do you use?</li>
          <li>Do you think some language is better?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>Write a few sentences about your favorite programming language.</p>
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

export default LanguageActivity;
