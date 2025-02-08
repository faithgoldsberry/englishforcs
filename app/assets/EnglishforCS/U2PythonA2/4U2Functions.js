// ./assets/EnglishforCS/U2PythonA2/4U2Functions

"use client";

import React from "react";

const UnderstandingFunctionsActivity = () => {
  return (
    <div className="container">
      <h1>Understanding Functions in Python</h1>
      <p>
        We talked about methods describing behaviors of classes or objects.
      </p>
      <p>
        A method is a function, and a function is a mathematical sequence or behavior. Just like we learn in Algebra, a function takes an{" "}
        <span className="hover-term" title="The values passed into a function for processing.">input</span>{" "}
        and gives an{" "}
        <span className="hover-term" title="The result returned by a function after processing the input.">output</span>. In the middle, it usually does something to the input. In Programming, inputs can be arguments or{" "}
        <span className="hover-term" title="The variables defined in a function to accept values passed into the function.">parameters</span>. Actually, functions have something called a{" "}
        <span className="hover-term" title="The region of a program where a function or variable can be accessed.">scope</span>. The scope determines the information it can access.
      </p>
      <p>
        If I define a function with certain parameters, I can access them if they are in the{" "}
        <span className="hover-term" title="The outermost scope of a program where global variables and functions are defined.">global scope</span>. The global scope is where things are defined for all the code, not only portions of it. For example, if I previously declared <code>myname = 'Faith'</code>, then I can use that in a function's parameters. Let's say I define the function <code>def isMine(myname, thing)</code> where the name is assigned to my name, Faith, and the thing is assigned at another time. Another example is certain values, like <code>def addsquareRoot(1, 4)</code>. Functions accept all the typical data types.
      </p>
      <p>
        Don't worry, you can also use control structures too. Control structures are not only repeatable actions; they are also conditions. We saw an example of this with the while loop. For example, I can repeat my function (like, add two numbers) and stop the repetition when I reach a certain condition (stop at 100).
      </p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>How do functions work?</li>
          <li>What can I use functions for?</li>
          <li>What is the syntax of a function in Python?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>Write a function for an everyday action you do and add a control structure.</p>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          line-height: 1.6;
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

export default UnderstandingFunctionsActivity;
