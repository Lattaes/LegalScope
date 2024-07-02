import express, { json } from 'express';
import { connect } from 'mongoose';
const app = express();

app.use(json());
app.use('/v1/auth', Auth);

// Models
import { create, find, findById } from '../models/peraturan.model.js';
import { create as _create, find as _find } from '../models/user.model.js';
import { create as __create, find as __find, deleteOne } from '../models/message.model.js';

// auth
import Auth from './auth.js';

// Root route
app.get('/', (req, res) => {
    res.send('Hello');
});

// Add Peraturan
app.post('/api/peraturan', async (req, res) => {
    try {
        const peraturan = await create(req.body);
        res.status(200).json(peraturan);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
});

// Get All Data
app.get('/api/peraturan', async (req, res) => {
    try {
        const peraturan = await find({});
        res.status(200).json(peraturan);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
});

// Get Peraturan Based on ID
app.get('/api/peraturan/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const peraturan = await findById(id);
        res.status(200).json(peraturan);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
});

// Add new user
app.post('/api/user', async (req, res) => {
    try {
        const { id, username, email, password } = req.body;
        const user = await _create({ id, username, email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get All Users
app.get('/api/users', async (req, res) => {
    try {
        const users = await _find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Send prompt
app.post('/api/messages', async (req, res) => {
    try {
        const { userId, content } = req.body;
        const message = await __create({ sender: userId, content });

        // Handle the chatbot processing and response here
        const response = await processMessage(content); // Replace with our chatbot processing logic
        const botMessage = await __create({ sender: 'bot', receiver: userId, content: response });

        res.status(201).json(botMessage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Get all messages 
app.get('/api/messages/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const messages = await __find({
            $or: [
                { sender: userId, receiver: 'bot' },
                { sender: 'bot', receiver: userId }
            ]
        }).sort({ timestamp: 1 }); // Sort messages by timestamp
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete message
app.delete('/api/messages/:id'), async (req, res) => {
    try{
        const { userId, content } = req.params;
        const message = await deleteOne({_id: req.params.id})
        res.status(204).send()
    }catch{
        res.status(404).send({error: "Chat does not exist!"})
    }
}




// Connect to MongoDB
connect('mongodb://legalscope:1aqmOffieW80dCeb@ac-dkor4y4-shard-00-00.ygg9klj.mongodb.net:27017,ac-dkor4y4-shard-00-01.ygg9klj.mongodb.net:27017,ac-dkor4y4-shard-00-02.ygg9klj.mongodb.net:27017/?ssl=true&replicaSet=atlas-4911m0-shard-0&authSource=admin&retryWrites=true&w=majority&appName=LegalScopeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server listening on http://127.0.0.1:3000');
    });
})
.catch((error) => {
    console.log('Connection failed: ', error);
});
