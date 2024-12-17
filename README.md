# Axie-backend

## Description

This is a backend server that serves 3 axie related endpoints:

1. Import first 300 axies (POST /axies/import)
   Body params: See get-axies-list.dto.ts
2. Gets the axies from (1) (GET /axies)
3. Calls the getAxie function from the Axie Infinity Smart Contract (GET /axies/:id)

and 2 user auth related endpoints:

1. Register a user (POST /users/register)
   Body params: See register.dto.ts
2. Login a user (POST /auth/login)
   Body params: See login.dto.ts

## Framework and libraries used

-
