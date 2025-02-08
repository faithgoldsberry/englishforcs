// ./assets/EnglishforCS/U3DataStructuresB1/1U3Intro

"use client";

import React from "react";

const DataStorageAnalysis = () => {
  return (
    <div className="container">
      <h1>Data Storage and Analysis</h1>
      <p>
        Now that we know how to{" "}
        <span className="hover-term" title="To manage or process information effectively.">handle data</span>, 
        it's time to apply some{" "}
        <span className="hover-term" title="A way to keep information so it can be used later.">data storage</span>.
      </p>
      <p>
        If we want our data to{" "}
        <span className="hover-term" title="To last beyond the program's execution or a temporary state.">persist </span> 
         in our program, we need to have memory to{" "}
        <span className="hover-term" title="To save or keep information in a structure.">store</span> it in. There are many{" "}
        <span className="hover-term" title="Areas or domains of work, study, or data organization.">fields</span> that exist now 
        and are expanding currently based on this need. You have probably heard that{" "}
        <span className="hover-term" title="A metaphor for the immense value of data in modern times.">data is the new gold</span>; 
        it rings true especially with the languages we have mentioned so far.
      </p>
      <p>
        In Python, we use{" "}
        <span className="hover-term" title="A collection that can hold multiple items in a single variable, indexed by position.">lists </span> 
        and{" "}
        <span className="hover-term" title="A collection of key-value pairs, where each key maps to a specific value.">dictionaries </span> 
        to store data. These are the building blocks for a lot of the data stored in many backends.
      </p>
      <p>
        In{" "}
        <span className="hover-term" title="The process of examining data to find patterns or draw conclusions.">Data Analysis</span>, 
        you are supposed to make questions about and clarify some{" "}
        <span className="hover-term" title="Patterns or changes in data over time.">trends</span> or conditions based on the data you have available.
        Although we usually use other languages or environments, like{" "}
        <span className="hover-term" title="A language for managing and querying databases.">SQL</span> or{" "}
        <span className="hover-term" title="A digital table for organizing information in rows and columns.">Excel</span>, 
        to organize our data, fields like{" "}
        <span className="hover-term" title="A field that combines statistics, programming, and domain expertise to extract insights from data.">Data Science </span> 
        use what's called{" "}
        <span className="hover-term" title="Extremely large datasets that cannot be managed using traditional data processing tools.">Big Data</span>. 
        Imagine using a{" "}
        <span className="hover-term" title="A digital table for organizing information in rows and columns.">spreadsheet</span> to organize 1000s of{" "}
        <span className="hover-term" title="Individual rows in a dataset, each representing one unit of data.">lines</span> of data: it's too hard!
      </p>
      <p>
        If you want data to persist in your program, you will eventually need a{" "}
        <span className="hover-term" title="A structured system for storing and managing data.">database</span>. 
        However, a lot of data that we use for simpler purposes can be managed with more basic structures, like dictionaries. 
        While we use the term dictionary in Python, we also use the term{" "}
        <span className="hover-term" title="A general term for a collection of items, often used in programming.">array</span> more generally. 
        If you work with{" "}
        <span className="hover-term" title="A common area of software development focused on building applications for the internet.">Web</span>, 
        you may see arrays used in{" "}
        <span className="hover-term" title="A popular programming language for creating interactive web content.">JavaScript</span>.
      </p>
      <p>
        Databases almost always work with some form of SQL. That's because when data started to{" "}
        <span className="hover-term" title="To grow rapidly or increase in size or scope.">explode</span> around the '80s, 
        solutions needed to be put in place to share and manage it. SQL, or Structured Query Language, is used to{" "}
        <span className="hover-term" title="To request or retrieve specific data from a database.">make queries</span>, 
        among other things. Once you have a database{" "}
        <span className="hover-term" title="To establish or initialize something for use.">set up</span>, you will need to{" "}
        <span className="hover-term" title="To ask a database for specific information.">query</span> it. Query means asking; so we're 
        basically asking the database for information that we had stored in it.
      </p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>What are some data structures in Python?</li>
          <li>Have you ever used Excel before?</li>
          <li>Do you know about any other{" "}
            <span className="hover-term" title="Software designed to manage and interact with databases, such as MySQL, PostgreSQL, or MongoDB.">database engines</span>?
          </li>
          <li>How do you think you could use the Terminal to query a database?</li>
          <li>What do you think is the difference between Data Analysis and Data Science?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>Write 5 queries in SQL. Then, create a dictionary in Python.</p>
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

export default DataStorageAnalysis;
