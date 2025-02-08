// ./assets/EnglishforCS/U2PythonA2/3U2OOPPython

"use client";

import React from "react";

const CreatingObjectsActivity = () => {
  return (
    <div className="container">
      <h1>Creating Objects in Python</h1>
      <p>
        Maybe now you ask yourself—how can I use Python to create objects?
      </p>
      <p>
        This is an excellent question. Python is very easy to use to create objects because it's similar to creating variables. There are a few{" "}
        <span
          className="hover-term"
          title="Reserved words in Python that have special meaning, such as 'class' and 'def'."
        >
          keywords
        </span>{" "}
        you need to know first.
      </p>
      <p>
        An{" "}
        <span
          className="hover-term"
          title="An object in Python created from a class template. It represents a single occurrence of the class."
        >
          instance
        </span>{" "}
        in Python is an object created from a class. Remember that a{" "}
        <span
          className="hover-term"
          title="A blueprint or template for creating objects."
        >
          class
        </span>{" "}
        is a template for an object. To create a class in Python, you need to use the keyword <code>class</code>. After that, you name the class and add a colon.{" "}
        <span
          className="hover-term"
          title="The arrangement of text or indentation to denote code structure in Python."
        >
          Spacing
        </span>{" "}
        is very important in Python. After you put the colon, press Enter and make sure you use a tab to add its methods and attributes.
      </p>
      <p>
        Adding{" "}
        <span
          className="hover-term"
          title="Blocks of code that perform actions and are defined using 'def' in Python."
        >
          functions
        </span>{" "}
        or methods in Python is easy too. You use the keyword <code>def</code> (like definition) and name the method. Your function or method needs parentheses immediately after, and inside, you pass it{" "}
        <span
          className="hover-term"
          title="Values that are provided to a function to customize its behavior."
        >
          arguments
        </span>. Arguments can be used in your function. After that, you write the colon and follow the same spacing to define your function.
      </p>
      <p>
        Attributes would just be variables you associate with your class.
      </p>
      <p>
        To{" "}
        <span
          className="hover-term"
          title="The process of creating an object from a class."
        >
          instantiate
        </span>{" "}
        the object, you name it like a variable and{" "}
        <span
          className="hover-term"
          title="To set a value to a variable using the '=' operator."
        >
          assign
        </span>{" "}
        it any necessary arguments.
      </p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>How do I create an object in Python?</li>
          <li>What is the difference between an object and a class?</li>
          <li>What are some characteristics of OOP syntax in Python?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>Write a class and instantiate an object in Python.</p>
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

export default CreatingObjectsActivity;
