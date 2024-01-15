# Josh Daigle Take-Home Assessment

This what I developed as part of a take-home assessment given by Elmer's Manufacturing.
**Features**:
This is an example user interface for the backend API, currently servicing 2 endpoints. This project has been
structured in a way to be easily scalable, as adding support for another API endpoint is as simple 
as adding a new endpoint to the list of endpoints in the API Gateway store, and then adding a new input 
form for it. The datatable is dynamic and will automatically shape its rows and columns to fit new data coming 
in from a different endpoint. All form input fields are cached in local storage and persist on page reload. 

**Possible Improvements**:
 - More extensive unit tests for components
 - Unit tests for top-level App and views
 - SCSS CSS pre-processing to limit CSS class re-use
 - Refactor some internal component logic into re-usable composable files.

 
**NOTE: Component unit tests are currently limited by primevue components**: 
https://github.com/primefaces/primevue/issues/3933

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.
- Docker Desktop installed and running on your machine.

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

4. **Run Docker Container of this application:**
   
   Note: Make sure back-end API is running.

   From root directory:
   ```bash
   cd front-end
   docker compose up
   ```

   You can view the docker container on ```localhost:8080```, despite what it prints in the terminal 

### Attribution

**Background Image**:
Image by Freepik: https://www.freepik.com/free-vector/futuristic-white-technology-background_6402687.htm#query=service%20background&position=0&from_view=keyword&track=ais&uuid=ace85877-e292-47c8-a218-fe7fb065c290'
