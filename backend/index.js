const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {

//   Project ID:
// 46ecd4a1-aac5-40bb-9b43-a91f09eb0ea5
// Private Key:
// de19bac3-a227-43be-9974-fe42a9048996
  const { username } = req.body;
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username:username,secret:username,first_name:username},
      {headers:{"private-key":"de19bac3-a227-43be-9974-fe42a9048996"}}
    )
    return res.status(r.status).json(r.data)
  } catch (err) {
    return res.status(err.status(500)).json("error occured");
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);