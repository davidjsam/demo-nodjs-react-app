const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

// Serve static files and handle client routing
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  // Serve static files from React build
  app.use(express.static(path.join(__dirname, '../../client/build')));
  
  // Handle client routing - return all requests to the React app
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;