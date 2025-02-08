// ./assets/EnglishforCS/U1StarterA1/S2HowaComputerworks/3U1S2Files

"use client";

import React from "react";

const FileManagementActivity = () => {
  return (
    <div className="container">
      <h1>
        What is a File? What About a{" "}
        <span
          className="hover-term"
          title="A container used to organize files on a computer or other digital device."
        >
          Folder
        </span>
        ?
      </h1>
      <p>
        I have many files on my computer. I have code, photos, books, PDFs, and pages.
      </p>
      <p>
        I put my files in folders. How many folders do you have on your computer?
      </p>
      <p>
        Sometimes, we need to share files. We also need to back them up. Do you know the term{" "}
        <span
          className="hover-term"
          title="The process of making a copy of important data to protect it from being lost."
        >
          back-up
        </span>
        ?
      </p>
      <p>
        We can use the{" "}
        <span
          className="hover-term"
          title="A service that allows users to store data online instead of on their local devices."
        >
          Cloud
        </span>{" "}
        for things like{" "}
        <span
          className="hover-term"
          title="Organizing, storing, and accessing digital files."
        >
          file management
        </span>
        . The disadvantage is that you need internet and sometimes it's expensive or not very safe/private.
      </p>
      <p>Do you have a Cloud service to back up your files?</p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>What is a back-up?</li>
          <li>How do we manage files?</li>
          <li>What are the advantages/ disadvantages of the Cloud?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>
          Write a few sentences about your file management system and your experience with Cloud services.
        </p>
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

export default FileManagementActivity;
