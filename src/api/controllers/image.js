// Import the Clarifai package
const Clarifai = require("clarifai");

// Instantiate a new Clarifai application with an API key
const app = new Clarifai.App({
  apiKey: "9a6d250feb674a91b724d34bff1fd841",
});

// Define a function to handle API calls
const handleApiCall = (req, res) => {
  // Use the Clarifai face detection model to analyze an image provided in the request body
  app.models
    .predict(
      {
        id: "face-detection",
        name: "face-detection",
        version: "6dc7e46bc9124c5c8824be4822abe105",
        type: "visual-detector",
      },
      req.body.input
    )
    // Return the analysis data as a JSON response
    .then((data) => {
      res.json(data);
    })
    // Catch any errors and return a 400 status with an error message
    .catch((err) => res.status(400).json("unable to work with API"));
};

// Define a function to handle image requests
const handleImage = (req, res, db) => {
  // Extract the user ID from the request body
  const { id } = req.body;
  // Update the user's entry count in the database
  db("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    // Send back the updated entry count as a response
    .then((entries) => {
      res.json(entries[0].entries);
    })
    // Catch any errors and return a 400 status with an error message
    .catch((err) => res.status(400).json("unable to get entries"));
};

// Export the two functions for use in other parts of the application
module.exports = {
  handleImage,
  handleApiCall,
};
