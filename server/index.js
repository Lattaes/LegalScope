import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./Router/index.js";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";

dotenv.config();

const app = express();

// Configure CORS
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // If you need to send cookies
    optionsSuccessStatus: 204,
    allowedHeaders: ['Authorization', 'Content-Type']
  };
  

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Preflight request handling
  

// Apply routes after CORS
app.use(route);

// Root route
app.get('/', (req, res) => {
    res.send('Hello');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server listening on http://127.0.0.1:${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Connection failed: ', error);
    });