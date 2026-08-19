const USERS_URL = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
  const res = await fetch(USERS_URL);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

module.exports = { getUsers };
