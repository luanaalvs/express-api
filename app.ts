import express, { Express, Response, Request } from "express";
import "dotenv/config";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});
