# Contributing to Travel Book Backend

Welcome to Travel Book Backend! We're excited to have you contribute to our API service. This guide will help you get started with the development environment and contribution process.

## Table of Contents

- [Quick Start Guide](#quick-start-guide)
- [Development Guidelines](#development-guidelines)
- [Testing Requirements](#testing-requirements)
- [Submitting Contributions](#submitting-contributions)
- [Project Architecture](#project-architecture)

---

## Quick Start Guide

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Git for version control
- MongoDB (local or MongoDB Atlas)
- VS Code or your preferred code editor

### Setup Instructions

#### 1. Fork and Clone Repository

Fork the [Travel Book Backend repository](https://github.com/Sahilll94/Travel-Book-Backend) to your GitHub account.

```bash
# Clone your forked repository
git clone https://github.com/YOUR_GITHUB_ID/Travel-Book-Backend.git
cd Travel-Book-Backend

# Add upstream remote for syncing
git remote add upstream https://github.com/Sahilll94/Travel-Book-Backend.git
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Environment Setup

```bash
# Copy the example environment file
cp .env.example .env
```

Edit `.env` with your configuration:

```
MONGODB_URI=mongodb://localhost:27017/travel-book
# or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/travel-book

JWT_SECRET=your_jwt_secret_key_here

# Firebase Admin Credentials
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_email@firebase.gserviceaccount.com

# Cloudinary (Image Storage)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Service (Nodemailer)
EMAIL_SERVICE_USER=your_email@gmail.com
EMAIL_SERVICE_PASSWORD=your_app_password

# Google Generative AI (Chatbot)
GOOGLE_GENERATIVE_AI_KEY=your_generative_ai_key

PORT=5000
NODE_ENV=development
```

#### 4. Start Development Server

```bash
npm run dev
```

The API will be available at `http://localhost:5000`

### Verify Setup

Test your setup with a simple request:

```bash
curl http://localhost:5000/api/health
```

---

## Development Guidelines

### Code Style

**File Naming:**
- Use camelCase for JavaScript files
- Use descriptive names that indicate purpose
- Example: `travelStory.model.js`, `chatbot.service.js`

**Variable Naming:**
- camelCase for variables and functions
- PascalCase for class/model names
- UPPER_SNAKE_CASE for constants

**Structure:**
- Keep functions focused and single-purpose
- Add comments for complex logic
- Organize imports at the top of files
- Use proper error handling

**Example:**

```javascript
// Good
const calculateDistance = (lat1, lat2, lon1, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};
```

### Git Workflow

1. **Create a Feature Branch:**

```bash
git checkout -b feature/short-description
# or for bug fixes:
git checkout -b bugfix/issue-number
```

2. **Make Atomic Commits:**

```bash
git commit -m "type: Brief description

Detailed explanation if needed.
Closes #123"
```

Commit types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

3. **Keep Branch Updated:**

```bash
git fetch upstream
git rebase upstream/main
```

4. **Push to Your Fork:**

```bash
git push origin feature/short-description
```

---

## Testing Requirements

Before submitting a pull request, test the following:

### 1. Authentication Flow

```bash
# Test user registration
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Test login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### 2. CRUD Operations

Test all Create, Read, Update, Delete operations for affected models:

```bash
# Create
curl -X POST http://localhost:5000/api/stories \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"My Story","description":"..."}'

# Read
curl http://localhost:5000/api/stories/STORY_ID

# Update
curl -X PUT http://localhost:5000/api/stories/STORY_ID \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"title":"Updated Title"}'

# Delete
curl -X DELETE http://localhost:5000/api/stories/STORY_ID \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### 3. Error Handling

- Verify proper HTTP status codes (200, 201, 400, 401, 404, 500)
- Check error messages are informative and consistent
- Test validation with invalid inputs
- Verify sensitive data is not exposed in errors

### 4. Database

- Verify data is persisted correctly
- Check relationships between models
- Test database queries for performance
- Verify no data corruption occurs

### 5. External Services

If integrating with external services:
- Test with real API keys locally
- Verify error handling for service failures
- Test timeout handling
- Document rate limits if applicable

---

## Submitting Contributions

### Before You Start

1. Check [Issues](https://github.com/Sahilll94/Travel-Book-Backend/issues) to see if someone is already working on it
2. If the feature/fix doesn't have an issue, create one first
3. Discuss your approach in the issue
4. Wait for approval before starting major work

### Creating a Pull Request

1. Push your branch to your fork
2. Go to the original repository on GitHub
3. Click "New Pull Request"
4. Select your branch and fill out the PR template

**PR Template:**

```markdown
## Description
Briefly describe what this PR does.

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Documentation update

## Related Issues
Closes #(issue number)

## Testing
Describe the testing you performed:
- [ ] Tested locally with Node.js v14+
- [ ] All existing endpoints still work
- [ ] New endpoint(s) tested with various inputs
- [ ] Error scenarios tested
- [ ] Database operations verified

## Environment Variables
List any new environment variables required in .env.example

## Checklist
- [ ] My code follows the code style of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented complex logic
- [ ] I have updated documentation if needed
- [ ] No new warnings are generated
- [ ] No sensitive data is hardcoded
```

### Review Process

1. Maintainers will review your PR
2. They may request changes or clarifications
3. Make requested changes and push again
4. Once approved, your PR will be merged
5. Your contribution is recognized!

---

## Project Architecture

### Directory Structure

```
Backend/
├── models/                    # Mongoose schemas
│   ├── user.model.js         # User schema and authentication
│   ├── travelStory.model.js  # Travel story schema
│   └── contributor.model.js  # Contributor data schema
├── services/                 # Business logic layer
│   └── chatbot.service.js    # AI chatbot integration
├── webhook/                  # Webhook handlers
│   └── webhook.js
├── index.js                  # Express app setup and routes
├── multer.js                 # File upload middleware
├── utilities.js              # Helper functions
├── firebase-admin.js         # Firebase configuration
├── sendLoginNotification.js  # Email notifications
├── package.json              # Dependencies
├── .env.example              # Environment variables template
└── README.md                 # Documentation
```

### API Endpoint Structure

```javascript
// Standard endpoint pattern
app.METHOD('/api/resource/:id', authenticateToken, async (req, res) => {
  try {
    // Validate input
    if (!req.body.field) {
      return res.status(400).json({ 
        success: false, 
        message: 'Field is required' 
      });
    }
    
    // Process request
    const result = await Model.findByIdAndUpdate(req.params.id, req.body);
    
    // Return response
    res.status(200).json({ 
      success: true, 
      data: result 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});
```

### Adding New Features

#### Adding an API Endpoint

1. **Define the Route** in `index.js`:

```javascript
app.post('/api/newfeature', authenticateToken, async (req, res) => {
  // Implementation
});
```

2. **Create a Model** in `models/` if needed
3. **Add Business Logic** in `services/` or `utilities.js`
4. **Document** with comments and in README
5. **Test** thoroughly

#### Adding a New Service

1. Create `services/myfeature.service.js`
2. Export functions that handle external API calls
3. Include error handling
4. Document in README

```javascript
// services/myfeature.service.js
const myFeatureService = {
  async fetchData(params) {
    try {
      // Implementation
      return data;
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }
};

module.exports = myFeatureService;
```

---

## Frontend & Backend Coordination

- **Separate Repositories:** Frontend and Backend are cloned separately
- **API Base URL:** Use `http://localhost:5000` for local development
- **API Documentation:** Keep endpoints documented in code comments
- **Response Format:** Maintain consistent JSON response structure

---

## Troubleshooting

### Common Issues

**MongoDB Connection Error**
```
Check if MongoDB is running locally or verify MongoDB Atlas connection string
```

**Port Already in Use**
```bash
# Change port in .env file
PORT=3001
```

**Firebase Credential Error**
```
Verify FIREBASE_PRIVATE_KEY includes newlines properly in .env
```

**Nodemon Not Reloading**
```bash
# Reinstall nodemon
npm install --save-dev nodemon@latest
```

### Getting Help

- Open an issue with detailed description
- Check existing issues for solutions
- Mention the error message and steps to reproduce
- Include your Node.js version: `node --version`

---

## Recognition

Your contributions are valued! Once your PR is merged, you'll be added to the contributors list and recognized in the project.

---

## Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Travel Book API Docs](https://travel-book-api-docs.hashnode.dev/travel-book-api-documentation)

---

Thank you for contributing to Travel Book Backend! 🚀
