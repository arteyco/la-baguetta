// Import Langchain4j library (assuming you have it installed)
// Example import - adjust based on the library's documentation
const { Langchain4j } = require('langchain4j');

async function sendMessage() {
    const message = document.getElementById("chat-input").value;
    document.getElementById("chat-input").value = ""; // Clear input

    // Display user's message
    displayMessage("user", message);

    try {
        // Initialize Langchain4j (replace with your actual configuration)
        const langchain = new Langchain4j({
            // ... your Langchain4j configuration ...
        });

        // Load the day4.json data
        const jsonData = await fetch('day4.json').then(res => res.json());

        // Pass the data and message to Langchain4j for processing
        const response = await langchain.process(jsonData, message); 

        displayMessage("ai", response);

    } catch (error) {
        console.error("Error processing message:", error);
        displayMessage("ai", "Sorry, there was an error processing your request.");
    }
}

function displayMessage(sender, message) {
    const chatHistory = document.getElementById("chat-history");
    const messageElement = document.createElement("p");
    messageElement.textContent = `${sender}: ${message}`;
    chatHistory.appendChild(messageElement);
}
