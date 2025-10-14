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

## Tools Used
- **Visual Studio Code** – development and schema validation  
- **Swagger Editor** – OpenAPI specification and stub generation  
- **Bruno** – testing the REST API endpoints 
- **Node.js & Express.js** – implementing the REST service
