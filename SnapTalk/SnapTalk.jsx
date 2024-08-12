// import React, { useState } from "react";
// import {
//   Button,
//   TextField,
//   Typography,
//   Box,
//   CircularProgress,
//   Divider,
// } from "@mui/material";
// import { CloudUpload } from "@mui/icons-material";

// const UploadVideo = () => {
//   const [fileName, setFileName] = useState("");
//   const [extractedText, setExtractedText] = useState("");
//   const [correctedText, setCorrectedText] = useState("");
//   const [sentimentAnalysis, setSentimentAnalysis] = useState({
//     score: 0,
//     comparative: 0,
//     positiveWords: "None",
//     negativeWords: "None",
//   });
//   const [overallRating, setOverallRating] = useState(0);
//   const [speechScore, setSpeechScore] = useState(0);
//   const [feedback, setFeedback] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (event) => {
//     setFileName(event.target.files[0]?.name || "");
//   };

//   const extractAndAnalyze = async () => {
//     if (!fileName) return;

//     setLoading(true);

//     try {
//       // Placeholder: Extract text from video
//       const text = "Extracted text from video"; // Replace with actual text extraction logic
//       setExtractedText(text);

//       // Placeholder: Grammar correction
//       const prompt = `Correct all grammar errors in the following text. Do not add or change any words other than correcting grammar errors: ${text}`;
//       const corrected = await correctGrammar(prompt); // Replace with actual grammar correction logic
//       setCorrectedText(corrected);

//       // Placeholder: Sentiment analysis
//       const sentiment = await analyzeSentiment(corrected); // Replace with actual sentiment analysis logic
//       setSentimentAnalysis(sentiment);

//       // Placeholder: Overall rating and speech score
//       const rating = calculateOverallRating(sentiment.score); // Replace with actual rating logic
//       setOverallRating(rating);
//       const score = calculateSpeechScore(text); // Replace with actual speech score logic
//       setSpeechScore(score);

//       // Placeholder: Feedback and suggestions
//       const feedback = generateFeedback(sentiment); // Replace with actual feedback generation logic
//       setFeedback(feedback);
//     } catch (error) {
//       console.error("Error during extraction and analysis:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Placeholder functions
//   const correctGrammar = async (text) => {
//     // Integrate grammar correction logic here
//     return text;
//   };

//   const analyzeSentiment = async (text) => {
//     // Integrate sentiment analysis logic here
//     return {
//       score: 0,
//       comparative: 0,
//       positiveWords: "None",
//       negativeWords: "None",
//     };
//   };

//   const calculateOverallRating = (score) => {
//     // Calculate overall rating based on sentiment score
//     return 0;
//   };

//   const calculateSpeechScore = (text) => {
//     // Calculate speech score out of 100
//     return 0;
//   };

//   const generateFeedback = (sentiment) => {
//     // Generate feedback based on sentiment analysis
//     return "No feedback available.";
//   };

//   return (
//     <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
//       <Typography variant="h4" gutterBottom>
//         Upload Video for Text Extraction
//       </Typography>
//       <Button
//         variant="contained"
//         component="label"
//         startIcon={<CloudUpload />}
//         fullWidth
//         sx={{ mb: 2 }}
//       >
//         Choose Video File
//         <input
//           type="file"
//           accept="video/*"
//           hidden
//           onChange={handleFileChange}
//         />
//       </Button>
//       <TextField
//         label="Selected File"
//         value={fileName}
//         fullWidth
//         disabled
//         sx={{ mb: 2 }}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         fullWidth
//         onClick={extractAndAnalyze}
//         disabled={!fileName || loading}
//       >
//         {loading ? <CircularProgress size={24} /> : "Extract Text & Analyze"}
//       </Button>

//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h6">Extracted Text:</Typography>
//         <TextField
//           multiline
//           fullWidth
//           rows={8}
//           variant="outlined"
//           value={extractedText}
//           sx={{ mb: 4 }}
//           InputProps={{ readOnly: true }}
//         />

//         <Typography variant="h6">Corrected Text:</Typography>
//         <TextField
//           multiline
//           fullWidth
//           rows={8}
//           variant="outlined"
//           value={correctedText}
//           sx={{ mb: 4 }}
//           InputProps={{ readOnly: true }}
//         />

//         <Typography variant="h6">Sentiment Analysis:</Typography>
//         <Typography variant="body1">
//           Score: {sentimentAnalysis.score}
//         </Typography>
//         <Typography variant="body1">
//           Comparative: {sentimentAnalysis.comparative}
//         </Typography>
//         <Typography variant="body1">
//           Positive Words: {sentimentAnalysis.positiveWords}
//         </Typography>
//         <Typography variant="body1">
//           Negative Words: {sentimentAnalysis.negativeWords}
//         </Typography>

//         <Typography variant="h6" sx={{ mt: 4 }}>
//           Overall Rating:
//         </Typography>
//         <Typography variant="body1">Rating: {overallRating}</Typography>

