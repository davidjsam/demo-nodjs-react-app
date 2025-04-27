# Step-by-Step Prompts for Breaking Grounds Network SPA

This document contains a series of iterative prompts that a code-generation LLM can use to implement the project in a test-driven, incremental manner. Each prompt builds on previous prompts and is designed to ensure early testing, integration, and best practices.

---

```text
Prompt 1: Project Structure & Initialization
------------------------------------------------
Step 1: Create the directory structure and initialize the monorepo.
• Create the following structure:
    / (root)
      ├── client/
      │    ├── public/
      │    │    └── index.html        (empty for now)
      │    └── src/
      │         ├── index.js         (bootstrap file)
      │         └── App.js           (main component)
      ├── server/
      │    └── src/
      │         ├── app.js           (Express app entry)
      │         ├── routes/
      │         │      └── api.js      (API routing)
      │         └── controllers/
      │                └── healthController.js  (health check)
      ├── package.json               (root file to manage both)
      ├── .env                       (environment vars)
      └── jsconfig.json              (for path resolution for client)
Step 2: Initialize a git repository and run `npm init` at the root.
Ensure the file paths are properly created.
Implement this step and run tests to verify the directories exist.
```

---

```text
Prompt 2: Root-Level Package Configuration
------------------------------------------------
Step 1: Create a root-level package.json with these scripts:
  - "start": "node server/src/app.js"
  - "server": "nodemon server/src/app.js"
  - "client": "cd client && react-scripts start"
  - "dev": "concurrently \"npm run server\" \"npm run client\""
  - "build": "cd client && react-scripts build"
  - "test": "npm run test:client && npm run test:server"
  - "test:client": "cd client && react-scripts test --watchAll=false"
  - "test:server": "cd server && jest"
Step 2: Add necessary dependencies (React, Express, cors, react-scripts, concurrently, nodemon) as well as devDependencies (jest).
Step 3: Create a basic .env (with placeholders for PORT, NODE_ENV, etc.) and a simple jsconfig.json for client path mapping.
Make sure the package.json validates and `npm install` runs without errors.
```

---

```text
Prompt 3: Client Implementation – HTML and Basic React App
------------------------------------------------
Step 1: In the client/public directory, create an index.html file with a basic HTML5 boilerplate.
   - Ensure it contains a <div id="root"></div> for React.
Step 2: In the client/src directory, create index.js to bootstrap the React app using ReactDOM.
Step 3: Create App.js that:
   - Renders a header (with placeholder text, e.g., "Header Placeholder").
   - Renders the welcome message: "Welcome to Breaking Grounds Network" styled with vibrant colors.
   - Renders a footer (with placeholder text, e.g., "Footer Placeholder") which is fixed to the bottom.
Step 4: Write a unit test in client/src/__tests__/App.test.js using Jest and React Testing Library to ensure the welcome message appears.
Ensure basic rendering works and run the test suite to verify the setup.
```

---

```text
Prompt 4: Server Implementation – Express Setup & Health Check
------------------------------------------------
Step 1: In server/src/app.js, set up a basic Express app that:
   - Imports and uses middleware: cors and helmet.
   - Serves static files from client/build (later, after build).
   - Uses JSON body parsing.
   - Defines a route prefix for the API (e.g., "/api").
   - Incorporates an error-handling middleware.
Step 2: Create a route file in server/src/routes/api.js that:
   - Imports the health controller.
   - Defines a GET /health endpoint.
Step 3: Create the controller in server/src/controllers/healthController.js that:
   - Returns a JSON object (e.g., { status: "ok" }).
Step 4: Write a unit test in server/__tests__/health.test.js using Jest to test that GET /api/health returns the correct JSON.
Test the endpoint by spinning up the Express app in test mode.
Make sure the test suite passes.
```

---

```text
Prompt 5: Integrating Client Build with Express Server
------------------------------------------------
Step 1: Modify server/src/app.js so that in production (NODE_ENV === 'production'):
   - It serves the static files from client/build.
   - All non-API routes return client/build/index.html (to support client routing).
Step 2: Verify by building the client via "npm run build", then starting the server and confirming that navigating the site serves the React app.
Step 3: Write a quick integration test (or manually test) to ensure the static files are served.
Confirm the integration and proceed.
```

---

```text
Prompt 6: CI/CD Pipeline and Automated Testing Integration
------------------------------------------------
Step 1: Draft an Azure Pipelines YAML file (at the root, e.g., azure-pipelines.yml) that:
   - Installs Node dependencies.
   - Runs both client and server tests.
   - Builds the client (npm run build).
   - Deploys the combined Node.js app to Azure App Service.
Step 2: Ensure that the pipeline fails if any tests fail, blocking deployment.
Step 3: Provide instructions for setting up the pipeline on GitHub.
Wire all steps together and simulate a pipeline run (locally or via a dry-run).
```

---

```text
Prompt 7: Final Wiring & Documentation
------------------------------------------------
Step 1: Update the root-level README.md to include:
   - Setup instructions (how to run dev mode, tests, build, and deploy).
   - Description of file structure, CI/CD usage, and environment variables.
Step 2: Confirm all previous steps are now documented, integrated, and that the system works end to end.
Step 3: Run full test suites (client and server) and a manual end-to-end test to ensure integration.
Finish with a final integration prompt that wires together all components.
```

---

# End of Plan

This blueprint provides a detailed, step-by-step plan for building the Breaking Grounds Network SPA. Each prompt is designed to be an incremental, test-driven step that builds upon the previous work, ensuring a robust and integrated implementation ready for deployment.