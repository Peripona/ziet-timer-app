const express = require('express');
const app = express();

const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore({
  projectId: 'ziet-timer',
  keyFilename: 'serviceAccountKeys.json',
});

firestore.settings({
  timestampsInSnapshots: true
});

const document = firestore.doc('/test/click');

// respond with "hello world" when a GET request is made to the homepage
app.get('/click', function (req, res) {
  document.get().then(doc => {
    const jsonData = JSON.stringify(doc.data());
    const numClicks = JSON.parse(jsonData).numClicks || 0;
    document.set({
      numClicks: numClicks + 1,
    }).then(() => {
      res.send(`Clicks: ${numClicks + 1}`);
    });
  });
});

app.listen(3000, () =>
  console.log("Running localhost on 3000"));