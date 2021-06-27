import axios from 'axios';

const utils = {};

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

utils.postVoiceRecording = async function(
    db,
    storage,
    filename,
    blob,
    exercise_name,
    exercise_word,
) {
    // const gcsUri = 'gs://cloud-samples-data/speech/brooklyn_bridge.raw';

    // Save recording to GCP bucket
    // Create a storage reference from our storage service
    var ref = storage.ref().child(filename);
    let snapshot = await ref.put(blob);
    console.log('Uploaded a blob or file!');
    console.log('ref:');
    console.log(ref);
    console.log('snapshot:');
    console.log(snapshot);

    // Score voice recording with backend server
    let gcs_uri = `gs://${snapshot.ref.storage._delegate._bucket.bucket}/${filename}`;
    console.log(gcs_uri);
    const res = await axios.post('http://localhost:8080/scoreVoiceRecording',
        {
            exercise_name: exercise_name,
            exercise_word: exercise_word,
            gcs_uri: gcs_uri,
        }, {
            headers: {
                'content-type': 'application/json'
            }
        }
    );
    let score = Math.round(res.data.score*100);
    let transcription = res.data.transcription;
    if (transcription.toLowerCase() !== exercise_word.toLowerCase()) {
        score = 0;
        console.log(`Got ${transcription} but was expecting ${exercise_word}`);
    }
    console.log(score);
    console.log(transcription);

    // Save recording metadata to GCP Firestore
    let datetime_str = Date().toLocaleString();
    try {
        let docRef = await db.collection("exercises").add({
            exercise_name: exercise_name,
            exercise_word: exercise_word,
            score: score,
            date: datetime_str,
            recording_bucket_uri: gcs_uri,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
    // return client
    return {
        score: score,
        transcription: transcription,
    };
}

utils.getVoiceRecording = function(db) {
}

export default utils;