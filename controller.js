const User = require('./models/User');

const sayHello = (req, res) => {
  res.json({ message: 'Hello, API!' });
};

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = new User({ username, email });
    await user.save();
    res.json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  sayHello,
  createUser,
};
