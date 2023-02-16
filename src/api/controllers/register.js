// Defines a function called handleRegister that takes in four parameters: req, res, db, and bcrypt
const handleRegister = (req, res, db, bcrypt) => {
  // Extracts the email, name, and password from the request body
  const { email, name, password } = req.body;
  // Checks if any of these fields are missing, and returns an error response if any are missing
  if (!email || !name || !password) {
    return res.status(400).json("incorrect form submission");
  }
  // Uses bcrypt to generate a hash of the password
  const hash = bcrypt.hashSync(password);
  // Starts a database transaction that inserts the hash and email into the "login" table
  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        email: email,
      })
      .into("login")
      // Returns the email using the "returning" method, and uses it to insert the email, name, and current date into the "users" table
      .returning("email")
      .then((loginEmail) => {
        return (
          trx("users")
            .returning("*")
            .insert({
              email: loginEmail[0].email,
              name: name,
              joined: new Date(),
            })
            // Returns the newly created user and sends it as a JSON response
            .then((user) => {
              res.json(user[0]);
            })
        );
      })
      // Commits the transaction and catches any errors that occur, returning an error response if there are any
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json("unable to register"));
};

// Exports the handleRegister function as a module
module.exports = {
  handleRegister: handleRegister,
};
