document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('productTable');
    table.addEventListener('input', calculateTotal);
});

function calculateTotal() {
    const table = document.getElementById('productTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const p1 = parseInt(cells[1].innerText) || 0;
        const p2 = parseInt(cells[2].innerText) || 0;
        const p3 = parseInt(cells[3].innerText) || 0;
        const total = (p1 + p2) * p3;
        cells[4].innerText = total.toFixed(2);
    }
}

function saveTable() {
    const table = document.getElementById('productTable');
    const rows = table.getElementsByTagName('tr');
    const data = [];

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const row = {
            product: cells[0].innerText,
            p1: parseInt(cells[1].innerText),
            p2: parseInt(cells[2].innerText),
            p3: parseInt(cells[3].innerText),
            total: parseFloat(cells[4].innerText)
        };
        data.push(row);
    }

    const jsonData = JSON.stringify(data);
    downloadFile(jsonData, 'data.json', 'application/json');

    // Additional code for other formats (CSV, XLSX, HTML, PDF) would go here
    // This could be implemented using libraries like SheetJS for XLSX and jsPDF for PDF
}

function downloadFile(content, fileName, contentType) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

const langchain = require('langchain');
const embeddingModel = new langchain.AllMiniLmL6V2EmbeddingModel();
const embeddingStore = new langchain.InMemoryEmbeddingStore();
const ingestor = langchain.EmbeddingStoreIngestor.builder()
  .documentSplitter(langchain.DocumentSplitters.recursive(300, 0))
  .embeddingModel(embeddingModel)
  .embeddingStore(embeddingStore)
  .build();

const document = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8');
const chatDocument = langchain.TextDocumentParser.parse(document);
ingestor.ingest(chatDocument);

const chain = langchain.ConversationalRetrievalChain.builder()
  .chatLanguageModel(langchain.OpenAiChatModel.withApiKey('YOUR_OPENAI_API_KEY'))
  .retriever(langchain.EmbeddingStoreRetriever.from(embeddingStore, embeddingModel))
  .build();

app.post('/send', (req, res) => {
  const message = req.body.message;
  const response = chain.execute(message);
  res.send(response);
});



/*
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const chatbotData = require('./data.json');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/send', (req, res) => {
  const message = req.body.message;
  const response = chatbotResponse(message);
  res.send(response);
});

function chatbotResponse(message) {
  const response = chatbotData[message];
  if (!response) {
    response = 'I didn\'t understand that. Can you please rephrase?';
  }
  return response;
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

*/

const langchain = require('langchain');
const embeddingModel = new langchain.AllMiniLmL6V2EmbeddingModel();
const embeddingStore = new langchain.InMemoryEmbeddingStore();
const ingestor = langchain.EmbeddingStoreIngestor.builder()
  .documentSplitter(langchain.DocumentSplitters.recursive(300, 0))
  .embeddingModel(embeddingModel)
  .embeddingStore(embeddingStore)
  .build();

const document = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8');
const chatDocument = langchain.TextDocumentParser.parse(document);
ingestor.ingest(chatDocument);

const chain = langchain.ConversationalRetrievalChain.builder()
  .chatLanguageModel(langchain.OpenAiChatModel.withApiKey('YOUR_OPENAI_API_KEY'))
  .retriever(langchain.EmbeddingStoreRetriever.from(embeddingStore, embeddingModel))
  .build();

app.post('/send', (req, res) => {
  const message = req.body.message;
  const response = chain.execute(message);
  res.send(response);
});

