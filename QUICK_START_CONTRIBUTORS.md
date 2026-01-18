# Backend Contributor Quick Reference

## Quick Setup (5 minutes)

```bash
# 1. Clone your fork
git clone https://github.com/YOUR_ID/Travel-Book-Backend.git
cd Travel-Book-Backend

# 2. Add upstream
git remote add upstream https://github.com/Sahilll94/Travel-Book-Backend.git

# 3. Install & setup
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and API keys

# 4. Start developing
npm run dev
```

## Useful Commands

```bash
# Development
npm run dev              # Start with hot reload
npm start               # Start production mode

# Git
git checkout -b feature/name        # Create feature branch
git fetch upstream                   # Get latest changes
git rebase upstream/main             # Update your branch
git push origin feature/name         # Push to your fork

# Testing
curl http://localhost:5000/api/health  # Test connection

# Clean up
npm ci                  # Clean install dependencies
rm -rf node_modules     # Remove node_modules (if needed)
```

## Environment Variables Needed

| Variable | Purpose | Example |
|----------|---------|---------|
| `MONGODB_URI` | Database connection | `mongodb+srv://...` |
| `JWT_SECRET` | Token signing | Any random string |
| `FIREBASE_PROJECT_ID` | Firebase auth | Project ID |
| `CLOUDINARY_NAME` | Image storage | Your account |
| `EMAIL_SERVICE_USER` | Email sender | your@gmail.com |
| `GOOGLE_GENERATIVE_AI_KEY` | Chatbot AI | API key |
| `PORT` | Server port | 5000 |

## File Structure Quick Guide

```
Backend/
├── index.js              ← Main routes and API endpoints
├── models/               ← Database schemas (User, Story, etc.)
├── services/             ← Business logic (Chatbot, etc.)
├── utilities.js          ← Helper functions
├── multer.js             ← File upload config
└── firebase-admin.js     ← Authentication setup
```

## Common Tasks

### Creating a New Endpoint

1. Open `index.js`
2. Add route: `app.post('/api/endpoint', handler)`
3. Test with curl
4. Document with comments

### Working with Database

```javascript
// Import model
const TravelStory = require('./models/travelStory.model.js');

// Create
const story = await TravelStory.create(data);

// Read
const story = await TravelStory.findById(id);

// Update
await TravelStory.findByIdAndUpdate(id, updates);

// Delete
await TravelStory.findByIdAndDelete(id);
```

### Testing an Endpoint

```bash
# GET request
curl http://localhost:5000/api/stories

# POST with data
curl -X POST http://localhost:5000/api/stories \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"title":"Story","description":"..."}'
```

## Before Submitting PR

- [ ] Code follows existing style
- [ ] Tested locally (npm run dev works)
- [ ] No console errors
- [ ] Related issue is referenced
- [ ] Sensitive data NOT in code (use .env)
- [ ] API tested with curl or Postman

## PR Naming Convention

```
feat: Add user profile endpoint
fix: Resolve MongoDB connection timeout
docs: Update API documentation
refactor: Improve error handling
test: Add tests for auth service
```

## Stuck? Here's Help

| Issue | Solution |
|-------|----------|
| MongoDB connection error | Check .env MONGODB_URI and if MongoDB is running |
| Port 5000 in use | Change PORT in .env to 3001 or kill process |
| Nodemon not reloading | Restart with `npm run dev` |
| Module not found | Run `npm install` and check import paths |
| Firebase error | Verify all FIREBASE_* variables in .env |

## Sync Your Fork

```bash
git fetch upstream
git checkout main
git rebase upstream/main
git push origin main
```

## Resources

- 📚 [Full Contributing Guide](./CONTRIBUTING.md)
- 📋 [Code of Conduct](./CODE_OF_CONDUCT.md)
- 📖 [API Documentation](https://travel-book-api-docs.hashnode.dev/travel-book-api-documentation)
- 💬 [GitHub Issues](https://github.com/Sahilll94/Travel-Book-Backend/issues)

---

**Happy Contributing! 🚀**
