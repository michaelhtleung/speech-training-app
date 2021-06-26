import speech from '@google-cloud/speech';

const utils = {};

// Creates a client
const client = new speech.SpeechClient();

utils.writeTrivialData = function(db) {
    // trivial write example
    db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

utils.getTrivialData = function(db) {
    // trivial read example
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
}

utils.getLineGraphData = function(db) {
}

utils.postVoiceRecording = async function(db) {
    // TODO: Save recording to GCP bucket
    const gcsUri = 'gs://cloud-samples-data/speech/brooklyn_bridge.raw';

    // Save recording metadata to GCP CloudSQL
    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
        uri: gcsUri,
    };
    const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
    };
    const request = {
        audio: audio,
        config: config,
    };

    // Send recording GCP bucket link to GCP NLP API
    // Detects speech in the audio file
    const [response] = await client.recognize(request);
    const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
    console.log(`Transcription: ${transcription}`);

    // Return score to client
    return transcription;
}

utils.getVoiceRecording = function(db) {
}

export default utils;