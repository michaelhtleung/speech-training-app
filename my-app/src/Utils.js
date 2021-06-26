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
    console.log(snapshot);

    // Score voice recording with backend server
    let gcs_uri = snapshot.uri;
    const res = await axios.post('https://localhost:8080/scoreVoiceRecording',
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
    let score = res.data.body*100;

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
    return score;
}

utils.getVoiceRecording = function(db) {
}

export default utils;