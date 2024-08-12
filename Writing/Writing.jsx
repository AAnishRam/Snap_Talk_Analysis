import React, { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  Paper,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Writing = () => {
  const [text, setText] = useState("");
  const [responseText, setResponseText] = useState("No response yet.");
  const [loading, setLoading] = useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Access your API key as an environment variable
  const API_KEY = import.meta.env.VITE_GEMINI_API;
  const genAI = new GoogleGenerativeAI(API_KEY);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const run = async () => {
    if (!text) return;

    setLoading(true);

    try {
      const prompt = `Correct all grammar errors in the following text. Do not add or change any words other than correcting grammar errors: " ${text} "`;
      const result = await model.generateContent(prompt);

      // Extracting and handling the response
      const response = await result.response;
      const responseText = await response.text();
      setResponseText(responseText);
    } catch (error) {
      console.error("Error generating content:", error);
      setResponseText("Error generating content.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 900, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Word Checker
      </Typography>

      <TextField
        label="Enter your text"
        multiline
        fullWidth
        rows={10}
        variant="outlined"
        value={text}
        onChange={handleTextChange}
        sx={{ mb: 4 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={run}
        disabled={loading}
        sx={{ mb: 4 }}
      >
        {loading ? "Generating..." : "Generate"}
      </Button>

      <Divider sx={{ mb: 4 }} />

      <Paper sx={{ p: 2, height: "100%" }}>
        <Typography variant="h6" gutterBottom>
          Review Suggestions
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {responseText}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Writing;
