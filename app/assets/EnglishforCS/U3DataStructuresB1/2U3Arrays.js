// ./assets/EnglishforCS/U3DataStructuresB1/2U3Arrays

"use client";

import React from "react";

const ArraysActivity = () => {
  return (
    <div className="container">
      <h1>Python and To-Do Lists</h1>
      <p>
        Have you ever made a{" "}
        <span className="hover-term" title="A simple list of tasks you want to accomplish.">
          to-do list
        </span>
        ? Certainly you've done it before going to the store or studying. How do you think Python, for example, would{" "}
        <span className="hover-term" title="To store or record information in a structured way.">
          register
        </span>{" "}
        that information?
      </p>
      <p>
        Let's say we make the following list: go to the store, do laundry, marinate the chicken. We already know that Python stores 
        text as strings. Each item in the list would be a string in this case, but how would Python store the entire list?
      </p>
      <p>
        Python stores lists just like it stores any variable—you just have to name it and declare it. In Python, we use 
        lists to store items of the same type (numbers, strings, etc). We use brackets to contain our items and 
        then separate each item with a comma. So, in our case, our list would be: 
      </p>
      <pre><code>ToDo = ["go to the store", "do laundry", "marinate the chicken"]</code></pre>
      <p>
        In contrast, a dictionary does not contain items in the same sense; rather, it contains what is known as{" "}
        <span className="hover-term" title="A pair consisting of a unique identifier (key) and its associated value.">
          key value pairs
        </span>
        .{" "}
        <span className="hover-term" title="A unique identifier in a dictionary used to retrieve its corresponding value.">
          Keys
        </span>{" "}
        tend to be numbers in sequential order, and values tend to be strings, but they can be any{" "}
        <span className="hover-term" title="A basic data type like strings, numbers, or booleans.">
          primitive data type
        </span>
        . So, we could modify our list to give a sequential order:
      </p>
      <pre><code>ToDo = {'{1: "go to the store", 2: "do laundry", 3: "marinate the chicken"}'}</code></pre>
      <p>
        Notice we use curly brackets for dictionaries.
      </p>
      <p>
        We can use the same concept in other modern languages, like JavaScript. JavaScript very frequently uses arrays to 
        quickly manage data in an{" "}
        <span className="hover-term" title="A digital environment where users interact with a web application.">
          interactive Web environment
        </span>
        . Let's say we want to{" "}
        <span className="hover-term" title="To make a set of items visible on a screen.">
          display a list of items
        </span>{" "}
        we can buy on an{" "}
        <span className="hover-term" title="A website or platform for buying and selling products online.">
          ecommerce site
        </span>
        ; we would need to store those items in an array and be able to move the data around, add, or even remove it, depending 
        on{" "}
        <span className="hover-term" title="Actions or interactions performed by the user.">
          user activity
        </span>{" "}
        or even{" "}
        <span className="hover-term" title="Criteria used to refine or sort a list of items.">
          filters
        </span>
        . The array syntax in JavaScript is the same as the syntax for lists in Python.
      </p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>What is an array?</li>
          <li>How do we handle data without databases or data files?</li>
          <li>What kind of function could manipulate these data types?</li>
          <li>How do you think you would add a new item to a list/array?</li>
          <li>What if I have a really long list—how do you think that may affect the memory?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>Look up the Python functions to manipulate lists and dictionaries and apply them in an example.</p>
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

export default ArraysActivity;
