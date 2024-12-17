# [Axie-backend](https://github.com/jjvillegas16/axie-backend)

## Description

This is a backend server that serves 3 axie related endpoints:

1. Import first 300 axies (POST /axies/import)
   - Body params: See get-axies-list.dto.ts
2. Gets the axies from (1) (GET /axies)
3. Calls the getAxie function from the Axie Infinity Smart Contract (GET /axies/:id)

and 2 user auth related endpoints:

1. Register a user (POST /users/register)
   - Body params: See register.dto.ts
2. Login a user (POST /auth/login)
   - Body params: See login.dto.ts

## Framework and libraries used

- NestJS
- MongoDB (mongoose)
- PassportJS (authentication)
- Web3
- Docker

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Docker Desktop (this installs both docker and docker-compose)
- npm
- Node.js
- Create a .env file on the root directory and supply the values for each field. The fields can be seen in the .env.sample file

## Installation

To install the project, follow these steps:

1. Download the .zip file of the project
2. Install the dependencies so VSCode types will work

```bash
cd <repository-directory>
npm install
```

## Development Setup

### Running the Application

1. Run the docker-compose command to build and start the app

```bash
docker-compose up
```
