const express = require("express");
const app = express();
// 2-  Listen to the port
const SERVER_PORT = 3000;
app.listen(3000, () => console.log("listening on : " + SERVER_PORT));

const STUDENTS_DATA = [
  {
    id: 1,
    name: "lyhor",
    class: "B",
    results: [
      { topic: "javascript", score: 99 },
      { topic: "english", score: 50 },
      { topic: "sport", score: 33 },
    ],
  },
  {
    id: 2,
    name: "Lanh",
    class: "B",
    results: [
      { topic: "javascript", score: 78 },
      { topic: "english", score: 88 },
      { topic: "sport", score: 88 },
    ],
  },
  {
    id: 3,
    name: "Sophorn",
    class: "A",
    results: [
      { topic: "javascript", score: 70 },
      { topic: "english", score: 50 },
      { topic: "sport", score: 70 },
    ],
  },
];
