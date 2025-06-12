# Express CSV CRUD Project

This project is a simple CRUD (Create, Read, Update, Delete) application built with Express.js that uses a CSV file as a database to manage person objects. Each person has the following fields:

- **Id**: Unique identifier for each person
- **Name**: First name of the person
- **Surname**: Last name of the person
- **IsTeacher**: Boolean indicating if the person is a teacher
- **Birthdate**: Date of birth of the person

## Project Structure

```
express-csv-crud
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes
│   │   └── person.js         # Routes for person CRUD operations
│   ├── controllers
│   │   └── personController.js # Business logic for person operations
│   ├── utils
│   │   └── csvHandler.js      # CSV file handling functions
│   └── data
│       └── persons.csv        # CSV file storing person data
├── package.json               # NPM configuration and dependencies
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-csv-crud
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:

```
node src/app.js
```

The server will start and listen for requests on the specified port.

## API Endpoints

- **POST /persons**: Create a new person
- **GET /persons/:id**: Retrieve a person by ID
- **PUT /persons/:id**: Update a person by ID
- **DELETE /persons/:id**: Delete a person by ID
- **GET /persons**: List all persons

## CSV File Format

The `persons.csv` file should have the following format:

```
Id,Name,Surname,IsTeacher,Birthdate
1,John,Doe,true,1990-01-01
2,Jane,Smith,false,1992-02-02
```

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.