//         <Typography variant="h6" sx={{ mt: 4 }}>
//           Speech Score:
//         </Typography>
//         <Typography variant="body1">Score: {speechScore} / 100</Typography>

//         <Typography variant="h6" sx={{ mt: 4 }}>
//           Feedback & Suggestions:
//         </Typography>
//         <Typography variant="body1">{feedback}</Typography>
//       </Box>
//     </Box>
//   );
// };

// export default UploadVideo;

// import React, { useState } from "react";
// import {
//   Button,
//   TextField,
//   Typography,
//   Box,
//   CircularProgress,
//   Divider,
// } from "@mui/material";
// import { CloudUpload } from "@mui/icons-material";

// const UploadVideo = () => {
//   const [fileName, setFileName] = useState("");
//   const [extractedText, setExtractedText] = useState("");
//   const [correctedText, setCorrectedText] = useState("");
//   const [sentimentAnalysis, setSentimentAnalysis] = useState({
//     score: 0,
//     comparative: 0,
//     positiveWords: "None",
//     negativeWords: "None",
//   });
//   const [overallRating, setOverallRating] = useState(0);
//   const [speechScore, setSpeechScore] = useState(0);
//   const [feedback, setFeedback] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (event) => {
//     setFileName(event.target.files[0]?.name || "");
//   };

//   const extractAndAnalyze = async () => {
//     if (!fileName) return;

//     setLoading(true);

//     try {
//       // Placeholder: Extract text from video
//       const text = "Extracted text from video"; // Replace with actual text extraction logic
//       setExtractedText(text);

//       // Placeholder: Grammar correction
//       const prompt = `Correct all grammar errors in the following text. Do not add or change any words other than correcting grammar errors: ${text}`;
//       const corrected = await correctGrammar(prompt); // Replace with actual grammar correction logic
//       setCorrectedText(corrected);

//       // Placeholder: Sentiment analysis
//       const sentiment = await analyzeSentiment(corrected); // Replace with actual sentiment analysis logic
//       setSentimentAnalysis(sentiment);

//       // Placeholder: Overall rating and speech score
//       const rating = calculateOverallRating(sentiment.score); // Replace with actual rating logic
//       setOverallRating(rating);
//       const score = calculateSpeechScore(text); // Replace with actual speech score logic
//       setSpeechScore(score);

//       // Placeholder: Feedback and suggestions
//       const feedback = generateFeedback(sentiment); // Replace with actual feedback generation logic
//       setFeedback(feedback);
//     } catch (error) {
//       console.error("Error during extraction and analysis:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Placeholder functions
//   const correctGrammar = async (text) => {
//     // Integrate grammar correction logic here
//     return text;
//   };

//   const analyzeSentiment = async (text) => {
//     // Integrate sentiment analysis logic here
//     return {
//       score: 0,
//       comparative: 0,
//       positiveWords: "None",
//       negativeWords: "None",
//     };
//   };

//   const calculateOverallRating = (score) => {
//     // Calculate overall rating based on sentiment score
//     return 0;
//   };

//   const calculateSpeechScore = (text) => {
//     // Calculate speech score out of 100
//     return 0;
//   };

//   const generateFeedback = (sentiment) => {
//     // Generate feedback based on sentiment analysis
//     return "No feedback available.";
//   };

//   return (
//     <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
//       <Typography variant="h4" gutterBottom>
//         Upload Video for Text Extraction
//       </Typography>
//       <Button
//         variant="contained"
//         component="label"
//         startIcon={<CloudUpload />}
//         fullWidth
//         sx={{ mb: 2 }}
//       >
//         Choose Video File
//         <input
//           type="file"
//           accept="video/*"
//           hidden
//           onChange={handleFileChange}
//         />
//       </Button>
//       <TextField
//         label="Selected File"
//         value={fileName}
//         fullWidth
//         disabled
//         sx={{ mb: 2 }}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         fullWidth
//         onClick={extractAndAnalyze}
//         disabled={!fileName || loading}
//       >
//         {loading ? <CircularProgress size={24} /> : "Extract Text & Analyze"}
//       </Button>

//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h6">Extracted Text:</Typography>
//         <TextField
//           multiline
//           fullWidth
//           rows={8}
//           variant="outlined"
//           value={extractedText}
//           sx={{ mb: 4 }}
//           InputProps={{ readOnly: true }}
//         />

//         <Typography variant="h6">Corrected Text:</Typography>
//         <TextField
//           multiline
//           fullWidth
//           rows={8}
//           variant="outlined"
//           value={correctedText}
//           sx={{ mb: 4 }}
//           InputProps={{ readOnly: true }}
//         />

//         <Typography variant="h6">Sentiment Analysis:</Typography>
//         <Typography variant="body1">
//           Score: {sentimentAnalysis.score}
//         </Typography>
//         <Typography variant="body1">
//           Comparative: {sentimentAnalysis.comparative}
//         </Typography>
//         <Typography variant="body1">
//           Positive Words: {sentimentAnalysis.positiveWords}
//         </Typography>
//         <Typography variant="body1">
//           Negative Words: {sentimentAnalysis.negativeWords}
//         </Typography>

