Backend
Technologies Used
Node.js: JavaScript runtime.
Express.js: Backend framework.
MongoDB: Database for storing user and submission data.
Mongoose: MongoDB ODM for data modeling.
JWT: Authentication using JSON Web Tokens.
bcrypt: Password hashing.
Installation and Setup
Navigate to the backend folder:
bash
Copy code
cd backend
Install dependencies:
bash
Copy code
npm install
Create a .env file in the backend folder with the following variables:
env
Copy code
PORT=4000
MONGO_URL=mongodb://localhost:27017/interviewDatabase
JWT_SECRET="your_jwt_secret_key"
Start the backend server:
bash
Copy code
npm start
The backend will run at http://localhost:4000.
API Endpoints
Auth Routes

POST /auth/register: Register a new user.
POST /auth/login: Login and retrieve a token.
Submission Routes

POST /submissions: Create a new submission.
GET /submissions: Retrieve all submissions.
GET /submissions/:id: Retrieve a specific submission by ID.
PUT /submissions/:id: Update a submission by ID.
DELETE /submissions/:id: Delete a submission by ID.
Running Tests
Install Jest and Supertest if not already installed:
bash
Copy code
npm install --save-dev jest supertest
Run the tests:
bash
Copy code
npm test
Frontend
Technologies Used
React.js: Frontend framework.
Vite: Build tool for faster development.
Axios: For making API requests.
CSS: Custom styles for the application.
Installation and Setup
Navigate to the frontend folder:
bash
Copy code
cd frontend
Install dependencies:
bash
Copy code
npm install
Create a .env file in the frontend folder with the following variable:
env
Copy code
VITE_API_BASE_URL=http://localhost:4000
Start the development server:
bash
Copy code
npm run dev
The frontend will run at http://localhost:5173.
Features
Authentication
Register and login functionality with password hashing.
JWT-based token authentication.
CRUD Operations
Create: Users can submit interview experiences.
Read: All users can view experiences in a dashboard.
Update: Users can edit their submissions.
Delete: Users can delete their submissions.
Responsive Design
Mobile-friendly layout with custom CSS.
How to Run the Project
Start the backend server:
bash
Copy code
cd backend
npm start
Start the frontend server:
bash
Copy code
cd frontend
npm run dev
Open your browser and navigate to http://localhost:5173.
Folder Structure
Backend
config: Database configuration.
controllers: Handles business logic for routes.
middleware: Authentication and error handling.
models: Mongoose schemas for User and Submission.
routes: API route definitions.
Frontend
components: Reusable UI components.
context: Context for managing state (e.g., AuthContext, SubmissionContext).
pages: Main pages like Dashboard and LandingPage.
utils: Helper functions (e.g., API calls).
styles: CSS files for styling.
