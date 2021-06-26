const express = require('express')
var cors = require('cors')
const speech = require('@google-cloud/speech');

// Creates a client
const client = new speech.SpeechClient();
const app = express()
const port = 8080

app.use(cors())
app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/scoreVoiceRecording', async (req, res) => {
    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    let gcs_uri = req.body.gcs_uri;
    const audio = {
        uri: gcs_uri,
    };
    const config = {
        encoding: 'WEBM_OPUS',
        audioChannelCount: 2,
        languageCode: 'en-US',
    };
    const request = {
        audio: audio,
        config: config,
    };

    // Send recording GCP bucket link to GCP NLP API
    // Detects speech in the audio file
    let returnObj = {
        score: 0,
        transcription: '',
    };
    try {
        const [response] = await client.recognize(request);
        const score = response.results["0"].alternatives["0"].confidence;
        const transcription = response.results["0"].alternatives["0"].transcript;

        returnObj.score = score;
        returnObj.transcription = transcription;
    } catch (error) {
        console.log(error);
        throw error;
    }
    // Return score to client
    console.log(returnObj);
    return res.send(returnObj);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})