
Prompt 1:

"Scaffold a new React project using Create React App for the One-Page React SPA. Initialize the repository, ensure the project builds, and include a simple initial Jest test that checks if the App component renders without crashing. Provide the code for the initial test file and instructions on how to run it."

Prompt 2:

"Create a new NavBar component in the /src/components directory. The NavBar should render a navigation bar with three placeholder links: 'Home', 'About', and 'Contact'. Also, create a corresponding CSS Module (NavBar.module.css) with minimal styling. Write unit tests using React Testing Library to verify that the NavBar renders correctly with all three links. Provide the component code, the styling file, and the test file."

Prompt 3:

"Create a new Footer component in the /src/components directory. The Footer should display placeholder text: '© 2025 Demo App'. Also, create a corresponding CSS Module (Footer.module.css) with minimal styling. Write unit tests using React Testing Library to verify that the Footer component displays the correct text. Provide the component code, the styling file, and the test file."

Prompt 4:

"Update the App component to include the NavBar at the top, a centered 'Welcome to the demo' message in the main content, and the Footer at the bottom. Ensure that CSS Modules are used for any App-specific styling (e.g., App.module.css). Write an integration test to verify that the App renders the NavBar, the welcome message, and the Footer correctly. Provide the updated App component code, the App.module.css file, and the test file."

Prompt 5:

"Enhance the styling of the application by updating the CSS Modules to make the layout responsive. Modify NavBar.module.css, Footer.module.css, and App.module.css to include media queries so that the navigation bar, content, and footer display correctly on mobile, tablet, and desktop sizes. Ensure that any changes are covered by integration tests or snapshot tests where applicable. Provide the updated CSS files and instructions on how to manually verify responsiveness."

Prompt 6:

"Create a GitHub Actions workflow file (.github/workflows/deploy.yml) for the project. The workflow should run on pushes to the main branch, set up Node.js 20, install npm dependencies, run tests, build the React app, and deploy to Azure App Service using the azure/webapps-deploy@v2 action. Include placeholders for the Azure App Service name and the GitHub secret for AZURE_WEBAPP_PUBLISH_PROFILE. Provide the complete YAML file and brief instructions on how to add the secret in GitHub."

Prompt 7:

"Consolidate all the previous steps by reviewing the integration between frontend components and the GitHub Actions workflow. Ensure that the repository contains unit tests for NavBar, Footer, and App, integration tests for the assembled page, and responsive behavior tests (if applicable). Describe the steps to perform a final manual end-to-end test including testing the deployment URL after a push to main on GitHub. Provide a summary checklist and any final integration code if needed."