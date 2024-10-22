# The Design Flow

The Design Flow is a weekly newsletter platform for designers, offering curated design tools, resources, and insights. This project is built using React, TypeScript, and Tailwind CSS for the frontend, with a Node.js backend and MongoDB database.

## Project Structure

```
/home/project/
├── client/                    # Frontend React application
│   ├── dist/                  # Production build output
│   ├── public/                # Public assets
│   └── src/                   # Source files
│       ├── components/        # Reusable React components
│       ├── contexts/          # React contexts (e.g., UserContext)
│       ├── pages/             # Page components
│       ├── App.tsx            # Main application component
│       ├── index.css          # Global styles
│       └── main.tsx           # Application entry point
├── server/                    # Backend Node.js application
│   ├── config/                # Configuration files
│   ├── controllers/           # Request handlers
│   ├── models/                # Database models
│   ├── routes/                # API routes
│   ├── utils/                 # Utility functions
│   └── server.js              # Main server file
├── .gitignore                 # Git ignore file
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation (this file)
```

## Features

- User authentication and authorization
- Subscription management (Free, Basic, Premium plans)
- Blog post creation and management
- Design tools database
- Community discussions
- Admin dashboard for content management

## Technologies Used

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Axios for API requests
- Lucide React for icons

### Backend
- Node.js with Express.js
- MongoDB for database
- Mongoose as ODM
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing

### Development Tools
- Vite as the build tool
- ESLint for code linting
- Prettier for code formatting

## Getting Started

1. Clone the repository
   ```
   git clone https://github.com/your-username/the-design-flow.git
   cd the-design-flow
   ```

2. Install dependencies for both frontend and backend
   ```
   cd client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables
   - Create a `.env` file in the `server` directory
   - Add the following variables:
     ```
     PORT=3001
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. Start the development servers
   - For the frontend (in the `client` directory):
     ```
     npm run dev
     ```
   - For the backend (in the `server` directory):
     ```
     npm run dev
     ```

5. Open your browser and navigate to `http://localhost:5173` to view the application

## Backend Setup

To set up the backend and database:

1. Install MongoDB on your local machine or use a cloud service like MongoDB Atlas
2. Create a new database for the project
3. Update the `MONGODB_URI` in your `.env` file with the connection string
4. Run database migrations and seed initial data:
   ```
   cd server
   npm run db:migrate
   npm run db:seed
   ```

## API Endpoints

- `/api/auth` - Authentication routes (login, register, logout)
- `/api/users` - User management
- `/api/subscriptions` - Subscription management
- `/api/blogs` - Blog post CRUD operations
- `/api/tools` - Design tools database
- `/api/discussions` - Community discussions

## Deployment

The project is configured for easy deployment:

- Frontend: Deploy the `client/dist` directory to a static hosting service like Netlify or Vercel
- Backend: Deploy the `server` directory to a Node.js hosting platform like Heroku or DigitalOcean

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/your-username/the-design-flow](https://github.com/your-username/the-design-flow)