# Personal Task Manager

This project is a comprehensive web application built with Svelte and SvelteKit, designed to help users manage their daily tasks. 
The application supports user authentication, task creation, updating, deletion, and categorization. Users can filter tasks by category and due date.


## Features

1. User Authentication (Login/Registration)
2. Task Creation, Update, and Deletion
3. Task Categorization
4. Task Filtering by Category, Due Date, and Status
5. Responsive Design
6. API Interaction with Mock API with hosted JSON Server on vercel

## Getting Started

Follow these instructions to set up and run the project locally.

Prerequisites
 1. Node.js (v14 or later)
 2. npm or yarn

Installation
 1. Clone the repository:	
```bash
https://github.com/AmitBudhori07/Personal-Task-Management-System.git
cd Personal-Task-Management-System
```
 2. Install dependencies:
	If you are using npm:
```bash
npm install
OR
yarn install
```
 3 Running the Application
  1. Start the development server:
  ```bash
npm run dev
OR
yarn dev
```
This will start the application and you can access it at http://localhost:5173.
 2. Build for production:
 ```bash
npm run build
OR
yarn build
```
This will create an optimized production build of your application.
 3. Preview the production build:
 ```bash
npm run preview
OR
yarn preview
```

## API Interaction
The application uses a mock API service for demonstration purposes. The API endpoints are used to manage tasks and user data.
Task API is hosted on Vercel which is similar to json server. https://jsonserver-gilt-rho.vercel.app/data.
User API is using JSON placeholder api https://jsonplaceholder.typicode.com/users

 ## Custom Error Handling
The project includes custom error handling using +error.svelte to handle all errors globally, including 404 errors for unknown routes.

 ## Deployment
 Hosted ApplicationURL in vercel 
 https://personal-task-management-system.vercel.app

 ## Acknowledgments
  1. Svelte
  2. SvelteKit
  3. JSONPlaceholder (or your chosen backend API)
