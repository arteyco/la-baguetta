document.getElementById('chatBtn').addEventListener('click', function() {
    const message = document.getElementById('chatInput').value;
    // This is where you would send the message to your backend, which would then interact with the ChatGPT API
    // For demonstration purposes, we'll just log the message
    console.log('Sending message to ChatGPT:', message);
    // Simulate a response
    setTimeout(() => {
        const response = "This is a simulated response from ChatGPT.";
        document.getElementById('chatLog').value += `You: ${message}\nAI: ${response}\n`;
    }, 2000);
});
