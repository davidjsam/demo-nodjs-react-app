#!/bin/bash

# Create directory structure
mkdir -p client/public
mkdir -p client/src
mkdir -p server/src/routes
mkdir -p server/src/controllers

# Create empty files
touch client/public/index.html
touch client/src/index.js
touch client/src/App.js
touch server/src/app.js
touch server/src/routes/api.js
touch server/src/controllers/healthController.js
touch .env
touch jsconfig.json

# Initialize git repository
git init

# Create .gitignore
cat > .gitignore << EOL
node_modules/
.env
.DS_Store
build/
coverage/
EOL

# Initialize npm project
npm init -y

# Verify structure
echo "Verifying directory structure..."
if [ -d "client" ] && [ -d "server" ] && [ -f "package.json" ]; then
    echo "✅ Project structure created successfully"
else
    echo "❌ Error: Project structure creation failed"
    exit 1
fi