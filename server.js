// Import the Express library
const express = require('express');

// Initialize the app
const app = express();

// Define the port the server will run on
const PORT = 3000;

// Helper function to get the current day name
function getDayName() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return days[today.getDay()];
}

// API endpoint: GET /assistant/greet
app.get('/assistant/greet', (req, res) => {
    // Get the name from the query parameter
    const name = req.query.name;

    // If no name is provided, send an error message
    if (!name) {
        return res.status(400).send({ message: 'Please provide your name as a query parameter (e.g., ?name=John).' });
    }

    // Generate a personalized greeting
    const greeting = `Hello, ${name}!`;

    // Get the current day of the week
    const day = getDayName();

    // Create a cheerful message
    const message =` Happy ${day}! Hope you have a fantastic day!`;

    // Send the response as JSON
    res.send({
        greeting,
        message,
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});