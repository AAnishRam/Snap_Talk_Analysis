import React, { useState, useEffect } from "react";
import { Button, Typography, Box, TextField } from "@mui/material";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import Sentiment from "sentiment";
import jsPDF from "jspdf";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Speaking = () => {
  const [transcript, setTranscript] = useState("");
  const [textToCopy, setTextToCopy] = useState("");
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });
  const [sentiment, setSentiment] = useState(null);
  const [showSentimentExport, setShowSentimentExport] = useState(false);
  const [grammarResults, setGrammarResults] = useState(null);
  const [showGrammarExport, setShowGrammarExport] = useState(false);
  const [textInput, setTextInput] = useState(""); // State for TextField input
  const [keyTopics, setKeyTopics] = useState(""); // State for key topics

  // Access your API key as an environment variable
  const API_KEY = import.meta.env.VITE_GEMINI_API;
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const {
    transcript: speechTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setTranscript(speechTranscript);
  }, [speechTranscript]);

  const startListening = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setTextToCopy(transcript);
  };

  const analyzeSentiment = async () => {
    if (!transcript) return;

    try {
      const prompt = `Analyze the sentiment of the following text: "${transcript}"`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const responseText = await response.text();
      const sentimentAnalyzer = new Sentiment();
      const sentimentResult = sentimentAnalyzer.analyze(responseText);
      setSentiment(sentimentResult);
      setShowSentimentExport(true);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
      setSentiment(null);
    }
  };

  const checkGrammar = async () => {
    if (!transcript) return;

    try {
      const prompt = `Correct all grammar errors in the following text. Do not add or change any words other than correcting grammar errors: "${transcript}"`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const responseText = await response.text();
      setGrammarResults({
        matches: [
          {
            message: responseText,
            replacements: [],
          },
        ],
      });
      setShowGrammarExport(true);
    } catch (error) {
      console.error("Error generating content:", error);
      setGrammarResults({
        matches: [
          {
            message: "Error generating grammar results.",
            replacements: [],
          },
        ],
      });
    }
  };

  const extractKeyTopics = async () => {
    if (!transcript) return;

    try {
      const prompt = `Extract key topics or entities from the following text: "${transcript}"`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const responseText = await response.text();
      setKeyTopics(responseText);
    } catch (error) {
      console.error("Error extracting key topics:", error);
      setKeyTopics("Error extracting key topics.");
    }
  };

  const exportSentimentToPDF = () => {
    if (!sentiment) {
      alert("No sentiment analysis result to export.");
      return;
    }

    const doc = new jsPDF();
    doc.text("Sentiment Analysis Report", 10, 10);
    doc.text(`Text: ${transcript}`, 10, 20);
    doc.text(`Score: ${sentiment.score}`, 10, 30);
    doc.text(`Comparative: ${sentiment.comparative}`, 10, 40);
    doc.text(`Positive Words: ${sentiment.positive.join(", ")}`, 10, 50);
    doc.text(`Negative Words: ${sentiment.negative.join(", ")}`, 10, 60);
    doc.save("sentiment-report.pdf");
  };

  const exportGrammarToPDF = () => {
    if (!grammarResults) {
      alert("No grammar analysis result to export.");
      return;
    }

    const doc = new jsPDF();
    doc.text("Grammar Analysis Report", 10, 10);
    doc.text(`Text: ${transcript}`, 10, 20);

    grammarResults.matches.forEach((match, index) => {
      const issueText = `Issue ${index + 1}: ${match.message}`;
      const correctionText = match.replacements.length
        ? `Suggested Corrections: ${match.replacements
            .map((rep) => rep.value)
            .join(", ")}`
        : "No suggestions available";
      doc.text(issueText, 10, 30 + index * 10);
      doc.text(correctionText, 10, 35 + index * 10);
    });

    doc.save("grammar-report.pdf");
  };

  if (!browserSupportsSpeechRecognition) {
    return <p>Browser does not support speech recognition.</p>;
  }

  return (
    <Box sx={{ p: 4, maxWidth: 900, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Use Speech Recognition
      </Typography>

      <Box>
        <Typography variant="h6">Speech Recognition:</Typography>
        <Button onClick={startListening} variant="contained" sx={{ mb: 2 }}>
          Start Listening
        </Button>
        <Button
          onClick={stopListening}
          variant="contained"
          color="secondary"
          sx={{ mb: 2, ml: 1 }}
        >
          Stop Listening
        </Button>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {transcript}
        </Typography>
        <Button
          onClick={() => setCopied(transcript)}
          variant="contained"
          sx={{ mt: 2, mr: 1 }}
        >
          {isCopied ? "Copied!" : "Copy to clipboard"}
        </Button>
        <Button
          onClick={analyzeSentiment}
          variant="contained"
          sx={{ mt: 2, mr: 1 }}
        >
          Analyze Sentiment
        </Button>
        {showSentimentExport && (
          <Button
            onClick={exportSentimentToPDF}
            variant="contained"
            sx={{ mt: 2, mr: 1 }}
          >
            Export Sentiment to PDF
          </Button>
        )}
        <Button
          onClick={checkGrammar}
          variant="contained"
          sx={{ mt: 2, mr: 1 }}
        >
          Check Grammar
        </Button>
        {showGrammarExport && (
          <Button
            onClick={exportGrammarToPDF}
            variant="contained"
            sx={{ mt: 2, mr: 1 }}
          >
            Export Grammar to PDF
          </Button>
        )}
        <Button
          onClick={extractKeyTopics}
          variant="contained"
          sx={{ mt: 2, mr: 1 }}
        >
          Extract Key Topics
        </Button>
      </Box>

      <Box sx={{ mt: 4 }}>
        <TextField
          label="Enter your text here"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          onClick={() => setTranscript(textInput)} // Set transcript to the text from TextField
          variant="contained"
          sx={{ mr: 1 }}
        >
          Update Transcript
        </Button>
      </Box>

      {sentiment && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Sentiment Analysis Result:</Typography>
          <Typography>
            <strong>Score:</strong> {sentiment.score}
          </Typography>
          <Typography>
            <strong>Comparative:</strong> {sentiment.comparative}
          </Typography>
          <Typography>
            <strong>Positive Words:</strong> {sentiment.positive.join(", ")}
          </Typography>
          <Typography>
            <strong>Negative Words:</strong> {sentiment.negative.join(", ")}
          </Typography>
        </Box>
      )}

      {grammarResults && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Grammar Analysis Result:</Typography>
          {grammarResults.matches.map((match, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography>
                <strong>Issue {index + 1}:</strong> {match.message}
              </Typography>
              <Typography>
                <strong>Suggested Corrections:</strong>{" "}
                {match.replacements.map((rep) => rep.value).join(", ") ||
                  "No suggestions available"}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {keyTopics && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Key Topics Extracted:</Typography>
          <Typography>{keyTopics}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Speaking;
