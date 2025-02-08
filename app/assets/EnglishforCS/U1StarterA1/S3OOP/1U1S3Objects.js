// ./assets/EnglishforCS/U1StarterA1/S3OOP/1U1S3Objects

"use client";

import React from "react";

const ObjectsActivity = () => {
  return (
    <div className="container">
      <h1>We Use Objects Every Day</h1>
      <p>
        Objects are in our rooms, our homes, our offices, and outside. We use objects to do things, like: sit, eat, play, and rest.
      </p>
      <p>
        When we sit, we use a chair. When we eat, we use a plate and utensils. Objects are all around us.
      </p>
      <p>
        In code, we can create{" "}
        <span
          className="hover-term"
          title="A collection of data and methods to represent real-world entities in code."
        >
          objects
        </span>
        . We can then use objects to do things in our programs.
      </p>
      <p>
        I can create an object with characteristics and behaviors. We call these attributes and methods, respectively.
      </p>
      <p>
        Think of a cellphone. Can you describe it? What does it do? A cellphone is an object you can program.
      </p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>What is an object?</li>
          <li>What are attributes and methods?</li>
          <li>What is the use of objects in code?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>Write a description of an object in front of you.</p>
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

export default ObjectsActivity;
