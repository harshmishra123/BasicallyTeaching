const express = require("express");
const app = express();
const port = 3000;

// Define routes
app.get("/", (req, res) => {
  res.send("Welcome to the Online Teaching Webpage");
});

app.get("/courses", (req, res) => {
  const courses = [
    {
      id: 1,
      name: "Mathematics",
      description: "Learn mathematics with our expert teachers."
    },
    {
      id: 2,
      name: "English Language",
      description: "Improve your English language skills with our courses."
    },
    {
      id: 3,
      name: "Science",
      description: "Explore the world of science with our experienced teachers."
    },
    {
      id: 4,
      name: "Programming",
      description: "Learn programming languages and build your own projects."
    }
  ];

  res.json(courses);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});