# Problem 5: Crude Server

A simple backend server built with ExpressJS and TypeScript, featuring a CRUD interface for managing resources. Data is persisted using SQLite.

## Prerequisites

- Node.js (v14 or higher recommended)
- npm

## Installation

1. Navigate to the project directory:
   ```bash
   cd src/problem5
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

The server runs on port `3000` by default. You can configure this by setting the `PORT` environment variable.

## Running the Application

### Development Mode
To run the server with hot-reloading (using `nodemon`):
```bash
npm run dev
```

### Production Mode
To build and start the server:
```bash
npm run build
npm start
```

## API Endpoints

The server exposes the following endpoints under `/resources`:

- **Create Resource**: `POST /resources`
  - Body: `{ "name": "string", "description": "string" }`
- **List Resources**: `GET /resources`
  - Query Param: `?name=filter_string` (optional)
- **Get Resource**: `GET /resources/:id`
- **Update Resource**: `PUT /resources/:id`
  - Body: `{ "name": "string", "description": "string" }`
- **Delete Resource**: `DELETE /resources/:id`

## Testing

A bash script is provided to verify the API endpoints using `curl`.

1. Ensure the server is running (in a separate terminal).
2. Run the test script:
   ```bash
   ./test_api.sh
   ```
