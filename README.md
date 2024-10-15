# Project Management Backend

## Overview

This is a backend API built with Node.js, Express, and MongoDB for managing projects and payments. It provides essential CRUD functionalities, user authentication, and bulk import/export capabilities. The project also includes a simulated payment handling system.

## Features

1. **JWT-based User Authentication**: 
   - Register and login with a secure token-based authentication system.
   
2. **Project Management**: 
   - Create, read, update, and delete projects.
   - Bulk import/export projects using CSV files.

3. **Payment Management**: 
   - Simulate a payment for projects.
   - Mark payments as paid.

4. **Bulk Export/Import**: 
   - Export all project data to a CSV file.
   - Import project data from a CSV file.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or accessible via URI)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/project-management-backend.git
   cd project-management-backend

   Install dependencies:

   npm install

   
<p>Set up environment variables:</p>
<p>Create a <code>.env</code> file in the root directory and add the following:</p>
PORT=5000</br>
MONGO_URI=mongodb://localhost:27017/project_management</br>
JWT_SECRET=your_secret_key<br/></br>

<p>Start the server:</p>
npm start


you can run this file using  <mark> nodemon index.js</mark>

### Authentication Endpoints

| Method | Route        | Description                  |
|--------|--------------|------------------------------|
| POST   | /register     | Register a new user          |
| POST   | /login        | Log in as an existing user   |

##
### Project Endpoints

| Method | Route            | Description                    |
|--------|------------------|--------------------------------|
| POST   | /project/           | Create a new project        |
| GET    | /project/           | Fetch all project           |
| PUT    | /project/:id        | Update project by id        |
| DELETE |/project/:id         | Delete project project by id |
| GET    |/project/export      | Get csv file                |
| POST   |/project/import      | Post csv file               |

##
### Payment Endpoints

| Method | Route            | Description                    |
|--------|------------------|--------------------------------|
| POST   | /payment/mark-paid| mark-paid by using id        |


## ScreenShorts

![register-My-Workspace](https://github.com/user-attachments/assets/220b7028-e510-4f94-95ef-a6909a5a311b)
![login-My-Workspace (1)](https://github.com/user-attachments/assets/8f12f0a4-ce38-489c-8b31-2bcb99272404)
![New-Request-My-Workspace](https://github.com/user-attachments/assets/3603315d-f149-476e-b9db-260db029a476)
![get-My-Workspace](https://github.com/user-attachments/assets/7327b9b6-01cd-4411-baf3-07b006964171)
![update-My-Workspace (1)](https://github.com/user-attachments/assets/1ca0d884-c375-4cce-b825-70df5c48ca69)
![delete-My-Workspace (1)](https://github.com/user-attachments/assets/5a231d21-55fa-4f47-ac10-b104c77d3013)
![exportCsv-My-Workspace](https://github.com/user-attachments/assets/b0d6ee46-da0e-49b7-b864-90b42cf2ae5b)
![pay-My-Workspace](https://github.com/user-attachments/assets/d95bd6c3-7f4e-4cdd-8029-ab7dc8a5cfae)