//         <Typography variant="h6" sx={{ mt: 4 }}>
//           Overall Rating:
//         </Typography>
//         <Typography variant="body1">Rating: {overallRating}</Typography>

//         <Typography variant="h6" sx={{ mt: 4 }}>
//           Speech Score:
//         </Typography>
//         <Typography variant="body1">Score: {speechScore} / 100</Typography>

//         <Typography variant="h6" sx={{ mt: 4 }}>
//           Feedback & Suggestions:
//         </Typography>
//         <Typography variant="body1">{feedback}</Typography>
//       </Box>
//     </Box>
//   );
// };

// export default UploadVideo;

import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  CircularProgress,
  Divider,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

const SnapTalk = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [extractedText, setExtractedText] = useState("");
  const [correctedText, setCorrectedText] = useState("");
  const [sentimentAnalysis, setSentimentAnalysis] = useState({
    score: 0,
    comparative: 0,
    positiveWords: "None",
    negativeWords: "None",
  });
  const [overallRating, setOverallRating] = useState(0);
  const [speechScore, setSpeechScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    setFileName(uploadedFile?.name || "");
  };

  const extractTextFromVideo = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/extract-text", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Text extraction failed");
    }

    const result = await response.json();
    return result.text; // Adjust based on actual API response
  };

  const correctGrammar = async (text) => {
    const response = await fetch("/api/correct-grammar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error("Grammar correction failed");
    }

    const result = await response.json();
    return result.correctedText; // Adjust based on actual API response
  };

  const analyzeSentiment = async (text) => {
    const response = await fetch("/api/analyze-sentiment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error("Sentiment analysis failed");
    }

    const result = await response.json();
    return result; // Adjust based on actual API response
  };

  const calculateOverallRating = (score) => {
    // Calculate overall rating based on sentiment score
    return Math.min(Math.max(score, 0), 100);
  };

  const calculateSpeechScore = (text) => {
    // Calculate speech score out of 100
    return Math.floor(Math.random() * 101); // Placeholder logic
  };

  const generateFeedback = (sentiment) => {
    // Generate feedback based on sentiment analysis
    return sentiment.score > 0
      ? "Good job!"
      : "Consider improving your speech.";
  };

  const extractAndAnalyze = async () => {
    if (!file) return;

    setLoading(true);

    try {
      const text = await extractTextFromVideo(file);
      setExtractedText(text);

      const corrected = await correctGrammar(text);
      setCorrectedText(corrected);

      const sentiment = await analyzeSentiment(corrected);
      setSentimentAnalysis(sentiment);

      const rating = calculateOverallRating(sentiment.score);
      setOverallRating(rating);

      const score = calculateSpeechScore(text);
      setSpeechScore(score);

      const feedback = generateFeedback(sentiment);
      setFeedback(feedback);
    } catch (error) {
      console.error("Error during extraction and analysis:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Upload Video for Text Extraction
      </Typography>
      <Button
        variant="contained"
        component="label"
        startIcon={<CloudUpload />}
        fullWidth
        sx={{ mb: 2 }}
      >
        Choose Video File
        <input
          type="file"
          accept="video/*"
          hidden
          onChange={handleFileChange}
        />
      </Button>
      <TextField
        label="Selected File"
        value={fileName}
        fullWidth
        disabled
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={extractAndAnalyze}
        disabled={!file || loading}
      >
        {loading ? <CircularProgress size={24} /> : "Extract Text & Analyze"}
      </Button>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Extracted Text:</Typography>
        <TextField
          multiline
          fullWidth
          rows={8}
          variant="outlined"
          value={extractedText}
          sx={{ mb: 4 }}
          InputProps={{ readOnly: true }}
        />

        <Typography variant="h6">Corrected Text:</Typography>
        <TextField
          multiline
          fullWidth
          rows={8}
          variant="outlined"
          value={correctedText}
          sx={{ mb: 4 }}
          InputProps={{ readOnly: true }}
        />

        <Typography variant="h6">Sentiment Analysis:</Typography>
        <Typography variant="body1">
          Score: {sentimentAnalysis.score}
        </Typography>
        <Typography variant="body1">
          Comparative: {sentimentAnalysis.comparative}
        </Typography>
        <Typography variant="body1">
          Positive Words: {sentimentAnalysis.positiveWords}
        </Typography>
        <Typography variant="body1">
          Negative Words: {sentimentAnalysis.negativeWords}
        </Typography>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Overall Rating:
        </Typography>
        <Typography variant="body1">Rating: {overallRating}</Typography>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Speech Score:
        </Typography>
        <Typography variant="body1">Score: {speechScore} / 100</Typography>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Feedback & Suggestions:
        </Typography>
        <Typography variant="body1">{feedback}</Typography>
      </Box>
    </Box>
  );
};

export default SnapTalk;
