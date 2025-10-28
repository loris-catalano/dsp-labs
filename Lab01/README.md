# Lab 1 – Distributed Systems Programming

## Overview
This laboratory focused on applying two fundamental concepts in distributed systems development:
- **Design of JSON Schemas**
- **Design and implementation of REST APIs**

The activity was carried out within the context of a **Film Manager platform**, an application that allows users to manage films they have watched, mark favorites, and exchange review invitations with other users.

## 1. JSON Schema Design
In the first part of the lab, I designed three JSON Schemas according to the **Draft-07 standard**:
- **User** — containing fields such as `id`, `name`, `email`, and `password`.
- **Film** — representing each movie with attributes like `id`, `title`, `owner`, `private`, `watchDate`, `rating`, and `favorite`.
- **Review** — modeling review invitations and completed reviews with fields like `filmId`, `reviewerId`, `completed`, `reviewDate`, `rating`, and `review`.

Each schema was validated in **Visual Studio Code**, using example JSON files to ensure compliance and detect potential validation errors.

## 2. REST API Design and Implementation
The second part involved designing and partially implementing a set of **RESTful APIs** for the Film Manager platform.  
The API specification was created using **OpenAPI (Swagger) Editor**, leveraging the previously defined schemas. A **Node.js + Express** implementation was generated from the specification using Swagger tools.

## 3. Server Stub Generation and Integration
The third step focused on implementing a fully functional server by:
1. **Generating the server stub** from the OpenAPI specification using Swagger Codegen
2. **Integrating the generated code** with the server structure provided by the professors
3. **Implementing the logic** to create a complete and operational REST API server

### Server Stub Generation
The server stub was automatically generated from the `openapi.yaml` specification file using **Swagger Codegen** for Node.js.

### Integration Process
The generated stub was then integrated with the professor's provided server structure.

This is what I added:
- API Routes
- JSON Validation Middleware
- Components logic
- Controllers logic
- HTTP Tests

The result was a **fully functional Film Manager API server** capable of handling all CRUD operations for users, films, and reviews, with proper authentication and authorization mechanisms.

## Tools Used
- **Visual Studio Code** – development and schema validation  
- **Swagger Editor** – OpenAPI specification and stub generation  
- **Bruno** – testing the REST API endpoints 
- **Node.js & Express.js** – implementing the REST service
