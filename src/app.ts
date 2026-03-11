import express from "express";
import path from "node:path";
import { rootRouter } from "./routes/index.route";

const PORT: number = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", rootRouter);

app.listen(PORT, () => {
  console.log(`Start server: http://localhost:${PORT}`);
});
