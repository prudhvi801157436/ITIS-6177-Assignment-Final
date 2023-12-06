const express = require('express');
const { ComputerVisionClient } = require('@azure/cognitiveservices-computervision');
const { ApiKeyCredentials } = require('@azure/ms-rest-js');
require('dotenv').config();

const app = express();
const port = 3000;

const key = process.env.AZURE_CV_KEY;
const endpoint = process.env.AZURE_CV_ENDPOINT;
const computerVisionClient = new ComputerVisionClient(new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/v1/image-statistics', async (req, res) => {
    try {
        const imageUrl = req.body.imageUrl;
        if (!imageUrl) {
            return res.status(400).json({ error: 'image URL is required in your request body' });
        }

        const result = await computerVisionClient.analyzeImage(imageUrl, { visualFeatures: ['Color'] });
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(error.statusCode || 500).json({ error: error.message || 'Internal Server Error' });
    }
});

app.post('/api/v1/image-description', async (req, res) => {
    try {
        const imageUrl = req.body.imageUrl;
        if (!imageUrl) {
            return res.status(400).json({ error: 'image URL is required in your request body' });
        }

        const result = await computerVisionClient.describeImage(imageUrl);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(error.statusCode || 500).json({ error: error.message || 'Internal Server Error' });
    }
});

app.post('/api/v1/recognize-objects', async (req, res) => {
    try {
        const imageUrl = req.body.imageUrl;
        if (!imageUrl) {
            return res.status(400).json({ error: 'image URL is required in your request body' });
        }

        const result = await computerVisionClient.detectObjects(imageUrl);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(error.statusCode || 500).json({ error: error.message || 'Internal Server Error' });
    }
});

app.post('/api/v1/recognize-brand', async (req, res) => {
    try {
        const imageUrl = req.body.imageUrl;
        if (!imageUrl) {
            return res.status(400).json({ error: 'image URL is required in your request body' });
        }

        const result = await computerVisionClient.recognizePrintedText(false, imageUrl);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(error.statusCode || 500).json({ error: error.message || 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});
