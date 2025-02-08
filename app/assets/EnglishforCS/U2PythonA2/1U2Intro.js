// ./assets/EnglishforCS/U2PythonA2/1U2Intro

"use client";

import React from "react";

const PythonUsesActivity = () => {
  return (
    <div className="container">
      <h1>Python and Its Uses</h1>
      <p>
        Python is a very popular programming language with a very big community. It's used for a lot of things, including:{" "}
        <span
          className="hover-term"
          title="The simulation of human intelligence in machines that are programmed to think and act like humans."
        >
          AI
        </span>,{" "}
        <span
          className="hover-term"
          title="The practice of analyzing and extracting useful information from data using statistical and computational methods."
        >
          Data Science
        </span>,{" "}
        <span
          className="hover-term"
          title="The part of programming that focuses on server-side functionality, including managing databases, APIs, and business logic."
        >
          Backend programming
        </span>,{" "}
        <span
          className="hover-term"
          title="The study and application of mathematical methods for analyzing data and making decisions."
        >
          Statistics
        </span>, and much more. You will love Python's versatile structure. This incredible language can do calculations as well as create a very useful{" "}
        <span
          className="hover-term"
          title="A graphical or programmatic layer that allows users to interact with or manage data."
        >
          interface
        </span>{" "}
        to{" "}
        <span
          className="hover-term"
          title="To organize, store, and manipulate data effectively."
        >
          manage data
        </span>.
      </p>
      <p>
        Personally, Python is by far my favorite language. I have more experience in Web Programming, so I'll be talking more about that use. Python can actually be used for both{" "}
        <span
          className="hover-term"
          title="The part of an application that the user interacts with directly."
        >
          frontend
        </span>{" "}
        and backend. When we program, especially for Web, we usually separate the front interface (the part the user can interact with) and the back (the part that manages the data). Within Python, there are some popular frameworks. My favorites, and the most popular, are Django and Flask.
      </p>
      <p>
        Flask is a useful framework to work with simple projects. It's usually used without other frameworks. Django is also a very useful framework to create the backend of your website. The reason people use Django is because it has a lot of{" "}
        <span
          className="hover-term"
          title="Features that are built into a framework and ready to use without additional coding, such as login systems, security, or database integrations."
        >
          default uses
        </span>{" "}
        in it. Some of the popular uses are{" "}
        <span
          className="hover-term"
          title="The process of verifying the identity of a user or system."
        >
          authentication
        </span>, templates, and security technologies.
      </p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>What is Python?</li>
          <li>What is a framework?</li>
          <li>What are backend and frontend used for?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>Choose your favorite use of Python and find example code for it.</p>
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

export default PythonUsesActivity;
