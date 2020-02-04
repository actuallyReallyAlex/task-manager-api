const express = require("express");
require("./db/mongoose");

const taskRouter = require("./routers/task");
const userRouter = require("./routers/user");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(taskRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