/*
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value;
    if (message.trim() === '') return;

    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);

    chatInput.value = '';

    // Logic for interacting with the OpenAI API and responding would go here
    const langchain = require('langchain');
const embeddingModel = new langchain.AllMiniLmL6V2EmbeddingModel();
const embeddingStore = new langchain.InMemoryEmbeddingStore();
const ingestor = langchain.EmbeddingStoreIngestor.builder()
  .documentSplitter(langchain.DocumentSplitters.recursive(300, 0))
  .embeddingModel(embeddingModel)
  .embeddingStore(embeddingStore)
  .build();

const document = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8');
const chatDocument = langchain.TextDocumentParser.parse(document);
ingestor.ingest(chatDocument);

const chain = langchain.ConversationalRetrievalChain.builder()
  .chatLanguageModel(langchain.OpenAiChatModel.withApiKey('YOUR_OPENAI_API_KEY'))
  .retriever(langchain.EmbeddingStoreRetriever.from(embeddingStore, embeddingModel))
  .build();

app.post('/send', (req, res) => {
  const message = req.body.message;
  const response = chain.execute(message);
  res.send(response);
});
}
*/



/*
document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('productTable');
    table.addEventListener('input', calculateTotal);
});

function calculateTotal() {
    const table = document.getElementById('productTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const p1 = parseInt(cells[1].innerText) || 0;
        const p2 = parseInt(cells[2].innerText) || 0;
        const p3 = parseInt(cells[3].innerText) || 0;
        const total = (p1 + p2) * p3;
        cells[4].innerText = total.toFixed(2);
    }
}

function saveTable() {
    const table = document.getElementById('productTable');
    const rows = table.getElementsByTagName('tr');
    const data = [];

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const row = {
            product: cells[0].innerText,
            p1: parseInt(cells[1].innerText),
            p2: parseInt(cells[2].innerText),
            p3: parseInt(cells[3].innerText),
            total: parseFloat(cells[4].innerText)
        };
        data.push(row);
    }

    const jsonData = JSON.stringify(data);
    downloadFile(jsonData, 'data.json', 'application/json');

    // Additional code for other formats (CSV, XLSX, HTML, PDF) would go here
    // This could be implemented using libraries like SheetJS for XLSX and jsPDF for PDF
}

function downloadFile(content, fileName, contentType) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value;
    if (message.trim() === '') return;

    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);

    chatInput.value = '';

    // Logic for interacting with the OpenAI API and responding would go here
    // Inside server.js or a separate module
    */
    /*
const langchain = require('langchain');
const embeddingModel = new langchain.AllMiniLmL6V2EmbeddingModel();
const embeddingStore = new langchain.InMemoryEmbeddingStore();
const ingestor = langchain.EmbeddingStoreIngestor.builder()
  .documentSplitter(langchain.DocumentSplitters.recursive(300, 0))
  .embeddingModel(embeddingModel)
  .embeddingStore(embeddingStore)
  .build();

const document = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8');
const chatDocument = langchain.TextDocumentParser.parse(document);
ingestor.ingest(chatDocument);

const chain = langchain.ConversationalRetrievalChain.builder()
  .chatLanguageModel(langchain.OpenAiChatModel.withApiKey('YOUR_OPENAI_API_KEY'))
  .retriever(langchain.EmbeddingStoreRetriever.from(embeddingStore, embeddingModel))
  .build();

app.post('/send', (req, res) => {
  const message = req.body.message;
  const response = chain.execute(message);
  res.send(response);
});
    */
/*
const model = new OpenAI({ temperature: 0 });
const embeddingModel = new OpenAIEmbeddings();

const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 300 });

async function setupChatBot() {
    const data = await loadDocument(new JSONLoader('dayTable2.json'));
    const texts = await textSplitter.splitText(data.join("\n"));
    const search = await EmbeddingSimilaritySearch.fromTexts(texts, embeddingModel);

    const chain = new ConversationalRetrievalQAChain({
        retriever: search.getRetriever(),
        llm: model
    });

    return chain;
}

setupChatBot().then((chain) => {
    // Now you have the chain setup. You can use this chain to answer questions.
    // You'll need to expose an API endpoint for the chatbot to interact with this chain.
    app.post('/api/chatbot', async (req, res) => {
    const query = req.body.query;
    if (!query) {
        return res.status(400).send('No query provided');
    }

    // Assuming `chain` is available here
    const answer = await chain.call({ query });
    res.json({ answer });
});

}
*/
