// ./assets/EnglishforCS/U1StarterA1/S3OOP/2U1S3Classes

"use client";

import React from "react";

const OOPClassActivity = () => {
  return (
    <div className="container">
      <h1>What if I Want to Make Many Objects, and They Are Similar?</h1>
      <p>
        To be more efficient, we can make{" "}
        <span
          className="hover-term"
          title="A general structure or blueprint that defines how something should be created or organized. In programming, templates help generate similar objects or classes with different values."
        >
          templates
        </span>{" "}
        for our objects. Templates are called{" "}
        <span
          className="hover-term"
          title="A blueprint or prototype from which objects are created."
        >
          classes
        </span>{" "}
        in{" "}
        <span
          className="hover-term"
          title="A programming paradigm that uses classes and objects to structure code."
        >
          Object-Oriented Programming
        </span>.
      </p>
      <p>
        I don't make objects like: dog, cat, bird. I make a class called animal. Then, I use my class to create more specific objects.
      </p>
      <p>
        Just like my objects can be anything I want, I can make classes with attributes and methods about anything I want.
      </p>
      <p>
        Using this structure keeps our code clean and easy to understand for other programmers. It is not more efficient on the mechanical level.
      </p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>What is Object-Oriented Programming?</li>
          <li>What is a class?</li>
          <li>Why do we use OOP?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>Write a class with some example objects.</p>
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

export default OOPClassActivity;
