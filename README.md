Sentence Builder Backend
This is the backend for the Sentence Builder application, an application for creating sentences by selecting words by type.

Setup Instructions
Follow these steps to set up and run the project.

Step 1: Clone the Repository
Clone the repository onto your local machine.
git clone https://github.com/Njabz-1/sentence-builder-info

Step 2: Install Dependencies
Navigate into the project directory and run the following command to install all necessary packages.
npm install

Step 3: Database Setup
The backend of this application utilizes a SQL database. Here are the steps to set it up:

Open your SQL Server Management Studio (SSMS) or any other SQL client you're using.
Run the provided script.sql script. This will create necessary tables.
-- execute the script.sql file

Please remember to update the database connection string in the application to point to your local database. You should find the connection string in a file called .env or similar.

Step 4: Run the Server
Run the server using the following command:

node app.js
You can now access the backend API at http://localhost:3000.