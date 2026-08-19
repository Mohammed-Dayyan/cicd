const { getUsers } = require("../services/usersService");

async function getUsersHandler(req, res) {
  try {
    const users = await getUsers();
    res.json(users);
  } catch {
    res.status(502).json({ error: "Upstream API failed" });
  }
}

module.exports = { getUsersHandler };
