# Todo List Application
This is a Todo List web application built using [React](https://react.dev/) (or [Next.js](https://nextjs.org/) if using SSR). The application allows users to create, update, and manage tasks effectively, with a variety of interactive features and a clean user interface.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

### Core Features

- *Create Task:* Add new tasks with a title and optional description.
- *Update Task:* Edit existing tasks to change their title or description.
- *Mark as Done:* Mark tasks as completed to organize tasks effectively.
- *Search Tasks:* Search functionality to filter tasks by title.
- *Expandable List:* Display tasks in an expandable format with a description and a timestamp of the last update.
- *Persistent Storage:* Tasks are stored in a dummy JSON file to simulate data persistence.

### Additional Features (if using Next.js)

- *Server-Side Rendering (SSR):* Improve SEO and initial load time by rendering pages on the server.
- *URL Parameters:* Search functionality is integrated with URL parameters for easy sharing and bookmarking of specific search results.

## Requirements

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/)  for package management
- A web browser (Chrome, Firefox, Edge, etc.)

## Installation

1. *Clone the repository:*

   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app

#### Install dependencies
npm install
#### Create a Dummy Data
Create a tasks.json file inside the src/data/ directory with the following content:

json
Copy code
[
  {
    "id": 1,
    "title": "Sample Task",
    "description": "This is a sample task description.",
    "completed": false,
    "lastUpdated": "2024-07-31T12:00:00Z"
  }
]
##### Running the Application
React
If you are using React, start the application with: npm start

The application will be accessible at'https://localhost:3000'.

Creating a Task:

1.Enter the task title in the input field.
2.Click on the "Add Task" button to add the task to the list.

Updating a Task:

1.Click on the "Edit" button next to the task.
2.Modify the task title or description and save the changes.

Marking aTask at done

1.Click on the "Mark as Done" button to mark a task as completed.
2.Completed tasks will be shown with a strikethrough.

Searching Tasks:

1.Use the search bar to filter tasks by title.
2.If using Next.js, the search query will update the URL parameters for easy bookmarking.

Exapndable list

1.Click on a task to expand it and view the description and last updated timestamp.
1.
