require("dotenv").config();
const server = require("./src/app.js");
const port = process.env.PORT || 3001;
// boorar este comentario
server.listen(3001, () => {
  console.log(`Server listening at ${port}`); // eslint-disable-line no-console
});
