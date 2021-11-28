# Personal Budget App
## How to get the project running
  - Enter service and client folder and run:
  
    ```
    npm install
    ```
  - Create `.env` file with your database config inside the server folder
    ```
    DATABASE=your_database
    DATABASE_HOST=your_host
    DATABASE_USER=your_user
    DATABASE_PASS=your_pass
    ```
  - Run the `personal_budget.sql` file in your database
  - In the server and client folders run `npm start` to get the API and the client running