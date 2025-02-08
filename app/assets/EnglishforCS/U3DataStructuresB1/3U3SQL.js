// ./assets/EnglishforCS/U3DataStructuresB1/3U3SQL

"use client";

import React from "react";

const SQLandDatabases = () => {
  return (
    <div className="container">
      <h1>SQL and Databases</h1>
      <p>
        Once a database has been created, you will be required to query it. Databases store registers of data. They are usually{" "}
        <span
          className="hover-term"
          title="Relational refers to a type of database where tables are connected by relationships."
        >
          relational
        </span>{" "}
        and represent tables with{" "}
        <span className="hover-term" title="Data entries or instances in a table.">rows</span> and{" "}
        <span className="hover-term" title="Attributes of the data, like names, IDs, etc.">columns</span>. 
        Columns represent data, like names, contact information,{" "}
        <span className="hover-term" title="An identifier for each entry in a database, often unique.">IDs</span>, etc., while the rows are instances of those—basically, the actual data.
      </p>

      <p>
        You will need to query the database to use it, or you may{" "}
        <span className="hover-term" title="Automating tasks by using a program to perform actions on your behalf.">
          get your program to do it
        </span>{" "}
        for you. Typically, you're going to query your database in a Terminal, though you may also do it in a specific environment or{" "}
        <span className="hover-term" title="A graphical interface to manage databases, instead of command-line operations.">GUI</span>{" "}
        (Graphical User Interface). To simply query the database, you will only need to retrieve information from it. You won't 
        need to use the other{" "}
        <span className="hover-term" title="CRUD operations refer to the basic set of operations for interacting with databases: Create, Read, Update, Delete.">
          CRUD operations
        </span>. CRUD stands for: Create, Read,{" "}
        <span className="hover-term" title="Updating means modifying an existing record in a database.">Update</span>,{" "}
        <span className="hover-term" title="Deleting means removing a record from the database.">Delete</span>. 
        So, when querying a database, you are primarily reading or accessing the data.
      </p>

      <p>
        In SQL, and most SQL-like languages, the syntax is similar:  
        - Use the keyword <code>SELECT</code> to specify the column (type of data, like a name).  
        - Use <code>FROM</code> to indicate the{" "}
        <span className="hover-term" title="A structure in a database that stores data in an organized way.">table </span>  
        that contains the data.  
        - Use <code>WHERE</code> to apply filters.  

        A simple way to start is with:  
        <code> SELECT * FROM table</code>,  
        where the asterisk (`*`) means "all" in SQL (i.e., retrieve all data), and `table` should be replaced by the name of the specific table.
      </p>

      <p>
        Remember, when{" "}
        <span className="hover-term" title="The process of limiting the data retrieved by a query based on certain criteria.">
          setting a filter
        </span>, consider the conditions SQL can apply, or you may encounter an{" "}
        <span className="hover-term" title="A mistake or problem in the query that causes the database to fail.">error</span>. 
        For example, you can choose a column, and write the name, say <code>age</code>, and then give basic <span className="hover-term" title="Operators that compare data, like greater than, less than, equal to, etc.">comparative operators</span> to it, for example, <code>age &gt; 10</code>.  If you keep these points in mind, you should be able to query the database with minimal issues.
      </p>

      <div className="questions">
        <h2>Comprehension Questions</h2>
        <ol>
          <li>How can I query in SQL?</li>
          <li>What is SQL?</li>
          <li>What is a relational database?</li>
          <li>How can I filter my data?</li>
          <li>How can I check the entire table?</li>
        </ol>
      </div>

      <div className="task">
        <h2>Task</h2>
        <p>Write 5 queries with filters.</p>
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

export default SQLandDatabases;
