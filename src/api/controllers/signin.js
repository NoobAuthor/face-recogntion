// This function handles the sign-in request by taking the database instance and bcrypt library as parameters
const handleSignin = (db, bcrypt) => (req, res) => {
  // Extract the email and password from the request body
  const { email, password } = req.body;
  // If either email or password in missing, return an error response with status 400
  if (!email || !password) {
    return res.status(400).json("incorrect form submission");
  }
  // Select the email and hash from the login table where the email matches the one from the request
  db.select("email", "hash")
    .from("login")
    .where("email", "=", email)
    .then((data) => {
      // Compare the password from the request with the hash from the database
      const isValid = bcrypt.compareSync(password, data[0].hash);
      // If the password is valid, select all columns from the users table where the email matches the one from the request
      if (isValid) {
        return db
          .select("*")
          .from("users")
          .where("email", "=", email)
          .then((user) => {
            // If user is found, return it as a response
            res.json(user[0]);
          })
          .catch((err) => res.status(400).json("unable to get user"));
      } else {
        // If it is invalid, return an error response with the status 400
        res.status(400).json("wrong credentials");
      }
    })
    .catch((err) => res.status(400).json("wrong credentials"));
};

// Export the handleSignin functions as a module
module.exports = {
  handleSignin: handleSignin,
};
