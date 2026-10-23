
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());




// Test route
app.get("/", (req, res) => {
  res.send("Hello! My backend server is working.");
});

// Addition API

app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;

  if (num1 === undefined || num2 === undefined) {
    return res.status(400).json({
      error: "Both numbers are required"
    });
  }

  if (
    num1 === "" || num2 === "" ||
    !Number.isFinite(Number(num1)) ||
    !Number.isFinite(Number(num2))
  ) {
    return res.status(400).json({
      error: "Both inputs must be valid numbers"
    });
  }

  const result = Number(num1) + Number(num2);

  res.json({ result });
});


// Subtraction API

app.post("/sub", (req, res) => {
  const { num1, num2 } = req.body;

  if (num1 === undefined || num2 === undefined) {
    return res.status(400).json({
      error: "Both numbers are required"
    });
  }

  if (
    num1 === "" || num2 === "" ||
    !Number.isFinite(Number(num1)) ||
    !Number.isFinite(Number(num2))
  ) {
    return res.status(400).json({
      error: "Both inputs must be valid numbers"
    });
  }

  const result = Number(num1) - Number(num2);

  res.json({ result });
});


// Multiplication API

app.post("/mul", (req, res) => {
  const { num1, num2 } = req.body;

  if (num1 === undefined || num2 === undefined) {
    return res.status(400).json({
      error: "Both numbers are required"
    });
  }

  if (
    num1 === "" || num2 === "" ||
    !Number.isFinite(Number(num1)) ||
    !Number.isFinite(Number(num2))
  ) {
    return res.status(400).json({
      error: "Both inputs must be valid numbers"
    });
  }

  const result = Number(num1) * Number(num2);

  res.json({ result });
});


// Division API

app.post("/div", (req, res) => {
  const { num1, num2 } = req.body;

  if (num1 === undefined || num2 === undefined) {
    return res.status(400).json({
      error: "Both numbers are required"
    });
  }

  if (
    num1 === "" || num2 === "" ||
    !Number.isFinite(Number(num1)) ||
    !Number.isFinite(Number(num2))
  ) {
    return res.status(400).json({
      error: "Both inputs must be valid numbers"
    });
  }

  if (Number(num2) === 0) {
    return res.status(400).json({
      error: "Cannot divide by zero"
    });
  }

  const result = Number(num1) / Number(num2);

  res.json({ result });
});



// Start the server

 // Centralized error-handling middleware

 // Centralized error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    error: "Internal server error"
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});


