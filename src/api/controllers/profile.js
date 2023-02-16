// This code exports a function named "handleProfileGet" that handles a GET request to retrieve a user's profile from a database.
// It takes in the request object, response object, and a database object as parameters.

const handleProfileGet = (req, res, db) => {
  const { id } = req.params;

  // The function uses the "id" parameter from the request to retrieve the user from the database using a select query.
  db.select("*")
    .from("users")
    .where({ id })
    .then((user) => {
      // If the user is found, it returns the user's data as a JSON response.
      if (user.length) {
        res.json(user[0]);
      } else {
        // If the user is not found, it returns a 400 error response with a message "Not found".
        res.status(400).json("Not found");
      }
    })
    // If there is an error retrieving the user, it returns a 400 error response with a message "error getting user".
    .catch((err) => res.status(400).json("error getting user"));
};

// This code exports the "handleProfileGet" function so it can be used in other parts of the application.
module.exports = {
  handleProfileGet,
};
