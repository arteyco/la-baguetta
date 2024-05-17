// Inside server.js or a separate module
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
});
