# Josh Daigle Take-Home Assessment

This what I developed as part of a take-home assessment given by Elmer's Manufacturing. 

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installing

1. **Fork the Repository:**

   Click on the "Fork" button at the top right of this repository to create your copy.

2. **Clone the Repository:**

   ```bash
   git clone https://github.com/joshdaigledev/[REPOSITORY NAME].git
   ```

3. **Navigate to the Front-End Project Directory:**

   ```bash
   cd [DIRECTORY_NAME]/front-end
   ```

4. **Install Dependencies:**

   ```bash
   npm install
   ```

### Running the Project

1. **Start the Frontend Development Server:**

   From root directory:
   ```bash
   cd front-end
   npm run dev
   ```

   This will start the development server, and you can view the project at `http://localhost:8000` in your browser.

2. **Start the Backend API:**
   From root directory:
   ```bash
   cd back-end
   docker compose up
   ```

3. **Run Unit Tests with [Vitest](https://vitest.dev/):**

   ```bash
   npm run test:unit
   ```

   This will run all the vitest unit tests. Make sure the backend is running for all tests to pass. 

## TO-DO:

UNIT TESTS: 

Component unit tests are currently limited by primevue components: 
https://github.com/primefaces/primevue/issues/3933


DOCKER AUTOMATION + documentation on the process