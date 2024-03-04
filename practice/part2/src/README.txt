-- All of my professional code cannot be shared, as it is under NDA, so I am building out my personal repository now, this is a simple app I am currently learning with


Simple Note Taking App
This is a simple note-taking application built using React. It allows users to add, delete, and mark notes as important. The application uses useState and useEffect hooks for managing state and interacting with a backend service for storing notes.

Features
Add new notes with content.
Mark notes as important.
Toggle between showing all notes and only showing important notes.

Installation
Clone the repository:

git clone https://github.com/Arbiphile/FullStackOpen/tree/main/practice/part2

Install dependencies:
npm install

Start the development server:
npm start


Usage
Once the server is running, you can access the application at http://localhost:3000. Here, you can:

Add new notes by typing in the input field and clicking the "save" button.
Delete notes by clicking the trash icon.
Mark notes as important by clicking the star icon.
Toggle between showing all notes and only showing important notes by clicking the "show all" or "show important" button.
Dependencies
react: JavaScript library for building user interfaces.
react-dom: Provides DOM-specific methods that can be used at the top level of your app.
react-scripts: Scripts and configuration used by Create React App.
Backend Service
The application uses a backend service for storing notes. The service provides the following endpoints:

GET /api/notes: Get all notes.
POST /api/notes: Create a new note.
PUT /api/notes/:id: Update a note.
DELETE /api/notes/:id: Delete a note.
The backend service is not included in this repository. You can replace it with your own backend service or mock the API calls for testing purposes.

Credits
This project was created by [Your Name].