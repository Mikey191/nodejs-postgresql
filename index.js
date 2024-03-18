const express = require("express");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.router");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", postRouter);

app.listen(PORT, () => console.log(`server is starting on ${PORT} port`));
