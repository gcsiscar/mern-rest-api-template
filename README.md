# RESTful API Template

My personal template for creating RESTful API using Node.js, Express, Mongoose, and TypeScript

## Table of Contents

- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

- MongoDB or MongoDB Atlas
- Node.js

```json
  "dependencies": {
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mongoose": "^5.12.3"
  },
  "devDependencies": {
    "@types/express": "^4.17.11",
    "@types/mongoose": "^5.10.4",
    "@types/node": "^14.14.39",
    "@typescript-eslint/eslint-plugin": "^4.22.0",
    "@typescript-eslint/parser": "^4.22.0",
    "eslint": "^7.24.0",
    "eslint-config-airbnb-base": "^14.2.1",
    "eslint-plugin-import": "^2.22.1",
    "nodemon": "^2.0.7",
    "ts-node": "^9.1.1",
    "typescript": "^4.2.4"
  }
```

### Installation

Clone the repo

```
git clone https://github.com/gcsiscar/mern-rest-api-template.git
```

Install development and production dependencies.

```
npm install
```

You will need to set up MongoDB Atlas. See [MongoDB](https://docs.mongodb.com/cloud/) for instructions.

Start the server.

```
npm run start
```

Open in your browser and navigate to http://localhost:5000.
