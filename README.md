# School Management API

A Node.js and Express.js API for managing school data, including adding new schools and retrieving a list of schools sorted by proximity to a given location.

## Features

- **/addSchool**: Endpoint to add new schools with details like name, address, latitude, and longitude.
- **/listSchools**: Endpoint to retrieve a list of schools sorted by their proximity to a user-specified location.

## For New Database 
- Create a .env file and put following variables:
  ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   DB_PORT=your_hosting_port
  ```
- For schools table creation run:
  ```
   npm run migrate
  ```

  
  
