# Taco (speech-training-app)
Taco provides guided and structured speech therapy for users to increase their speech abilities. Lessons contain an instructional video and practical exercise section. In the latter feature, users are given a word as a prompt and can record a short clip speaking the word. Using natural language processing, the app evaluates the accuracy of their voice clip and returns a score for how properly the word is spoken.

[See images on DevPost.](https://devpost.com/software/taco-180hrj)

## Inspiration
Taco was inspired by current events—the Covid-19 pandemic that we're all too familiar with. As vaccines are rolling out, we're all excited to start returning back to normal life. However, for recovering patients, there are many lasting effects to Covid-19. One common struggle is having difficulty with vocal and throat control after being in ventilation for a prolonged time. We wanted to tackle this area and see how technology can help patients get back on their feet and communicating with their loved ones as they once could.

## How we built it
With a lot of coffee and perseverance (an unfortunately, not a lot of sleep). We also used React and Express to build the web app, GCP Natural Language AI to score the clarity of audio recordings, Firestore to save scores, and Google Cloud Storage to save the audio files.

## Challenges we ran into
Centering a div is tough.

## Accomplishments that we're proud of
Akshath is proud he centered a div. Grace is proud she finished her work relatively quickly and made pretty slides. Michael is proud of learning Firestore and Firebase for the first time, being able to build a prototype web app over the weekend, and wrestling with audio file types and codecs. Denny is proud to have brushed up her React and CSS skills to make a decent webapp within the timespan of a hackathon.

## What we learned
Since the app was very front-end heavy, our three developers needed to work in React; however, it just so happened that none of us were very well-versed in it, and thus it became one of the largest learning opportunities for us. Additionally, we explored using Firebase and Firestore to contain audio files for the first time.

## What's next for Taco
Adding features like personalization to tailor lesson plans to individual needs and speaking ability. Cleaning up user interface.

## Built With
- express.js
- figma
- firebase
- firestore
- gcp-nlp
- google-cloud
- material-ui
- natural-language-processing
- react
