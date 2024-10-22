# The Design Flow

The Design Flow is a weekly newsletter platform for designers, offering curated design tools, resources, and insights. This project is built using React with TypeScript and Tailwind CSS for the frontend, and Node.js with Express and MongoDB for the backend.

## Project Structure

```
/home/project/
├── client/                    # Frontend React application
│   ├── public/                # Public assets
│   ├── src/                   # Source files
│   │   ├── components/        # Reusable React components
│   │   ├── contexts/          # React contexts (e.g., UserContext)
│   │   ├── pages/             # Page components
│   │   ├── App.tsx            # Main application component
│   │   ├── index.css          # Global styles
│   │   └── main.tsx           # Application entry point
│   ├── index.html             # HTML entry point
│   ├── package.json           # Frontend dependencies and scripts
│   ├── tsconfig.json          # TypeScript configuration
│   ├── vite.config.ts         # Vite configuration
│   └── tailwind.config.js     # Tailwind CSS configuration
├── server/                    # Backend Node.js application
│   ├── src/
│   │   ├── controllers/       # Request handlers
│   │   ├── models/            # Database models
│   │   ├── routes/            # API routes
│   │   ├── middleware/        # Custom middleware
│   │   └── server.js          # Main server file
│   ├── package.json           # Backend dependencies and scripts
│   └── .env                   # Environment variables (not in version control)
├── package.json               # Root package.json for running both frontend and backend
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
- Vite as the build tool

### Backend
- Node.js with Express.js
- MongoDB for database
- Mongoose as ODM
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing

## Getting Started

1. Clone the repository
   ```
   git clone https://github.com/your-username/the-design-flow.git
   cd the-design-flow
   ```

2. Install dependencies for both frontend and backend
   ```
   npm install
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
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` to view the application

## API Endpoints

- `/api/auth` - Authentication routes (login, register)
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